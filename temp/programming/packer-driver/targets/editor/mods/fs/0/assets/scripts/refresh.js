System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./baseMain", "./item"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Node, Tween, Vec3, Label, BaseMain, Item, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, Refresh;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBaseMain(extras) {
    _reporterNs.report("BaseMain", "./baseMain", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "./item", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      Label = _cc.Label;
    }, function (_baseMain) {
      BaseMain = _baseMain.BaseMain;
    }, function (_item) {
      Item = _item.Item;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89a5cQ/qBdEaLFyit/snMpv", "refresh", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Refresh", Refresh = (_dec = ccclass('Refresh'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = (_temp = class Refresh extends (_crd && BaseMain === void 0 ? (_reportPossibleCrUseOfBaseMain({
        error: Error()
      }), BaseMain) : BaseMain) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "header", _descriptor, this);

          _initializerDefineProperty(this, "footer", _descriptor2, this);

          _defineProperty(this, "datas", []);
        }

        onLoad() {
          this.header.setScale(new Vec3(1, 0, 1));
          this.footer.setScale(new Vec3(1, 0, 1)); // for (let i = 0; i < 10; i++) {
          //     this.datas.push({
          //         message: i
          //     })
          // }

          this.layout.total(this.datas.length);
        }

        onRefreshEvent(item, index) {
          var _item$getComponent;

          (_item$getComponent = item.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
            error: Error()
          }), Item) : Item)) === null || _item$getComponent === void 0 ? void 0 : _item$getComponent.show(this.datas[index], index, this.onClickItem.bind(this));
        }

        onClickItem(index) {}

        onHeader(scrollView, event) {
          if (event.progress > 2) {
            if (!this.header['playing']) {
              this.headerTween = new Tween(this.header);
              this.headerTween.to(0.518, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: "elasticOut"
              });
              this.headerTween.start();
              this.header['playing'] = true;
            }
          } else {
            var _this$headerTween;

            (_this$headerTween = this.headerTween) === null || _this$headerTween === void 0 ? void 0 : _this$headerTween.stop();
            this.header['playing'] = false;
            this.header.setScale(new Vec3(1, event.progress, 1));
          }

          let label = this.header.getComponentInChildren(Label);

          if (event.stage == "touch") {
            label.string = "↓ 下拉刷新";
          }

          if (event.stage == "wait") {
            label.string = "↑ 松开刷新";
          }

          if (event.stage == "lock") {
            label.string = this.datas.length == 0 ? "没有数据" : "刷新中...";
          }

          if (event.stage == 'release') {
            label.string = "";
          }

          if (event.action) {
            this.scheduleOnce(() => this.layout.total(this.datas.length), 2);
          }
        }

        onFooter(scrollView, event) {
          if (event.progress > 2) {
            if (!this.footer['playing']) {
              this.footerTween = new Tween(this.footer);
              this.footerTween.to(0.518, {
                scale: new Vec3(1, 1, 1)
              }, {
                easing: "elasticOut"
              });
              this.footerTween.start();
              this.footer['playing'] = true;
            }
          } else {
            var _this$footerTween;

            (_this$footerTween = this.footerTween) === null || _this$footerTween === void 0 ? void 0 : _this$footerTween.stop();
            this.footer['playing'] = false;
            this.footer.setScale(new Vec3(1, event.progress, 1));
          }

          let label = this.footer.getComponentInChildren(Label);

          if (event.stage == "touch") {
            label.string = "↑ 上拉加载";
          }

          if (event.stage == "wait") {
            label.string = "↓ 松开加载";
          }

          if (event.stage == "lock") {
            label.string = "加载中...";
          }

          if (event.stage == 'release') {
            label.string = "";
          }

          if (event.action) {
            for (let i = 0; i < 10; i++) {
              this.datas.push({
                message: `${this.datas.length}`
              });
            }

            this.scheduleOnce(() => this.layout.total(this.datas.length), 2);
          }
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "header", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "footer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=refresh.js.map