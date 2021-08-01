System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./custom-scrollview"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, ccenum, UITransform, SystemEventType, director, Vec3, EventHandler, instantiate, Prefab, Size, size, CustomScrollview, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _temp, _crd, ccclass, property, executeInEditMode, requireComponent, EPSILON, Type, AxisDirection, VerticalAxisDirection, HorizontalAxisDirection, ScrollDirection, CustomLayout;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCustomScrollview(extras) {
    _reporterNs.report("CustomScrollview", "./custom-scrollview", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      ccenum = _cc.ccenum;
      UITransform = _cc.UITransform;
      SystemEventType = _cc.SystemEventType;
      director = _cc.director;
      Vec3 = _cc.Vec3;
      EventHandler = _cc.EventHandler;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Size = _cc.Size;
      size = _cc.size;
    }, function (_customScrollview) {
      CustomScrollview = _customScrollview.CustomScrollview;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4430bdPVstIyrMzuiBW+hni", "custom-layout", undefined);

      ({
        ccclass,
        property,
        executeInEditMode,
        requireComponent
      } = _decorator);
      EPSILON = 1e-4;

      (function (Type) {
        Type[Type["HORIZONTAL"] = 0] = "HORIZONTAL";
        Type[Type["VERTICAL"] = 1] = "VERTICAL";
      })(Type || (Type = {}));

      ccenum(Type);

      (function (AxisDirection) {
        AxisDirection[AxisDirection["HEADER_TO_FOOTER"] = 0] = "HEADER_TO_FOOTER";
        AxisDirection[AxisDirection["FOOTER_TO_HEADER"] = 1] = "FOOTER_TO_HEADER";
      })(AxisDirection || (AxisDirection = {}));

      ccenum(AxisDirection);

      (function (VerticalAxisDirection) {
        VerticalAxisDirection[VerticalAxisDirection["TOP_TO_BOTTOM"] = 0] = "TOP_TO_BOTTOM";
        VerticalAxisDirection[VerticalAxisDirection["BOTTOM_TO_TOP"] = 1] = "BOTTOM_TO_TOP";
      })(VerticalAxisDirection || (VerticalAxisDirection = {}));

      ccenum(VerticalAxisDirection);

      (function (HorizontalAxisDirection) {
        HorizontalAxisDirection[HorizontalAxisDirection["LEFT_TO_RIGHT"] = 0] = "LEFT_TO_RIGHT";
        HorizontalAxisDirection[HorizontalAxisDirection["RIGHT_TO_LEFT"] = 1] = "RIGHT_TO_LEFT";
      })(HorizontalAxisDirection || (HorizontalAxisDirection = {}));

      ccenum(HorizontalAxisDirection);

      (function (ScrollDirection) {
        ScrollDirection[ScrollDirection["NONE"] = 0] = "NONE";
        ScrollDirection[ScrollDirection["HEADER"] = 1] = "HEADER";
        ScrollDirection[ScrollDirection["FOOTER"] = 2] = "FOOTER";
      })(ScrollDirection || (ScrollDirection = {}));

      _export("CustomLayout", CustomLayout = (_dec = ccclass('CustomLayout'), _dec2 = requireComponent(UITransform), _dec3 = property(_crd && CustomScrollview === void 0 ? (_reportPossibleCrUseOfCustomScrollview({
        error: Error()
      }), CustomScrollview) : CustomScrollview), _dec4 = property(UITransform), _dec5 = property({
        type: Type
      }), _dec6 = property({
        type: VerticalAxisDirection,
        displayName: "纵向轴方向"
      }), _dec7 = property({
        type: HorizontalAxisDirection,
        displayName: "横向轴方向"
      }), _dec8 = property({
        type: AxisDirection
      }), _dec9 = property({
        visible: function () {
          return this.autoCenter;
        }
      }), _dec10 = property({
        type: Node,
        visible: function () {
          return this.autoCenter;
        }
      }), _dec11 = property(Prefab), _dec12 = property(EventHandler), _dec(_class = _dec2(_class = (_class2 = (_temp = class CustomLayout extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _initializerDefineProperty(this, "view", _descriptor2, this);

          _initializerDefineProperty(this, "groupItemTotal", _descriptor3, this);

          _initializerDefineProperty(this, "layoutType", _descriptor4, this);

          _initializerDefineProperty(this, "verticalAxisDirection", _descriptor5, this);

          _initializerDefineProperty(this, "horizontalAxisDirection", _descriptor6, this);

          _initializerDefineProperty(this, "multiple", _descriptor7, this);

          _initializerDefineProperty(this, "axisDirection", _descriptor8, this);

          _initializerDefineProperty(this, "paddingTop", _descriptor9, this);

          _initializerDefineProperty(this, "paddingBottom", _descriptor10, this);

          _initializerDefineProperty(this, "paddingLeft", _descriptor11, this);

          _initializerDefineProperty(this, "paddingRight", _descriptor12, this);

          _initializerDefineProperty(this, "spacingX", _descriptor13, this);

          _initializerDefineProperty(this, "spacingY", _descriptor14, this);

          _initializerDefineProperty(this, "affectedByScale", _descriptor15, this);

          _initializerDefineProperty(this, "autoCenter", _descriptor16, this);

          _initializerDefineProperty(this, "centerTime", _descriptor17, this);

          _initializerDefineProperty(this, "centerNode", _descriptor18, this);

          _initializerDefineProperty(this, "prefab", _descriptor19, this);

          _initializerDefineProperty(this, "refreshItemEvents", _descriptor20, this);

          _initializerDefineProperty(this, "headerLoop", _descriptor21, this);

          _initializerDefineProperty(this, "footerLoop", _descriptor22, this);

          _defineProperty(this, "scrollDirection", ScrollDirection.NONE);

          _defineProperty(this, "prevPos", new Vec3(0, 0, 0));

          _defineProperty(this, "_maxPrefabTotal", 0);

          _defineProperty(this, "_itemTotal", 0);
        }

        get vertical() {
          return this.layoutType == Type.VERTICAL;
        }

        get horizontal() {
          return this.layoutType == Type.HORIZONTAL;
        }

        get transform() {
          return this.node._uiProps.uiTransformComp;
        }
        /** 可容纳item的真实宽度 */


        get accommodWidth() {
          return this.view.width - this.paddingLeft - this.paddingRight;
        }
        /** 可容纳item的真实高度 */


        get accommodHeight() {
          return this.view.height - this.paddingTop - this.paddingBottom;
        }

        get header() {
          if (this.node.children.length == 0) return null;
          return this.node.children[0]._uiProps.uiTransformComp;
        }

        get footer() {
          if (this.node.children.length == 0) return null;
          return this.node.children[this.node.children.length - 1]._uiProps.uiTransformComp;
        }

        get headerIndex() {
          if (!this.header) return -1;
          let node = this.header.node;
          return node["__index"];
        }

        get footerIndex() {
          if (!this.footer) return -1;
          let node = this.footer.node;
          return node["__index"];
        }
        /** 起始位置 */


        get viewStartPoint() {
          let pos = new Vec3();

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            pos.x = this.view.width * -0.5 + this.paddingLeft;
          } else {
            pos.x = this.view.width * 0.5 - this.paddingRight;
          }

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            pos.y = this.view.height * 0.5 - this.paddingTop;
          } else {
            pos.y = this.view.height * -0.5 + this.paddingBottom;
          }

          return pos;
        }

        get viewHeaderBoundary() {
          var offset = 0;

          if (this.vertical) {
            offset = this.view.height * 0.5;
          } else {
            offset = this.view.width * -0.5;
          }

          return offset;
        }

        get viewFooterBoundary() {
          var offset = 0;

          if (this.vertical) {
            offset = this.view.height * -0.5;
          } else {
            offset = this.view.width * 0.5;
          }

          return offset;
        }

        get headerBoundary() {
          if (!this.header) return 0;

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              return this.node.position.y + this.getItemYMax(this.header) + this.paddingTop;
            } else {
              return this.node.position.y + this.getItemYMin(this.header) - this.paddingBottom;
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              return this.node.position.x + this.getItemXMin(this.header) - this.paddingLeft;
            } else {
              return this.node.position.x + this.getItemXMax(this.header) + this.paddingRight;
            }
          }
        }

        get footerBoundary() {
          if (!this.footer) return 0;

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              return this.node.position.y + this.getItemYMin(this.footer) - this.paddingBottom;
            } else {
              return this.node.position.y + this.getItemYMax(this.footer) + this.paddingTop;
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              return this.node.position.x + this.getItemXMax(this.footer) + this.paddingRight;
            } else {
              return this.node.position.x + this.getItemXMin(this.footer) - this.paddingLeft;
            }
          }
        }

        get centerHeaderBoundary() {
          let key = this.vertical ? "y" : "x";

          if (this.centerNode) {
            return this.headerBoundary + (this.viewHeaderBoundary - this.centerNode.position[key]);
          } else {
            return this.headerBoundary + (this.viewHeaderBoundary - this.view.node.position[key]);
          }
        }

        get centerFooterBoundary() {
          let key = this.vertical ? "y" : "x";

          if (this.centerNode) {
            return this.footerBoundary + (this.viewFooterBoundary - this.centerNode.position[key]);
          } else {
            return this.footerBoundary + (this.viewFooterBoundary - this.view.node.position[key]);
          }
        }

        get isOfLeftBoundary() {
          if (this.vertical) return 0;

          if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.HEADER) {
              return this.centerHeaderBoundary;
            }

            return 0;
          }

          if (this.headerLoop) {
            if (this.header) return 0;
            return this.viewHeaderBoundary + this.node.position.x;
          }

          if (!this.header || this.fixedItemWidth <= this.view.width) {
            return this.viewHeaderBoundary + this.node.position.x;
          }

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (this.headerIndex == 0) {
              return this.headerBoundary;
            }
          } else {
            if (this.footerIndex == this.itemTotal - 1) {
              return this, this.footerBoundary;
            }
          }

          return 0;
        }

        get isOfRightBoundary() {
          if (this.vertical) return 0;

          if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.FOOTER) {
              return this.centerFooterBoundary;
            }

            return 0;
          }

          if (this.footerLoop) {
            if (this.footer) return 0;
            return this.viewFooterBoundary + this.node.position.x;
          }

          if (!this.header || this.fixedItemWidth <= this.view.width) {
            return this.viewFooterBoundary + this.node.position.x;
          }

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (this.footerIndex == this.itemTotal - 1) {
              return this, this.footerBoundary;
            }
          } else {
            if (this.headerIndex == 0) {
              return this.headerBoundary;
            }
          }

          return 0;
        }

        get isOfTopBoundary() {
          if (!this.vertical) return 0;

          if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.HEADER) {
              return this.centerHeaderBoundary;
            }

            return 0;
          }

          if (this.headerLoop) {
            if (this.header) return 0;
            return this.viewHeaderBoundary + this.node.position.y;
          }

          if (!this.header || this.fixedItemHeight <= this.view.height) {
            return this.viewHeaderBoundary + this.node.position.y;
          }

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (this.headerIndex == 0) {
              return this.headerBoundary;
            }
          } else {
            if (this.footerIndex == this.itemTotal - 1) {
              return this.footerBoundary;
            }
          }

          return 0;
        }

        get isOfButtomBoundary() {
          if (!this.vertical) return 0;

          if (this.autoCenter) {
            if (this.scrollDirection == ScrollDirection.FOOTER) {
              return this.centerFooterBoundary;
            }

            return 0;
          }

          if (this.footerLoop) {
            if (this.footer) return 0;
            return this.viewFooterBoundary + this.node.position.y;
          }

          if (!this.footer || this.fixedItemHeight <= this.view.height) {
            return this.viewFooterBoundary + this.node.position.y;
          }

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (this.footerIndex == this.itemTotal - 1) {
              return this.footerBoundary;
            }
          } else {
            if (this.headerIndex == 0) {
              return this.headerBoundary;
            }
          }

          return 0;
        }

        get fixedItemHeight() {
          if (!this.header) return 0;

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            return Math.abs(this.getItemYMax(this.header)) + Math.abs(this.getItemYMin(this.footer));
          } else {
            return Math.abs(this.getItemYMin(this.header)) + Math.abs(this.getItemYMax(this.footer));
          }
        }

        get fixedItemWidth() {
          if (!this.header) return 0;

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            return Math.abs(this.getItemXMin(this.header)) + Math.abs(this.getItemXMax(this.footer));
          } else {
            return Math.abs(this.getItemXMax(this.header)) + Math.abs(this.getItemXMin(this.footer));
          }
        }

        get maxPrefabTotal() {
          return this._maxPrefabTotal;
        }

        get itemTotal() {
          return this._itemTotal;
        }

        async total(count) {
          let created = await this.createItems(count);
          let offset = count - this.itemTotal;
          this._itemTotal = count;

          if (!created) {
            this.refreshItems(offset);
          }

          this.scrollView.release();
        }

        get centerPosition() {
          if (!this._centerPosition) {
            this._centerPosition = new Vec3();

            if (this.autoCenter) {
              if (this.centerNode) {
                var _this$centerNode$pare, _this$centerNode$pare2;

                let worldPos = (_this$centerNode$pare = this.centerNode.parent) === null || _this$centerNode$pare === void 0 ? void 0 : (_this$centerNode$pare2 = _this$centerNode$pare._uiProps.uiTransformComp) === null || _this$centerNode$pare2 === void 0 ? void 0 : _this$centerNode$pare2.convertToWorldSpaceAR(this.centerNode.position);
                this._centerPosition = this.view.convertToNodeSpaceAR(worldPos);
              }
            } else {
              if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                  this._centerPosition.y = this.viewHeaderBoundary;
                } else {
                  this._centerPosition.y = this.viewFooterBoundary;
                }
              } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                  this._centerPosition.x = this.viewHeaderBoundary;
                } else {
                  this._centerPosition.x = this.viewFooterBoundary;
                }
              }
            }
          }

          return this._centerPosition;
        }

        soonFinish() {
          if (!this.autoCenter) return;
          var findedPos = new Vec3(999999, 999999);

          for (let i = 0; i < this.node.children.length; i++) {
            var _this$transform;

            const child = this.node.children[i];
            let worldPos = (_this$transform = this.transform) === null || _this$transform === void 0 ? void 0 : _this$transform.convertToWorldSpaceAR(child.position);
            let localPos = this.view.convertToNodeSpaceAR(worldPos);
            let map = {
              width: false,
              height: false
            };
            let newLocalPos = localPos.subtract(this.centerPosition);
            map.width = Math.abs(newLocalPos.x) < Math.abs(findedPos.x);
            map.height = Math.abs(newLocalPos.y) < Math.abs(findedPos.y);

            if (this.vertical && map.height) {
              findedPos = newLocalPos;
            } else if (!this.vertical && map.width) {
              findedPos = newLocalPos;
            }
          }

          findedPos.multiply(new Vec3(-1, -1, 1));
          this.scrollView.scrollToAny(findedPos, this.centerTime);
        }

        scrollToIndex(index, timeInSecond, boundary, reverse = false) {
          var _this$transform2;

          if (isNaN(index) || index < 0 || index > this.itemTotal - 1) return;
          var offset = 0;
          var child = this.node.children.find(item => item["__index"] == index);

          if (!child) {
            var isDownOffset = false;

            if (index > this.footerIndex && index < this.headerIndex) {
              if (Math.abs(index - this.headerIndex) < Math.abs(index - this.footerIndex)) {
                isDownOffset = false;
              } else {
                isDownOffset = true;
              }
            } else if (index > this.footerIndex) {
              isDownOffset = true;
            } else if (index < this.headerIndex) {
              isDownOffset = false;
            }

            var start = 0;

            if (isDownOffset) {
              offset = index % this.groupItemTotal - this.footerIndex % this.groupItemTotal;
              offset = Math.abs(offset);
            } else {
              offset = this.headerIndex % this.groupItemTotal;
              offset = Math.abs(offset);
            }

            for (let i = 0; i < offset; i++) {
              if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                  if (isDownOffset) {
                    this.pushToFooter(true);
                  } else {
                    this.pushToHeader(true);
                    console.error("向上填充完成");
                  }
                } else {
                  if (isDownOffset) {
                    this.pushToHeader(true);
                  } else {
                    this.pushToFooter(true);
                  }
                }
              } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                  if (isDownOffset) {
                    this.pushToFooter(true);
                  } else {
                    this.pushToHeader(true);
                  }
                } else {
                  if (isDownOffset) {
                    this.pushToHeader(true);
                  } else {
                    this.pushToFooter(true);
                  }
                }
              }
            }

            if (isDownOffset) {
              start = Math.abs(index - this.maxPrefabTotal) + 1; // console.error("向下 起始位置", start)
            } else {
              if (index < this.groupItemTotal) {
                start = 0;
              } else {
                start = index;
              } // console.error("向上 起始位置", start)

            }

            for (let i = 0; i < this.node.children.length; i++) {
              const child = this.node.children[i];

              if (this.headerLoop || this.footerLoop) {
                if (start > this.itemTotal - 1) {
                  start = 0;
                }
              }

              child["__index"] = start; // console.log(start)

              this.notifyRefreshItem(child);
              start++;
            }

            child = this.node.children.find(item => item["__index"] == index);
          }

          if (!child) return;
          let itemPos = child.getPosition();

          if (!this.autoCenter) {
            if (this.vertical) {
              if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                if (!reverse) {
                  itemPos.y = this.getItemYMax(child._uiProps.uiTransformComp) + this.paddingTop;
                } else {
                  itemPos.y = this.getItemYMin(child._uiProps.uiTransformComp) - this.paddingBottom;
                }
              } else {
                if (!reverse) {
                  itemPos.y = this.getItemYMin(child._uiProps.uiTransformComp) - this.paddingBottom;
                } else {
                  itemPos.y = this.getItemYMax(child._uiProps.uiTransformComp) + this.paddingTop;
                }
              }
            } else {
              if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                if (!reverse) {
                  itemPos.x = this.getItemXMin(child._uiProps.uiTransformComp) - this.paddingLeft;
                } else {
                  itemPos.x = this.getItemXMax(child._uiProps.uiTransformComp) + this.paddingRight;
                }
              } else {
                if (!reverse) {
                  itemPos.x = this.getItemXMax(child._uiProps.uiTransformComp) + this.paddingRight;
                } else {
                  itemPos.x = this.getItemXMin(child._uiProps.uiTransformComp) - this.paddingLeft;
                }
              }
            }
          }

          let worldPos = (_this$transform2 = this.transform) === null || _this$transform2 === void 0 ? void 0 : _this$transform2.convertToWorldSpaceAR(itemPos);
          let localPos = this.view.convertToNodeSpaceAR(worldPos);
          let multiple;

          if (!this.autoCenter && boundary) {
            multiple = boundary;
          } else {
            multiple = this.centerPosition;
          }

          localPos.multiply(new Vec3(-1, -1, 1)).add(multiple);
          this.scrollView.stopAutoScroll();
          this.scrollView.scrollToAny(localPos, timeInSecond);
        }

        scrollToHeader(timeInSecond) {
          this.scrollToIndex(0, timeInSecond, new Vec3(this.viewHeaderBoundary, this.viewHeaderBoundary));
        }

        scrollToFooter(timeInSecond) {
          this.scrollToIndex(this.itemTotal - 1, timeInSecond, new Vec3(this.viewFooterBoundary, this.viewFooterBoundary), true);
        }
        /** 返回 header到 footer 之间的整体尺寸 */


        get contentSize() {
          if (this.node.children.length == 0) return this.view.contentSize;
          let size = new Size(this.view.contentSize.width, this.view.contentSize.height);

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              size.height = this.headerBoundary + -this.footerBoundary + this.paddingTop + this.paddingBottom;
            } else {
              size.height = this.footerBoundary + -this.headerBoundary + this.paddingTop + this.paddingBottom;
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              size.width = this.footerBoundary + -this.headerBoundary + this.paddingLeft + this.paddingRight;
            } else {
              size.width = this.headerBoundary + -this.footerBoundary + this.paddingLeft + this.paddingRight;
            }
          }

          if (size.width < this.view.contentSize.width) {
            size.width = this.view.contentSize.width;
          }

          if (size.height < this.view.contentSize.height) {
            size.height = this.view.contentSize.height;
          }

          return size;
        }

        getItemSize(item) {
          let size = new Size();

          if (this.vertical) {
            let spacing = this.spacingX * (this.groupItemTotal - 1);
            size.width = (this.accommodWidth - spacing) / this.groupItemTotal;
            size.height = item.height;
          } else {
            let spacing = this.spacingY * (this.groupItemTotal - 1);
            size.height = (this.accommodHeight - spacing) / this.groupItemTotal;
            size.width = item.width;
          }

          return size;
        }

        getItemYMax(item) {
          if (!item) return 0;
          let height = this.getScaleHeight(item) * (1 - item.anchorY);
          return item.node.position.y + height;
        }

        getItemYMin(item) {
          if (!item) return 0;
          let height = this.getScaleHeight(item) * item.anchorY;
          return item.node.position.y - height;
        }

        getItemXMax(item) {
          if (!item) return 0;
          let width = this.getScaleWidth(item) * (1 - item.anchorX);
          return item.node.position.x + width;
        }

        getItemXMin(item) {
          if (!item) return 0;
          let width = this.getScaleWidth(item) * item.anchorX;
          return item.node.position.x - width;
        }

        getStartX(item) {
          if (!item) return 0;
          var x = 0;

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            let width = this.getScaleWidth(item) * item.anchorX;
            x = this.viewStartPoint.x + width;
          } else {
            let width = this.getScaleWidth(item) * (1 - item.anchorX);
            x = this.viewStartPoint.x - width;
          }

          return x;
        }

        getEndX(item) {
          if (!item) return 0;
          var x = 0;

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            let width = this.getScaleWidth(item) * (1 - item.anchorX);
            x = -this.viewStartPoint.x - width;
          } else {
            let width = this.getScaleWidth(item) * item.anchorX;
            x = -this.viewStartPoint.x + width;
          }

          return x;
        }

        getStartY(item) {
          if (!item) return 0;
          var y = 0;

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            let height = this.getScaleHeight(item) * (1 - item.anchorY);
            y = this.viewStartPoint.y - height;
          } else {
            let height = this.getScaleHeight(item) * item.anchorY;
            y = this.viewStartPoint.y + height;
          }

          return y;
        }

        getEndY(item) {
          if (!item) return 0;
          var y = 0;

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            let height = this.getScaleHeight(item) * item.anchorY;
            y = -this.viewStartPoint.y + height;
          } else {
            let height = this.getScaleHeight(item) * (1 - item.anchorY);
            y = -this.viewStartPoint.y - height;
          }

          return y;
        }

        isAccommodateByTop(relative) {
          var max = this.getItemYMax(relative);
          return max + this.paddingTop < this.accommodHeight * 0.5;
        }

        isAccommodateByBottom(relative) {
          var min = this.getItemYMin(relative);
          return min - this.paddingBottom > this.accommodHeight * -0.5;
        }
        /** 左侧是否可以容纳 */


        isAccommodateByLeft(relative) {
          var min = this.getItemXMin(relative);
          return min - this.paddingLeft > this.accommodWidth * -0.5;
        }

        isAccommodateByRight(relative) {
          var max = this.getItemXMax(relative);
          return max + this.paddingRight < this.accommodWidth * 0.5;
        }

        getRelativeByLeft(item, relative) {
          var min = this.getItemXMin(relative);
          return min - this.spacingX - this.getScaleWidth(item) * (1 - item.anchorX);
        }

        getRelativeByRight(item, relative) {
          var max = this.getItemXMax(relative);
          return max + this.spacingX + this.getScaleWidth(item) * item.anchorX;
        }

        getRelativeByTop(item, relative) {
          var max = this.getItemYMax(relative);
          return max + this.spacingY + this.getScaleHeight(item) * (1 - item.anchorY);
        }

        getRelativeByBottom(item, relative) {
          var min = this.getItemYMin(relative);
          return min - this.spacingY - this.getScaleHeight(item) * item.anchorY;
        }

        setItemPosition(item, relative, reverse = false) {
          var pos = new Vec3();

          if (!this.header) {
            pos.x = this.getStartX(item);
            pos.y = this.getStartY(item);
          } else {
            // if (this.vertical) {
            //     var isAccommodate = false
            //     if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            //         if (!reverse) {
            //             isAccommodate = this.isAccommodateByRight(this.footer!)
            //         } else {
            //             isAccommodate = this.isAccommodateByLeft(this.header!)
            //         }
            //     } else {
            //         if (!reverse) {
            //             isAccommodate = this.isAccommodateByLeft(this.footer!)
            //         } else {
            //             isAccommodate = this.isAccommodateByRight(this.header!)
            //         }
            //     }
            //     // 横轴
            //     if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            //         if (!reverse) {
            //             if (isAccommodate) {
            //                 pos.x = this.getRelativeByRight(item, this.footer!)
            //             } else {
            //                 pos.x = this.getStartX(item)
            //             }
            //         } else {
            //             if (isAccommodate) {
            //                 pos.x = this.getRelativeByLeft(item, this.header!)
            //             } else {
            //                 pos.x = this.getEndX(item)
            //             }
            //         }
            //     } else {
            //         if (!reverse) {
            //             if (isAccommodate) {
            //                 pos.x = this.getRelativeByLeft(item, this.footer!)
            //             } else {
            //                 pos.x = this.getStartX(item)
            //             }
            //         } else {
            //             if (isAccommodate) {
            //                 pos.x = this.getRelativeByRight(item, this.header!)
            //             } else {
            //                 pos.x = this.getEndX(item)
            //             }
            //         }
            //     }
            //     // 纵轴
            //     if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            //         if (!reverse) {
            //             if (isAccommodate) {
            //                 pos.y = this.footer?.node.position.y!
            //             } else {
            //                 pos.y = this.getRelativeByBottom(item, this.footer!)
            //             }
            //         } else {
            //             if (isAccommodate) {
            //                 pos.y = this.header?.node.position.y!
            //             } else {
            //                 pos.y = this.getRelativeByTop(item, this.header!)
            //             }
            //         }
            //     } else {
            //         if (!reverse) {
            //             if (isAccommodate) {
            //                 pos.y = this.footer?.node.position.y!
            //             } else {
            //                 pos.y = this.getRelativeByTop(item, this.footer!)
            //             }
            //         } else {
            //             if (isAccommodate) {
            //                 pos.y = this.header?.node.position.y!
            //             } else {
            //                 pos.y = this.getRelativeByBottom(item, this.header!)
            //             }
            //         }
            //     }
            // } else {
            //     var isAccommodate = false
            //     if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            //         if (!reverse) {
            //             isAccommodate = this.isAccommodateByBottom(this.footer!)
            //         } else {
            //             isAccommodate = this.isAccommodateByTop(this.header!)
            //         }
            //     } else {
            //         if (!reverse) {
            //             isAccommodate = this.isAccommodateByTop(this.footer!)
            //         } else {
            //             isAccommodate = this.isAccommodateByBottom(this.header!)
            //         }
            //     }
            //     // 纵轴
            //     if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            //         if (!reverse) {
            //             if (isAccommodate) {
            //                 pos.y = this.getRelativeByBottom(item, this.footer!)
            //             } else {
            //                 pos.y = this.getStartY(item)
            //             }
            //         } else {
            //             if (isAccommodate) {
            //                 pos.y = this.getRelativeByTop(item, this.header!)
            //             } else {
            //                 pos.y = this.getEndY(item)
            //             }
            //         }
            //     } else {
            //         if (!reverse) {
            //             if (isAccommodate) {
            //                 pos.y = this.getRelativeByTop(item, this.footer!)
            //             } else {
            //                 pos.y = this.getStartY(item)
            //             }
            //         } else {
            //             if (isAccommodate) {
            //                 pos.y = this.getRelativeByBottom(item, this.header!)
            //             } else {
            //                 pos.y = this.getEndY(item)
            //             }
            //         }
            //     }
            //     // 横轴
            //     if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            //         if (!reverse) {
            //             if (isAccommodate) {
            //                 pos.x = this.footer?.node.position.x!
            //             } else {
            //                 pos.x = this.getRelativeByRight(item, this.footer!)
            //             }
            //         } else {
            //             if (isAccommodate) {
            //                 pos.x = this.header.node.position.x
            //             } else {
            //                 pos.x = this.getRelativeByLeft(item, this.header!)
            //             }
            //         }
            //     } else {
            //         if (!reverse) {
            //             if (isAccommodate) {
            //                 pos.x = this.footer?.node.position.x!
            //             } else {
            //                 pos.x = this.getRelativeByLeft(item, this.footer!)
            //             }
            //         } else {
            //             if (isAccommodate) {
            //                 pos.x = this.header.node.position.x
            //             } else {
            //                 pos.x = this.getRelativeByRight(item, this.header)
            //             }
            //         }
            //     }
            // }
            if (this.vertical) {
              var isAccommodate = false;

              if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                if (!reverse) {
                  isAccommodate = this.isAccommodateByRight(relative);
                } else {
                  isAccommodate = this.isAccommodateByLeft(relative);
                }
              } else {
                if (!reverse) {
                  isAccommodate = this.isAccommodateByLeft(relative);
                } else {
                  isAccommodate = this.isAccommodateByRight(relative);
                }
              } // 横轴


              if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                if (!reverse) {
                  if (isAccommodate) {
                    pos.x = this.getRelativeByRight(item, relative);
                  } else {
                    pos.x = this.getStartX(item);
                  }
                } else {
                  if (isAccommodate) {
                    pos.x = this.getRelativeByLeft(item, relative);
                  } else {
                    pos.x = this.getEndX(item);
                  }
                }
              } else {
                if (!reverse) {
                  if (isAccommodate) {
                    pos.x = this.getRelativeByLeft(item, relative);
                  } else {
                    pos.x = this.getStartX(item);
                  }
                } else {
                  if (isAccommodate) {
                    pos.x = this.getRelativeByRight(item, relative);
                  } else {
                    pos.x = this.getEndX(item);
                  }
                }
              } // 纵轴


              if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                if (!reverse) {
                  if (isAccommodate) {
                    pos.y = relative.node.position.y;
                  } else {
                    pos.y = this.getRelativeByBottom(item, relative);
                  }
                } else {
                  if (isAccommodate) {
                    pos.y = relative.node.position.y;
                  } else {
                    pos.y = this.getRelativeByTop(item, relative);
                  }
                }
              } else {
                if (!reverse) {
                  if (isAccommodate) {
                    pos.y = relative.node.position.y;
                  } else {
                    pos.y = this.getRelativeByTop(item, relative);
                  }
                } else {
                  if (isAccommodate) {
                    pos.y = relative.node.position.y;
                  } else {
                    pos.y = this.getRelativeByBottom(item, relative);
                  }
                }
              }
            } else {
              var isAccommodate = false;

              if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                if (!reverse) {
                  isAccommodate = this.isAccommodateByBottom(relative);
                } else {
                  isAccommodate = this.isAccommodateByTop(relative);
                }
              } else {
                if (!reverse) {
                  isAccommodate = this.isAccommodateByTop(relative);
                } else {
                  isAccommodate = this.isAccommodateByBottom(relative);
                }
              } // 纵轴


              if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                if (!reverse) {
                  if (isAccommodate) {
                    pos.y = this.getRelativeByBottom(item, relative);
                  } else {
                    pos.y = this.getStartY(item);
                  }
                } else {
                  if (isAccommodate) {
                    pos.y = this.getRelativeByTop(item, relative);
                  } else {
                    pos.y = this.getEndY(item);
                  }
                }
              } else {
                if (!reverse) {
                  if (isAccommodate) {
                    pos.y = this.getRelativeByTop(item, relative);
                  } else {
                    pos.y = this.getStartY(item);
                  }
                } else {
                  if (isAccommodate) {
                    pos.y = this.getRelativeByBottom(item, relative);
                  } else {
                    pos.y = this.getEndY(item);
                  }
                }
              } // 横轴


              if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                if (!reverse) {
                  if (isAccommodate) {
                    pos.x = relative.node.position.x;
                  } else {
                    pos.x = this.getRelativeByRight(item, relative);
                  }
                } else {
                  if (isAccommodate) {
                    pos.x = relative.node.position.x;
                  } else {
                    pos.x = this.getRelativeByLeft(item, relative);
                  }
                }
              } else {
                if (!reverse) {
                  if (isAccommodate) {
                    pos.x = relative.node.position.x;
                  } else {
                    pos.x = this.getRelativeByLeft(item, relative);
                  }
                } else {
                  if (isAccommodate) {
                    pos.x = relative.node.position.x;
                  } else {
                    pos.x = this.getRelativeByRight(item, relative);
                  }
                }
              }
            }
          }

          item.node.setPosition(pos);
        }

        refreshItems(offset) {
          if (offset < 0) {
            for (let i = 0; i < -offset; i++) {
              if (this.headerLoop) {
                this.pushToHeader();
              } else if (this.footerLoop) {
                this.pushToHeader();
              } else {
                this.pushToHeader(true);
              }
            }

            let startIndex = this.headerIndex > 0 ? this.headerIndex : 0;

            for (let i = 0; i < this.node.children.length; i++) {
              const child = this.node.children[i];

              if (this.headerLoop || this.footerLoop) {
                if (startIndex > this.itemTotal - 1) {
                  startIndex = 0;
                }
              }

              child["__index"] = startIndex;
              this.notifyRefreshItem(child);
              startIndex++;
            }

            this.scrollView.startAutoScroll();
          } else {
            if (this.vertical) {
              if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                this.pushToFooter();
              } else {
                this.pushToHeader();
              }
            } else {
              if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                this.pushToFooter();
              } else {
                this.pushToHeader();
              }
            }
          }
        }

        async createItems(count) {
          var _this$gener;

          (_this$gener = this.gener) === null || _this$gener === void 0 ? void 0 : _this$gener.return(""); // 有多余的item 需要删除 不处理

          if (this.node.children.length > count) {
            this.removeItems(count);
            return false;
          } // 已经固定item总数 不处理


          if (this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.children.length) {
            return false;
          } // 开始分帧创建item


          let total = count - this.node.children.length; //计算当前应该创建的总数

          this.gener = this.getGeneratorLength(total, () => {
            let child = instantiate(this.prefab);
            child["__index"] = this.node.children.length;
            const transform = child._uiProps.uiTransformComp;
            transform.setContentSize(this.getItemSize(transform));
            this.notifyRefreshItem(child);
            child["__size"] = transform.contentSize.clone();
            child["__scale"] = child.getScale().clone();
            this.setItemPosition(child._uiProps.uiTransformComp, this.footer);
            child.on(Node.EventType.SIZE_CHANGED, this.onChildSize, this);
            child.on(Node.EventType.TRANSFORM_CHANGED, this.onChildScale, this);
            this.node.addChild(child);
            let selfHorW, viewHorW;

            if (this.vertical) {
              selfHorW = this.contentSize.height;
              viewHorW = this.view.height;
            } else {
              selfHorW = this.contentSize.width;
              viewHorW = this.view.width;
            }
            /**
             * 根据排列方向 来判断对比宽度还是高度
             * 这里使用参数this.multiple来判断是否需要继续创建 默认为2倍 比如view可视尺寸为800 2倍就是1600
             * 根据之前所创建的所有item的尺寸计算是否满足这个尺寸 如果满足则不再继续创建 
             * 由于是分帧加载 所以下一次创建会等这一次的返回结果 返回false 则终止分帧任务
             */


            if (selfHorW >= viewHorW * this.multiple) {
              this._maxPrefabTotal = this.node.children.length;
              console.error("确定数", this._maxPrefabTotal);
              return false;
            }

            return true;
          });
          await this.exeGenerator(this.gener, 10); //执行分帧任务 1帧创建10个

          return true;
        }
        /** 删除多余的item */


        removeItems(count) {
          // 有多余的item 需要删除
          let length = this.node.children.length - count; // 删除掉多余的item

          for (let i = 0; i < length; i++) {
            var child = this.node.children[this.node.children.length - 1];
            child.off(Node.EventType.SIZE_CHANGED, this.onChildSize, this);
            child.off(Node.EventType.TRANSFORM_CHANGED, this.onChildScale, this);
            child.destroy();
            this.node.removeChild(child);
          }
        }

        onLoad() {
          Object.defineProperty(this.transform, "contentSize", {
            configurable: true,
            get: () => this.contentSize
          });
        }

        onEnable() {
          this.addEventListener();
        }

        onDisable() {
          this.removeEventListener();
        }

        addEventListener() {
          this.node.on(SystemEventType.TRANSFORM_CHANGED, this.onPositionChanged, this);
        }

        removeEventListener() {
          this.node.off(SystemEventType.TRANSFORM_CHANGED, this.onPositionChanged, this);
        }

        onChildScale(type) {
          if (!this.affectedByScale) return;

          if (type == Node.TransformBit.SCALE) {
            for (let i = 0; i < this.node.children.length; i++) {
              const child = this.node.children[i];
              const __scale = child["__scale"];

              if (this.groupItemTotal == 1) {
                if (this.vertical) {
                  if (child.scale.x != __scale.x) {
                    console.warn("不允许修改Item缩放X");
                    child.setScale(new Vec3(__scale.x, child.scale.y));
                    return;
                  }
                } else {
                  if (child.scale.y != __scale.y) {
                    console.warn("不允许修改Item缩放Y");
                    child.setScale(new Vec3(child.scale.y, __scale.y));
                    return;
                  }
                }
              } else if (this.groupItemTotal > 1) {
                if (!child.scale.equals(__scale)) {
                  console.warn("Grid模式不允许修改Item缩放");
                  child.setScale(__scale);
                  return;
                }
              }
            }

            if (this.groupItemTotal > 1) return;
            this.resetChilds();
          }
        }

        onChildSize() {
          for (let i = 0; i < this.node.children.length; i++) {
            const child = this.node.children[i];
            const __size = child["__size"];
            const transform = child._uiProps.uiTransformComp;

            if (this.groupItemTotal == 1) {
              if (this.vertical) {
                if ((transform === null || transform === void 0 ? void 0 : transform.width) != __size.width) {
                  console.warn("不允许修改Item宽度");
                  transform.setContentSize(size(__size.width, transform.height));
                  return;
                }
              } else {
                if ((transform === null || transform === void 0 ? void 0 : transform.height) != __size.height) {
                  console.warn("不允许修改Item高度");
                  transform.setContentSize(size(transform.width, __size.height));
                  return;
                }
              }
            } else if (this.groupItemTotal > 1) {
              if (!transform.contentSize.equals(__size)) {
                console.warn("Grid模式不允许修改Item尺寸");
                transform.setContentSize(__size);
                return;
              }
            }
          }

          if (this.groupItemTotal > 1) return;
          this.resetChilds();
        }

        resetChilds(start = false) {
          var prevItem = this.header;

          if (this.vertical && this.fixedItemHeight <= this.view.height || !this.vertical && this.fixedItemWidth <= this.view.width) {
            var _this$header;

            let x = this.getStartX(this.header);
            let y = this.getStartY(this.header);
            (_this$header = this.header) === null || _this$header === void 0 ? void 0 : _this$header.node.setPosition(new Vec3(x, y));
          }

          if (start) {
            var _this$header2;

            let x = this.getStartX(this.header);
            (_this$header2 = this.header) === null || _this$header2 === void 0 ? void 0 : _this$header2.node.setPosition(new Vec3(x, this.header.node.position.y));
          }

          for (let i = 1; i < this.node.children.length; i++) {
            const child = this.node.children[i];
            const transform = child._uiProps.uiTransformComp;
            let relative = !prevItem ? this.header : prevItem;
            this.setItemPosition(transform, relative);
            prevItem = transform;
          }

          this.scrollView.startAutoScroll();
        }

        getUsedScaleValue(value) {
          return this.affectedByScale ? Math.abs(value) : 1;
        }

        getScaleWidth(trans) {
          if (!trans) return 0;
          return trans.width * this.getUsedScaleValue(trans.node.scale.x);
        }

        getScaleHeight(trans) {
          if (!trans) return 0;
          return trans.height * this.getUsedScaleValue(trans.node.scale.y);
        }

        onPositionChanged() {
          if (this.vertical) {
            if (this.scrollView.prevLocation.y < this.scrollView.location.y) {
              this.scrollDirection = ScrollDirection.FOOTER;
            } else if (this.scrollView.prevLocation.y > this.scrollView.location.y) {
              this.scrollDirection = ScrollDirection.HEADER;
            } else {
              this.scrollDirection = ScrollDirection.NONE;
            }
          } else {
            if (this.scrollView.prevLocation.x > this.scrollView.location.x) {
              this.scrollDirection = ScrollDirection.FOOTER;
            } else if (this.scrollView.prevLocation.x < this.scrollView.location.x) {
              this.scrollDirection = ScrollDirection.HEADER;
            } else {
              this.scrollDirection = ScrollDirection.NONE;
            }
          }

          if (this.vertical) {
            for (let i = 0; i < this.node.children.length; i++) {
              let isOfBoundary = Math.abs(this.prevPos.y - this.node.position.y) > EPSILON;
              if (!isOfBoundary) continue;

              if (this.prevPos.y < this.node.position.y) {
                this.pushToFooter();
              } else if (this.prevPos.y > this.node.position.y) {
                this.pushToHeader();
              }
            }
          } else {
            for (let i = 0; i < this.node.children.length; i++) {
              let isOfBoundary = Math.abs(this.prevPos.x - this.node.position.x) > EPSILON;
              if (!isOfBoundary) continue;

              if (this.prevPos.x > this.node.position.x) {
                this.pushToFooter();
              } else if (this.prevPos.x < this.node.position.x) {
                this.pushToHeader();
              }
            }
          }

          this.prevPos = this.node.position.clone();
        }

        pushToFooter(force = false) {
          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              var _this$header3;

              if (force || this.headerBoundary - this.paddingTop > this.viewHeaderBoundary + ((_this$header3 = this.header) === null || _this$header3 === void 0 ? void 0 : _this$header3.height)) {
                this.pushToFooterHandler();
              }
            } else {
              var _this$header4;

              if (force || this.footerBoundary - this.paddingTop > this.viewHeaderBoundary + ((_this$header4 = this.header) === null || _this$header4 === void 0 ? void 0 : _this$header4.height)) {
                this.pushToHeaderHandler();
              }
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              var _this$header5;

              if (force || this.headerBoundary + this.paddingLeft < this.viewHeaderBoundary - ((_this$header5 = this.header) === null || _this$header5 === void 0 ? void 0 : _this$header5.width)) {
                this.pushToFooterHandler();
              }
            } else {
              var _this$header6;

              if (force || this.footerBoundary + this.paddingLeft < this.viewHeaderBoundary - ((_this$header6 = this.header) === null || _this$header6 === void 0 ? void 0 : _this$header6.width)) {
                this.pushToHeaderHandler();
              }
            }
          }
        }

        pushToHeader(force = false) {
          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              var _this$footer;

              if (force || this.footerBoundary + this.paddingBottom < this.viewFooterBoundary - ((_this$footer = this.footer) === null || _this$footer === void 0 ? void 0 : _this$footer.height)) {
                this.pushToHeaderHandler();
              }
            } else {
              var _this$footer2;

              if (force || this.headerBoundary + this.paddingBottom < this.viewFooterBoundary - ((_this$footer2 = this.footer) === null || _this$footer2 === void 0 ? void 0 : _this$footer2.height)) {
                this.pushToFooterHandler();
              }
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              var _this$footer3;

              if (force || this.footerBoundary - this.paddingRight > this.viewFooterBoundary + ((_this$footer3 = this.footer) === null || _this$footer3 === void 0 ? void 0 : _this$footer3.width)) {
                this.pushToHeaderHandler();
              }
            } else {
              var _this$footer4;

              if (force || this.headerBoundary - this.paddingRight > this.viewFooterBoundary + ((_this$footer4 = this.footer) === null || _this$footer4 === void 0 ? void 0 : _this$footer4.width)) {
                this.pushToFooterHandler();
              }
            }
          }
        }

        pushToFooterHandler() {
          var _this$header7, _this$header8;

          var node = (_this$header7 = this.header) === null || _this$header7 === void 0 ? void 0 : _this$header7.node;

          if (this.footerLoop) {
            if (this.footerIndex >= this.itemTotal - 1) {
              node["__index"] = 0;
            } else {
              node["__index"] = this.footerIndex + 1;
            }
          } else {
            if (!this.footer || this.footerIndex >= this.itemTotal - 1) return;
            node["__index"] = this.footerIndex + 1;
          }

          this.notifyRefreshItem(node);
          this.setItemPosition(this.header, this.footer);
          (_this$header8 = this.header) === null || _this$header8 === void 0 ? void 0 : _this$header8.node.setSiblingIndex(this.node.children.length);
        }

        pushToHeaderHandler() {
          var _this$footer5, _this$footer6;

          var node = (_this$footer5 = this.footer) === null || _this$footer5 === void 0 ? void 0 : _this$footer5.node;

          if (this.headerLoop) {
            if (this.headerIndex == 0) {
              node["__index"] = this.itemTotal - 1;
            } else {
              node["__index"] = this.headerIndex - 1;
            }
          } else {
            if (!this.header || this.headerIndex == 0) return;
            node["__index"] = this.headerIndex - 1;
          }

          this.notifyRefreshItem(node);
          this.setItemPosition(this.footer, this.header, true);
          (_this$footer6 = this.footer) === null || _this$footer6 === void 0 ? void 0 : _this$footer6.node.setSiblingIndex(0); // 对其头部

          if (!this.headerLoop && this.headerIndex == 0) {
            // 判断是否是起始位置
            let accommodate = this.isAccommodateByLeft(this.header);

            if (accommodate) {
              this.resetChilds(true);
            }
          }
        }
        /** 通知给定的node刷新数据 */


        notifyRefreshItem(target) {
          EventHandler.emitEvents(this.refreshItemEvents, target, target['__index']);
        }
        /** 分帧加载 */


        *getGeneratorLength(length, callback, ...params) {
          for (let i = 0; i < length; i++) {
            let result = callback(i, ...params);

            if (result) {
              yield;
            } else {
              return;
            }
          }
        }
        /** 分帧执行 */


        exeGenerator(generator, duration) {
          return new Promise((resolve, reject) => {
            let gen = generator;

            let execute = () => {
              let startTime = new Date().getTime();

              for (let iter = gen.next();; iter = gen.next()) {
                if (iter == null || iter.done) {
                  resolve(null);
                  return;
                }

                if (new Date().getTime() - startTime > duration) {
                  setTimeout(() => execute(), director.getDeltaTime() * 1000);
                  return;
                }
              }
            };

            execute();
          });
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "view", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "groupItemTotal", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "layoutType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Type.VERTICAL;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "verticalAxisDirection", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return VerticalAxisDirection.TOP_TO_BOTTOM;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "horizontalAxisDirection", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return HorizontalAxisDirection.LEFT_TO_RIGHT;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "multiple", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 2;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "axisDirection", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return AxisDirection.HEADER_TO_FOOTER;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "paddingTop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "paddingBottom", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "paddingLeft", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "paddingRight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "spacingX", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "spacingY", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "affectedByScale", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "autoCenter", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "centerTime", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "centerNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "refreshItemEvents", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "headerLoop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "footerLoop", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=custom-layout.js.map