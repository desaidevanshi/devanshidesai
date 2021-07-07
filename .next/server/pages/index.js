(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./components/Card/index.js":
/*!**********************************!*\
  !*** ./components/Card/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card.module.scss */ "./components/Card/card.module.scss");
/* harmony import */ var _card_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_card_module_scss__WEBPACK_IMPORTED_MODULE_4__);



var _excluded = ["children", "variant", "className"];

var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\components\\Card\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Card = function Card(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      className = _ref.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, _excluded);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", _objectSpread(_objectSpread({
    className: "".concat((_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default())[variant], " ").concat(className)
  }, props), {}, {
    children: children
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

Card.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["cardPort", "hoverPort", "cardBlog"])
};
Card.defaultProps = {
  className: "",
  variant: "cardPort"
};
/* harmony default export */ __webpack_exports__["default"] = (Card);

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

/***/ "./components/Navbar/index.js":
/*!************************************!*\
  !*** ./components/Navbar/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\components\\Navbar\\index.js",
    _this = undefined;







var Navbar = function Navbar() {
  var _useRouter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)(),
      pathname = _useRouter.pathname;

  var toggleNavbar = function toggleNavbar() {
    var element = document.getElementById("navbar");

    if (react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(element).style.display === "flex") {
      react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(element).style.display = "none";
    } else {
      react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(element).style.display = "flex";
    }

    window.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        var _element = document.getElementById("navbar");

        if (react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(_element).style.display === "flex") {
          react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(_element).style.display = "none";
        }
      }
    });
    var toggle = document.getElementById("toggle");
    toggle.classList.toggle("active");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
        className: "navbar",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "max-width",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: "logo",
                children: ["Devan", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                  children: "shi."
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 37,
                  columnNumber: 24
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "nav-btn",
              id: "toggle",
              onClick: toggleNavbar
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "sub-container",
            id: "navbar",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              onClick: toggleNavbar,
              className: "blankSpace"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
              className: "menu",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "http://localhost:3000/#home",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("nav-link-white", {
                      active: pathname === "#home"
                    }),
                    children: "Home"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 48,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 47,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "http://localhost:3000/#about",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("nav-link-white", {
                      active: pathname === "#about"
                    }),
                    children: "About"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "http://localhost:3000/#services",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("nav-link-white", {
                      active: pathname === "#services"
                    }),
                    children: "Services"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "http://localhost:3000/#work",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("nav-link-white", {
                      active: pathname === "#work"
                    }),
                    children: "Work"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                  href: "http://localhost:3000/#contact",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("nav-link-white", {
                      active: pathname === "#contact"
                    }),
                    children: "Contact"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/PortText/index.js":
/*!**************************************!*\
  !*** ./components/PortText/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _portText_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portText.module.scss */ "./components/PortText/portText.module.scss");
/* harmony import */ var _portText_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_portText_module_scss__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\components\\PortText\\index.js",
    _this = undefined;




var PortText = function PortText(_ref) {
  var variant = _ref.variant,
      component = _ref.component,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: component === "h1" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "".concat((_portText_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[variant], " ").concat(className),
      component: component,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "".concat((_portText_module_scss__WEBPACK_IMPORTED_MODULE_2___default())[variant], " ").concat(className),
      component: component,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 3
  }, _this);
};

PortText.propTypes = {
  variant: prop_types__WEBPACK_IMPORTED_MODULE_1___default().oneOf(["portEduLeftText", "portEduPercent", "portHeaderText", "portHeaderHomeText", "portLogoText", "portNavText", "contactTextArea", "portHeaderCaption", "portHeaderCaptionBold", "portHeadingText", "portHeadingCaption", "portParaText", "portAboutCaption", "portParaAboutText", "portButtonText", "portServiceSubHeadingText", "portCounterText", "portCounterCaption", "portCardHeaderText", "portCardReadText", "portCardDateText", "portTestimonialText", "portTestimonialPText", "portTestimonialRoleText", "portContactHeadingText", "portContactDetailText", "portFilterText", "portFlexText", "portHeaderTextPCard", "portHoverCardText", "portSingleBlog", "portSingleBlogText", "portCommentText", "portCommentdetailText"]),
  component: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  className: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().string),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().node.isRequired)
};
PortText.defaultProps = {
  variant: "portHeaderText",
  component: ""
};
/* harmony default export */ __webpack_exports__["default"] = (PortText);

/***/ }),

/***/ "./container/about/index.js":
/*!**********************************!*\
  !*** ./container/about/index.js ***!
  \**********************************/
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
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about.module.scss */ "./container/about/about.module.scss");
/* harmony import */ var _about_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_about_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\container\\about\\index.js",
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



var About = function About() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    id: "about",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("article", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().about), "bg-primary"),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("picture", {
        className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().aboutImg),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("source", {
          media: "(max-width:1025px)",
          srcSet: "/images/about-img-lg.jpg",
          type: "image.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          src: "/images/about-img-lg.jpg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("aside", {
        className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().description),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().name),
          children: "Devanshi Desai"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
          className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().caption),
          children: "Full-stack Developer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().des),
          children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus nobis neque, deserunt nulla hic autem, eveniet aperiam aliquid eligendi, aut possimus obcaecati! Earum, cum hic."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().portSocial),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "https://github.com/desaidevanshi",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
              className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().portSocialBtn),
              variant: "portSocialButton",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Github, {
                className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().btnHover),
                height: 18,
                width: 18
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "www.linkedin.com/in/devanshi-desai-5716bb182",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
              className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().portSocialBtn),
              variant: "portSocialButton",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Linkedin, {
                className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().btnHover),
                height: 18,
                width: 18
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "https://twitter.com/Devansh70765923",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
              className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().portSocialBtn),
              variant: "portSocialButton",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Twitter, {
                className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().btnHover),
                height: 18,
                width: 18
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
            href: "mailto:contact.ddevanshi@gmail.com",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
              className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().portSocialBtn),
              variant: "portSocialButton",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Gmail, {
                className: (_about_module_scss__WEBPACK_IMPORTED_MODULE_5___default().btnHover),
                height: 18,
                width: 18
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          children: "Download cv"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./container/contact/index.js":
/*!************************************!*\
  !*** ./container/contact/index.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.js");
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact.module.scss */ "./container/contact/contact.module.scss");
/* harmony import */ var _contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_contact_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\container\\contact\\index.js",
    _this = undefined;





 // A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues

var validate = function validate(values) {
  var errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 15) {
    errors.name = "Must be 15 characters or less";
  }

  if (!values.tel) {
    errors.tel = "Required";
  } else if (!/^[+]?[0-9]{3}[0-9]{3}[0-9]{4,6}$/i.test(values.tel)) {
    errors.tel = "Invalid phone number";
  }

  return errors;
};

var SignupForm = function SignupForm() {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({
    initialValues: {
      name: "",
      tel: "",
      message: ""
    },
    validate: validate,
    onSubmit: function onSubmit(values, _ref) {
      var resetForm = _ref.resetForm;
      resetForm();
      alert(JSON.stringify(values, null, 2));
    }
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
    id: "contact",
    onSubmit: formik.handleSubmit,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()((_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contactContainer), "bg-primary"),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
        className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().captionCon),
        children: "Contact"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().desCon),
        children: "GET IN TOUCH"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contactForm),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                id: "name",
                name: "name",
                type: "text",
                value: formik.values.name,
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                variant: "contactInput",
                placeholder: "Name",
                className: formik.errors.name ? (_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().borderApply) : (_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contactInput)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                id: "tel",
                name: "tel",
                type: "tel",
                onChange: formik.handleChange,
                onBlur: formik.handleBlur,
                value: formik.values.tel,
                variant: "contactInput",
                placeholder: "Phone Number",
                className: formik.errors.tel ? (_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().borderApply) : (_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contactInput)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("textarea", {
            variant: "contactTextArea",
            className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().contactTextArea),
            component: "textarea",
            placeholder: "How can we help you?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          type: "submit",
          className: (_contact_module_scss__WEBPACK_IMPORTED_MODULE_5___default().buttonMargin),
          children: "SEND MESSAGE"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (SignupForm);

/***/ }),

/***/ "./container/education/index.js":
/*!**************************************!*\
  !*** ./container/education/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.js");
/* harmony import */ var _components_PortText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/PortText */ "./components/PortText/index.js");


var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\container\\education\\index.js",
    _this = undefined;





var Education = function Education() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    id: "Education",
    className: "alignment bg-primary",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "textAlign",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
        variant: "portHeadingText",
        children: "Education and Skills"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "leftbox",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "leftsubbox",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "leftTextAlign",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portEduLeftText",
            children: "2010-2012"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portEduLeftText",
            children: "Graphic Designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portEduLeftText",
            children: "International Design Institute"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "leftTextAlign",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portEduLeftText",
            children: "2010-2012"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portEduLeftText",
            children: "Graphic Designer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portEduLeftText",
            children: "International Design Institute"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "baralign",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "bars",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portEduPercent",
            component: "h1",
            children: "80%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "block",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
              variant: "portHeadingCaption",
              children: "JAVASCRIPT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "bar",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "ht2"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "bars",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portEduPercent",
            component: "h1",
            children: "72%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "block",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
              variant: "portHeadingCaption",
              children: "REACT"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "bar",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "ht3"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "bars",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portEduPercent",
            component: "h1",
            children: "85%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "block",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PortText__WEBPACK_IMPORTED_MODULE_3__.default, {
              variant: "portHeadingCaption",
              children: "NEXTJS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 13
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "bar",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "ht4"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 15
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 13
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 11
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "align",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "/Resume",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
          children: "View More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 3
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./container/home/index.js":
/*!*********************************!*\
  !*** ./container/home/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_rotating_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rotating-text */ "react-rotating-text");
/* harmony import */ var react_rotating_text__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_rotating_text__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.module.scss */ "./container/home/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\container\\home\\index.js",
    _this = undefined;





var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      id: "home",
      className: classnames__WEBPACK_IMPORTED_MODULE_2___default()((_home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().banner), "bg-primary"),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().containerH),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
          children: ["Hi! I'm", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }, _this), "Devanshi Desai"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_3___default().desc),
          children: ["Creative", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_rotating_text__WEBPACK_IMPORTED_MODULE_1___default()), {
            style: {
              color: "#4da8da",
              paddingLeft: "10px"
            },
            items: ["Designer", "Developer"]
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./container/services/index.js":
/*!*************************************!*\
  !*** ./container/services/index.js ***!
  \*************************************/
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
/* harmony import */ var _service_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service.module.scss */ "./container/services/service.module.scss");
/* harmony import */ var _service_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_service_module_scss__WEBPACK_IMPORTED_MODULE_4__);




var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\container\\services\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var Computer = function Computer(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

Computer.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "48",
  viewBox: "0 0 24 24",
  width: "48",
  fill: "#FFF"
};

var Code = function Code(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M9.4 16.6 4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0 4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

Code.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "48",
  viewBox: "0 0 24 24",
  width: "48",
  fill: "#FFF"
};

var Settings = function Settings(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      fill: "none",
      d: "M0 0h20v20H0z"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M10 3c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm2.16 1.41c1.57.61 2.82 1.85 3.43 3.42l-2.78 1.15a2.99 2.99 0 0 0-1.79-1.79l1.14-2.78zm-4.32 0L9 7.18c-.85.3-1.51.96-1.82 1.81L4.41 7.84a6.032 6.032 0 0 1 3.43-3.43zm-.01 11.18a6.032 6.032 0 0 1-3.43-3.43l2.78-1.15c.3.84.97 1.51 1.81 1.81l-1.16 2.77zM8 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4.17 5.59-1.15-2.78c.84-.3 1.5-.97 1.79-1.81l2.77 1.16a5.942 5.942 0 0 1-3.41 3.43z"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

Settings.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "48",
  viewBox: "0 0 20 20",
  width: "48",
  fill: "#FFF"
};



var Services = function Services() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
      id: "services",
      className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().serviceSec),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().heading),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          children: "Services"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: "WHAT CAN I DO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mainbox),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().box),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portServiceButton",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Computer, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divRow),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: "Web Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore expedita et veniam aut nulla ipsa enim ex in, quaerat, hic aspernatur voluptatem debitis, accusantium itaque!"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().box),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portServiceButton",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Code, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divRow),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: "Web Development"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vel reiciendis laborum dolor recusandae deleniti repudiandae aut libero animi. Eaque qui debitis aperiam est ullam?"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().box),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
            variant: "portServiceButton",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Settings, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_service_module_scss__WEBPACK_IMPORTED_MODULE_4___default().divRow),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
              children: "Support"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
              children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius est molestias excepturi atque deserunt quod dolore, aut beatae distinctio unde quae aliquam iste asperiores vero."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./container/work/index.js":
/*!*********************************!*\
  !*** ./container/work/index.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Card */ "./components/Card/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Button */ "./components/Button/index.js");
/* harmony import */ var _work_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work.module.scss */ "./container/work/work.module.scss");
/* harmony import */ var _work_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_work_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\container\\work\\index.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Search = function Search(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }, void 0, false, void 0, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("path", {
      d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }, void 0, false, void 0, this)]
  }), void 0, true, void 0, this);
};

Search.defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "48",
  viewBox: "0 0 24 24",
  width: "48",
  fill: "#FFF"
};




