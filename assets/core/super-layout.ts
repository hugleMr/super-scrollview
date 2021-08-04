/*
 * @Author: steveJobs
 * @Email: icipiqkm@gmail.com
 * @Date: 2021-8-1 01:15:04
 * @Last Modified by: steveJobs
 * @Last Modified time: 2021-8-1 14:35:43
 * @Description: 
 */
import { _decorator, Component, Node, ccenum, UITransform, SystemEventType, director, Vec3, EventHandler, instantiate, Prefab, Size, Vec2, size, ScrollView, PageView, PageViewIndicator } from 'cc';
import { SuperScrollview } from './super-scrollview';
const { ccclass, property, requireComponent } = _decorator;
const EPSILON = 1e-4
enum Type {
    HORIZONTAL = 0,
    VERTICAL = 1,
}
ccenum(Type)
enum VerticalAxisDirection {
    TOP_TO_BOTTOM = 0,
    BOTTOM_TO_TOP = 1
}
ccenum(VerticalAxisDirection)
enum HorizontalAxisDirection {
    LEFT_TO_RIGHT = 0,
    RIGHT_TO_LEFT = 1
}
ccenum(HorizontalAxisDirection)
enum ScrollDirection {
    NONE = 0,
    HEADER = 1,
    FOOTER = 2,
}

enum IndexVerticalAxisDirection {
    TOP = 0,
    BOTTOM = 1,
}
ccenum(IndexVerticalAxisDirection)
enum IndexHorizontalAxisDirection {
    LEFT = 0,
    RIGHT = 1
}
ccenum(IndexHorizontalAxisDirection)
@ccclass('SuperLayout')
@requireComponent(UITransform)
export class SuperLayout extends Component {
    static VerticalAxisDirection = VerticalAxisDirection
    static HorizontalAxisDirection = HorizontalAxisDirection

    @property(SuperScrollview) scrollView!: SuperScrollview
    @property(UITransform) view!: UITransform
    @property(Prefab) prefab!: Prefab
    @property({ type: Type }) layoutType: Type = Type.VERTICAL
    @property({
        type: IndexVerticalAxisDirection,
        visible: function () { return (this as any).layoutType == Type.VERTICAL && !(this as any).autoCenter }
    }) indexVerticalAxisDirection = IndexVerticalAxisDirection.TOP
    @property({
        type: IndexHorizontalAxisDirection,
        visible: function () { return (this as any).layoutType == Type.HORIZONTAL && !(this as any).autoCenter }
    }) indexHorizontalAxisDirection = IndexHorizontalAxisDirection.LEFT
    @property({ type: VerticalAxisDirection }) verticalAxisDirection = VerticalAxisDirection.TOP_TO_BOTTOM
    @property({ type: HorizontalAxisDirection }) horizontalAxisDirection = HorizontalAxisDirection.LEFT_TO_RIGHT

    @property({ tooltip: "最小值=1，大于1就是Grid模式" }) groupItemTotal: number = 1
    @property({ tooltip: "决定最多创建Prefab的数量" }) multiple: number = 2
    @property({ tooltip: "顶部填充" }) paddingTop: number = 0
    @property({ tooltip: "底部填充" }) paddingBottom: number = 0
    @property({ tooltip: "左侧填充" }) paddingLeft: number = 0
    @property({ tooltip: "右侧填充" }) paddingRight: number = 0
    @property({ tooltip: "横轴间距" }) spacingX: number = 0
    @property({ tooltip: "纵轴间距" }) spacingY: number = 0
    @property({ tooltip: "计算缩放后的尺寸" }) affectedByScale: boolean = false

    @property({ tooltip: "开启翻页模式" }) isPageView: boolean = false
    @property({
        tooltip: "每个页面翻页时所需时间。单位：秒",
        visible: function () { return (this as any).isPageView }
    }) pageTurningSpeed = 0.3
    @property({
        type: PageViewIndicator,
        visible: function () { return (this as any).isPageView }
    }) indicator!: PageViewIndicator
    @property({
        slide: true,
        range: [0, 1, 0.01],
        tooltip: "滚动临界值，默认单位百分比，当拖拽超出该数值时，松开会自动滚动下一页，小于时则还原",
        visible: function () { return (this as any).isPageView }
    }) scrollThreshold = 0.5
    @property({
        tooltip: "快速滑动翻页临界值。当用户快速滑动时，会根据滑动开始和结束的距离与时间计算出一个速度值,该值与此临界值相比较，如果大于临界值，则进行自动翻页",
        visible: function () { return (this as any).isPageView }
    }) autoPageTurningThreshold = 100
    @property({
        type: EventHandler,
        visible: function () { return (this as any).isPageView }
    }) pageEvents: EventHandler[] = []


    @property({
        tooltip: "开启自动居中",
        visible: function () { return !(this as any).isPageView }
    }) autoCenter: boolean = false
    @property({
        tooltip: "自动居中的滚动时间",
        visible: function () { return (this as any).autoCenter }
    }) centerTime: number = 1
    @property({
        type: Node,
        tooltip: "自动居中的参考节点，如果为空、则默认选择View中心",
        visible: function () { return (this as any).autoCenter }
    }) centerNode!: Node
    @property({
        type: Vec2,
        tooltip: "自动居中时、Item的居中锚点",
        visible: function () { return (this as any).autoCenter }
    }) centerAnchor: Vec2 = new Vec2(.5, .5)

