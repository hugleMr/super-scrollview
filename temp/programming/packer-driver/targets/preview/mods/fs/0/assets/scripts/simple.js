System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./baseMain"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, BaseMain, _dec, _class, _crd, ccclass, property, Simple;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Simple", Simple = (_dec = ccclass('Simple'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(Simple, _ref);

        function Simple() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = Simple.prototype;

        _proto.onLoad = function onLoad() {
          for (var i = 0; i < 50; i++) {
            this.datas.push({
              message: i
            });
          }

          this.layout.total(this.datas.length);
        };

        return Simple;
      }(_crd && BaseMain === void 0 ? (_reportPossibleCrUseOfBaseMain({
        error: Error()
      }), BaseMain) : BaseMain)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=simple.js.map