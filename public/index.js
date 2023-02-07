'use strict';

var _react = _interopRequireDefault(require("react"));
var _reactDom = require("react-dom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function App() {
  return /*#__PURE__*/_react["default"].createElement("h1", null, "Hello World!");
}
var rootNode = document.getElementById('root');
var root = (0, _reactDom.createRoot)(rootNode);
root.render(App);