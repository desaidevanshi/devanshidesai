(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "./components/Loader/index.js");
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./button.module.scss */ "./components/Button/button.module.scss");
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\components\\Button\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 // main button

var Button = function Button(_ref) {
  var _classNames;

  var variant = _ref.variant,
      className = _ref.className,
      isDisabled = _ref.isDisabled,
      children = _ref.children,
      isLoading = _ref.isLoading,
      onClick = _ref.onClick,
      rest = (0,D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(_ref, ["variant", "className", "isDisabled", "children", "isLoading", "onClick"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", _objectSpread(_objectSpread({
    type: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(!isDisabled && !isLoading && (_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default())[variant], (_classNames = {}, (0,D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_classNames, (_button_module_scss__WEBPACK_IMPORTED_MODULE_6___default().disable), isDisabled || isLoading), (0,D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(_classNames, className, !!className), _classNames)),
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

_c = Button;
Button.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["portHomeButton", "portResume", "portSocialButton", "disable", "portNavButton", "portServiceButton"])
};
Button.defaultProps = {
  variant: "portHomeButton"
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c;

$RefreshReg$(_c, "Button");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Layout/index.js":
/*!************************************!*\
  !*** ./components/Layout/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _container_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../container/footer */ "./container/footer/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


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

_c = Layout;
/* harmony default export */ __webpack_exports__["default"] = (Layout);

var _c;

$RefreshReg$(_c, "Layout");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/Loader/index.js":
/*!************************************!*\
  !*** ./components/Loader/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.module.scss */ "./components/Loader/loader.module.scss");
/* harmony import */ var _loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_loader_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\components\\Loader\\index.js",
    _this = undefined;





var Loader = function Loader(_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "basic" : _ref$variant,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_loader_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[variant], (0,D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, className, !!className)),
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

_c = Loader;
Loader.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["basic"]),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)
};
Loader.defaultProps = {
  variant: "basic",
  className: ""
};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

var _c;

$RefreshReg$(_c, "Loader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./container/footer/index.js":
/*!***********************************!*\
  !*** ./container/footer/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.js");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.module.scss */ "./container/footer/footer.module.scss");
/* harmony import */ var _footer_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\container\\footer\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Github = function Github(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"
    }, void 0, false, void 0, this)
  }), void 0, false, void 0, this);
};

_c2 = Github;
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

_c3 = Linkedin;
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

_c4 = Twitter;
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

