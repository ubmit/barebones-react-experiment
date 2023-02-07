"use strict";

var _react = _interopRequireDefault(require("react"));
var _reactDom = require("react-dom");
var _jsxFileName = "/Users/guilherme/foo/src/index.js";
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function App() {
  return /*#__PURE__*/_react["default"].createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, "Hello World!");
}
var root = (0, _reactDom.createRoot)(document.getElementById('root'));
root.render( /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 3
  }
}, /*#__PURE__*/_react["default"].createElement(App, {
  __self: void 0,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }
})));