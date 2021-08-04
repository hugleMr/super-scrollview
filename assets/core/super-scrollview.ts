/*
 * @Author: steveJobs
 * @Email: icipiqkm@gmail.com
 * @Date: 2021-8-1 01:15:04
 * @Last Modified by: steveJobs
 * @Last Modified time: 2021-8-1 14:35:43
 * @Description: 
 */
import { _decorator, Node, EventTouch, Vec3, Vec2, ScrollView, EventHandler, PageView, EventMouse } from 'cc';
import { SuperLayout } from './super-layout';
const { ccclass, property } = _decorator;
const quintEaseOut = (time: number) => {
    time -= 1;
    return (time * time * time * time * time + 1)
};
const EPSILON = 1e-4
const OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.015
const _tempVec2 = new Vec2()
export enum ScrollViewDirection {
    HORIZONTAL,
    VERTICAL,
    NONE,
}
@ccclass('SuperScrollview')
export class SuperScrollview extends ScrollView {
    private direction: ScrollViewDirection = ScrollViewDirection.NONE
    private _layout!: SuperLayout
    @property({
        tooltip: "注意！向上传递事件只会发送当前滑动相反方向,如果开启horizontal则会发送vertical事件。如果开启vertical则会发送horizontal事件。同时开启horizontal和vertical 不会发送任何事件"
    }) isTransmitEvent: boolean = false
    @property pullRefresh: boolean = false
    @property({
        displayName: "顶部偏移量",
        tooltip: "下拉时超过此偏移会发送下拉事件",
        visible: function () { return (this as any).pullRefresh }
    }) headerOutOffset: number = 200
    @property({
        displayName: "满足触发Header的倍数",
        visible: function () { return (this as any).pullRefresh }
    }) headerMultiple: number = 2
    @property({
        displayName: "底部偏移量",
        tooltip: "上拉时超过此偏移会发送上拉事件",
        visible: function () { return (this as any).pullRefresh }
    }) footerOutOffset: number = 200
    @property({
        displayName: "满足触发Footer的倍数",
        visible: function () { return (this as any).pullRefresh }
    }) footerMultiple: number = 2
    @property({
        type: EventHandler,
        visible: function () { return (this as any).pullRefresh }
    }) headerEvents: EventHandler[] = []
    @property({
        type: EventHandler,
        visible: function () { return (this as any).pullRefresh }
    }) footerEvents: EventHandler[] = []
    prevLocation: Vec2 = new Vec2()
    location: Vec2 = new Vec2()
    set autoScrolling(value: boolean) { this._autoScrolling = value }
    private _touchBeganPosition = new Vec2()
    private _touchEndPosition = new Vec2()
    private isMoveHeader: boolean = false
    private isMoveFooter: boolean = false
    private isLockHeader: boolean = false
    private isLockFooter: boolean = false
    private headerProgress: number = 0
    private footerProgress: number = 0
    onLoad() {
        if (this.layout.autoCenter) {
            this.brake = 0.7
        }
    }
    public onEnable() {
        super.onEnable()
        this.node.on(PageView.EventType.SCROLL_ENG_WITH_THRESHOLD, this.dispatchPageTurningEvent, this)

    }