_c5 = Gmail;
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

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "Footer");
$RefreshReg$(_c2, "Github");
$RefreshReg$(_c3, "Linkedin");
$RefreshReg$(_c4, "Twitter");
$RefreshReg$(_c5, "Gmail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MyApp; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/_global.scss */ "./styles/_global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Documents_Projects_devanshi_portfolio_next_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



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
_c = MyApp;

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./components/Button/button.module.scss":
/*!**********************************************!*\
  !*** ./components/Button/button.module.scss ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./button.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Button/button.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./button.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Button/button.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./button.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Button/button.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./components/Loader/loader.module.scss":
/*!**********************************************!*\
  !*** ./components/Loader/loader.module.scss ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./loader.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Loader/loader.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./loader.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Loader/loader.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./loader.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Loader/loader.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./container/footer/footer.module.scss":
/*!*********************************************!*\
  !*** ./container/footer/footer.module.scss ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./container/footer/footer.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./container/footer/footer.module.scss",
      function () {
        content = __webpack_require__(/*! !!../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!../../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!../../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./footer.module.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./container/footer/footer.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./styles/_global.scss":
/*!*****************************!*\
  !*** ./styles/_global.scss ***!
  \*****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./_global.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./styles/_global.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./_global.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./styles/_global.scss",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!../node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!../node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./_global.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./styles/_global.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Button/button.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Button/button.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button_portHomeButton__2t7wq {\n  cursor: pointer;\n  border-width: 2px;\n  border-style: solid;\n  background-color: var(--color-button-accent);\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n}.button_portHomeButton__2t7wq:hover {\n  align-items: center;\n  background-color: transparent;\n}.button_portHomeButton__2t7wq {\n  border-color: #4da8da;\n  color: #4da8da;\n}\n\n.button_portHomeButton__2t7wq:hover {\n  border-color: white;\n  color: white;\n}\n\n.button_portSocialButton__3IQCb {\n  height: 40px;\n  width: 40px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4.2em;\n  border-width: 2px;\n  border-style: solid;\n  border-color: var(--color-button-accent);\n  background-color: var(--color-button-accent);\n}\n\n.button_portSocialButton__3IQCb:hover {\n  background-color: transparent;\n  color: var(--color-button-accent);\n  border-color: #4da8da;\n  color: #4da8da;\n}\n\n.button_portResume__3G3zi {\n  --tw-border-opacity: 1;\n  border-color: rgba(34, 34, 34, var(--tw-border-opacity));\n  background-color: transparent;\n  padding: 0.5rem;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.button_portResume__3G3zi:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(34, 34, 34, var(--tw-bg-opacity));\n}\n\n.button_portServiceButton__wlJb1 {\n  display: flex;\n  height: 80px;\n  width: 80px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4.2em;\n  border-width: 1px;\n  border-style: solid;\n  background-color: transparent;\n}\n\n.button_portServiceButton__wlJb1:hover {\n  background-color: #4da8da;\n  box-shadow: 0px 10px 10px black;\n  transform: translate(3px);\n}\n\n.button_disable__FwYY5 {\n  cursor: not-allowed;\n  border-width: 2px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgba(var(--color-button-disable));\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--color-button-disable));\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--color-text-inverted);\n  opacity: 0.5;\n}", "",{"version":3,"sources":["<no source>","webpack://components/Button/button.module.scss","webpack://button.module.scss"],"names":[],"mappings":"AAAA;EAAA,eAAA;EAAA,iBAAA;EAAA,mBAAA;EAAA,4CAAA;EAAA,kBAAA;EAAA,mBAAA;EAAA,iBAAA;EAAA,oBAAA;EAAA,eAAA;EAAA,gBAAA;EAAA,yBAAA;ACYA,CDZA;EAAA,mBAAA;EAAA,6BAAA;ACeA,CDfA;EEIE,qBAAA;EACA,cAAA;AACF;;AACA;EACE,mBAAA;EACA,YAAA;AAEF;;AFXA;EAAA,YAAA;EAAA,WAAA;EAAA,mBAAA;EAAA,uBAAA;EAAA,oBAAA;EAAA,iBAAA;EAAA,mBAAA;EAAA,wCAAA;EAAA,4CAAA;ACmCA;;ADnCA;EAAA,6BAAA;EAAA,iCAAA;EEkBE,qBAAA;EACA,cAAA;ADuBF;;AD1CA;EAAA,sBAAA;EAAA,wDAAA;EAAA,6BAAA;EAAA,eAAA;EAAA,oBAAA;EAAA,kDAAA;ACmDA;;ADnDA;EAAA,kBAAA;EAAA,wDAAA;ACwDA;;ADxDA;EAAA,aAAA;EAAA,YAAA;EAAA,WAAA;EAAA,mBAAA;EAAA,uBAAA;EAAA,oBAAA;EAAA,iBAAA;EAAA,mBAAA;EAAA,6BAAA;ACoEA;;ACnCA;EACE,yBAAA;EACA,+BAAA;EACA,yBAAA;AAKF;;AFzCA;EAAA,mBAAA;EAAA,iBAAA;EAAA,mBAAA;EAAA,sBAAA;EAAA,+CAAA;EAAA,kBAAA;EAAA,mDAAA;EAAA,kBAAA;EAAA,mBAAA;EAAA,iBAAA;EAAA,oBAAA;EAAA,eAAA;EAAA,gBAAA;EAAA,yBAAA;EAAA,iCAAA;EAAA,YAAA;AC6FA","sourcesContent":[null,".portHomeButton {\n  cursor: pointer;\n  border-width: 2px;\n  border-style: solid;\n  background-color: var(--color-button-accent);\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n}.portHomeButton:hover {\n  align-items: center;\n  background-color: transparent;\n}.portHomeButton {\n  border-color: #4da8da;\n  color: #4da8da;\n}\n\n.portHomeButton:hover {\n  border-color: white;\n  color: white;\n}\n\n.portSocialButton {\n  height: 40px;\n  width: 40px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4.2em;\n  border-width: 2px;\n  border-style: solid;\n  border-color: var(--color-button-accent);\n  background-color: var(--color-button-accent);\n}\n\n.portSocialButton:hover {\n  background-color: transparent;\n  color: var(--color-button-accent);\n  border-color: #4da8da;\n  color: #4da8da;\n}\n\n.portResume {\n  --tw-border-opacity: 1;\n  border-color: rgba(34, 34, 34, var(--tw-border-opacity));\n  background-color: transparent;\n  padding: 0.5rem;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.portResume:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(34, 34, 34, var(--tw-bg-opacity));\n}\n\n.portServiceButton {\n  display: flex;\n  height: 80px;\n  width: 80px;\n  align-items: center;\n  justify-content: center;\n  border-radius: 4.2em;\n  border-width: 1px;\n  border-style: solid;\n  background-color: transparent;\n}\n\n.portServiceButton:hover {\n  background-color: #4da8da;\n  box-shadow: 0px 10px 10px black;\n  transform: translate(3px);\n}\n\n.disable {\n  cursor: not-allowed;\n  border-width: 2px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgba(var(--color-button-disable));\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--color-button-disable));\n  padding-left: 20px;\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-size: 13px;\n  font-weight: 600;\n  text-transform: uppercase;\n  color: var(--color-text-inverted);\n  opacity: 0.5;\n}",".portHomeButton {\n  @apply bg-backgroundColor-skin-button-accent text-[13px] px-[20px] py-[10px]\n  uppercase font-semibold border-2 border-solid\n  hover:bg-transparent hover:items-center cursor-pointer;\n  border-color: #4da8da;\n  color: #4da8da;\n}\n.portHomeButton:hover {\n  border-color: white;\n  color: white;\n}\n.portSocialButton {\n  @apply bg-backgroundColor-skin-button-accent border-2 border-backgroundColor-skin-button-accent\n  border-solid rounded-[4.2em] items-center justify-center\n  h-[40px] w-[40px] \n  hover:bg-transparent hover:text-backgroundColor-skin-button-accent;\n}\n.portSocialButton:hover {\n  border-color: #4da8da;\n  color: #4da8da;\n}\n\n.portResume {\n  @apply text-white bg-transparent p-2 border-[#222] hover:bg-[#222];\n}\n\n.portServiceButton {\n  @apply bg-transparent \n  flex \n  border-[1px] border-solid rounded-[4.2em]\n  items-center justify-center\n  h-[80px] w-[80px];\n}\n.portServiceButton:hover {\n  background-color: #4da8da;\n  box-shadow: 0px 10px 10px black;\n  transform: translate(3px);\n}\n.disable {\n  @apply cursor-not-allowed bg-backgroundColor-skin-button-disable opacity-50 text-[13px] text-textColor-skin-inverted px-[20px] py-[10px]\n  uppercase font-semibold border-2 border-backgroundColor-skin-button-disable border-solid;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"portHomeButton": "button_portHomeButton__2t7wq",
	"portSocialButton": "button_portSocialButton__3IQCb",
	"portResume": "button_portResume__3G3zi",
	"portServiceButton": "button_portServiceButton__wlJb1",
	"disable": "button_disable__FwYY5"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Loader/loader.module.scss":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./components/Loader/loader.module.scss ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loader_basic__5U2sW {\n    margin-left: -0.25rem;\n    margin-right: 0.75rem;\n    height: 1.25rem;\n    width: 1.25rem\n}\n@-webkit-keyframes loader_spin__2-ti_ {\n    to {\n        transform: rotate(360deg)\n    }\n}\n@keyframes loader_spin__2-ti_ {\n    to {\n        transform: rotate(360deg)\n    }\n}\n.loader_basic__5U2sW {\n    -webkit-animation: loader_spin__2-ti_ 1s linear infinite;\n            animation: loader_spin__2-ti_ 1s linear infinite;\n    --tw-text-opacity: 1;\n    color: rgba(255, 255, 255, var(--tw-text-opacity))\n}\n.loader_basic__5U2sW > circle {\n    opacity: 0.25\n}\n.loader_basic__5U2sW > path {\n    opacity: 0.75\n}", "",{"version":3,"sources":["<no source>","webpack://components/Loader/loader.module.scss"],"names":[],"mappings":"AAAA;IAAA,qBAAA;IAAA,qBAAA;IAAA,eAAA;IAAA;ACKA;ADLA;IAAA;QAAA;ICSI;AACJ;ADVA;IAAA;QAAA;ICcI;AACJ;ADfA;IAAA,wDAAA;YAAA,gDAAA;IAAA,oBAAA;IAAA;ACqBA;ADrBA;IAAA;ACwBA;ADxBA;IAAA;AC2BA","sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"basic": "loader_basic__5U2sW",
	"spin": "loader_spin__2-ti_"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./container/footer/footer.module.scss":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./container/footer/footer.module.scss ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer_footer__243cP {\n  height: 100%;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}@media (min-width: 640px) {.footer_footer__243cP {\n    gap: 1.25rem;\n  }\n}@media (min-width: 768px) {.footer_footer__243cP {\n    gap: 1.5rem;\n  }.footer_footer__243cP {\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n}@media (min-width: 1024px) {.footer_footer__243cP {\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n}.footer_footer__243cP {\n  background-color: #12232e;\n  color: white;\n}\n\n.footer_footerMain__2YjBT {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.footer_contactF__hCNTI {\n  display: flex;\n}\n\n.footer_footer__243cP {\n  display: flex;\n  flex-direction: column;\n}\n\n.footer_footerText__1o5AP {\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.footer_footerText__1o5AP span a {\n  color: white;\n}\n\n.footer_footerText__1o5AP span a:hover {\n  color: #4da8da;\n}\n\n.footer_footerSoc__1yy3a {\n  display: flex;\n  justify-content: center;\n}\n\n.footer_portSocialBtn__L9s-8 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  fill: currentColor;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.footer_portSocialBtn__L9s-8:hover .footer_btnHover__1sHuZ {\n  cursor: pointer;\n  fill: currentColor;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  color: #4da8da;\n}\n\n.footer_footerLine__x3Dxp {\n  grid-column: span 4 / span 4;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  height: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(107, 114, 128, var(--tw-bg-opacity));\n}\n\n@media screen and (max-width: 600px) {\n  .footer_footerMain__2YjBT {\n    flex-direction: column;\n  }\n\n  .footer_contactF__hCNTI {\n    padding: 20px;\n  }\n}", "",{"version":3,"sources":["<no source>","webpack://container/footer/footer.module.scss","webpack://footer.module.scss"],"names":[],"mappings":"AAAA;EAAA,YAAA;EAAA,mBAAA;EAAA,sBAAA;ACIA,CDJA,2BAAA;IAAA,YAAA;ECME;AACF,CDPA,2BAAA;IAAA,WAAA;ECSE,CDTF;IAAA,kBAAA;IAAA,mBAAA;ECYE;AACF,CDbA,4BAAA;IAAA,kBAAA;IAAA,mBAAA;ECgBE;AACF,CDjBA;EEEE,yBAAA;EACA,YAAA;AACF;;AACA;EACE,aAAA;EACA,WAAA;EACA,mBAAA;EACA,6BAAA;AAEF;;AAAA;EACE,aAAA;AAGF;;AADA;EACE,aAAA;EACA,sBAAA;AAIF;;AAFA;EACE,uBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAKF;;AAHA;EACE,YAAA;AAMF;;AAJA;EACE,cAAA;AAOF;;AALA;EACE,aAAA;EACA,uBAAA;AAQF;;AFxCA;EAAA,oBAAA;EAAA,qBAAA;EAAA,aAAA;EAAA,sBAAA;EAAA,mBAAA;EAAA,kBAAA;EAAA,oBAAA;EAAA,kDAAA;EAAA,wDAAA;ACoEA;ADpEA;EAAA,eAAA;EAAA,kBAAA;EAAA,wDAAA;EEuCM,cAAA;ADmCN;;AD1EA;EAAA,4BAAA;EAAA,kBAAA;EAAA,qBAAA;EAAA,WAAA;EAAA,kBAAA;EAAA,2DAAA;ACmFA;;ACrCA;EACE;IACE,sBAAA;EASF;;EAPA;IACE,aAAA;EAUF;AACF","sourcesContent":[null,".footer {\n  height: 100%;\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}@media (min-width: 640px) {.footer {\n    gap: 1.25rem;\n  }\n}@media (min-width: 768px) {.footer {\n    gap: 1.5rem;\n  }.footer {\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n}@media (min-width: 1024px) {.footer {\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n}.footer {\n  background-color: #12232e;\n  color: white;\n}\n\n.footerMain {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n}\n\n.contactF {\n  display: flex;\n}\n\n.footer {\n  display: flex;\n  flex-direction: column;\n}\n\n.footerText {\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.footerText span a {\n  color: white;\n}\n\n.footerText span a:hover {\n  color: #4da8da;\n}\n\n.footerSoc {\n  display: flex;\n  justify-content: center;\n}\n\n.portSocialBtn {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  fill: currentColor;\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.portSocialBtn:hover .btnHover {\n  cursor: pointer;\n  fill: currentColor;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  color: #4da8da;\n}\n\n.footerLine {\n  grid-column: span 4 / span 4;\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n  height: 1px;\n  --tw-bg-opacity: 1;\n  background-color: rgba(107, 114, 128, var(--tw-bg-opacity));\n}\n\n@media screen and (max-width: 600px) {\n  .footerMain {\n    flex-direction: column;\n  }\n\n  .contactF {\n    padding: 20px;\n  }\n}",".footer {\n  @apply md:gap-6 sm:gap-5 py-6 h-full lg:px-20 md:px-20;\n  background-color: #12232e;\n  color: white;\n}\n.footerMain {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-evenly;\n}\n.contactF {\n  display: flex;\n}\n.footer {\n  display: flex;\n  flex-direction: column;\n}\n.footerText {\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.footerText span a {\n  color: white;\n}\n.footerText span a:hover {\n  color: #4da8da;\n}\n.footerSoc {\n  display: flex;\n  justify-content: center;\n}\n.portSocialBtn {\n  @apply mx-1 flex items-center flex-col fill-current ease-in-out text-white;\n  &:hover {\n    .btnHover {\n      @apply fill-current ease-in-out cursor-pointer;\n      color: #4da8da;\n    }\n  }\n}\n.footerLine {\n  @apply h-[1px] col-span-4 my-6 bg-gray-500;\n}\n@media screen and (max-width: 600px) {\n  .footerMain {\n    flex-direction: column;\n  }\n  .contactF {\n    padding: 20px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"footer": "footer_footer__243cP",
	"footerMain": "footer_footerMain__2YjBT",
	"contactF": "footer_contactF__hCNTI",
	"footerText": "footer_footerText__1o5AP",
	"footerSoc": "footer_footerSoc__1yy3a",
	"portSocialBtn": "footer_portSocialBtn__L9s-8",
	"btnHover": "footer_btnHover__1sHuZ",
	"footerLine": "footer_footerLine__x3Dxp"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./styles/_global.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./styles/_global.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Ubuntu&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".navbar {\n  position: fixed;\n  z-index: 10000;\n}\n\n.nav-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: transparent;\n  border: solid 3px #4da8da;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: none;\n}\n\n.nav-btn::before {\n  content: \"\";\n  position: absolute;\n  width: 1.7rem;\n  height: 0.1rem;\n  background: #4da8da;\n  transform: translateY(-4px);\n  transition: 0.3s;\n}\n\n.nav-btn::after {\n  content: \"\";\n  position: absolute;\n  width: 1.7rem;\n  height: 0.1rem;\n  background: #4da8da;\n  transform: translateY(4px);\n  transition: 0.3s;\n}\n\n.nav-btn.active::before {\n  transform: translateY(0rem) rotate(45deg);\n}\n\n.nav-btn.active::after {\n  transform: translateY(0rem) rotate(-45deg);\n}\n\n.container {\n  position: fixed;\n  width: 100%;\n  padding: 15px 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.max-width {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.logo {\n  font-size: 35px;\n  font-weight: 600;\n  color: white;\n}\n\n.logo span {\n  color: #4da8da;\n}\n\n.menu {\n  display: flex;\n}\n\n.menu li {\n  list-style: none;\n  display: inline-block;\n}\n\n.menu li a {\n  font-size: 18px;\n  font-weight: 500;\n  margin-left: 25px;\n  color: white;\n}\n\n.menu li a:hover {\n  color: #4da8da;\n}\n\n.nav-link-white:active {\n  color: #4da8da;\n}\n\n.blankSpace {\n  display: none;\n}\n\n.sub-container {\n  align-items: center;\n  display: flex;\n}\n\n@media screen and (max-width: 777px) {\n  .nav-btn {\n    display: flex;\n  }\n\n  .menu {\n    flex-direction: column;\n    position: relative;\n    transition: 0.5s;\n    width: 30%;\n    height: 90vh;\n  }\n\n  .blankSpace {\n    width: 70%;\n    height: 90vh;\n    background: none;\n    border: none;\n    display: flex;\n  }\n\n  .menu li {\n    display: flex;\n    padding: 10% 15%;\n  }\n\n  .max-width {\n    padding: 0 40px;\n    justify-content: space-between;\n    display: flex;\n    width: 100%;\n  }\n\n  .sub-container {\n    display: none;\n    position: absolute;\n    width: 100%;\n    background: transparent;\n    margin-top: 50px;\n    visibility: visible;\n  }\n}\n@media screen and (max-width: 600px) {\n  .max-width {\n    padding: 0 20px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .menu {\n    width: 45%;\n  }\n}\n.alignment{\n  --tw-bg-opacity: 1;\n  background-color: rgba(242, 242, 242, var(--tw-bg-opacity));\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n@media (min-width: 640px){\n  .alignment{\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n@media (min-width: 768px){\n  .alignment{\n    padding-left: 70px;\n    padding-right: 70px;\n  }\n}\n@media (min-width: 1024px){\n  .alignment{\n    padding-left: 200px;\n    padding-right: 200px;\n  }\n}\n\n.textAlign{\n  text-align: center;\n}\n\n.leftbox{\n  margin-top: 3.5rem;\n  margin-bottom: 3.5rem;\n  display: flex;\n}\n\n@media (min-width: 320px){\n  .leftbox{\n    flex-direction: column;\n  }\n  .leftbox{\n    align-items: center;\n  }\n}\n\n@media (min-width: 768px){\n  .leftbox{\n    flex-direction: row;\n  }\n}\n\n.leftsubbox{\n  border-radius: 0.75rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  padding-left: 1.25rem;\n}\n\n@media (min-width: 320px){\n  .leftsubbox{\n    width: 90%;\n  }\n}\n\n.leftsubbox {\n  width: 50%;\n}\n\n.leftTextAlign{\n  padding-bottom: 0.25rem;\n  line-height: 1;\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n\n.bars{\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.baralign{\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\n.percentfield{\n  margin-top: 2rem;\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 900;\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n\n.bar{\n  position: relative;\n  --tw-bg-opacity: 1;\n  background-color: rgba(27, 50, 65, var(--tw-bg-opacity));\n}\n\n.ht{\n  height: 0.75rem;\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.ht{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n}\n\n.ht2{\n  height: 0.75rem;\n  width: 80%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.ht2{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n}\n\n.ht3{\n  height: 0.75rem;\n  width: 72%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.ht3{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n}\n\n.ht4{\n  height: 0.75rem;\n  width: 85%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.ht4{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n}\n\n.viewMore{\n  display: flex;\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: center;\n}\n\n.block{\n  width: 100%;\n  flex-direction: column;\n}\n\n.align {\n  display: flex;\n  justify-content: center;\n}\n\n.light-theme {\n  background-color: #1b3241;\n  color: white;\n}\n\n.Skillbar{\n  position: relative;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n}\n\n.resumeMain > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(6rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(6rem * var(--tw-space-y-reverse));\n}\n\n.resumeMain{\n  padding: 6rem;\n  line-height: 2.5rem;\n}\n\n@media (min-width: 320px){\n  .resumeMain{\n    padding: 1rem;\n  }\n}\n\n@media (min-width: 640px){\n  .resumeMain{\n    padding: 4rem;\n  }\n}\n\n.workPara{\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n}\n\n@media (min-width: 768px){\n  .workPara{\n    margin-left: 2em;\n  }\n}\n\n@media (min-width: 1024px){\n  .workPara{\n    margin-left: 4em;\n  }\n}\n\n@media (min-width: 1280px){\n  .workPara{\n    margin-left: 4em;\n  }\n}\n\n.workExp{\n  padding: -20px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.education{\n  margin-top: -0.75rem;\n  flex-direction: column;\n  gap: 1.5rem;\n  font-size: 19px;\n}\n\n@media (min-width: 768px){\n  .education{\n    margin-left: 6rem;\n  }\n  .education{\n    display: flex;\n  }\n}\n\n@media (min-width: 1024px){\n  .education{\n    margin-left: 9.5rem;\n  }\n}\n\n.blockTable{\n  display: flex;\n  flex: 1 1 0%;\n}\n\n@media (min-width: 320px){\n  .blockTable{\n    margin-bottom: 2.5rem;\n  }\n  .blockTable{\n    flex-direction: column;\n  }\n  .blockTable{\n    gap: 2.5rem;\n  }\n}\n\n@media (min-width: 768px){\n  .blockTable{\n    margin-bottom: 5rem;\n  }\n  .blockTable{\n    flex-direction: row;\n  }\n}\n\n.day{\n  margin-top: -1.5rem;\n  display: grid;\n  width: 100%;\n}\n\n@media (min-width: 768px){\n  .day{\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .day{\n    padding-left: 3.5rem;\n  }\n}\n\n@media (min-width: 1024px){\n  .day{\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .day{\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n}\n\n.college{\n  border-top-width: 0px;\n  border-bottom-width: 1px;\n  border-left-width: 0px;\n  border-right-width: 0px;\n}\n\n.college:hover{\n  transform: var(--tw-transform);\n  border-style: solid;\n}\n\n.college {\n  color: #4da8da;\n  border-bottom: #4da8da;\n}\n\n.workEp{\n  display: flex;\n  flex: 1 1 0%;\n}\n\n@media (min-width: 320px){\n  .workEp{\n    flex-direction: column;\n  }\n  .workEp{\n    gap: 1rem;\n  }\n}\n\n@media (min-width: 768px){\n  .workEp{\n    flex-direction: row;\n  }\n}\n\n.Skillbars{\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 1rem;\n  padding-right: 2.5rem;\n}\n\n.Skillblock{\n  width: auto;\n  flex: 1 1 0%;\n  justify-content: center;\n}\n\n.Skillht1{\n  height: 0.75rem;\n  width: 92%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht1{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht2{\n  height: 0.75rem;\n  width: 80%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht2{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht3{\n  height: 0.75rem;\n  width: 72%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht3{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht4{\n  height: 0.75rem;\n  width: 75%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht4{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht5{\n  height: 0.75rem;\n  width: 85%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht5{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht6{\n  height: 0.75rem;\n  width: 88%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht6{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht7{\n  height: 0.75rem;\n  width: 65%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht7{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.sideDiv{\n  display: flex;\n  width: 100%;\n  flex: 1 1 0%;\n  flex-direction: column;\n}\n\n@media (min-width: 640px){\n  .sideDiv{\n    flex-direction: row;\n  }\n}\n\n@media (min-width: 768px){\n  .sideDiv{\n    justify-content: space-around;\n  }\n}\n\n.backAlign {\n  color: #4da8da;\n}\n\n.portfolioList{\n  padding-top: 100px;\n  padding-bottom: 50px;\n  background-color: #1b3241;\n  color: white;\n}\n\n.portfolioItems{\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n@media (min-width: 768px){\n  .portfolioItems{\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n}\n\n@media (min-width: 1024px){\n  .portfolioItems{\n    padding-left: 8rem;\n    padding-right: 8rem;\n  }\n}\n\n.portHoverCardText {\n  color: #1b3241;\n}\n\n.backAlign{\n  margin-top: 0.5rem;\n  border-width: 2px;\n  border-top-width: 0px;\n  border-right-width: 0px;\n  border-left-width: 0px;\n  border-style: solid;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.pFilter{\n  margin-bottom: 2.5rem;\n  text-align: center;\n}\n\n.pFilter ul{\n  margin: 0px;\n  padding: 0px;\n}\n\n.pFilter ul li{\n  position: relative;\n  margin-right: 1.25rem;\n  display: inline-block;\n  cursor: pointer;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  text-transform: uppercase;\n  font-size: large;\n}\n\n.pFilter ul li::before {\n  content: \"/\";\n  position: absolute;\n  right: -1rem;\n}\n\n.pFilter ul li:last-child::before{\n  display: none;\n}\n\n.relativeP{\n  position: relative;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n}\n\n.hoverContext{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hoverContext span {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  opacity: 1;\n  background: #4da8da;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Ubuntu\", sans-serif;\n  scroll-behavior: smooth;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\n.bg-primary {\n  background-color: #12232e;\n  color: white;\n}", "",{"version":3,"sources":["webpack://../components/Navbar/navbar.module.scss","webpack://_global.scss","<no source>","webpack://styles/_global.scss","webpack://../container/Education/education.module.scss","webpack://../pages/Resume/resume.module.scss","webpack://../pages/PortfolioPage/portfolio.module.scss"],"names":[],"mappings":"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","sourcesContent":[".navbar {\r\n  position: fixed;\r\n  z-index: 10000;\r\n}\r\n.nav-btn {\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  background: transparent;\r\n  border: solid 3px #4da8da;\r\n  cursor: pointer;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: none;\r\n}\r\n.nav-btn::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 1.7rem;\r\n  height: 0.1rem;\r\n  background: #4da8da;\r\n  transform: translateY(-4px);\r\n  transition: 0.3s;\r\n}\r\n.nav-btn::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 1.7rem;\r\n  height: 0.1rem;\r\n  background: #4da8da;\r\n  transform: translateY(4px);\r\n  transition: 0.3s;\r\n}\r\n.nav-btn.active::before {\r\n  transform: translateY(0rem) rotate(45deg);\r\n}\r\n.nav-btn.active::after {\r\n  transform: translateY(0rem) rotate(-45deg);\r\n}\r\n.container {\r\n  position: fixed;\r\n  width: 100%;\r\n  padding: 15px 0;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n}\r\n.max-width {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n.logo {\r\n  font-size: 35px;\r\n  font-weight: 600;\r\n  color: white;\r\n}\r\n.logo span {\r\n  color: #4da8da;\r\n}\r\n.menu {\r\n  display: flex;\r\n}\r\n.menu li {\r\n  list-style: none;\r\n  display: inline-block;\r\n}\r\n.menu li a {\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n  margin-left: 25px;\r\n  color: white;\r\n}\r\n.menu li a:hover {\r\n  color: #4da8da;\r\n}\r\n.nav-link-white:active {\r\n  color: #4da8da;\r\n}\r\n.blankSpace {\r\n  display: none;\r\n}\r\n.sub-container {\r\n  align-items: center;\r\n  display: flex;\r\n}\r\n@media screen and (max-width: 777px) {\r\n  .nav-btn {\r\n    display: flex;\r\n  }\r\n  .menu {\r\n    flex-direction: column;\r\n    position: relative;\r\n    transition: 0.5s;\r\n    width: 30%;\r\n    height: 90vh;\r\n  }\r\n  .blankSpace {\r\n    width: 70%;\r\n    height: 90vh;\r\n    background: none;\r\n    border: none;\r\n    display: flex;\r\n  }\r\n  .menu li {\r\n    display: flex;\r\n    padding: 10% 15%;\r\n  }\r\n  .max-width {\r\n    padding: 0 40px;\r\n    justify-content: space-between;\r\n    display: flex;\r\n    width: 100%;\r\n  }\r\n  .sub-container {\r\n    display: none;\r\n    position: absolute;\r\n    width: 100%;\r\n    background: transparent;\r\n    margin-top: 50px;\r\n    visibility: visible;\r\n  }\r\n}\r\n@media screen and (max-width: 600px) {\r\n  .max-width {\r\n    padding: 0 20px;\r\n  }\r\n}\r\n@media screen and (max-width: 500px) {\r\n  .menu {\r\n    width: 45%;\r\n  }\r\n}\r\n","@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu&display=swap\");\r\n@import \"../components/Navbar/navbar.module.scss\";\r\n@import \"../container/Education/education.module.scss\";\r\n@import \"../pages/Resume/resume.module.scss\";\r\n@import \"../pages/PortfolioPage/portfolio.module.scss\";\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: \"Ubuntu\", sans-serif;\r\n  scroll-behavior: smooth;\r\n  box-sizing: border-box;\r\n  text-decoration: none;\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #12232e;\r\n  color: white;\r\n}\r\n",null,"@import url(\"https://fonts.googleapis.com/css2?family=Ubuntu&display=swap\");\n.navbar {\n  position: fixed;\n  z-index: 10000;\n}\n\n.nav-btn {\n  width: 2.5rem;\n  height: 2.5rem;\n  background: transparent;\n  border: solid 3px #4da8da;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  display: none;\n}\n\n.nav-btn::before {\n  content: \"\";\n  position: absolute;\n  width: 1.7rem;\n  height: 0.1rem;\n  background: #4da8da;\n  transform: translateY(-4px);\n  transition: 0.3s;\n}\n\n.nav-btn::after {\n  content: \"\";\n  position: absolute;\n  width: 1.7rem;\n  height: 0.1rem;\n  background: #4da8da;\n  transform: translateY(4px);\n  transition: 0.3s;\n}\n\n.nav-btn.active::before {\n  transform: translateY(0rem) rotate(45deg);\n}\n\n.nav-btn.active::after {\n  transform: translateY(0rem) rotate(-45deg);\n}\n\n.container {\n  position: fixed;\n  width: 100%;\n  padding: 15px 0;\n  display: flex;\n  justify-content: space-evenly;\n}\n\n.max-width {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.logo {\n  font-size: 35px;\n  font-weight: 600;\n  color: white;\n}\n\n.logo span {\n  color: #4da8da;\n}\n\n.menu {\n  display: flex;\n}\n\n.menu li {\n  list-style: none;\n  display: inline-block;\n}\n\n.menu li a {\n  font-size: 18px;\n  font-weight: 500;\n  margin-left: 25px;\n  color: white;\n}\n\n.menu li a:hover {\n  color: #4da8da;\n}\n\n.nav-link-white:active {\n  color: #4da8da;\n}\n\n.blankSpace {\n  display: none;\n}\n\n.sub-container {\n  align-items: center;\n  display: flex;\n}\n\n@media screen and (max-width: 777px) {\n  .nav-btn {\n    display: flex;\n  }\n\n  .menu {\n    flex-direction: column;\n    position: relative;\n    transition: 0.5s;\n    width: 30%;\n    height: 90vh;\n  }\n\n  .blankSpace {\n    width: 70%;\n    height: 90vh;\n    background: none;\n    border: none;\n    display: flex;\n  }\n\n  .menu li {\n    display: flex;\n    padding: 10% 15%;\n  }\n\n  .max-width {\n    padding: 0 40px;\n    justify-content: space-between;\n    display: flex;\n    width: 100%;\n  }\n\n  .sub-container {\n    display: none;\n    position: absolute;\n    width: 100%;\n    background: transparent;\n    margin-top: 50px;\n    visibility: visible;\n  }\n}\n@media screen and (max-width: 600px) {\n  .max-width {\n    padding: 0 20px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .menu {\n    width: 45%;\n  }\n}\n.alignment{\n  --tw-bg-opacity: 1;\n  background-color: rgba(242, 242, 242, var(--tw-bg-opacity));\n  padding-top: 70px;\n  padding-bottom: 70px;\n}\n@media (min-width: 640px){\n  .alignment{\n    padding-left: 50px;\n    padding-right: 50px;\n  }\n}\n@media (min-width: 768px){\n  .alignment{\n    padding-left: 70px;\n    padding-right: 70px;\n  }\n}\n@media (min-width: 1024px){\n  .alignment{\n    padding-left: 200px;\n    padding-right: 200px;\n  }\n}\n\n.textAlign{\n  text-align: center;\n}\n\n.leftbox{\n  margin-top: 3.5rem;\n  margin-bottom: 3.5rem;\n  display: flex;\n}\n\n@media (min-width: 320px){\n  .leftbox{\n    flex-direction: column;\n  }\n  .leftbox{\n    align-items: center;\n  }\n}\n\n@media (min-width: 768px){\n  .leftbox{\n    flex-direction: row;\n  }\n}\n\n.leftsubbox{\n  border-radius: 0.75rem;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  padding-left: 1.25rem;\n}\n\n@media (min-width: 320px){\n  .leftsubbox{\n    width: 90%;\n  }\n}\n\n.leftsubbox {\n  width: 50%;\n}\n\n.leftTextAlign{\n  padding-bottom: 0.25rem;\n  line-height: 1;\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n\n.bars{\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.baralign{\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n}\n\n.percentfield{\n  margin-top: 2rem;\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n  font-weight: 900;\n  --tw-text-opacity: 1;\n  color: rgba(0, 0, 0, var(--tw-text-opacity));\n}\n\n.bar{\n  position: relative;\n  --tw-bg-opacity: 1;\n  background-color: rgba(27, 50, 65, var(--tw-bg-opacity));\n}\n\n.ht{\n  height: 0.75rem;\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.ht{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n}\n\n.ht2{\n  height: 0.75rem;\n  width: 80%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.ht2{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n}\n\n.ht3{\n  height: 0.75rem;\n  width: 72%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.ht3{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n}\n\n.ht4{\n  height: 0.75rem;\n  width: 85%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.ht4{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n}\n\n.viewMore{\n  display: flex;\n  flex: 1 1 0%;\n  align-items: center;\n  justify-content: center;\n}\n\n.block{\n  width: 100%;\n  flex-direction: column;\n}\n\n.align {\n  display: flex;\n  justify-content: center;\n}\n\n.light-theme {\n  background-color: #1b3241;\n  color: white;\n}\n\n.Skillbar{\n  position: relative;\n  --tw-bg-opacity: 1;\n  background-color: rgba(77, 168, 218, var(--tw-bg-opacity));\n}\n\n.resumeMain > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse: 0;\n  margin-top: calc(6rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(6rem * var(--tw-space-y-reverse));\n}\n\n.resumeMain{\n  padding: 6rem;\n  line-height: 2.5rem;\n}\n\n@media (min-width: 320px){\n  .resumeMain{\n    padding: 1rem;\n  }\n}\n\n@media (min-width: 640px){\n  .resumeMain{\n    padding: 4rem;\n  }\n}\n\n.workPara{\n  display: flex;\n  flex: 1 1 0%;\n  flex-direction: column;\n}\n\n@media (min-width: 768px){\n  .workPara{\n    margin-left: 2em;\n  }\n}\n\n@media (min-width: 1024px){\n  .workPara{\n    margin-left: 4em;\n  }\n}\n\n@media (min-width: 1280px){\n  .workPara{\n    margin-left: 4em;\n  }\n}\n\n.workExp{\n  padding: -20px;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n}\n\n.education{\n  margin-top: -0.75rem;\n  flex-direction: column;\n  gap: 1.5rem;\n  font-size: 19px;\n}\n\n@media (min-width: 768px){\n  .education{\n    margin-left: 6rem;\n  }\n  .education{\n    display: flex;\n  }\n}\n\n@media (min-width: 1024px){\n  .education{\n    margin-left: 9.5rem;\n  }\n}\n\n.blockTable{\n  display: flex;\n  flex: 1 1 0%;\n}\n\n@media (min-width: 320px){\n  .blockTable{\n    margin-bottom: 2.5rem;\n  }\n  .blockTable{\n    flex-direction: column;\n  }\n  .blockTable{\n    gap: 2.5rem;\n  }\n}\n\n@media (min-width: 768px){\n  .blockTable{\n    margin-bottom: 5rem;\n  }\n  .blockTable{\n    flex-direction: row;\n  }\n}\n\n.day{\n  margin-top: -1.5rem;\n  display: grid;\n  width: 100%;\n}\n\n@media (min-width: 768px){\n  .day{\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .day{\n    padding-left: 3.5rem;\n  }\n}\n\n@media (min-width: 1024px){\n  .day{\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .day{\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n}\n\n.college{\n  border-top-width: 0px;\n  border-bottom-width: 1px;\n  border-left-width: 0px;\n  border-right-width: 0px;\n}\n\n.college:hover{\n  transform: var(--tw-transform);\n  border-style: solid;\n}\n\n.college {\n  color: #4da8da;\n  border-bottom: #4da8da;\n}\n\n.workEp{\n  display: flex;\n  flex: 1 1 0%;\n}\n\n@media (min-width: 320px){\n  .workEp{\n    flex-direction: column;\n  }\n  .workEp{\n    gap: 1rem;\n  }\n}\n\n@media (min-width: 768px){\n  .workEp{\n    flex-direction: row;\n  }\n}\n\n.Skillbars{\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 1rem;\n  padding-right: 2.5rem;\n}\n\n.Skillblock{\n  width: auto;\n  flex: 1 1 0%;\n  justify-content: center;\n}\n\n.Skillht1{\n  height: 0.75rem;\n  width: 92%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht1{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht2{\n  height: 0.75rem;\n  width: 80%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht2{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht3{\n  height: 0.75rem;\n  width: 72%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht3{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht4{\n  height: 0.75rem;\n  width: 75%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht4{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht5{\n  height: 0.75rem;\n  width: 85%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht5{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht6{\n  height: 0.75rem;\n  width: 88%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht6{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.Skillht7{\n  height: 0.75rem;\n  width: 65%;\n}\n\n@keyframes pulse{\n  50%{\n    opacity: .5;\n  }\n}\n\n.Skillht7{\n  -webkit-animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;\n  --tw-bg-opacity: 1;\n  background-color: rgba(51, 51, 51, var(--tw-bg-opacity));\n}\n\n.sideDiv{\n  display: flex;\n  width: 100%;\n  flex: 1 1 0%;\n  flex-direction: column;\n}\n\n@media (min-width: 640px){\n  .sideDiv{\n    flex-direction: row;\n  }\n}\n\n@media (min-width: 768px){\n  .sideDiv{\n    justify-content: space-around;\n  }\n}\n\n.backAlign {\n  color: #4da8da;\n}\n\n.portfolioList{\n  padding-top: 100px;\n  padding-bottom: 50px;\n  background-color: #1b3241;\n  color: white;\n}\n\n.portfolioItems{\n  display: flex;\n  height: 100%;\n  width: 100%;\n  flex-wrap: wrap;\n  justify-content: center;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n@media (min-width: 768px){\n  .portfolioItems{\n    padding-left: 5rem;\n    padding-right: 5rem;\n  }\n}\n\n@media (min-width: 1024px){\n  .portfolioItems{\n    padding-left: 8rem;\n    padding-right: 8rem;\n  }\n}\n\n.portHoverCardText {\n  color: #1b3241;\n}\n\n.backAlign{\n  margin-top: 0.5rem;\n  border-width: 2px;\n  border-top-width: 0px;\n  border-right-width: 0px;\n  border-left-width: 0px;\n  border-style: solid;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.pFilter{\n  margin-bottom: 2.5rem;\n  text-align: center;\n}\n\n.pFilter ul{\n  margin: 0px;\n  padding: 0px;\n}\n\n.pFilter ul li{\n  position: relative;\n  margin-right: 1.25rem;\n  display: inline-block;\n  cursor: pointer;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  text-transform: uppercase;\n  font-size: large;\n}\n\n.pFilter ul li::before {\n  content: \"/\";\n  position: absolute;\n  right: -1rem;\n}\n\n.pFilter ul li:last-child::before{\n  display: none;\n}\n\n.relativeP{\n  position: relative;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n}\n\n.hoverContext{\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hoverContext span {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.45);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.5rem;\n  opacity: 1;\n  background: #4da8da;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: \"Ubuntu\", sans-serif;\n  scroll-behavior: smooth;\n  box-sizing: border-box;\n  text-decoration: none;\n}\n\n.bg-primary {\n  background-color: #12232e;\n  color: white;\n}",".alignment {\n  @apply bg-[#f2f2f2] py-[70px] lg:px-[200px] md:px-[70px] sm:px-[50px];\n}\n\n.textAlign {\n  @apply text-center;\n}\n\n.leftbox {\n  @apply flex md:flex-row xs:flex-col xs:items-center my-14;\n}\n\n.leftsubbox {\n  @apply bg-[#4da8da] py-5 pl-5 xs:w-[90%] rounded-xl;\n  width: 50%;\n}\n\n.leftTextAlign {\n  @apply leading-none pb-1 text-black;\n}\n\n.bars {\n  @apply flex items-center gap-4 px-5;\n}\n\n.baralign {\n  @apply flex flex-col w-full;\n}\n\n.percentfield {\n  @apply text-3xl font-black text-black mt-8;\n}\n\n.bar {\n  @apply relative bg-[#1b3241];\n}\n\n.ht {\n  @apply h-3 bg-[#4da8da] animate-pulse;\n}\n.ht2 {\n  @apply w-[80%] h-3 bg-[#4da8da] animate-pulse;\n}\n.ht3 {\n  @apply w-[72%] h-3 bg-[#4da8da] animate-pulse;\n}\n.ht4 {\n  @apply w-[85%] h-3 bg-[#4da8da] animate-pulse;\n}\n\n.viewMore {\n  @apply flex-1 flex justify-center items-center;\n}\n\n.block {\n  @apply w-[100%] flex-col;\n}\n.align {\n  display: flex;\n  justify-content: center;\n}\n",".light-theme {\n  background-color: #1b3241;\n  color: white;\n}\n.Skillbar {\n  @apply relative bg-[#4da8da];\n}\n\n.resumeMain {\n  @apply p-24 sm:p-16 xs:p-4 leading-10 space-y-24;\n}\n\n.workPara {\n  @apply flex-1 flex flex-col xl:ml-[4em] lg:ml-[4em] md:ml-[2em];\n}\n\n.workExp {\n  @apply line-clamp-2 p-[-20px];\n}\n\n.education {\n  @apply lg:ml-[9.5rem] md:ml-[6rem] gap-6 text-[19px] -mt-3 md:flex flex-col;\n}\n\n.blockTable {\n  @apply flex-1 flex md:mb-20 xs:mb-10 md:flex-row xs:gap-10 xs:flex-col;\n}\n\n.day {\n  @apply grid w-full lg:grid-cols-2 md:grid-cols-1 lg:px-24 md:pl-14 -mt-6;\n}\n\n.college {\n  @apply hover:border-solid border-t-0 hover:transform border-b border-l-0 border-r-0;\n  color: #4da8da;\n  border-bottom: #4da8da;\n}\n\n.workEp {\n  @apply flex-1 flex md:flex-row xs:flex-col xs:gap-4;\n}\n\n.Skillbars {\n  @apply flex items-center gap-4 w-full pr-10;\n}\n\n.Skillblock {\n  @apply w-auto justify-center flex-1;\n}\n\n.Skillht1 {\n  @apply w-[92%] h-3 bg-[#333333] animate-pulse;\n}\n.Skillht2 {\n  @apply w-[80%] h-3 bg-[#333333] animate-pulse;\n}\n\n.Skillht3 {\n  @apply w-[72%] h-3 bg-[#333333] animate-pulse;\n}\n\n.Skillht4 {\n  @apply w-[75%] h-3 bg-[#333333] animate-pulse;\n}\n.Skillht5 {\n  @apply w-[85%] h-3 bg-[#333333] animate-pulse;\n}\n.Skillht6 {\n  @apply w-[88%] h-3 bg-[#333333] animate-pulse;\n}\n.Skillht7 {\n  @apply w-[65%] h-3 bg-[#333333] animate-pulse;\n}\n\n.sideDiv {\n  @apply flex flex-col sm:flex-row flex-1 w-full md:justify-around;\n}\n.backAlign {\n  color: #4da8da;\n}\n",".portfolioList {\n  @apply pt-[100px] pb-[50px];\n  background-color: #1b3241;\n  color: white;\n}\n.portfolioItems {\n  @apply flex flex-wrap h-full w-full px-[15px] md:px-20 lg:px-32 justify-center;\n}\n.portHoverCardText {\n  color: #1b3241;\n}\n.backAlign {\n  @apply text-xs mt-2 border-t-0 border-r-0 border-l-0 border-2 border-solid;\n}\n.pFilter {\n  @apply mb-10 text-center;\n}\n.pFilter ul {\n  @apply m-0 p-0;\n}\n.pFilter ul li {\n  @apply inline-block text-sm mr-5 relative cursor-pointer uppercase;\n  font-size: large;\n}\n.pFilter ul li::before {\n  content: \"/\";\n  @apply absolute -right-4;\n}\n.pFilter ul li:last-child::before {\n  @apply hidden;\n}\n.relativeP {\n  @apply relative h-full w-full;\n  cursor: pointer;\n}\n.hoverContext {\n  @apply flex flex-col items-center;\n}\n.hoverContext span {\n  box-shadow: 0 0 10px rgb(0 0 0 / 45%);\n  @apply flex items-center justify-center opacity-100 rounded-lg;\n  background: #4da8da;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \**********************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutProperties; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__.default)(source, excluded);
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

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
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

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/***/ (function(module) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL2Zvb3Rlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQnV0dG9uL2J1dHRvbi5tb2R1bGUuc2Nzcz8wYWJhIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvYWRlci9sb2FkZXIubW9kdWxlLnNjc3M/YTcyMiIsIndlYnBhY2s6Ly9fTl9FLy4vY29udGFpbmVyL2Zvb3Rlci9mb290ZXIubW9kdWxlLnNjc3M/OGNlZiIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL19nbG9iYWwuc2Nzcz85ZmQyIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xvYWRlci9sb2FkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRhaW5lci9mb290ZXIvZm9vdGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovL19OX0UvLi9zdHlsZXMvX2dsb2JhbC5zY3NzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJ2YXJpYW50IiwiY2xhc3NOYW1lIiwiaXNEaXNhYmxlZCIsImNoaWxkcmVuIiwiaXNMb2FkaW5nIiwib25DbGljayIsInJlc3QiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZGVmYXVsdFByb3BzIiwiTGF5b3V0IiwiTG9hZGVyIiwic3RyaW5nIiwiR2l0aHViIiwiTGlua2VkaW4iLCJUd2l0dGVyIiwiR21haWwiLCJGb290ZXIiLCJmb290ZXJMaW5lIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUdBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUE7O0FBQUEsTUFDYkMsT0FEYSxRQUNiQSxPQURhO0FBQUEsTUFFYkMsU0FGYSxRQUViQSxTQUZhO0FBQUEsTUFHYkMsVUFIYSxRQUdiQSxVQUhhO0FBQUEsTUFJYkMsUUFKYSxRQUliQSxRQUphO0FBQUEsTUFLYkMsU0FMYSxRQUtiQSxTQUxhO0FBQUEsTUFNYkMsT0FOYSxRQU1iQSxPQU5hO0FBQUEsTUFPVkMsSUFQVTs7QUFBQSxzQkFTYjtBQUNFLFFBQUksRUFBQyxRQURQO0FBRUUsYUFBUyxFQUFFQyxpREFBVSxDQUFDLENBQUNMLFVBQUQsSUFBZSxDQUFDRSxTQUFoQixJQUE2QkksNERBQU0sQ0FBQ1IsT0FBRCxDQUFwQyxnTUFDbEJRLG9FQURrQixFQUNETixVQUFVLElBQUlFLFNBRGIsOEtBRWxCSCxTQUZrQixFQUVOLENBQUMsQ0FBQ0EsU0FGSSxnQkFGdkI7QUFNRSxXQUFPLEVBQUVDLFVBQVUsSUFBSUUsU0FBZCxHQUEwQixZQUFNLENBQUUsQ0FBbEMsR0FBcUNDO0FBTmhELEtBT01DLElBUE47QUFBQSxlQVNHRixTQUFTLGlCQUFJLDhEQUFDLDRDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFUaEIsRUFVR0QsUUFWSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FUYTtBQUFBLENBQWY7O0tBQU1KLE07QUF1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QUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxNQUFNLFVBQVUsVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsUUFBUSxPQUFPLEtBQUssV0FBVyxPQUFPLE9BQU8sVUFBVSxPQUFPLE1BQU0sT0FBTyxLQUFLLFdBQVcsT0FBTyxNQUFNLE9BQU8sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFFBQVEsT0FBTyxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFVBQVUsV0FBVyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFFBQVEsT0FBTyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxLQUFLLFdBQVcsV0FBVyxPQUFPLE1BQU0sT0FBTyxLQUFLLFdBQVcsV0FBVyxPQUFPLE1BQU0sT0FBTyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxVQUFVLFFBQVEsT0FBTyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFlBQVksUUFBUSxPQUFPLFVBQVUsWUFBWSxVQUFVLE9BQU8sTUFBTSxVQUFVLFFBQVEsT0FBTyxXQUFXLFVBQVUsVUFBVSxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxt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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxJQUFxQztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsS0FBcUM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsc0JBQXNCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVSxJQUFxQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQiwyQkFBMkI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNLEtBQXFDLDRGQUE0RixDQUFNO0FBQzdJO0FBQ0E7O0FBRUEsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsZ0NBQWdDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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RUE7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBIQUEwSDtBQUMxSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1FQUFtRTs7QUFFbkU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYixXQUFXLGNBQWM7QUFDekIsV0FBVyxFQUFFO0FBQ2IsV0FBVyxFQUFFO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLDJEQUEyRCxTQUFTO0FBQ3BFLHlCQUF5QixTQUFTO0FBQ2xDO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxFQUFFO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNERBQTREO0FBQzVEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxVQUFVO0FBQ3JCLFdBQVcsRUFBRTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGlCQUFpQjtBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJDQUEyQzs7QUFFM0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixpQkFBaUI7QUFDcEM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHFCQUFxQjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQSxjQUFjO0FBQ2QsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNsckNhOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQztBQUNELEVBQUUsdUpBQXNFO0FBQ3hFIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCIuLi9Mb2FkZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLnNjc3MnO1xuXG4vLyBtYWluIGJ1dHRvblxuY29uc3QgQnV0dG9uID0gKHtcbiAgdmFyaWFudCxcbiAgY2xhc3NOYW1lLFxuICBpc0Rpc2FibGVkLFxuICBjaGlsZHJlbixcbiAgaXNMb2FkaW5nLFxuICBvbkNsaWNrLFxuICAuLi5yZXN0XG59KSA9PiAoXG4gIDxidXR0b25cbiAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoIWlzRGlzYWJsZWQgJiYgIWlzTG9hZGluZyAmJiBzdHlsZXNbdmFyaWFudF0sIHtcbiAgICAgIFtzdHlsZXMuZGlzYWJsZV06IGlzRGlzYWJsZWQgfHwgaXNMb2FkaW5nLFxuICAgICAgW2NsYXNzTmFtZV06ICEhY2xhc3NOYW1lLFxuICAgIH0pfVxuICAgIG9uQ2xpY2s9e2lzRGlzYWJsZWQgfHwgaXNMb2FkaW5nID8gKCkgPT4ge30gOiBvbkNsaWNrfVxuICAgIHsuLi5yZXN0fVxuICA+XG4gICAge2lzTG9hZGluZyAmJiA8TG9hZGVyIC8+fVxuICAgIHtjaGlsZHJlbn1cbiAgPC9idXR0b24+XG4pO1xuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICB2YXJpYW50OiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFwicG9ydEhvbWVCdXR0b25cIixcbiAgICBcInBvcnRSZXN1bWVcIixcbiAgICBcInBvcnRTb2NpYWxCdXR0b25cIixcbiAgICBcImRpc2FibGVcIixcbiAgICBcInBvcnROYXZCdXR0b25cIixcbiAgICBcInBvcnRTZXJ2aWNlQnV0dG9uXCIsXG4gIF0pLFxufTtcblxuQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogXCJwb3J0SG9tZUJ1dHRvblwiLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xuIiwiaW1wb3J0IHsgQ2hpbGRyZW4gfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCBOYXZpZ2F0aW9uIGZyb20gXCIuLi9OYXZiYXJcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uLy4uL2NvbnRhaW5lci9mb290ZXJcIjtcblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2PlxuICAgIHsvKiA8TmF2aWdhdGlvbiAvPiAqL31cbiAgICA8bWFpbj57Y2hpbGRyZW59PC9tYWluPlxuICAgIDxGb290ZXIgLz5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sb2FkZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgTG9hZGVyID0gKHsgdmFyaWFudCA9IFwiYmFzaWNcIiwgY2xhc3NOYW1lIH0pID0+IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbdmFyaWFudF0sIHsgW2NsYXNzTmFtZV06ICEhY2xhc3NOYW1lIH0pfVxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgPlxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjRcIiAvPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIGQ9XCJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3pcIlxuICAgID48L3BhdGg+XG4gIDwvc3ZnPlxuKTtcblxuTG9hZGVyLnByb3BUeXBlcyA9IHtcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJhc2ljXCJdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogXCJiYXNpY1wiLFxuICBjbGFzc05hbWU6IFwiXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCJpbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IEdpdGh1YiBmcm9tIFwiLi4vLi4vcHVibGljL3N2Zy9sb2dvLWdpdGh1Yi5zdmdcIjtcbmltcG9ydCBMaW5rZWRpbiBmcm9tIFwiLi4vLi4vcHVibGljL3N2Zy9sb2dvLWxpbmtlZGluLnN2Z1wiO1xuaW1wb3J0IFR3aXR0ZXIgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdmcvbG9nby10d2l0dGVyLnN2Z1wiO1xuaW1wb3J0IEdtYWlsIGZyb20gXCIuLi8uLi9wdWJsaWMvc3ZnL21haWwuc3ZnXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2Zvb3Rlci5tb2R1bGUuc2Nzc1wiO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJmb290ZXJcIiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJTb2N9PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Rlc2FpZGV2YW5zaGlcIj5cbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnBvcnRTb2NpYWxCdG59IHZhcmlhbnQ9XCJwb3J0U29jaWFsQnV0dG9uXCI+XG4gICAgICAgICAgICA8R2l0aHViIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkhvdmVyfSBoZWlnaHQ9ezE4fSB3aWR0aD17MTh9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cInd3dy5saW5rZWRpbi5jb20vaW4vZGV2YW5zaGktZGVzYWktNTcxNmJiMTgyXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3J0U29jaWFsQnRufSB2YXJpYW50PVwicG9ydFNvY2lhbEJ1dHRvblwiPlxuICAgICAgICAgICAgPExpbmtlZGluIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkhvdmVyfSBoZWlnaHQ9ezE4fSB3aWR0aD17MTh9IC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vRGV2YW5zaDcwNzY1OTIzXCI+XG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wb3J0U29jaWFsQnRufSB2YXJpYW50PVwicG9ydFNvY2lhbEJ1dHRvblwiPlxuICAgICAgICAgICAgPFR3aXR0ZXIgY2xhc3NOYW1lPXtzdHlsZXMuYnRuSG92ZXJ9IGhlaWdodD17MTh9IHdpZHRoPXsxOH0gLz5cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3QuZGRldmFuc2hpQGdtYWlsLmNvbVwiPlxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucG9ydFNvY2lhbEJ0bn0gdmFyaWFudD1cInBvcnRTb2NpYWxCdXR0b25cIj5cbiAgICAgICAgICAgIDxHbWFpbCBjbGFzc05hbWU9e3N0eWxlcy5idG5Ib3Zlcn0gaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlck1haW59PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RGfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclRleHR9PlxuICAgICAgICAgICAgPGNhcHRpb24+RGV2YW5zaGk8L2NhcHRpb24+XG4gICAgICAgICAgICA8c3Bhbj5GdWxsLVN0YWNrIERldmVsb3Blcjwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFjdEZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyVGV4dH0+XG4gICAgICAgICAgICA8Y2FwdGlvbj5FbWFpbDwvY2FwdGlvbj5cbiAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3QuZGRldmFuc2hpQGdtYWlsLmNvbVwiPlxuICAgICAgICAgICAgICAgIGNvbnRhY3QuZGRldmFuc2hpQGdtYWlsLmNvbVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RGfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3RlclRleHR9PlxuICAgICAgICAgICAgPGNhcHRpb24+UGhvbmU8L2NhcHRpb24+XG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDo5NzI2NzE0NDk0XCI+KzkxLTk3MjY3MTQ0OTQ8L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJMaW5lfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJUZXh0fT5cbiAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICBEZXZhbnNoaSDCqSAyMDIxLiBBbGwgUmlnaHQgUmVzZXJ2ZWQsIERlc2lnbmVkIEJ5IERldmFuc2hpIERlc2FpLlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9fZ2xvYmFsLnNjc3NcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2PlxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzKCkge1xuXHRcdHZhciBjbGFzc2VzID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdGlmICghYXJnKSBjb250aW51ZTtcblxuXHRcdFx0dmFyIGFyZ1R5cGUgPSB0eXBlb2YgYXJnO1xuXG5cdFx0XHRpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcblx0XHRcdFx0Y2xhc3Nlcy5wdXNoKGFyZyk7XG5cdFx0XHR9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuXHRcdFx0XHRpZiAoYXJnLmxlbmd0aCkge1xuXHRcdFx0XHRcdHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcblx0XHRcdFx0XHRpZiAoaW5uZXIpIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2UgaWYgKGFyZ1R5cGUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdGlmIChhcmcudG9TdHJpbmcgPT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRcdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbGFzc2VzLnB1c2goYXJnLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdFx0Y2xhc3NOYW1lcy5kZWZhdWx0ID0gY2xhc3NOYW1lcztcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGNsYXNzTmFtZXM7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZGVmaW5lLmFtZCA9PT0gJ29iamVjdCcgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIHJlZ2lzdGVyIGFzICdjbGFzc25hbWVzJywgY29uc2lzdGVudCB3aXRoIG5wbSBwYWNrYWdlIG5hbWVcblx0XHRkZWZpbmUoJ2NsYXNzbmFtZXMnLCBbXSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGNsYXNzTmFtZXM7XG5cdFx0fSk7XG5cdH0gZWxzZSB7XG5cdFx0d2luZG93LmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xuXHR9XG59KCkpO1xuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL2J1dHRvbi5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL2J1dHRvbi5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9idXR0b24ubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vbG9hZGVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vbG9hZGVyLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsxXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMl0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzNdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVs0XSEuL2xvYWRlci5tb2R1bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9mb290ZXIubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbMV0hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzJdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVszXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbNF0hLi9mb290ZXIubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzFdIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzNdLnVzZVsyXSEuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlszXS51c2VbM10hLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbM10udXNlWzRdIS4vZm9vdGVyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL19nbG9iYWwuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMl0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL19nbG9iYWwuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Nhc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls3XS51c2VbNF0hLi9fZ2xvYmFsLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1dHRvbl9wb3J0SG9tZUJ1dHRvbl9fMnQ3d3Ege1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnV0dG9uLWFjY2VudCk7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcbiAgcGFkZGluZy10b3A6IDEwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbn0uYnV0dG9uX3BvcnRIb21lQnV0dG9uX18ydDd3cTpob3ZlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufS5idXR0b25fcG9ydEhvbWVCdXR0b25fXzJ0N3dxIHtcXG4gIGJvcmRlci1jb2xvcjogIzRkYThkYTtcXG4gIGNvbG9yOiAjNGRhOGRhO1xcbn1cXG5cXG4uYnV0dG9uX3BvcnRIb21lQnV0dG9uX18ydDd3cTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uYnV0dG9uX3BvcnRTb2NpYWxCdXR0b25fXzNJUUNiIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNC4yZW07XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJ1dHRvbi1hY2NlbnQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnV0dG9uLWFjY2VudCk7XFxufVxcblxcbi5idXR0b25fcG9ydFNvY2lhbEJ1dHRvbl9fM0lRQ2I6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjb2xvcjogdmFyKC0tY29sb3ItYnV0dG9uLWFjY2VudCk7XFxuICBib3JkZXItY29sb3I6ICM0ZGE4ZGE7XFxuICBjb2xvcjogIzRkYThkYTtcXG59XFxuXFxuLmJ1dHRvbl9wb3J0UmVzdW1lX18zRzN6aSB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDM0LCAzNCwgMzQsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5idXR0b25fcG9ydFJlc3VtZV9fM0czemk6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5idXR0b25fcG9ydFNlcnZpY2VCdXR0b25fX3dsSmIxIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDQuMmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5idXR0b25fcG9ydFNlcnZpY2VCdXR0b25fX3dsSmIxOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZGE4ZGE7XFxuICBib3gtc2hhZG93OiAwcHggMTBweCAxMHB4IGJsYWNrO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4KTtcXG59XFxuXFxuLmJ1dHRvbl9kaXNhYmxlX19Gd1lZNSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1idXR0b24tZGlzYWJsZSkpO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1idXR0b24tZGlzYWJsZSkpO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWludmVydGVkKTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiPG5vIHNvdXJjZT5cIixcIndlYnBhY2s6Ly9jb21wb25lbnRzL0J1dHRvbi9idXR0b24ubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9idXR0b24ubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFBQSxlQUFBO0VBQUEsaUJBQUE7RUFBQSxtQkFBQTtFQUFBLDRDQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUEsb0JBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSx5QkFBQTtBQ1lBLENEWkE7RUFBQSxtQkFBQTtFQUFBLDZCQUFBO0FDZUEsQ0RmQTtFRUlFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBRUY7O0FGWEE7RUFBQSxZQUFBO0VBQUEsV0FBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxvQkFBQTtFQUFBLGlCQUFBO0VBQUEsbUJBQUE7RUFBQSx3Q0FBQTtFQUFBLDRDQUFBO0FDbUNBOztBRG5DQTtFQUFBLDZCQUFBO0VBQUEsaUNBQUE7RUVrQkUscUJBQUE7RUFDQSxjQUFBO0FEdUJGOztBRDFDQTtFQUFBLHNCQUFBO0VBQUEsd0RBQUE7RUFBQSw2QkFBQTtFQUFBLGVBQUE7RUFBQSxvQkFBQTtFQUFBLGtEQUFBO0FDbURBOztBRG5EQTtFQUFBLGtCQUFBO0VBQUEsd0RBQUE7QUN3REE7O0FEeERBO0VBQUEsYUFBQTtFQUFBLFlBQUE7RUFBQSxXQUFBO0VBQUEsbUJBQUE7RUFBQSx1QkFBQTtFQUFBLG9CQUFBO0VBQUEsaUJBQUE7RUFBQSxtQkFBQTtFQUFBLDZCQUFBO0FDb0VBOztBQ25DQTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtBQUtGOztBRnpDQTtFQUFBLG1CQUFBO0VBQUEsaUJBQUE7RUFBQSxtQkFBQTtFQUFBLHNCQUFBO0VBQUEsK0NBQUE7RUFBQSxrQkFBQTtFQUFBLG1EQUFBO0VBQUEsa0JBQUE7RUFBQSxtQkFBQTtFQUFBLGlCQUFBO0VBQUEsb0JBQUE7RUFBQSxlQUFBO0VBQUEsZ0JBQUE7RUFBQSx5QkFBQTtFQUFBLGlDQUFBO0VBQUEsWUFBQTtBQzZGQVwiLFwic291cmNlc0NvbnRlbnRcIjpbbnVsbCxcIi5wb3J0SG9tZUJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1idXR0b24tYWNjZW50KTtcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufS5wb3J0SG9tZUJ1dHRvbjpob3ZlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufS5wb3J0SG9tZUJ1dHRvbiB7XFxuICBib3JkZXItY29sb3I6ICM0ZGE4ZGE7XFxuICBjb2xvcjogIzRkYThkYTtcXG59XFxuXFxuLnBvcnRIb21lQnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3J0U29jaWFsQnV0dG9uIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNC4yZW07XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWJ1dHRvbi1hY2NlbnQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYnV0dG9uLWFjY2VudCk7XFxufVxcblxcbi5wb3J0U29jaWFsQnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY29sb3I6IHZhcigtLWNvbG9yLWJ1dHRvbi1hY2NlbnQpO1xcbiAgYm9yZGVyLWNvbG9yOiAjNGRhOGRhO1xcbiAgY29sb3I6ICM0ZGE4ZGE7XFxufVxcblxcbi5wb3J0UmVzdW1lIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuXFxuLnBvcnRSZXN1bWU6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5wb3J0U2VydmljZUJ1dHRvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDgwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0LjJlbTtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4ucG9ydFNlcnZpY2VCdXR0b246aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkYThkYTtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggYmxhY2s7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgpO1xcbn1cXG5cXG4uZGlzYWJsZSB7XFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1idXR0b24tZGlzYWJsZSkpO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1jb2xvci1idXR0b24tZGlzYWJsZSkpO1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgcGFkZGluZy1yaWdodDogMjBweDtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWludmVydGVkKTtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XCIsXCIucG9ydEhvbWVCdXR0b24ge1xcbiAgQGFwcGx5IGJnLWJhY2tncm91bmRDb2xvci1za2luLWJ1dHRvbi1hY2NlbnQgdGV4dC1bMTNweF0gcHgtWzIwcHhdIHB5LVsxMHB4XVxcbiAgdXBwZXJjYXNlIGZvbnQtc2VtaWJvbGQgYm9yZGVyLTIgYm9yZGVyLXNvbGlkXFxuICBob3ZlcjpiZy10cmFuc3BhcmVudCBob3ZlcjppdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXI7XFxuICBib3JkZXItY29sb3I6ICM0ZGE4ZGE7XFxuICBjb2xvcjogIzRkYThkYTtcXG59XFxuLnBvcnRIb21lQnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5wb3J0U29jaWFsQnV0dG9uIHtcXG4gIEBhcHBseSBiZy1iYWNrZ3JvdW5kQ29sb3Itc2tpbi1idXR0b24tYWNjZW50IGJvcmRlci0yIGJvcmRlci1iYWNrZ3JvdW5kQ29sb3Itc2tpbi1idXR0b24tYWNjZW50XFxuICBib3JkZXItc29saWQgcm91bmRlZC1bNC4yZW1dIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclxcbiAgaC1bNDBweF0gdy1bNDBweF0gXFxuICBob3ZlcjpiZy10cmFuc3BhcmVudCBob3Zlcjp0ZXh0LWJhY2tncm91bmRDb2xvci1za2luLWJ1dHRvbi1hY2NlbnQ7XFxufVxcbi5wb3J0U29jaWFsQnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogIzRkYThkYTtcXG4gIGNvbG9yOiAjNGRhOGRhO1xcbn1cXG5cXG4ucG9ydFJlc3VtZSB7XFxuICBAYXBwbHkgdGV4dC13aGl0ZSBiZy10cmFuc3BhcmVudCBwLTIgYm9yZGVyLVsjMjIyXSBob3ZlcjpiZy1bIzIyMl07XFxufVxcblxcbi5wb3J0U2VydmljZUJ1dHRvbiB7XFxuICBAYXBwbHkgYmctdHJhbnNwYXJlbnQgXFxuICBmbGV4IFxcbiAgYm9yZGVyLVsxcHhdIGJvcmRlci1zb2xpZCByb3VuZGVkLVs0LjJlbV1cXG4gIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclxcbiAgaC1bODBweF0gdy1bODBweF07XFxufVxcbi5wb3J0U2VydmljZUJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGRhOGRhO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCBibGFjaztcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCk7XFxufVxcbi5kaXNhYmxlIHtcXG4gIEBhcHBseSBjdXJzb3Itbm90LWFsbG93ZWQgYmctYmFja2dyb3VuZENvbG9yLXNraW4tYnV0dG9uLWRpc2FibGUgb3BhY2l0eS01MCB0ZXh0LVsxM3B4XSB0ZXh0LXRleHRDb2xvci1za2luLWludmVydGVkIHB4LVsyMHB4XSBweS1bMTBweF1cXG4gIHVwcGVyY2FzZSBmb250LXNlbWlib2xkIGJvcmRlci0yIGJvcmRlci1iYWNrZ3JvdW5kQ29sb3Itc2tpbi1idXR0b24tZGlzYWJsZSBib3JkZXItc29saWQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInBvcnRIb21lQnV0dG9uXCI6IFwiYnV0dG9uX3BvcnRIb21lQnV0dG9uX18ydDd3cVwiLFxuXHRcInBvcnRTb2NpYWxCdXR0b25cIjogXCJidXR0b25fcG9ydFNvY2lhbEJ1dHRvbl9fM0lRQ2JcIixcblx0XCJwb3J0UmVzdW1lXCI6IFwiYnV0dG9uX3BvcnRSZXN1bWVfXzNHM3ppXCIsXG5cdFwicG9ydFNlcnZpY2VCdXR0b25cIjogXCJidXR0b25fcG9ydFNlcnZpY2VCdXR0b25fX3dsSmIxXCIsXG5cdFwiZGlzYWJsZVwiOiBcImJ1dHRvbl9kaXNhYmxlX19Gd1lZNVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5sb2FkZXJfYmFzaWNfXzVVMnNXIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0wLjI1cmVtO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxuICAgIGhlaWdodDogMS4yNXJlbTtcXG4gICAgd2lkdGg6IDEuMjVyZW1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGxvYWRlcl9zcGluX18yLXRpXyB7XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGxvYWRlcl9zcGluX18yLXRpXyB7XFxuICAgIHRvIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZylcXG4gICAgfVxcbn1cXG4ubG9hZGVyX2Jhc2ljX181VTJzVyB7XFxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBsb2FkZXJfc3Bpbl9fMi10aV8gMXMgbGluZWFyIGluZmluaXRlO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGVyX3NwaW5fXzItdGlfIDFzIGxpbmVhciBpbmZpbml0ZTtcXG4gICAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpXFxufVxcbi5sb2FkZXJfYmFzaWNfXzVVMnNXID4gY2lyY2xlIHtcXG4gICAgb3BhY2l0eTogMC4yNVxcbn1cXG4ubG9hZGVyX2Jhc2ljX181VTJzVyA+IHBhdGgge1xcbiAgICBvcGFjaXR5OiAwLjc1XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIjxubyBzb3VyY2U+XCIsXCJ3ZWJwYWNrOi8vY29tcG9uZW50cy9Mb2FkZXIvbG9hZGVyLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQUEscUJBQUE7SUFBQSxxQkFBQTtJQUFBLGVBQUE7SUFBQTtBQ0tBO0FETEE7SUFBQTtRQUFBO0lDU0k7QUFDSjtBRFZBO0lBQUE7UUFBQTtJQ2NJO0FBQ0o7QURmQTtJQUFBLHdEQUFBO1lBQUEsZ0RBQUE7SUFBQSxvQkFBQTtJQUFBO0FDcUJBO0FEckJBO0lBQUE7QUN3QkE7QUR4QkE7SUFBQTtBQzJCQVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiYmFzaWNcIjogXCJsb2FkZXJfYmFzaWNfXzVVMnNXXCIsXG5cdFwic3BpblwiOiBcImxvYWRlcl9zcGluX18yLXRpX1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5mb290ZXJfZm9vdGVyX18yNDNjUCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59QG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7LmZvb3Rlcl9mb290ZXJfXzI0M2NQIHtcXG4gICAgZ2FwOiAxLjI1cmVtO1xcbiAgfVxcbn1AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsuZm9vdGVyX2Zvb3Rlcl9fMjQzY1Age1xcbiAgICBnYXA6IDEuNXJlbTtcXG4gIH0uZm9vdGVyX2Zvb3Rlcl9fMjQzY1Age1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XFxuICB9XFxufUBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHsuZm9vdGVyX2Zvb3Rlcl9fMjQzY1Age1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XFxuICB9XFxufS5mb290ZXJfZm9vdGVyX18yNDNjUCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIyMzJlO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uZm9vdGVyX2Zvb3Rlck1haW5fXzJZakJUIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG59XFxuXFxuLmZvb3Rlcl9jb250YWN0Rl9faENOVEkge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZvb3Rlcl9mb290ZXJfXzI0M2NQIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uZm9vdGVyX2Zvb3RlclRleHRfXzFvNUFQIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyX2Zvb3RlclRleHRfXzFvNUFQIHNwYW4gYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb290ZXJfZm9vdGVyVGV4dF9fMW81QVAgc3BhbiBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjNGRhOGRhO1xcbn1cXG5cXG4uZm9vdGVyX2Zvb3RlclNvY19fMXl5M2Ege1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyX3BvcnRTb2NpYWxCdG5fX0w5cy04IHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbn1cXG4uZm9vdGVyX3BvcnRTb2NpYWxCdG5fX0w5cy04OmhvdmVyIC5mb290ZXJfYnRuSG92ZXJfXzFzSHVaIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZpbGw6IGN1cnJlbnRDb2xvcjtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgY29sb3I6ICM0ZGE4ZGE7XFxufVxcblxcbi5mb290ZXJfZm9vdGVyTGluZV9feDNEeHAge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNCAvIHNwYW4gNDtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDExNCwgMTI4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZm9vdGVyX2Zvb3Rlck1haW5fXzJZakJUIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gIC5mb290ZXJfY29udGFjdEZfX2hDTlRJIHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiPG5vIHNvdXJjZT5cIixcIndlYnBhY2s6Ly9jb250YWluZXIvZm9vdGVyL2Zvb3Rlci5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL2Zvb3Rlci5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUFBLFlBQUE7RUFBQSxtQkFBQTtFQUFBLHNCQUFBO0FDSUEsQ0RKQSwyQkFBQTtJQUFBLFlBQUE7RUNNRTtBQUNGLENEUEEsMkJBQUE7SUFBQSxXQUFBO0VDU0UsQ0RURjtJQUFBLGtCQUFBO0lBQUEsbUJBQUE7RUNZRTtBQUNGLENEYkEsNEJBQUE7SUFBQSxrQkFBQTtJQUFBLG1CQUFBO0VDZ0JFO0FBQ0YsQ0RqQkE7RUVFRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQUVGOztBQUFBO0VBQ0UsYUFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBSUY7O0FBRkE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBS0Y7O0FBSEE7RUFDRSxZQUFBO0FBTUY7O0FBSkE7RUFDRSxjQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFRRjs7QUZ4Q0E7RUFBQSxvQkFBQTtFQUFBLHFCQUFBO0VBQUEsYUFBQTtFQUFBLHNCQUFBO0VBQUEsbUJBQUE7RUFBQSxrQkFBQTtFQUFBLG9CQUFBO0VBQUEsa0RBQUE7RUFBQSx3REFBQTtBQ29FQTtBRHBFQTtFQUFBLGVBQUE7RUFBQSxrQkFBQTtFQUFBLHdEQUFBO0VFdUNNLGNBQUE7QURtQ047O0FEMUVBO0VBQUEsNEJBQUE7RUFBQSxrQkFBQTtFQUFBLHFCQUFBO0VBQUEsV0FBQTtFQUFBLGtCQUFBO0VBQUEsMkRBQUE7QUNtRkE7O0FDckNBO0VBQ0U7SUFDRSxzQkFBQTtFQVNGOztFQVBBO0lBQ0UsYUFBQTtFQVVGO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W251bGwsXCIuZm9vdGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbn1AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHsuZm9vdGVyIHtcXG4gICAgZ2FwOiAxLjI1cmVtO1xcbiAgfVxcbn1AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHsuZm9vdGVyIHtcXG4gICAgZ2FwOiAxLjVyZW07XFxuICB9LmZvb3RlciB7XFxuICAgIHBhZGRpbmctbGVmdDogNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogNXJlbTtcXG4gIH1cXG59QG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkgey5mb290ZXIge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XFxuICB9XFxufS5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMjMyZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmZvb3Rlck1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uY29udGFjdEYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmZvb3RlclRleHQge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5mb290ZXJUZXh0IHNwYW4gYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5mb290ZXJUZXh0IHNwYW4gYTpob3ZlciB7XFxuICBjb2xvcjogIzRkYThkYTtcXG59XFxuXFxuLmZvb3RlclNvYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5wb3J0U29jaWFsQnRuIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbn1cXG4ucG9ydFNvY2lhbEJ0bjpob3ZlciAuYnRuSG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmlsbDogY3VycmVudENvbG9yO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XFxuICBjb2xvcjogIzRkYThkYTtcXG59XFxuXFxuLmZvb3RlckxpbmUge1xcbiAgZ3JpZC1jb2x1bW46IHNwYW4gNCAvIHNwYW4gNDtcXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG4gIGhlaWdodDogMXB4O1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDcsIDExNCwgMTI4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZm9vdGVyTWFpbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuY29udGFjdEYge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcbn1cIixcIi5mb290ZXIge1xcbiAgQGFwcGx5IG1kOmdhcC02IHNtOmdhcC01IHB5LTYgaC1mdWxsIGxnOnB4LTIwIG1kOnB4LTIwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMjMyZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmZvb3Rlck1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG4uY29udGFjdEYge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLmZvb3RlclRleHQge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5mb290ZXJUZXh0IHNwYW4gYSB7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5mb290ZXJUZXh0IHNwYW4gYTpob3ZlciB7XFxuICBjb2xvcjogIzRkYThkYTtcXG59XFxuLmZvb3RlclNvYyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5wb3J0U29jaWFsQnRuIHtcXG4gIEBhcHBseSBteC0xIGZsZXggaXRlbXMtY2VudGVyIGZsZXgtY29sIGZpbGwtY3VycmVudCBlYXNlLWluLW91dCB0ZXh0LXdoaXRlO1xcbiAgJjpob3ZlciB7XFxuICAgIC5idG5Ib3ZlciB7XFxuICAgICAgQGFwcGx5IGZpbGwtY3VycmVudCBlYXNlLWluLW91dCBjdXJzb3ItcG9pbnRlcjtcXG4gICAgICBjb2xvcjogIzRkYThkYTtcXG4gICAgfVxcbiAgfVxcbn1cXG4uZm9vdGVyTGluZSB7XFxuICBAYXBwbHkgaC1bMXB4XSBjb2wtc3Bhbi00IG15LTYgYmctZ3JheS01MDA7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAuZm9vdGVyTWFpbiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuY29udGFjdEYge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJmb290ZXJcIjogXCJmb290ZXJfZm9vdGVyX18yNDNjUFwiLFxuXHRcImZvb3Rlck1haW5cIjogXCJmb290ZXJfZm9vdGVyTWFpbl9fMllqQlRcIixcblx0XCJjb250YWN0RlwiOiBcImZvb3Rlcl9jb250YWN0Rl9faENOVElcIixcblx0XCJmb290ZXJUZXh0XCI6IFwiZm9vdGVyX2Zvb3RlclRleHRfXzFvNUFQXCIsXG5cdFwiZm9vdGVyU29jXCI6IFwiZm9vdGVyX2Zvb3RlclNvY19fMXl5M2FcIixcblx0XCJwb3J0U29jaWFsQnRuXCI6IFwiZm9vdGVyX3BvcnRTb2NpYWxCdG5fX0w5cy04XCIsXG5cdFwiYnRuSG92ZXJcIjogXCJmb290ZXJfYnRuSG92ZXJfXzFzSHVaXCIsXG5cdFwiZm9vdGVyTGluZVwiOiBcImZvb3Rlcl9mb290ZXJMaW5lX194M0R4cFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dSZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubmF2YmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogc29saWQgM3B4ICM0ZGE4ZGE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdi1idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxLjdyZW07XFxuICBoZWlnaHQ6IDAuMXJlbTtcXG4gIGJhY2tncm91bmQ6ICM0ZGE4ZGE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubmF2LWJ0bjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMS43cmVtO1xcbiAgaGVpZ2h0OiAwLjFyZW07XFxuICBiYWNrZ3JvdW5kOiAjNGRhOGRhO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubmF2LWJ0bi5hY3RpdmU6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLm5hdi1idG4uYWN0aXZlOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5tYXgtd2lkdGgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2dvIHNwYW4ge1xcbiAgY29sb3I6ICM0ZGE4ZGE7XFxufVxcblxcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tZW51IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5tZW51IGxpIGEge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudSBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjNGRhOGRhO1xcbn1cXG5cXG4ubmF2LWxpbmstd2hpdGU6YWN0aXZlIHtcXG4gIGNvbG9yOiAjNGRhOGRhO1xcbn1cXG5cXG4uYmxhbmtTcGFjZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3ViLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzc3cHgpIHtcXG4gIC5uYXYtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5tZW51IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuXFxuICAuYmxhbmtTcGFjZSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLm1lbnUgbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMCUgMTUlO1xcbiAgfVxcblxcbiAgLm1heC13aWR0aCB7XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zdWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubWF4LXdpZHRoIHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1lbnUge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgfVxcbn1cXG4uYWxpZ25tZW50e1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxuICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpe1xcbiAgLmFsaWdubWVudHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xcbiAgLmFsaWdubWVudHtcXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KXtcXG4gIC5hbGlnbm1lbnR7XFxuICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xcbiAgfVxcbn1cXG5cXG4udGV4dEFsaWdue1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGVmdGJveHtcXG4gIG1hcmdpbi10b3A6IDMuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCl7XFxuICAubGVmdGJveHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5sZWZ0Ym94e1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xcbiAgLmxlZnRib3h7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcblxcbi5sZWZ0c3ViYm94e1xcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDE2OCwgMjE4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpe1xcbiAgLmxlZnRzdWJib3h7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVxcblxcbi5sZWZ0c3ViYm94IHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sZWZ0VGV4dEFsaWdue1xcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5iYXJze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xcbn1cXG5cXG4uYmFyYWxpZ257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGVyY2VudGZpZWxke1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmFye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywgNTAsIDY1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5odHtcXG4gIGhlaWdodDogMC43NXJlbTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZXtcXG4gIDUwJXtcXG4gICAgb3BhY2l0eTogLjU7XFxuICB9XFxufVxcblxcbi5odHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxNjgsIDIxOCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaHQye1xcbiAgaGVpZ2h0OiAwLjc1cmVtO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZXtcXG4gIDUwJXtcXG4gICAgb3BhY2l0eTogLjU7XFxuICB9XFxufVxcblxcbi5odDJ7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgMTY4LCAyMTgsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmh0M3tcXG4gIGhlaWdodDogMC43NXJlbTtcXG4gIHdpZHRoOiA3MiU7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2V7XFxuICA1MCV7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgfVxcbn1cXG5cXG4uaHQze1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDE2OCwgMjE4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5odDR7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogODUlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLmh0NHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxNjgsIDIxOCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4udmlld01vcmV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmxvY2t7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGlnbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5saWdodC10aGVtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIzMjQxO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uU2tpbGxiYXJ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxNjgsIDIxOCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4ucmVzdW1lTWFpbiA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSl7XFxuICAtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG4gIG1hcmdpbi10b3A6IGNhbGMoNnJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoNnJlbSAqIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXG5cXG4ucmVzdW1lTWFpbntcXG4gIHBhZGRpbmc6IDZyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpe1xcbiAgLnJlc3VtZU1haW57XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCl7XFxuICAucmVzdW1lTWFpbntcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gIH1cXG59XFxuXFxuLndvcmtQYXJhe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XFxuICAud29ya1BhcmF7XFxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpe1xcbiAgLndvcmtQYXJhe1xcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KXtcXG4gIC53b3JrUGFyYXtcXG4gICAgbWFyZ2luLWxlZnQ6IDRlbTtcXG4gIH1cXG59XFxuXFxuLndvcmtFeHB7XFxuICBwYWRkaW5nOiAtMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XFxufVxcblxcbi5lZHVjYXRpb257XFxuICBtYXJnaW4tdG9wOiAtMC43NXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcXG4gIC5lZHVjYXRpb257XFxuICAgIG1hcmdpbi1sZWZ0OiA2cmVtO1xcbiAgfVxcbiAgLmVkdWNhdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCl7XFxuICAuZWR1Y2F0aW9ue1xcbiAgICBtYXJnaW4tbGVmdDogOS41cmVtO1xcbiAgfVxcbn1cXG5cXG4uYmxvY2tUYWJsZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgMCU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCl7XFxuICAuYmxvY2tUYWJsZXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbiAgfVxcbiAgLmJsb2NrVGFibGV7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuYmxvY2tUYWJsZXtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XFxuICAuYmxvY2tUYWJsZXtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIH1cXG4gIC5ibG9ja1RhYmxle1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5cXG4uZGF5e1xcbiAgbWFyZ2luLXRvcDogLTEuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcXG4gIC5kYXl7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5kYXl7XFxuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KXtcXG4gIC5kYXl7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5kYXl7XFxuICAgIHBhZGRpbmctbGVmdDogNnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogNnJlbTtcXG4gIH1cXG59XFxuXFxuLmNvbGxlZ2V7XFxuICBib3JkZXItdG9wLXdpZHRoOiAwcHg7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxuICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwcHg7XFxufVxcblxcbi5jb2xsZWdlOmhvdmVye1xcbiAgdHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLmNvbGxlZ2Uge1xcbiAgY29sb3I6ICM0ZGE4ZGE7XFxuICBib3JkZXItYm90dG9tOiAjNGRhOGRhO1xcbn1cXG5cXG4ud29ya0Vwe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSAwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KXtcXG4gIC53b3JrRXB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAud29ya0Vwe1xcbiAgICBnYXA6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XFxuICAud29ya0Vwe1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5cXG4uU2tpbGxiYXJze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcXG59XFxuXFxuLlNraWxsYmxvY2t7XFxuICB3aWR0aDogYXV0bztcXG4gIGZsZXg6IDEgMSAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uU2tpbGxodDF7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogOTIlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQxe1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDJ7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQye1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDN7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogNzIlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQze1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDR7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQ0e1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDV7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogODUlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQ1e1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDZ7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogODglO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQ2e1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDd7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogNjUlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQ3e1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uc2lkZURpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDEgMSAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCl7XFxuICAuc2lkZURpdntcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcXG4gIC5zaWRlRGl2e1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG59XFxuXFxuLmJhY2tBbGlnbiB7XFxuICBjb2xvcjogIzRkYThkYTtcXG59XFxuXFxuLnBvcnRmb2xpb0xpc3R7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjMyNDE7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3J0Zm9saW9JdGVtc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcXG4gIC5wb3J0Zm9saW9JdGVtc3tcXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KXtcXG4gIC5wb3J0Zm9saW9JdGVtc3tcXG4gICAgcGFkZGluZy1sZWZ0OiA4cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cmVtO1xcbiAgfVxcbn1cXG5cXG4ucG9ydEhvdmVyQ2FyZFRleHQge1xcbiAgY29sb3I6ICMxYjMyNDE7XFxufVxcblxcbi5iYWNrQWxpZ257XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDBweDtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMHB4O1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuLnBGaWx0ZXJ7XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wRmlsdGVyIHVse1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5wRmlsdGVyIHVsIGxpe1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5wRmlsdGVyIHVsIGxpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIi9cXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xcmVtO1xcbn1cXG5cXG4ucEZpbHRlciB1bCBsaTpsYXN0LWNoaWxkOjpiZWZvcmV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmVsYXRpdmVQe1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob3ZlckNvbnRleHR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3ZlckNvbnRleHQgc3BhbiB7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kOiAjNGRhOGRhO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5iZy1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjIzMmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uLi9jb21wb25lbnRzL05hdmJhci9uYXZiYXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9fZ2xvYmFsLnNjc3NcIixcIjxubyBzb3VyY2U+XCIsXCJ3ZWJwYWNrOi8vc3R5bGVzL19nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovLy4uL2NvbnRhaW5lci9FZHVjYXRpb24vZWR1Y2F0aW9uLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vcGFnZXMvUmVzdW1lL3Jlc3VtZS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4uL3BhZ2VzL1BvcnRmb2xpb1BhZ2UvcG9ydGZvbGlvLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FDSUY7O0FERkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0tGOztBREhBO0VBQ0UseUNBQUE7QUNNRjs7QURKQTtFQUNFLDBDQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNRRjs7QUROQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FDU0Y7O0FEUEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDVUY7O0FEUkE7RUFDRSxjQUFBO0FDV0Y7O0FEVEE7RUFDRSxhQUFBO0FDWUY7O0FEVkE7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FDYUY7O0FEWEE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUNjRjs7QURaQTtFQUNFLGNBQUE7QUNlRjs7QURiQTtFQUNFLGNBQUE7QUNnQkY7O0FEZEE7RUFDRSxhQUFBO0FDaUJGOztBRGZBO0VBQ0UsbUJBQUE7RUFDQSxhQUFBO0FDa0JGOztBRGhCQTtFQUNFO0lBQ0UsYUFBQTtFQ21CRjs7RURqQkE7SUFDRSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQ29CRjs7RURs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QSxrQkFBQTtFQUFBLHFCQUFBO0VBQUEscUJBQUE7RUFBQSxlQUFBO0VBQUEsbUJBQUE7RUFBQSxvQkFBQTtFQUFBLHlCQUFBO0VJc0JFLGdCQUFBO0FIZ3VCRjs7QUc5dEJBO0VBQ0UsWUFBQTtFSnpCRixrQkFBQTtFQUFBLFlBQUE7QURzVkE7O0FDdFZBO0VBQUEsYUFBQTtBQ2d3QkE7O0FEaHdCQTtFQUFBLGtCQUFBO0VBQUEsWUFBQTtFQUFBLFdBQUE7RUlpQ0UsZUFBQTtBSHN1QkY7O0FEdndCQTtFQUFBLGFBQUE7RUFBQSxzQkFBQTtFQUFBLG1CQUFBO0FDNndCQTs7QUd2dUJBO0VBQ0Usd0NBQUE7RUp2Q0YsYUFBQTtFQUFBLG1CQUFBO0VBQUEsdUJBQUE7RUFBQSxxQkFBQTtFQUFBLFVBQUE7RUl5Q0UsbUJBQUE7QUxnVUY7O0FBbldBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQXNXRjs7QUFuV0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFzV0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdmJhciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxMDAwMDtcXHJcXG59XFxyXFxuLm5hdi1idG4ge1xcclxcbiAgd2lkdGg6IDIuNXJlbTtcXHJcXG4gIGhlaWdodDogMi41cmVtO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IHNvbGlkIDNweCAjNGRhOGRhO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbi5uYXYtYnRuOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB3aWR0aDogMS43cmVtO1xcclxcbiAgaGVpZ2h0OiAwLjFyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiAjNGRhOGRhO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00cHgpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuLm5hdi1idG46OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgd2lkdGg6IDEuN3JlbTtcXHJcXG4gIGhlaWdodDogMC4xcmVtO1xcclxcbiAgYmFja2dyb3VuZDogIzRkYThkYTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xcclxcbiAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG59XFxyXFxuLm5hdi1idG4uYWN0aXZlOjpiZWZvcmUge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pIHJvdGF0ZSg0NWRlZyk7XFxyXFxufVxcclxcbi5uYXYtYnRuLmFjdGl2ZTo6YWZ0ZXIge1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDByZW0pIHJvdGF0ZSgtNDVkZWcpO1xcclxcbn1cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMTVweCAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbn1cXHJcXG4ubWF4LXdpZHRoIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG4ubG9nbyB7XFxyXFxuICBmb250LXNpemU6IDM1cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4ubG9nbyBzcGFuIHtcXHJcXG4gIGNvbG9yOiAjNGRhOGRhO1xcclxcbn1cXHJcXG4ubWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG4ubWVudSBsaSB7XFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG4ubWVudSBsaSBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLm1lbnUgbGkgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogIzRkYThkYTtcXHJcXG59XFxyXFxuLm5hdi1saW5rLXdoaXRlOmFjdGl2ZSB7XFxyXFxuICBjb2xvcjogIzRkYThkYTtcXHJcXG59XFxyXFxuLmJsYW5rU3BhY2Uge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuLnN1Yi1jb250YWluZXIge1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc3N3B4KSB7XFxyXFxuICAubmF2LWJ0biB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB9XFxyXFxuICAubWVudSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC41cztcXHJcXG4gICAgd2lkdGg6IDMwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MHZoO1xcclxcbiAgfVxcclxcbiAgLmJsYW5rU3BhY2Uge1xcclxcbiAgICB3aWR0aDogNzAlO1xcclxcbiAgICBoZWlnaHQ6IDkwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gIH1cXHJcXG4gIC5tZW51IGxpIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZzogMTAlIDE1JTtcXHJcXG4gIH1cXHJcXG4gIC5tYXgtd2lkdGgge1xcclxcbiAgICBwYWRkaW5nOiAwIDQwcHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAuc3ViLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLm1heC13aWR0aCB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gIC5tZW51IHtcXHJcXG4gICAgd2lkdGg6IDQ1JTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1VYnVudHUmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuQGltcG9ydCBcXFwiLi4vY29tcG9uZW50cy9OYXZiYXIvbmF2YmFyLm1vZHVsZS5zY3NzXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCIuLi9jb250YWluZXIvRWR1Y2F0aW9uL2VkdWNhdGlvbi5tb2R1bGUuc2Nzc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vcGFnZXMvUmVzdW1lL3Jlc3VtZS5tb2R1bGUuc2Nzc1xcXCI7XFxyXFxuQGltcG9ydCBcXFwiLi4vcGFnZXMvUG9ydGZvbGlvUGFnZS9wb3J0Zm9saW8ubW9kdWxlLnNjc3NcXFwiO1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVWJ1bnR1XFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmJnLXByaW1hcnkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMjMyZTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXCIsbnVsbCxcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVVidW50dSZkaXNwbGF5PXN3YXBcXFwiKTtcXG4ubmF2YmFyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlcjogc29saWQgM3B4ICM0ZGE4ZGE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLm5hdi1idG46OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxLjdyZW07XFxuICBoZWlnaHQ6IDAuMXJlbTtcXG4gIGJhY2tncm91bmQ6ICM0ZGE4ZGE7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubmF2LWJ0bjo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMS43cmVtO1xcbiAgaGVpZ2h0OiAwLjFyZW07XFxuICBiYWNrZ3JvdW5kOiAjNGRhOGRhO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubmF2LWJ0bi5hY3RpdmU6OmJlZm9yZSB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSkgcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuLm5hdi1idG4uYWN0aXZlOjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHJlbSkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5tYXgtd2lkdGgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5sb2dvIHtcXG4gIGZvbnQtc2l6ZTogMzVweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5sb2dvIHNwYW4ge1xcbiAgY29sb3I6ICM0ZGE4ZGE7XFxufVxcblxcbi5tZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tZW51IGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5tZW51IGxpIGEge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4ubWVudSBsaSBhOmhvdmVyIHtcXG4gIGNvbG9yOiAjNGRhOGRhO1xcbn1cXG5cXG4ubmF2LWxpbmstd2hpdGU6YWN0aXZlIHtcXG4gIGNvbG9yOiAjNGRhOGRhO1xcbn1cXG5cXG4uYmxhbmtTcGFjZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc3ViLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzc3cHgpIHtcXG4gIC5uYXYtYnRuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG5cXG4gIC5tZW51IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICBoZWlnaHQ6IDkwdmg7XFxuICB9XFxuXFxuICAuYmxhbmtTcGFjZSB7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgfVxcblxcbiAgLm1lbnUgbGkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwYWRkaW5nOiAxMCUgMTUlO1xcbiAgfVxcblxcbiAgLm1heC13aWR0aCB7XFxuICAgIHBhZGRpbmc6IDAgNDBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5zdWItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICB9XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAubWF4LXdpZHRoIHtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcbiAgLm1lbnUge1xcbiAgICB3aWR0aDogNDUlO1xcbiAgfVxcbn1cXG4uYWxpZ25tZW50e1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0MiwgMjQyLCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxuICBwYWRkaW5nLXRvcDogNzBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA3MHB4O1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpe1xcbiAgLmFsaWdubWVudHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xcbiAgLmFsaWdubWVudHtcXG4gICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA3MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KXtcXG4gIC5hbGlnbm1lbnR7XFxuICAgIHBhZGRpbmctbGVmdDogMjAwcHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4O1xcbiAgfVxcbn1cXG5cXG4udGV4dEFsaWdue1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4ubGVmdGJveHtcXG4gIG1hcmdpbi10b3A6IDMuNXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDMuNXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCl7XFxuICAubGVmdGJveHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5sZWZ0Ym94e1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpe1xcbiAgLmxlZnRib3h7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICB9XFxufVxcblxcbi5sZWZ0c3ViYm94e1xcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDE2OCwgMjE4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxuICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpe1xcbiAgLmxlZnRzdWJib3h7XFxuICAgIHdpZHRoOiA5MCU7XFxuICB9XFxufVxcblxcbi5sZWZ0c3ViYm94IHtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sZWZ0VGV4dEFsaWdue1xcbiAgcGFkZGluZy1ib3R0b206IDAuMjVyZW07XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcblxcbi5iYXJze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xcbn1cXG5cXG4uYmFyYWxpZ257XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ucGVyY2VudGZpZWxke1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG5cXG4uYmFye1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNywgNTAsIDY1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5odHtcXG4gIGhlaWdodDogMC43NXJlbTtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZXtcXG4gIDUwJXtcXG4gICAgb3BhY2l0eTogLjU7XFxuICB9XFxufVxcblxcbi5odHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxNjgsIDIxOCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uaHQye1xcbiAgaGVpZ2h0OiAwLjc1cmVtO1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBwdWxzZXtcXG4gIDUwJXtcXG4gICAgb3BhY2l0eTogLjU7XFxuICB9XFxufVxcblxcbi5odDJ7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBwdWxzZSAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlO1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NywgMTY4LCAyMTgsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuXFxuLmh0M3tcXG4gIGhlaWdodDogMC43NXJlbTtcXG4gIHdpZHRoOiA3MiU7XFxufVxcblxcbkBrZXlmcmFtZXMgcHVsc2V7XFxuICA1MCV7XFxuICAgIG9wYWNpdHk6IC41O1xcbiAgfVxcbn1cXG5cXG4uaHQze1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzcsIDE2OCwgMjE4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcblxcbi5odDR7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogODUlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLmh0NHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBwdWxzZSAycyBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjYsIDEpIGluZmluaXRlO1xcbiAgICAgICAgICBhbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxNjgsIDIxOCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4udmlld01vcmV7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMSAxIDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uYmxvY2t7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hbGlnbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5saWdodC10aGVtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIzMjQxO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uU2tpbGxiYXJ7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxNjgsIDIxOCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4ucmVzdW1lTWFpbiA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSl7XFxuICAtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG4gIG1hcmdpbi10b3A6IGNhbGMoNnJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoNnJlbSAqIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXG5cXG4ucmVzdW1lTWFpbntcXG4gIHBhZGRpbmc6IDZyZW07XFxuICBsaW5lLWhlaWdodDogMi41cmVtO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpe1xcbiAgLnJlc3VtZU1haW57XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCl7XFxuICAucmVzdW1lTWFpbntcXG4gICAgcGFkZGluZzogNHJlbTtcXG4gIH1cXG59XFxuXFxuLndvcmtQYXJhe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XFxuICAud29ya1BhcmF7XFxuICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpe1xcbiAgLndvcmtQYXJhe1xcbiAgICBtYXJnaW4tbGVmdDogNGVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KXtcXG4gIC53b3JrUGFyYXtcXG4gICAgbWFyZ2luLWxlZnQ6IDRlbTtcXG4gIH1cXG59XFxuXFxuLndvcmtFeHB7XFxuICBwYWRkaW5nOiAtMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XFxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XFxufVxcblxcbi5lZHVjYXRpb257XFxuICBtYXJnaW4tdG9wOiAtMC43NXJlbTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDEuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcXG4gIC5lZHVjYXRpb257XFxuICAgIG1hcmdpbi1sZWZ0OiA2cmVtO1xcbiAgfVxcbiAgLmVkdWNhdGlvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCl7XFxuICAuZWR1Y2F0aW9ue1xcbiAgICBtYXJnaW4tbGVmdDogOS41cmVtO1xcbiAgfVxcbn1cXG5cXG4uYmxvY2tUYWJsZXtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4OiAxIDEgMCU7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAzMjBweCl7XFxuICAuYmxvY2tUYWJsZXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xcbiAgfVxcbiAgLmJsb2NrVGFibGV7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuYmxvY2tUYWJsZXtcXG4gICAgZ2FwOiAyLjVyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XFxuICAuYmxvY2tUYWJsZXtcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcXG4gIH1cXG4gIC5ibG9ja1RhYmxle1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5cXG4uZGF5e1xcbiAgbWFyZ2luLXRvcDogLTEuNXJlbTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcXG4gIC5kYXl7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5kYXl7XFxuICAgIHBhZGRpbmctbGVmdDogMy41cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KXtcXG4gIC5kYXl7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG4gIC5kYXl7XFxuICAgIHBhZGRpbmctbGVmdDogNnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogNnJlbTtcXG4gIH1cXG59XFxuXFxuLmNvbGxlZ2V7XFxuICBib3JkZXItdG9wLXdpZHRoOiAwcHg7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxuICBib3JkZXItbGVmdC13aWR0aDogMHB4O1xcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAwcHg7XFxufVxcblxcbi5jb2xsZWdlOmhvdmVye1xcbiAgdHJhbnNmb3JtOiB2YXIoLS10dy10cmFuc2Zvcm0pO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxuLmNvbGxlZ2Uge1xcbiAgY29sb3I6ICM0ZGE4ZGE7XFxuICBib3JkZXItYm90dG9tOiAjNGRhOGRhO1xcbn1cXG5cXG4ud29ya0Vwe1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDEgMSAwJTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KXtcXG4gIC53b3JrRXB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAud29ya0Vwe1xcbiAgICBnYXA6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCl7XFxuICAud29ya0Vwe1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcbn1cXG5cXG4uU2tpbGxiYXJze1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcXG59XFxuXFxuLlNraWxsYmxvY2t7XFxuICB3aWR0aDogYXV0bztcXG4gIGZsZXg6IDEgMSAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uU2tpbGxodDF7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogOTIlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQxe1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDJ7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQye1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDN7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogNzIlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQze1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDR7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogNzUlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQ0e1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDV7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogODUlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQ1e1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDZ7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogODglO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQ2e1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uU2tpbGxodDd7XFxuICBoZWlnaHQ6IDAuNzVyZW07XFxuICB3aWR0aDogNjUlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNle1xcbiAgNTAle1xcbiAgICBvcGFjaXR5OiAuNTtcXG4gIH1cXG59XFxuXFxuLlNraWxsaHQ3e1xcbiAgLXdlYmtpdC1hbmltYXRpb246IHB1bHNlIDJzIGN1YmljLWJlemllcigwLjQsIDAsIDAuNiwgMSkgaW5maW5pdGU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC42LCAxKSBpbmZpbml0ZTtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG5cXG4uc2lkZURpdntcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXg6IDEgMSAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCl7XFxuICAuc2lkZURpdntcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcXG4gIC5zaWRlRGl2e1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG59XFxuXFxuLmJhY2tBbGlnbiB7XFxuICBjb2xvcjogIzRkYThkYTtcXG59XFxuXFxuLnBvcnRmb2xpb0xpc3R7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjMyNDE7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wb3J0Zm9saW9JdGVtc3tcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTVweDtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KXtcXG4gIC5wb3J0Zm9saW9JdGVtc3tcXG4gICAgcGFkZGluZy1sZWZ0OiA1cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cmVtO1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KXtcXG4gIC5wb3J0Zm9saW9JdGVtc3tcXG4gICAgcGFkZGluZy1sZWZ0OiA4cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cmVtO1xcbiAgfVxcbn1cXG5cXG4ucG9ydEhvdmVyQ2FyZFRleHQge1xcbiAgY29sb3I6ICMxYjMyNDE7XFxufVxcblxcbi5iYWNrQWxpZ257XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDBweDtcXG4gIGJvcmRlci1yaWdodC13aWR0aDogMHB4O1xcbiAgYm9yZGVyLWxlZnQtd2lkdGg6IDBweDtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICBsaW5lLWhlaWdodDogMXJlbTtcXG59XFxuXFxuLnBGaWx0ZXJ7XFxuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5wRmlsdGVyIHVse1xcbiAgbWFyZ2luOiAwcHg7XFxuICBwYWRkaW5nOiAwcHg7XFxufVxcblxcbi5wRmlsdGVyIHVsIGxpe1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XFxufVxcblxcbi5wRmlsdGVyIHVsIGxpOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIi9cXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xcmVtO1xcbn1cXG5cXG4ucEZpbHRlciB1bCBsaTpsYXN0LWNoaWxkOjpiZWZvcmV7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmVsYXRpdmVQe1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5ob3ZlckNvbnRleHR7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ob3ZlckNvbnRleHQgc3BhbiB7XFxuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG4gIG9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kOiAjNGRhOGRhO1xcbn1cXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmb250LWZhbWlseTogXFxcIlVidW50dVxcXCIsIHNhbnMtc2VyaWY7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5iZy1wcmltYXJ5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjIzMmU7XFxuICBjb2xvcjogd2hpdGU7XFxufVwiLFwiLmFsaWdubWVudCB7XFxuICBAYXBwbHkgYmctWyNmMmYyZjJdIHB5LVs3MHB4XSBsZzpweC1bMjAwcHhdIG1kOnB4LVs3MHB4XSBzbTpweC1bNTBweF07XFxufVxcblxcbi50ZXh0QWxpZ24ge1xcbiAgQGFwcGx5IHRleHQtY2VudGVyO1xcbn1cXG5cXG4ubGVmdGJveCB7XFxuICBAYXBwbHkgZmxleCBtZDpmbGV4LXJvdyB4czpmbGV4LWNvbCB4czppdGVtcy1jZW50ZXIgbXktMTQ7XFxufVxcblxcbi5sZWZ0c3ViYm94IHtcXG4gIEBhcHBseSBiZy1bIzRkYThkYV0gcHktNSBwbC01IHhzOnctWzkwJV0gcm91bmRlZC14bDtcXG4gIHdpZHRoOiA1MCU7XFxufVxcblxcbi5sZWZ0VGV4dEFsaWduIHtcXG4gIEBhcHBseSBsZWFkaW5nLW5vbmUgcGItMSB0ZXh0LWJsYWNrO1xcbn1cXG5cXG4uYmFycyB7XFxuICBAYXBwbHkgZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTQgcHgtNTtcXG59XFxuXFxuLmJhcmFsaWduIHtcXG4gIEBhcHBseSBmbGV4IGZsZXgtY29sIHctZnVsbDtcXG59XFxuXFxuLnBlcmNlbnRmaWVsZCB7XFxuICBAYXBwbHkgdGV4dC0zeGwgZm9udC1ibGFjayB0ZXh0LWJsYWNrIG10LTg7XFxufVxcblxcbi5iYXIge1xcbiAgQGFwcGx5IHJlbGF0aXZlIGJnLVsjMWIzMjQxXTtcXG59XFxuXFxuLmh0IHtcXG4gIEBhcHBseSBoLTMgYmctWyM0ZGE4ZGFdIGFuaW1hdGUtcHVsc2U7XFxufVxcbi5odDIge1xcbiAgQGFwcGx5IHctWzgwJV0gaC0zIGJnLVsjNGRhOGRhXSBhbmltYXRlLXB1bHNlO1xcbn1cXG4uaHQzIHtcXG4gIEBhcHBseSB3LVs3MiVdIGgtMyBiZy1bIzRkYThkYV0gYW5pbWF0ZS1wdWxzZTtcXG59XFxuLmh0NCB7XFxuICBAYXBwbHkgdy1bODUlXSBoLTMgYmctWyM0ZGE4ZGFdIGFuaW1hdGUtcHVsc2U7XFxufVxcblxcbi52aWV3TW9yZSB7XFxuICBAYXBwbHkgZmxleC0xIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyO1xcbn1cXG5cXG4uYmxvY2sge1xcbiAgQGFwcGx5IHctWzEwMCVdIGZsZXgtY29sO1xcbn1cXG4uYWxpZ24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cIixcIi5saWdodC10aGVtZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIzMjQxO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uU2tpbGxiYXIge1xcbiAgQGFwcGx5IHJlbGF0aXZlIGJnLVsjNGRhOGRhXTtcXG59XFxuXFxuLnJlc3VtZU1haW4ge1xcbiAgQGFwcGx5IHAtMjQgc206cC0xNiB4czpwLTQgbGVhZGluZy0xMCBzcGFjZS15LTI0O1xcbn1cXG5cXG4ud29ya1BhcmEge1xcbiAgQGFwcGx5IGZsZXgtMSBmbGV4IGZsZXgtY29sIHhsOm1sLVs0ZW1dIGxnOm1sLVs0ZW1dIG1kOm1sLVsyZW1dO1xcbn1cXG5cXG4ud29ya0V4cCB7XFxuICBAYXBwbHkgbGluZS1jbGFtcC0yIHAtWy0yMHB4XTtcXG59XFxuXFxuLmVkdWNhdGlvbiB7XFxuICBAYXBwbHkgbGc6bWwtWzkuNXJlbV0gbWQ6bWwtWzZyZW1dIGdhcC02IHRleHQtWzE5cHhdIC1tdC0zIG1kOmZsZXggZmxleC1jb2w7XFxufVxcblxcbi5ibG9ja1RhYmxlIHtcXG4gIEBhcHBseSBmbGV4LTEgZmxleCBtZDptYi0yMCB4czptYi0xMCBtZDpmbGV4LXJvdyB4czpnYXAtMTAgeHM6ZmxleC1jb2w7XFxufVxcblxcbi5kYXkge1xcbiAgQGFwcGx5IGdyaWQgdy1mdWxsIGxnOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0xIGxnOnB4LTI0IG1kOnBsLTE0IC1tdC02O1xcbn1cXG5cXG4uY29sbGVnZSB7XFxuICBAYXBwbHkgaG92ZXI6Ym9yZGVyLXNvbGlkIGJvcmRlci10LTAgaG92ZXI6dHJhbnNmb3JtIGJvcmRlci1iIGJvcmRlci1sLTAgYm9yZGVyLXItMDtcXG4gIGNvbG9yOiAjNGRhOGRhO1xcbiAgYm9yZGVyLWJvdHRvbTogIzRkYThkYTtcXG59XFxuXFxuLndvcmtFcCB7XFxuICBAYXBwbHkgZmxleC0xIGZsZXggbWQ6ZmxleC1yb3cgeHM6ZmxleC1jb2wgeHM6Z2FwLTQ7XFxufVxcblxcbi5Ta2lsbGJhcnMge1xcbiAgQGFwcGx5IGZsZXggaXRlbXMtY2VudGVyIGdhcC00IHctZnVsbCBwci0xMDtcXG59XFxuXFxuLlNraWxsYmxvY2sge1xcbiAgQGFwcGx5IHctYXV0byBqdXN0aWZ5LWNlbnRlciBmbGV4LTE7XFxufVxcblxcbi5Ta2lsbGh0MSB7XFxuICBAYXBwbHkgdy1bOTIlXSBoLTMgYmctWyMzMzMzMzNdIGFuaW1hdGUtcHVsc2U7XFxufVxcbi5Ta2lsbGh0MiB7XFxuICBAYXBwbHkgdy1bODAlXSBoLTMgYmctWyMzMzMzMzNdIGFuaW1hdGUtcHVsc2U7XFxufVxcblxcbi5Ta2lsbGh0MyB7XFxuICBAYXBwbHkgdy1bNzIlXSBoLTMgYmctWyMzMzMzMzNdIGFuaW1hdGUtcHVsc2U7XFxufVxcblxcbi5Ta2lsbGh0NCB7XFxuICBAYXBwbHkgdy1bNzUlXSBoLTMgYmctWyMzMzMzMzNdIGFuaW1hdGUtcHVsc2U7XFxufVxcbi5Ta2lsbGh0NSB7XFxuICBAYXBwbHkgdy1bODUlXSBoLTMgYmctWyMzMzMzMzNdIGFuaW1hdGUtcHVsc2U7XFxufVxcbi5Ta2lsbGh0NiB7XFxuICBAYXBwbHkgdy1bODglXSBoLTMgYmctWyMzMzMzMzNdIGFuaW1hdGUtcHVsc2U7XFxufVxcbi5Ta2lsbGh0NyB7XFxuICBAYXBwbHkgdy1bNjUlXSBoLTMgYmctWyMzMzMzMzNdIGFuaW1hdGUtcHVsc2U7XFxufVxcblxcbi5zaWRlRGl2IHtcXG4gIEBhcHBseSBmbGV4IGZsZXgtY29sIHNtOmZsZXgtcm93IGZsZXgtMSB3LWZ1bGwgbWQ6anVzdGlmeS1hcm91bmQ7XFxufVxcbi5iYWNrQWxpZ24ge1xcbiAgY29sb3I6ICM0ZGE4ZGE7XFxufVxcblwiLFwiLnBvcnRmb2xpb0xpc3Qge1xcbiAgQGFwcGx5IHB0LVsxMDBweF0gcGItWzUwcHhdO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiMzI0MTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnBvcnRmb2xpb0l0ZW1zIHtcXG4gIEBhcHBseSBmbGV4IGZsZXgtd3JhcCBoLWZ1bGwgdy1mdWxsIHB4LVsxNXB4XSBtZDpweC0yMCBsZzpweC0zMiBqdXN0aWZ5LWNlbnRlcjtcXG59XFxuLnBvcnRIb3ZlckNhcmRUZXh0IHtcXG4gIGNvbG9yOiAjMWIzMjQxO1xcbn1cXG4uYmFja0FsaWduIHtcXG4gIEBhcHBseSB0ZXh0LXhzIG10LTIgYm9yZGVyLXQtMCBib3JkZXItci0wIGJvcmRlci1sLTAgYm9yZGVyLTIgYm9yZGVyLXNvbGlkO1xcbn1cXG4ucEZpbHRlciB7XFxuICBAYXBwbHkgbWItMTAgdGV4dC1jZW50ZXI7XFxufVxcbi5wRmlsdGVyIHVsIHtcXG4gIEBhcHBseSBtLTAgcC0wO1xcbn1cXG4ucEZpbHRlciB1bCBsaSB7XFxuICBAYXBwbHkgaW5saW5lLWJsb2NrIHRleHQtc20gbXItNSByZWxhdGl2ZSBjdXJzb3ItcG9pbnRlciB1cHBlcmNhc2U7XFxuICBmb250LXNpemU6IGxhcmdlO1xcbn1cXG4ucEZpbHRlciB1bCBsaTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCIvXFxcIjtcXG4gIEBhcHBseSBhYnNvbHV0ZSAtcmlnaHQtNDtcXG59XFxuLnBGaWx0ZXIgdWwgbGk6bGFzdC1jaGlsZDo6YmVmb3JlIHtcXG4gIEBhcHBseSBoaWRkZW47XFxufVxcbi5yZWxhdGl2ZVAge1xcbiAgQGFwcGx5IHJlbGF0aXZlIGgtZnVsbCB3LWZ1bGw7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ob3ZlckNvbnRleHQge1xcbiAgQGFwcGx5IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyO1xcbn1cXG4uaG92ZXJDb250ZXh0IHNwYW4ge1xcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiKDAgMCAwIC8gNDUlKTtcXG4gIEBhcHBseSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBvcGFjaXR5LTEwMCByb3VuZGVkLWxnO1xcbiAgYmFja2dyb3VuZDogIzRkYThkYTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImltcG9ydCBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBwcmludFdhcm5pbmcgPSBmdW5jdGlvbigpIHt9O1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB2YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuICB2YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbi8qKlxuICogQXNzZXJ0IHRoYXQgdGhlIHZhbHVlcyBtYXRjaCB3aXRoIHRoZSB0eXBlIHNwZWNzLlxuICogRXJyb3IgbWVzc2FnZXMgYXJlIG1lbW9yaXplZCBhbmQgd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHR5cGVTcGVjcyBNYXAgb2YgbmFtZSB0byBhIFJlYWN0UHJvcFR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSB2YWx1ZXMgUnVudGltZSB2YWx1ZXMgdGhhdCBuZWVkIHRvIGJlIHR5cGUtY2hlY2tlZFxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIGUuZy4gXCJwcm9wXCIsIFwiY29udGV4dFwiLCBcImNoaWxkIGNvbnRleHRcIlxuICogQHBhcmFtIHtzdHJpbmd9IGNvbXBvbmVudE5hbWUgTmFtZSBvZiB0aGUgY29tcG9uZW50IGZvciBlcnJvciBtZXNzYWdlcy5cbiAqIEBwYXJhbSB7P0Z1bmN0aW9ufSBnZXRTdGFjayBSZXR1cm5zIHRoZSBjb21wb25lbnQgc3RhY2suXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGdldFN0YWNrKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yO1xuICAgICAgICAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKFxuICAgICAgICAgICAgICAoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgK1xuICAgICAgICAgICAgICAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVycm9yID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IgPSBleDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyb3IgJiYgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgIChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICcgK1xuICAgICAgICAgICAgbG9jYXRpb24gKyAnIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICtcbiAgICAgICAgICAgICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAnICsgdHlwZW9mIGVycm9yICsgJy4gJyArXG4gICAgICAgICAgICAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArXG4gICAgICAgICAgICAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICtcbiAgICAgICAgICAgICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvci5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvci5tZXNzYWdlXSA9IHRydWU7XG5cbiAgICAgICAgICB2YXIgc3RhY2sgPSBnZXRTdGFjayA/IGdldFN0YWNrKCkgOiAnJztcblxuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdGYWlsZWQgJyArIGxvY2F0aW9uICsgJyB0eXBlOiAnICsgZXJyb3IubWVzc2FnZSArIChzdGFjayAhPSBudWxsID8gc3RhY2sgOiAnJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVzZXRzIHdhcm5pbmcgY2FjaGUgd2hlbiB0ZXN0aW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmNoZWNrUHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gZnVuY3Rpb24oKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjaGVja1Byb3BUeXBlcztcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG52YXIgYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xudmFyIGNoZWNrUHJvcFR5cGVzID0gcmVxdWlyZSgnLi9jaGVja1Byb3BUeXBlcycpO1xuXG52YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xudmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHByaW50V2FybmluZyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICB2YXIgbWVzc2FnZSA9ICdXYXJuaW5nOiAnICsgdGV4dDtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgLy8gLS0tIFdlbGNvbWUgdG8gZGVidWdnaW5nIFJlYWN0IC0tLVxuICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAvLyB0byBmaW5kIHRoZSBjYWxsc2l0ZSB0aGF0IGNhdXNlZCB0aGlzIHdhcm5pbmcgdG8gZmlyZS5cbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9IGNhdGNoICh4KSB7fVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc1ZhbGlkRWxlbWVudCwgdGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAvKiBnbG9iYWwgU3ltYm9sICovXG4gIHZhciBJVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbiAgdmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InOyAvLyBCZWZvcmUgU3ltYm9sIHNwZWMuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGl0ZXJhdG9yIG1ldGhvZCBmdW5jdGlvbiBjb250YWluZWQgb24gdGhlIGl0ZXJhYmxlIG9iamVjdC5cbiAgICpcbiAgICogQmUgc3VyZSB0byBpbnZva2UgdGhlIGZ1bmN0aW9uIHdpdGggdGhlIGl0ZXJhYmxlIGFzIGNvbnRleHQ6XG4gICAqXG4gICAqICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obXlJdGVyYWJsZSk7XG4gICAqICAgICBpZiAoaXRlcmF0b3JGbikge1xuICAgKiAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobXlJdGVyYWJsZSk7XG4gICAqICAgICAgIC4uLlxuICAgKiAgICAgfVxuICAgKlxuICAgKiBAcGFyYW0gez9vYmplY3R9IG1heWJlSXRlcmFibGVcbiAgICogQHJldHVybiB7P2Z1bmN0aW9ufVxuICAgKi9cbiAgZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gICAgdmFyIGl0ZXJhdG9yRm4gPSBtYXliZUl0ZXJhYmxlICYmIChJVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtJVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdKTtcbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiBpdGVyYXRvckZuO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb2xsZWN0aW9uIG9mIG1ldGhvZHMgdGhhdCBhbGxvdyBkZWNsYXJhdGlvbiBhbmQgdmFsaWRhdGlvbiBvZiBwcm9wcyB0aGF0IGFyZVxuICAgKiBzdXBwbGllZCB0byBSZWFjdCBjb21wb25lbnRzLiBFeGFtcGxlIHVzYWdlOlxuICAgKlxuICAgKiAgIHZhciBQcm9wcyA9IHJlcXVpcmUoJ1JlYWN0UHJvcFR5cGVzJyk7XG4gICAqICAgdmFyIE15QXJ0aWNsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgICAvLyBBbiBvcHRpb25hbCBzdHJpbmcgcHJvcCBuYW1lZCBcImRlc2NyaXB0aW9uXCIuXG4gICAqICAgICAgIGRlc2NyaXB0aW9uOiBQcm9wcy5zdHJpbmcsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcmVxdWlyZWQgZW51bSBwcm9wIG5hbWVkIFwiY2F0ZWdvcnlcIi5cbiAgICogICAgICAgY2F0ZWdvcnk6IFByb3BzLm9uZU9mKFsnTmV3cycsJ1Bob3RvcyddKS5pc1JlcXVpcmVkLFxuICAgKlxuICAgKiAgICAgICAvLyBBIHByb3AgbmFtZWQgXCJkaWFsb2dcIiB0aGF0IHJlcXVpcmVzIGFuIGluc3RhbmNlIG9mIERpYWxvZy5cbiAgICogICAgICAgZGlhbG9nOiBQcm9wcy5pbnN0YW5jZU9mKERpYWxvZykuaXNSZXF1aXJlZFxuICAgKiAgICAgfSxcbiAgICogICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7IC4uLiB9XG4gICAqICAgfSk7XG4gICAqXG4gICAqIEEgbW9yZSBmb3JtYWwgc3BlY2lmaWNhdGlvbiBvZiBob3cgdGhlc2UgbWV0aG9kcyBhcmUgdXNlZDpcbiAgICpcbiAgICogICB0eXBlIDo9IGFycmF5fGJvb2x8ZnVuY3xvYmplY3R8bnVtYmVyfHN0cmluZ3xvbmVPZihbLi4uXSl8aW5zdGFuY2VPZiguLi4pXG4gICAqICAgZGVjbCA6PSBSZWFjdFByb3BUeXBlcy57dHlwZX0oLmlzUmVxdWlyZWQpP1xuICAgKlxuICAgKiBFYWNoIGFuZCBldmVyeSBkZWNsYXJhdGlvbiBwcm9kdWNlcyBhIGZ1bmN0aW9uIHdpdGggdGhlIHNhbWUgc2lnbmF0dXJlLiBUaGlzXG4gICAqIGFsbG93cyB0aGUgY3JlYXRpb24gb2YgY3VzdG9tIHZhbGlkYXRpb24gZnVuY3Rpb25zLiBGb3IgZXhhbXBsZTpcbiAgICpcbiAgICogIHZhciBNeUxpbmsgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gICAqICAgIHByb3BUeXBlczoge1xuICAgKiAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBvciBVUkkgcHJvcCBuYW1lZCBcImhyZWZcIi5cbiAgICogICAgICBocmVmOiBmdW5jdGlvbihwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUpIHtcbiAgICogICAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAqICAgICAgICBpZiAocHJvcFZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHByb3BWYWx1ZSAhPT0gJ3N0cmluZycgJiZcbiAgICogICAgICAgICAgICAhKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFVSSSkpIHtcbiAgICogICAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICogICAgICAgICAgICAnRXhwZWN0ZWQgYSBzdHJpbmcgb3IgYW4gVVJJIGZvciAnICsgcHJvcE5hbWUgKyAnIGluICcgK1xuICAgKiAgICAgICAgICAgIGNvbXBvbmVudE5hbWVcbiAgICogICAgICAgICAgKTtcbiAgICogICAgICAgIH1cbiAgICogICAgICB9XG4gICAqICAgIH0sXG4gICAqICAgIHJlbmRlcjogZnVuY3Rpb24oKSB7Li4ufVxuICAgKiAgfSk7XG4gICAqXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cblxuICB2YXIgQU5PTllNT1VTID0gJzw8YW5vbnltb3VzPj4nO1xuXG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFRocm93aW5nU2hpbXMuanNgLlxuICB2YXIgUmVhY3RQcm9wVHlwZXMgPSB7XG4gICAgYXJyYXk6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdhcnJheScpLFxuICAgIGJvb2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdib29sZWFuJyksXG4gICAgZnVuYzogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Z1bmN0aW9uJyksXG4gICAgbnVtYmVyOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignbnVtYmVyJyksXG4gICAgb2JqZWN0OiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignb2JqZWN0JyksXG4gICAgc3RyaW5nOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3RyaW5nJyksXG4gICAgc3ltYm9sOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignc3ltYm9sJyksXG5cbiAgICBhbnk6IGNyZWF0ZUFueVR5cGVDaGVja2VyKCksXG4gICAgYXJyYXlPZjogY3JlYXRlQXJyYXlPZlR5cGVDaGVja2VyLFxuICAgIGVsZW1lbnQ6IGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpLFxuICAgIGVsZW1lbnRUeXBlOiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCksXG4gICAgaW5zdGFuY2VPZjogY3JlYXRlSW5zdGFuY2VUeXBlQ2hlY2tlcixcbiAgICBub2RlOiBjcmVhdGVOb2RlQ2hlY2tlcigpLFxuICAgIG9iamVjdE9mOiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyLFxuICAgIG9uZU9mOiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIsXG4gICAgb25lT2ZUeXBlOiBjcmVhdGVVbmlvblR5cGVDaGVja2VyLFxuICAgIHNoYXBlOiBjcmVhdGVTaGFwZVR5cGVDaGVja2VyLFxuICAgIGV4YWN0OiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyLFxuICB9O1xuXG4gIC8qKlxuICAgKiBpbmxpbmVkIE9iamVjdC5pcyBwb2x5ZmlsbCB0byBhdm9pZCByZXF1aXJpbmcgY29uc3VtZXJzIHNoaXAgdGhlaXIgb3duXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICAgKi9cbiAgLyplc2xpbnQtZGlzYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuICBmdW5jdGlvbiBpcyh4LCB5KSB7XG4gICAgLy8gU2FtZVZhbHVlIGFsZ29yaXRobVxuICAgIGlmICh4ID09PSB5KSB7XG4gICAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAgIC8vIFN0ZXBzIDYuYi02LmU6ICswICE9IC0wXG4gICAgICByZXR1cm4geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFN0ZXAgNi5hOiBOYU4gPT0gTmFOXG4gICAgICByZXR1cm4geCAhPT0geCAmJiB5ICE9PSB5O1xuICAgIH1cbiAgfVxuICAvKmVzbGludC1lbmFibGUgbm8tc2VsZi1jb21wYXJlKi9cblxuICAvKipcbiAgICogV2UgdXNlIGFuIEVycm9yLWxpa2Ugb2JqZWN0IGZvciBiYWNrd2FyZCBjb21wYXRpYmlsaXR5IGFzIHBlb3BsZSBtYXkgY2FsbFxuICAgKiBQcm9wVHlwZXMgZGlyZWN0bHkgYW5kIGluc3BlY3QgdGhlaXIgb3V0cHV0LiBIb3dldmVyLCB3ZSBkb24ndCB1c2UgcmVhbFxuICAgKiBFcnJvcnMgYW55bW9yZS4gV2UgZG9uJ3QgaW5zcGVjdCB0aGVpciBzdGFjayBhbnl3YXksIGFuZCBjcmVhdGluZyB0aGVtXG4gICAqIGlzIHByb2hpYml0aXZlbHkgZXhwZW5zaXZlIGlmIHRoZXkgYXJlIGNyZWF0ZWQgdG9vIG9mdGVuLCBzdWNoIGFzIHdoYXRcbiAgICogaGFwcGVucyBpbiBvbmVPZlR5cGUoKSBmb3IgYW55IHR5cGUgYmVmb3JlIHRoZSBvbmUgdGhhdCBtYXRjaGVkLlxuICAgKi9cbiAgZnVuY3Rpb24gUHJvcFR5cGVFcnJvcihtZXNzYWdlKSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICB0aGlzLnN0YWNrID0gJyc7XG4gIH1cbiAgLy8gTWFrZSBgaW5zdGFuY2VvZiBFcnJvcmAgc3RpbGwgd29yayBmb3IgcmV0dXJuZWQgZXJyb3JzLlxuICBQcm9wVHlwZUVycm9yLnByb3RvdHlwZSA9IEVycm9yLnByb3RvdHlwZTtcblxuICBmdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB2YXIgbWFudWFsUHJvcFR5cGVDYWxsQ2FjaGUgPSB7fTtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA9IDA7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoZWNrVHlwZShpc1JlcXVpcmVkLCBwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudE5hbWUgfHwgQU5PTllNT1VTO1xuICAgICAgcHJvcEZ1bGxOYW1lID0gcHJvcEZ1bGxOYW1lIHx8IHByb3BOYW1lO1xuXG4gICAgICBpZiAoc2VjcmV0ICE9PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgICBpZiAodGhyb3dPbkRpcmVjdEFjY2Vzcykge1xuICAgICAgICAgIC8vIE5ldyBiZWhhdmlvciBvbmx5IGZvciB1c2VycyBvZiBgcHJvcC10eXBlc2AgcGFja2FnZVxuICAgICAgICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnQ2FsbGluZyBQcm9wVHlwZXMgdmFsaWRhdG9ycyBkaXJlY3RseSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAnVXNlIGBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKWAgdG8gY2FsbCB0aGVtLiAnICtcbiAgICAgICAgICAgICdSZWFkIG1vcmUgYXQgaHR0cDovL2ZiLm1lL3VzZS1jaGVjay1wcm9wLXR5cGVzJ1xuICAgICAgICAgICk7XG4gICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9IGVsc2UgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gT2xkIGJlaGF2aW9yIGZvciBwZW9wbGUgdXNpbmcgUmVhY3QuUHJvcFR5cGVzXG4gICAgICAgICAgdmFyIGNhY2hlS2V5ID0gY29tcG9uZW50TmFtZSArICc6JyArIHByb3BOYW1lO1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICFtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gJiZcbiAgICAgICAgICAgIC8vIEF2b2lkIHNwYW1taW5nIHRoZSBjb25zb2xlIGJlY2F1c2UgdGhleSBhcmUgb2Z0ZW4gbm90IGFjdGlvbmFibGUgZXhjZXB0IGZvciBsaWIgYXV0aG9yc1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQgPCAzXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAgICdZb3UgYXJlIG1hbnVhbGx5IGNhbGxpbmcgYSBSZWFjdC5Qcm9wVHlwZXMgdmFsaWRhdGlvbiAnICtcbiAgICAgICAgICAgICAgJ2Z1bmN0aW9uIGZvciB0aGUgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBwcm9wIG9uIGAnICsgY29tcG9uZW50TmFtZSAgKyAnYC4gVGhpcyBpcyBkZXByZWNhdGVkICcgK1xuICAgICAgICAgICAgICAnYW5kIHdpbGwgdGhyb3cgaW4gdGhlIHN0YW5kYWxvbmUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgICAgICAgICAnWW91IG1heSBiZSBzZWVpbmcgdGhpcyB3YXJuaW5nIGR1ZSB0byBhIHRoaXJkLXBhcnR5IFByb3BUeXBlcyAnICtcbiAgICAgICAgICAgICAgJ2xpYnJhcnkuIFNlZSBodHRwczovL2ZiLm1lL3JlYWN0LXdhcm5pbmctZG9udC1jYWxsLXByb3B0eXBlcyAnICsgJ2ZvciBkZXRhaWxzLidcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZVtjYWNoZUtleV0gPSB0cnVlO1xuICAgICAgICAgICAgbWFudWFsUHJvcFR5cGVXYXJuaW5nQ291bnQrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT0gbnVsbCkge1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignVGhlICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBpcyBtYXJrZWQgYXMgcmVxdWlyZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGJ1dCBpdHMgdmFsdWUgaXMgYG51bGxgLicpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCBpbiAnICsgKCdgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgdW5kZWZpbmVkYC4nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgICBjaGFpbmVkQ2hlY2tUeXBlLmlzUmVxdWlyZWQgPSBjaGVja1R5cGUuYmluZChudWxsLCB0cnVlKTtcblxuICAgIHJldHVybiBjaGFpbmVkQ2hlY2tUeXBlO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoZXhwZWN0ZWRUeXBlKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSBleHBlY3RlZFR5cGUpIHtcbiAgICAgICAgLy8gYHByb3BWYWx1ZWAgYmVpbmcgaW5zdGFuY2Ugb2YsIHNheSwgZGF0ZS9yZWdleHAsIHBhc3MgdGhlICdvYmplY3QnXG4gICAgICAgIC8vIGNoZWNrLCBidXQgd2UgY2FuIG9mZmVyIGEgbW9yZSBwcmVjaXNlIGVycm9yIG1lc3NhZ2UgaGVyZSByYXRoZXIgdGhhblxuICAgICAgICAvLyAnb2YgdHlwZSBgb2JqZWN0YCcuXG4gICAgICAgIHZhciBwcmVjaXNlVHlwZSA9IGdldFByZWNpc2VUeXBlKHByb3BWYWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJlY2lzZVR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2AnICsgZXhwZWN0ZWRUeXBlICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBbnlUeXBlQ2hlY2tlcigpIHtcbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIoZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgYXJyYXlPZi4nKTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhbiBhcnJheS4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnWycgKyBpICsgJ10nLCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIWlzVmFsaWRFbGVtZW50KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50LicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVUeXBlQ2hlY2tlcigpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBpZiAoIVJlYWN0SXMuaXNWYWxpZEVsZW1lbnRUeXBlKHByb3BWYWx1ZSkpIHtcbiAgICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYSBzaW5nbGUgUmVhY3RFbGVtZW50IHR5cGUuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyKGV4cGVjdGVkQ2xhc3MpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICghKHByb3BzW3Byb3BOYW1lXSBpbnN0YW5jZW9mIGV4cGVjdGVkQ2xhc3MpKSB7XG4gICAgICAgIHZhciBleHBlY3RlZENsYXNzTmFtZSA9IGV4cGVjdGVkQ2xhc3MubmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICAgIHZhciBhY3R1YWxDbGFzc05hbWUgPSBnZXRDbGFzc05hbWUocHJvcHNbcHJvcE5hbWVdKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgYWN0dWFsQ2xhc3NOYW1lICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkICcpICsgKCdpbnN0YW5jZSBvZiBgJyArIGV4cGVjdGVkQ2xhc3NOYW1lICsgJ2AuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbnVtVHlwZUNoZWNrZXIoZXhwZWN0ZWRWYWx1ZXMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoZXhwZWN0ZWRWYWx1ZXMpKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoXG4gICAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudHMgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LCBnb3QgJyArIGFyZ3VtZW50cy5sZW5ndGggKyAnIGFyZ3VtZW50cy4gJyArXG4gICAgICAgICAgICAnQSBjb21tb24gbWlzdGFrZSBpcyB0byB3cml0ZSBvbmVPZih4LCB5LCB6KSBpbnN0ZWFkIG9mIG9uZU9mKFt4LCB5LCB6XSkuJ1xuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJpbnRXYXJuaW5nKCdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mLCBleHBlY3RlZCBhbiBhcnJheS4nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHBlY3RlZFZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaXMocHJvcFZhbHVlLCBleHBlY3RlZFZhbHVlc1tpXSkpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVzU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZXhwZWN0ZWRWYWx1ZXMsIGZ1bmN0aW9uIHJlcGxhY2VyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgICAgIGlmICh0eXBlID09PSAnc3ltYm9sJykge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB2YWx1ZSBgJyArIFN0cmluZyhwcm9wVmFsdWUpICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIG9uZSBvZiAnICsgdmFsdWVzU3RyaW5nICsgJy4nKSk7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVPYmplY3RPZlR5cGVDaGVja2VyKHR5cGVDaGVja2VyKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAodHlwZW9mIHR5cGVDaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignUHJvcGVydHkgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiBjb21wb25lbnQgYCcgKyBjb21wb25lbnROYW1lICsgJ2AgaGFzIGludmFsaWQgUHJvcFR5cGUgbm90YXRpb24gaW5zaWRlIG9iamVjdE9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIG9iamVjdC4nKSk7XG4gICAgICB9XG4gICAgICBmb3IgKHZhciBrZXkgaW4gcHJvcFZhbHVlKSB7XG4gICAgICAgIGlmIChoYXMocHJvcFZhbHVlLCBrZXkpKSB7XG4gICAgICAgICAgdmFyIGVycm9yID0gdHlwZUNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVVbmlvblR5cGVDaGVja2VyKGFycmF5T2ZUeXBlQ2hlY2tlcnMpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXJyYXlPZlR5cGVDaGVja2VycykpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2ZUeXBlLCBleHBlY3RlZCBhbiBpbnN0YW5jZSBvZiBhcnJheS4nKSA6IHZvaWQgMDtcbiAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNoZWNrZXIgPSBhcnJheU9mVHlwZUNoZWNrZXJzW2ldO1xuICAgICAgaWYgKHR5cGVvZiBjaGVja2VyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUuIEV4cGVjdGVkIGFuIGFycmF5IG9mIGNoZWNrIGZ1bmN0aW9ucywgYnV0ICcgK1xuICAgICAgICAgICdyZWNlaXZlZCAnICsgZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKGNoZWNrZXIpICsgJyBhdCBpbmRleCAnICsgaSArICcuJ1xuICAgICAgICApO1xuICAgICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXlPZlR5cGVDaGVja2Vycy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICAgIGlmIChjaGVja2VyKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpID09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU5vZGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCFpc05vZGUocHJvcHNbcHJvcE5hbWVdKSkge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIHN1cHBsaWVkIHRvICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIFJlYWN0Tm9kZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBzaGFwZVR5cGVzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVTdHJpY3RTaGFwZVR5cGVDaGVja2VyKHNoYXBlVHlwZXMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgaWYgKHByb3BUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgYCcgKyBwcm9wVHlwZSArICdgICcgKyAoJ3N1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBgb2JqZWN0YC4nKSk7XG4gICAgICB9XG4gICAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIGFsbCBrZXlzIGluIGNhc2Ugc29tZSBhcmUgcmVxdWlyZWQgYnV0IG1pc3NpbmcgZnJvbVxuICAgICAgLy8gcHJvcHMuXG4gICAgICB2YXIgYWxsS2V5cyA9IGFzc2lnbih7fSwgcHJvcHNbcHJvcE5hbWVdLCBzaGFwZVR5cGVzKTtcbiAgICAgIGZvciAodmFyIGtleSBpbiBhbGxLZXlzKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gc2hhcGVUeXBlc1trZXldO1xuICAgICAgICBpZiAoIWNoZWNrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoXG4gICAgICAgICAgICAnSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Aga2V5IGAnICsga2V5ICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJyArXG4gICAgICAgICAgICAnXFxuQmFkIG9iamVjdDogJyArIEpTT04uc3RyaW5naWZ5KHByb3BzW3Byb3BOYW1lXSwgbnVsbCwgJyAgJykgK1xuICAgICAgICAgICAgJ1xcblZhbGlkIGtleXM6ICcgKyAgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmtleXMoc2hhcGVUeXBlcyksIG51bGwsICcgICcpXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3IgPSBjaGVja2VyKHByb3BWYWx1ZSwga2V5LCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lICsgJy4nICsga2V5LCBSZWFjdFByb3BUeXBlc1NlY3JldCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGlzTm9kZShwcm9wVmFsdWUpIHtcbiAgICBzd2l0Y2ggKHR5cGVvZiBwcm9wVmFsdWUpIHtcbiAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgcmV0dXJuICFwcm9wVmFsdWU7XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHByb3BWYWx1ZS5ldmVyeShpc05vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcm9wVmFsdWUgPT09IG51bGwgfHwgaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKHByb3BWYWx1ZSk7XG4gICAgICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKHByb3BWYWx1ZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG4gICAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IHByb3BWYWx1ZS5lbnRyaWVzKSB7XG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIGlmICghaXNOb2RlKHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEl0ZXJhdG9yIHdpbGwgcHJvdmlkZSBlbnRyeSBbayx2XSB0dXBsZXMgcmF0aGVyIHRoYW4gdmFsdWVzLlxuICAgICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgICB2YXIgZW50cnkgPSBzdGVwLnZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTm9kZShlbnRyeVsxXSkpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkge1xuICAgIC8vIE5hdGl2ZSBTeW1ib2wuXG4gICAgaWYgKHByb3BUeXBlID09PSAnc3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gZmFsc3kgdmFsdWUgY2FuJ3QgYmUgYSBTeW1ib2xcbiAgICBpZiAoIXByb3BWYWx1ZSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ10gPT09ICdTeW1ib2wnXG4gICAgaWYgKHByb3BWYWx1ZVsnQEB0b1N0cmluZ1RhZyddID09PSAnU3ltYm9sJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgLy8gRmFsbGJhY2sgZm9yIG5vbi1zcGVjIGNvbXBsaWFudCBTeW1ib2xzIHdoaWNoIGFyZSBwb2x5ZmlsbGVkLlxuICAgIGlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHByb3BWYWx1ZSBpbnN0YW5jZW9mIFN5bWJvbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gRXF1aXZhbGVudCBvZiBgdHlwZW9mYCBidXQgd2l0aCBzcGVjaWFsIGhhbmRsaW5nIGZvciBhcnJheSBhbmQgcmVnZXhwLlxuICBmdW5jdGlvbiBnZXRQcm9wVHlwZShwcm9wVmFsdWUpIHtcbiAgICB2YXIgcHJvcFR5cGUgPSB0eXBlb2YgcHJvcFZhbHVlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnYXJyYXknO1xuICAgIH1cbiAgICBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAvLyBPbGQgd2Via2l0cyAoYXQgbGVhc3QgdW50aWwgQW5kcm9pZCA0LjApIHJldHVybiAnZnVuY3Rpb24nIHJhdGhlciB0aGFuXG4gICAgICAvLyAnb2JqZWN0JyBmb3IgdHlwZW9mIGEgUmVnRXhwLiBXZSdsbCBub3JtYWxpemUgdGhpcyBoZXJlIHNvIHRoYXQgL2JsYS9cbiAgICAgIC8vIHBhc3NlcyBQcm9wVHlwZXMub2JqZWN0LlxuICAgICAgcmV0dXJuICdvYmplY3QnO1xuICAgIH1cbiAgICBpZiAoaXNTeW1ib2wocHJvcFR5cGUsIHByb3BWYWx1ZSkpIHtcbiAgICAgIHJldHVybiAnc3ltYm9sJztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gVGhpcyBoYW5kbGVzIG1vcmUgdHlwZXMgdGhhbiBgZ2V0UHJvcFR5cGVgLiBPbmx5IHVzZWQgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICAvLyBTZWUgYGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyYC5cbiAgZnVuY3Rpb24gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wVmFsdWUgPT09ICd1bmRlZmluZWQnIHx8IHByb3BWYWx1ZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnICsgcHJvcFZhbHVlO1xuICAgIH1cbiAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgIGlmIChwcm9wVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiAnZGF0ZSc7XG4gICAgICB9IGVsc2UgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuICAgICAgICByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwcm9wVHlwZTtcbiAgfVxuXG4gIC8vIFJldHVybnMgYSBzdHJpbmcgdGhhdCBpcyBwb3N0Zml4ZWQgdG8gYSB3YXJuaW5nIGFib3V0IGFuIGludmFsaWQgdHlwZS5cbiAgLy8gRm9yIGV4YW1wbGUsIFwidW5kZWZpbmVkXCIgb3IgXCJvZiB0eXBlIGFycmF5XCJcbiAgZnVuY3Rpb24gZ2V0UG9zdGZpeEZvclR5cGVXYXJuaW5nKHZhbHVlKSB7XG4gICAgdmFyIHR5cGUgPSBnZXRQcmVjaXNlVHlwZSh2YWx1ZSk7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdhcnJheSc6XG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICByZXR1cm4gJ2FuICcgKyB0eXBlO1xuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICBjYXNlICdkYXRlJzpcbiAgICAgIGNhc2UgJ3JlZ2V4cCc6XG4gICAgICAgIHJldHVybiAnYSAnICsgdHlwZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJldHVybnMgY2xhc3MgbmFtZSBvZiB0aGUgb2JqZWN0LCBpZiBhbnkuXG4gIGZ1bmN0aW9uIGdldENsYXNzTmFtZShwcm9wVmFsdWUpIHtcbiAgICBpZiAoIXByb3BWYWx1ZS5jb25zdHJ1Y3RvciB8fCAhcHJvcFZhbHVlLmNvbnN0cnVjdG9yLm5hbWUpIHtcbiAgICAgIHJldHVybiBBTk9OWU1PVVM7XG4gICAgfVxuICAgIHJldHVybiBwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZTtcbiAgfVxuXG4gIFJlYWN0UHJvcFR5cGVzLmNoZWNrUHJvcFR5cGVzID0gY2hlY2tQcm9wVHlwZXM7XG4gIFJlYWN0UHJvcFR5cGVzLnJlc2V0V2FybmluZ0NhY2hlID0gY2hlY2tQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGU7XG4gIFJlYWN0UHJvcFR5cGVzLlByb3BUeXBlcyA9IFJlYWN0UHJvcFR5cGVzO1xuXG4gIHJldHVybiBSZWFjdFByb3BUeXBlcztcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcblxuICAvLyBCeSBleHBsaWNpdGx5IHVzaW5nIGBwcm9wLXR5cGVzYCB5b3UgYXJlIG9wdGluZyBpbnRvIG5ldyBkZXZlbG9wbWVudCBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICB2YXIgdGhyb3dPbkRpcmVjdEFjY2VzcyA9IHRydWU7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9mYWN0b3J5V2l0aFR5cGVDaGVja2VycycpKFJlYWN0SXMuaXNFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKTtcbn0gZWxzZSB7XG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IHByb2R1Y3Rpb24gYmVoYXZpb3IuXG4gIC8vIGh0dHA6Ly9mYi5tZS9wcm9wLXR5cGVzLWluLXByb2RcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcycpKCk7XG59XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxMy1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0UHJvcFR5cGVzU2VjcmV0ID0gJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdFByb3BUeXBlc1NlY3JldDtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTMuMVxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cblxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBoYXNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3I7XG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIDogMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJykgOiAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50JykgOiAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJykgOiAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJykgOiAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJykgOiAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpIDogMHhlYWNlOyAvLyBUT0RPOiBXZSBkb24ndCB1c2UgQXN5bmNNb2RlIG9yIENvbmN1cnJlbnRNb2RlIGFueW1vcmUuIFRoZXkgd2VyZSB0ZW1wb3Jhcnlcbi8vICh1bnN0YWJsZSkgQVBJcyB0aGF0IGhhdmUgYmVlbiByZW1vdmVkLiBDYW4gd2UgcmVtb3ZlIHRoZSBzeW1ib2xzP1xuXG52YXIgUkVBQ1RfQVNZTkNfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYXN5bmNfbW9kZScpIDogMHhlYWNmO1xudmFyIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuY29uY3VycmVudF9tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJykgOiAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJykgOiAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpIDogMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKSA6IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5JykgOiAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmJsb2NrJykgOiAweGVhZDk7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJykgOiAweGVhZDU7XG52YXIgUkVBQ1RfUkVTUE9OREVSX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5yZXNwb25kZXInKSA6IDB4ZWFkNjtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc2NvcGUnKSA6IDB4ZWFkNztcblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyB8fCAvLyBOb3RlOiBpdHMgdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgaWYgaXQncyBhIHBvbHlmaWxsLlxuICB0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUkVTUE9OREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfU0NPUEVfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFKTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9DT05DVVJSRU5UX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICAgICAgICByZXR1cm4gdHlwZTtcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB2YXIgJCR0eXBlb2ZUeXBlID0gdHlwZSAmJiB0eXBlLiQkdHlwZW9mO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKCQkdHlwZW9mVHlwZSkge1xuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IC8vIEFzeW5jTW9kZSBpcyBkZXByZWNhdGVkIGFsb25nIHdpdGggaXNBc3luY01vZGVcblxudmFyIEFzeW5jTW9kZSA9IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbnZhciBDb25jdXJyZW50TW9kZSA9IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7IC8vIEFzeW5jTW9kZSBzaG91bGQgYmUgZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcbiAge1xuICAgIGlmICghaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0FzeW5jTW9kZSgpIGFsaWFzIGhhcyBiZWVuIGRlcHJlY2F0ZWQsICcgKyAnYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiBSZWFjdCAxNysuIFVwZGF0ZSB5b3VyIGNvZGUgdG8gdXNlICcgKyAnUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgaW5zdGVhZC4gSXQgaGFzIHRoZSBleGFjdCBzYW1lIEFQSS4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNDb25jdXJyZW50TW9kZShvYmplY3QpIHx8IHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9BU1lOQ19NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0Q29uc3VtZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNDb250ZXh0UHJvdmlkZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRm9yd2FyZFJlZihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xufVxuZnVuY3Rpb24gaXNGcmFnbWVudChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNMYXp5KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0xBWllfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTWVtbyhvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9NRU1PX1RZUEU7XG59XG5mdW5jdGlvbiBpc1BvcnRhbChvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QT1JUQUxfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUHJvZmlsZXIob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3RyaWN0TW9kZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdXNwZW5zZShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xufVxuXG5leHBvcnRzLkFzeW5jTW9kZSA9IEFzeW5jTW9kZTtcbmV4cG9ydHMuQ29uY3VycmVudE1vZGUgPSBDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xuZXhwb3J0cy5GcmFnbWVudCA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgZXhwb3J0cy5GcmFnbWVudCA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJpbnRXYXJuaW5nKGxldmVsLCBmb3JtYXQsIGFyZ3MpIHtcbiAgLy8gV2hlbiBjaGFuZ2luZyB0aGlzIGxvZ2ljLCB5b3UgbWlnaHQgd2FudCB0byBhbHNvXG4gIC8vIHVwZGF0ZSBjb25zb2xlV2l0aFN0YWNrRGV2Lnd3dy5qcyBhcyB3ZWxsLlxuICB7XG4gICAgdmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuICAgIHZhciBzdGFjayA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0U3RhY2tBZGRlbmR1bSgpO1xuXG4gICAgaWYgKHN0YWNrICE9PSAnJykge1xuICAgICAgZm9ybWF0ICs9ICclcyc7XG4gICAgICBhcmdzID0gYXJncy5jb25jYXQoW3N0YWNrXSk7XG4gICAgfVxuXG4gICAgdmFyIGFyZ3NXaXRoRm9ybWF0ID0gYXJncy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiAnJyArIGl0ZW07XG4gICAgfSk7IC8vIENhcmVmdWw6IFJOIGN1cnJlbnRseSBkZXBlbmRzIG9uIHRoaXMgcHJlZml4XG5cbiAgICBhcmdzV2l0aEZvcm1hdC51bnNoaWZ0KCdXYXJuaW5nOiAnICsgZm9ybWF0KTsgLy8gV2UgaW50ZW50aW9uYWxseSBkb24ndCB1c2Ugc3ByZWFkIChvciAuYXBwbHkpIGRpcmVjdGx5IGJlY2F1c2UgaXRcbiAgICAvLyBicmVha3MgSUU5OiBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzEzNjEwXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZ1xuXG4gICAgRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwoY29uc29sZVtsZXZlbF0sIGNvbnNvbGUsIGFyZ3NXaXRoRm9ybWF0KTtcbiAgfVxufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0V3JhcHBlZE5hbWUob3V0ZXJUeXBlLCBpbm5lclR5cGUsIHdyYXBwZXJOYW1lKSB7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSBpbm5lclR5cGUuZGlzcGxheU5hbWUgfHwgaW5uZXJUeXBlLm5hbWUgfHwgJyc7XG4gIHJldHVybiBvdXRlclR5cGUuZGlzcGxheU5hbWUgfHwgKGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbnRleHROYW1lKHR5cGUpIHtcbiAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgJ0NvbnRleHQnO1xufVxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lKHR5cGUpIHtcbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIC8vIEhvc3Qgcm9vdCwgdGV4dCBub2RlIG9yIGp1c3QgaW52YWxpZCB0eXBlLlxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAge1xuICAgIGlmICh0eXBlb2YgdHlwZS50YWcgPT09ICdudW1iZXInKSB7XG4gICAgICBlcnJvcignUmVjZWl2ZWQgYW4gdW5leHBlY3RlZCBvYmplY3QgaW4gZ2V0Q29tcG9uZW50TmFtZSgpLiAnICsgJ1RoaXMgaXMgbGlrZWx5IGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgbnVsbDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgZXhwb3J0cy5GcmFnbWVudDpcbiAgICAgIHJldHVybiAnRnJhZ21lbnQnO1xuXG4gICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgIHJldHVybiAnUG9ydGFsJztcblxuICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgIHJldHVybiAnUHJvZmlsZXInO1xuXG4gICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgcmV0dXJuICdTdHJpY3RNb2RlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2UnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlTGlzdCc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKGluaXQocGF5bG9hZCkpO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZMb2dcbiAgICAgICAgfSksXG4gICAgICAgIGluZm86IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZJbmZvXG4gICAgICAgIH0pLFxuICAgICAgICB3YXJuOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZFcnJvclxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXA6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cEVuZFxuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGlmIChkaXNhYmxlZERlcHRoIDwgMCkge1xuICAgICAgZXJyb3IoJ2Rpc2FibGVkRGVwdGggZmVsbCBiZWxvdyB6ZXJvLiAnICsgJ1RoaXMgaXMgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50RGlzcGF0Y2hlciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudERpc3BhdGNoZXI7XG52YXIgcHJlZml4O1xuZnVuY3Rpb24gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICBpZiAocHJlZml4ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEV4dHJhY3QgdGhlIFZNIHNwZWNpZmljIHByZWZpeCB1c2VkIGJ5IGVhY2ggbGluZS5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIHZhciBtYXRjaCA9IHguc3RhY2sudHJpbSgpLm1hdGNoKC9cXG4oICooYXQgKT8pLyk7XG4gICAgICAgIHByZWZpeCA9IG1hdGNoICYmIG1hdGNoWzFdIHx8ICcnO1xuICAgICAgfVxuICAgIH0gLy8gV2UgdXNlIHRoZSBwcmVmaXggdG8gZW5zdXJlIG91ciBzdGFja3MgbGluZSB1cCB3aXRoIG5hdGl2ZSBzdGFjayBmcmFtZXMuXG5cblxuICAgIHJldHVybiAnXFxuJyArIHByZWZpeCArIG5hbWU7XG4gIH1cbn1cbnZhciByZWVudHJ5ID0gZmFsc2U7XG52YXIgY29tcG9uZW50RnJhbWVDYWNoZTtcblxue1xuICB2YXIgUG9zc2libHlXZWFrTWFwID0gdHlwZW9mIFdlYWtNYXAgPT09ICdmdW5jdGlvbicgPyBXZWFrTWFwIDogTWFwO1xuICBjb21wb25lbnRGcmFtZUNhY2hlID0gbmV3IFBvc3NpYmx5V2Vha01hcCgpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBjb25zdHJ1Y3QpIHtcbiAgLy8gSWYgc29tZXRoaW5nIGFza2VkIGZvciBhIHN0YWNrIGluc2lkZSBhIGZha2UgcmVuZGVyLCBpdCBzaG91bGQgZ2V0IGlnbm9yZWQuXG4gIGlmICghZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBMYXp5IG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihpbml0KHBheWxvYWQpLCBzb3VyY2UsIG93bmVyRm4pO1xuICAgICAgICAgIH0gY2F0Y2ggKHgpIHt9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbnZhciBsb2dnZWRUeXBlRmFpbHVyZXMgPSB7fTtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrUHJvcFR5cGVzKHR5cGVTcGVjcywgdmFsdWVzLCBsb2NhdGlvbiwgY29tcG9uZW50TmFtZSwgZWxlbWVudCkge1xuICB7XG4gICAgLy8gJEZsb3dGaXhNZSBUaGlzIGlzIG9rYXkgYnV0IEZsb3cgZG9lc24ndCBrbm93IGl0LlxuICAgIHZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd247XG52YXIgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd247XG52YXIgZGlkV2FybkFib3V0U3RyaW5nUmVmcztcblxue1xuICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzID0ge307XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkUmVmKGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAncmVmJykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ3JlZicpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcucmVmICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGhhc1ZhbGlkS2V5KGNvbmZpZykge1xuICB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCAna2V5JykpIHtcbiAgICAgIHZhciBnZXR0ZXIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGNvbmZpZywgJ2tleScpLmdldDtcblxuICAgICAgaWYgKGdldHRlciAmJiBnZXR0ZXIuaXNSZWFjdFdhcm5pbmcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb25maWcua2V5ICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBzZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBzZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ0tleSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYGtleWAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nS2V5LmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ0tleSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSkge1xuICB7XG4gICAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24pIHtcbiAgICAgICAgc3BlY2lhbFByb3BSZWZXYXJuaW5nU2hvd24gPSB0cnVlO1xuXG4gICAgICAgIGVycm9yKCclczogYHJlZmAgaXMgbm90IGEgcHJvcC4gVHJ5aW5nIHRvIGFjY2VzcyBpdCB3aWxsIHJlc3VsdCAnICsgJ2luIGB1bmRlZmluZWRgIGJlaW5nIHJldHVybmVkLiBJZiB5b3UgbmVlZCB0byBhY2Nlc3MgdGhlIHNhbWUgJyArICd2YWx1ZSB3aXRoaW4gdGhlIGNoaWxkIGNvbXBvbmVudCwgeW91IHNob3VsZCBwYXNzIGl0IGFzIGEgZGlmZmVyZW50ICcgKyAncHJvcC4gKGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zcGVjaWFsLXByb3BzKScsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2FybkFib3V0QWNjZXNzaW5nUmVmLmlzUmVhY3RXYXJuaW5nID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdyZWYnLCB7XG4gICAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vcmVhY3Rqcy9yZmNzL3B1bGwvMTA3XG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBwcm9wc1xuICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICovXG5cbmZ1bmN0aW9uIGpzeERFVih0eXBlLCBjb25maWcsIG1heWJlS2V5LCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciBwcm9wTmFtZTsgLy8gUmVzZXJ2ZWQgbmFtZXMgYXJlIGV4dHJhY3RlZFxuXG4gICAgdmFyIHByb3BzID0ge307XG4gICAgdmFyIGtleSA9IG51bGw7XG4gICAgdmFyIHJlZiA9IG51bGw7IC8vIEN1cnJlbnRseSwga2V5IGNhbiBiZSBzcHJlYWQgaW4gYXMgYSBwcm9wLiBUaGlzIGNhdXNlcyBhIHBvdGVudGlhbFxuICAgIC8vIGlzc3VlIGlmIGtleSBpcyBhbHNvIGV4cGxpY2l0bHkgZGVjbGFyZWQgKGllLiA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPlxuICAgIC8vIG9yIDxkaXYga2V5PVwiSGlcIiB7Li4ucHJvcHN9IC8+ICkuIFdlIHdhbnQgdG8gZGVwcmVjYXRlIGtleSBzcHJlYWQsXG4gICAgLy8gYnV0IGFzIGFuIGludGVybWVkaWFyeSBzdGVwLCB3ZSB3aWxsIHVzZSBqc3hERVYgZm9yIGV2ZXJ5dGhpbmcgZXhjZXB0XG4gICAgLy8gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz4sIGJlY2F1c2Ugd2UgYXJlbid0IGN1cnJlbnRseSBhYmxlIHRvIHRlbGwgaWZcbiAgICAvLyBrZXkgaXMgZXhwbGljaXRseSBkZWNsYXJlZCB0byBiZSB1bmRlZmluZWQgb3Igbm90LlxuXG4gICAgaWYgKG1heWJlS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGtleSA9ICcnICsgbWF5YmVLZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkS2V5KGNvbmZpZykpIHtcbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcbiAgICAgIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcsIHNlbGYpO1xuICAgIH0gLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGNvbmZpZykge1xuICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwoY29uZmlnLCBwcm9wTmFtZSkgJiYgIVJFU0VSVkVEX1BST1BTLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkge1xuICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBjb25maWdbcHJvcE5hbWVdO1xuICAgICAgfVxuICAgIH0gLy8gUmVzb2x2ZSBkZWZhdWx0IHByb3BzXG5cblxuICAgIGlmICh0eXBlICYmIHR5cGUuZGVmYXVsdFByb3BzKSB7XG4gICAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICAgIGZvciAocHJvcE5hbWUgaW4gZGVmYXVsdFByb3BzKSB7XG4gICAgICAgIGlmIChwcm9wc1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoa2V5IHx8IHJlZikge1xuICAgICAgdmFyIGRpc3BsYXlOYW1lID0gdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicgPyB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCAnVW5rbm93bicgOiB0eXBlO1xuXG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIGRlZmluZUtleVByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWYpIHtcbiAgICAgICAgZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3RFbGVtZW50KHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQsIHByb3BzKTtcbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudE93bmVyO1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG52YXIgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd247XG5cbntcbiAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSBmYWxzZTtcbn1cbi8qKlxuICogVmVyaWZpZXMgdGhlIG9iamVjdCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjaXN2YWxpZGVsZW1lbnRcbiAqIEBwYXJhbSB7P29iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIGBvYmplY3RgIGlzIGEgUmVhY3RFbGVtZW50LlxuICogQGZpbmFsXG4gKi9cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKSB7XG4gIHtcbiAgICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBmaWxlTmFtZSA9IHNvdXJjZS5maWxlTmFtZS5yZXBsYWNlKC9eLipbXFxcXFxcL10vLCAnJyk7XG4gICAgICB2YXIgbGluZU51bWJlciA9IHNvdXJjZS5saW5lTnVtYmVyO1xuICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgICB9XG5cbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGVyZSdzIG5vIGtleSBleHBsaWNpdGx5IHNldCBvbiBkeW5hbWljIGFycmF5cyBvZiBjaGlsZHJlbiBvclxuICogb2JqZWN0IGtleXMgYXJlIG5vdCB2YWxpZC4gVGhpcyBhbGxvd3MgdXMgdG8ga2VlcCB0cmFjayBvZiBjaGlsZHJlbiBiZXR3ZWVuXG4gKiB1cGRhdGVzLlxuICovXG5cblxudmFyIG93bmVySGFzS2V5VXNlV2FybmluZyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpIHtcbiAge1xuICAgIHZhciBpbmZvID0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG5cbiAgICBpZiAoIWluZm8pIHtcbiAgICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgICBpZiAocGFyZW50TmFtZSkge1xuICAgICAgICBpbmZvID0gXCJcXG5cXG5DaGVjayB0aGUgdG9wLWxldmVsIHJlbmRlciBjYWxsIHVzaW5nIDxcIiArIHBhcmVudE5hbWUgKyBcIj4uXCI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZm87XG4gIH1cbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICghZWxlbWVudC5fc3RvcmUgfHwgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkIHx8IGVsZW1lbnQua2V5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICAgIGlmIChvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBvd25lckhhc0tleVVzZVdhcm5pbmdbY3VycmVudENvbXBvbmVudEVycm9ySW5mb10gPSB0cnVlOyAvLyBVc3VhbGx5IHRoZSBjdXJyZW50IG93bmVyIGlzIHRoZSBvZmZlbmRlciwgYnV0IGlmIGl0IGFjY2VwdHMgY2hpbGRyZW4gYXMgYVxuICAgIC8vIHByb3BlcnR5LCBpdCBtYXkgYmUgdGhlIGNyZWF0b3Igb2YgdGhlIGNoaWxkIHRoYXQncyByZXNwb25zaWJsZSBmb3JcbiAgICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgICB2YXIgY2hpbGRPd25lciA9ICcnO1xuXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5fb3duZXIgJiYgZWxlbWVudC5fb3duZXIgIT09IFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgLy8gR2l2ZSB0aGUgY29tcG9uZW50IHRoYXQgb3JpZ2luYWxseSBjcmVhdGVkIHRoaXMgY2hpbGQuXG4gICAgICBjaGlsZE93bmVyID0gXCIgSXQgd2FzIHBhc3NlZCBhIGNoaWxkIGZyb20gXCIgKyBnZXRDb21wb25lbnROYW1lKGVsZW1lbnQuX293bmVyLnR5cGUpICsgXCIuXCI7XG4gICAgfVxuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KTtcblxuICAgIGVycm9yKCdFYWNoIGNoaWxkIGluIGEgbGlzdCBzaG91bGQgaGF2ZSBhIHVuaXF1ZSBcImtleVwiIHByb3AuJyArICclcyVzIFNlZSBodHRwczovL3JlYWN0anMub3JnL2xpbmsvd2FybmluZy1rZXlzIGZvciBtb3JlIGluZm9ybWF0aW9uLicsIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8sIGNoaWxkT3duZXIpO1xuXG4gICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgfVxufVxuLyoqXG4gKiBFbnN1cmUgdGhhdCBldmVyeSBlbGVtZW50IGVpdGhlciBpcyBwYXNzZWQgaW4gYSBzdGF0aWMgbG9jYXRpb24sIGluIGFuXG4gKiBhcnJheSB3aXRoIGFuIGV4cGxpY2l0IGtleXMgcHJvcGVydHkgZGVmaW5lZCwgb3IgaW4gYW4gb2JqZWN0IGxpdGVyYWxcbiAqIHdpdGggdmFsaWQga2V5IHByb3BlcnR5LlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdE5vZGV9IG5vZGUgU3RhdGljYWxseSBwYXNzZWQgY2hpbGQgb2YgYW55IHR5cGUuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgbm9kZSdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUNoaWxkS2V5cyhub2RlLCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobm9kZSkpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZS5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGQgPSBub2RlW2ldO1xuXG4gICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KGNoaWxkLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaXNWYWxpZEVsZW1lbnQobm9kZSkpIHtcbiAgICAgIC8vIFRoaXMgZWxlbWVudCB3YXMgcGFzc2VkIGluIGEgdmFsaWQgbG9jYXRpb24uXG4gICAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgICAgbm9kZS5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihub2RlKTtcblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgICAgLy8gYnV0IG5vdyB3ZSBwcmludCBhIHNlcGFyYXRlIHdhcm5pbmcgZm9yIHRoZW0gbGF0ZXIuXG4gICAgICAgIGlmIChpdGVyYXRvckZuICE9PSBub2RlLmVudHJpZXMpIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgICAgdmFyIHN0ZXA7XG5cbiAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShzdGVwLnZhbHVlLCBwYXJlbnRUeXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYW4gZWxlbWVudCwgdmFsaWRhdGUgdGhhdCBpdHMgcHJvcHMgZm9sbG93IHRoZSBwcm9wVHlwZXMgZGVmaW5pdGlvbixcbiAqIHByb3ZpZGVkIGJ5IHRoZSB0eXBlLlxuICpcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KSB7XG4gIHtcbiAgICB2YXIgdHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICAgIGlmICh0eXBlID09PSBudWxsIHx8IHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgcHJvcFR5cGVzO1xuXG4gICAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBOb3RlOiBNZW1vIG9ubHkgY2hlY2tzIG91dGVyIHByb3BzIGhlcmUuXG4gICAgLy8gSW5uZXIgcHJvcHMgYXJlIGNoZWNrZWQgaW4gdGhlIHJlY29uY2lsZXIuXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFKSkge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocHJvcFR5cGVzKSB7XG4gICAgICAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcblxuICAgICAgZXJyb3IoJ0NvbXBvbmVudCAlcyBkZWNsYXJlZCBgUHJvcFR5cGVzYCBpbnN0ZWFkIG9mIGBwcm9wVHlwZXNgLiBEaWQgeW91IG1pc3NwZWxsIHRoZSBwcm9wZXJ0eSBhc3NpZ25tZW50PycsIF9uYW1lIHx8ICdVbmtub3duJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB0eXBlLmdldERlZmF1bHRQcm9wcyA9PT0gJ2Z1bmN0aW9uJyAmJiAhdHlwZS5nZXREZWZhdWx0UHJvcHMuaXNSZWFjdENsYXNzQXBwcm92ZWQpIHtcbiAgICAgIGVycm9yKCdnZXREZWZhdWx0UHJvcHMgaXMgb25seSB1c2VkIG9uIGNsYXNzaWMgUmVhY3QuY3JlYXRlQ2xhc3MgJyArICdkZWZpbml0aW9ucy4gVXNlIGEgc3RhdGljIHByb3BlcnR5IG5hbWVkIGBkZWZhdWx0UHJvcHNgIGluc3RlYWQuJyk7XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGEgZnJhZ21lbnQsIHZhbGlkYXRlIHRoYXQgaXQgY2FuIG9ubHkgYmUgcHJvdmlkZWQgd2l0aCBmcmFnbWVudCBwcm9wc1xuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGZyYWdtZW50XG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZnJhZ21lbnQpIHtcbiAge1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZnJhZ21lbnQucHJvcHMpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5ID0ga2V5c1tpXTtcblxuICAgICAgaWYgKGtleSAhPT0gJ2NoaWxkcmVuJyAmJiBrZXkgIT09ICdrZXknKSB7XG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICAgIGVycm9yKCdJbnZhbGlkIHByb3AgYCVzYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLiAnICsgJ1JlYWN0LkZyYWdtZW50IGNhbiBvbmx5IGhhdmUgYGtleWAgYW5kIGBjaGlsZHJlbmAgcHJvcHMuJywga2V5KTtcblxuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZnJhZ21lbnQucmVmICE9PSBudWxsKSB7XG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgZXJyb3IoJ0ludmFsaWQgYXR0cmlidXRlIGByZWZgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuJyk7XG5cbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGpzeFdpdGhWYWxpZGF0aW9uKHR5cGUsIHByb3BzLCBrZXksIGlzU3RhdGljQ2hpbGRyZW4sIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgICAvLyBzdWNjZWVkIGFuZCB0aGVyZSB3aWxsIGxpa2VseSBiZSBlcnJvcnMgaW4gcmVuZGVyLlxuXG4gICAgaWYgKCF2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwgJiYgT2JqZWN0LmtleXModHlwZSkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGluZm8gKz0gJyBZb3UgbGlrZWx5IGZvcmdvdCB0byBleHBvcnQgeW91ciBjb21wb25lbnQgZnJvbSB0aGUgZmlsZSAnICsgXCJpdCdzIGRlZmluZWQgaW4sIG9yIHlvdSBtaWdodCBoYXZlIG1peGVkIHVwIGRlZmF1bHQgYW5kIG5hbWVkIGltcG9ydHMuXCI7XG4gICAgICB9XG5cbiAgICAgIHZhciBzb3VyY2VJbmZvID0gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW0oc291cmNlKTtcblxuICAgICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgICAgaW5mbyArPSBzb3VyY2VJbmZvO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHR5cGVTdHJpbmc7XG5cbiAgICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnbnVsbCc7XG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodHlwZSkpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgIT09IHVuZGVmaW5lZCAmJiB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEUpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IFwiPFwiICsgKGdldENvbXBvbmVudE5hbWUodHlwZS50eXBlKSB8fCAnVW5rbm93bicpICsgXCIgLz5cIjtcbiAgICAgICAgaW5mbyA9ICcgRGlkIHlvdSBhY2NpZGVudGFsbHkgZXhwb3J0IGEgSlNYIGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNvbXBvbmVudD8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHlwZVN0cmluZyA9IHR5cGVvZiB0eXBlO1xuICAgICAgfVxuXG4gICAgICBlcnJvcignUmVhY3QuanN4OiB0eXBlIGlzIGludmFsaWQgLS0gZXhwZWN0ZWQgYSBzdHJpbmcgKGZvciAnICsgJ2J1aWx0LWluIGNvbXBvbmVudHMpIG9yIGEgY2xhc3MvZnVuY3Rpb24gKGZvciBjb21wb3NpdGUgJyArICdjb21wb25lbnRzKSBidXQgZ290OiAlcy4lcycsIHR5cGVTdHJpbmcsIGluZm8pO1xuICAgIH1cblxuICAgIHZhciBlbGVtZW50ID0ganN4REVWKHR5cGUsIHByb3BzLCBrZXksIHNvdXJjZSwgc2VsZik7IC8vIFRoZSByZXN1bHQgY2FuIGJlIG51bGxpc2ggaWYgYSBtb2NrIG9yIGEgY3VzdG9tIGZ1bmN0aW9uIGlzIHVzZWQuXG4gICAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gICAgaWYgKGVsZW1lbnQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAgIC8vIGRvZXNuJ3QgZXhwZWN0IGEgbm9uLXN0cmluZy9mdW5jdGlvbiB0eXBlIGFuZCBjYW4gdGhyb3cgY29uZnVzaW5nIGVycm9ycy5cbiAgICAvLyBXZSBkb24ndCB3YW50IGV4Y2VwdGlvbiBiZWhhdmlvciB0byBkaWZmZXIgYmV0d2VlbiBkZXYgYW5kIHByb2QuXG4gICAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgICAvLyBmaXhlZCwgdGhlIGtleSB3YXJuaW5ncyB3aWxsIGFwcGVhci4pXG5cblxuICAgIGlmICh2YWxpZFR5cGUpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuXG4gICAgICBpZiAoY2hpbGRyZW4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoaXNTdGF0aWNDaGlsZHJlbikge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbltpXSwgdHlwZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRyZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnJvcignUmVhY3QuanN4OiBTdGF0aWMgY2hpbGRyZW4gc2hvdWxkIGFsd2F5cyBiZSBhbiBhcnJheS4gJyArICdZb3UgYXJlIGxpa2VseSBleHBsaWNpdGx5IGNhbGxpbmcgUmVhY3QuanN4cyBvciBSZWFjdC5qc3hERVYuICcgKyAnVXNlIHRoZSBCYWJlbCB0cmFuc2Zvcm0gaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW4sIHR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuanN4REVWID0ganN4REVWJDE7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==