(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./assets/big.jpeg":
/*!*************************!*\
  !*** ./assets/big.jpeg ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"imgs/big.7fe234026848475ccda1884dca819919.jpeg\";\n\n//# sourceURL=webpack:///./assets/big.jpeg?");

/***/ }),

/***/ "./assets/small.jpeg":
/*!***************************!*\
  !*** ./assets/small.jpeg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"imgs/small.ca3a331e773bd6a26b6ccaaa980678b0.jpeg\";\n\n//# sourceURL=webpack:///./assets/small.jpeg?");

/***/ }),

/***/ "./src/index_viewer.js":
/*!*****************************!*\
  !*** ./src/index_viewer.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _big = __webpack_require__(/*! ../assets/big.jpeg */ \"./assets/big.jpeg\");\n\nvar _big2 = _interopRequireDefault(_big);\n\nvar _small = __webpack_require__(/*! ../assets/small.jpeg */ \"./assets/small.jpeg\");\n\nvar _small2 = _interopRequireDefault(_small);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n  var bigImage = document.createElement('img');\n  bigImage.src = _big2.default;\n  document.body.appendChild(bigImage);\n  var smallImage = document.createElement('img');\n  smallImage.src = _small2.default;\n  document.body.appendChild(smallImage);\n};\n\n//# sourceURL=webpack:///./src/index_viewer.js?");

/***/ })

}]);