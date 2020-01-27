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

/***/ "./components/Modal.js":
/*!*****************************!*\
  !*** ./components/Modal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/svg-next/components/Modal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  handleToggleOverlay
}) => __jsx("div", {
  className: "jsx-1596077787" + " " + "modal-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  onClick: handleToggleOverlay,
  className: "jsx-1596077787" + " " + "close",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, __jsx("img", {
  src: "/icons/close.svg",
  className: "jsx-1596077787",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
})), __jsx("h1", {
  className: "jsx-1596077787",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "Save Your Avatar"), __jsx("p", {
  className: "jsx-1596077787",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "Your avatar looks spectacular, it's time to save it so that you can use it across the internet."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1596077787",
  __self: undefined
}, ".modal-wrapper.jsx-1596077787{background-color:#fff;max-width:400pt;width:95%;height:300pt;border-radius:10px;box-shadow:0px 0px 40px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;margin-left:auto;margin-right:auto;left:0;right:0;margin-top:auto;margin-bottom:auto;top:0;bottom:0;z-index:2;box-sizing:border-box;padding:30px;}.close.jsx-1596077787{position:absolute;top:0;right:0;padding:5px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvY29tcG9uZW50cy9Nb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLZ0IsQUFHK0IsQUF3Qkosa0JBQ1osSUF4QlUsRUF5QlIsUUFDSSxNQXpCRixNQTBCSyxJQXpCRixXQTBCZixFQXpCcUIsbUJBQ3FCLHdDQUMzQiwwRUFDUyw4RUFDQyxtR0FDSiw2RkFDRCxrQkFDRCxpQkFDQyxrQkFDWCxPQUNDLFFBQ1EsZ0JBQ0csbUJBQ2IsTUFDRyxTQUNDLFVBQ1ksc0JBQ1QsYUFDZiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL3N2Zy1uZXh0L2NvbXBvbmVudHMvTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBoYW5kbGVUb2dnbGVPdmVybGF5IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC13cmFwcGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjbG9zZVwiIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZU92ZXJsYXl9PjxpbWcgc3JjPVwiL2ljb25zL2Nsb3NlLnN2Z1wiIC8+PC9kaXY+XG4gICAgPGgxPlNhdmUgWW91ciBBdmF0YXI8L2gxPlxuICAgIDxwPllvdXIgYXZhdGFyIGxvb2tzIHNwZWN0YWN1bGFyLCBpdCdzIHRpbWUgdG8gc2F2ZSBpdCBzbyB0aGF0IHlvdSBjYW4gdXNlIGl0IGFjcm9zcyB0aGUgaW50ZXJuZXQuPC9wPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tb2RhbC13cmFwcGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBwdDtcbiAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgaGVpZ2h0OiAzMDBwdDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgfVxuICAgICAgLmNsb3NlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/components/Modal.js */")));

/***/ }),

/***/ "./components/Overlay.js":
/*!*******************************!*\
  !*** ./components/Overlay.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modal */ "./components/Modal.js");
var _jsxFileName = "/Users/danigrant/Projects/svg-next/components/Overlay.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = (({
  handleToggleOverlay
}) => __jsx("div", {
  className: "jsx-2228720391" + " " + "overlay-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
  handleToggleOverlay: handleToggleOverlay,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2228720391",
  __self: undefined
}, ".overlay-wrapper.jsx-2228720391{width:100%;height:100%;position:absolute;background-color:rgb(0,0,0,0.9);top:0;left:0;z-index:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvY29tcG9uZW50cy9PdmVybGF5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtnQixBQUdvQixXQUNDLFlBQ00sa0JBQ2MsZ0NBQzFCLE1BQ0MsT0FDRyxVQUNaIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvY29tcG9uZW50cy9PdmVybGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnXG5cbmV4cG9ydCBkZWZhdWx0ICh7IGhhbmRsZVRvZ2dsZU92ZXJsYXkgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXktd3JhcHBlclwiPlxuICAgIDxNb2RhbCBoYW5kbGVUb2dnbGVPdmVybGF5PXtoYW5kbGVUb2dnbGVPdmVybGF5fSAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5vdmVybGF5LXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwwLjkpO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbilcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/components/Overlay.js */")));

