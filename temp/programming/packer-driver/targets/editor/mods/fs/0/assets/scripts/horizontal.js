System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./baseItem"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Size, BaseItem, _dec, _class, _crd, ccclass, property, Horizontal;

  function _reportPossibleCrUseOfBaseItem(extras) {
    _reporterNs.report("BaseItem", "./baseItem", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Size = _cc.Size;
    }, function (_baseItem) {
      BaseItem = _baseItem.BaseItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3055FDRN9Nd4hD6P55dVQN", "horizontal", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Horizontal", Horizontal = (_dec = ccclass('Horizontal'), _dec(_class = class Horizontal extends (_crd && BaseItem === void 0 ? (_reportPossibleCrUseOfBaseItem({
        error: Error()
      }), BaseItem) : BaseItem) {
        onLoad() {
          var _this$transform;

          this.input.placeholder = (_this$transform = this.transform) === null || _this$transform === void 0 ? void 0 : _this$transform.width.toString();
        }

        onInput() {
          var _this$transform2;

          if (isNaN(Number(this.input.string))) return;
          (_this$transform2 = this.transform) === null || _this$transform2 === void 0 ? void 0 : _this$transform2.setContentSize(new Size(Number(this.input.string), this.transform.contentSize.height));
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=horizontal.js.map