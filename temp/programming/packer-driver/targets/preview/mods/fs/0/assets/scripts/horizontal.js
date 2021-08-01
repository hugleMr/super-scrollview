System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./baseItem"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Size, BaseItem, _dec, _class, _crd, ccclass, property, Horizontal;

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("Horizontal", Horizontal = (_dec = ccclass('Horizontal'), _dec(_class = /*#__PURE__*/function (_ref) {
        _inheritsLoose(Horizontal, _ref);

        function Horizontal() {
          return _ref.apply(this, arguments) || this;
        }

        var _proto = Horizontal.prototype;

        _proto.onLoad = function onLoad() {
          var _this$transform;

          this.input.placeholder = (_this$transform = this.transform) === null || _this$transform === void 0 ? void 0 : _this$transform.width.toString();
        };

        _proto.onInput = function onInput() {
          var _this$transform2;

          if (isNaN(Number(this.input.string))) return;
          (_this$transform2 = this.transform) === null || _this$transform2 === void 0 ? void 0 : _this$transform2.setContentSize(new Size(Number(this.input.string), this.transform.contentSize.height));
        };

        return Horizontal;
      }(_crd && BaseItem === void 0 ? (_reportPossibleCrUseOfBaseItem({
        error: Error()
      }), BaseItem) : BaseItem)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=horizontal.js.map