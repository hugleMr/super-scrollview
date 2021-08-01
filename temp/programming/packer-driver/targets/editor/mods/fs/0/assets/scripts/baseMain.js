System.register(["cce:/internal/code-quality/cr.mjs", "cc", "../core/super-layout", "./baseItem"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, EditBox, director, SuperLayout, BaseItem, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, BaseMain;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSuperLayout(extras) {
    _reporterNs.report("SuperLayout", "../core/super-layout", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBaseItem(extras) {
    _reporterNs.report("BaseItem", "./baseItem", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      director = _cc.director;
    }, function (_coreSuperLayout) {
      SuperLayout = _coreSuperLayout.SuperLayout;
    }, function (_baseItem) {
      BaseItem = _baseItem.BaseItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d886eg3cJtKoJOzO4sEJHBZ", "baseMain", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BaseMain", BaseMain = (_dec = ccclass('BaseMain'), _dec2 = property(_crd && SuperLayout === void 0 ? (_reportPossibleCrUseOfSuperLayout({
        error: Error()
      }), SuperLayout) : SuperLayout), _dec3 = property(EditBox), _dec(_class = (_class2 = (_temp = class BaseMain extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "layout", _descriptor, this);

          _initializerDefineProperty(this, "input", _descriptor2, this);

          _defineProperty(this, "datas", []);
        }

        toHeader() {
          this.layout.scrollToHeader(1);
        }

        toFooter() {
          this.layout.scrollToFooter(1);
        }

        toIndex() {
          var index = Number(this.input.string);
          if (isNaN(index)) return;
          this.layout.scrollToIndex(index, 1);
        }

        toBack() {
          director.loadScene("main");
        }

        onRefreshEvent(item, index) {
          var _item$getComponent;

          (_item$getComponent = item.getComponent(_crd && BaseItem === void 0 ? (_reportPossibleCrUseOfBaseItem({
            error: Error()
          }), BaseItem) : BaseItem)) === null || _item$getComponent === void 0 ? void 0 : _item$getComponent.show(this.datas[index], index, this.onClickItem.bind(this));
        }

        onClickItem(index) {
          this.datas.splice(index, 1);
          this.layout.total(this.datas.length);
        }

        addItem(event, args) {
          let count = Number(args);
          if (isNaN(count)) return;

          for (let i = 0; i < count; i++) {
            this.datas.push({
              message: this.datas.length
            });
          }

          this.layout.total(this.datas.length);
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "input", [_dec3], {
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
//# sourceMappingURL=baseMain.js.map