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

/***/ "./components/SVGEditor.js":
/*!*********************************!*\
  !*** ./components/SVGEditor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/danigrant/Projects/svg-next/components/SVGEditor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (({
  faceColor,
  eyeColor,
  hairColor
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "face is ", faceColor), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, "eye is ", eyeColor), __jsx("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, "hair is ", hairColor)));
/*

const draw = SVG().addTo('body').size(500, 600)

const face = draw.ellipse(200, 200).move(100, 50).fill(faceColor)

const leftEyeOuter = draw.ellipse(70, 100).move(125, 90).fill('#fff')
const rightEyeOuter = draw.ellipse(70, 100).move(200, 90).fill('#fff')

const leftEyeColor = draw.ellipse(50, 70).move(135, 105).fill(eyeColor)
const rightEyeColor = draw.ellipse(50, 70).move(210, 105).fill(eyeColor)

const leftEyePupil = draw.ellipse(20, 20).move(155, 115).fill('#fff')
const rightEyePupil = draw.ellipse(20, 20).move(230, 115).fill('#fff')

const mouth = draw.ellipse(20, 20).move(190, 200).fill('#E730BE')

const hair = draw.path('M72.4491 13.4756L72.4167 13.4458L85.7031 13.5857L85.4528 13.3558L100.889 17.5035L100.473 16.84L105.87 18.589L128.333 30.9318L122.832 13.1648L112.127 15.5737L106.46 5.30286L96.0727 9.80508L90.9219 1.57106L79.0412 7.46454L71.6651 0.687134L64.9517 6.58672L58.4112 0.577042L48.599 9.1998L37.722 3.10396L30.4331 13.4868L18.3337 10.3257L15.2079 19.2228L6.45419 16.9357L0.281891 34.5042L25.3173 21.8639L24.5184 21.6552L33.5817 17.0792L51.2648 13.2526L72.4491 13.4756Z').move(135, 44).fill(hairColor)

*/

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
/* harmony import */ var _components_SVGEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/SVGEditor */ "./components/SVGEditor.js");
var _jsxFileName = "/Users/danigrant/Projects/svg-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      faceColor: '#B7C7FF',
      hairColor: '#E730BE',
      eyeColor: '#453B85'
    });

    _defineProperty(this, "faceColorOptions", ["#851de0", "#aa26da", "#c355f5", "#f1fa3c"]);

    _defineProperty(this, "eyeColorOptions", ["#defcf9", "#cadefc", "#c3bef0", "#cca8e9"]);

    _defineProperty(this, "hairColorOptions", ["#ffcc00", "#ff6666", "#cc0066", "#66cccc"]);

    _defineProperty(this, "handleColorChange", (part, color) => {
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
      faceColor,
      hairColor,
      eyeColor
    } = this.state;
    return __jsx("div", {
      className: "jsx-777095442" + " " + "page-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Nunito:400,700,900&display=swap",
      rel: "stylesheet",
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/react-tabs/style/react-tabs.css",
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-777095442" + " " + "app-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-777095442" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Build Yo Self"), __jsx("div", {
      className: "jsx-777095442" + " " + "tabs-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabList"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Face Color"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Eye Color"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "Hair Color")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, "lots of face colors"), __jsx("div", {
      className: "jsx-777095442" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, this.faceColorOptions.map(option => __jsx("div", {
      style: {
        background: option
      },
      key: option,
      onClick: () => this.handleColorChange('faceColor', option),
      className: "jsx-777095442" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, "lots of eye colors")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, "lots of hair colors"))))), __jsx("div", {
      className: "jsx-777095442" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, __jsx(_components_SVGEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      faceColor: faceColor,
      eyeColor: eyeColor,
      hairColor: hairColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1457137381",
      __self: this
    }, ".app-container.jsx-777095442{background-color:#fff;width:500pt;height:400pt;border-radius:10px;box-shadow:0px 0px 40px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.column.jsx-777095442{box-sizing:border-box;width:50%;height:100%;padding:20pt;color:white;}.column.jsx-777095442:first-child{background:#0B132B;border-radius:10px 0px 0px 10px;}.column.jsx-777095442:last-child{background:#1C2541;border-radius:0px 10px 10px 0px;}.column.jsx-777095442 h1.jsx-777095442{margin-bottom:0.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEVvQixBQUdtQyxBQVNBLEFBT0gsQUFJQSxBQUlDLG1CQVBZLEFBSUEsQ0FJbEMsRUF4QmMsQUFTRixVQUNFLEVBVEMsVUFVQSxHQVRNLElBZXJCLEFBSUEsTUFUYyxTQVQ0QixHQVUxQyxxQ0FUZSwwRUFDTSxxRUFDckIiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9zdmctbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJztcbmltcG9ydCBTVkdFZGl0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9TVkdFZGl0b3InXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGZhY2VDb2xvcjogJyNCN0M3RkYnLCBoYWlyQ29sb3I6ICcjRTczMEJFJywgZXllQ29sb3I6ICcjNDUzQjg1JyB9XG5cbiAgZmFjZUNvbG9yT3B0aW9ucyA9IFtcbiAgICBcIiM4NTFkZTBcIixcbiAgICBcIiNhYTI2ZGFcIixcbiAgICBcIiNjMzU1ZjVcIixcbiAgICBcIiNmMWZhM2NcIlxuICBdXG5cbiAgZXllQ29sb3JPcHRpb25zID0gW1xuICAgIFwiI2RlZmNmOVwiLFxuICAgIFwiI2NhZGVmY1wiLFxuICAgIFwiI2MzYmVmMFwiLFxuICAgIFwiI2NjYThlOVwiXG4gIF1cblxuICBoYWlyQ29sb3JPcHRpb25zID0gW1xuICAgIFwiI2ZmY2MwMFwiLFxuICAgIFwiI2ZmNjY2NlwiLFxuICAgIFwiI2NjMDA2NlwiLFxuICAgIFwiIzY2Y2NjY1wiXG4gIF1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXG4gICAgcmV0dXJuIHsgcG9zdHM6IFwiZGF0YVwiIH1cbiAgfVxuXG4gIGhhbmRsZUNvbG9yQ2hhbmdlID0gKHBhcnQsIGNvbG9yKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtwYXJ0XTogY29sb3IgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZhY2VDb2xvciwgaGFpckNvbG9yLCBleWVDb2xvciB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAsOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtdGFicy9zdHlsZS9yZWFjdC10YWJzLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxoMT5CdWlsZCBZbyBTZWxmPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1tZW51XCI+XG4gICAgICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgICAgIDxUYWJMaXN0PlxuICAgICAgICAgICAgICAgICAgPFRhYj5GYWNlIENvbG9yPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPkV5ZSBDb2xvcjwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj5IYWlyIENvbG9yPC9UYWI+XG4gICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxwPmxvdHMgb2YgZmFjZSBjb2xvcnM8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5mYWNlQ29sb3JPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBvcHRpb24gfX0ga2V5PXtvcHRpb259IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ29sb3JDaGFuZ2UoJ2ZhY2VDb2xvcicsIG9wdGlvbil9PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPHA+bG90cyBvZiBleWUgY29sb3JzPC9wPlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPHA+bG90cyBvZiBoYWlyIGNvbG9yczwvcD5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFNWR0VkaXRvciBmYWNlQ29sb3I9e2ZhY2VDb2xvcn0gZXllQ29sb3I9e2V5ZUNvbG9yfSBoYWlyQ29sb3I9e2hhaXJDb2xvcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXBwLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB0O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBwdDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB0O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwQjEzMkI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxQzI1NDE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbiBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5LCBodG1sIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjE3NjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi1saXN0IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWItLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGQzEwNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYiB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWI6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcHRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1263513118",
      __self: this
    }, "body,html{width:100%;height:100%;margin:0;background-color:#fff176;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#333;font-family:'Nunito',sans-serif;}.react-tabs__tab-list{border-bottom:none;}.react-tabs__tab--selected{background:inherit;border:none;color:#FFF;border-radius:0;border-bottom:2px solid #FFC107;}.react-tabs__tab{padding-right:10px;padding-left:10px;color:#bdbdbd;}.react-tabs__tab:first-child{padding-left:0;}.options-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.option{width:25px;height:25px;border-radius:25px;margin:10px;margin-right:20px;margin-left:0px;background:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkcyQixBQUd3QixBQVdRLEFBR0EsQUFPQSxBQUtKLEFBR0YsQUFPRixXQW5DQyxBQW9DQSxJQVZkLElBZkEsQUFHYyxBQU9NLElBcEJULEFBb0NVLFFBdEJSLENBYmMsS0FvQlgsS0FORSxBQXNCSixTQWZkLEdBZ0JvQixHQXBDTCxDQWNtQixjQXVCaEIsRUFYRyxjQVlGLEVBdkJuQixlQXdCQSwwQkF0Q3FCLFlBMEJKLHlEQUNZLHdCQTFCSixpRkEyQkEsa0JBMUJaLFdBQ3NCLGdDQUNuQyxnREF5QkEiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9zdmctbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJztcbmltcG9ydCBTVkdFZGl0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9TVkdFZGl0b3InXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7IGZhY2VDb2xvcjogJyNCN0M3RkYnLCBoYWlyQ29sb3I6ICcjRTczMEJFJywgZXllQ29sb3I6ICcjNDUzQjg1JyB9XG5cbiAgZmFjZUNvbG9yT3B0aW9ucyA9IFtcbiAgICBcIiM4NTFkZTBcIixcbiAgICBcIiNhYTI2ZGFcIixcbiAgICBcIiNjMzU1ZjVcIixcbiAgICBcIiNmMWZhM2NcIlxuICBdXG5cbiAgZXllQ29sb3JPcHRpb25zID0gW1xuICAgIFwiI2RlZmNmOVwiLFxuICAgIFwiI2NhZGVmY1wiLFxuICAgIFwiI2MzYmVmMFwiLFxuICAgIFwiI2NjYThlOVwiXG4gIF1cblxuICBoYWlyQ29sb3JPcHRpb25zID0gW1xuICAgIFwiI2ZmY2MwMFwiLFxuICAgIFwiI2ZmNjY2NlwiLFxuICAgIFwiI2NjMDA2NlwiLFxuICAgIFwiIzY2Y2NjY1wiXG4gIF1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXG4gICAgcmV0dXJuIHsgcG9zdHM6IFwiZGF0YVwiIH1cbiAgfVxuXG4gIGhhbmRsZUNvbG9yQ2hhbmdlID0gKHBhcnQsIGNvbG9yKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtwYXJ0XTogY29sb3IgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGZhY2VDb2xvciwgaGFpckNvbG9yLCBleWVDb2xvciB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAsOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtdGFicy9zdHlsZS9yZWFjdC10YWJzLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxoMT5CdWlsZCBZbyBTZWxmPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1tZW51XCI+XG4gICAgICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgICAgIDxUYWJMaXN0PlxuICAgICAgICAgICAgICAgICAgPFRhYj5GYWNlIENvbG9yPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPkV5ZSBDb2xvcjwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj5IYWlyIENvbG9yPC9UYWI+XG4gICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxwPmxvdHMgb2YgZmFjZSBjb2xvcnM8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5mYWNlQ29sb3JPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBvcHRpb24gfX0ga2V5PXtvcHRpb259IG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlQ29sb3JDaGFuZ2UoJ2ZhY2VDb2xvcicsIG9wdGlvbil9PlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPHA+bG90cyBvZiBleWUgY29sb3JzPC9wPlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPHA+bG90cyBvZiBoYWlyIGNvbG9yczwvcD5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFNWR0VkaXRvciBmYWNlQ29sb3I9e2ZhY2VDb2xvcn0gZXllQ29sb3I9e2V5ZUNvbG9yfSBoYWlyQ29sb3I9e2hhaXJDb2xvcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXBwLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDUwMHB0O1xuICAgICAgICAgICAgaGVpZ2h0OiA0MDBwdDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDQwcHggcmdiYSgwLDAsMCwwLjEpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW4ge1xuICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB0O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwQjEzMkI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDBweCAwcHggMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxQzI1NDE7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHggMTBweCAxMHB4IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbiBoMSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5LCBodG1sIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjE3NjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi1saXN0IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWItLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGQzEwNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYiB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWI6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcHRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGdyZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/pages/index.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danigrant/Projects/svg-next/pages/index.js */"./pages/index.js");


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