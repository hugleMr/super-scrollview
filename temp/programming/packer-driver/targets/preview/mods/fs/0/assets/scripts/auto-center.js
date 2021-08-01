System.register(["cce:/internal/code-quality/cr.mjs", "cc", "./simple"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Label, Simple, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, AutoCenter;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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

      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AutoCenter", AutoCenter = (_dec = ccclass('AutoCenter'), _dec2 = property(Label), _dec(_class = (_class2 = (_temp = /*#__PURE__*/function (_ref) {
        _inheritsLoose(AutoCenter, _ref);

        function AutoCenter() {
          var _this;

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _ref.call.apply(_ref, [this].concat(args)) || this;

          _initializerDefineProperty(_assertThisInitialized(_this), "label", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_assertThisInitialized(_this), "key", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        var _proto = AutoCenter.prototype;

        _proto.start = function start() {
          this.label.string = "\u5F53\u524D\u4E2D\u5FC3\u951A\u70B9\uFF1A" + this.layout.centerAnchor[this.key];
          this.layout.scrollToCenter();
        };

        _proto.onInputAnchor = function onInputAnchor(event) {
          var anchor = Number(event.string);
          if (isNaN(anchor)) return;
          this.layout.centerAnchor[this.key] = anchor;
          this.layout.scrollToCenter();
          this.label.string = "\u5F53\u524D\u4E2D\u5FC3\u951A\u70B9\uFF1A" + this.layout.centerAnchor[this.key];
        };

        return AutoCenter;
      }(_crd && Simple === void 0 ? (_reportPossibleCrUseOfSimple({
        error: Error()
      }), Simple) : Simple), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "key", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=auto-center.js.map