var Work = function Work(_ref) {
  var data = _ref.data;

  function liClicked() {
    var item = document.querySelector("listItems");
    console.log(item); // x.classList.add('selItem');
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("section", {
    id: "work",
    className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().center),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().portfolio),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().row),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h2", {
          className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headText),
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().pFilter),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: "All"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: "Web Design"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: "Application"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
              children: "Development"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().item),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
          variant: "cardPort",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().relativeP),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/images/249772.jpg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardContent),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
                variant: "hoverPort",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hoverContext),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    className: "portHoverCardText",
                    children: "Application"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 35,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Search, {
                      className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().searchIcon)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 37,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 36,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 34,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
          variant: "cardPort",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().relativeP),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/images/249772.jpg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardContent),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
                variant: "hoverPort",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hoverContext),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    className: "portHoverCardText",
                    children: "Application"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Search, {
                      className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().searchIcon)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 52,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 51,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
          variant: "cardPort",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().relativeP),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              src: "/images/249772.jpg",
              alt: ""
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().cardContent),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Card__WEBPACK_IMPORTED_MODULE_3__.default, {
                variant: "hoverPort",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
                  className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().hoverContext),
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
                    className: "portHoverCardText",
                    children: "Application"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 21
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Search, {
                      className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().searchIcon)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_work_module_scss__WEBPACK_IMPORTED_MODULE_6___default().align),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
          href: "/PortfolioPage",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Button__WEBPACK_IMPORTED_MODULE_4__.default, {
            variant: "portHomeButton",
            children: "View More"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

var prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options)["catch"](function (err) {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  var curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  var target = event.currentTarget.target;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  var nodeName = e.currentTarget.nodeName;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow: shallow,
    locale: locale,
    scroll: scroll
  });
}

