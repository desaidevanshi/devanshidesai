(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "./components/Loader/index.js");
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button.module.scss */ "./components/Button/button.module.scss");
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_6__);



var _excluded = ["variant", "className", "isDisabled", "children", "isLoading", "onClick"];

var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\components\\Button\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // main button

var Button = function Button(_ref) {
  var _classNames;

  var variant = _ref.variant,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      children = _ref.children,
      isLoading = _ref.isLoading,
      onClick = _ref.onClick,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", _objectSpread(_objectSpread({
    type: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(!isDisabled && !isLoading && (_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[variant], (_classNames = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, (_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default().disable), isDisabled || isLoading), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classNames, className, !!className), _classNames)),
    onClick: isDisabled || isLoading ? function () {} : onClick
  }, rest), {}, {
    children: [isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Loader__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 19
    }, _this), children]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 3
  }, _this);
};

Button.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["portHomeButton", "portResume", "portSocialButton", "disable", "portNavButton", "portServiceButton"])
};
Button.defaultProps = {
  variant: "portHomeButton"
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../container/footer */ "./container/footer/index.js");


var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\components\\Layout\\index.js",
    _this = undefined;

 // import Navigation from "../Navbar";



var Layout = function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container_footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Loader/index.js":
/*!************************************!*\
  !*** ./components/Loader/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.module.scss */ "./components/Loader/loader.module.scss");
/* harmony import */ var _loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\components\\Loader\\index.js",
    _this = undefined;





var Loader = function Loader(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "basic" : _ref$variant,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[variant], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, className, !!className)),
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("circle", {
      cx: "12",
      cy: "12",
      r: "10",
      stroke: "currentColor",
      strokeWidth: "4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      fill: "currentColor",
      d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
};

Loader.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["basic"]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
Loader.defaultProps = {
  variant: "basic",
  className: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./container/footer/index.js":
/*!***********************************!*\
  !*** ./container/footer/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.js");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.module.scss */ "./container/footer/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\container\\footer\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Github = function Github(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

Github.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  className: "ionicon",
  viewBox: "0 0 512 512"
};

var Linkedin = function Linkedin(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

Linkedin.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  className: "ionicon",
  viewBox: "0 0 512 512"
};

var Twitter = function Twitter(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5z"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

Twitter.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  className: "ionicon",
  viewBox: "0 0 512 512"
};

var Gmail = function Gmail(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56zm-14.18 92.63-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26z"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

Gmail.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  className: "ionicon",
  viewBox: "0 0 512 512"
};


var Footer = function Footer() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    id: "footer",
    className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footerSoc),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: "https://github.com/desaidevanshi",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().portSocialBtn),
          variant: "portSocialButton",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Github, {
            className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btnHover),
            height: 18,
            width: 18
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: "www.linkedin.com/in/devanshi-desai-5716bb182",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().portSocialBtn),
          variant: "portSocialButton",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Linkedin, {
            className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btnHover),
            height: 18,
            width: 18
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: "https://twitter.com/Devansh70765923",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().portSocialBtn),
          variant: "portSocialButton",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Twitter, {
            className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btnHover),
            height: 18,
            width: 18
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
        href: "mailto:contact.ddevanshi@gmail.com",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().portSocialBtn),
          variant: "portSocialButton",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Gmail, {
            className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btnHover),
            height: 18,
            width: 18
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footerLine)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footerText),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("footer", {
        children: "Devanshi \xA9 2021. All Right Reserved, Designed By Devanshi Desai."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/_global.scss */ "./styles/_global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");



var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.default, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false);
}

/***/ }),

/***/ "./components/Button/button.module.scss":
/*!**********************************************!*\
  !*** ./components/Button/button.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"portHomeButton": "button_portHomeButton__2t7wq",
	"portSocialButton": "button_portSocialButton__3IQCb",
	"portResume": "button_portResume__3G3zi",
	"portServiceButton": "button_portServiceButton__wlJb1",
	"disable": "button_disable__FwYY5"
};


/***/ }),

