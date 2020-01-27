module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/WYSIWYG.js":
/*!*******************************!*\
  !*** ./components/WYSIWYG.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var avataaars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! avataaars */ "avataaars");
/* harmony import */ var avataaars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(avataaars__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/danigrant/Projects/svg-next/components/WYSIWYG.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  topType,
  accessoriesType,
  facialHairType,
  clotheType,
  clotheColor,
  eyeType,
  eyebrowType,
  mouthType,
  skinColor,
  hairColor
}) => __jsx("div", {
  className: "jsx-631280546" + " " + "wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(avataaars__WEBPACK_IMPORTED_MODULE_2___default.a, {
  avatarStyle: "Circle",
  topType: topType,
  hairColor: hairColor,
  accessoriesType: accessoriesType,
  facialHairType: facialHairType,
  clotheType: clotheType,
  clotheColor: clotheColor,
  eyeType: eyeType,
  eyebrowType: eyebrowType,
  mouthType: mouthType,
  skinColor: skinColor,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "631280546",
  __self: undefined
}, ".wrapper.jsx-631280546{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvY29tcG9uZW50cy9XWVNJV1lHLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCZ0IsQUFHc0IsMEVBQ1UsbUdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvY29tcG9uZW50cy9XWVNJV1lHLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF2YXRhciBmcm9tICdhdmF0YWFhcnMnXG5cbiBleHBvcnQgZGVmYXVsdCAoeyB0b3BUeXBlLCBhY2Nlc3Nvcmllc1R5cGUsIGZhY2lhbEhhaXJUeXBlLCBjbG90aGVUeXBlLCBjbG90aGVDb2xvciwgZXllVHlwZSwgZXllYnJvd1R5cGUsIG1vdXRoVHlwZSwgc2tpbkNvbG9yLCBoYWlyQ29sb3IgfSkgPT4gKFxuICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgPEF2YXRhclxuICAgICAgICAgYXZhdGFyU3R5bGU9J0NpcmNsZSdcbiAgICAgICAgIHRvcFR5cGU9e3RvcFR5cGV9XG4gICAgICAgICBoYWlyQ29sb3I9e2hhaXJDb2xvcn1cbiAgICAgICAgIGFjY2Vzc29yaWVzVHlwZT17YWNjZXNzb3JpZXNUeXBlfVxuICAgICAgICAgZmFjaWFsSGFpclR5cGU9e2ZhY2lhbEhhaXJUeXBlfVxuICAgICAgICAgY2xvdGhlVHlwZT17Y2xvdGhlVHlwZX1cbiAgICAgICAgIGNsb3RoZUNvbG9yPXtjbG90aGVDb2xvcn1cbiAgICAgICAgIGV5ZVR5cGU9e2V5ZVR5cGV9XG4gICAgICAgICBleWVicm93VHlwZT17ZXllYnJvd1R5cGV9XG4gICAgICAgICBtb3V0aFR5cGU9e21vdXRoVHlwZX1cbiAgICAgICAgIHNraW5Db2xvcj17c2tpbkNvbG9yfVxuICAgICAgIC8+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLndyYXBwZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICA8L2Rpdj5cbiApXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/components/WYSIWYG.js */")));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-tabs */ "react-tabs");
/* harmony import */ var react_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_tabs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_WYSIWYG__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/WYSIWYG */ "./components/WYSIWYG.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/options */ "./utils/options.js");
/* harmony import */ var _utils_options__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils_options__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/danigrant/Projects/svg-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      topType: 'LongHairFrida',
      hairColor: 'Black',
      accessoriesType: 'Blank',
      facialHairType: 'Blank',
      clotheType: 'Overall',
      clotheColor: 'Gray01',
      eyeType: 'WinkWacky',
      eyebrowType: 'RaisedExcited',
      mouthType: 'Tongue',
      skinColor: 'Tanned'
    });

    _defineProperty(this, "handleChange", (part, color) => {
      console.log(part, color);
      this.setState({
        [part]: color
      });
    });
  }

  static async getInitialProps() {
    return {
      posts: "data"
    };
  }

  render() {
    const {
      topType,
      accessoriesType,
      facialHairType,
      clotheType,
      clotheColor,
      eyeType,
      eyebrowType,
      mouthType,
      skinColor,
      hairColor
    } = this.state;
    return __jsx("div", {
      className: "jsx-2402885260" + " " + "page-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Nunito:400,700,900&display=swap",
      rel: "stylesheet",
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/react-tabs/style/react-tabs.css",
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-2402885260" + " " + "app-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Build Yo Self"), __jsx("div", {
      className: "jsx-2402885260" + " " + "tabs-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabList"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "\uD83C\uDFA8 Skin"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "\uD83D\uDC41 Eyes"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "\u270F\uFE0F Eyebrow"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "\uD83D\uDC44 Mouth"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "\u2702\uFE0F Hair"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "\uD83D\uDC88 Hair Color"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "\uD83D\uDC54 Clothes"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "\uD83D\uDC57 Clothes Color"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "\uD83D\uDC53 Accessories"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "\uD83E\uDD81 Facial Hair")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["skinColorOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('skinColor', option.name),
      className: "jsx-2402885260" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["eyeTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('eyeType', option.name),
      className: "jsx-2402885260" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["eyebrowTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('eyebrowType', option.name),
      className: "jsx-2402885260" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80,
        background: "#d08b5b",
        padding: 5
      },
      src: option.file,
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["mouthTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('mouthType', option.name),
      className: "jsx-2402885260" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["topTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('topType', option.name),
      className: "jsx-2402885260" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["hairColorOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('hairColor', option.name),
      className: "jsx-2402885260" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["clotheTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('clotheType', option.name),
      className: "jsx-2402885260" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["clotheColorOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('clotheColor', option.name),
      className: "jsx-2402885260" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["accessoriesTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('accessoriesType', option.name),
      className: "jsx-2402885260" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80,
        height: 40
      },
      src: option.file,
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2402885260" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["facialHairTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('facialHairType', option.name),
      className: "jsx-2402885260" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 65
      },
      src: option.file,
      className: "jsx-2402885260",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    })))))))), __jsx("div", {
      className: "jsx-2402885260" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx(_components_WYSIWYG__WEBPACK_IMPORTED_MODULE_4__["default"], {
      topType: topType,
      accessoriesType: accessoriesType,
      facialHairType: facialHairType,
      clotheType: clotheType,
      clotheColor: clotheColor,
      eyeType: eyeType,
      eyebrowType: eyebrowType,
      mouthType: mouthType,
      skinColor: skinColor,
      hairColor: hairColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2402885260" + " " + "login-and-save-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: this
    }, "Login And Save"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1041040430",
      __self: this
    }, ".app-container.jsx-2402885260{background-color:#fff;max-width:800pt;width:95%;height:500pt;border-radius:10px;box-shadow:0px 0px 40px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.column.jsx-2402885260{box-sizing:border-box;width:50%;height:100%;padding:20pt;color:white;}.column.jsx-2402885260:first-child{background:#0B132B;border-radius:10px 0px 0px 10px;}.column.jsx-2402885260:last-child{background:#1C2541;border-radius:0px 10px 10px 0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.column.jsx-2402885260 h1.jsx-2402885260{margin-bottom:0.2em;}.options-wrapper.jsx-2402885260{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.option.jsx-2402885260{width:80px;height:80px;border-radius:25px;margin:10px;margin-right:20px;margin-left:0px;cursor:pointer;}.login-and-save-button.jsx-2402885260{box-sizing:border-box;padding:10px;font-weight:bold;background-color:#3f51b5;color:white;text-align:center;width:300px;margin:0 auto;margin-top:50px;border-radius:5px;cursor:pointer;}.login-and-save-button.jsx-2402885260:hover{border-bottom:2px solid #283894;-webkit-filter:brightness(98%);filter:brightness(98%);}.login-and-save-button.jsx-2402885260:active{border-bottom:2px solid #121c52;-webkit-filter:brightness(96%);filter:brightness(96%);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUtvQixBQUdtQyxBQVVBLEFBT0gsQUFJQSxBQU9DLEFBR1AsQUFPRixBQVNXLEFBYVUsQUFJQSxXQXpCcEIsUUFyQm9CLEFBSUEsQ0FPbEMsRUE1QmtCLEFBVU4sQUFxQ0csQ0FSTSxTQTVCUCxBQWlEVyxBQUlBLEdBaEJOLEdBL0NQLElBdUNFLEVBNUJDLElBVkEsR0FnQmYsQUFJZSxDQTJCWSxFQVJQLEdBNUJOLElBVk8sUUFXckIsR0E0QmtCLEVBWEcsR0FtQlAsR0E5QzRCLE1BeUQxQyxBQUlBLEVBdEJpQixDQVFHLGNBUHBCLElBUWMsWUFDRSxDQWhERCxLQWtCUyxRQStCTixVQXRCRCxNQXVCRyxrQkFDSCxlQUNqQixZQW5EcUIsTUEyQlEsR0FUSiw0REFqQnpCLHVDQWtCQSxHQVN5Qiw2R0FDekIiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9zdmctbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJztcbmltcG9ydCBXWVNJV1lHIGZyb20gJy4uL2NvbXBvbmVudHMvV1lTSVdZRydcbmltcG9ydCB7IGhhaXJDb2xvck9wdGlvbnMsIGNsb3RoZVR5cGVPcHRpb25zLCBjbG90aGVDb2xvck9wdGlvbnMsIGV5ZWJyb3dUeXBlT3B0aW9ucywgZXllVHlwZU9wdGlvbnMsIGZhY2lhbEhhaXJUeXBlT3B0aW9ucywgbW91dGhUeXBlT3B0aW9ucywgc2tpbkNvbG9yT3B0aW9ucywgYWNjZXNzb3JpZXNUeXBlT3B0aW9ucywgdG9wVHlwZU9wdGlvbnMgfSBmcm9tICcuLi91dGlscy9vcHRpb25zJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRvcFR5cGU6ICdMb25nSGFpckZyaWRhJyxcbiAgICBoYWlyQ29sb3I6ICdCbGFjaycsXG4gICAgYWNjZXNzb3JpZXNUeXBlOiAnQmxhbmsnLFxuICAgIGZhY2lhbEhhaXJUeXBlOiAnQmxhbmsnLFxuICAgIGNsb3RoZVR5cGU6ICdPdmVyYWxsJyxcbiAgICBjbG90aGVDb2xvcjogJ0dyYXkwMScsXG4gICAgZXllVHlwZTogJ1dpbmtXYWNreScsXG4gICAgZXllYnJvd1R5cGU6ICdSYWlzZWRFeGNpdGVkJyxcbiAgICBtb3V0aFR5cGU6ICdUb25ndWUnLFxuICAgIHNraW5Db2xvcjogJ1Rhbm5lZCdcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cbiAgICByZXR1cm4geyBwb3N0czogXCJkYXRhXCIgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHBhcnQsIGNvbG9yKSA9PiB7XG4gICAgY29uc29sZS5sb2cocGFydCwgY29sb3IpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbcGFydF06IGNvbG9yIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0b3BUeXBlLCBhY2Nlc3Nvcmllc1R5cGUsIGZhY2lhbEhhaXJUeXBlLCBjbG90aGVUeXBlLCBjbG90aGVDb2xvciwgZXllVHlwZSwgZXllYnJvd1R5cGUsIG1vdXRoVHlwZSwgc2tpbkNvbG9yLCBoYWlyQ29sb3IgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwLDkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXRhYnMvc3R5bGUvcmVhY3QtdGFicy5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8aDE+QnVpbGQgWW8gU2VsZjwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnMtbWVudVwiPlxuICAgICAgICAgICAgICA8VGFicz5cbiAgICAgICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+OqCBTa2luPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkYEgRXllczwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7inI/vuI8gRXllYnJvdzwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5GEIE1vdXRoPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPuKcgu+4jyBIYWlyPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkoggSGFpciBDb2xvcjwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5GUIENsb3RoZXM8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+RlyBDbG90aGVzIENvbG9yPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkZMgQWNjZXNzb3JpZXM8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+mgSBGYWNpYWwgSGFpcjwvVGFiPlxuICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogU2tpbiAqL31cbiAgICAgICAgICAgICAgICAgICAge3NraW5Db2xvck9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdza2luQ29sb3InLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICB7LyogRXllcyAqL31cbiAgICAgICAgICAgICAgICAgIHtleWVUeXBlT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdleWVUeXBlJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIEV5ZWJyb3dzICovfVxuICAgICAgICAgICAgICAgICAge2V5ZWJyb3dUeXBlT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdleWVicm93VHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAsIGJhY2tncm91bmQ6IFwiI2QwOGI1YlwiLCBwYWRkaW5nOiA1IH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICB7LyogTW91dGggKi99XG4gICAgICAgICAgICAgICAgICB7bW91dGhUeXBlT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdtb3V0aFR5cGUnLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwIH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICB7LyogdG9wVHlwZSBha2EgSGFpciAqL31cbiAgICAgICAgICAgICAgICAgIHt0b3BUeXBlT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCd0b3BUeXBlJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIEhhaXIgQ29sb3IgKi99XG4gICAgICAgICAgICAgICAgICB7aGFpckNvbG9yT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdoYWlyQ29sb3InLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwIH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICB7LyogQ2xvdGhlcyAqL31cbiAgICAgICAgICAgICAgICAgIHtjbG90aGVUeXBlT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdjbG90aGVUeXBlJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIENsb3RoZXMgQ29sb3IgKi99XG4gICAgICAgICAgICAgICAgICB7Y2xvdGhlQ29sb3JPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2Nsb3RoZUNvbG9yJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIEFjY2Vzc29yaWVzICovfVxuICAgICAgICAgICAgICAgICAge2FjY2Vzc29yaWVzVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnYWNjZXNzb3JpZXNUeXBlJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCwgaGVpZ2h0OiA0MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIEZhY2lhbCBIYWlyICovfVxuICAgICAgICAgICAgICAgICAge2ZhY2lhbEhhaXJUeXBlT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdmYWNpYWxIYWlyVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogNjUgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgIDwvVGFicz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8V1lTSVdZRyB0b3BUeXBlPXt0b3BUeXBlfSBhY2Nlc3Nvcmllc1R5cGU9e2FjY2Vzc29yaWVzVHlwZX0gZmFjaWFsSGFpclR5cGU9e2ZhY2lhbEhhaXJUeXBlfSBjbG90aGVUeXBlPXtjbG90aGVUeXBlfSBjbG90aGVDb2xvcj17Y2xvdGhlQ29sb3J9IGV5ZVR5cGU9e2V5ZVR5cGV9IGV5ZWJyb3dUeXBlPXtleWVicm93VHlwZX0gbW91dGhUeXBlPXttb3V0aFR5cGV9IHNraW5Db2xvcj17c2tpbkNvbG9yfSBoYWlyQ29sb3I9e2hhaXJDb2xvcn0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tYW5kLXNhdmUtYnV0dG9uXCI+TG9naW4gQW5kIFNhdmU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXBwLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBwdDtcbiAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW46Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBCMTMyQjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFDMjU0MTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbiBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wdGlvbnMtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dpbi1hbmQtc2F2ZS1idXR0b24ge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dpbi1hbmQtc2F2ZS1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyODM4OTQ7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTglKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ2luLWFuZC1zYXZlLWJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxMjFjNTI7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTYlKTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5LCBodG1sIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjE3NjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi1saXN0IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWItLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGQzEwNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYiB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1230321771",
      __self: this
    }, "body,html{width:100%;height:100%;margin:0;background-color:#fff176;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#333;font-family:'Nunito',sans-serif;}.react-tabs__tab-list{border-bottom:none;}.react-tabs__tab--selected{background:inherit;border:none;color:#FFF;border-radius:0;border-bottom:2px solid #FFC107;}.react-tabs__tab{padding-right:10px;padding-left:10px;color:#bdbdbd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeU8yQixBQUd3QixBQVdRLEFBR0EsQUFPQSxXQXBCUCxRQVdkLEFBR2MsQUFPTSxJQXBCVCxRQWNFLENBYmMsS0FvQlgsS0FORSxTQU9sQixNQXBCZSxDQWNtQixnQ0FDbEMseUNBZHFCLDZGQUNJLG1HQUNaLFdBQ3NCLGdDQUNuQyIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL3N2Zy1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xuaW1wb3J0IFdZU0lXWUcgZnJvbSAnLi4vY29tcG9uZW50cy9XWVNJV1lHJ1xuaW1wb3J0IHsgaGFpckNvbG9yT3B0aW9ucywgY2xvdGhlVHlwZU9wdGlvbnMsIGNsb3RoZUNvbG9yT3B0aW9ucywgZXllYnJvd1R5cGVPcHRpb25zLCBleWVUeXBlT3B0aW9ucywgZmFjaWFsSGFpclR5cGVPcHRpb25zLCBtb3V0aFR5cGVPcHRpb25zLCBza2luQ29sb3JPcHRpb25zLCBhY2Nlc3Nvcmllc1R5cGVPcHRpb25zLCB0b3BUeXBlT3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL29wdGlvbnMnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdG9wVHlwZTogJ0xvbmdIYWlyRnJpZGEnLFxuICAgIGhhaXJDb2xvcjogJ0JsYWNrJyxcbiAgICBhY2Nlc3Nvcmllc1R5cGU6ICdCbGFuaycsXG4gICAgZmFjaWFsSGFpclR5cGU6ICdCbGFuaycsXG4gICAgY2xvdGhlVHlwZTogJ092ZXJhbGwnLFxuICAgIGNsb3RoZUNvbG9yOiAnR3JheTAxJyxcbiAgICBleWVUeXBlOiAnV2lua1dhY2t5JyxcbiAgICBleWVicm93VHlwZTogJ1JhaXNlZEV4Y2l0ZWQnLFxuICAgIG1vdXRoVHlwZTogJ1Rvbmd1ZScsXG4gICAgc2tpbkNvbG9yOiAnVGFubmVkJ1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblxuICAgIHJldHVybiB7IHBvc3RzOiBcImRhdGFcIiB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAocGFydCwgY29sb3IpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwYXJ0LCBjb2xvcik7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtwYXJ0XTogY29sb3IgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvcFR5cGUsIGFjY2Vzc29yaWVzVHlwZSwgZmFjaWFsSGFpclR5cGUsIGNsb3RoZVR5cGUsIGNsb3RoZUNvbG9yLCBleWVUeXBlLCBleWVicm93VHlwZSwgbW91dGhUeXBlLCBza2luQ29sb3IsIGhhaXJDb2xvciB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAsOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtdGFicy9zdHlsZS9yZWFjdC10YWJzLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxoMT5CdWlsZCBZbyBTZWxmPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1tZW51XCI+XG4gICAgICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgICAgIDxUYWJMaXN0PlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn46oIFNraW48L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+RgSBFeWVzPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPuKcj++4jyBFeWVicm93PC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkYQgTW91dGg8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+4pyC77iPIEhhaXI8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+SiCBIYWlyIENvbG9yPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkZQgQ2xvdGhlczwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5GXIENsb3RoZXMgQ29sb3I8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+RkyBBY2Nlc3NvcmllczwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn6aBIEZhY2lhbCBIYWlyPC9UYWI+XG4gICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiBTa2luICovfVxuICAgICAgICAgICAgICAgICAgICB7c2tpbkNvbG9yT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ3NraW5Db2xvcicsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBFeWVzICovfVxuICAgICAgICAgICAgICAgICAge2V5ZVR5cGVPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2V5ZVR5cGUnLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwIH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICB7LyogRXllYnJvd3MgKi99XG4gICAgICAgICAgICAgICAgICB7ZXllYnJvd1R5cGVPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2V5ZWJyb3dUeXBlJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCwgYmFja2dyb3VuZDogXCIjZDA4YjViXCIsIHBhZGRpbmc6IDUgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBNb3V0aCAqL31cbiAgICAgICAgICAgICAgICAgIHttb3V0aFR5cGVPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ21vdXRoVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiB0b3BUeXBlIGFrYSBIYWlyICovfVxuICAgICAgICAgICAgICAgICAge3RvcFR5cGVPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ3RvcFR5cGUnLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwIH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICB7LyogSGFpciBDb2xvciAqL31cbiAgICAgICAgICAgICAgICAgIHtoYWlyQ29sb3JPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2hhaXJDb2xvcicsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBDbG90aGVzICovfVxuICAgICAgICAgICAgICAgICAge2Nsb3RoZVR5cGVPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2Nsb3RoZVR5cGUnLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwIH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICB7LyogQ2xvdGhlcyBDb2xvciAqL31cbiAgICAgICAgICAgICAgICAgIHtjbG90aGVDb2xvck9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnY2xvdGhlQ29sb3InLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwIH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICB7LyogQWNjZXNzb3JpZXMgKi99XG4gICAgICAgICAgICAgICAgICB7YWNjZXNzb3JpZXNUeXBlT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdhY2Nlc3Nvcmllc1R5cGUnLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwLCBoZWlnaHQ6IDQwIH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICB7LyogRmFjaWFsIEhhaXIgKi99XG4gICAgICAgICAgICAgICAgICB7ZmFjaWFsSGFpclR5cGVPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2ZhY2lhbEhhaXJUeXBlJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA2NSB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxXWVNJV1lHIHRvcFR5cGU9e3RvcFR5cGV9IGFjY2Vzc29yaWVzVHlwZT17YWNjZXNzb3JpZXNUeXBlfSBmYWNpYWxIYWlyVHlwZT17ZmFjaWFsSGFpclR5cGV9IGNsb3RoZVR5cGU9e2Nsb3RoZVR5cGV9IGNsb3RoZUNvbG9yPXtjbG90aGVDb2xvcn0gZXllVHlwZT17ZXllVHlwZX0gZXllYnJvd1R5cGU9e2V5ZWJyb3dUeXBlfSBtb3V0aFR5cGU9e21vdXRoVHlwZX0gc2tpbkNvbG9yPXtza2luQ29sb3J9IGhhaXJDb2xvcj17aGFpckNvbG9yfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1hbmQtc2F2ZS1idXR0b25cIj5Mb2dpbiBBbmQgU2F2ZTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcHAtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB0O1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBwdDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEIxMzJCO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW46bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUMyNTQxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcHRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ2luLWFuZC1zYXZlLWJ1dHRvbiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ2luLWFuZC1zYXZlLWJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzI4Mzg5NDtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5OCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubG9naW4tYW5kLXNhdmUtYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzEyMWM1MjtcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcyg5NiUpO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHksIGh0bWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMTc2O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLWxpc3Qge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkZDMTA3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/pages/index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./utils/options.js":
/*!**************************!*\
  !*** ./utils/options.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

const hairColorOptions = [{
  "name": "Auburn",
  "file": "/Avataaar/Color/Hair/Auburn.svg"
}, {
  "name": "Black",
  "file": "/Avataaar/Color/Hair/Black.svg"
}, {
  "name": "BlondeGolden",
  "file": "/Avataaar/Color/Hair/Blonde Golden.svg"
}, {
  "name": "Blonde",
  "file": "/Avataaar/Color/Hair/Blonde.svg"
}, {
  "name": "BrownDark",
  "file": "/Avataaar/Color/Hair/Brown Dark.svg"
}, {
  "name": "Brown",
  "file": "/Avataaar/Color/Hair/Brown.svg"
}, {
  "name": "PastelPink",
  "file": "/Avataaar/Color/Hair/Pastel Pink.svg"
}, {
  "name": "Platinum",
  "file": "/Avataaar/Color/Hair/Platinum.svg"
}, {
  "name": "Red",
  "file": "/Avataaar/Color/Hair/Red.svg"
}, {
  "name": "SilverGray",
  "file": "/Avataaar/Color/Hair/Silver Gray.svg"
}];
const clotheTypeOptions = [{
  "name": "BlazerShirt",
  "file": "/Avataaar/Clothing/Blazer + Shirt.svg"
}, {
  "name": "BlazerSweater",
  "file": "/Avataaar/Clothing/Blazer + Sweater.svg"
}, {
  "name": "CollarSweater",
  "file": "/Avataaar/Clothing/Collar + Sweater.svg"
}, {
  "name": "GraphicShirt",
  "file": "/Avataaar/Clothing/Graphic Shirt.svg"
}, {
  "name": "Hoodie",
  "file": "/Avataaar/Clothing/Hoodie.svg"
}, {
  "name": "Overall",
  "file": "/Avataaar/Clothing/Overall.svg"
}, {
  "name": "ShirtCrewNeck",
  "file": "/Avataaar/Clothing/Shirt Crew Neck.svg"
}, {
  "name": "ShirtScoopNeck",
  "file": "/Avataaar/Clothing/Shirt Scoop Neck.svg"
}, {
  "name": "ShirtVNeck",
  "file": "/Avataaar/Clothing/Shirt V Neck.svg"
}];
const clotheColorOptions = [{
  "name": "Black",
  "file": "/Avataaar/Color/Palette/Black.svg"
}, {
  "name": "Blue01",
  "file": "/Avataaar/Color/Palette/Blue 01.svg"
}, {
  "name": "Blue02",
  "file": "/Avataaar/Color/Palette/Blue 02.svg"
}, {
  "name": "Blue03",
  "file": "/Avataaar/Color/Palette/Blue 03.svg"
}, {
  "name": "Gray01",
  "file": "/Avataaar/Color/Palette/Gray 01.svg"
}, {
  "name": "Gray02",
  "file": "/Avataaar/Color/Palette/Gray 02.svg"
}, {
  "name": "Heather",
  "file": "/Avataaar/Color/Palette/Heather.svg"
}, {
  "name": "PastelBlue",
  "file": "/Avataaar/Color/Palette/Pastel Blue.svg"
}, {
  "name": "PastelGreen",
  "file": "/Avataaar/Color/Palette/Pastel Green.svg"
}, {
  "name": "PastelOrange",
  "file": "/Avataaar/Color/Palette/Pastel Orange.svg"
}, {
  "name": "PastelRed",
  "file": "/Avataaar/Color/Palette/Pastel Red.svg"
}, {
  "name": "PastelYellow",
  "file": "/Avataaar/Color/Palette/Pastel Yellow.svg"
}, {
  "name": "Pink",
  "file": "/Avataaar/Color/Palette/Pink.svg"
}, {
  "name": "Red",
  "file": "/Avataaar/Color/Palette/Red.svg"
}, {
  "name": "White",
  "file": "/Avataaar/Color/Palette/White.svg"
}];
const eyebrowTypeOptions = [{
  "name": "AngryNatural",
  "file": "/Avataaar/Eyebrow/Natural/Angry Natural.svg"
}, {
  "name": "DefaultNatural",
  "file": "/Avataaar/Eyebrow/Natural/Default Natural.svg"
}, {
  "name": "FlatNatural",
  "file": "/Avataaar/Eyebrow/Natural/Flat Natural.svg"
}, {
  "name": "RaisedExcitedNatural",
  "file": "/Avataaar/Eyebrow/Natural/Raised Excited Natural.svg"
}, {
  "name": "SadConcernedNatural",
  "file": "/Avataaar/Eyebrow/Natural/Sad Concerned Natural.svg"
}, {
  "name": "UpDownNatural",
  "file": "/Avataaar/Eyebrow/Natural/Up Down Natural.svg"
}, {
  "name": "Angry",
  "file": "/Avataaar/Eyebrow/Outline/Angry.svg"
}, {
  "name": "Default",
  "file": "/Avataaar/Eyebrow/Outline/Default.svg"
}, {
  "name": "RaisedExcited",
  "file": "/Avataaar/Eyebrow/Outline/Raised Excited.svg"
}, {
  "name": "SadConcerned",
  "file": "/Avataaar/Eyebrow/Outline/Sad Concerned.svg"
}, {
  "name": "UpDown",
  "file": "/Avataaar/Eyebrow/Outline/Up Down.svg"
}];
const eyeTypeOptions = [{
  "name": "Close",
  "file": "/Avataaar/Eyes/Closed.svg"
}, {
  "name": "Cry",
  "file": "/Avataaar/Eyes/Cry.svg"
}, {
  "name": "Default",
  "file": "/Avataaar/Eyes/Default.svg"
}, {
  "name": "EyeRoll",
  "file": "/Avataaar/Eyes/Eye Roll.svg"
}, {
  "name": "Happy",
  "file": "/Avataaar/Eyes/Happy.svg"
}, {
  "name": "Hearts",
  "file": "/Avataaar/Eyes/Hearts.svg"
}, {
  "name": "Side",
  "file": "/Avataaar/Eyes/Side.svg"
}, {
  "name": "Squint",
  "file": "/Avataaar/Eyes/Squint.svg"
}, {
  "name": "Surprised",
  "file": "/Avataaar/Eyes/Surprised.svg"
}, {
  "name": "WinkWacky",
  "file": "/Avataaar/Eyes/Wink Wacky.svg"
}, {
  "name": "Wink",
  "file": "/Avataaar/Eyes/Wink.svg"
}, {
  "name": "Dizzy",
  "file": "/Avataaar/Eyes/X Dizzy.svg"
}];
const facialHairTypeOptions = [{
  "name": "Blank",
  "file": "/Avataaar/Top/Accesories/Blank.svg"
}, {
  "name": "BeardLight",
  "file": "/Avataaar/Facial Hair/Beard Light.svg"
}, {
  "name": "BeardMagestic",
  "file": "/Avataaar/Facial Hair/Beard Magestic.svg"
}, {
  "name": "BeardMedium",
  "file": "/Avataaar/Facial Hair/Beard Medium.svg"
}, {
  "name": "MoustacheFancy",
  "file": "/Avataaar/Facial Hair/Moustache Fancy.svg"
}, {
  "name": "MoustacheMagnum",
  "file": "/Avataaar/Facial Hair/Moustache Magnum.svg"
}];
const mouthTypeOptions = [{
  "name": "Concerned",
  "file": "/Avataaar/Mouth/Concerned.svg"
}, {
  "name": "Default",
  "file": "/Avataaar/Mouth/Default.svg"
}, {
  "name": "Disbelief",
  "file": "/Avataaar/Mouth/Disbelief.svg"
}, {
  "name": "Eating",
  "file": "/Avataaar/Mouth/Eating.svg"
}, {
  "name": "Grimace",
  "file": "/Avataaar/Mouth/Grimace.svg"
}, {
  "name": "Sad",
  "file": "/Avataaar/Mouth/Sad.svg"
}, {
  "name": "ScreamOpen",
  "file": "/Avataaar/Mouth/Scream Open.svg"
}, {
  "name": "Serious",
  "file": "/Avataaar/Mouth/Serious.svg"
}, {
  "name": "Smile",
  "file": "/Avataaar/Mouth/Smile.svg"
}, {
  "name": "Tongue",
  "file": "/Avataaar/Mouth/Tongue.svg"
}, {
  "name": "Twinkle",
  "file": "/Avataaar/Mouth/Twinkle.svg"
}, {
  "name": "Vomit",
  "file": "/Avataaar/Mouth/Vomit.svg"
}];
const skinColorOptions = [{
  "name": "Tanned",
  "file": "/Avataaar/Skin/Tanned.svg"
}, {
  "name": "Yellow",
  "file": "/Avataaar/Skin/Yellow.svg"
}, {
  "name": "Black",
  "file": "/Avataaar/Skin/Black.svg"
}, {
  "name": "DarkBrown",
  "file": "/Avataaar/Skin/Dark Brown.svg"
}, {
  "name": "Brown",
  "file": "/Avataaar/Skin/Brown.svg"
}, {
  "name": "Light",
  "file": "/Avataaar/Skin/Light.svg"
}, {
  "name": "Pale",
  "file": "/Avataaar/Skin/Pale.svg"
}];
const accessoriesTypeOptions = [{
  "name": "Blank",
  "file": "/Avataaar/Top/Accesories/Blank.svg"
}, {
  "name": "Kurt",
  "file": "/Avataaar/Top/Accesories/Kurt.svg"
}, {
  "name": "Prescription01",
  "file": "/Avataaar/Top/Accesories/Prescription 01.svg"
}, {
  "name": "Prescription02",
  "file": "/Avataaar/Top/Accesories/Prescription 02.svg"
}, {
  "name": "Round",
  "file": "/Avataaar/Top/Accesories/Round.svg"
}, {
  "name": "Sunglasses",
  "file": "/Avataaar/Top/Accesories/Sunglasses.svg"
}, {
  "name": "Wayfarers",
  "file": "/Avataaar/Top/Accesories/Wayfarers.svg"
}]; // aka hairstyle

const topTypeOptions = [{
  "name": "Blank",
  "file": "/Avataaar/Top/Accesories/Blank.svg"
}, {
  "name": "LongHairBigHair",
  "file": "/Avataaar/Top/Long Hair/Big Hair.svg"
}, {
  "name": "LongHairBob",
  "file": "/Avataaar/Top/Long Hair/Bob.svg"
}, {
  "name": "LongHairBun",
  "file": "/Avataaar/Top/Long Hair/Bun.svg"
}, {
  "name": "LongHairCurly",
  "file": "/Avataaar/Top/Long Hair/Curly.svg"
}, {
  "name": "LongHairCurvy",
  "file": "/Avataaar/Top/Long Hair/Curvy.svg"
}, {
  "name": "LongHairDreads",
  "file": "/Avataaar/Top/Long Hair/Dreads.svg"
}, {
  "name": "LongHairFrida",
  "file": "/Avataaar/Top/Long Hair/Frida.svg"
}, {
  "name": "LongHairFroBand",
  "file": "/Avataaar/Top/Long Hair/Fro + Band.svg"
}, {
  "name": "LongHairFro",
  "file": "/Avataaar/Top/Long Hair/Fro.svg"
}, {
  "name": "LongHairNotTooLong",
  "file": "/Avataaar/Top/Long Hair/Long but not too long.svg"
}, {
  "name": "LongHairMiaWallace",
  "file": "/Avataaar/Top/Long Hair/Mia Wallace.svg"
}, {
  "name": "LongHairShavedSides",
  "file": "/Avataaar/Top/Long Hair/Shaved Sides.svg"
}, {
  "name": "LongHairStraight",
  "file": "/Avataaar/Top/Long Hair/Straight-1.svg"
}, {
  "name": "LongHairStraightStrand",
  "file": "/Avataaar/Top/Long Hair/Straight + Strand.svg"
}, {
  "name": "LongHairStraight2",
  "file": "/Avataaar/Top/Long Hair/Straight.svg"
}, {
  "name": "Turban",
  "file": "/Avataaar/Top/Accesories/Turban.svg"
}, {
  "name": "Hijab",
  "file": "/Avataaar/Top/Accesories/Hijab.svg"
}, {
  "name": "Hat",
  "file": "/Avataaar/Top/Accesories/Hat.svg"
}, {
  "name": "WinterHat1",
  "file": "/Avataaar/Top/Accesories/Winter Hat 1.svg"
}, {
  "name": "WinterHat2",
  "file": "/Avataaar/Top/Accesories/Winter Hat 2.svg"
}, {
  "name": "WinterHat3",
  "file": "/Avataaar/Top/Accesories/Winter Hat 3.svg"
}, {
  "name": "WinterHat4",
  "file": "/Avataaar/Top/Accesories/Winter Hat 4.svg"
}, {
  "name": "Eyepatch",
  "file": "/Avataaar/Top/Accesories/Eyepatch.svg"
}, {
  "name": "ShortHairDreads01",
  "file": "/Avataaar/Top/Short Hair/Dreads 01.svg"
}, {
  "name": "ShortHairDreads02",
  "file": "/Avataaar/Top/Short Hair/Dreads 02.svg"
}, {
  "name": "ShortHairFrizzle",
  "file": "/Avataaar/Top/Short Hair/Frizzle.svg"
}, {
  "name": "ShortHairShaggyMullet",
  "file": "/Avataaar/Top/Short Hair/Shaggy Mullet.svg"
}, {
  "name": "ShortHairShortCurly",
  "file": "/Avataaar/Top/Short Hair/Short Curly.svg"
}, {
  "name": "ShortHairShortFlat",
  "file": "/Avataaar/Top/Short Hair/Short Flat.svg"
}, {
  "name": "ShortHairShortRound",
  "file": "/Avataaar/Top/Short Hair/Short Round.svg"
}, {
  "name": "ShortHairShortWaved",
  "file": "/Avataaar/Top/Short Hair/Short Waved.svg"
}, {
  "name": "ShortHairSides",
  "file": "/Avataaar/Top/Short Hair/Sides.svg"
}, {
  "name": "ShortHairTheCaesarSidePart",
  "file": "/Avataaar/Top/Short Hair/The Caesar + Side Part.svg"
}, {
  "name": "ShortHairTheCaesar",
  "file": "/Avataaar/Top/Short Hair/The Caesar.svg"
}];
module.exports = {
  hairColorOptions,
  clotheTypeOptions,
  clotheColorOptions,
  eyebrowTypeOptions,
  eyeTypeOptions,
  facialHairTypeOptions,
  mouthTypeOptions,
  skinColorOptions,
  accessoriesTypeOptions,
  topTypeOptions
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danigrant/Projects/svg-next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "avataaars":
/*!****************************!*\
  !*** external "avataaars" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("avataaars");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-tabs":
/*!*****************************!*\
  !*** external "react-tabs" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tabs");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map