function Link(props) {
  if (true) {
    var createPropError = function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + ( false ? 0 : ''));
    }; // TypeScript trick for type-guarding:


    var requiredPropsGuard = {
      href: true
    };
    var requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(function (key) {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && _typeof(props[key]) !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : _typeof(props[key])
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // TypeScript trick for type-guarding:

    var optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    var optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(function (key) {
      var valType = _typeof(props[key]);

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key: key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key: key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key: key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    var hasWarned = _react["default"].useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  var p = props.prefetch !== false;
  var router = (0, _router2.useRouter)();

  var _react$default$useMem = _react["default"].useMemo(function () {
    var _ref = (0, _router.resolveHref)(router, props.href, true),
        _ref2 = _slicedToArray(_ref, 2),
        resolvedHref = _ref2[0],
        resolvedAs = _ref2[1];

    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]),
      href = _react$default$useMem.href,
      as = _react$default$useMem.as;

  var children = props.children,
      replace = props.replace,
      shallow = props.shallow,
      scroll = props.scroll,
      locale = props.locale; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react["default"].createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  var child;

  if (true) {
    try {
      child = _react.Children.only(children);
    } catch (err) {
      throw new Error("Multiple children were passed to <Link> with `href` of `".concat(props.href, "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children") + ( false ? 0 : ''));
    }
  } else {}

  var childRef = child && _typeof(child) === 'object' && child.ref;

  var _ref3 = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  }),
      _ref4 = _slicedToArray(_ref3, 2),
      setIntersectionRef = _ref4[0],
      isVisible = _ref4[1];

  var setRef = _react["default"].useCallback(function (el) {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (_typeof(childRef) === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(function () {
    var shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    var isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  var childProps = {
    ref: setRef,
    onClick: function onClick(e) {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = function (e) {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    var curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    var localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react["default"].cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


var normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

var requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  var start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function timeRemaining() {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

var cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


var MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  var entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  var resolver;
  var prom = new Promise(function (resolve) {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(function (value) {
    return resolver(value), value;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

var canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise(function (res, rej) {
    if (document.querySelector("link[rel=\"prefetch\"][href^=\"".concat(href, "\"]"))) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = "prefetch";
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

var ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise(function (resolve, reject) {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = function () {
      return reject(markAssetError(new Error("Failed to load script: ".concat(src))));
    }; // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise(function (resolve, reject) {
    var cancelled = false;
    p.then(function (r) {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    })["catch"](reject);
    (0, _requestIdleCallback.requestIdleCallback)(function () {
      return setTimeout(function () {
        if (!cancelled) {
          reject(err);
        }
      }, ms);
    });
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  var onBuildManifest = new Promise(function (resolve) {
    // Mandatory because this is not concurrent safe:
    var cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = function () {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute["default"])(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(function (manifest) {
    if (!(route in manifest)) {
      throw markAssetError(new Error("Failed to lookup route: ".concat(route)));
    }

    var allFiles = manifest[route].map(function (entry) {
      return assetPrefix + '/_next/' + encodeURI(entry);
    });
    return {
      scripts: allFiles.filter(function (v) {
        return v.endsWith('.js');
      }),
      css: allFiles.filter(function (v) {
        return v.endsWith('.css');
      })
    };
  });
}

function createRouteLoader(assetPrefix) {
  var entrypoints = new Map();
  var loadedScripts = new Map();
  var styleSheets = new Map();
  var routes = new Map();

  function maybeExecuteScript(src) {
    var prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector("script[src^=\"".concat(src, "\"]"))) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    var prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(function (res) {
      if (!res.ok) {
        throw new Error("Failed to load stylesheet: ".concat(href));
      }

      return res.text().then(function (text) {
        return {
          href: href,
          content: text
        };
      });
    })["catch"](function (err) {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint: function whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },
    onEntrypoint: function onEntrypoint(route, execute) {
      Promise.resolve(execute).then(function (fn) {
        return fn();
      }).then(function (exports) {
        return {
          component: exports && exports["default"] || exports,
          exports: exports
        };
      }, function (err) {
        return {
          error: err
        };
      }).then(function (input) {
        var old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },
    loadRoute: function loadRoute(route, prefetch) {
      var _this = this;

      return withFuture(route, routes, function () {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(function (_ref) {
          var scripts = _ref.scripts,
              css = _ref.css;
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(function (res) {
          return _this.whenEntrypoint(route).then(function (entrypoint) {
            return {
              entrypoint: entrypoint,
              styles: res[1]
            };
          });
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error("Route did not complete loading: ".concat(route)))).then(function (_ref2) {
          var entrypoint = _ref2.entrypoint,
              styles = _ref2.styles;
          var res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        })["catch"](function (err) {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },
    prefetch: function prefetch(route) {
      var _this2 = this;

      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      var cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(function (output) {
        return Promise.all(canPrefetch ? output.scripts.map(function (script) {
          return prefetchViaDom(script, 'script');
        }) : []);
      }).then(function () {
        (0, _requestIdleCallback.requestIdleCallback)(function () {
          return _this2.loadRoute(route, true)["catch"](function () {});
        });
      })["catch"]( // swallow prefetch errors
      function () {});
    }
  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js");

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** be used inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (_typeof(_router[property]) === 'object') {
        instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection(_ref) {
  var rootMargin = _ref.rootMargin,
      disabled = _ref.disabled;
  var isDisabled = disabled || !hasIntersectionObserver;
  var unobserve = (0, _react.useRef)();

  var _ref2 = (0, _react.useState)(false),
      _ref3 = _slicedToArray(_ref2, 2),
      visible = _ref3[0],
      setVisible = _ref3[1];

  var setRef = (0, _react.useCallback)(function (el) {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, function (isVisible) {
        return isVisible && setVisible(isVisible);
      }, {
        rootMargin: rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(function () {
    if (!hasIntersectionObserver) {
      if (!visible) {
        var idleCallback = (0, _requestIdleCallback.requestIdleCallback)(function () {
          return setVisible(true);
        });
        return function () {
          return (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
        };
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  var _createObserver = createObserver(options),
      id = _createObserver.id,
      observer = _createObserver.observer,
      elements = _createObserver.elements;

  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements["delete"](element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers["delete"](id);
    }
  };
}

var observers = new Map();

function createObserver(options) {
  var id = options.rootMargin || '';
  var instance = observers.get(id);

  if (instance) {
    return instance;
  }

  var elements = new Map();
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var callback = elements.get(entry.target);
      var isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id: id,
    observer: observer,
    elements: elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  var detectedLocale; // first item will be empty string from splitting at first char

  var pathnameParts = pathname.split('/');
  (locales || []).some(function (locale) {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname: pathname,
    detectedLocale: detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
} // tslint:disable:no-console


var detectDomainLocale;

if (false) {}

var basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : "".concat(prefix).concat(pathNoQueryHash(path) === '/' ? path.substring(1) : path) : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) { var detectedDomain; }

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function delLocale(path, locale) {
  if (false) { var localeLower, pathLower, pathname; }

  return path;
}

function pathNoQueryHash(path) {
  var queryIndex = path.indexOf('?');
  var hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = "/".concat(path);
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    var locationOrigin = (0, _utils.getLocationOrigin)();
    var resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  var interpolatedRoute = '';
  var dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  var dynamicGroups = dynamicRegex.groups;
  var dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  var params = Object.keys(dynamicGroups);

  if (!params.every(function (param) {
    var value = dynamicMatches[param] || '';
    var _dynamicGroups$param = dynamicGroups[param],
        repeat = _dynamicGroups$param.repeat,
        optional = _dynamicGroups$param.optional; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    var replaced = "[".concat(repeat ? '...' : '').concat(param, "]");

    if (optional) {
      replaced = "".concat(!value ? '/' : '', "[").concat(replaced, "]");
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    function (segment) {
      return encodeURIComponent(segment);
    }).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params: params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  var filteredQuery = {};
  Object.keys(query).forEach(function (key) {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  var base;
  var urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    var finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    var interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      var query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);

      var _interpolateAs = interpolateAs(finalUrl.pathname, finalUrl.pathname, query),
          result = _interpolateAs.result,
          params = _interpolateAs.params;

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    var resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  var origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  var _resolveHref = resolveHref(router, url, true),
      _resolveHref2 = _slicedToArray(_resolveHref, 2),
      resolvedHref = _resolveHref2[0],
      resolvedAs = _resolveHref2[1];

  var origin = (0, _utils.getLocationOrigin)();
  var hrefHadOrigin = resolvedHref.startsWith(origin);
  var asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  var preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  var preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  var cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(function (page) {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

var manualScrollRestoration =  false && 0;
var SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(function (res) {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(function (data) {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error("Failed to load static props");
        });
      }

      throw new Error("Failed to load static props");
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1)["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  function Router(_pathname, _query, _as, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback,
        locale = _ref.locale,
        locales = _ref.locales,
        defaultLocale = _ref.defaultLocale,
        domainLocales = _ref.domainLocales,
        isPreview = _ref.isPreview;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = function (e) {
      var state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var _pathname2 = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(_pathname2),
          query: query
        }), (0, _utils.getURL)());

        return;
      }

      if (!state.__N) {
        return;
      }

      var forcedScroll;
      var url = state.url,
          as = state.as,
          options = state.options,
          idx = state.idx;

      if (false) { var v; }

      _this._idx = idx;

      var _ref2 = (0, _parseRelativeUrl.parseRelativeUrl)(url),
          pathname = _ref2.pathname; // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (_this.isSsr && as === _this.asPath && pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(state)) {
        return;
      }

      _this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && _this._shallow,
        locale: options.locale || _this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        initial: true,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    var autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) { var options; }
  }

  _createClass(Router, [{
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (false) {}

      ;

      var _prepareUrlAs = prepareUrlAs(this, url, as);

      url = _prepareUrlAs.url;
      as = _prepareUrlAs.as;
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url, as) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      ;

      var _prepareUrlAs2 = prepareUrlAs(this, url, as);

      url = _prepareUrlAs2.url;
      as = _prepareUrlAs2.as;
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function () {
      var _change = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(method, url, as, options, forcedScroll) {
        var shouldResolveHref, localeChange, parsedAs, localePathResult, didNavigate, _this$locales, detectedDomain, asNoBasePath, _options$shallow, shallow, routeProps, cleanedAs, parsed, pathname, query, pages, rewrites, _yield, resolvedAs, rewritesResult, route, _parsedAs, asPathname, routeRegex, routeMatch, shouldInterpolate, interpolatedAs, missingParams, _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2, _options$scroll, routeInfo, _routeInfo, error, props, __N_SSG, __N_SSP, destination, parsedHref, _prepareUrlAs3, newUrl, newAs, notFoundRoute, appComp, isValidShallowRoute, shouldScroll, resetScroll;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (isLocalURL(url)) {
                  _context.next = 3;
                  break;
                }

                window.location.href = url;
                return _context.abrupt("return", false);

              case 3:
                shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
                // marking the router ready until after the query is updated

                if (options._h) {
                  this.isReady = true;
                }

                localeChange = options.locale !== this.locale;

                if (true) {
                  _context.next = 18;
                  break;
                }

                this.locale = options.locale === false ? this.defaultLocale : options.locale || this.locale;

                if (typeof options.locale === 'undefined') {
                  options.locale = this.locale;
                }

                parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(hasBasePath(as) ? delBasePath(as) : as);
                localePathResult = (0, _normalizeLocalePath.normalizeLocalePath)(parsedAs.pathname, this.locales);

                if (localePathResult.detectedLocale) {
                  this.locale = localePathResult.detectedLocale;
                  parsedAs.pathname = addBasePath(parsedAs.pathname);
                  as = (0, _utils.formatWithValidation)(parsedAs);
                  url = addBasePath((0, _normalizeLocalePath.normalizeLocalePath)(hasBasePath(url) ? delBasePath(url) : url, this.locales).pathname);
                }

                didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                detectedDomain = detectDomainLocale(this.domainLocales, undefined, this.locale); // we need to wrap this in the env check again since regenerator runtime
                // moves this on its own due to the return

                if (false) {}

                if (!didNavigate) {
                  _context.next = 18;
                  break;
                }

                return _context.abrupt("return", new Promise(function () {}));

              case 18:
                if (!options._h) {
                  this.isSsr = false;
                } // marking route changes as a navigation start entry


                if (_utils.ST) {
                  performance.mark('routeChange');
                }

                _options$shallow = options.shallow, shallow = _options$shallow === void 0 ? false : _options$shallow;
                routeProps = {
                  shallow: shallow
                };

                if (this._inFlightRoute) {
                  this.abortComponentLoad(this._inFlightRoute, routeProps);
                }

                as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
                cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
                this._inFlightRoute = as; // If the url change is only related to a hash change
                // We should not proceed. We should only change the state.
                // WARNING: `_h` is an internal option for handing Next.js client-side
                // hydration. Your app should _never_ use this property. It may change at
                // any time without notice.

                if (!(!options._h && this.onlyAHashChange(cleanedAs))) {
                  _context.next = 34;
                  break;
                }

                this.asPath = cleanedAs;
                Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

                this.changeState(method, url, as, options);
                this.scrollToHash(cleanedAs);
                this.notify(this.components[this.route], null);
                Router.events.emit('hashChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 34:
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname, query = parsed.query; // The build manifest needs to be loaded before auto-static dynamic pages
                // get their query parameters to allow ensuring they can be parsed properly
                // when rewritten to

                _context.prev = 36;
                _context.next = 39;
                return this.pageLoader.getPageList();

              case 39:
                pages = _context.sent;
                _context.next = 42;
                return (0, _routeLoader.getClientBuildManifest)();

              case 42:
                _yield = _context.sent;
                rewrites = _yield.__rewrites;
                _context.next = 50;
                break;

              case 46:
                _context.prev = 46;
                _context.t0 = _context["catch"](36);
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 50:
                // If asked to change the current URL we should reload the current page
                // (not location.reload() but reload getInitialProps and other Next.js stuffs)
                // We also need to set the method = replaceState always
                // as this should not go into the history (That's how browsers work)
                // We should compare the new asPath to the current asPath, not the url
                if (!this.urlIsNew(cleanedAs) && !localeChange) {
                  method = 'replaceState';
                } // we need to resolve the as value using rewrites for dynamic SSG
                // pages to allow building the data URL correctly


                resolvedAs = as; // url and as should always be prefixed with basePath by this
                // point by either next/link or router.push/replace so strip the
                // basePath from the pathname to match the pages dir 1-to-1

                pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

                if (shouldResolveHref && pathname !== '/_error') {
                  ;
                  options._shouldResolveHref = true;

                  if (false) {} else {
                    parsed.pathname = resolveDynamicRoute(pathname, pages);

                    if (parsed.pathname !== pathname) {
                      pathname = parsed.pathname;
                      parsed.pathname = addBasePath(pathname);
                      url = (0, _utils.formatWithValidation)(parsed);
                    }
                  }
                }

                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

                if (isLocalURL(as)) {
                  _context.next = 60;
                  break;
                }

                if (false) {}

                throw new Error("Invalid href: \"".concat(url, "\" and as: \"").concat(as, "\", received relative href and external as") + "\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as");

              case 58:
                window.location.href = as;
                return _context.abrupt("return", false);

              case 60:
                resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

                if (!(0, _isDynamic.isDynamicRoute)(route)) {
                  _context.next = 76;
                  break;
                }

                _parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
                asPathname = _parsedAs.pathname;
                routeRegex = (0, _routeRegex.getRouteRegex)(route);
                routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
                shouldInterpolate = route === asPathname;
                interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

                if (!(!routeMatch || shouldInterpolate && !interpolatedAs.result)) {
                  _context.next = 75;
                  break;
                }

                missingParams = Object.keys(routeRegex.groups).filter(function (param) {
                  return !query[param];
                });

                if (!(missingParams.length > 0)) {
                  _context.next = 73;
                  break;
                }

                if (true) {
                  console.warn("".concat(shouldInterpolate ? "Interpolating href" : "Mismatching `as` and `href`", " failed to manually provide ") + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
                }

                throw new Error((shouldInterpolate ? "The provided `href` (".concat(url, ") value is missing query values (").concat(missingParams.join(', '), ") to be interpolated properly. ") : "The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ")) + "Read more: https://nextjs.org/docs/messages/".concat(shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'));

              case 73:
                _context.next = 76;
                break;

              case 75:
                if (shouldInterpolate) {
                  as = (0, _utils.formatWithValidation)(Object.assign({}, _parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                  }));
                } else {
                  // Merge params into `query`, overwriting any specified in search
                  Object.assign(query, routeMatch);
                }

              case 76:
                Router.events.emit('routeChangeStart', as, routeProps);
                _context.prev = 77;
                _context.next = 80;
                return this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);

              case 80:
                routeInfo = _context.sent;
                _routeInfo = routeInfo, error = _routeInfo.error, props = _routeInfo.props, __N_SSG = _routeInfo.__N_SSG, __N_SSP = _routeInfo.__N_SSP; // handle redirect on client-transition

                if (!((__N_SSG || __N_SSP) && props)) {
                  _context.next = 106;
                  break;
                }

                if (!(props.pageProps && props.pageProps.__N_REDIRECT)) {
                  _context.next = 92;
                  break;
                }

                destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                // client-navigation if it is falling back to hard navigation if
                // it's not

                if (!destination.startsWith('/')) {
                  _context.next = 90;
                  break;
                }

                parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
                parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                _prepareUrlAs3 = prepareUrlAs(this, destination, destination), newUrl = _prepareUrlAs3.url, newAs = _prepareUrlAs3.as;
                return _context.abrupt("return", this.change(method, newUrl, newAs, options));

              case 90:
                window.location.href = destination;
                return _context.abrupt("return", new Promise(function () {}));

              case 92:
                this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (!(props.notFound === SSG_DATA_NOT_FOUND)) {
                  _context.next = 106;
                  break;
                }

                _context.prev = 94;
                _context.next = 97;
                return this.fetchComponent('/404');

              case 97:
                notFoundRoute = '/404';
                _context.next = 103;
                break;

              case 100:
                _context.prev = 100;
                _context.t1 = _context["catch"](94);
                notFoundRoute = '/_error';

              case 103:
                _context.next = 105;
                return this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                  shallow: false
                });

              case 105:
                routeInfo = _context.sent;

              case 106:
                Router.events.emit('beforeHistoryChange', as, routeProps);
                this.changeState(method, url, as, options);

                if (true) {
                  appComp = this.components['/_app'].Component;
                  window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
                }

                if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
                  // ensure statusCode is still correct for static 500 page
                  // when updating query information
                  props.pageProps.statusCode = 500;
                } // shallow routing is only allowed for same page URL changes.


                isValidShallowRoute = options.shallow && this.route === route;
                shouldScroll = (_options$scroll = options.scroll) != null ? _options$scroll : !isValidShallowRoute;
                resetScroll = shouldScroll ? {
                  x: 0,
                  y: 0
                } : null;
                _context.next = 115;
                return this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll != null ? forcedScroll : resetScroll)["catch"](function (e) {
                  if (e.cancelled) error = error || e;else throw e;
                });

              case 115:
                if (!error) {
                  _context.next = 118;
                  break;
                }

                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;

              case 118:
                if (false) {}

                Router.events.emit('routeChangeComplete', as, routeProps);
                return _context.abrupt("return", true);

              case 123:
                _context.prev = 123;
                _context.t2 = _context["catch"](77);

                if (!_context.t2.cancelled) {
                  _context.next = 127;
                  break;
                }

                return _context.abrupt("return", false);

              case 127:
                throw _context.t2;

              case 128:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[36, 46], [77, 123], [94, 100]]);
      }));

      function change(_x, _x2, _x3, _x4, _x5) {
        return _change.apply(this, arguments);
      }

      return change;
    }()
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        this._shallow = options.shallow;
        window.history[method]({
          url: url,
          as: as,
          options: options,
          __N: true,
          idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "handleRouteInfoError",
    value: function () {
      var _handleRouteInfoError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(err, pathname, query, as, routeProps, loadErrorFail) {
        var Component, styleSheets, props, _yield$this$fetchComp, routeInfo;

        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err.cancelled) {
                  _context2.next = 2;
                  break;
                }

                throw err;

              case 2:
                if (!((0, _routeLoader.isAssetError)(err) || loadErrorFail)) {
                  _context2.next = 6;
                  break;
                }

                Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.

                window.location.href = as; // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.

                throw buildCancellationError();

              case 6:
                _context2.prev = 6;

                if (!(typeof Component === 'undefined' || typeof styleSheets === 'undefined')) {
                  _context2.next = 14;
                  break;
                }

                ;
                _context2.next = 11;
                return this.fetchComponent('/_error');

              case 11:
                _yield$this$fetchComp = _context2.sent;
                Component = _yield$this$fetchComp.page;
                styleSheets = _yield$this$fetchComp.styleSheets;

              case 14:
                routeInfo = {
                  props: props,
                  Component: Component,
                  styleSheets: styleSheets,
                  err: err,
                  error: err
                };

                if (routeInfo.props) {
                  _context2.next = 26;
                  break;
                }

                _context2.prev = 16;
                _context2.next = 19;
                return this.getInitialProps(Component, {
                  err: err,
                  pathname: pathname,
                  query: query
                });

              case 19:
                routeInfo.props = _context2.sent;
                _context2.next = 26;
                break;

              case 22:
                _context2.prev = 22;
                _context2.t0 = _context2["catch"](16);
                console.error('Error in error page `getInitialProps`: ', _context2.t0);
                routeInfo.props = {};

              case 26:
                return _context2.abrupt("return", routeInfo);

              case 29:
                _context2.prev = 29;
                _context2.t1 = _context2["catch"](6);
                return _context2.abrupt("return", this.handleRouteInfoError(_context2.t1, pathname, query, as, routeProps, true));

              case 32:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[6, 29], [16, 22]]);
      }));

      function handleRouteInfoError(_x6, _x7, _x8, _x9, _x10, _x11) {
        return _handleRouteInfoError.apply(this, arguments);
      }

      return handleRouteInfoError;
    }()
  }, {
    key: "getRouteInfo",
    value: function () {
      var _getRouteInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(route, pathname, query, as, resolvedAs, routeProps) {
        var _this2 = this;

        var existingRouteInfo, cachedRouteInfo, routeInfo, Component, __N_SSG, __N_SSP, _require, isValidElementType, dataHref, props;

        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                existingRouteInfo = this.components[route];

                if (!(routeProps.shallow && existingRouteInfo && this.route === route)) {
                  _context3.next = 4;
                  break;
                }

                return _context3.abrupt("return", existingRouteInfo);

              case 4:
                cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;

                if (!cachedRouteInfo) {
                  _context3.next = 9;
                  break;
                }

                _context3.t0 = cachedRouteInfo;
                _context3.next = 12;
                break;

              case 9:
                _context3.next = 11;
                return this.fetchComponent(route).then(function (res) {
                  return {
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP
                  };
                });

              case 11:
                _context3.t0 = _context3.sent;

              case 12:
                routeInfo = _context3.t0;
                Component = routeInfo.Component, __N_SSG = routeInfo.__N_SSG, __N_SSP = routeInfo.__N_SSP;

                if (false) {}

                _require = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js"), isValidElementType = _require.isValidElementType;

                if (isValidElementType(Component)) {
                  _context3.next = 18;
                  break;
                }

                throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));

              case 18:
                if (__N_SSG || __N_SSP) {
                  dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
                    pathname: pathname,
                    query: query
                  }), resolvedAs, __N_SSG, this.locale);
                }

                _context3.next = 21;
                return this._getData(function () {
                  return __N_SSG ? _this2._getStaticData(dataHref) : __N_SSP ? _this2._getServerData(dataHref) : _this2.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
                  {
                    pathname: pathname,
                    query: query,
                    asPath: as,
                    locale: _this2.locale,
                    locales: _this2.locales,
                    defaultLocale: _this2.defaultLocale
                  });
                });

              case 21:
                props = _context3.sent;
                routeInfo.props = props;
                this.components[route] = routeInfo;
                return _context3.abrupt("return", routeInfo);

              case 27:
                _context3.prev = 27;
                _context3.t1 = _context3["catch"](0);
                return _context3.abrupt("return", this.handleRouteInfoError(_context3.t1, pathname, query, as, routeProps));

              case 30:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 27]]);
      }));

      function getRouteInfo(_x12, _x13, _x14, _x15, _x16, _x17) {
        return _getRouteInfo.apply(this, arguments);
      }

      return getRouteInfo;
    }()
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data, resetScroll) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data, resetScroll);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value or `#top`
      // To mirror browsers


      if (hash === '' || hash === 'top') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function () {
      var _prefetch = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(url) {
        var _this3 = this;

        var asPath,
            options,
            parsed,
            pathname,
            parsedAs,
            localePathResult,
            pages,
            resolvedAs,
            rewrites,
            _yield2,
            rewritesResult,
            route,
            _args4 = arguments;

        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                asPath = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : url;
                options = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : {};
                parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
                pathname = parsed.pathname;

                if (false) {}

                _context4.next = 7;
                return this.pageLoader.getPageList();

              case 7:
                pages = _context4.sent;
                resolvedAs = asPath;

                if (true) {
                  _context4.next = 19;
                  break;
                }

                _context4.next = 12;
                return (0, _routeLoader.getClientBuildManifest)();

              case 12:
                _yield2 = _context4.sent;
                rewrites = _yield2.__rewrites;
                rewritesResult = (0, _resolveRewrites["default"])(addBasePath(addLocale(asPath, this.locale)), pages, rewrites, parsed.query, function (p) {
                  return resolveDynamicRoute(p, pages);
                }, this.locales);
                resolvedAs = delLocale(delBasePath(rewritesResult.asPath), this.locale);

                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                  // if this directly matches a page we need to update the href to
                  // allow the correct page chunk to be loaded
                  pathname = rewritesResult.resolvedHref;
                  parsed.pathname = pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

                _context4.next = 21;
                break;

              case 19:
                parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  parsed.pathname = pathname;
                  url = (0, _utils.formatWithValidation)(parsed);
                }

              case 21:
                route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

                if (false) {}

                return _context4.abrupt("return");

              case 24:
                _context4.next = 26;
                return Promise.all([this.pageLoader._isSsg(route).then(function (isSsg) {
                  return isSsg ? _this3._getStaticData(_this3.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : _this3.locale)) : false;
                }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function prefetch(_x18) {
        return _prefetch.apply(this, arguments);
      }

      return prefetch;
    }()
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                _context5.next = 4;
                return this.pageLoader.loadPage(route);

              case 4:
                componentResult = _context5.sent;

                if (!cancelled) {
                  _context5.next = 9;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 9:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context5.abrupt("return", componentResult);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function fetchComponent(_x19) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this4 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this4.clc) {
          _this4.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "_getStaticData",
    value: function _getStaticData(dataHref) {
      var _this5 = this;

      var _URL = new URL(dataHref, window.location.href),
          cacheKey = _URL.href;

      if (false) {}

      return fetchNextData(dataHref, this.isSsr).then(function (data) {
        _this5.sdc[cacheKey] = data;
        return data;
      });
    }
  }, {
    key: "_getServerData",
    value: function _getServerData(dataHref) {
      var _this6 = this;

      var _URL2 = new URL(dataHref, window.location.href),
          resourceKey = _URL2.href;

      if (this.sdr[resourceKey]) {
        return this.sdr[resourceKey];
      }

      return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(function (data) {
        delete _this6.sdr[resourceKey];
        return data;
      })["catch"](function (err) {
        delete _this6.sdr[resourceKey];
        throw err;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as, routeProps) {
      if (this.clc) {
        Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data, resetScroll) {
      return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
  }]);

  return Router;
}();

exports.default = Router;
Router.events = (0, _mitt["default"])();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  var auth = urlObj.auth,
      hostname = urlObj.hostname;
  var protocol = urlObj.protocol || '';
  var pathname = urlObj.pathname || '';
  var hash = urlObj.hash || '';
  var query = urlObj.query || '';
  var host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? "[".concat(hostname, "]") : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && _typeof(query) === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  var search = urlObj.search || query && "?".concat(query) || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  var globalBase = new URL( true ? 'http://n' : 0);
  var resolvedBase = base ? new URL(base, globalBase) : globalBase;

  var _URL = new URL(url, resolvedBase),
      pathname = _URL.pathname,
      searchParams = _URL.searchParams,
      search = _URL.search,
      hash = _URL.hash,
      href = _URL.href,
      origin = _URL.origin;

  if (origin !== globalBase.origin) {
    throw new Error("invariant: invalid relative URL, router received ".concat(url));
  }

  return {
    pathname: pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search: search,
    hash: hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  var query = {};
  searchParams.forEach(function (value, key) {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  var result = new URLSearchParams();
  Object.entries(urlQuery).forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      value.forEach(function (item) {
        return result.append(key, stringifyUrlQueryParam(item));
      });
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target) {
  for (var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    searchParamsList[_key - 1] = arguments[_key];
  }

  searchParamsList.forEach(function (searchParams) {
    Array.from(searchParams.keys()).forEach(function (key) {
      return target["delete"](key);
    });
    searchParams.forEach(function (value, key) {
      return target.append(key, value);
    });
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  var optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  var repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat: repeat,
    optional: optional
  };
}

function getRouteRegex(normalizedRoute) {
  var segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = segments.map(function (segment) {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      var _parseParameter = parseParameter(segment.slice(1, -1)),
          key = _parseParameter.key,
          optional = _parseParameter.optional,
          repeat = _parseParameter.repeat;

      groups[key] = {
        pos: groupIndex++,
        repeat: repeat,
        optional: optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return "/".concat(escapeRegex(segment));
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    var routeKeyCharCode = 97;
    var routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    var getSafeRouteKey = function getSafeRouteKey() {
      var routeKey = '';

      for (var i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    var routeKeys = {};
    var namedParameterizedRoute = segments.map(function (segment) {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        var _parseParameter2 = parseParameter(segment.slice(1, -1)),
            key = _parseParameter2.key,
            optional = _parseParameter2.optional,
            repeat = _parseParameter2.repeat; // replace any non-word characters since they can break
        // the named regex


        var cleanedKey = key.replace(/\W/g, '');
        var invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? "(?:/(?<".concat(cleanedKey, ">.+?))?") : "/(?<".concat(cleanedKey, ">.+?)") : "/(?<".concat(cleanedKey, ">[^/]+?)");
      } else {
        return "/".concat(escapeRegex(segment));
      }
    }).join('');
    return {
      re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
      groups: groups,
      routeKeys: routeKeys,
      namedRegex: "^".concat(namedParameterizedRoute, "(?:/)?$")
    };
  }

  return {
    re: new RegExp("^".concat(parameterizedRoute, "(?:/)?$")),
    groups: groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && _typeof(url) === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ main; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _container_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/home */ "./container/home/index.js");
/* harmony import */ var _container_about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/about */ "./container/about/index.js");
/* harmony import */ var _container_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../container/services */ "./container/services/index.js");
/* harmony import */ var _container_work__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../container/work */ "./container/work/index.js");
/* harmony import */ var _container_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../container/contact */ "./container/contact/index.js");
/* harmony import */ var _container_education__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../container/education */ "./container/education/index.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar/index.js");


var _jsxFileName = "D:\\Documents\\Projects\\devanshi_portfolio_next\\pages\\index.js";







function main() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container_home__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container_about__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container_services__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container_education__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container_work__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_container_contact__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
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

/***/ "./components/Card/card.module.scss":
/*!******************************************!*\
  !*** ./components/Card/card.module.scss ***!
  \******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"cardPort": "card_cardPort__26iE8",
	"hoverPort": "card_hoverPort__1LT02"
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

/***/ "./components/PortText/portText.module.scss":
/*!**************************************************!*\
  !*** ./components/PortText/portText.module.scss ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"portEduPercent": "portText_portEduPercent__2qL8A",
	"portLogoText": "portText_portLogoText__23_Xm",
	"portNavText": "portText_portNavText__1mEwN",
	"portHeaderText": "portText_portHeaderText__2yRRv",
	"portHeaderHomeText": "portText_portHeaderHomeText__3PdS2",
	"portHeaderCaption": "portText_portHeaderCaption__1cvNU",
	"portHeaderCaptionBold": "portText_portHeaderCaptionBold__-wrN5",
	"portHeadingText": "portText_portHeadingText__1O7Ll",
	"portHeadingCaption": "portText_portHeadingCaption__Bxz_b",
	"portParaText": "portText_portParaText__3RxZC",
	"portAboutCaption": "portText_portAboutCaption__1rJ61",
	"portParaAboutText": "portText_portParaAboutText__SIa-_",
	"portButtonText": "portText_portButtonText__21AIn",
	"portServiceSubHeadingText": "portText_portServiceSubHeadingText__21O8J",
	"portCounterText": "portText_portCounterText__2cdfb",
	"portCounterCaption": "portText_portCounterCaption__3-ayt",
	"portCardHeaderText": "portText_portCardHeaderText__2U3Yh",
	"portCardReadText": "portText_portCardReadText__2U1o9",
	"portHeaderTextPCard": "portText_portHeaderTextPCard__1rGc9",
	"portCardDateText": "portText_portCardDateText__2mxnf",
	"portTestimonialText": "portText_portTestimonialText__15ljK",
	"portCommentText": "portText_portCommentText__Dtkcy",
	"portTestimonialPText": "portText_portTestimonialPText__2DKBW",
	"portEduLeftText": "portText_portEduLeftText__2q5pB",
	"portTestimonialRoleText": "portText_portTestimonialRoleText__PWbj4",
	"portContactHeadingText": "portText_portContactHeadingText__1B8wY",
	"portContactDetailText": "portText_portContactDetailText__3cghn",
	"portCommentdetailText": "portText_portCommentdetailText__3-gFh",
	"portFooterText": "portText_portFooterText__2Suoc",
	"portFilterText": "portText_portFilterText__1d8q5",
	"portHoverCardText": "portText_portHoverCardText__2nkaH",
	"portSingleBlog": "portText_portSingleBlog__3mLPd",
	"portSingleBlogText": "portText_portSingleBlogText__KtWzt"
};


/***/ }),

/***/ "./container/about/about.module.scss":
/*!*******************************************!*\
  !*** ./container/about/about.module.scss ***!
  \*******************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"about": "about_about__1KJBC",
	"aboutImg": "about_aboutImg__QtFSO",
	"description": "about_description__sUMO6",
	"name": "about_name__1uvUS",
	"caption": "about_caption__26g-i",
	"des": "about_des__3rFAu",
	"portSocial": "about_portSocial__U4BJ0",
	"portSocialBtn": "about_portSocialBtn__2W5k0",
	"btnHover": "about_btnHover__243Ls"
};


/***/ }),

/***/ "./container/contact/contact.module.scss":
/*!***********************************************!*\
  !*** ./container/contact/contact.module.scss ***!
  \***********************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"contactContainer": "contact_contactContainer__2AoE5",
	"contactForm": "contact_contactForm__P-HhK",
	"buttonMargin": "contact_buttonMargin__GiHk7",
	"borderBottom": "contact_borderBottom__Hwq4j",
	"validMsg": "contact_validMsg__2agAQ",
	"contactInput": "contact_contactInput__2sZ4v",
	"borderApply": "contact_borderApply__200WC",
	"contactTextArea": "contact_contactTextArea__5Vf-K",
	"captionCon": "contact_captionCon__11SA4",
	"desCon": "contact_desCon__EEY0d"
};


/***/ }),

/***/ "./container/home/home.module.scss":
/*!*****************************************!*\
  !*** ./container/home/home.module.scss ***!
  \*****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"banner": "home_banner__g38-N",
	"containerH": "home_containerH__VjOa-",
	"header": "home_header__1Un6k",
	"desc": "home_desc__1emaX"
};


/***/ }),

/***/ "./container/services/service.module.scss":
/*!************************************************!*\
  !*** ./container/services/service.module.scss ***!
  \************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"serviceSec": "service_serviceSec__1jptG",
	"heading": "service_heading__26qrf",
	"mainbox": "service_mainbox__vhM-v",
	"divRow": "service_divRow__3IfFO",
	"box": "service_box__1QYxQ"
};


/***/ }),

/***/ "./container/work/work.module.scss":
/*!*****************************************!*\
  !*** ./container/work/work.module.scss ***!
  \*****************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"center": "work_center__1Aehj",
	"portHoverCardText": "work_portHoverCardText__3OpUu",
	"portfolio": "work_portfolio__3UkgB",
	"row": "work_row__1l9WT",
	"headText": "work_headText__XIk00",
	"pFilter": "work_pFilter__2uboK",
	"selItem": "work_selItem__2bElf",
	"item": "work_item__1aXBA",
	"hoverContext": "work_hoverContext__16yWZ",
	"relativeP": "work_relativeP__1BNFS",
	"align": "work_align__1jr7U"
};


/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \***********************************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/***/ (function(module) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*******************************************************************************************/
/***/ (function(module) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/***/ (function(module) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/***/ (function(module) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*********************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/** @license React v17.0.2
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

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
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
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
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

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
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
}
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
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
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

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("classnames");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-dom");;

/***/ }),

/***/ "react-rotating-text":
/*!**************************************!*\
  !*** external "react-rotating-text" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-rotating-text");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("regenerator-runtime");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9jb21wb25lbnRzL0NhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9jb21wb25lbnRzL0xvYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29tcG9uZW50cy9Qb3J0VGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL2NvbnRhaW5lci9hYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL2NvbnRhaW5lci9jb250YWN0L2luZGV4LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29udGFpbmVyL2VkdWNhdGlvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL2NvbnRhaW5lci9ob21lL2luZGV4LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29udGFpbmVyL3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29udGFpbmVyL3dvcmsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9saW5rLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGUtbG9hZGVyLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3dpdGgtcm91dGVyLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29tcG9uZW50cy9CdXR0b24vYnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29tcG9uZW50cy9DYXJkL2NhcmQubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9jb21wb25lbnRzL0xvYWRlci9sb2FkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9jb21wb25lbnRzL1BvcnRUZXh0L3BvcnRUZXh0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29udGFpbmVyL2Fib3V0L2Fib3V0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vY29udGFpbmVyL2NvbnRhY3QvY29udGFjdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL2NvbnRhaW5lci9ob21lL2hvbWUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9jb250YWluZXIvc2VydmljZXMvc2VydmljZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL2NvbnRhaW5lci93b3JrL3dvcmsubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY29uc3RydWN0LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0Ly4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvZXh0ZXJuYWwgXCJmb3JtaWtcIiIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2RldmFuc2hpX3BvcnRmb2xpb19uZXh0L2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvZXh0ZXJuYWwgXCJyZWFjdC1yb3RhdGluZy10ZXh0XCIiLCJ3ZWJwYWNrOi8vZGV2YW5zaGlfcG9ydGZvbGlvX25leHQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC9leHRlcm5hbCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9kZXZhbnNoaV9wb3J0Zm9saW9fbmV4dC9pZ25vcmVkfEQ6XFxEb2N1bWVudHNcXFByb2plY3RzXFxkZXZhbnNoaV9wb3J0Zm9saW9fbmV4dFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInZhcmlhbnQiLCJjbGFzc05hbWUiLCJpc0Rpc2FibGVkIiwiY2hpbGRyZW4iLCJpc0xvYWRpbmciLCJvbkNsaWNrIiwicmVzdCIsImNsYXNzTmFtZXMiLCJzdHlsZXMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJkZWZhdWx0UHJvcHMiLCJDYXJkIiwicHJvcHMiLCJMb2FkZXIiLCJzdHJpbmciLCJOYXZiYXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsInRvZ2dsZU5hdmJhciIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiUmVhY3RET00iLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJ0b2dnbGUiLCJjbGFzc0xpc3QiLCJhY3RpdmUiLCJQb3J0VGV4dCIsImNvbXBvbmVudCIsImlzUmVxdWlyZWQiLCJHaXRodWIiLCJMaW5rZWRpbiIsIlR3aXR0ZXIiLCJHbWFpbCIsIkFib3V0IiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJuYW1lIiwibGVuZ3RoIiwidGVsIiwidGVzdCIsIlNpZ251cEZvcm0iLCJmb3JtaWsiLCJ1c2VGb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwibWVzc2FnZSIsIm9uU3VibWl0IiwicmVzZXRGb3JtIiwiYWxlcnQiLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlU3VibWl0IiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlQmx1ciIsImNvbnRhY3RJbnB1dCIsIkVkdWNhdGlvbiIsIkhvbWUiLCJjb2xvciIsInBhZGRpbmdMZWZ0IiwiQ29tcHV0ZXIiLCJDb2RlIiwiU2V0dGluZ3MiLCJTZXJ2aWNlcyIsIlNlYXJjaCIsIldvcmsiLCJkYXRhIiwibGlDbGlja2VkIiwiaXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJjb25zb2xlIiwibG9nIiwic2VhcmNoSWNvbiIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwicmVxdWlyZSIsImV4cG9ydHMiLCJfcmVhY3QiLCJfcm91dGVyIiwiX3JvdXRlcjIiLCJfdXNlSW50ZXJzZWN0aW9uIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJlcnIiLCJjdXJMb2NhbGUiLCJsb2NhbGUiLCJpc01vZGlmaWVkRXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJ1c2VNZW1vIiwicmVzb2x2ZUhyZWYiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlZEFzIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwiaXNWaXNpYmxlIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJtYXAiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidGhlbiIsInZhbHVlIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInJlbCIsImNyb3NzT3JpZ2luIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJkZWZpbmVQcm9wZXJ0eSIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiZW50cnlwb2ludHMiLCJNYXAiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJtYXliZUV4ZWN1dGVTY3JpcHQiLCJmZXRjaFN0eWxlU2hlZXQiLCJmZXRjaCIsIm9rIiwidGV4dCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJlZmZlY3RpdmVUeXBlIiwib3V0cHV0IiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiTmV4dFJvdXRlciIsIl9yb3V0ZXJDb250ZXh0IiwiX3dpdGhSb3V0ZXIiLCJzaW5nbGV0b25Sb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVN0YXRlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1bmRlZmluZWQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImNhbGxiYWNrIiwiY3JlYXRlT2JzZXJ2ZXIiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiZGV0ZWN0RG9tYWluTG9jYWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJwYWdlIiwicmUiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJfcGF0aG5hbWUiLCJfcXVlcnkiLCJfYXMiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJpc1ByZXZpZXciLCJjb21wb25lbnRzIiwic2RjIiwic2RyIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiaXNSZWFkeSIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsInBhcnNlUmVsYXRpdmVVcmwiLCJjaGFuZ2UiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwiZ3NzcCIsImdpcCIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVsb2FkIiwiaGlzdG9yeSIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwibG9jYWxlQ2hhbmdlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJkZXRlY3RlZERvbWFpbiIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwicm91dGVQcm9wcyIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhcnNlZCIsImdldFBhZ2VMaXN0IiwicmV3cml0ZXMiLCJfX3Jld3JpdGVzIiwidXJsSXNOZXciLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsImdldFJvdXRlSW5mbyIsInJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJmZXRjaENvbXBvbmVudCIsIm5vdEZvdW5kUm91dGUiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJzaG91bGRTY3JvbGwiLCJfb3B0aW9ucyRzY3JvbGwiLCJyZXNldFNjcm9sbCIsIngiLCJ5IiwibG9hZEVycm9yRmFpbCIsImhhbmRsZVJvdXRlSW5mb0Vycm9yIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImxvYWRQYWdlIiwiY29tcG9uZW50UmVzdWx0IiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcFRyZWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiZm9ybWF0VXJsIiwicXVlcnlzdHJpbmciLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJkZXNjIiwic2xhc2hlZFByb3RvY29scyIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic3Vic3RyIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiZnJvbUNoYXJDb2RlIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwiUmVnRXhwIiwibmFtZWRSZWdleCIsImV4ZWNPbmNlIiwiZ2V0RGlzcGxheU5hbWUiLCJpc1Jlc1NlbnQiLCJfZm9ybWF0VXJsIiwidXNlZCIsImZpbmlzaGVkIiwiaGVhZGVyc1NlbnQiLCJfQXBwJHByb3RvdHlwZSIsInVybE9iamVjdEtleXMiLCJTUCIsIm1lYXN1cmUiLCJtYWluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlID0gcmVxdWlyZShcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZS5qc1wiKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcztcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwiLi4vTG9hZGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5zY3NzJztcblxuLy8gbWFpbiBidXR0b25cbmNvbnN0IEJ1dHRvbiA9ICh7XG4gIHZhcmlhbnQsXG4gIGNsYXNzTmFtZSxcbiAgaXNEaXNhYmxlZCxcbiAgY2hpbGRyZW4sXG4gIGlzTG9hZGluZyxcbiAgb25DbGljayxcbiAgLi4ucmVzdFxufSkgPT4gKFxuICA8YnV0dG9uXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCFpc0Rpc2FibGVkICYmICFpc0xvYWRpbmcgJiYgc3R5bGVzW3ZhcmlhbnRdLCB7XG4gICAgICBbc3R5bGVzLmRpc2FibGVdOiBpc0Rpc2FibGVkIHx8IGlzTG9hZGluZyxcbiAgICAgIFtjbGFzc05hbWVdOiAhIWNsYXNzTmFtZSxcbiAgICB9KX1cbiAgICBvbkNsaWNrPXtpc0Rpc2FibGVkIHx8IGlzTG9hZGluZyA/ICgpID0+IHt9IDogb25DbGlja31cbiAgICB7Li4ucmVzdH1cbiAgPlxuICAgIHtpc0xvYWRpbmcgJiYgPExvYWRlciAvPn1cbiAgICB7Y2hpbGRyZW59XG4gIDwvYnV0dG9uPlxuKTtcblxuQnV0dG9uLnByb3BUeXBlcyA9IHtcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcInBvcnRIb21lQnV0dG9uXCIsXG4gICAgXCJwb3J0UmVzdW1lXCIsXG4gICAgXCJwb3J0U29jaWFsQnV0dG9uXCIsXG4gICAgXCJkaXNhYmxlXCIsXG4gICAgXCJwb3J0TmF2QnV0dG9uXCIsXG4gICAgXCJwb3J0U2VydmljZUJ1dHRvblwiLFxuICBdKSxcbn07XG5cbkJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIHZhcmlhbnQ6IFwicG9ydEhvbWVCdXR0b25cIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbjtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jYXJkLm1vZHVsZS5zY3NzJztcblxuY29uc3QgQ2FyZCA9ICh7IGNoaWxkcmVuLCB2YXJpYW50LCBjbGFzc05hbWUsIC4uLnByb3BzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlc1t2YXJpYW50XX0gJHtjbGFzc05hbWV9YH0gey4uLnByb3BzfT5cbiAgICB7Y2hpbGRyZW59XG4gIDwvZGl2PlxuKTtcblxuQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXCJjYXJkUG9ydFwiLCBcImhvdmVyUG9ydFwiLCBcImNhcmRCbG9nXCJdKSxcbn07XG5cbkNhcmQuZGVmYXVsdFByb3BzID0ge1xuICBjbGFzc05hbWU6IFwiXCIsXG4gIHZhcmlhbnQ6IFwiY2FyZFBvcnRcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iLCJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9sb2FkZXIubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgTG9hZGVyID0gKHsgdmFyaWFudCA9IFwiYmFzaWNcIiwgY2xhc3NOYW1lIH0pID0+IChcbiAgPHN2Z1xuICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXNbdmFyaWFudF0sIHsgW2NsYXNzTmFtZV06ICEhY2xhc3NOYW1lIH0pfVxuICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgIGZpbGw9XCJub25lXCJcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgPlxuICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2VXaWR0aD1cIjRcIiAvPlxuICAgIDxwYXRoXG4gICAgICBmaWxsPVwiY3VycmVudENvbG9yXCJcbiAgICAgIGQ9XCJNNCAxMmE4IDggMCAwMTgtOFYwQzUuMzczIDAgMCA1LjM3MyAwIDEyaDR6bTIgNS4yOTFBNy45NjIgNy45NjIgMCAwMTQgMTJIMGMwIDMuMDQyIDEuMTM1IDUuODI0IDMgNy45MzhsMy0yLjY0N3pcIlxuICAgID48L3BhdGg+XG4gIDwvc3ZnPlxuKTtcblxuTG9hZGVyLnByb3BUeXBlcyA9IHtcbiAgdmFyaWFudDogUHJvcFR5cGVzLm9uZU9mKFtcImJhc2ljXCJdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgdmFyaWFudDogXCJiYXNpY1wiLFxuICBjbGFzc05hbWU6IFwiXCIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7XG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHRvZ2dsZU5hdmJhciA9ICgpID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIik7XG4gICAgaWYgKFJlYWN0RE9NLmZpbmRET01Ob2RlKGVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPT09IFwiZmxleFwiKSB7XG4gICAgICBSZWFjdERPTS5maW5kRE9NTm9kZShlbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKGVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZiYXJcIik7XG4gICAgICAgIGlmIChSZWFjdERPTS5maW5kRE9NTm9kZShlbGVtZW50KS5zdHlsZS5kaXNwbGF5ID09PSBcImZsZXhcIikge1xuICAgICAgICAgIFJlYWN0RE9NLmZpbmRET01Ob2RlKGVsZW1lbnQpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGVcIik7XG4gICAgdG9nZ2xlLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoZWFkZXI+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXdpZHRoXCI+XG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgICAgRGV2YW48c3Bhbj5zaGkuPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdi1idG5cIiBpZD1cInRvZ2dsZVwiIG9uQ2xpY2s9e3RvZ2dsZU5hdmJhcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItY29udGFpbmVyXCIgaWQ9XCJuYXZiYXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVOYXZiYXJ9IGNsYXNzTmFtZT1cImJsYW5rU3BhY2VcIiAvPlxuXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8jaG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcIm5hdi1saW5rLXdoaXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcGF0aG5hbWUgPT09IFwiI2hvbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8jYWJvdXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJuYXYtbGluay13aGl0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHBhdGhuYW1lID09PSBcIiNhYm91dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQWJvdXRcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8jc2VydmljZXNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoXCJuYXYtbGluay13aGl0ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHBhdGhuYW1lID09PSBcIiNzZXJ2aWNlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgU2VydmljZXNcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8jd29ya1wiPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcIm5hdi1saW5rLXdoaXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcGF0aG5hbWUgPT09IFwiI3dvcmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIFdvcmtcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC8jY29udGFjdFwiPlxuICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcIm5hdi1saW5rLXdoaXRlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZTogcGF0aG5hbWUgPT09IFwiI2NvbnRhY3RcIixcbiAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2hlYWRlcj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcG9ydFRleHQubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgUG9ydFRleHQgPSAoeyB2YXJpYW50LCBjb21wb25lbnQsIGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4gKFxuICA8ZGl2PlxuICAgIHtjb21wb25lbnQgPT09IFwiaDFcIiA/IChcbiAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3N0eWxlc1t2YXJpYW50XX0gJHtjbGFzc05hbWV9YH0gY29tcG9uZW50PXtjb21wb25lbnR9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L2gxPlxuICAgICkgOiAoXG4gICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlc1t2YXJpYW50XX0gJHtjbGFzc05hbWV9YH0gY29tcG9uZW50PXtjb21wb25lbnR9PlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICA8L3A+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5Qb3J0VGV4dC5wcm9wVHlwZXMgPSB7XG4gIHZhcmlhbnQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJwb3J0RWR1TGVmdFRleHRcIixcbiAgICBcInBvcnRFZHVQZXJjZW50XCIsXG4gICAgXCJwb3J0SGVhZGVyVGV4dFwiLFxuICAgIFwicG9ydEhlYWRlckhvbWVUZXh0XCIsXG4gICAgXCJwb3J0TG9nb1RleHRcIixcbiAgICBcInBvcnROYXZUZXh0XCIsXG4gICAgXCJjb250YWN0VGV4dEFyZWFcIixcbiAgICBcInBvcnRIZWFkZXJDYXB0aW9uXCIsXG4gICAgXCJwb3J0SGVhZGVyQ2FwdGlvbkJvbGRcIixcbiAgICBcInBvcnRIZWFkaW5nVGV4dFwiLFxuICAgIFwicG9ydEhlYWRpbmdDYXB0aW9uXCIsXG4gICAgXCJwb3J0UGFyYVRleHRcIixcbiAgICBcInBvcnRBYm91dENhcHRpb25cIixcbiAgICBcInBvcnRQYXJhQWJvdXRUZXh0XCIsXG4gICAgXCJwb3J0QnV0dG9uVGV4dFwiLFxuICAgIFwicG9ydFNlcnZpY2VTdWJIZWFkaW5nVGV4dFwiLFxuICAgIFwicG9ydENvdW50ZXJUZXh0XCIsXG4gICAgXCJwb3J0Q291bnRlckNhcHRpb25cIixcbiAgICBcInBvcnRDYXJkSGVhZGVyVGV4dFwiLFxuICAgIFwicG9ydENhcmRSZWFkVGV4dFwiLFxuICAgIFwicG9ydENhcmREYXRlVGV4dFwiLFxuICAgIFwicG9ydFRlc3RpbW9uaWFsVGV4dFwiLFxuICAgIFwicG9ydFRlc3RpbW9uaWFsUFRleHRcIixcbiAgICBcInBvcnRUZXN0aW1vbmlhbFJvbGVUZXh0XCIsXG4gICAgXCJwb3J0Q29udGFjdEhlYWRpbmdUZXh0XCIsXG4gICAgXCJwb3J0Q29udGFjdERldGFpbFRleHRcIixcbiAgICBcInBvcnRGaWx0ZXJUZXh0XCIsXG4gICAgXCJwb3J0RmxleFRleHRcIixcbiAgICBcInBvcnRIZWFkZXJUZXh0UENhcmRcIixcbiAgICBcInBvcnRIb3ZlckNhcmRUZXh0XCIsXG4gICAgXCJwb3J0U2luZ2xlQmxvZ1wiLFxuICAgIFwicG9ydFNpbmdsZUJsb2dUZXh0XCIsXG4gICAgXCJwb3J0Q29tbWVudFRleHRcIixcbiAgICBcInBvcnRDb21tZW50ZGV0YWlsVGV4dFwiLFxuICBdKSxcbiAgY29tcG9uZW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxufTtcblxuUG9ydFRleHQuZGVmYXVsdFByb3BzID0ge1xuICB2YXJpYW50OiBcInBvcnRIZWFkZXJUZXh0XCIsXG4gIGNvbXBvbmVudDogXCJcIixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvcnRUZXh0O1xuIiwiaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcclxuaW1wb3J0IEdpdGh1YiBmcm9tIFwiLi4vLi4vcHVibGljL3N2Zy9sb2dvLWdpdGh1Yi5zdmdcIjtcclxuaW1wb3J0IExpbmtlZGluIGZyb20gXCIuLi8uLi9wdWJsaWMvc3ZnL2xvZ28tbGlua2VkaW4uc3ZnXCI7XHJcbmltcG9ydCBUd2l0dGVyIGZyb20gXCIuLi8uLi9wdWJsaWMvc3ZnL2xvZ28tdHdpdHRlci5zdmdcIjtcclxuaW1wb3J0IEdtYWlsIGZyb20gXCIuLi8uLi9wdWJsaWMvc3ZnL21haWwuc3ZnXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vYWJvdXQubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmNvbnN0IEFib3V0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPVwiYWJvdXRcIj5cclxuICAgICAgPGFydGljbGUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5hYm91dCwgXCJiZy1wcmltYXJ5XCIpfT5cclxuICAgICAgICA8cGljdHVyZSBjbGFzc05hbWU9e3N0eWxlcy5hYm91dEltZ30+XHJcbiAgICAgICAgICA8c291cmNlXHJcbiAgICAgICAgICAgIG1lZGlhPVwiKG1heC13aWR0aDoxMDI1cHgpXCJcclxuICAgICAgICAgICAgc3JjU2V0PVwiL2ltYWdlcy9hYm91dC1pbWctbGcuanBnXCJcclxuICAgICAgICAgICAgdHlwZT1cImltYWdlLmpwZ1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2Fib3V0LWltZy1sZy5qcGdcIiAvPlxyXG4gICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLm5hbWV9PkRldmFuc2hpIERlc2FpPC9oMj5cclxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9e3N0eWxlcy5jYXB0aW9ufT5GdWxsLXN0YWNrIERldmVsb3BlcjwvaDM+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXN9PlxyXG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciwgYWRpcGlzaWNpbmcgZWxpdC4gVGVtcG9yaWJ1c1xyXG4gICAgICAgICAgICBub2JpcyBuZXF1ZSwgZGVzZXJ1bnQgbnVsbGEgaGljIGF1dGVtLCBldmVuaWV0IGFwZXJpYW0gYWxpcXVpZFxyXG4gICAgICAgICAgICBlbGlnZW5kaSwgYXV0IHBvc3NpbXVzIG9iY2FlY2F0aSEgRWFydW0sIGN1bSBoaWMuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcnRTb2NpYWx9PlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Rlc2FpZGV2YW5zaGlcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3J0U29jaWFsQnRufVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInBvcnRTb2NpYWxCdXR0b25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxHaXRodWIgY2xhc3NOYW1lPXtzdHlsZXMuYnRuSG92ZXJ9IGhlaWdodD17MTh9IHdpZHRoPXsxOH0gLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwid3d3LmxpbmtlZGluLmNvbS9pbi9kZXZhbnNoaS1kZXNhaS01NzE2YmIxODJcIj5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wb3J0U29jaWFsQnRufVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInBvcnRTb2NpYWxCdXR0b25cIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rZWRpbiBjbGFzc05hbWU9e3N0eWxlcy5idG5Ib3Zlcn0gaGVpZ2h0PXsxOH0gd2lkdGg9ezE4fSAvPlxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0RldmFuc2g3MDc2NTkyM1wiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBvcnRTb2NpYWxCdG59XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicG9ydFNvY2lhbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFR3aXR0ZXIgY2xhc3NOYW1lPXtzdHlsZXMuYnRuSG92ZXJ9IGhlaWdodD17MTh9IHdpZHRoPXsxOH0gLz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnRhY3QuZGRldmFuc2hpQGdtYWlsLmNvbVwiPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBvcnRTb2NpYWxCdG59XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwicG9ydFNvY2lhbEJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEdtYWlsIGNsYXNzTmFtZT17c3R5bGVzLmJ0bkhvdmVyfSBoZWlnaHQ9ezE4fSB3aWR0aD17MTh9IC8+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbj5Eb3dubG9hZCBjdjwvQnV0dG9uPlxyXG4gICAgICAgIDwvYXNpZGU+XHJcbiAgICAgIDwvYXJ0aWNsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9CdXR0b25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vY29udGFjdC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuLy8gQSBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbi4gVGhpcyBtdXN0IHJldHVybiBhbiBvYmplY3Rcbi8vIHdoaWNoIGtleXMgYXJlIHN5bW1ldHJpY2FsIHRvIG91ciB2YWx1ZXMvaW5pdGlhbFZhbHVlc1xuY29uc3QgdmFsaWRhdGUgPSAodmFsdWVzKSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IHt9O1xuICBpZiAoIXZhbHVlcy5uYW1lKSB7XG4gICAgZXJyb3JzLm5hbWUgPSBcIlJlcXVpcmVkXCI7XG4gIH0gZWxzZSBpZiAodmFsdWVzLm5hbWUubGVuZ3RoID4gMTUpIHtcbiAgICBlcnJvcnMubmFtZSA9IFwiTXVzdCBiZSAxNSBjaGFyYWN0ZXJzIG9yIGxlc3NcIjtcbiAgfVxuXG4gIGlmICghdmFsdWVzLnRlbCkge1xuICAgIGVycm9ycy50ZWwgPSBcIlJlcXVpcmVkXCI7XG4gIH0gZWxzZSBpZiAoIS9eWytdP1swLTldezN9WzAtOV17M31bMC05XXs0LDZ9JC9pLnRlc3QodmFsdWVzLnRlbCkpIHtcbiAgICBlcnJvcnMudGVsID0gXCJJbnZhbGlkIHBob25lIG51bWJlclwiO1xuICB9XG5cbiAgcmV0dXJuIGVycm9ycztcbn07XG5cbmNvbnN0IFNpZ251cEZvcm0gPSAoKSA9PiB7XG4gIC8vIFBhc3MgdGhlIHVzZUZvcm1paygpIGhvb2sgaW5pdGlhbCBmb3JtIHZhbHVlcywgYSB2YWxpZGF0ZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW5cbiAgLy8gZm9ybSB2YWx1ZXMgY2hhbmdlIG9yIGZpZWxkcyBhcmUgYmx1cnJlZCwgYW5kIGEgc3VibWl0IGZ1bmN0aW9uIHRoYXQgd2lsbFxuICAvLyBiZSBjYWxsZWQgd2hlbiB0aGUgZm9ybSBpcyBzdWJtaXR0ZWRcbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBuYW1lOiBcIlwiLFxuICAgICAgdGVsOiBcIlwiLFxuICAgICAgbWVzc2FnZTogXCJcIixcbiAgICB9LFxuICAgIHZhbGlkYXRlLFxuICAgIG9uU3VibWl0OiAodmFsdWVzLCB7IHJlc2V0Rm9ybSB9KSA9PiB7XG4gICAgICByZXNldEZvcm0oKTtcbiAgICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KHZhbHVlcywgbnVsbCwgMikpO1xuICAgIH0sXG4gIH0pO1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGlkPVwiY29udGFjdFwiIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWVzKHN0eWxlcy5jb250YWN0Q29udGFpbmVyLCBcImJnLXByaW1hcnlcIil9PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuY2FwdGlvbkNvbn0+Q29udGFjdDwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRlc0Nvbn0+R0VUIElOIFRPVUNIPC9wPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RGb3JtfT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5uYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2Zvcm1pay5oYW5kbGVCbHVyfVxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhY3RJbnB1dFwiXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWlrLmVycm9ycy5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgPyBzdHlsZXMuYm9yZGVyQXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICA6IHN0eWxlcy5jb250YWN0SW5wdXRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGlkPVwidGVsXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZWxcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17Zm9ybWlrLmhhbmRsZUJsdXJ9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy50ZWx9XG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFjdElucHV0XCJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGhvbmUgTnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgICAgICAgIGZvcm1pay5lcnJvcnMudGVsID8gc3R5bGVzLmJvcmRlckFwcGx5IDogc3R5bGVzLmNvbnRhY3RJbnB1dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhY3RUZXh0QXJlYVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhY3RUZXh0QXJlYX1cbiAgICAgICAgICAgICAgY29tcG9uZW50PVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkhvdyBjYW4gd2UgaGVscCB5b3U/XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uTWFyZ2lufT5cbiAgICAgICAgICAgIFNFTkQgTUVTU0FHRVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ251cEZvcm07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IFBvcnRUZXh0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1BvcnRUZXh0XCI7XG5cbmNvbnN0IEVkdWNhdGlvbiA9ICgpID0+IChcbiAgPHNlY3Rpb24gaWQ9XCJFZHVjYXRpb25cIiBjbGFzc05hbWU9XCJhbGlnbm1lbnQgYmctcHJpbWFyeVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dEFsaWduXCI+XG4gICAgICA8UG9ydFRleHQgdmFyaWFudD1cInBvcnRIZWFkaW5nVGV4dFwiPkVkdWNhdGlvbiBhbmQgU2tpbGxzPC9Qb3J0VGV4dD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRib3hcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdHN1YmJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRUZXh0QWxpZ25cIj5cbiAgICAgICAgICA8UG9ydFRleHQgdmFyaWFudD1cInBvcnRFZHVMZWZ0VGV4dFwiPjIwMTAtMjAxMjwvUG9ydFRleHQ+XG4gICAgICAgICAgPFBvcnRUZXh0IHZhcmlhbnQ9XCJwb3J0RWR1TGVmdFRleHRcIj5HcmFwaGljIERlc2lnbmVyPC9Qb3J0VGV4dD5cbiAgICAgICAgICA8UG9ydFRleHQgdmFyaWFudD1cInBvcnRFZHVMZWZ0VGV4dFwiPlxuICAgICAgICAgICAgSW50ZXJuYXRpb25hbCBEZXNpZ24gSW5zdGl0dXRlXG4gICAgICAgICAgPC9Qb3J0VGV4dD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFRleHRBbGlnblwiPlxuICAgICAgICAgIDxQb3J0VGV4dCB2YXJpYW50PVwicG9ydEVkdUxlZnRUZXh0XCI+MjAxMC0yMDEyPC9Qb3J0VGV4dD5cbiAgICAgICAgICA8UG9ydFRleHQgdmFyaWFudD1cInBvcnRFZHVMZWZ0VGV4dFwiPkdyYXBoaWMgRGVzaWduZXI8L1BvcnRUZXh0PlxuICAgICAgICAgIDxQb3J0VGV4dCB2YXJpYW50PVwicG9ydEVkdUxlZnRUZXh0XCI+XG4gICAgICAgICAgICBJbnRlcm5hdGlvbmFsIERlc2lnbiBJbnN0aXR1dGVcbiAgICAgICAgICA8L1BvcnRUZXh0PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJhbGlnblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcnNcIj5cbiAgICAgICAgICA8UG9ydFRleHQgdmFyaWFudD1cInBvcnRFZHVQZXJjZW50XCIgY29tcG9uZW50PVwiaDFcIj5cbiAgICAgICAgICAgIDgwJVxuICAgICAgICAgIDwvUG9ydFRleHQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgICAgPFBvcnRUZXh0IHZhcmlhbnQ9XCJwb3J0SGVhZGluZ0NhcHRpb25cIj5KQVZBU0NSSVBUPC9Qb3J0VGV4dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaHQyXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJzXCI+XG4gICAgICAgICAgPFBvcnRUZXh0IHZhcmlhbnQ9XCJwb3J0RWR1UGVyY2VudFwiIGNvbXBvbmVudD1cImgxXCI+XG4gICAgICAgICAgICA3MiVcbiAgICAgICAgICA8L1BvcnRUZXh0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2tcIj5cbiAgICAgICAgICAgIDxQb3J0VGV4dCB2YXJpYW50PVwicG9ydEhlYWRpbmdDYXB0aW9uXCI+UkVBQ1Q8L1BvcnRUZXh0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJodDNcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcnNcIj5cbiAgICAgICAgICA8UG9ydFRleHQgdmFyaWFudD1cInBvcnRFZHVQZXJjZW50XCIgY29tcG9uZW50PVwiaDFcIj5cbiAgICAgICAgICAgIDg1JVxuICAgICAgICAgIDwvUG9ydFRleHQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja1wiPlxuICAgICAgICAgICAgPFBvcnRUZXh0IHZhcmlhbnQ9XCJwb3J0SGVhZGluZ0NhcHRpb25cIj5ORVhUSlM8L1BvcnRUZXh0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJodDRcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhbGlnblwiPlxuICAgICAgPGEgaHJlZj1cIi9SZXN1bWVcIj5cbiAgICAgICAgPEJ1dHRvbj5WaWV3IE1vcmU8L0J1dHRvbj5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRWR1Y2F0aW9uO1xuIiwiaW1wb3J0IFJlYWN0Um90YXRpbmdUZXh0IGZyb20gXCJyZWFjdC1yb3RhdGluZy10ZXh0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2hvbWUubW9kdWxlLnNjc3NcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGlkPVwiaG9tZVwiIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhzdHlsZXMuYmFubmVyLCBcImJnLXByaW1hcnlcIil9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lckh9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgSGkhIEknbVxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICBEZXZhbnNoaSBEZXNhaVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY30+XG4gICAgICAgICAgICBDcmVhdGl2ZVxuICAgICAgICAgICAgPFJlYWN0Um90YXRpbmdUZXh0XG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiM0ZGE4ZGFcIiwgcGFkZGluZ0xlZnQ6IFwiMTBweFwiIH19XG4gICAgICAgICAgICAgIGl0ZW1zPXtbXCJEZXNpZ25lclwiLCBcIkRldmVsb3BlclwiXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIiwiaW1wb3J0IENvbXB1dGVyIGZyb20gXCIuLi8uLi9wdWJsaWMvc3ZnL2xhcHRvcF93aGl0ZV80OGRwLnN2Z1wiO1xuaW1wb3J0IENvZGUgZnJvbSBcIi4uLy4uL3B1YmxpYy9zdmcvY29kZV93aGl0ZV80OGRwLnN2Z1wiO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gXCIuLi8uLi9wdWJsaWMvc3ZnL3N1cHBvcnRfd2hpdGVfNDhkcC5zdmdcIjtcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQnV0dG9uXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3NlcnZpY2UubW9kdWxlLnNjc3NcIjtcblxuY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzZWN0aW9uIGlkPVwic2VydmljZXNcIiBjbGFzc05hbWU9e3N0eWxlcy5zZXJ2aWNlU2VjfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkaW5nfT5cbiAgICAgICAgICA8aDI+U2VydmljZXM8L2gyPlxuICAgICAgICAgIDxwPldIQVQgQ0FOIEkgRE88L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW5ib3h9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInBvcnRTZXJ2aWNlQnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxDb21wdXRlciAvPlxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRpdlJvd30+XG4gICAgICAgICAgICAgIDxoMz5XZWIgRGVzaWduPC9oMz5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cbiAgICAgICAgICAgICAgICBJbnZlbnRvcmUgZXhwZWRpdGEgZXQgdmVuaWFtIGF1dCBudWxsYSBpcHNhIGVuaW0gZXggaW4sIHF1YWVyYXQsXG4gICAgICAgICAgICAgICAgaGljIGFzcGVybmF0dXIgdm9sdXB0YXRlbSBkZWJpdGlzLCBhY2N1c2FudGl1bSBpdGFxdWUhXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInBvcnRTZXJ2aWNlQnV0dG9uXCI+XG4gICAgICAgICAgICAgIDxDb2RlIC8+XG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGl2Um93fT5cbiAgICAgICAgICAgICAgPGgzPldlYiBEZXZlbG9wbWVudDwvaDM+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTYWVwZVxuICAgICAgICAgICAgICAgIHZlbCByZWljaWVuZGlzIGxhYm9ydW0gZG9sb3IgcmVjdXNhbmRhZSBkZWxlbml0aSByZXB1ZGlhbmRhZSBhdXRcbiAgICAgICAgICAgICAgICBsaWJlcm8gYW5pbWkuIEVhcXVlIHF1aSBkZWJpdGlzIGFwZXJpYW0gZXN0IHVsbGFtP1xuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveH0+XG4gICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJwb3J0U2VydmljZUJ1dHRvblwiPlxuICAgICAgICAgICAgICA8U2V0dGluZ3MgLz5cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kaXZSb3d9PlxuICAgICAgICAgICAgICA8aDM+U3VwcG9ydDwvaDM+XG4gICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLCBhZGlwaXNpY2luZyBlbGl0LiBFaXVzXG4gICAgICAgICAgICAgICAgZXN0IG1vbGVzdGlhcyBleGNlcHR1cmkgYXRxdWUgZGVzZXJ1bnQgcXVvZCBkb2xvcmUsIGF1dCBiZWF0YWVcbiAgICAgICAgICAgICAgICBkaXN0aW5jdGlvIHVuZGUgcXVhZSBhbGlxdWFtIGlzdGUgYXNwZXJpb3JlcyB2ZXJvLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlcztcbiIsImltcG9ydCBDYXJkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NhcmRcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uLy4uL3B1YmxpYy9zdmcvc2VhcmNoX3doaXRlXzQ4ZHAuc3ZnXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0J1dHRvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi93b3JrLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBXb3JrID0gKHsgZGF0YSB9KSA9PiB7XG4gIGZ1bmN0aW9uIGxpQ2xpY2tlZCgpIHtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImxpc3RJdGVtc1wiKTtcbiAgICBjb25zb2xlLmxvZyhpdGVtKTtcbiAgICAvLyB4LmNsYXNzTGlzdC5hZGQoJ3NlbEl0ZW0nKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGlkPVwid29ya1wiIGNsYXNzTmFtZT17c3R5bGVzLmNlbnRlcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBvcnRmb2xpb30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZFRleHR9PlByb2plY3RzPC9oMj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBGaWx0ZXJ9PlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+QWxsPC9saT5cbiAgICAgICAgICAgICAgPGxpPldlYiBEZXNpZ248L2xpPlxuICAgICAgICAgICAgICA8bGk+QXBwbGljYXRpb248L2xpPlxuICAgICAgICAgICAgICA8bGk+RGV2ZWxvcG1lbnQ8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfT5cbiAgICAgICAgICA8Q2FyZCB2YXJpYW50PVwiY2FyZFBvcnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmVsYXRpdmVQfT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzLzI0OTc3Mi5qcGdcIiBhbHQ9XCJcIiAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRDb250ZW50fT5cbiAgICAgICAgICAgICAgICA8Q2FyZCB2YXJpYW50PVwiaG92ZXJQb3J0XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvdmVyQ29udGV4dH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwb3J0SG92ZXJDYXJkVGV4dFwiPkFwcGxpY2F0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPFNlYXJjaCBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgIDxDYXJkIHZhcmlhbnQ9XCJjYXJkUG9ydFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZWxhdGl2ZVB9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvMjQ5NzcyLmpwZ1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZENvbnRlbnR9PlxuICAgICAgICAgICAgICAgIDxDYXJkIHZhcmlhbnQ9XCJob3ZlclBvcnRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG92ZXJDb250ZXh0fT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInBvcnRIb3ZlckNhcmRUZXh0XCI+QXBwbGljYXRpb248L2gzPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoIGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaEljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgPENhcmQgdmFyaWFudD1cImNhcmRQb3J0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlbGF0aXZlUH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy8yNDk3NzIuanBnXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkQ29udGVudH0+XG4gICAgICAgICAgICAgICAgPENhcmQgdmFyaWFudD1cImhvdmVyUG9ydFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob3ZlckNvbnRleHR9PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicG9ydEhvdmVyQ2FyZFRleHRcIj5BcHBsaWNhdGlvbjwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDxTZWFyY2ggY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWxpZ259PlxuICAgICAgICAgIDxhIGhyZWY9XCIvUG9ydGZvbGlvUGFnZVwiPlxuICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicG9ydEhvbWVCdXR0b25cIj5WaWV3IE1vcmU8L0J1dHRvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFdvcms7XG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgSG9tZSBmcm9tIFwiLi4vY29udGFpbmVyL2hvbWVcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vY29udGFpbmVyL2Fib3V0XCI7XG5pbXBvcnQgU2VydmljZXMgZnJvbSBcIi4uL2NvbnRhaW5lci9zZXJ2aWNlc1wiO1xuaW1wb3J0IFdvcmsgZnJvbSBcIi4uL2NvbnRhaW5lci93b3JrXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vY29udGFpbmVyL2NvbnRhY3RcIjtcbmltcG9ydCBFZHVjYXRpb24gZnJvbSBcIi4uL2NvbnRhaW5lci9lZHVjYXRpb25cIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2YmFyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgPEhvbWUgLz5cbiAgICAgICAgPEFib3V0IC8+XG4gICAgICAgIDxTZXJ2aWNlcyAvPlxuICAgICAgICA8RWR1Y2F0aW9uIC8+XG4gICAgICAgIDxXb3JrIC8+XG4gICAgICAgIDxDb250YWN0IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInBvcnRIb21lQnV0dG9uXCI6IFwiYnV0dG9uX3BvcnRIb21lQnV0dG9uX18ydDd3cVwiLFxuXHRcInBvcnRTb2NpYWxCdXR0b25cIjogXCJidXR0b25fcG9ydFNvY2lhbEJ1dHRvbl9fM0lRQ2JcIixcblx0XCJwb3J0UmVzdW1lXCI6IFwiYnV0dG9uX3BvcnRSZXN1bWVfXzNHM3ppXCIsXG5cdFwicG9ydFNlcnZpY2VCdXR0b25cIjogXCJidXR0b25fcG9ydFNlcnZpY2VCdXR0b25fX3dsSmIxXCIsXG5cdFwiZGlzYWJsZVwiOiBcImJ1dHRvbl9kaXNhYmxlX19Gd1lZNVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFBvcnRcIjogXCJjYXJkX2NhcmRQb3J0X18yNmlFOFwiLFxuXHRcImhvdmVyUG9ydFwiOiBcImNhcmRfaG92ZXJQb3J0X18xTFQwMlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFzaWNcIjogXCJsb2FkZXJfYmFzaWNfXzVVMnNXXCIsXG5cdFwic3BpblwiOiBcImxvYWRlcl9zcGluX18yLXRpX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicG9ydEVkdVBlcmNlbnRcIjogXCJwb3J0VGV4dF9wb3J0RWR1UGVyY2VudF9fMnFMOEFcIixcblx0XCJwb3J0TG9nb1RleHRcIjogXCJwb3J0VGV4dF9wb3J0TG9nb1RleHRfXzIzX1htXCIsXG5cdFwicG9ydE5hdlRleHRcIjogXCJwb3J0VGV4dF9wb3J0TmF2VGV4dF9fMW1Fd05cIixcblx0XCJwb3J0SGVhZGVyVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRIZWFkZXJUZXh0X18yeVJSdlwiLFxuXHRcInBvcnRIZWFkZXJIb21lVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRIZWFkZXJIb21lVGV4dF9fM1BkUzJcIixcblx0XCJwb3J0SGVhZGVyQ2FwdGlvblwiOiBcInBvcnRUZXh0X3BvcnRIZWFkZXJDYXB0aW9uX18xY3ZOVVwiLFxuXHRcInBvcnRIZWFkZXJDYXB0aW9uQm9sZFwiOiBcInBvcnRUZXh0X3BvcnRIZWFkZXJDYXB0aW9uQm9sZF9fLXdyTjVcIixcblx0XCJwb3J0SGVhZGluZ1RleHRcIjogXCJwb3J0VGV4dF9wb3J0SGVhZGluZ1RleHRfXzFPN0xsXCIsXG5cdFwicG9ydEhlYWRpbmdDYXB0aW9uXCI6IFwicG9ydFRleHRfcG9ydEhlYWRpbmdDYXB0aW9uX19CeHpfYlwiLFxuXHRcInBvcnRQYXJhVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRQYXJhVGV4dF9fM1J4WkNcIixcblx0XCJwb3J0QWJvdXRDYXB0aW9uXCI6IFwicG9ydFRleHRfcG9ydEFib3V0Q2FwdGlvbl9fMXJKNjFcIixcblx0XCJwb3J0UGFyYUFib3V0VGV4dFwiOiBcInBvcnRUZXh0X3BvcnRQYXJhQWJvdXRUZXh0X19TSWEtX1wiLFxuXHRcInBvcnRCdXR0b25UZXh0XCI6IFwicG9ydFRleHRfcG9ydEJ1dHRvblRleHRfXzIxQUluXCIsXG5cdFwicG9ydFNlcnZpY2VTdWJIZWFkaW5nVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRTZXJ2aWNlU3ViSGVhZGluZ1RleHRfXzIxTzhKXCIsXG5cdFwicG9ydENvdW50ZXJUZXh0XCI6IFwicG9ydFRleHRfcG9ydENvdW50ZXJUZXh0X18yY2RmYlwiLFxuXHRcInBvcnRDb3VudGVyQ2FwdGlvblwiOiBcInBvcnRUZXh0X3BvcnRDb3VudGVyQ2FwdGlvbl9fMy1heXRcIixcblx0XCJwb3J0Q2FyZEhlYWRlclRleHRcIjogXCJwb3J0VGV4dF9wb3J0Q2FyZEhlYWRlclRleHRfXzJVM1loXCIsXG5cdFwicG9ydENhcmRSZWFkVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRDYXJkUmVhZFRleHRfXzJVMW85XCIsXG5cdFwicG9ydEhlYWRlclRleHRQQ2FyZFwiOiBcInBvcnRUZXh0X3BvcnRIZWFkZXJUZXh0UENhcmRfXzFyR2M5XCIsXG5cdFwicG9ydENhcmREYXRlVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRDYXJkRGF0ZVRleHRfXzJteG5mXCIsXG5cdFwicG9ydFRlc3RpbW9uaWFsVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRUZXN0aW1vbmlhbFRleHRfXzE1bGpLXCIsXG5cdFwicG9ydENvbW1lbnRUZXh0XCI6IFwicG9ydFRleHRfcG9ydENvbW1lbnRUZXh0X19EdGtjeVwiLFxuXHRcInBvcnRUZXN0aW1vbmlhbFBUZXh0XCI6IFwicG9ydFRleHRfcG9ydFRlc3RpbW9uaWFsUFRleHRfXzJES0JXXCIsXG5cdFwicG9ydEVkdUxlZnRUZXh0XCI6IFwicG9ydFRleHRfcG9ydEVkdUxlZnRUZXh0X18ycTVwQlwiLFxuXHRcInBvcnRUZXN0aW1vbmlhbFJvbGVUZXh0XCI6IFwicG9ydFRleHRfcG9ydFRlc3RpbW9uaWFsUm9sZVRleHRfX1BXYmo0XCIsXG5cdFwicG9ydENvbnRhY3RIZWFkaW5nVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRDb250YWN0SGVhZGluZ1RleHRfXzFCOHdZXCIsXG5cdFwicG9ydENvbnRhY3REZXRhaWxUZXh0XCI6IFwicG9ydFRleHRfcG9ydENvbnRhY3REZXRhaWxUZXh0X18zY2doblwiLFxuXHRcInBvcnRDb21tZW50ZGV0YWlsVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRDb21tZW50ZGV0YWlsVGV4dF9fMy1nRmhcIixcblx0XCJwb3J0Rm9vdGVyVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRGb290ZXJUZXh0X18yU3VvY1wiLFxuXHRcInBvcnRGaWx0ZXJUZXh0XCI6IFwicG9ydFRleHRfcG9ydEZpbHRlclRleHRfXzFkOHE1XCIsXG5cdFwicG9ydEhvdmVyQ2FyZFRleHRcIjogXCJwb3J0VGV4dF9wb3J0SG92ZXJDYXJkVGV4dF9fMm5rYUhcIixcblx0XCJwb3J0U2luZ2xlQmxvZ1wiOiBcInBvcnRUZXh0X3BvcnRTaW5nbGVCbG9nX18zbUxQZFwiLFxuXHRcInBvcnRTaW5nbGVCbG9nVGV4dFwiOiBcInBvcnRUZXh0X3BvcnRTaW5nbGVCbG9nVGV4dF9fS3RXenRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFib3V0XCI6IFwiYWJvdXRfYWJvdXRfXzFLSkJDXCIsXG5cdFwiYWJvdXRJbWdcIjogXCJhYm91dF9hYm91dEltZ19fUXRGU09cIixcblx0XCJkZXNjcmlwdGlvblwiOiBcImFib3V0X2Rlc2NyaXB0aW9uX19zVU1PNlwiLFxuXHRcIm5hbWVcIjogXCJhYm91dF9uYW1lX18xdXZVU1wiLFxuXHRcImNhcHRpb25cIjogXCJhYm91dF9jYXB0aW9uX18yNmctaVwiLFxuXHRcImRlc1wiOiBcImFib3V0X2Rlc19fM3JGQXVcIixcblx0XCJwb3J0U29jaWFsXCI6IFwiYWJvdXRfcG9ydFNvY2lhbF9fVTRCSjBcIixcblx0XCJwb3J0U29jaWFsQnRuXCI6IFwiYWJvdXRfcG9ydFNvY2lhbEJ0bl9fMlc1azBcIixcblx0XCJidG5Ib3ZlclwiOiBcImFib3V0X2J0bkhvdmVyX18yNDNMc1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFjdENvbnRhaW5lclwiOiBcImNvbnRhY3RfY29udGFjdENvbnRhaW5lcl9fMkFvRTVcIixcblx0XCJjb250YWN0Rm9ybVwiOiBcImNvbnRhY3RfY29udGFjdEZvcm1fX1AtSGhLXCIsXG5cdFwiYnV0dG9uTWFyZ2luXCI6IFwiY29udGFjdF9idXR0b25NYXJnaW5fX0dpSGs3XCIsXG5cdFwiYm9yZGVyQm90dG9tXCI6IFwiY29udGFjdF9ib3JkZXJCb3R0b21fX0h3cTRqXCIsXG5cdFwidmFsaWRNc2dcIjogXCJjb250YWN0X3ZhbGlkTXNnX18yYWdBUVwiLFxuXHRcImNvbnRhY3RJbnB1dFwiOiBcImNvbnRhY3RfY29udGFjdElucHV0X18yc1o0dlwiLFxuXHRcImJvcmRlckFwcGx5XCI6IFwiY29udGFjdF9ib3JkZXJBcHBseV9fMjAwV0NcIixcblx0XCJjb250YWN0VGV4dEFyZWFcIjogXCJjb250YWN0X2NvbnRhY3RUZXh0QXJlYV9fNVZmLUtcIixcblx0XCJjYXB0aW9uQ29uXCI6IFwiY29udGFjdF9jYXB0aW9uQ29uX18xMVNBNFwiLFxuXHRcImRlc0NvblwiOiBcImNvbnRhY3RfZGVzQ29uX19FRVkwZFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYmFubmVyXCI6IFwiaG9tZV9iYW5uZXJfX2czOC1OXCIsXG5cdFwiY29udGFpbmVySFwiOiBcImhvbWVfY29udGFpbmVySF9fVmpPYS1cIixcblx0XCJoZWFkZXJcIjogXCJob21lX2hlYWRlcl9fMVVuNmtcIixcblx0XCJkZXNjXCI6IFwiaG9tZV9kZXNjX18xZW1hWFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VydmljZVNlY1wiOiBcInNlcnZpY2Vfc2VydmljZVNlY19fMWpwdEdcIixcblx0XCJoZWFkaW5nXCI6IFwic2VydmljZV9oZWFkaW5nX18yNnFyZlwiLFxuXHRcIm1haW5ib3hcIjogXCJzZXJ2aWNlX21haW5ib3hfX3ZoTS12XCIsXG5cdFwiZGl2Um93XCI6IFwic2VydmljZV9kaXZSb3dfXzNJZkZPXCIsXG5cdFwiYm94XCI6IFwic2VydmljZV9ib3hfXzFRWXhRXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjZW50ZXJcIjogXCJ3b3JrX2NlbnRlcl9fMUFlaGpcIixcblx0XCJwb3J0SG92ZXJDYXJkVGV4dFwiOiBcIndvcmtfcG9ydEhvdmVyQ2FyZFRleHRfXzNPcFV1XCIsXG5cdFwicG9ydGZvbGlvXCI6IFwid29ya19wb3J0Zm9saW9fXzNVa2dCXCIsXG5cdFwicm93XCI6IFwid29ya19yb3dfXzFsOVdUXCIsXG5cdFwiaGVhZFRleHRcIjogXCJ3b3JrX2hlYWRUZXh0X19YSWswMFwiLFxuXHRcInBGaWx0ZXJcIjogXCJ3b3JrX3BGaWx0ZXJfXzJ1Ym9LXCIsXG5cdFwic2VsSXRlbVwiOiBcIndvcmtfc2VsSXRlbV9fMmJFbGZcIixcblx0XCJpdGVtXCI6IFwid29ya19pdGVtX18xYVhCQVwiLFxuXHRcImhvdmVyQ29udGV4dFwiOiBcIndvcmtfaG92ZXJDb250ZXh0X18xNnlXWlwiLFxuXHRcInJlbGF0aXZlUFwiOiBcIndvcmtfcmVsYXRpdmVQX18xQk5GU1wiLFxuXHRcImFsaWduXCI6IFwid29ya19hbGlnbl9fMWpyN1VcIlxufTtcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5V2l0aEhvbGVzOyIsImZ1bmN0aW9uIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywga2V5LCBhcmcpIHtcbiAgdHJ5IHtcbiAgICB2YXIgaW5mbyA9IGdlbltrZXldKGFyZyk7XG4gICAgdmFyIHZhbHVlID0gaW5mby52YWx1ZTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZWplY3QoZXJyb3IpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpbmZvLmRvbmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciBnZW4gPSBmbi5hcHBseShzZWxmLCBhcmdzKTtcblxuICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcIm5leHRcIiwgdmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJ0aHJvd1wiLCBlcnIpO1xuICAgICAgfVxuXG4gICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgIH0pO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3luY1RvR2VuZXJhdG9yOyIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG52YXIgaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gcmVxdWlyZShcIi4vaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0XCIpO1xuXG5mdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgaWYgKGlzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBzZXRQcm90b3R5cGVPZihpbnN0YW5jZSwgQ2xhc3MucHJvdG90eXBlKTtcbiAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY29uc3RydWN0OyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE3LjAuMlxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLiBJZiB0aGVyZSBpcyBubyBuYXRpdmUgU3ltYm9sXG4vLyBub3IgcG9seWZpbGwsIHRoZW4gYSBwbGFpbiBudW1iZXIgaXMgdXNlZCBmb3IgcGVyZm9ybWFuY2UuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gMHhlYWNhO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHR5cGVPZihvYmplY3QpIHtcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xuICAgIHZhciAkJHR5cGVvZiA9IG9iamVjdC4kJHR5cGVvZjtcblxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRUxFTUVOVF9UWVBFOlxuICAgICAgICB2YXIgdHlwZSA9IG9iamVjdC50eXBlO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XG52YXIgQ29udGV4dFByb3ZpZGVyID0gUkVBQ1RfUFJPVklERVJfVFlQRTtcbnZhciBFbGVtZW50ID0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xudmFyIEZyYWdtZW50ID0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbnZhciBMYXp5ID0gUkVBQ1RfTEFaWV9UWVBFO1xudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XG52YXIgUG9ydGFsID0gUkVBQ1RfUE9SVEFMX1RZUEU7XG52YXIgUHJvZmlsZXIgPSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xudmFyIFN1c3BlbnNlID0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbnZhciBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IGZhbHNlO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcblxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQ29udGV4dENvbnN1bWVyID0gQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5Db250ZXh0UHJvdmlkZXIgPSBDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xuZXhwb3J0cy5Gb3J3YXJkUmVmID0gRm9yd2FyZFJlZjtcbmV4cG9ydHMuRnJhZ21lbnQgPSBGcmFnbWVudDtcbmV4cG9ydHMuTGF6eSA9IExhenk7XG5leHBvcnRzLk1lbW8gPSBNZW1vO1xuZXhwb3J0cy5Qb3J0YWwgPSBQb3J0YWw7XG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XG5leHBvcnRzLlN0cmljdE1vZGUgPSBTdHJpY3RNb2RlO1xuZXhwb3J0cy5TdXNwZW5zZSA9IFN1c3BlbnNlO1xuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xuZXhwb3J0cy5pc0NvbmN1cnJlbnRNb2RlID0gaXNDb25jdXJyZW50TW9kZTtcbmV4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXIgPSBpc0NvbnRleHRDb25zdW1lcjtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuaXNFbGVtZW50ID0gaXNFbGVtZW50O1xuZXhwb3J0cy5pc0ZvcndhcmRSZWYgPSBpc0ZvcndhcmRSZWY7XG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xuZXhwb3J0cy5pc0xhenkgPSBpc0xhenk7XG5leHBvcnRzLmlzTWVtbyA9IGlzTWVtbztcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcbmV4cG9ydHMuaXNQcm9maWxlciA9IGlzUHJvZmlsZXI7XG5leHBvcnRzLmlzU3RyaWN0TW9kZSA9IGlzU3RyaWN0TW9kZTtcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZTtcbmV4cG9ydHMudHlwZU9mID0gdHlwZU9mO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmb3JtaWtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZG9tXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3RhdGluZy10ZXh0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=