    @property({ tooltip: "上/左 无限循环" }) headerLoop: boolean = false
    @property({ tooltip: "下/右 无限循环" }) footerLoop: boolean = false
    @property(EventHandler) refreshItemEvents: EventHandler[] = []
    private _currPageIndex: number = 0
    get currPageIndex() {
        return this._currPageIndex
    }
    private _lastPageIndex: number = 0
    get lastPageIndex() {
        return this._lastPageIndex
    }
    private isRestart: boolean = false
    /** 当前滚动方向 */
    private scrollDirection: ScrollDirection = ScrollDirection.NONE
    /** 是否垂直滚动 */
    get vertical(): boolean { return this.layoutType == Type.VERTICAL }
    /** 是否水平滚动 */
    get horizontal(): boolean { return this.layoutType == Type.HORIZONTAL }
    get transform(): UITransform | null { return this.node._uiProps.uiTransformComp }
    /** View 可容纳的宽度 */
    get accommodWidth() {
        return this.view.width - this.paddingLeft - this.paddingRight
    }
    /** View 可容纳的高度 */
    get accommodHeight() {
        return this.view.height - this.paddingTop - this.paddingBottom
    }
    /** 头部的节点 */
    get header(): UITransform | null {
        if (this.node.children.length == 0) return null
        return this.node.children[0]._uiProps.uiTransformComp
    }
    /** 底部的节点 */
    get footer(): UITransform | null {
        if (this.node.children.length == 0) return null
        return this.node.children[this.node.children.length - 1]._uiProps.uiTransformComp
    }
    /** 头部索引 */
    get headerIndex(): number {
        if (!this.header) return -1
        let node: any = this.header.node
        return node["__index"]
    }
    /** 底部索引 */
    get footerIndex(): number {
        if (!this.footer) return -1
        let node: any = this.footer.node
        return node["__index"]
    }
    /** Item起始位置 */
    get viewStartPoint(): Vec3 {
        let pos = new Vec3()
        if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            pos.x = this.view.width * -0.5 + this.paddingLeft
        } else {
            pos.x = this.view.width * 0.5 - this.paddingRight
        }
        if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            pos.y = this.view.height * 0.5 - this.paddingTop
        } else {
            pos.y = this.view.height * -0.5 + this.paddingBottom
        }
        return pos
    }
    /** View 头部边界 */
    get viewHeaderBoundary(): number {
        var offset = 0
        if (this.vertical) {
            offset = this.view.height * 0.5
        } else {
            offset = this.view.width * -0.5
        }
        return offset
    }
    /** View 底部边界 */
    get viewFooterBoundary(): number {
        var offset = 0
        if (this.vertical) {
            offset = this.view.height * -0.5
        } else {
            offset = this.view.width * 0.5
        }
        return offset
    }
    /** 头部节点边界 */
    get headerBoundary(): number {
        if (!this.header) return 0
        if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                return this.node.position.y + this.getItemYMax(this.header) + this.paddingTop
            } else {
                return this.node.position.y + this.getItemYMin(this.header) - this.paddingBottom
            }
        } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                return this.node.position.x + this.getItemXMin(this.header) - this.paddingLeft
            } else {
                return this.node.position.x + this.getItemXMax(this.header) + this.paddingRight
            }
        }
    }
    /** 底部节点边界 */
    get footerBoundary(): number {
        if (!this.footer) return 0
        if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                return this.node.position.y + this.getItemYMin(this.footer) - this.paddingBottom
            } else {
                return this.node.position.y + this.getItemYMax(this.footer) + this.paddingTop
            }
        } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                return this.node.position.x + this.getItemXMax(this.footer) + this.paddingRight
            } else {
                return this.node.position.x + this.getItemXMin(this.footer) - this.paddingLeft
            }
        }
    }
    /** 自动居中节点头部边界 */
    get centerHeaderBoundary() {
        let key = this.vertical ? "y" : "x"
        if (this.centerNode) {
            if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                    return this.headerBoundary + (this.viewHeaderBoundary - (this.centerNode.position as any)[key])
                } else {
                    return this.footerBoundary + (this.viewHeaderBoundary - (this.centerNode.position as any)[key])
                }
            } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                    return this.headerBoundary + (this.viewHeaderBoundary - (this.centerNode.position as any)[key])
                } else {
                    return this.footerBoundary + (this.viewHeaderBoundary - (this.centerNode.position as any)[key])
                }
            }
        } else {
            if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                    return this.headerBoundary + (this.viewHeaderBoundary - (this.view.node.position as any)[key])
                } else {
                    return this.footerBoundary + (this.viewHeaderBoundary - (this.view.node.position as any)[key])
                }
            } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                    return this.headerBoundary + (this.viewHeaderBoundary - (this.view.node.position as any)[key])
                } else {
                    return this.footerBoundary + (this.viewHeaderBoundary - (this.view.node.position as any)[key])
                }
            }

        }
    }
    /** 自动居中节点底部边界 */
    get centerFooterBoundary() {
        let key = this.vertical ? "y" : "x"
        if (this.centerNode) {
            if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                    return this.footerBoundary + (this.viewFooterBoundary - (this.centerNode.position as any)[key])
                } else {
                    return this.headerBoundary + (this.viewFooterBoundary - (this.centerNode.position as any)[key])
                }
            } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                    return this.footerBoundary + (this.viewFooterBoundary - (this.centerNode.position as any)[key])
                } else {
                    return this.headerBoundary + (this.viewFooterBoundary - (this.centerNode.position as any)[key])
                }
            }
        } else {
            if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                    return this.footerBoundary + (this.viewFooterBoundary - (this.view.node.position as any)[key])
                } else {
                    return this.headerBoundary + (this.viewFooterBoundary - (this.view.node.position as any)[key])
                }
            } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                    return this.footerBoundary + (this.viewFooterBoundary - (this.view.node.position as any)[key])
                } else {
                    return this.headerBoundary + (this.viewFooterBoundary - (this.view.node.position as any)[key])
                }
            }
        }
    }
    /** 是否超出左侧边界 */
    get isOfLeftBoundary(): number {
        if (this.vertical) return 0
        if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.HEADER) {
                return this.centerHeaderBoundary
            }
            return 0
        }
        if (this.headerLoop) {
            if (this.header) return 0
            return this.viewHeaderBoundary + this.node.position.x
        }

        if (!this.header || this.fixedItemWidth <= this.view.width) {
            return this.viewHeaderBoundary + this.node.position.x
        }
        if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (this.headerIndex == 0) {
                return this.headerBoundary
            }
        } else {
            if (this.footerIndex == this.itemTotal - 1) {
                return this.footerBoundary
            }
        }
        return 0
    }
    /** 是否超出顶部边界 */
    get isOfTopBoundary(): number {
        if (!this.vertical) return 0
        if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.HEADER) {
                return this.centerHeaderBoundary
            }
            return 0
        }
        if (this.headerLoop) {
            if (this.header) return 0
            return this.viewHeaderBoundary + this.node.position.y
        }
        if (!this.header || this.fixedItemHeight <= this.view.height) {
            return this.viewHeaderBoundary + this.node.position.y
        }
        if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (this.headerIndex == 0) {
                return this.headerBoundary
            }
        } else {
            if (this.footerIndex == this.itemTotal - 1) {
                return this.footerBoundary
            }
        }
        return 0
    }
    /** 是否超出右侧边界 */
    get isOfRightBoundary(): number {
        if (this.vertical) return 0
        if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.FOOTER) {
                return this.centerFooterBoundary
            }
            return 0
        }
        if (this.footerLoop) {
            if (this.footer) return 0
            return this.viewFooterBoundary + this.node.position.x
        }
        if (!this.footer || this.fixedItemWidth <= this.view.width) {
            return this.viewFooterBoundary + this.node.position.x
        }
        if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (this.footerIndex == this.itemTotal - 1) {
                return this.footerBoundary
            }
        } else {
            if (this.headerIndex == 0) {
                return this.headerBoundary
            }
        }
        return 0
    }
    /** 是否超出底部边界 */
    get isOfButtomBoundary(): number {
        if (!this.vertical) return 0
        if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.FOOTER) {
                return this.centerFooterBoundary
            }
            return 0
        }
        if (this.footerLoop) {
            if (this.footer) return 0
            return this.viewFooterBoundary + this.node.position.y
        }
        if (!this.footer || this.fixedItemHeight <= this.view.height) {
            return this.viewFooterBoundary + this.node.position.y
        }
        if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (this.footerIndex == this.itemTotal - 1) {
                return this.footerBoundary
            }
        } else {
            if (this.headerIndex == 0) {
                return this.headerBoundary
            }
        }
        return 0
    }
    /** 从头部到底部的所有Item高度总和 */
    get fixedItemHeight(): number {
        if (!this.header) return 0
        if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            return Math.abs(this.getItemYMax(this.header)) + Math.abs(this.getItemYMin(this.footer))
        } else {
            return Math.abs(this.getItemYMin(this.header)) + Math.abs(this.getItemYMax(this.footer))
        }
    }
    /** 从头部到底部的所有Item宽度总和 */
    get fixedItemWidth(): number {
        if (!this.header) return 0
        if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            return Math.abs(this.getItemXMin(this.header)) + Math.abs(this.getItemXMax(this.footer))
        } else {
            return Math.abs(this.getItemXMax(this.header)) + Math.abs(this.getItemXMin(this.footer))
        }
    }
    /** 返回 header到 footer 之间的整体尺寸 如果Item数量不足以撑开View 则返回View尺寸 最小值是View尺寸 */
    get contentSize(): Size {
        if (this.node.children.length == 0) return this.view.contentSize
        let size = new Size(this.view.contentSize.width, this.view.contentSize.height)
        if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                size.height = this.headerBoundary + -this.footerBoundary
            } else {
                size.height = this.footerBoundary + -this.headerBoundary
            }
        } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                size.width = this.footerBoundary + -this.headerBoundary
            } else {
                size.width = this.headerBoundary + -this.footerBoundary
            }
        }
        if (size.width < this.view.contentSize.width) {
            size.width = this.view.contentSize.width
        }
        if (size.height < this.view.contentSize.height) {
            size.height = this.view.contentSize.height
        }
        return size
    }
    private selfHorW: number = 0
    private prevPos: Vec3 = new Vec3(0, 0, 0)
    private _maxPrefabTotal: number = 0
    /** 已被创建的Item数量 */
    get maxPrefabTotal(): number { return this._maxPrefabTotal }
    private currentCreateItemTotal: number = 0
    private _itemTotal: number = 0
    /** 数据长度 */
    get itemTotal(): number { return this._itemTotal }
    private gener!: Generator
    private _centerPosition!: Vec3
    /** 自动居中的参考位置 */
    get centerPosition(): Vec3 {
        if (!this._centerPosition) {
            this._centerPosition = new Vec3()
            if (this.autoCenter) {
                if (this.centerNode) {
                    let worldPos = this.centerNode.parent?._uiProps.uiTransformComp?.convertToWorldSpaceAR(this.centerNode.position)!
                    this._centerPosition = this.view.convertToNodeSpaceAR(worldPos)
                }
            } else {
                if (this.vertical) {
                    if (this.indexVerticalAxisDirection == IndexVerticalAxisDirection.TOP) {
                        this._centerPosition.y = this.viewHeaderBoundary
                    } else {
                        this._centerPosition.y = this.viewFooterBoundary
                    }
                } else {
                    if (this.indexHorizontalAxisDirection == IndexHorizontalAxisDirection.LEFT) {
                        this._centerPosition.x = this.viewHeaderBoundary
                    } else {
                        this._centerPosition.x = this.viewFooterBoundary
                    }
                }
            }
        }
        return this._centerPosition
    }
    onLoad() {
        this.transform?.setAnchorPoint(new Vec2(.5, .5))
        this.transform?.setContentSize(this.view.contentSize)
        this.node.setPosition(Vec3.ZERO)
        if (this.isPageView) this.autoCenter = false
        this.scrollView.view?.node.on(Node.EventType.SIZE_CHANGED, this.onViewSizeChange, this)
        Object.defineProperty(this.transform, "contentSize", { get: () => this.contentSize })
        Object.defineProperty(this.transform, "width", { get: () => this.contentSize.width })
        Object.defineProperty(this.transform, "height", { get: () => this.contentSize.height })
    }
    onEnable() {
        this.addEventListener()
    }
    onDisable() {
        this.removeEventListener()
    }
    /** 更新item数量 */
    async total(count: number) {
        this.currentCreateItemTotal = count
        await this.createItems(count)
        let offset = count - this.itemTotal
        this._itemTotal = count
        this.refreshItems(offset)
        this.scrollView.release()
        if (this.indicator) {
            this.indicator.setPageView((this.scrollView as any));
        }
    }
    /** 自动居中到最近Item */
    scrollToCenter() {
        this.soonFinish()
    }
    /** 滚动到头部 */
    scrollToHeader(timeInSecond?: number) {
        var headerOrFooter = 0
        if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                headerOrFooter = this.viewHeaderBoundary
            } else {
                headerOrFooter = this.viewFooterBoundary
            }
        } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                headerOrFooter = this.viewHeaderBoundary
            } else {
                headerOrFooter = this.viewFooterBoundary
            }
        }
        this.scrollToIndex(0, timeInSecond, new Vec3(headerOrFooter, headerOrFooter))
    }
    /** 滚动到尾部 */
    scrollToFooter(timeInSecond?: number) {
        var headerOrFooter = 0
        if (this.vertical) {
            if (this.fixedItemHeight < this.view.height) return
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                headerOrFooter = this.viewFooterBoundary
            } else {
                headerOrFooter = this.viewHeaderBoundary
            }
        } else {
            if (this.fixedItemWidth < this.view.width) return
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                headerOrFooter = this.viewFooterBoundary
            } else {
                headerOrFooter = this.viewHeaderBoundary
            }
        }
        this.scrollToIndex(this.itemTotal - 1, timeInSecond, new Vec3(headerOrFooter, headerOrFooter), true)
    }
    private isNearFooter(index: number) {
        let nearFooter = false
        let flag = index > this.footerIndex && index < this.headerIndex
        if (flag) {
            let result = Math.abs(index - this.headerIndex) < Math.abs(index - this.footerIndex)
            if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                    nearFooter = !result
                } else {
                    nearFooter = result
                }
            } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                    nearFooter = !result
                } else {
                    nearFooter = result
                }
            }
        } else if (index > this.footerIndex) {
            if (this.vertical) {
                nearFooter = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? true : false
            } else {
                nearFooter = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? true : false
            }
        } else if (index < this.headerIndex) {
            if (this.vertical) {
                nearFooter = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? false : true
            } else {
                nearFooter = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? false : true
            }
        }
        return nearFooter
    }
    private getFooterOffset(index: number) {
        let footerOffset = this.footerIndex % this.groupItemTotal
        let indexOffset = index % this.groupItemTotal
        return indexOffset - footerOffset + this.groupItemTotal
    }
    private getHeaderOffset(index: number) {
        let headerOffset = this.headerIndex % this.groupItemTotal
        let indexOffset = index % this.groupItemTotal
        return headerOffset - indexOffset + this.groupItemTotal
    }
    private offsetToHeader(index: number) {
        var offset = 0
        if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                offset = this.getHeaderOffset(index)
            } else {
                offset = this.getFooterOffset(index)
            }
        } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                offset = this.getHeaderOffset(index)
            } else {
                offset = this.getFooterOffset(index)
            }
        }
        for (let i = 0; i < offset; i++) {
            this.pushToHeader(true)
        }
    }
    private offsetToFooter(index: number) {
        var offset = 0
        if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                offset = this.getFooterOffset(index)
            } else {
                offset = this.getHeaderOffset(index)
            }
        } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                offset = this.getFooterOffset(index)
            } else {
                offset = this.getHeaderOffset(index)
            }
        }
        for (let i = 0; i < offset; i++) {
            this.pushToFooter(true)
        }
    }
    private resetIndexStartToEnd(index: number) {
        for (let i = 0; i < this.node.children.length; i++) {
            const child: any = this.node.children[i];
            child["__index"] = index
            index++
            if (this.headerLoop || this.footerLoop) {
                if (index >= this.itemTotal) {
                    index = 0
                }
            }
            this.notifyRefreshItem(child)
        }
    }
    private resetIndexEndToStart(index: number) {
        for (let i = this.node.children.length - 1; i >= 0; i--) {
            const child: any = this.node.children[i];
            child["__index"] = index
            index--
            if (this.headerLoop || this.footerLoop) {
                if (index < 0) {
                    index = this.itemTotal - 1
                }
            }
            this.notifyRefreshItem(child)
        }
    }
    /** 跳转到指定索引位置 */
    scrollToIndex(index: number, timeInSecond?: number, boundary?: Vec3, reverse: boolean = false) {
        if (isNaN(index) || index < 0 || index > this.itemTotal - 1) return
        this.scrollView.stopAutoScroll()
        if (this.isPageView) {
            this.scrollView.savePageIndex(index)
        }
        var child = this.node.children.find((item: any) => item["__index"] == index)
        var nearFooter = false
        if (!child) {
            nearFooter = this.isNearFooter(index)
            var flag = this.vertical && this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM || !this.vertical && this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT
            if (nearFooter) {
                this.offsetToFooter(index)
                flag ? this.resetIndexEndToStart(index) : this.resetIndexStartToEnd(index)
            } else {
                this.offsetToHeader(index)
                flag ? this.resetIndexStartToEnd(index) : this.resetIndexEndToStart(index)
            }
            child = this.node.children.find((item: any) => item["__index"] == index)
        }
        if (!child) return
        let itemPos = child.getPosition().clone()
        if (!this.autoCenter) {
            if (this.vertical) {
                if (this.indexVerticalAxisDirection == IndexVerticalAxisDirection.TOP) {
                    if (!reverse) {
                        itemPos.y = this.getItemYMax(child._uiProps.uiTransformComp!) + this.paddingTop
                    } else {
                        itemPos.y = this.getItemYMin(child._uiProps.uiTransformComp!) - this.paddingBottom
                    }
                } else {
                    if (!reverse) {
                        itemPos.y = this.getItemYMin(child._uiProps.uiTransformComp!) - this.paddingBottom
                    } else {
                        itemPos.y = this.getItemYMax(child._uiProps.uiTransformComp!) + this.paddingTop
                    }
                }
            } else {
                if (this.indexHorizontalAxisDirection == IndexHorizontalAxisDirection.LEFT) {
                    if (!reverse) {
                        itemPos.x = this.getItemXMin(child._uiProps.uiTransformComp!) - this.paddingLeft
                    } else {
                        itemPos.x = this.getItemXMax(child._uiProps.uiTransformComp!) + this.paddingRight
                    }
                } else {
                    if (!reverse) {
                        itemPos.x = this.getItemXMax(child._uiProps.uiTransformComp!) + this.paddingRight
                    } else {
                        itemPos.x = this.getItemXMin(child._uiProps.uiTransformComp!) - this.paddingLeft
                    }
                }
            }
        }
        let worldPos = this.transform?.convertToWorldSpaceAR(itemPos)!
        let localPos = this.view.convertToNodeSpaceAR(worldPos)
        let multiple
        if (!this.autoCenter && boundary) {
            multiple = boundary
        } else {
            multiple = this.getCenterAnchor(child._uiProps.uiTransformComp!, this.centerPosition)
        }
        localPos.multiply(new Vec3(-1, -1, 1)).add(multiple)
        this.scrollView.scrollToAny(localPos, timeInSecond, true)
    }
    protected async onViewSizeChange() {
        this.isRestart = true
        if (this.selfHorW > 0 && this.currentCreateItemTotal > 0) {
            // 当尺寸改变时 重新计算prefab的数量
            var viewHorW = this.vertical ? this.view.height : this.view.width
            if (this.selfHorW < viewHorW * this.multiple) {
                await this.createItems(this.currentCreateItemTotal, true)
                this.scrollToHeader()
            }
        }
        for (let i = 0; i < this.node.children.length; i++) {
            const child: any = this.node.children[i];
            const transform = child._uiProps.uiTransformComp!
            this.setAndSaveSizeAndScale(transform)
        }
        this.resetChilds(true)
        this.isRestart = false
    }
    protected setAndSaveSizeAndScale(item: UITransform) {
        item.setContentSize(this.getItemSize(item));
        (item.node as any)["__size"] = item.contentSize.clone();
        (item.node as any)["__scale"] = item.node.getScale().clone();
    }
    /** 根据centerAnchor计算自动居中的真实位置 */
    protected getCenterAnchor(item: UITransform, center: Vec3) {
        var pos = center.clone()
        if (this.vertical) {
            let anchor = item.height! * this.centerAnchor.y
            let origin = item.height! * item.anchorY!
            pos.y -= anchor - origin
        } else {
            let anchor = item.width! * this.centerAnchor.x
            let origin = item.width! * item.anchorX!
            pos.x += anchor - origin
        }
        return pos
    }
    /** 滚动即将结束时 跑自动居中的逻辑 */
    protected soonFinish() {
        if (!this.autoCenter) return
        this.scrollView.stopAutoScroll()
        var findedPos = new Vec3(999999, 999999)
        for (let i = 0; i < this.node.children.length; i++) {
            const child = this.node.children[i];
            let worldPos = this.transform?.convertToWorldSpaceAR(child.position)!
            let localPos = this.view.convertToNodeSpaceAR(worldPos)
            let map = { width: false, height: false }

            var multiple = this.getCenterAnchor(child._uiProps.uiTransformComp!, this.centerPosition)

            let newLocalPos = localPos.subtract(multiple)
            map.width = Math.abs(newLocalPos.x) < Math.abs(findedPos.x)
            map.height = Math.abs(newLocalPos.y) < Math.abs(findedPos.y)
            if (this.vertical && map.height) {
                findedPos = newLocalPos
            } else if (!this.vertical && map.width) {
                findedPos = newLocalPos
            }
        }
        findedPos.multiply(new Vec3(-1, -1, 1))
        this.scrollView.scrollToAny(findedPos, this.centerTime)
    }
    /** 根据groupItemTotal和View可容纳的尺寸 来平均分配Item该有的尺寸 */
    protected getItemSize(item: UITransform): Size {
        let size = new Size()
        if (this.vertical) {
            let spacing = this.spacingX * (this.groupItemTotal - 1)
            size.width = (this.accommodWidth - spacing) / this.groupItemTotal
            size.height = item.height
        } else {
            let spacing = this.spacingY * (this.groupItemTotal - 1)
            size.height = (this.accommodHeight - spacing) / this.groupItemTotal
            size.width = item.width
        }
        return size
    }
    /** 获取Item的YMax */
    protected getItemYMax(item: UITransform | null): number {
        if (!item) return 0
        let height = this.getScaleHeight(item) * (1 - item.anchorY)
        return item.node.position.y + height
    }
    /** 获取Item的YMin */
    protected getItemYMin(item: UITransform | null): number {
        if (!item) return 0
        let height = this.getScaleHeight(item) * item.anchorY
        return item.node.position.y - height
    }
    /** 获取Item的XMax */
    protected getItemXMax(item: UITransform | null): number {
        if (!item) return 0
        let width = this.getScaleWidth(item) * (1 - item.anchorX)
        return item.node.position.x + width
    }
    /** 获取Item的XMin */
    protected getItemXMin(item: UITransform | null): number {
        if (!item) return 0
        let width = this.getScaleWidth(item) * item.anchorX
        return item.node.position.x - width
    }
    /** 获取一组Item中起始位置X */
    protected getStartX(item: UITransform | null): number {
        if (!item) return 0
        var x = 0
        if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            let width = this.getScaleWidth(item) * item.anchorX
            x = this.viewStartPoint.x + width
        } else {
            let width = this.getScaleWidth(item) * (1 - item.anchorX)
            x = this.viewStartPoint.x - width
        }
        return x
    }
    /** 获取一组Item中结束位置X */
    protected getEndX(item: UITransform | null): number {
        if (!item) return 0
        var x = 0
        if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            let width = this.getScaleWidth(item) * (1 - item.anchorX)
            x = -this.viewStartPoint.x - width - this.paddingRight + this.paddingLeft
        } else {
            let width = this.getScaleWidth(item) * item.anchorX
            x = -this.viewStartPoint.x + width + this.paddingLeft - this.paddingRight
        }
        return x
    }
    /** 获取一组Item中起始位置Y */
    protected getStartY(item: UITransform | null): number {
        if (!item) return 0
        var y = 0
        if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            let height = this.getScaleHeight(item) * (1 - item.anchorY)
            y = this.viewStartPoint.y - height
        } else {
            let height = this.getScaleHeight(item) * item.anchorY
            y = this.viewStartPoint.y + height
        }
        return y
    }
    /** 获取一组Item中结束位置Y */
    protected getEndY(item: UITransform | null): number {
        if (!item) return 0
        var y = 0
        if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            let height = this.getScaleHeight(item) * item.anchorY
            y = -this.viewStartPoint.y + height + this.paddingBottom - this.paddingTop
        } else {
            let height = this.getScaleHeight(item) * (1 - item.anchorY)
            y = -this.viewStartPoint.y - height - this.paddingTop + this.paddingBottom
        }
        return y
    }
    /** relative的顶部是否有也容纳空间 */
    protected isAccommodateByTop(relative: UITransform) {
        var max = this.getItemYMax(relative)
        return max + this.paddingTop < this.accommodHeight * 0.5
    }
    /** relative的底部是否有也容纳空间 */
    protected isAccommodateByBottom(relative: UITransform) {
        var min = this.getItemYMin(relative)
        return min - this.paddingBottom > this.accommodHeight * -0.5
    }
    /** relative的左侧是否有也容纳空间 */
    protected isAccommodateByLeft(relative: UITransform) {
        var min = this.getItemXMin(relative)
        return min - this.paddingLeft > this.accommodWidth * -0.5
    }
    /** relative的右侧是否有也容纳空间 */
    protected isAccommodateByRight(relative: UITransform) {
        var max = this.getItemXMax(relative)
        return max + this.paddingRight < this.accommodWidth * 0.5
    }
    /** relative的左侧位置 */
    protected getRelativeByLeft(item: UITransform, relative: UITransform): number {
        var min = this.getItemXMin(relative)
        return min - this.spacingX - this.getScaleWidth(item) * (1 - item.anchorX)
    }
    /** relative的右侧位置 */
    protected getRelativeByRight(item: UITransform, relative: UITransform): number {
        var max = this.getItemXMax(relative)
        return max + this.spacingX + this.getScaleWidth(item) * item.anchorX
    }
    /** relative的顶部位置 */
    protected getRelativeByTop(item: UITransform, relative: UITransform): number {
        var max = this.getItemYMax(relative)
        return max + this.spacingY + this.getScaleHeight(item) * (1 - item.anchorY)
    }
    /** relative的底部位置 */
    protected getRelativeByBottom(item: UITransform, relative: UITransform): number {
        var min = this.getItemYMin(relative)
        return min - this.spacingY - this.getScaleHeight(item) * item.anchorY
    }
    /** 设置Item的坐标位置 */
    protected setItemPosition(item: UITransform, relative: UITransform, reverse: boolean = false) {
        var pos = new Vec3()
        if (!this.header) {
            pos.x = this.getStartX(item)
            pos.y = this.getStartY(item)
        } else {
            if (this.vertical) {
                pos = this.getVerticalRelativePosition(item, relative, reverse)
            } else {
                pos = this.getHorizontalRelativePosition(item, relative, reverse)
            }
        }
        item.node.setPosition(pos)
    }
    /** 计算垂直模式的Item应该的位置 */
    protected getVerticalRelativePosition(item: UITransform, relative: UITransform, reverse: boolean) {
        var pos = new Vec3()
        var isAccommodate = false
        if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            isAccommodate = !reverse ? this.isAccommodateByRight(relative) : this.isAccommodateByLeft(relative)
        } else {
            isAccommodate = !reverse ? this.isAccommodateByLeft(relative) : this.isAccommodateByRight(relative)
        }
        // 横轴
        if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (!reverse) {
                pos.x = isAccommodate ? this.getRelativeByRight(item, relative) : this.getStartX(item)
            } else {
                pos.x = isAccommodate ? this.getRelativeByLeft(item, relative) : this.getEndX(item)
            }
        } else {
            if (!reverse) {
                pos.x = isAccommodate ? this.getRelativeByLeft(item, relative) : this.getStartX(item)
            } else {
                pos.x = isAccommodate ? this.getRelativeByRight(item, relative) : this.getEndX(item)
            }
        }
        // 纵轴
        if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (!reverse) {
                pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByBottom(item, relative)
            } else {
                pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByTop(item, relative)
            }
        } else {
            if (!reverse) {
                pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByTop(item, relative)
            } else {
                pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByBottom(item, relative)
            }
        }
        return pos
    }
    /** 计算水平模式的Item应该的位置 */
    protected getHorizontalRelativePosition(item: UITransform, relative: UITransform, reverse: boolean) {
        var pos = new Vec3()
        var isAccommodate = false
        if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            isAccommodate = !reverse ? this.isAccommodateByBottom(relative) : this.isAccommodateByTop(relative)
        } else {
            isAccommodate = !reverse ? this.isAccommodateByTop(relative) : this.isAccommodateByBottom(relative)
        }
        // 纵轴
        if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (!reverse) {
                pos.y = isAccommodate ? this.getRelativeByBottom(item, relative) : this.getStartY(item)
            } else {
                pos.y = isAccommodate ? this.getRelativeByTop(item, relative) : this.getEndY(item)
            }
        } else {
            if (!reverse) {
                pos.y = isAccommodate ? this.getRelativeByTop(item, relative) : this.getStartY(item)
            } else {
                pos.y = isAccommodate ? this.getRelativeByBottom(item, relative) : this.getEndY(item)
            }
        }
        // 横轴
        if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (!reverse) {
                pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByRight(item, relative)
            } else {
                pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByLeft(item, relative)
            }
        } else {
            if (!reverse) {
                pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByLeft(item, relative)
            } else {
                pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByRight(item, relative)
            }
        }
        return pos
    }
    /** 当数据长度发生变化时 计算item应该怎么排列 */
    protected refreshItems(offset: number) {
        if (offset < 0) {
            for (let i = 0; i < -offset; i++) {
                if (this.headerLoop) {
                    this.pushToHeader()
                } else if (this.footerLoop) {
                    this.pushToHeader()
                } else {
                    this.pushToHeader(true)
                }
            }
            let startIndex = this.headerIndex > 0 ? this.headerIndex : 0
            for (let i = 0; i < this.node.children.length; i++) {
                const child: any = this.node.children[i];
                if (this.headerLoop || this.footerLoop) {
                    if (startIndex > this.itemTotal - 1) {
                        startIndex = 0
                    }
                }
                child["__index"] = startIndex
                this.notifyRefreshItem(child)
                startIndex++
            }
            this.scrollView.startAutoScroll()
        } else {
            for (let i = 0; i < this.node.children.length; i++) {
                if (this.vertical) {
                    if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                        this.pushToFooter()
                    } else {
                        this.pushToHeader()
                    }
                } else {
                    if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                        this.pushToFooter()
                    } else {
                        this.pushToHeader()
                    }
                }
            }
        }
    }
    /** 创建Item */
    protected async createItems(count: number, force: boolean = false) {
        this.gener?.return("")
        if (force) {
            this._maxPrefabTotal = 0
            this.selfHorW = 0
        }
        // 有多余的item 需要删除 不处理
        if (!force && this.node.children.length > count) {
            this.removeItems(count)
            return false
        }
        // 已经固定item总数 不处理
        if (this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.children.length) {
            return false
        }
        // 开始分帧创建item
        let total = count - this.node.children.length //计算当前应该创建的总数
        this.gener = this.getGeneratorLength(total, () => {
            let child: any = instantiate(this.prefab)
            child["__index"] = this.node.children.length
            const transform = child._uiProps.uiTransformComp
            this.setAndSaveSizeAndScale(transform)
            this.setItemPosition(child._uiProps.uiTransformComp, this.footer!)
            this.node.addChild(child)
            this.notifyRefreshItem(child)
            child.on(Node.EventType.SIZE_CHANGED, this.onChildSize, this)
            child.on(Node.EventType.TRANSFORM_CHANGED, this.onChildScale, this)
            let selfHorW, viewHorW
            if (this.vertical) {
                selfHorW = this.contentSize.height
                viewHorW = this.view.height
            } else {
                selfHorW = this.contentSize.width
                viewHorW = this.view.width
            }
            /**
             * 根据排列方向 来判断对比宽度还是高度
             * 这里使用参数this.multiple来判断是否需要继续创建 默认为2倍 比如view可视尺寸为800 2倍就是1600
             * 根据之前所创建的所有item的尺寸计算是否满足这个尺寸 如果满足则不再继续创建 
             * 由于是分帧加载 所以下一次创建会等这一次的返回结果 返回false 则终止分帧任务
             */
            if (selfHorW >= viewHorW * this.multiple) {
                this._maxPrefabTotal = this.node.children.length
                this.selfHorW = selfHorW
                console.log("已固定item数量", this._maxPrefabTotal)
                return false
            }
            return true
        })
        await this.exeGenerator(this.gener, 20) //执行分帧任务 1帧创建20个
        return true
    }
    /** 删除多余的item */
    protected removeItems(count: number) {
        // 有多余的item 需要删除
        let length = this.node.children.length - count
        // 删除掉多余的item
        for (let i = 0; i < length; i++) {
            var child = this.node.children[this.node.children.length - 1]
            child.off(Node.EventType.SIZE_CHANGED, this.onChildSize, this);
            child.off(Node.EventType.TRANSFORM_CHANGED, this.onChildScale, this);
            child.destroy()
            this.node.removeChild(child)
        }
    }
    protected addEventListener() {
        this.node.on(SystemEventType.TRANSFORM_CHANGED, this.onPositionChanged, this)
    }
    protected removeEventListener() {
        this.node.off(SystemEventType.TRANSFORM_CHANGED, this.onPositionChanged, this)
    }
    /** 当Item缩放改变时 限制并改回该有的缩放 */
    protected onChildScale(type: any) {
        if (this.isRestart) return
        if (!this.affectedByScale) return
        if (type == Node.TransformBit.SCALE) {
            for (let i = 0; i < this.node.children.length; i++) {
                const child: any = this.node.children[i];
                const __scale = child["__scale"]
                if (this.groupItemTotal == 1) {
                    if (this.vertical) {
                        if (child.scale.x != __scale.x) {
                            console.warn("不允许修改Item缩放X")
                            child.setScale(new Vec3(__scale.x, child.scale.y))
                            return
                        }
                    } else {
                        if (child.scale.y != __scale.y) {
                            console.warn("不允许修改Item缩放Y")
                            child.setScale(new Vec3(child.scale.y, __scale.y))
                            return
                        }
                    }
                } else if (this.groupItemTotal > 1) {
                    if (!child.scale.equals(__scale)) {
                        console.warn("Grid模式不允许修改Item缩放")
                        child.setScale(__scale)
                        return
                    }
                }
            }
            if (this.groupItemTotal > 1) return
            this.resetChilds()
        }
    }
    /** 当Item尺寸改变时 限制并改回该有的尺寸 */
    protected onChildSize() {
        if (this.isRestart) return
        for (let i = 0; i < this.node.children.length; i++) {
            const child: any = this.node.children[i];
            const __size = child["__size"]
            const transform = child._uiProps.uiTransformComp!
            if (this.groupItemTotal == 1) {
                if (this.vertical) {
                    if (transform?.width != __size.width) {
                        console.warn("不允许修改Item宽度")
                        transform.setContentSize(size(__size.width, transform.height))
                        return
                    }
                } else {
                    if (transform?.height != __size.height) {
                        console.warn("不允许修改Item高度")
                        transform.setContentSize(size(transform.width, __size.height))
                        return
                    }
                }
            } else if (this.groupItemTotal > 1) {
                if (!transform.contentSize.equals(__size)) {
                    console.warn("Grid模式不允许修改Item尺寸")
                    transform.setContentSize(__size)
                    return
                }
            }
        }
        if (this.groupItemTotal > 1) return
        this.resetChilds()
    }
    /** 重新计算当前所有Item的位置 */
    protected resetChilds(start: boolean = false) {
        var prevItem: any = this.header
        if (this.vertical && this.fixedItemHeight <= this.view.height || !this.vertical && this.fixedItemWidth <= this.view.width) {
            let x = this.getStartX(this.header)
            let y = this.getStartY(this.header)
            this.header?.node.setPosition(new Vec3(x, y))
        }
        if (start) {
            if (this.vertical) {
                let x = this.getStartX(this.header)
                this.header?.node.setPosition(new Vec3(x, this.header.node.position.y))
            } else {
                let y = this.getStartY(this.header)
                this.header?.node.setPosition(new Vec3(this.header.node.position.x, y))
            }
        }
        for (let i = 1; i < this.node.children.length; i++) {
            const child = this.node.children[i];
            const transform = child._uiProps.uiTransformComp!
            let relative = !prevItem ? this.header : prevItem
            this.setItemPosition(transform, relative)
            prevItem = transform
        }
        if (!start) this.scrollView.startAutoScroll()
    }
    protected getUsedScaleValue(value: number) {
        return this.affectedByScale ? Math.abs(value) : 1;
    }
    protected getScaleWidth(trans: UITransform | null): number {
        if (!trans) return 0
        return trans.width * this.getUsedScaleValue(trans.node.scale.x)
    }
    protected getScaleHeight(trans: UITransform | null): number {
        if (!trans) return 0
        return trans.height * this.getUsedScaleValue(trans.node.scale.y)
    }
    protected onPositionChanged() {
        if (this.isRestart) return
        if (this.vertical) {
            if (this.scrollView.prevLocation.y < this.scrollView.location.y) {
                this.scrollDirection = ScrollDirection.FOOTER
            } else if (this.scrollView.prevLocation.y > this.scrollView.location.y) {
                this.scrollDirection = ScrollDirection.HEADER
            } else {
                this.scrollDirection = ScrollDirection.NONE
            }
        } else {
            if (this.scrollView.prevLocation.x > this.scrollView.location.x) {
                this.scrollDirection = ScrollDirection.FOOTER
            } else if (this.scrollView.prevLocation.x < this.scrollView.location.x) {
                this.scrollDirection = ScrollDirection.HEADER
            } else {
                this.scrollDirection = ScrollDirection.NONE
            }
        }

        if (this.vertical) {
            for (let i = 0; i < this.node.children.length; i++) {
                let isOfBoundary = Math.abs(this.prevPos.y - this.node.position.y) > EPSILON
                if (!isOfBoundary) continue
                if (this.prevPos.y < this.node.position.y) {
                    this.pushToFooter()
                } else if (this.prevPos.y > this.node.position.y) {
                    this.pushToHeader()
                }
            }
        } else {
            for (let i = 0; i < this.node.children.length; i++) {
                let isOfBoundary = Math.abs(this.prevPos.x - this.node.position.x) > EPSILON
                if (!isOfBoundary) continue
                if (this.prevPos.x > this.node.position.x) {
                    this.pushToFooter()
                } else if (this.prevPos.x < this.node.position.x) {
                    this.pushToHeader()
                }
            }
        }
        this.prevPos = this.node.position.clone()
    }
    /** 向尾部填充 force如果为true 则强制填充 */
    protected pushToFooter(force: boolean = false) {
        if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                if (force || this.headerBoundary - this.paddingTop > this.viewHeaderBoundary + this.header?.height!) {
                    this.pushToFooterHandler()
                }
            } else {
                if (force || this.footerBoundary - this.paddingTop > this.viewHeaderBoundary + this.header?.height!) {
                    this.pushToHeaderHandler()
                }
            }
        } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                if (force || this.headerBoundary + this.paddingLeft < this.viewHeaderBoundary - this.header?.width!) {
                    this.pushToFooterHandler()
                }
            } else {
                if (force || this.footerBoundary + this.paddingLeft < this.viewHeaderBoundary - this.header?.width!) {
                    this.pushToHeaderHandler()
                }
            }
        }
    }
    /** 向头部填充 force如果为true 则强制填充 */
    protected pushToHeader(force: boolean = false) {
        if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                if (force || this.footerBoundary + this.paddingBottom < this.viewFooterBoundary - this.footer?.height!) {
                    this.pushToHeaderHandler()
                }
            } else {
                if (force || this.headerBoundary + this.paddingBottom < this.viewFooterBoundary - this.footer?.height!) {
                    this.pushToFooterHandler()
                }
            }
        } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                if (force || this.footerBoundary - this.paddingRight > this.viewFooterBoundary + this.footer?.width!) {
                    this.pushToHeaderHandler()
                }
            } else {
                if (force || this.headerBoundary - this.paddingRight > this.viewFooterBoundary + this.footer?.width!) {
                    this.pushToFooterHandler()
                }
            }
        }
    }
    protected pushToFooterHandler() {
        var node: any = this.header?.node
        let loop
        if (this.vertical) {
            loop = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? this.footerLoop : this.headerLoop
        } else {
            loop = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? this.footerLoop : this.headerLoop
        }
        if (loop) {
            if (this.footerIndex >= this.itemTotal - 1) {
                node["__index"] = 0
            } else {
                node["__index"] = this.footerIndex + 1
            }
        } else {
            if (!this.footer || this.footerIndex >= this.itemTotal - 1) return
            node["__index"] = this.footerIndex + 1
        }
        this.notifyRefreshItem(node)
        this.setItemPosition(this.header!, this.footer!)
        this.header?.node.setSiblingIndex(this.node.children.length)
    }
    protected pushToHeaderHandler() {
        var node: any = this.footer?.node
        let loop, loop2
        if (this.vertical) {
            loop = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? this.headerLoop : this.footerLoop
            loop2 = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? this.footerLoop : this.headerLoop
        } else {
            loop = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? this.headerLoop : this.footerLoop
            loop2 = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? this.footerLoop : this.headerLoop
        }
        // 对其头部
        if (!loop && this.headerIndex == 0) {
            // 判断是否是起始位置
            var accommodate
            if (this.vertical) {
                accommodate = this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT ? this.isAccommodateByLeft(this.header!) : this.isAccommodateByRight(this.header!)
            } else {
                accommodate = this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM ? this.isAccommodateByTop(this.header!) : this.isAccommodateByBottom(this.header!)
            }
            if (accommodate) {
                this.resetChilds(true)
            }
        }
        if (loop) {
            if (this.headerIndex == 0) {
                node["__index"] = this.itemTotal - 1
            } else {
                node["__index"] = this.headerIndex - 1
            }
        } else {
            if (!this.header || this.headerIndex == 0) return
            node["__index"] = this.headerIndex - 1
        }
        this.notifyRefreshItem(node)
        this.setItemPosition(this.footer!, this.header!, true)
        this.footer?.node.setSiblingIndex(0)

    }
    /** 通知给定的node刷新数据 */
    protected notifyRefreshItem(target: Node) {
        EventHandler.emitEvents(this.refreshItemEvents, target, (target as any)['__index'])
    }
    /** 分帧加载 */
    protected * getGeneratorLength(length: number, callback: Function, ...params: any): Generator {
        for (let i = 0; i < length; i++) {
            let result = callback(i, ...params)
            if (result) {
                yield
            } else {
                return
            }
        }
    }
    /** 分帧执行 */
    protected exeGenerator(generator: Generator, duration: number) {
        return new Promise((resolve, reject) => {
            let gen = generator
            let execute = () => {
                let startTime = new Date().getTime()
                for (let iter = gen.next(); ; iter = gen.next()) {
                    if (iter == null || iter.done) {
                        resolve(null)
                        return
                    }
                    if (new Date().getTime() - startTime > duration) {
                        setTimeout(() => execute(), director.getDeltaTime())
                        return
                    }
                }
            }
            execute()
        })
    }
}