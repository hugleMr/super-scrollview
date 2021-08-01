System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./baseMain"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseMain, _dec, _class, _crd, ccclass, property, Simple;

  function _reportPossibleCrUseOfBaseMain(extras) {
    _reporterNs.report("BaseMain", "./baseMain", _context.meta, extras);
  }

  return {
    setters: [function (_cceInternalCodeQualityCrMjs) {
      _reporterNs = _cceInternalCodeQualityCrMjs;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
    }, function (_baseMain) {
      BaseMain = _baseMain.BaseMain;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5f170uFuGRCJZCiHTMaOxhs", "simple", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Simple", Simple = (_dec = ccclass('Simple'), _dec(_class = class Simple extends (_crd && BaseMain === void 0 ? (_reportPossibleCrUseOfBaseMain({
        error: Error()
      }), BaseMain) : BaseMain) {
        onLoad() {
          for (let i = 0; i < 50; i++) {
            this.datas.push({
              message: i
            });
          }

          this.layout.total(this.datas.length);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=simple.js.map