/***/ }),

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
/* harmony import */ var _components_Overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Overlay */ "./components/Overlay.js");
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
      skinColor: 'Tanned',
      overlayShow: false
    });

    _defineProperty(this, "handleChange", (part, color) => {
      console.log(part, color);
      this.setState({
        [part]: color
      });
    });

    _defineProperty(this, "handleToggleOverlay", () => {
      this.setState({
        overlayShow: !this.state.overlayShow
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
      className: "jsx-2626035465" + " " + "page-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Nunito:400,700,900&display=swap",
      rel: "stylesheet",
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/react-tabs/style/react-tabs.css",
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    })), this.state.overlayShow && __jsx(_components_Overlay__WEBPACK_IMPORTED_MODULE_6__["default"], {
      handleToggleOverlay: this.handleToggleOverlay,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-2626035465" + " " + "app-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Build Yo Self"), __jsx("div", {
      className: "jsx-2626035465" + " " + "tabs-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabList"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, "\uD83C\uDFA8 Skin"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "\uD83D\uDC41 Eyes"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "\u270F\uFE0F Eyebrow"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "\uD83D\uDC44 Mouth"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "\u2702\uFE0F Hair"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "\uD83D\uDC88 Hair Color"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "\uD83D\uDC54 Clothes"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "\uD83D\uDC57 Clothes Color"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, "\uD83D\uDC53 Accessories"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "\uD83E\uDD81 Facial Hair")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["skinColorOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('skinColor', option.name),
      className: "jsx-2626035465" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["eyeTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('eyeType', option.name),
      className: "jsx-2626035465" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["eyebrowTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('eyebrowType', option.name),
      className: "jsx-2626035465" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80,
        background: "#d08b5b",
        padding: 5
      },
      src: option.file,
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["mouthTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('mouthType', option.name),
      className: "jsx-2626035465" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["topTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('topType', option.name),
      className: "jsx-2626035465" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["hairColorOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('hairColor', option.name),
      className: "jsx-2626035465" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["clotheTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('clotheType', option.name),
      className: "jsx-2626035465" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["clotheColorOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('clotheColor', option.name),
      className: "jsx-2626035465" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["accessoriesTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('accessoriesType', option.name),
      className: "jsx-2626035465" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80,
        height: 40
      },
      src: option.file,
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-2626035465" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154
      },
      __self: this
    }, _utils_options__WEBPACK_IMPORTED_MODULE_5__["facialHairTypeOptions"].map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('facialHairType', option.name),
      className: "jsx-2626035465" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 65
      },
      src: option.file,
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    })))))))), __jsx("div", {
      className: "jsx-2626035465" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166
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
        lineNumber: 167
      },
      __self: this
    }), __jsx("div", {
      onClick: this.handleToggleOverlay,
      className: "jsx-2626035465" + " " + "login-and-save-button",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168
      },
      __self: this
    }, "\uD83C\uDF08 Login And Save \uD83E\uDD84"))), __jsx("div", {
      className: "jsx-2626035465" + " " + "gratitude",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "Built with ", __jsx("a", {
      href: "http://avataaars.com/",
      target: "_blank",
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "avataaars"), " designed by ", __jsx("a", {
      href: "https://twitter.com/pablostanley",
      target: "_blank",
      className: "jsx-2626035465",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, "Pablo Stanley")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3452142130",
      __self: this
    }, ".app-container.jsx-2626035465{background-color:#fff;max-width:800pt;width:95%;height:500pt;border-radius:10px;box-shadow:0px 0px 40px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.column.jsx-2626035465{box-sizing:border-box;width:50%;height:100%;padding:20pt;color:white;}.column.jsx-2626035465:first-child{background:#0B132B;border-radius:10px 0px 0px 10px;}.column.jsx-2626035465:last-child{background:#1C2541;border-radius:0px 10px 10px 0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.column.jsx-2626035465 h1.jsx-2626035465{margin-bottom:0.2em;}.options-wrapper.jsx-2626035465{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;height:inherit;overflow:scroll;}.option.jsx-2626035465{width:80px;height:80px;border-radius:25px;margin:10px;margin-right:20px;margin-left:0px;cursor:pointer;}.login-and-save-button.jsx-2626035465{box-sizing:border-box;padding:10px;font-weight:bold;background-color:#3f51b5;color:white;text-align:center;width:300px;margin:0 auto;margin-top:50px;border-radius:5px;cursor:pointer;}.login-and-save-button.jsx-2626035465:hover{border-bottom:2px solid #283894;-webkit-filter:brightness(98%);filter:brightness(98%);}.login-and-save-button.jsx-2626035465:active{border-bottom:2px solid #121c52;-webkit-filter:brightness(96%);filter:brightness(96%);}.gratitude.jsx-2626035465 a.jsx-2626035465{color:#ff9800;font-weight:bold;}.gratitude.jsx-2626035465{margin-top:30px;color:#ffc107;font-size:0.8em;text-transform:lowercase;position:absolute;right:0;bottom:0;padding:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMktvQixBQUdtQyxBQVVBLEFBT0gsQUFJQSxBQU9DLEFBR1AsQUFTRixBQVNXLEFBYVUsQUFJQSxBQUlsQixBQUlFLFdBakNKLEdBOEJLLEVBSUgsR0F6RGtCLEFBSUEsQ0FPbEMsRUE1QmtCLEFBVU4sQUF1Q0csQ0FSTSxPQWtDSCxDQUpsQixDQTVEYyxBQW1EVyxBQUlBLEdBaEJOLEdBakRQLElBeUNFLEVBOUJDLEVBZ0VZLEVBMUVaLEdBZ0JmLEFBSWUsQ0E2QlksRUFSUCxHQTlCTixJQVZPLFFBV3JCLEVBK0RvQixDQWpDRixFQWJHLEdBcUJQLEdBaEQ0QixNQTJEMUMsQUFJQSxFQXRCaUIsQ0FRRyxBQXlCVixRQUNDLE1BakNYLEdBa0NjLENBMUJBLFdBMkJkLENBMUJnQixDQWxERCxLQWtCUyxRQWlDTixVQXhCRCxNQXlCRyxrQkFDSCxlQUNqQixZQXJEcUIsTUEyQlEsR0FUSiw0REFqQnpCLHVDQWtCQSxHQVN5Qiw2R0FDUixlQUNDLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL3N2Zy1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xuaW1wb3J0IFdZU0lXWUcgZnJvbSAnLi4vY29tcG9uZW50cy9XWVNJV1lHJ1xuaW1wb3J0IHsgaGFpckNvbG9yT3B0aW9ucywgY2xvdGhlVHlwZU9wdGlvbnMsIGNsb3RoZUNvbG9yT3B0aW9ucywgZXllYnJvd1R5cGVPcHRpb25zLCBleWVUeXBlT3B0aW9ucywgZmFjaWFsSGFpclR5cGVPcHRpb25zLCBtb3V0aFR5cGVPcHRpb25zLCBza2luQ29sb3JPcHRpb25zLCBhY2Nlc3Nvcmllc1R5cGVPcHRpb25zLCB0b3BUeXBlT3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL29wdGlvbnMnXG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuLi9jb21wb25lbnRzL092ZXJsYXknXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdG9wVHlwZTogJ0xvbmdIYWlyRnJpZGEnLFxuICAgIGhhaXJDb2xvcjogJ0JsYWNrJyxcbiAgICBhY2Nlc3Nvcmllc1R5cGU6ICdCbGFuaycsXG4gICAgZmFjaWFsSGFpclR5cGU6ICdCbGFuaycsXG4gICAgY2xvdGhlVHlwZTogJ092ZXJhbGwnLFxuICAgIGNsb3RoZUNvbG9yOiAnR3JheTAxJyxcbiAgICBleWVUeXBlOiAnV2lua1dhY2t5JyxcbiAgICBleWVicm93VHlwZTogJ1JhaXNlZEV4Y2l0ZWQnLFxuICAgIG1vdXRoVHlwZTogJ1Rvbmd1ZScsXG4gICAgc2tpbkNvbG9yOiAnVGFubmVkJyxcbiAgICBvdmVybGF5U2hvdzogZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cbiAgICByZXR1cm4geyBwb3N0czogXCJkYXRhXCIgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHBhcnQsIGNvbG9yKSA9PiB7XG4gICAgY29uc29sZS5sb2cocGFydCwgY29sb3IpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbcGFydF06IGNvbG9yIH0pXG4gIH1cblxuICBoYW5kbGVUb2dnbGVPdmVybGF5ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5U2hvdzogIXRoaXMuc3RhdGUub3ZlcmxheVNob3cgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvcFR5cGUsIGFjY2Vzc29yaWVzVHlwZSwgZmFjaWFsSGFpclR5cGUsIGNsb3RoZVR5cGUsIGNsb3RoZUNvbG9yLCBleWVUeXBlLCBleWVicm93VHlwZSwgbW91dGhUeXBlLCBza2luQ29sb3IsIGhhaXJDb2xvciB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAsOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtdGFicy9zdHlsZS9yZWFjdC10YWJzLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgeyB0aGlzLnN0YXRlLm92ZXJsYXlTaG93ICYmIDxPdmVybGF5IGhhbmRsZVRvZ2dsZU92ZXJsYXk9e3RoaXMuaGFuZGxlVG9nZ2xlT3ZlcmxheX0gLz4gfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGgxPkJ1aWxkIFlvIFNlbGY8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLW1lbnVcIj5cbiAgICAgICAgICAgICAgPFRhYnM+XG4gICAgICAgICAgICAgICAgPFRhYkxpc3Q+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfjqggU2tpbjwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5GBIEV5ZXM8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+4pyP77iPIEV5ZWJyb3c8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+RhCBNb3V0aDwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7inILvuI8gSGFpcjwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5KIIEhhaXIgQ29sb3I8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+RlCBDbG90aGVzPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkZcgQ2xvdGhlcyBDb2xvcjwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5GTIEFjY2Vzc29yaWVzPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfpoEgRmFjaWFsIEhhaXI8L1RhYj5cbiAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIFNraW4gKi99XG4gICAgICAgICAgICAgICAgICAgIHtza2luQ29sb3JPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnc2tpbkNvbG9yJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwIH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIEV5ZXMgKi99XG4gICAgICAgICAgICAgICAgICB7ZXllVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnZXllVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBFeWVicm93cyAqL31cbiAgICAgICAgICAgICAgICAgIHtleWVicm93VHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnZXllYnJvd1R5cGUnLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwLCBiYWNrZ3JvdW5kOiBcIiNkMDhiNWJcIiwgcGFkZGluZzogNSB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIE1vdXRoICovfVxuICAgICAgICAgICAgICAgICAge21vdXRoVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnbW91dGhUeXBlJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIHRvcFR5cGUgYWthIEhhaXIgKi99XG4gICAgICAgICAgICAgICAgICB7dG9wVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgndG9wVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBIYWlyIENvbG9yICovfVxuICAgICAgICAgICAgICAgICAge2hhaXJDb2xvck9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnaGFpckNvbG9yJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIENsb3RoZXMgKi99XG4gICAgICAgICAgICAgICAgICB7Y2xvdGhlVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnY2xvdGhlVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBDbG90aGVzIENvbG9yICovfVxuICAgICAgICAgICAgICAgICAge2Nsb3RoZUNvbG9yT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdjbG90aGVDb2xvcicsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBBY2Nlc3NvcmllcyAqL31cbiAgICAgICAgICAgICAgICAgIHthY2Nlc3Nvcmllc1R5cGVPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2FjY2Vzc29yaWVzVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAsIGhlaWdodDogNDAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBGYWNpYWwgSGFpciAqL31cbiAgICAgICAgICAgICAgICAgIHtmYWNpYWxIYWlyVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnZmFjaWFsSGFpclR5cGUnLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDY1IH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFdZU0lXWUcgdG9wVHlwZT17dG9wVHlwZX0gYWNjZXNzb3JpZXNUeXBlPXthY2Nlc3Nvcmllc1R5cGV9IGZhY2lhbEhhaXJUeXBlPXtmYWNpYWxIYWlyVHlwZX0gY2xvdGhlVHlwZT17Y2xvdGhlVHlwZX0gY2xvdGhlQ29sb3I9e2Nsb3RoZUNvbG9yfSBleWVUeXBlPXtleWVUeXBlfSBleWVicm93VHlwZT17ZXllYnJvd1R5cGV9IG1vdXRoVHlwZT17bW91dGhUeXBlfSBza2luQ29sb3I9e3NraW5Db2xvcn0gaGFpckNvbG9yPXtoYWlyQ29sb3J9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWFuZC1zYXZlLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlT3ZlcmxheX0+8J+MiCBMb2dpbiBBbmQgU2F2ZSDwn6aEPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXRpdHVkZVwiPkJ1aWx0IHdpdGggPGEgaHJlZj1cImh0dHA6Ly9hdmF0YWFhcnMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPmF2YXRhYWFyczwvYT4gZGVzaWduZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vcGFibG9zdGFubGV5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+UGFibG8gU3RhbmxleTwvYT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcHAtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB0O1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBwdDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEIxMzJCO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW46bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUMyNTQxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dpbi1hbmQtc2F2ZS1idXR0b24ge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dpbi1hbmQtc2F2ZS1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyODM4OTQ7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTglKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ2luLWFuZC1zYXZlLWJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxMjFjNTI7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTYlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdyYXRpdHVkZSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ncmF0aXR1ZGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZjMTA3O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5LCBodG1sIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjE3NjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRhYnMtbWVudSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFicyB7XG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWItbGlzdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkMxMDc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLXBhbmVsLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2462029874",
      __self: this
    }, "body,html{width:100%;height:100%;margin:0;background-color:#fff176;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#333;font-family:'Nunito',sans-serif;}.tabs-menu{height:550px;}.react-tabs{height:inherit;}.react-tabs__tab-list{border-bottom:none;}.react-tabs__tab--selected{background:inherit;border:none;color:#FFF;border-radius:0;border-bottom:2px solid #FFC107;}.react-tabs__tab{padding-right:10px;padding-left:10px;color:#bdbdbd;}.react-tabs__tab-panel--selected{max-height:400px;}a{-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaVEyQixBQUd3QixBQVdFLEFBR0UsQUFHSSxBQUdBLEFBT0EsQUFLRixBQUdJLFdBbENULEVBV2QsRUFHQSxFQWtCQSxFQWZBLEFBR2MsQUFPTSxJQTFCVCxRQW9CRSxDQW5CYyxLQTBCWCxLQU5FLFFBYWxCLENBTkEsTUExQmUsQ0FvQm1CLGdDQUNsQyx5Q0FwQnFCLDZGQUNJLG1HQUNaLFdBQ3NCLGdDQUNuQyIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL3N2Zy1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xuaW1wb3J0IFdZU0lXWUcgZnJvbSAnLi4vY29tcG9uZW50cy9XWVNJV1lHJ1xuaW1wb3J0IHsgaGFpckNvbG9yT3B0aW9ucywgY2xvdGhlVHlwZU9wdGlvbnMsIGNsb3RoZUNvbG9yT3B0aW9ucywgZXllYnJvd1R5cGVPcHRpb25zLCBleWVUeXBlT3B0aW9ucywgZmFjaWFsSGFpclR5cGVPcHRpb25zLCBtb3V0aFR5cGVPcHRpb25zLCBza2luQ29sb3JPcHRpb25zLCBhY2Nlc3Nvcmllc1R5cGVPcHRpb25zLCB0b3BUeXBlT3B0aW9ucyB9IGZyb20gJy4uL3V0aWxzL29wdGlvbnMnXG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuLi9jb21wb25lbnRzL092ZXJsYXknXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdG9wVHlwZTogJ0xvbmdIYWlyRnJpZGEnLFxuICAgIGhhaXJDb2xvcjogJ0JsYWNrJyxcbiAgICBhY2Nlc3Nvcmllc1R5cGU6ICdCbGFuaycsXG4gICAgZmFjaWFsSGFpclR5cGU6ICdCbGFuaycsXG4gICAgY2xvdGhlVHlwZTogJ092ZXJhbGwnLFxuICAgIGNsb3RoZUNvbG9yOiAnR3JheTAxJyxcbiAgICBleWVUeXBlOiAnV2lua1dhY2t5JyxcbiAgICBleWVicm93VHlwZTogJ1JhaXNlZEV4Y2l0ZWQnLFxuICAgIG1vdXRoVHlwZTogJ1Rvbmd1ZScsXG4gICAgc2tpbkNvbG9yOiAnVGFubmVkJyxcbiAgICBvdmVybGF5U2hvdzogZmFsc2VcbiAgfVxuXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG5cbiAgICByZXR1cm4geyBwb3N0czogXCJkYXRhXCIgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlID0gKHBhcnQsIGNvbG9yKSA9PiB7XG4gICAgY29uc29sZS5sb2cocGFydCwgY29sb3IpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbcGFydF06IGNvbG9yIH0pXG4gIH1cblxuICBoYW5kbGVUb2dnbGVPdmVybGF5ID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBvdmVybGF5U2hvdzogIXRoaXMuc3RhdGUub3ZlcmxheVNob3cgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHRvcFR5cGUsIGFjY2Vzc29yaWVzVHlwZSwgZmFjaWFsSGFpclR5cGUsIGNsb3RoZVR5cGUsIGNsb3RoZUNvbG9yLCBleWVUeXBlLCBleWVicm93VHlwZSwgbW91dGhUeXBlLCBza2luQ29sb3IsIGhhaXJDb2xvciB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAsOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtdGFicy9zdHlsZS9yZWFjdC10YWJzLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgeyB0aGlzLnN0YXRlLm92ZXJsYXlTaG93ICYmIDxPdmVybGF5IGhhbmRsZVRvZ2dsZU92ZXJsYXk9e3RoaXMuaGFuZGxlVG9nZ2xlT3ZlcmxheX0gLz4gfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGgxPkJ1aWxkIFlvIFNlbGY8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLW1lbnVcIj5cbiAgICAgICAgICAgICAgPFRhYnM+XG4gICAgICAgICAgICAgICAgPFRhYkxpc3Q+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfjqggU2tpbjwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5GBIEV5ZXM8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+4pyP77iPIEV5ZWJyb3c8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+RhCBNb3V0aDwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7inILvuI8gSGFpcjwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5KIIEhhaXIgQ29sb3I8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+RlCBDbG90aGVzPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkZcgQ2xvdGhlcyBDb2xvcjwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5GTIEFjY2Vzc29yaWVzPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfpoEgRmFjaWFsIEhhaXI8L1RhYj5cbiAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgey8qIFNraW4gKi99XG4gICAgICAgICAgICAgICAgICAgIHtza2luQ29sb3JPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnc2tpbkNvbG9yJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwIH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIEV5ZXMgKi99XG4gICAgICAgICAgICAgICAgICB7ZXllVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnZXllVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBFeWVicm93cyAqL31cbiAgICAgICAgICAgICAgICAgIHtleWVicm93VHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnZXllYnJvd1R5cGUnLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDgwLCBiYWNrZ3JvdW5kOiBcIiNkMDhiNWJcIiwgcGFkZGluZzogNSB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIE1vdXRoICovfVxuICAgICAgICAgICAgICAgICAge21vdXRoVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnbW91dGhUeXBlJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIHRvcFR5cGUgYWthIEhhaXIgKi99XG4gICAgICAgICAgICAgICAgICB7dG9wVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgndG9wVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBIYWlyIENvbG9yICovfVxuICAgICAgICAgICAgICAgICAge2hhaXJDb2xvck9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnaGFpckNvbG9yJywgb3B0aW9uLm5hbWUpfT5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgey8qIENsb3RoZXMgKi99XG4gICAgICAgICAgICAgICAgICB7Y2xvdGhlVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnY2xvdGhlVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBDbG90aGVzIENvbG9yICovfVxuICAgICAgICAgICAgICAgICAge2Nsb3RoZUNvbG9yT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIGtleT17b3B0aW9uLm5hbWV9IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ2hhbmdlKCdjbG90aGVDb2xvcicsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBBY2Nlc3NvcmllcyAqL31cbiAgICAgICAgICAgICAgICAgIHthY2Nlc3Nvcmllc1R5cGVPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2FjY2Vzc29yaWVzVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAsIGhlaWdodDogNDAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgIHsvKiBGYWNpYWwgSGFpciAqL31cbiAgICAgICAgICAgICAgICAgIHtmYWNpYWxIYWlyVHlwZU9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnZmFjaWFsSGFpclR5cGUnLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3sgd2lkdGg6IDY1IH19IHNyYz17b3B0aW9uLmZpbGV9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFdZU0lXWUcgdG9wVHlwZT17dG9wVHlwZX0gYWNjZXNzb3JpZXNUeXBlPXthY2Nlc3Nvcmllc1R5cGV9IGZhY2lhbEhhaXJUeXBlPXtmYWNpYWxIYWlyVHlwZX0gY2xvdGhlVHlwZT17Y2xvdGhlVHlwZX0gY2xvdGhlQ29sb3I9e2Nsb3RoZUNvbG9yfSBleWVUeXBlPXtleWVUeXBlfSBleWVicm93VHlwZT17ZXllYnJvd1R5cGV9IG1vdXRoVHlwZT17bW91dGhUeXBlfSBza2luQ29sb3I9e3NraW5Db2xvcn0gaGFpckNvbG9yPXtoYWlyQ29sb3J9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWFuZC1zYXZlLWJ1dHRvblwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVG9nZ2xlT3ZlcmxheX0+8J+MiCBMb2dpbiBBbmQgU2F2ZSDwn6aEPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYXRpdHVkZVwiPkJ1aWx0IHdpdGggPGEgaHJlZj1cImh0dHA6Ly9hdmF0YWFhcnMuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPmF2YXRhYWFyczwvYT4gZGVzaWduZWQgYnkgPGEgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vcGFibG9zdGFubGV5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+UGFibG8gU3RhbmxleTwvYT48L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcHAtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB0O1xuICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBwdDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEIxMzJCO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW46bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUMyNTQxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dpbi1hbmQtc2F2ZS1idXR0b24ge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5sb2dpbi1hbmQtc2F2ZS1idXR0b246aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMyODM4OTQ7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTglKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxvZ2luLWFuZC1zYXZlLWJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMxMjFjNTI7XG4gICAgICAgICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoOTYlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmdyYXRpdHVkZSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZmY5ODAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5ncmF0aXR1ZGUge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZjMTA3O1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5LCBodG1sIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjE3NjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRhYnMtbWVudSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDU1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFicyB7XG4gICAgICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWItbGlzdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkMxMDc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLXBhbmVsLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/pages/index.js */"));
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