/***/ "./components/Loader/loader.module.scss":
/*!**********************************************!*\
  !*** ./components/Loader/loader.module.scss ***!
  \**********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"basic": "loader_basic__5U2sW",
	"spin": "loader_spin__2-ti_"
};


/***/ }),

/***/ "./container/footer/footer.module.scss":
/*!*********************************************!*\
  !*** ./container/footer/footer.module.scss ***!
  \*********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "footer_footer__243cP",
	"footerMain": "footer_footerMain__2YjBT",
	"contactF": "footer_contactF__hCNTI",
	"footerText": "footer_footerText__1o5AP",
	"footerSoc": "footer_footerSoc__1yy3a",
	"portSocialBtn": "footer_portSocialBtn__L9s-8",
	"btnHover": "footer_btnHover__1sHuZ",
	"footerLine": "footer_footerLine__x3Dxp"
};


/***/ }),

/***/ "./styles/_global.scss":
/*!*****************************!*\
  !*** ./styles/_global.scss ***!
  \*****************************/
/***/ (function() {



/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9jb21wb25lbnRzL0xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL2NvbXBvbmVudHMvTG9hZGVyL2luZGV4LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29udGFpbmVyL2Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9jb21wb25lbnRzL0J1dHRvbi9idXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9jb21wb25lbnRzL0xvYWRlci9sb2FkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9jb250YWluZXIvZm9vdGVyL2Zvb3Rlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJCdXR0b24iLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwiaXNEaXNhYmxlZCIsImNoaWxkcmVuIiwiaXNMb2FkaW5nIiwib25DbGljayIsInJlc3QiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiTGF5b3V0IiwiTG9hZGVyIiwic3RyaW5nIiwiR2l0aHViIiwiTGlua2VkaW4iLCJUd2l0dGVyIiwiR21haWwiLCJGb290ZXIiLCJmb290ZXJMaW5lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDaEJyRSxtQ0FBbUMsbUJBQU8sQ0FBQyxnSEFBbUM7O0FBRTlFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixROzs7Ozs7Ozs7O0FDdEJyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsdUJBQXVCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBeUIsbUJBQW1CLHlCQUF5QixR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O0FBQ0E7QUFFZSxTQUFTRSxLQUFULE9BQXlDO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUN0RCxzQkFDRTtBQUFBLDJCQUNFO0FBQUEsNkJBQ0UsOERBQUMsdURBQUQ7QUFBQSwrQkFDRSw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLG1CQURGO0FBU0QsQzs7Ozs7Ozs7OztBQ2JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkEsd0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4uL0xvYWRlclwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuc2Nzcyc7XG5cbi8vIG1haW4gYnV0dG9uXG5jb25zdCBCdXR0b24gPSAoe1xuICB2YXJpYW50LFxuICBjbGFzc05hbWUsXG4gIGlzRGlzYWJsZWQsXG4gIGNoaWxkcmVuLFxuICBpc0xvYWRpbmcsXG4gIG9uQ2xpY2ssXG4gIC4uLnJlc3Rcbn0pID0+IChcbiAgPGJ1dHRvblxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyghaXNEaXNhYmxlZCAmJiAhaXNMb2FkaW5nICYmIHN0eWxlc1t2YXJpYW50XSwge1xuICAgICAgW3N0eWxlcy5kaXNhYmxlXTogaXNEaXNhYmxlZCB8fCBpc0xvYWRpbmcsXG4gICAgICBbY2xhc3NOYW1lXTogISFjbGFzc05hbWUsXG4gICAgfSl9XG4gICAgb25DbGljaz17aXNEaXNhYmxlZCB8fCBpc0xvYWRpbmcgPyAoKSA9PiB7fSA6IG9uQ2xpY2t9XG4gICAgey4uLnJlc3R9XG4gID5cbiAgICB7aXNMb2FkaW5nICYmIDxMb2FkZXIgLz59XG4gICAge2NoaWxkcmVufVxuICA8L2J1dHRvbj5cbik7XG5cbkJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJwb3J0SG9tZUJ1dHRvblwiLFxuICAgIFwicG9ydFJlc3VtZVwiLFxuICAgIFwicG9ydFNvY2lhbEJ1dHRvblwiLFxuICAgIFwiZGlzYWJsZVwiLFxuICAgIFwicG9ydE5hdkJ1dHRvblwiLFxuICAgIFwicG9ydFNlcnZpY2VCdXR0b25cIixcbiAgXSksXG59O1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiBcInBvcnRIb21lQnV0dG9uXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247XG4iLCJpbXBvcnQgeyBDaGlsZHJlbiB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IE5hdmlnYXRpb24gZnJvbSBcIi4uL05hdmJhclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vLi4vY29udGFpbmVyL2Zvb3RlclwiO1xuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXY+XG4gICAgey8qIDxOYXZpZ2F0aW9uIC8+ICovfVxuICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XG4gICAgPEZvb3RlciAvPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcbiIsImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2xvYWRlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBMb2FkZXIgPSAoeyB2YXJpYW50ID0gXCJiYXNpY1wiLCBjbGFzc05hbWUgfSkgPT4gKFxuICA8c3ZnXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlc1t2YXJpYW50XSwgeyBbY2xhc3NOYW1lXTogISFjbGFzc05hbWUgfSl9XG4gICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgZmlsbD1cIm5vbmVcIlxuICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICA+XG4gICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZVdpZHRoPVwiNFwiIC8+XG4gICAgPHBhdGhcbiAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgZD1cIk00IDEyYTggOCAwIDAxOC04VjBDNS4zNzMgMCAwIDUuMzczIDAgMTJoNHptMiA1LjI5MUE3Ljk2MiA3Ljk2MiAwIDAxNCAxMkgwYzAgMy4wNDIgMS4xMzUgNS44MjQgMyA3LjkzOGwzLTIuNjQ3elwiXG4gICAgPjwvcGF0aD5cbiAgPC9zdmc+XG4pO1xuXG5Mb2FkZXIucHJvcFR5cGVzID0ge1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1wiYmFzaWNcIl0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5Mb2FkZXIuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiBcImJhc2ljXCIsXG4gIGNsYXNzTmFtZTogXCJcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsImltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgR2l0aHViIGZyb20gXCIuLi8uLi9wdWJsaWMvc3ZnL2xvZ28tZ2l0aHViLnN2Z1wiO1xuaW1wb3J0IExpbmtlZGluIGZyb20gXCIuLi8uLi9wdWJsaWMvc3ZnL2xvZ28tbGlua2VkaW4uc3ZnXCI7XG5pbXBvcnQgVHdpdHRlciBmcm9tIFwiLi4vLi4vcHVibGljL3N2Zy9sb2dvLXR3aXR0ZXIuc3ZnXCI7XG5pbXBvcnQgR21haWwgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdmcvbWFpbC5zdmdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZm9vdGVyLm1vZHVsZS5zY3NzXCI7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cImZvb3RlclwiIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclNvY30+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZGVzYWlkZXZhbnNoaVwiPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucG9ydFNvY2lhbEJ0bn0gdmFyaWFudD1cInBvcnRTb2NpYWxCdXR0b25cIj5cbiAgICAgICAgICAgIDxHaXRodWIgY2xhc3NOYW1lPXtzdHlsZXMuYnRuSG92ZXJ9IGhlaWdodD17MTh9IHdpZHRoPXsxOH0gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwid3d3LmxpbmtlZGluLmNvbS9pbi9kZXZhbnNoaS1kZXNhaS01NzE2YmIxODJcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnBvcnRTb2NpYWxCdG59IHZhcmlhbnQ9XCJwb3J0U29jaWFsQnV0dG9uXCI+XG4gICAgICAgICAgICA8TGlua2VkaW4gY2xhc3NOYW1lPXtzdHlsZXMuYnRuSG92ZXJ9IGhlaWdodD17MTh9IHdpZHRoPXsxOH0gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9EZXZhbnNoNzA3NjU5MjNcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnBvcnRTb2NpYWxCdG59IHZhcmlhbnQ9XCJwb3J0U29jaWFsQnV0dG9uXCI+XG4gICAgICAgICAgICA8VHdpdHRlciBjbGFzc05hbWU9e3N0eWxlcy5idG5Ib3Zlcn0gaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdC5kZGV2YW5zaGlAZ21haWwuY29tXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3J0U29jaWFsQnRufSB2YXJpYW50PVwicG9ydFNvY2lhbEJ1dHRvblwiPlxuICAgICAgICAgICAgPEdtYWlsIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkhvdmVyfSBoZWlnaHQ9ezE4fSB3aWR0aD17MTh9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyTWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyVGV4dH0+XG4gICAgICAgICAgICA8Y2FwdGlvbj5EZXZhbnNoaTwvY2FwdGlvbj5cbiAgICAgICAgICAgIDxzcGFuPkZ1bGwtU3RhY2sgRGV2ZWxvcGVyPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWN0Rn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUZXh0fT5cbiAgICAgICAgICAgIDxjYXB0aW9uPkVtYWlsPC9jYXB0aW9uPlxuICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86Y29udGFjdC5kZGV2YW5zaGlAZ21haWwuY29tXCI+XG4gICAgICAgICAgICAgICAgY29udGFjdC5kZGV2YW5zaGlAZ21haWwuY29tXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyVGV4dH0+XG4gICAgICAgICAgICA8Y2FwdGlvbj5QaG9uZTwvY2FwdGlvbj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwidGVsOjk3MjY3MTQ0OTRcIj4rOTEtOTcyNjcxNDQ5NDwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlckxpbmV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclRleHR9PlxuICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgIERldmFuc2hpIMKpIDIwMjEuIEFsbCBSaWdodCBSZXNlcnZlZCwgRGVzaWduZWQgQnkgRGV2YW5zaGkgRGVzYWkuXG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL19nbG9iYWwuc2Nzc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L0xheW91dD5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9ydEhvbWVCdXR0b25cIjogXCJidXR0b25fcG9ydEhvbWVCdXR0b25fXzJ0N3dxXCIsXG5cdFwicG9ydFNvY2lhbEJ1dHRvblwiOiBcImJ1dHRvbl9wb3J0U29jaWFsQnV0dG9uX18zSVFDYlwiLFxuXHRcInBvcnRSZXN1bWVcIjogXCJidXR0b25fcG9ydFJlc3VtZV9fM0czemlcIixcblx0XCJwb3J0U2VydmljZUJ1dHRvblwiOiBcImJ1dHRvbl9wb3J0U2VydmljZUJ1dHRvbl9fd2xKYjFcIixcblx0XCJkaXNhYmxlXCI6IFwiYnV0dG9uX2Rpc2FibGVfX0Z3WVk1XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJiYXNpY1wiOiBcImxvYWRlcl9iYXNpY19fNVUyc1dcIixcblx0XCJzcGluXCI6IFwibG9hZGVyX3NwaW5fXzItdGlfXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXJfZm9vdGVyX18yNDNjUFwiLFxuXHRcImZvb3Rlck1haW5cIjogXCJmb290ZXJfZm9vdGVyTWFpbl9fMllqQlRcIixcblx0XCJjb250YWN0RlwiOiBcImZvb3Rlcl9jb250YWN0Rl9faENOVElcIixcblx0XCJmb290ZXJUZXh0XCI6IFwiZm9vdGVyX2Zvb3RlclRleHRfXzFvNUFQXCIsXG5cdFwiZm9vdGVyU29jXCI6IFwiZm9vdGVyX2Zvb3RlclNvY19fMXl5M2FcIixcblx0XCJwb3J0U29jaWFsQnRuXCI6IFwiZm9vdGVyX3BvcnRTb2NpYWxCdG5fX0w5cy04XCIsXG5cdFwiYnRuSG92ZXJcIjogXCJmb290ZXJfYnRuSG92ZXJfXzFzSHVaXCIsXG5cdFwiZm9vdGVyTGluZVwiOiBcImZvb3Rlcl9mb290ZXJMaW5lX194M0R4cFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==