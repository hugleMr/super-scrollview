System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./simple"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, Simple, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, AutoCenter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSimple(extras) {
    _reporterNs.report("Simple", "./simple", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_simple) {
      Simple = _simple.Simple;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4c92cs7z69H1oh1nqJfFooW", "auto-center", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AutoCenter", AutoCenter = (_dec = ccclass('AutoCenter'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = class AutoCenter extends (_crd && Simple === void 0 ? (_reportPossibleCrUseOfSimple({
        error: Error()
      }), Simple) : Simple) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "key", _descriptor2, this);
        }

        start() {
          this.label.string = `当前中心锚点：${this.layout.centerAnchor[this.key]}`;
          this.layout.scrollToCenter();
        }

        onInputAnchor(event) {
          let anchor = Number(event.string);
          if (isNaN(anchor)) return;
          this.layout.centerAnchor[this.key] = anchor;
          this.layout.scrollToCenter();
          this.label.string = `当前中心锚点：${this.layout.centerAnchor[this.key]}`;
        }

      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=auto-center.js.map