System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./custom-layout"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Vec3, Vec2, ScrollView, EventHandler, CustomLayout, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, requireComponent, quintEaseOut, EPSILON, TOLERANCE, MOVEMENT_FACTOR, NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED, OUT_OF_BOUNDARY_BREAKING_FACTOR, CustomScrollview;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCustomLayout(extras) {
    _reporterNs.report("CustomLayout", "./custom-layout", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
      ScrollView = _cc.ScrollView;
      EventHandler = _cc.EventHandler;
    }, function (_customLayout) {
      CustomLayout = _customLayout.CustomLayout;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72cf528Z4dK+ofNYmM2Xf22", "custom-scrollview", undefined);

      ({
        ccclass,
        property,
        requireComponent
      } = _decorator);

      quintEaseOut = time => {
        time -= 1;
        return time * time * time * time * time + 1;
      };

      EPSILON = 1e-4;
      TOLERANCE = 1e4;
      MOVEMENT_FACTOR = 0.7;
      NUMBER_OF_GATHERED_TOUCHES_FOR_MOVE_SPEED = 5;
      OUT_OF_BOUNDARY_BREAKING_FACTOR = 0.015;

      _export("CustomScrollview", CustomScrollview = (_dec = ccclass('SuperScrollview'), _dec2 = property({
        displayName: "顶部偏移量",
        tooltip: "下拉时超过此偏移会发送下拉事件",
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec3 = property({
        displayName: "满足触发Header的倍数",
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec4 = property({
        displayName: "底部偏移量",
        tooltip: "上拉时超过此偏移会发送上拉事件",
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec5 = property({
        displayName: "满足触发Footer的倍数",
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec6 = property({
        type: EventHandler,
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec7 = property({
        type: EventHandler,
        visible: function () {
          return this.pullRefresh;
        }
      }), _dec(_class = (_class2 = (_temp = class CustomScrollview extends ScrollView {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pullRefresh", _descriptor, this);

          _initializerDefineProperty(this, "headerOutOffset", _descriptor2, this);

          _initializerDefineProperty(this, "headerMultiple", _descriptor3, this);

          _initializerDefineProperty(this, "footerOutOffset", _descriptor4, this);

          _initializerDefineProperty(this, "footerMultiple", _descriptor5, this);

          _initializerDefineProperty(this, "headerEvents", _descriptor6, this);

          _initializerDefineProperty(this, "footerEvents", _descriptor7, this);

          _defineProperty(this, "prevLocation", new Vec2());

          _defineProperty(this, "location", new Vec2());

          _defineProperty(this, "isCallSoonFinish", false);

          _defineProperty(this, "isMoveHeader", false);

          _defineProperty(this, "isMoveFooter", false);

          _defineProperty(this, "isLockHeader", false);

          _defineProperty(this, "isLockFooter", false);

          _defineProperty(this, "headerProgress", 0);

          _defineProperty(this, "footerProgress", 0);
        }

        onLoad() {
          if (this.layout.autoCenter) {
            this.brake = 0.7;
          }
        }

        get layout() {
          if (!this._layout) {
            var _this$content;

            this._layout = (_this$content = this.content) === null || _this$content === void 0 ? void 0 : _this$content.getComponent(_crd && CustomLayout === void 0 ? (_reportPossibleCrUseOfCustomLayout({
              error: Error()
            }), CustomLayout) : CustomLayout);
          }

          return this._layout;
        }

        _getContentTopBoundary() {
          if (!this._content) {
            return -1;
          }

          let offset = this.layout.isOfTopBoundary == 0 ? this._topBoundary : this.layout.isOfTopBoundary;
          return offset;
        }

        _getContentBottomBoundary() {
          if (!this._content) {
            return -1;
          }

          let offset = this.layout.isOfButtomBoundary == 0 ? this._bottomBoundary : this.layout.isOfButtomBoundary;
          return offset;
        }

        _getContentLeftBoundary() {
          if (!this._content) {
            return -1;
          }

          let offset = this.layout.isOfLeftBoundary == 0 ? this._leftBoundary : this.layout.isOfLeftBoundary;
          return offset;
        }

        _getContentRightBoundary() {
          if (!this._content) {
            return -1;
          }

          let offset = this.layout.isOfRightBoundary == 0 ? this._rightBoundary : this.layout.isOfRightBoundary;
          return offset;
        }

        _onTouchBegan(event, captureListeners) {
          this.isCallSoonFinish = false;

          super._onTouchBegan(event, captureListeners);
        }

        set autoScrolling(value) {
          this._autoScrolling = value;
        }

        _processAutoScrolling(dt) {
          const isAutoScrollBrake = this._isNecessaryAutoScrollBrake();

          const brakingFactor = isAutoScrollBrake ? OUT_OF_BOUNDARY_BREAKING_FACTOR : 1;
          this._autoScrollAccumulatedTime += dt * (1 / brakingFactor);
          let percentage = Math.min(1, this._autoScrollAccumulatedTime / this._autoScrollTotalTime);

          if (this._autoScrollAttenuate) {
            percentage = quintEaseOut(percentage);
          }

          const clonedAutoScrollTargetDelta = this._autoScrollTargetDelta.clone();

          clonedAutoScrollTargetDelta.multiplyScalar(percentage);

          const clonedAutoScrollStartPosition = this._autoScrollStartPosition.clone();

          clonedAutoScrollStartPosition.add(clonedAutoScrollTargetDelta);
          let reachedEnd = Math.abs(percentage - 1) <= EPSILON;
          const fireEvent = Math.abs(percentage - 1) <= this.getScrollEndedEventTiming(); // console.log("fireEvent", fireEvent, percentage)

          if (fireEvent && !this._isScrollEndedWithThresholdEventFired) {
            this._dispatchEvent(ScrollView.EventType.SCROLL_ENG_WITH_THRESHOLD);

            this._isScrollEndedWithThresholdEventFired = true;
          }

          if (this.elastic) {
            const brakeOffsetPosition = clonedAutoScrollStartPosition.clone();
            brakeOffsetPosition.subtract(this._autoScrollBrakingStartPosition);

            if (isAutoScrollBrake) {
              brakeOffsetPosition.multiplyScalar(brakingFactor);
            }

            clonedAutoScrollStartPosition.set(this._autoScrollBrakingStartPosition);
            clonedAutoScrollStartPosition.add(brakeOffsetPosition);
          } else {
            const moveDelta = clonedAutoScrollStartPosition.clone();
            moveDelta.subtract(this.getContentPosition());

            const outOfBoundary = this._getHowMuchOutOfBoundary(moveDelta);

            if (!outOfBoundary.equals(Vec3.ZERO, EPSILON)) {
              clonedAutoScrollStartPosition.add(outOfBoundary);
              reachedEnd = true;
            }
          }

          if (reachedEnd) {
            this._autoScrolling = false;
          }

          const deltaMove = clonedAutoScrollStartPosition.clone();
          deltaMove.subtract(this.getContentPosition());

          this._clampDelta(deltaMove);

          if (this.layout.vertical && Math.abs(deltaMove.y) <= 2 && !this.isCallSoonFinish) {
            this.layout.soonFinish();
            this.isCallSoonFinish = true;
          } else if (!this.layout.vertical && Math.abs(deltaMove.x) <= 2 && !this.isCallSoonFinish) {
            this.layout.soonFinish();
            this.isCallSoonFinish = true;
          }

          this._moveContent(deltaMove, reachedEnd);

          this._dispatchEvent(ScrollView.EventType.SCROLLING);

          if (!this._autoScrolling) {
            this._isBouncing = false;
            this._scrolling = false;

            this._dispatchEvent(ScrollView.EventType.SCROLL_ENDED);
          }
        }

        scrollToAny(moveDelta, timeInSecond, attenuated = true) {
          if (timeInSecond) {
            this._startAutoScroll(moveDelta, timeInSecond, attenuated !== false);
          } else {
            this._moveContent(moveDelta);
          }
        }

        release() {
          this.isMoveHeader = false;
          this.isMoveFooter = false;

          if (this.isLockHeader || this.isLockFooter) {
            this.vertical && this.isLockHeader && (this._topBoundary += this.headerOutOffset);
            this.vertical && this.isLockFooter && (this._bottomBoundary -= this.footerOutOffset);
            this.horizontal && this.isLockHeader && (this._leftBoundary -= this.headerOutOffset);
            this.horizontal && this.isLockFooter && (this._rightBoundary += this.footerOutOffset);
            this.clearProgress();
            this.layout.onPositionChanged();
            this.isLockHeader = false;
            this.isLockFooter = false; // this._autoScrolling = true
            // this._outOfBoundaryAmountDirty = true

            this.startAutoScroll();
          }
        }

        startAutoScroll() {
          this._autoScrolling = true;
          this._outOfBoundaryAmountDirty = true;
        }

        _onTouchMoved(event, captureListeners) {
          var _event$touch, _event$touch2;

          this.prevLocation = (_event$touch = event.touch) === null || _event$touch === void 0 ? void 0 : _event$touch.getPreviousLocation();
          this.location = (_event$touch2 = event.touch) === null || _event$touch2 === void 0 ? void 0 : _event$touch2.getLocation();

          super._onTouchMoved(event, captureListeners);

          if (this.pullRefresh) {
            let outOfBoundary = this._getHowMuchOutOfBoundary();

            let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;

            if (offset > 0 && !this.isLockHeader && !this.isLockFooter) {
              this.headerProgress = offset < EPSILON ? 0 : offset / this.headerOutOffset;
              this.isMoveHeader = this.headerProgress >= this.headerMultiple;
              EventHandler.emitEvents(this.headerEvents, this, {
                action: false,
                progress: this.headerProgress,
                stage: this.isMoveHeader ? "wait" : "touch"
              });
              EventHandler.emitEvents(this.footerEvents, this, {
                action: false,
                progress: 0,
                stage: "release"
              });
            } else if (offset < 0 && !this.isLockHeader && !this.isLockFooter) {
              this.footerProgress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset;
              this.isMoveFooter = this.footerProgress >= this.footerMultiple;
              EventHandler.emitEvents(this.footerEvents, this, {
                action: false,
                progress: this.footerProgress,
                stage: this.isMoveFooter ? "wait" : "touch"
              });
              EventHandler.emitEvents(this.headerEvents, this, {
                action: false,
                progress: 0,
                stage: "release"
              });
            } else if (offset == 0 && !this.isLockHeader && !this.isLockFooter) {
              this.clearProgress();
            }
          }
        }

        _startAutoScroll(deltaMove, timeInSecond, attenuated) {
          if (this.pullRefresh) {
            // 如果没有刷新/加载的监听者 则不计算 
            if (this.isMoveHeader && !this.isLockHeader) {
              if (this.vertical) {
                this._topBoundary -= this.headerOutOffset;
                deltaMove.y -= this.headerOutOffset;
              }

              if (this.horizontal) {
                this._leftBoundary += this.headerOutOffset;
                deltaMove.x += this.headerOutOffset;
              }

              this.isLockHeader = true;
              EventHandler.emitEvents(this.headerEvents, this, {
                action: true,
                progress: this.headerProgress,
                stage: 'lock'
              });
            } else if (this.isMoveFooter && !this.isLockFooter) {
              if (this.vertical) {
                this._bottomBoundary += this.footerOutOffset;
                deltaMove.y += this.footerOutOffset;
              }

              if (this.horizontal) {
                this._rightBoundary -= this.footerOutOffset;
                deltaMove.x -= this.footerOutOffset;
              }

              this.isLockFooter = true;
              EventHandler.emitEvents(this.footerEvents, this, {
                action: true,
                progress: this.footerProgress,
                stage: 'lock'
              });
            }
          }

          super._startAutoScroll(deltaMove, timeInSecond, attenuated);
        }

        _updateScrollBar(outOfBoundary) {
          super._updateScrollBar(outOfBoundary);

          if (this._autoScrollBraking) return; // 自动回弹时不计算 （非手动）

          if (!this._autoScrolling) return; // 非自动滚动时不计算 

          let offset = this.vertical ? outOfBoundary.y : -outOfBoundary.x;

          if (offset > 0) {
            // 下滑
            let progress = offset < EPSILON ? 0 : offset / this.headerOutOffset; //根据参数 headerOutOffset 计算当前下滑的办百分比

            if (this.isLockHeader) {
              this.headerProgress = this.headerProgress == 1 ? this.headerProgress : Math.max(progress, 1);
              EventHandler.emitEvents(this.headerEvents, this, {
                action: false,
                progress: this.headerProgress,
                stage: "lock"
              });
            } else {
              this.headerProgress = progress < this.headerProgress ? progress : this.headerProgress;
              EventHandler.emitEvents(this.headerEvents, this, {
                action: false,
                progress: this.headerProgress,
                stage: "release"
              });
            }
          } else if (offset < 0) {
            let progress = -offset < EPSILON ? 0 : -offset / this.footerOutOffset; //根据参数 footerOutOffset 计算当前下滑的办百分比

            if (this.isLockFooter) {
              this.footerProgress = this.footerProgress == 1 ? this.footerProgress : Math.max(progress, 1);
              EventHandler.emitEvents(this.footerEvents, this, {
                action: false,
                progress: this.footerProgress,
                stage: "lock"
              });
            } else {
              this.footerProgress = progress < this.footerProgress ? progress : this.footerProgress;
              EventHandler.emitEvents(this.footerEvents, this, {
                action: false,
                progress: this.footerProgress,
                stage: "release"
              });
            }
          } else if (offset == 0) {
            // 正常滑动时 如果没有锁定头和尾时 释放所有进度
            if (!this.isLockHeader && !this.isLockFooter) {
              this.clearProgress();
            }
          }
        }

        clearProgress() {
          EventHandler.emitEvents(this.headerEvents, this, {
            action: false,
            progress: 0,
            stage: "release"
          });
          EventHandler.emitEvents(this.footerEvents, this, {
            action: false,
            progress: 0,
            stage: "release"
          });
        } // protected _calculateMovePercentDelta(options) {
        //     const anchor = options.anchor;
        //     const applyToHorizontal = options.applyToHorizontal;
        //     const applyToVertical = options.applyToVertical;
        //     this._calculateBoundary();
        //     anchor.clampf(Vec2.ZERO, Vec2.ONE);
        //     let bottomDelta = this._getContentBottomBoundary() - this._bottomBoundary;
        //     bottomDelta = -bottomDelta;
        //     // console.log("this._getContentBottomBoundary()", this._getContentBottomBoundary())
        //     // console.log("this.layout.isOfButtomBoundary", this.layout.isOfButtomBoundary)
        //     let leftDelta = this._getContentLeftBoundary() - this._leftBoundary;
        //     leftDelta = -leftDelta;
        //     const moveDelta = new Vec3();
        //     if (this._content && this.view) {
        //         let totalScrollDelta = 0;
        //         const uiTrans = this._content._uiProps.uiTransformComp!;
        //         const contentSize = uiTrans.contentSize;
        //         const scrollSize = this.view.contentSize;
        //         if (applyToHorizontal) {
        //             totalScrollDelta = contentSize.width - scrollSize.width;
        //             moveDelta.x = leftDelta - totalScrollDelta * anchor.x;
        //         }
        //         if (applyToVertical) {
        //             totalScrollDelta = contentSize.height - scrollSize.height;
        //             moveDelta.y = bottomDelta - totalScrollDelta * anchor.y;
        //         }
        //     }
        //     return moveDelta;
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pullRefresh", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "headerOutOffset", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 200;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "headerMultiple", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "footerOutOffset", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 200;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "footerMultiple", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "headerEvents", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "footerEvents", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=custom-scrollview.js.map