    public onDisable() {
        super.onDisable()
        this.node.off(PageView.EventType.SCROLL_ENG_WITH_THRESHOLD, this.dispatchPageTurningEvent, this)

    }
    get layout() {
        if (!this._layout) { this._layout = this.content?.getComponent(SuperLayout)! }
        return this._layout
    }
    private isCallSoonFinish: boolean = false
    get curPageIdx() {
        return this.layout["_currPageIndex"]
    }
    getPages() {
        return new Array(this.layout.itemTotal)
    }
    protected _getContentTopBoundary() {
        if (!this._content) {
            return -1
        }
        let offset = this.layout.isOfTopBoundary == 0 ? this._topBoundary : this.layout.isOfTopBoundary
        return offset
    }
    protected _getContentBottomBoundary() {
        if (!this._content) {
            return -1
        }
        let offset = this.layout.isOfButtomBoundary == 0 ? this._bottomBoundary : this.layout.isOfButtomBoundary
        return offset
    }
    protected _getContentLeftBoundary() {
        if (!this._content) {
            return -1
        }
        let offset = this.layout.isOfLeftBoundary == 0 ? this._leftBoundary : this.layout.isOfLeftBoundary
        return offset
    }
    protected _getContentRightBoundary() {
        if (!this._content) {
            return -1
        }
        let offset = this.layout.isOfRightBoundary == 0 ? this._rightBoundary : this.layout.isOfRightBoundary
        return offset
    }
    protected _onTouchBegan(event: EventTouch, captureListeners?: Node[]) {
        this.isCallSoonFinish = false
        this.direction = ScrollViewDirection.NONE
        if (this.layout.isPageView) {
            event.touch!.getUILocation(_tempVec2)
            Vec2.set(this._touchBeganPosition, _tempVec2.x, _tempVec2.y)
        }
        super._onTouchBegan(event, captureListeners)
        if (this.isTransmitEvent) {
            this.transmitEvent(event, Node.EventType.TOUCH_START)
        }
    }
    protected _onTouchMoved(event: EventTouch, captureListeners: any) {
        if (this.isTransmitEvent) {

            if (this.direction == ScrollViewDirection.NONE) {
                var start = event.getStartLocation()
                var curre = event.getLocation()
                var xOffset = Math.abs(start.x - curre.x)
                var yOffset = Math.abs(start.y - curre.y)
                if (xOffset > yOffset) {
                    // 本ScrollView滑动方向过程中达到一定偏移量是也可以向上发送事件
                    // if (this.vertical) {
                    //     if (xOffset - yOffset > 50) {
                    //         this.direction = UIScrollViewDirection.HORIZONTAL
                    //     }
                    // }
                    this.direction = ScrollViewDirection.HORIZONTAL

                } else if (yOffset > xOffset) {
                    // 本ScrollView滑动方向过程中达到一定偏移量是也可以向上发送事件
                    // if (this.horizontal) {
                    //     if (yOffset - xOffset > 50) {
                    //         this.direction = UIScrollViewDirection.VERTICAL
                    //     }
                    // }
                    this.direction = ScrollViewDirection.VERTICAL
                }
            }
            var canTransmit = (this.vertical && this.direction === ScrollViewDirection.HORIZONTAL) || this.horizontal && this.direction == ScrollViewDirection.VERTICAL
            if (canTransmit) {
                this.transmitEvent(event, Node.EventType.TOUCH_MOVE)
                return
            }
        }
        this.prevLocation = event.touch?.getPreviousLocation()!
        this.location = event.touch?.getLocation()!
        super._onTouchMoved(event, captureListeners)
        if (this.pullRefresh) {
            let outOfBoundary = this._getHowMuchOutOfBoundary()
            let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
            if (offset > 0 && !this.isLockHeader && !this.isLockFooter) {
                this.headerProgress = offset < EPSILON ? 0 : offset / this.headerOutOffset
                this.isMoveHeader = this.headerProgress >= this.headerMultiple
                EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: this.headerProgress, stage: this.isMoveHeader ? "wait" : "touch" })
                EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: 0, stage: "release" })
            } else if (offset < 0 && !this.isLockHeader && !this.isLockFooter) {
                this.footerProgress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset
                this.isMoveFooter = this.footerProgress >= this.footerMultiple
                EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: this.footerProgress, stage: this.isMoveFooter ? "wait" : "touch" })
                EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: 0, stage: "release" })
            } else if (offset == 0 && !this.isLockHeader && !this.isLockFooter) {
                this.clearProgress()
            }
        }
    }

    protected _onTouchEnded(event: EventTouch, captureListeners: any) {
        if (this.layout.isPageView) {
            event.touch!.getUILocation(_tempVec2)
            Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y)
        }
        super._onTouchEnded(event, captureListeners)
        if (this.isTransmitEvent) {
            this.transmitEvent(event, Node.EventType.TOUCH_END)
        }
    }

    protected _onTouchCancelled(event: EventTouch, captureListeners: any) {
        if (this.layout.isPageView) {
            event.touch!.getUILocation(_tempVec2)
            Vec2.set(this._touchEndPosition, _tempVec2.x, _tempVec2.y)
        }
        super._onTouchCancelled(event, captureListeners)
        if (this.isTransmitEvent) {
            this.transmitEvent(event, Node.EventType.TOUCH_CANCEL)
        }
    }
    protected _processAutoScrolling(dt: number) {
        const isAutoScrollBrake = this._isNecessaryAutoScrollBrake()
        const brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1
        this._autoScrollAccumulatedTime += dt * (1 / brakingFactor);
        let percentage = Math.min(1, this._autoScrollAccumulatedTime / this._autoScrollTotalTime)
        if (this._autoScrollAttenuate) {
            percentage = quintEaseOut(percentage)
        }
        const clonedAutoScrollTargetDelta = this._autoScrollTargetDelta.clone()
        clonedAutoScrollTargetDelta.multiplyScalar(percentage)
        const clonedAutoScrollStartPosition = this._autoScrollStartPosition.clone()
        clonedAutoScrollStartPosition.add(clonedAutoScrollTargetDelta);
        let reachedEnd = Math.abs(percentage - 1) <= EPSILON;

        const fireEvent = Math.abs(percentage - 1) <= this.getScrollEndedEventTiming()
        if (fireEvent && !this._isScrollEndedWithThresholdEventFired) {
            this._dispatchEvent(ScrollView.EventType.SCROLL_ENG_WITH_THRESHOLD)
            this._isScrollEndedWithThresholdEventFired = true;
        }
        if (this.elastic) {
            const brakeOffsetPosition = clonedAutoScrollStartPosition.clone()
            brakeOffsetPosition.subtract(this._autoScrollBrakingStartPosition)
            if (isAutoScrollBrake) {
                brakeOffsetPosition.multiplyScalar(brakingFactor)
            }
            clonedAutoScrollStartPosition.set(this._autoScrollBrakingStartPosition)
            clonedAutoScrollStartPosition.add(brakeOffsetPosition)
        } else {
            const moveDelta = clonedAutoScrollStartPosition.clone()
            moveDelta.subtract(this.getContentPosition())
            const outOfBoundary = this._getHowMuchOutOfBoundary(moveDelta)
            if (!outOfBoundary.equals(Vec3.ZERO, EPSILON)) {
                clonedAutoScrollStartPosition.add(outOfBoundary)
                reachedEnd = true;
            }
        }
        if (reachedEnd) {
            this._autoScrolling = false;
        }
        const deltaMove = clonedAutoScrollStartPosition.clone()
        deltaMove.subtract(this.getContentPosition());
        this._clampDelta(deltaMove);
        /** 重写这个方法的主要原因是插入以下逻辑  功能用于自动居中 其他并未改动 */
        if (this.layout.vertical && Math.abs(deltaMove.y) <= 2 && !this.isCallSoonFinish) {
            this.layout["soonFinish"]()
            this.isCallSoonFinish = true
        } else if (!this.layout.vertical && Math.abs(deltaMove.x) <= 2 && !this.isCallSoonFinish) {
            this.layout["soonFinish"]()
            this.isCallSoonFinish = true
        }
        this._moveContent(deltaMove, reachedEnd);
        this._dispatchEvent(ScrollView.EventType.SCROLLING)
        if (!this._autoScrolling) {
            this._isBouncing = false;
            this._scrolling = false;
            this._dispatchEvent(ScrollView.EventType.SCROLL_ENDED)
        }
    }

    scrollToAny(moveDelta: Vec3, timeInSecond?: number, attenuated: boolean = true) {
        if (timeInSecond) {

            this._startAutoScroll(moveDelta, timeInSecond, attenuated)
        } else {
            this._moveContent(moveDelta)
        }
    }
    release() {
        this.isMoveHeader = false
        this.isMoveFooter = false
        if (this.isLockHeader || this.isLockFooter) {
            this.vertical && this.isLockHeader && (this._topBoundary += this.headerOutOffset)
            this.vertical && this.isLockFooter && (this._bottomBoundary -= this.footerOutOffset)
            this.horizontal && this.isLockHeader && (this._leftBoundary -= this.headerOutOffset)
            this.horizontal && this.isLockFooter && (this._rightBoundary += this.footerOutOffset)
            this.clearProgress()
            this.layout["onPositionChanged"]()
            this.isLockHeader = false
            this.isLockFooter = false
            this.startAutoScroll()
        }
    }
    startAutoScroll() {
        this._autoScrolling = true
        this._outOfBoundaryAmountDirty = true
    }
    protected _startAutoScroll(deltaMove: any, timeInSecond: any, attenuated: any) {
        if (this.pullRefresh) {  // 如果没有刷新/加载的监听者 则不计算 
            if (this.isMoveHeader && !this.isLockHeader) {
                if (this.vertical) {
                    this._topBoundary -= this.headerOutOffset
                    deltaMove.y -= this.headerOutOffset
                }
                if (this.horizontal) {
                    this._leftBoundary += this.headerOutOffset
                    deltaMove.x += this.headerOutOffset
                }
                this.isLockHeader = true
                EventHandler.emitEvents(this.headerEvents, this, { action: true, progress: this.headerProgress, stage: 'lock' })
            } else if (this.isMoveFooter && !this.isLockFooter) {
                if (this.vertical) {
                    this._bottomBoundary += this.footerOutOffset
                    deltaMove.y += this.footerOutOffset
                }
                if (this.horizontal) {
                    this._rightBoundary -= this.footerOutOffset
                    deltaMove.x -= this.footerOutOffset
                }
                this.isLockFooter = true
                EventHandler.emitEvents(this.footerEvents, this, { action: true, progress: this.footerProgress, stage: 'lock' })
            }
        }
        super._startAutoScroll(deltaMove, timeInSecond, attenuated)
    }
    protected _updateScrollBar(outOfBoundary: any) {
        super._updateScrollBar(new Vec2(outOfBoundary.x, outOfBoundary.y))
        if (this._autoScrollBraking) return // 自动回弹时不计算 （非手动）
        if (!this._autoScrolling) return // 非自动滚动时不计算 
        if (!this.pullRefresh) return
        let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x
        if (offset > 0) { // 下滑
            let progress = offset < EPSILON ? 0 : offset / this.headerOutOffset //根据参数 headerOutOffset 计算当前下滑的办百分比
            if (this.isLockHeader) {
                this.headerProgress = this.headerProgress == 1 ? this.headerProgress : Math.max(progress, 1)
                EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: this.headerProgress, stage: "lock" })
            } else {
                this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress
                EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: this.headerProgress, stage: "release" })
            }
        } else if (offset < 0) {
            let progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset  //根据参数 footerOutOffset 计算当前下滑的办百分比
            if (this.isLockFooter) {
                this.footerProgress = this.footerProgress == 1 ? this.footerProgress : Math.max(progress, 1)
                EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: this.footerProgress, stage: "lock" })
            } else {
                this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress
                EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: this.footerProgress, stage: "release" })
            }
        } else if (offset == 0) {
            // 正常滑动时 如果没有锁定头和尾时 释放所有进度
            if (!this.isLockHeader && !this.isLockFooter) {
                this.clearProgress()
            }
        }
    }
    private clearProgress() {
        EventHandler.emitEvents(this.headerEvents, this, { action: false, progress: 0, stage: "release" })
        EventHandler.emitEvents(this.footerEvents, this, { action: false, progress: 0, stage: "release" })
    }
    private dispatchPageTurningEvent() {
        if (this.layout["_lastPageIndex"] === this.layout["_currPageIndex"]) return
        this.layout["_lastPageIndex"] = this.layout["_currPageIndex"]
        EventHandler.emitEvents(this.layout.pageEvents, this, PageView.EventType.PAGE_TURNING)
        this.node.emit(PageView.EventType.PAGE_TURNING, this)
    }

    protected _handleReleaseLogic(touch: any) {
        if (this.layout.isPageView) {
            this._autoScrollToPage();
            if (this._scrolling) {
                this._scrolling = false;
                if (!this._autoScrolling) {
                    this._dispatchEvent(ScrollView.EventType.SCROLL_ENDED);
                }
            }
        } else {
            super._handleReleaseLogic(touch)
        }

    }
    protected _autoScrollToPage() {
        const bounceBackStarted = this._startBounceBackIfNeeded();
        if (bounceBackStarted) {
            const bounceBackAmount = this._getHowMuchOutOfBoundary()
            this._clampDelta(bounceBackAmount)
            if (bounceBackAmount.x > 0 || bounceBackAmount.y < 0) {
                if (this.layout.horizontal) {
                    if (this.layout.horizontalAxisDirection == SuperLayout.HorizontalAxisDirection.LEFT_TO_RIGHT) {
                        this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1
                    } else {
                        this.layout["_currPageIndex"] = 0
                    }
                } else {
                    if (this.layout.verticalAxisDirection == SuperLayout.VerticalAxisDirection.TOP_TO_BOTTOM) {
                        this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1
                    } else {
                        this.layout["_currPageIndex"] = 0
                    }
                }
            }
            if (bounceBackAmount.x < 0 || bounceBackAmount.y > 0) {
                if (this.layout.horizontal) {
                    if (this.layout.horizontalAxisDirection == SuperLayout.HorizontalAxisDirection.LEFT_TO_RIGHT) {
                        this.layout["_currPageIndex"] = 0
                    } else {
                        this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1
                    }
                } else {
                    if (this.layout.verticalAxisDirection == SuperLayout.VerticalAxisDirection.TOP_TO_BOTTOM) {
                        this.layout["_currPageIndex"] = 0
                    } else {
                        this.layout["_currPageIndex"] = this.layout.itemTotal === 0 ? 0 : this.layout.itemTotal - 1
                    }
                }
            }
            if (this.layout.indicator) {
                this.layout.indicator._changedState()
            }
        } else {
            const moveOffset = new Vec2()
            Vec2.subtract(moveOffset, this._touchBeganPosition, this._touchEndPosition)
            const index = this.layout["_currPageIndex"]
            var nextIndex = index + this.getDragDirection(moveOffset)
            var timeInSecond = this.layout.pageTurningSpeed * Math.abs(index - nextIndex)
            if (this.layout.footerLoop) {
                if (nextIndex >= this.layout.itemTotal) {
                    nextIndex = 0
                }
            }
            if (this.layout.headerLoop) {
                if (nextIndex < 0) {
                    nextIndex = this.layout.itemTotal - 1
                }
            }
            const count = this.layout.itemTotal
            if (nextIndex < count) {
                if (this.isScrollable(moveOffset, index, nextIndex)) {
                    this.scrollToPage(nextIndex, timeInSecond)
                    return;
                } else {
                    const touchMoveVelocity = this._calculateTouchMoveVelocity()
                    if (this.isQuicklyScrollable(touchMoveVelocity)) {
                        this.scrollToPage(nextIndex, timeInSecond)
                        return;
                    }
                }
            }

            this.scrollToPage(index, timeInSecond)

        }
    }
    savePageIndex(idx: number) {
        if (idx < 0 || idx >= this.layout.itemTotal) {
            return false
        }
        this.layout["_currPageIndex"] = idx
        if (this.layout.indicator) {
            this.layout.indicator._changedState()
        }
        return true
    }
    protected scrollToPage(idx: number, timeInSecond = 0.3) {
        if (idx < 0 || idx >= this.layout.itemTotal) {
            return
        }
        if (this.savePageIndex(idx)) {
            this.layout.scrollToIndex(idx, timeInSecond)
        }
    }
    // 快速滑动
    protected isQuicklyScrollable(touchMoveVelocity: Vec3) {
        if (this.horizontal) {
            if (Math.abs(touchMoveVelocity.x) > this.layout.autoPageTurningThreshold) {
                return true;
            }
        } else if (this.vertical) {
            if (Math.abs(touchMoveVelocity.y) > this.layout.autoPageTurningThreshold) {
                return true;
            }
        }
        return false;
    }
    protected getDragDirection(moveOffset: Vec2) {
        if (this.horizontal) {
            if (moveOffset.x === 0) {
                return 0;
            }
            if (this.layout.horizontalAxisDirection == SuperLayout.HorizontalAxisDirection.LEFT_TO_RIGHT) {
                return (moveOffset.x > 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal);
            } else {
                return (moveOffset.x < 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal);
            }
        } else {
            // 由于滚动 Y 轴的原点在在右上角所以应该是小于 0
            if (moveOffset.y === 0) {
                return 0;
            }
            if (this.layout.verticalAxisDirection == SuperLayout.VerticalAxisDirection.TOP_TO_BOTTOM) {
                return (moveOffset.y < 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal);
            } else {
                return (moveOffset.y > 0 ? this.layout.groupItemTotal : -this.layout.groupItemTotal);
            }
        }
    }
    // 是否超过自动滚动临界值
    protected isScrollable(offset: Vec2, index: number, nextIndex: number) {
        const viewTrans = this.view
        if (!viewTrans) {
            return false
        }
        if (this.horizontal) {
            return Math.abs(offset.x) >= viewTrans.width * this.layout.scrollThreshold
        } else if (this.vertical) {
            return Math.abs(offset.y) >= viewTrans.height * this.layout.scrollThreshold
        }
        return false;
    }
    protected transmitEvent(event: EventTouch, eventType: string) {
        var e = new EventTouch(event.getTouches(), event.bubbles)
        e.type = eventType
        e.touch = event.touch
        let target: any = event.target!
        target.parent.dispatchEvent(e)
    }
}
