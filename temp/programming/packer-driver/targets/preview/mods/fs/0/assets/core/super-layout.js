System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./super-scrollview"], function (_export, _context4) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, ccenum, UITransform, SystemEventType, director, Vec3, EventHandler, instantiate, Prefab, Size, Vec2, size, SuperScrollview, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _temp, _crd, ccclass, property, requireComponent, EPSILON, Type, VerticalAxisDirection, HorizontalAxisDirection, ScrollDirection, SuperLayout;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSuperScrollview(extras) {
    _reporterNs.report("SuperScrollview", "./super-scrollview", _context4.meta, extras);
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
      Vec2 = _cc.Vec2;
      size = _cc.size;
    }, function (_superScrollview) {
      SuperScrollview = _superScrollview.SuperScrollview;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4430bdPVstIyrMzuiBW+hni", "super-layout", undefined);

      ccclass = _decorator.ccclass;
      property = _decorator.property;
      requireComponent = _decorator.requireComponent;
      EPSILON = 1e-4;

      (function (Type) {
        Type[Type["HORIZONTAL"] = 0] = "HORIZONTAL";
        Type[Type["VERTICAL"] = 1] = "VERTICAL";
      })(Type || (Type = {}));

      ccenum(Type);

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

      _export("SuperLayout", SuperLayout = (_dec = ccclass('SuperLayout'), _dec2 = requireComponent(UITransform), _dec3 = property(_crd && SuperScrollview === void 0 ? (_reportPossibleCrUseOfSuperScrollview({
        error: Error()
      }), SuperScrollview) : SuperScrollview), _dec4 = property(UITransform), _dec5 = property({
        type: Type
      }), _dec6 = property({
        type: VerticalAxisDirection
      }), _dec7 = property({
        type: HorizontalAxisDirection
      }), _dec8 = property({
        tooltip: "最小值=1，大于1就是Grid模式"
      }), _dec9 = property({
        tooltip: "决定最多创建Prefab的数量"
      }), _dec10 = property({
        tooltip: "顶部填充"
      }), _dec11 = property({
        tooltip: "底部填充"
      }), _dec12 = property({
        tooltip: "左侧填充"
      }), _dec13 = property({
        tooltip: "右侧填充"
      }), _dec14 = property({
        tooltip: "横轴间距"
      }), _dec15 = property({
        tooltip: "纵轴间距"
      }), _dec16 = property({
        tooltip: "计算缩放后的尺寸"
      }), _dec17 = property({
        tooltip: "上/左 无限循环"
      }), _dec18 = property({
        tooltip: "下/右 无限循环"
      }), _dec19 = property(Prefab), _dec20 = property(EventHandler), _dec21 = property({
        tooltip: "开启自动居中"
      }), _dec22 = property({
        tooltip: "自动居中的滚动时间",
        visible: function visible() {
          return this.autoCenter;
        }
      }), _dec23 = property({
        type: Node,
        tooltip: "自动居中的参考节点，如果为空、则默认选择View中心",
        visible: function visible() {
          return this.autoCenter;
        }
      }), _dec24 = property({
        type: Vec2,
        tooltip: "自动居中时、Item的居中锚点",
        visible: function visible() {
          return this.autoCenter;
        }
      }), _dec(_class = _dec2(_class = (_class2 = (_temp = /*#__PURE__*/function (_Component) {
        _inheritsLoose(SuperLayout, _Component);

        function SuperLayout() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _Component.call.apply(_Component, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "scrollView", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "view", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "layoutType", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "verticalAxisDirection", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "horizontalAxisDirection", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "groupItemTotal", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "multiple", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "paddingTop", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "paddingBottom", _descriptor9, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "paddingLeft", _descriptor10, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "paddingRight", _descriptor11, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spacingX", _descriptor12, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "spacingY", _descriptor13, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "affectedByScale", _descriptor14, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "headerLoop", _descriptor15, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "footerLoop", _descriptor16, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "prefab", _descriptor17, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "refreshItemEvents", _descriptor18, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "autoCenter", _descriptor19, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "centerTime", _descriptor20, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "centerNode", _descriptor21, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "centerAnchor", _descriptor22, _assertThisInitialized(_this));

          _defineProperty(_assertThisInitialized(_this), "scrollDirection", ScrollDirection.NONE);

          _defineProperty(_assertThisInitialized(_this), "prevPos", new Vec3(0, 0, 0));

          _defineProperty(_assertThisInitialized(_this), "_maxPrefabTotal", 0);

          _defineProperty(_assertThisInitialized(_this), "_itemTotal", 0);

          return _this;
        }

        var _proto = SuperLayout.prototype;

        _proto.onLoad = function onLoad() {
          var _this$transform,
              _this2 = this;

          (_this$transform = this.transform) === null || _this$transform === void 0 ? void 0 : _this$transform.setContentSize(this.view.contentSize);
          this.node.setPosition(Vec3.ZERO);
          Object.defineProperty(this.transform, "contentSize", {
            configurable: true,
            get: function get() {
              return _this2.contentSize;
            }
          });
        };

        _proto.onEnable = function onEnable() {
          this.addEventListener();
        };

        _proto.onDisable = function onDisable() {
          this.removeEventListener();
        }
        /** 更新item数量 */
        ;

        _proto.total =
        /*#__PURE__*/
        function () {
          var _total = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(count) {
            var created, offset;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.createItems(count);

                  case 2:
                    created = _context.sent;
                    offset = count - this.itemTotal;
                    this._itemTotal = count;

                    if (!created) {
                      this.refreshItems(offset);
                    }

                    this.scrollView.release();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function total(_x) {
            return _total.apply(this, arguments);
          }

          return total;
        }()
        /** 自动居中到最近Item */
        ;

        _proto.scrollToCenter = function scrollToCenter() {
          this.soonFinish();
        }
        /** 滚动到头部 */
        ;

        _proto.scrollToHeader = function scrollToHeader(timeInSecond) {
          var headerOrFooter = 0;

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              headerOrFooter = this.viewHeaderBoundary;
            } else {
              headerOrFooter = this.viewFooterBoundary;
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              headerOrFooter = this.viewHeaderBoundary;
            } else {
              headerOrFooter = this.viewFooterBoundary;
            }
          }

          this.scrollToIndex(0, timeInSecond, new Vec3(headerOrFooter, headerOrFooter));
        }
        /** 滚动到尾部 */
        ;

        _proto.scrollToFooter = function scrollToFooter(timeInSecond) {
          var headerOrFooter = 0;

          if (this.vertical) {
            if (this.fixedItemHeight < this.view.height) return;

            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              headerOrFooter = this.viewFooterBoundary;
            } else {
              headerOrFooter = this.viewHeaderBoundary;
            }
          } else {
            if (this.fixedItemWidth < this.view.width) return;

            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              headerOrFooter = this.viewFooterBoundary;
            } else {
              headerOrFooter = this.viewHeaderBoundary;
            }
          }

          this.scrollToIndex(this.itemTotal - 1, timeInSecond, new Vec3(headerOrFooter, headerOrFooter), true);
        }
        /** 跳转到指定索引位置 */
        ;

        _proto.scrollToIndex = function scrollToIndex(index, timeInSecond, boundary, reverse) {
          var _this$transform2;

          if (reverse === void 0) {
            reverse = false;
          }

          if (isNaN(index) || index < 0 || index > this.itemTotal - 1) return;
          this.scrollView.stopAutoScroll();
          var offset = 0;
          var child = this.node.children.find(function (item) {
            return item["__index"] == index;
          });

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

            for (var i = 0; i < offset; i++) {
              if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
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
              start = Math.abs(index - this.maxPrefabTotal) + 1;
            } else {
              start = index < this.groupItemTotal ? 0 : index;
            }

            for (var _i = 0; _i < this.node.children.length; _i++) {
              var _child = this.node.children[_i];

              if (this.headerLoop || this.footerLoop) {
                if (start > this.itemTotal - 1) {
                  start = 0;
                }
              }

              _child["__index"] = start;
              this.notifyRefreshItem(_child);
              start++;
            }

            child = this.node.children.find(function (item) {
              return item["__index"] == index;
            });
          }

          if (!child) return;
          var itemPos = child.getPosition().clone();

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

          var worldPos = (_this$transform2 = this.transform) === null || _this$transform2 === void 0 ? void 0 : _this$transform2.convertToWorldSpaceAR(itemPos);
          var localPos = this.view.convertToNodeSpaceAR(worldPos);
          var multiple;

          if (!this.autoCenter && boundary) {
            multiple = boundary;
          } else {
            multiple = this.getCenterAnchor(child._uiProps.uiTransformComp, this.centerPosition);
          }

          localPos.multiply(new Vec3(-1, -1, 1)).add(multiple);
          this.scrollView.scrollToAny(localPos, timeInSecond);
        }
        /** 根据centerAnchor计算自动居中的真实位置 */
        ;

        _proto.getCenterAnchor = function getCenterAnchor(item, center) {
          var pos = center.clone();

          if (this.vertical) {
            var anchor = item.height * this.centerAnchor.y;
            var origin = item.height * item.anchorY;
            pos.y -= anchor - origin;
          } else {
            var _anchor = item.width * this.centerAnchor.x;

            var _origin = item.width * item.anchorX;

            pos.x += _anchor - _origin;
          }

          return pos;
        }
        /** 滚动即将结束时 跑自动居中的逻辑 */
        ;

        _proto.soonFinish = function soonFinish() {
          if (!this.autoCenter) return;
          this.scrollView.stopAutoScroll();
          var findedPos = new Vec3(999999, 999999);

          for (var i = 0; i < this.node.children.length; i++) {
            var _this$transform3;

            var child = this.node.children[i];
            var worldPos = (_this$transform3 = this.transform) === null || _this$transform3 === void 0 ? void 0 : _this$transform3.convertToWorldSpaceAR(child.position);
            var localPos = this.view.convertToNodeSpaceAR(worldPos);
            var map = {
              width: false,
              height: false
            };
            var multiple = this.getCenterAnchor(child._uiProps.uiTransformComp, this.centerPosition);
            var newLocalPos = localPos.subtract(multiple);
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
        /** 根据groupItemTotal和View可容纳的尺寸 来平均分配Item该有的尺寸 */
        ;

        _proto.getItemSize = function getItemSize(item) {
          var size = new Size();

          if (this.vertical) {
            var spacing = this.spacingX * (this.groupItemTotal - 1);
            size.width = (this.accommodWidth - spacing) / this.groupItemTotal;
            size.height = item.height;
          } else {
            var _spacing = this.spacingY * (this.groupItemTotal - 1);

            size.height = (this.accommodHeight - _spacing) / this.groupItemTotal;
            size.width = item.width;
          }

          return size;
        }
        /** 获取Item的YMax */
        ;

        _proto.getItemYMax = function getItemYMax(item) {
          if (!item) return 0;
          var height = this.getScaleHeight(item) * (1 - item.anchorY);
          return item.node.position.y + height;
        }
        /** 获取Item的YMin */
        ;

        _proto.getItemYMin = function getItemYMin(item) {
          if (!item) return 0;
          var height = this.getScaleHeight(item) * item.anchorY;
          return item.node.position.y - height;
        }
        /** 获取Item的XMax */
        ;

        _proto.getItemXMax = function getItemXMax(item) {
          if (!item) return 0;
          var width = this.getScaleWidth(item) * (1 - item.anchorX);
          return item.node.position.x + width;
        }
        /** 获取Item的XMin */
        ;

        _proto.getItemXMin = function getItemXMin(item) {
          if (!item) return 0;
          var width = this.getScaleWidth(item) * item.anchorX;
          return item.node.position.x - width;
        }
        /** 获取一组Item中起始位置X */
        ;

        _proto.getStartX = function getStartX(item) {
          if (!item) return 0;
          var x = 0;

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            var width = this.getScaleWidth(item) * item.anchorX;
            x = this.viewStartPoint.x + width;
          } else {
            var _width = this.getScaleWidth(item) * (1 - item.anchorX);

            x = this.viewStartPoint.x - _width;
          }

          return x;
        }
        /** 获取一组Item中结束位置X */
        ;

        _proto.getEndX = function getEndX(item) {
          if (!item) return 0;
          var x = 0;

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            var width = this.getScaleWidth(item) * (1 - item.anchorX);
            x = -this.viewStartPoint.x - width - this.paddingRight + this.paddingLeft;
          } else {
            var _width2 = this.getScaleWidth(item) * item.anchorX;

            x = -this.viewStartPoint.x + _width2 + this.paddingLeft - this.paddingRight;
          }

          return x;
        }
        /** 获取一组Item中起始位置Y */
        ;

        _proto.getStartY = function getStartY(item) {
          if (!item) return 0;
          var y = 0;

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            var height = this.getScaleHeight(item) * (1 - item.anchorY);
            y = this.viewStartPoint.y - height;
          } else {
            var _height = this.getScaleHeight(item) * item.anchorY;

            y = this.viewStartPoint.y + _height;
          }

          return y;
        }
        /** 获取一组Item中结束位置Y */
        ;

        _proto.getEndY = function getEndY(item) {
          if (!item) return 0;
          var y = 0;

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            var height = this.getScaleHeight(item) * item.anchorY;
            y = -this.viewStartPoint.y + height + this.paddingBottom - this.paddingTop;
          } else {
            var _height2 = this.getScaleHeight(item) * (1 - item.anchorY);

            y = -this.viewStartPoint.y - _height2 - this.paddingTop + this.paddingBottom;
          }

          return y;
        }
        /** relative的顶部是否有也容纳空间 */
        ;

        _proto.isAccommodateByTop = function isAccommodateByTop(relative) {
          var max = this.getItemYMax(relative);
          return max + this.paddingTop < this.accommodHeight * 0.5;
        }
        /** relative的底部是否有也容纳空间 */
        ;

        _proto.isAccommodateByBottom = function isAccommodateByBottom(relative) {
          var min = this.getItemYMin(relative);
          return min - this.paddingBottom > this.accommodHeight * -0.5;
        }
        /** relative的左侧是否有也容纳空间 */
        ;

        _proto.isAccommodateByLeft = function isAccommodateByLeft(relative) {
          var min = this.getItemXMin(relative);
          return min - this.paddingLeft > this.accommodWidth * -0.5;
        }
        /** relative的右侧是否有也容纳空间 */
        ;

        _proto.isAccommodateByRight = function isAccommodateByRight(relative) {
          var max = this.getItemXMax(relative);
          return max + this.paddingRight < this.accommodWidth * 0.5;
        }
        /** relative的左侧位置 */
        ;

        _proto.getRelativeByLeft = function getRelativeByLeft(item, relative) {
          var min = this.getItemXMin(relative);
          return min - this.spacingX - this.getScaleWidth(item) * (1 - item.anchorX);
        }
        /** relative的右侧位置 */
        ;

        _proto.getRelativeByRight = function getRelativeByRight(item, relative) {
          var max = this.getItemXMax(relative);
          return max + this.spacingX + this.getScaleWidth(item) * item.anchorX;
        }
        /** relative的顶部位置 */
        ;

        _proto.getRelativeByTop = function getRelativeByTop(item, relative) {
          var max = this.getItemYMax(relative);
          return max + this.spacingY + this.getScaleHeight(item) * (1 - item.anchorY);
        }
        /** relative的底部位置 */
        ;

        _proto.getRelativeByBottom = function getRelativeByBottom(item, relative) {
          var min = this.getItemYMin(relative);
          return min - this.spacingY - this.getScaleHeight(item) * item.anchorY;
        }
        /** 设置Item的坐标位置 */
        ;

        _proto.setItemPosition = function setItemPosition(item, relative, reverse) {
          if (reverse === void 0) {
            reverse = false;
          }

          var pos = new Vec3();

          if (!this.header) {
            pos.x = this.getStartX(item);
            pos.y = this.getStartY(item);
          } else {
            if (this.vertical) {
              pos = this.getVerticalRelativePosition(item, relative, reverse);
            } else {
              pos = this.getHorizontalRelativePosition(item, relative, reverse);
            }
          }

          item.node.setPosition(pos);
        }
        /** 计算垂直模式的Item应该的位置 */
        ;

        _proto.getVerticalRelativePosition = function getVerticalRelativePosition(item, relative, reverse) {
          var pos = new Vec3();
          var isAccommodate = false;

          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            isAccommodate = !reverse ? this.isAccommodateByRight(relative) : this.isAccommodateByLeft(relative);
          } else {
            isAccommodate = !reverse ? this.isAccommodateByLeft(relative) : this.isAccommodateByRight(relative);
          } // 横轴


          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (!reverse) {
              pos.x = isAccommodate ? this.getRelativeByRight(item, relative) : this.getStartX(item);
            } else {
              pos.x = isAccommodate ? this.getRelativeByLeft(item, relative) : this.getEndX(item);
            }
          } else {
            if (!reverse) {
              pos.x = isAccommodate ? this.getRelativeByLeft(item, relative) : this.getStartX(item);
            } else {
              pos.x = isAccommodate ? this.getRelativeByRight(item, relative) : this.getEndX(item);
            }
          } // 纵轴


          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (!reverse) {
              pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByBottom(item, relative);
            } else {
              pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByTop(item, relative);
            }
          } else {
            if (!reverse) {
              pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByTop(item, relative);
            } else {
              pos.y = isAccommodate ? relative.node.position.y : this.getRelativeByBottom(item, relative);
            }
          }

          return pos;
        }
        /** 计算水平模式的Item应该的位置 */
        ;

        _proto.getHorizontalRelativePosition = function getHorizontalRelativePosition(item, relative, reverse) {
          var pos = new Vec3();
          var isAccommodate = false;

          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            isAccommodate = !reverse ? this.isAccommodateByBottom(relative) : this.isAccommodateByTop(relative);
          } else {
            isAccommodate = !reverse ? this.isAccommodateByTop(relative) : this.isAccommodateByBottom(relative);
          } // 纵轴


          if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
            if (!reverse) {
              pos.y = isAccommodate ? this.getRelativeByBottom(item, relative) : this.getStartY(item);
            } else {
              pos.y = isAccommodate ? this.getRelativeByTop(item, relative) : this.getEndY(item);
            }
          } else {
            if (!reverse) {
              pos.y = isAccommodate ? this.getRelativeByTop(item, relative) : this.getStartY(item);
            } else {
              pos.y = isAccommodate ? this.getRelativeByBottom(item, relative) : this.getEndY(item);
            }
          } // 横轴


          if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
            if (!reverse) {
              pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByRight(item, relative);
            } else {
              pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByLeft(item, relative);
            }
          } else {
            if (!reverse) {
              pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByLeft(item, relative);
            } else {
              pos.x = isAccommodate ? relative.node.position.x : this.getRelativeByRight(item, relative);
            }
          }

          return pos;
        }
        /** 当数据长度发生变化时 计算item应该怎么排列 */
        ;

        _proto.refreshItems = function refreshItems(offset) {
          if (offset < 0) {
            for (var i = 0; i < -offset; i++) {
              if (this.headerLoop) {
                this.pushToHeader();
              } else if (this.footerLoop) {
                this.pushToHeader();
              } else {
                this.pushToHeader(true);
              }
            }

            var startIndex = this.headerIndex > 0 ? this.headerIndex : 0;

            for (var _i2 = 0; _i2 < this.node.children.length; _i2++) {
              var child = this.node.children[_i2];

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
            for (var _i3 = 0; _i3 < this.node.children.length; _i3++) {
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
        }
        /** 创建Item */
        ;

        _proto.createItems =
        /*#__PURE__*/
        function () {
          var _createItems = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(count) {
            var _this$gener,
                _this3 = this;

            var total;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    (_this$gener = this.gener) === null || _this$gener === void 0 ? void 0 : _this$gener["return"](""); // 有多余的item 需要删除 不处理

                    if (!(this.node.children.length > count)) {
                      _context2.next = 4;
                      break;
                    }

                    this.removeItems(count);
                    return _context2.abrupt("return", false);

                  case 4:
                    if (!(this._maxPrefabTotal > 0 && this._maxPrefabTotal == this.node.children.length)) {
                      _context2.next = 6;
                      break;
                    }

                    return _context2.abrupt("return", false);

                  case 6:
                    // 开始分帧创建item
                    total = count - this.node.children.length; //计算当前应该创建的总数

                    this.gener = this.getGeneratorLength(total, function () {
                      var child = instantiate(_this3.prefab);
                      child["__index"] = _this3.node.children.length;
                      var transform = child._uiProps.uiTransformComp;
                      transform.setContentSize(_this3.getItemSize(transform));

                      _this3.setItemPosition(child._uiProps.uiTransformComp, _this3.footer);

                      _this3.node.addChild(child);

                      _this3.notifyRefreshItem(child);

                      child["__size"] = transform.contentSize.clone();
                      child["__scale"] = child.getScale().clone();
                      child.on(Node.EventType.SIZE_CHANGED, _this3.onChildSize, _this3);
                      child.on(Node.EventType.TRANSFORM_CHANGED, _this3.onChildScale, _this3);
                      var selfHorW, viewHorW;

                      if (_this3.vertical) {
                        selfHorW = _this3.contentSize.height;
                        viewHorW = _this3.view.height;
                      } else {
                        selfHorW = _this3.contentSize.width;
                        viewHorW = _this3.view.width;
                      }
                      /**
                       * 根据排列方向 来判断对比宽度还是高度
                       * 这里使用参数this.multiple来判断是否需要继续创建 默认为2倍 比如view可视尺寸为800 2倍就是1600
                       * 根据之前所创建的所有item的尺寸计算是否满足这个尺寸 如果满足则不再继续创建 
                       * 由于是分帧加载 所以下一次创建会等这一次的返回结果 返回false 则终止分帧任务
                       */


                      if (selfHorW >= viewHorW * _this3.multiple) {
                        _this3._maxPrefabTotal = _this3.node.children.length;
                        return false;
                      }

                      return true;
                    });
                    _context2.next = 10;
                    return this.exeGenerator(this.gener, 20);

                  case 10:
                    return _context2.abrupt("return", true);

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function createItems(_x2) {
            return _createItems.apply(this, arguments);
          }

          return createItems;
        }()
        /** 删除多余的item */
        ;

        _proto.removeItems = function removeItems(count) {
          // 有多余的item 需要删除
          var length = this.node.children.length - count; // 删除掉多余的item

          for (var i = 0; i < length; i++) {
            var child = this.node.children[this.node.children.length - 1];
            child.off(Node.EventType.SIZE_CHANGED, this.onChildSize, this);
            child.off(Node.EventType.TRANSFORM_CHANGED, this.onChildScale, this);
            child.destroy();
            this.node.removeChild(child);
          }
        };

        _proto.addEventListener = function addEventListener() {
          this.node.on(SystemEventType.TRANSFORM_CHANGED, this.onPositionChanged, this);
        };

        _proto.removeEventListener = function removeEventListener() {
          this.node.off(SystemEventType.TRANSFORM_CHANGED, this.onPositionChanged, this);
        }
        /** 当Item缩放改变时 限制并改回该有的缩放 */
        ;

        _proto.onChildScale = function onChildScale(type) {
          if (!this.affectedByScale) return;

          if (type == Node.TransformBit.SCALE) {
            for (var i = 0; i < this.node.children.length; i++) {
              var child = this.node.children[i];
              var __scale = child["__scale"];

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
        /** 当Item尺寸改变时 限制并改回该有的尺寸 */
        ;

        _proto.onChildSize = function onChildSize() {
          for (var i = 0; i < this.node.children.length; i++) {
            var child = this.node.children[i];
            var __size = child["__size"];
            var transform = child._uiProps.uiTransformComp;

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
        /** 重新计算当前所有Item的位置 */
        ;

        _proto.resetChilds = function resetChilds(start) {
          if (start === void 0) {
            start = false;
          }

          var prevItem = this.header;

          if (this.vertical && this.fixedItemHeight <= this.view.height || !this.vertical && this.fixedItemWidth <= this.view.width) {
            var _this$header;

            var x = this.getStartX(this.header);
            var y = this.getStartY(this.header);
            (_this$header = this.header) === null || _this$header === void 0 ? void 0 : _this$header.node.setPosition(new Vec3(x, y));
          }

          if (start) {
            if (this.vertical) {
              var _this$header2;

              var _x3 = this.getStartX(this.header);

              (_this$header2 = this.header) === null || _this$header2 === void 0 ? void 0 : _this$header2.node.setPosition(new Vec3(_x3, this.header.node.position.y));
            } else {
              var _this$header3;

              var _y = this.getStartY(this.header);

              (_this$header3 = this.header) === null || _this$header3 === void 0 ? void 0 : _this$header3.node.setPosition(new Vec3(this.header.node.position.x, _y));
            }
          }

          for (var i = 1; i < this.node.children.length; i++) {
            var child = this.node.children[i];
            var transform = child._uiProps.uiTransformComp;
            var relative = !prevItem ? this.header : prevItem;
            this.setItemPosition(transform, relative);
            prevItem = transform;
          }

          this.scrollView.startAutoScroll();
        };

        _proto.getUsedScaleValue = function getUsedScaleValue(value) {
          return this.affectedByScale ? Math.abs(value) : 1;
        };

        _proto.getScaleWidth = function getScaleWidth(trans) {
          if (!trans) return 0;
          return trans.width * this.getUsedScaleValue(trans.node.scale.x);
        };

        _proto.getScaleHeight = function getScaleHeight(trans) {
          if (!trans) return 0;
          return trans.height * this.getUsedScaleValue(trans.node.scale.y);
        };

        _proto.onPositionChanged = function onPositionChanged() {
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
            for (var i = 0; i < this.node.children.length; i++) {
              var isOfBoundary = Math.abs(this.prevPos.y - this.node.position.y) > EPSILON;
              if (!isOfBoundary) continue;

              if (this.prevPos.y < this.node.position.y) {
                this.pushToFooter();
              } else if (this.prevPos.y > this.node.position.y) {
                this.pushToHeader();
              }
            }
          } else {
            for (var _i4 = 0; _i4 < this.node.children.length; _i4++) {
              var _isOfBoundary = Math.abs(this.prevPos.x - this.node.position.x) > EPSILON;

              if (!_isOfBoundary) continue;

              if (this.prevPos.x > this.node.position.x) {
                this.pushToFooter();
              } else if (this.prevPos.x < this.node.position.x) {
                this.pushToHeader();
              }
            }
          }

          this.prevPos = this.node.position.clone();
        }
        /** 向尾部填充 force如果为true 则强制填充 */
        ;

        _proto.pushToFooter = function pushToFooter(force) {
          if (force === void 0) {
            force = false;
          }

          if (this.vertical) {
            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              var _this$header4;

              if (force || this.headerBoundary - this.paddingTop > this.viewHeaderBoundary + ((_this$header4 = this.header) === null || _this$header4 === void 0 ? void 0 : _this$header4.height)) {
                this.pushToFooterHandler();
              }
            } else {
              var _this$header5;

              if (force || this.footerBoundary - this.paddingTop > this.viewHeaderBoundary + ((_this$header5 = this.header) === null || _this$header5 === void 0 ? void 0 : _this$header5.height)) {
                this.pushToHeaderHandler();
              }
            }
          } else {
            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              var _this$header6;

              if (force || this.headerBoundary + this.paddingLeft < this.viewHeaderBoundary - ((_this$header6 = this.header) === null || _this$header6 === void 0 ? void 0 : _this$header6.width)) {
                this.pushToFooterHandler();
              }
            } else {
              var _this$header7;

              if (force || this.footerBoundary + this.paddingLeft < this.viewHeaderBoundary - ((_this$header7 = this.header) === null || _this$header7 === void 0 ? void 0 : _this$header7.width)) {
                this.pushToHeaderHandler();
              }
            }
          }
        }
        /** 向头部填充 force如果为true 则强制填充 */
        ;

        _proto.pushToHeader = function pushToHeader(force) {
          if (force === void 0) {
            force = false;
          }

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
        };

        _proto.pushToFooterHandler = function pushToFooterHandler() {
          var _this$header8, _this$header9;

          var node = (_this$header8 = this.header) === null || _this$header8 === void 0 ? void 0 : _this$header8.node;

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
          (_this$header9 = this.header) === null || _this$header9 === void 0 ? void 0 : _this$header9.node.setSiblingIndex(this.node.children.length);
        };

        _proto.pushToHeaderHandler = function pushToHeaderHandler() {
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
            var accommodate = this.isAccommodateByLeft(this.header);

            if (accommodate) {
              this.resetChilds(true);
            }
          }
        }
        /** 通知给定的node刷新数据 */
        ;

        _proto.notifyRefreshItem = function notifyRefreshItem(target) {
          EventHandler.emitEvents(this.refreshItemEvents, target, target['__index']);
        }
        /** 分帧加载 */
        ;

        _proto.getGeneratorLength =
        /*#__PURE__*/
        regeneratorRuntime.mark(function getGeneratorLength(length, callback) {
          var _len2,
              params,
              _key2,
              i,
              result,
              _args3 = arguments;

          return regeneratorRuntime.wrap(function getGeneratorLength$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  for (_len2 = _args3.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
                    params[_key2 - 2] = _args3[_key2];
                  }

                  i = 0;

                case 2:
                  if (!(i < length)) {
                    _context3.next = 13;
                    break;
                  }

                  result = callback.apply(void 0, [i].concat(params));

                  if (!result) {
                    _context3.next = 9;
                    break;
                  }

                  _context3.next = 7;
                  return;

                case 7:
                  _context3.next = 10;
                  break;

                case 9:
                  return _context3.abrupt("return");

                case 10:
                  i++;
                  _context3.next = 2;
                  break;

                case 13:
                case "end":
                  return _context3.stop();
              }
            }
          }, getGeneratorLength);
        })
        /** 分帧执行 */
        ;

        _proto.exeGenerator = function exeGenerator(generator, duration) {
          return new Promise(function (resolve, reject) {
            var gen = generator;

            var execute = function execute() {
              var startTime = new Date().getTime();

              for (var iter = gen.next();; iter = gen.next()) {
                if (iter == null || iter.done) {
                  resolve(null);
                  return;
                }

                if (new Date().getTime() - startTime > duration) {
                  setTimeout(function () {
                    return execute();
                  }, director.getDeltaTime());
                  return;
                }
              }
            };

            execute();
          });
        };

        _createClass(SuperLayout, [{
          key: "vertical",
          get:
          /** 是否垂直滚动 */
          function get() {
            return this.layoutType == Type.VERTICAL;
          }
          /** 是否水平滚动 */

        }, {
          key: "horizontal",
          get: function get() {
            return this.layoutType == Type.HORIZONTAL;
          }
        }, {
          key: "transform",
          get: function get() {
            return this.node._uiProps.uiTransformComp;
          }
          /** View 可容纳的宽度 */

        }, {
          key: "accommodWidth",
          get: function get() {
            return this.view.width - this.paddingLeft - this.paddingRight;
          }
          /** View 可容纳的高度 */

        }, {
          key: "accommodHeight",
          get: function get() {
            return this.view.height - this.paddingTop - this.paddingBottom;
          }
          /** 头部的节点 */

        }, {
          key: "header",
          get: function get() {
            if (this.node.children.length == 0) return null;
            return this.node.children[0]._uiProps.uiTransformComp;
          }
          /** 底部的节点 */

        }, {
          key: "footer",
          get: function get() {
            if (this.node.children.length == 0) return null;
            return this.node.children[this.node.children.length - 1]._uiProps.uiTransformComp;
          }
          /** 头部索引 */

        }, {
          key: "headerIndex",
          get: function get() {
            if (!this.header) return -1;
            var node = this.header.node;
            return node["__index"];
          }
          /** 底部索引 */

        }, {
          key: "footerIndex",
          get: function get() {
            if (!this.footer) return -1;
            var node = this.footer.node;
            return node["__index"];
          }
          /** Item起始位置 */

        }, {
          key: "viewStartPoint",
          get: function get() {
            var pos = new Vec3();

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
          /** View 头部边界 */

        }, {
          key: "viewHeaderBoundary",
          get: function get() {
            var offset = 0;

            if (this.vertical) {
              offset = this.view.height * 0.5;
            } else {
              offset = this.view.width * -0.5;
            }

            return offset;
          }
          /** View 底部边界 */

        }, {
          key: "viewFooterBoundary",
          get: function get() {
            var offset = 0;

            if (this.vertical) {
              offset = this.view.height * -0.5;
            } else {
              offset = this.view.width * 0.5;
            }

            return offset;
          }
          /** 头部节点边界 */

        }, {
          key: "headerBoundary",
          get: function get() {
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
          /** 底部节点边界 */

        }, {
          key: "footerBoundary",
          get: function get() {
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
          /** 自动居中节点头部边界 */

        }, {
          key: "centerHeaderBoundary",
          get: function get() {
            var key = this.vertical ? "y" : "x";

            if (this.centerNode) {
              if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                  return this.headerBoundary + (this.viewHeaderBoundary - this.centerNode.position[key]);
                } else {
                  return this.footerBoundary + (this.viewHeaderBoundary - this.centerNode.position[key]);
                }
              } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                  return this.headerBoundary + (this.viewHeaderBoundary - this.centerNode.position[key]);
                } else {
                  return this.footerBoundary + (this.viewHeaderBoundary - this.centerNode.position[key]);
                }
              }
            } else {
              if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                return this.headerBoundary + (this.viewHeaderBoundary - this.view.node.position[key]);
              } else {
                return this.footerBoundary + (this.viewHeaderBoundary - this.view.node.position[key]);
              }
            }
          }
          /** 自动居中节点底部边界 */

        }, {
          key: "centerFooterBoundary",
          get: function get() {
            var key = this.vertical ? "y" : "x";

            if (this.centerNode) {
              if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                  return this.footerBoundary + (this.viewFooterBoundary - this.centerNode.position[key]);
                } else {
                  return this.headerBoundary + (this.viewFooterBoundary - this.centerNode.position[key]);
                }
              } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                  return this.footerBoundary + (this.viewFooterBoundary - this.centerNode.position[key]);
                } else {
                  return this.headerBoundary + (this.viewFooterBoundary - this.centerNode.position[key]);
                }
              }
            } else {
              if (this.vertical) {
                if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
                  return this.footerBoundary + (this.viewFooterBoundary - this.view.node.position[key]);
                } else {
                  return this.headerBoundary + (this.viewFooterBoundary - this.view.node.position[key]);
                }
              } else {
                if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
                  return this.footerBoundary + (this.viewFooterBoundary - this.view.node.position[key]);
                } else {
                  return this.headerBoundary + (this.viewFooterBoundary - this.view.node.position[key]);
                }
              }
            }
          }
          /** 是否超出左侧边界 */

        }, {
          key: "isOfLeftBoundary",
          get: function get() {
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
          /** 是否超出顶部边界 */

        }, {
          key: "isOfTopBoundary",
          get: function get() {
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
          /** 是否超出右侧边界 */

        }, {
          key: "isOfRightBoundary",
          get: function get() {
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

            if (!this.footer || this.fixedItemWidth <= this.view.width) {
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
          /** 是否超出底部边界 */

        }, {
          key: "isOfButtomBoundary",
          get: function get() {
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
          /** 从头部到底部的所有Item高度总和 */

        }, {
          key: "fixedItemHeight",
          get: function get() {
            if (!this.header) return 0;

            if (this.verticalAxisDirection == VerticalAxisDirection.TOP_TO_BOTTOM) {
              return Math.abs(this.getItemYMax(this.header)) + Math.abs(this.getItemYMin(this.footer));
            } else {
              return Math.abs(this.getItemYMin(this.header)) + Math.abs(this.getItemYMax(this.footer));
            }
          }
          /** 从头部到底部的所有Item宽度总和 */

        }, {
          key: "fixedItemWidth",
          get: function get() {
            if (!this.header) return 0;

            if (this.horizontalAxisDirection == HorizontalAxisDirection.LEFT_TO_RIGHT) {
              return Math.abs(this.getItemXMin(this.header)) + Math.abs(this.getItemXMax(this.footer));
            } else {
              return Math.abs(this.getItemXMax(this.header)) + Math.abs(this.getItemXMin(this.footer));
            }
          }
          /** 返回 header到 footer 之间的整体尺寸 如果Item数量不足以撑开View 则返回View尺寸 最小值是View尺寸 */

        }, {
          key: "contentSize",
          get: function get() {
            if (this.node.children.length == 0) return this.view.contentSize;
            var size = new Size(this.view.contentSize.width, this.view.contentSize.height);

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
        }, {
          key: "maxPrefabTotal",
          get:
          /** 已被创建的Item数量 */
          function get() {
            return this._maxPrefabTotal;
          }
        }, {
          key: "itemTotal",
          get:
          /** 数据长度 */
          function get() {
            return this._itemTotal;
          }
        }, {
          key: "centerPosition",
          get:
          /** 自动居中的参考位置 */
          function get() {
            if (!this._centerPosition) {
              this._centerPosition = new Vec3();

              if (this.autoCenter) {
                if (this.centerNode) {
                  var _this$centerNode$pare, _this$centerNode$pare2;

                  var worldPos = (_this$centerNode$pare = this.centerNode.parent) === null || _this$centerNode$pare === void 0 ? void 0 : (_this$centerNode$pare2 = _this$centerNode$pare._uiProps.uiTransformComp) === null || _this$centerNode$pare2 === void 0 ? void 0 : _this$centerNode$pare2.convertToWorldSpaceAR(this.centerNode.position);
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
        }]);

        return SuperLayout;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "view", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layoutType", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return Type.VERTICAL;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "verticalAxisDirection", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return VerticalAxisDirection.TOP_TO_BOTTOM;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "horizontalAxisDirection", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return HorizontalAxisDirection.LEFT_TO_RIGHT;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "groupItemTotal", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "multiple", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "paddingTop", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "paddingBottom", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "paddingLeft", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "paddingRight", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "spacingX", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "spacingY", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "affectedByScale", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "headerLoop", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "footerLoop", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "prefab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "refreshItemEvents", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "autoCenter", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "centerTime", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "centerNode", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "centerAnchor", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec2(.5, .5);
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=super-layout.js.map