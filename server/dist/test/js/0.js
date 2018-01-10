webpackJsonp([0],{

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactstrap = __webpack_require__(150);

var _times = __webpack_require__(151);

var _times2 = _interopRequireDefault(_times);

__webpack_require__(152);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Base = function (_Component) {
  _inherits(Base, _Component);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
  }

  _createClass(Base, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'buttons' },
        (0, _times2.default)(this.props.CountOfButtons, function (i) {
          return _react2.default.createElement('div', { id: "btn_" + i, key: i });
        })
      );
    }
  }]);

  return Base;
}(_react.Component);

Base.defaultProps = {
  CountOfButtons: 0
};
Base.propTypes = {
  CountOfButtons: _propTypes2.default.number.isRequired,
  views: _propTypes2.default.number.isRequired
};
exports.default = Base;

/***/ })

});