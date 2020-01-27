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
/* harmony import */ var svg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg.js */ "svg.js");
/* harmony import */ var svg_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg_js__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/danigrant/Projects/svg-next/components/SVGEditor.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const SVGEditor = ({
  faceColor,
  eyeColor,
  hairColor
}) => __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
});

/* harmony default export */ __webpack_exports__["default"] = (SVGEditor);

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




/*

let faceColor = '#B7C7FF'
let eyeColor = '#453B85'
let mouthColor = '#E730BE'
let hairColor = '#7AD29D'

const draw = SVG().addTo('body').size(500, 600)

const face = draw.ellipse(200, 200).move(100, 50).fill(faceColor)

const leftEyeOuter = draw.ellipse(70, 100).move(125, 90).fill('#fff')
const rightEyeOuter = draw.ellipse(70, 100).move(200, 90).fill('#fff')

const leftEyeColor = draw.ellipse(50, 70).move(135, 105).fill(eyeColor)
const rightEyeColor = draw.ellipse(50, 70).move(210, 105).fill(eyeColor)

const leftEyePupil = draw.ellipse(20, 20).move(155, 115).fill('#fff')
const rightEyePupil = draw.ellipse(20, 20).move(230, 115).fill('#fff')

const mouth = draw.ellipse(20, 20).move(190, 200).fill(mouthColor)

const hair = draw.path('M72.4491 13.4756L72.4167 13.4458L85.7031 13.5857L85.4528 13.3558L100.889 17.5035L100.473 16.84L105.87 18.589L128.333 30.9318L122.832 13.1648L112.127 15.5737L106.46 5.30286L96.0727 9.80508L90.9219 1.57106L79.0412 7.46454L71.6651 0.687134L64.9517 6.58672L58.4112 0.577042L48.599 9.1998L37.722 3.10396L30.4331 13.4868L18.3337 10.3257L15.2079 19.2228L6.45419 16.9357L0.281891 34.5042L25.3173 21.8639L24.5184 21.6552L33.5817 17.0792L51.2648 13.2526L72.4491 13.4756Z').move(135, 44).fill(hairColor)

//face.fill('#808')

*/

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
      // this.setState({ [part]: color })
      console.log("here");
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
        lineNumber: 71
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Nunito:400,700,900&display=swap",
      rel: "stylesheet",
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/react-tabs/style/react-tabs.css",
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-777095442" + " " + "app-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-777095442" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, "Build Yo Self"), __jsx("div", {
      className: "jsx-777095442" + " " + "tabs-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabList"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "Face Color"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, "Eye Color"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "Hair Color")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, "lots of face colors"), __jsx("div", {
      className: "jsx-777095442" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, this.faceColorOptions.map(option => __jsx("div", {
      style: {
        background: option
      },
      onClick: this.handleColorChange,
      className: "jsx-777095442" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    })))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, "lots of eye colors")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx("p", {
      className: "jsx-777095442",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "lots of hair colors"))))), __jsx("div", {
      className: "jsx-777095442" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx(_components_SVGEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      faceColor: faceColor,
      eyeColor: eyeColor,
      hairColor: hairColor,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1457137381",
      __self: this
    }, ".app-container.jsx-777095442{background-color:#fff;width:500pt;height:400pt;border-radius:10px;box-shadow:0px 0px 40px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.column.jsx-777095442{box-sizing:border-box;width:50%;height:100%;padding:20pt;color:white;}.column.jsx-777095442:first-child{background:#0B132B;border-radius:10px 0px 0px 10px;}.column.jsx-777095442:last-child{background:#1C2541;border-radius:0px 10px 10px 0px;}.column.jsx-777095442 h1.jsx-777095442{margin-bottom:0.2em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdvQixBQUdtQyxBQVNBLEFBT0gsQUFJQSxBQUlDLG1CQVBZLEFBSUEsQ0FJbEMsRUF4QmMsQUFTRixVQUNFLEVBVEMsVUFVQSxHQVRNLElBZXJCLEFBSUEsTUFUYyxTQVQ0QixHQVUxQyxxQ0FUZSwwRUFDTSxxRUFDckIiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9zdmctbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJztcbmltcG9ydCBTVkdFZGl0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9TVkdFZGl0b3InXG5cbi8qXG5cbmxldCBmYWNlQ29sb3IgPSAnI0I3QzdGRidcbmxldCBleWVDb2xvciA9ICcjNDUzQjg1J1xubGV0IG1vdXRoQ29sb3IgPSAnI0U3MzBCRSdcbmxldCBoYWlyQ29sb3IgPSAnIzdBRDI5RCdcblxuY29uc3QgZHJhdyA9IFNWRygpLmFkZFRvKCdib2R5Jykuc2l6ZSg1MDAsIDYwMClcblxuY29uc3QgZmFjZSA9IGRyYXcuZWxsaXBzZSgyMDAsIDIwMCkubW92ZSgxMDAsIDUwKS5maWxsKGZhY2VDb2xvcilcblxuY29uc3QgbGVmdEV5ZU91dGVyID0gZHJhdy5lbGxpcHNlKDcwLCAxMDApLm1vdmUoMTI1LCA5MCkuZmlsbCgnI2ZmZicpXG5jb25zdCByaWdodEV5ZU91dGVyID0gZHJhdy5lbGxpcHNlKDcwLCAxMDApLm1vdmUoMjAwLCA5MCkuZmlsbCgnI2ZmZicpXG5cbmNvbnN0IGxlZnRFeWVDb2xvciA9IGRyYXcuZWxsaXBzZSg1MCwgNzApLm1vdmUoMTM1LCAxMDUpLmZpbGwoZXllQ29sb3IpXG5jb25zdCByaWdodEV5ZUNvbG9yID0gZHJhdy5lbGxpcHNlKDUwLCA3MCkubW92ZSgyMTAsIDEwNSkuZmlsbChleWVDb2xvcilcblxuY29uc3QgbGVmdEV5ZVB1cGlsID0gZHJhdy5lbGxpcHNlKDIwLCAyMCkubW92ZSgxNTUsIDExNSkuZmlsbCgnI2ZmZicpXG5jb25zdCByaWdodEV5ZVB1cGlsID0gZHJhdy5lbGxpcHNlKDIwLCAyMCkubW92ZSgyMzAsIDExNSkuZmlsbCgnI2ZmZicpXG5cbmNvbnN0IG1vdXRoID0gZHJhdy5lbGxpcHNlKDIwLCAyMCkubW92ZSgxOTAsIDIwMCkuZmlsbChtb3V0aENvbG9yKVxuXG5jb25zdCBoYWlyID0gZHJhdy5wYXRoKCdNNzIuNDQ5MSAxMy40NzU2TDcyLjQxNjcgMTMuNDQ1OEw4NS43MDMxIDEzLjU4NTdMODUuNDUyOCAxMy4zNTU4TDEwMC44ODkgMTcuNTAzNUwxMDAuNDczIDE2Ljg0TDEwNS44NyAxOC41ODlMMTI4LjMzMyAzMC45MzE4TDEyMi44MzIgMTMuMTY0OEwxMTIuMTI3IDE1LjU3MzdMMTA2LjQ2IDUuMzAyODZMOTYuMDcyNyA5LjgwNTA4TDkwLjkyMTkgMS41NzEwNkw3OS4wNDEyIDcuNDY0NTRMNzEuNjY1MSAwLjY4NzEzNEw2NC45NTE3IDYuNTg2NzJMNTguNDExMiAwLjU3NzA0Mkw0OC41OTkgOS4xOTk4TDM3LjcyMiAzLjEwMzk2TDMwLjQzMzEgMTMuNDg2OEwxOC4zMzM3IDEwLjMyNTdMMTUuMjA3OSAxOS4yMjI4TDYuNDU0MTkgMTYuOTM1N0wwLjI4MTg5MSAzNC41MDQyTDI1LjMxNzMgMjEuODYzOUwyNC41MTg0IDIxLjY1NTJMMzMuNTgxNyAxNy4wNzkyTDUxLjI2NDggMTMuMjUyNkw3Mi40NDkxIDEzLjQ3NTZaJykubW92ZSgxMzUsIDQ0KS5maWxsKGhhaXJDb2xvcilcblxuLy9mYWNlLmZpbGwoJyM4MDgnKVxuXG4qL1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBmYWNlQ29sb3I6ICcjQjdDN0ZGJywgaGFpckNvbG9yOiAnI0U3MzBCRScsIGV5ZUNvbG9yOiAnIzQ1M0I4NScgfVxuXG4gIGZhY2VDb2xvck9wdGlvbnMgPSBbXG4gICAgXCIjODUxZGUwXCIsXG4gICAgXCIjYWEyNmRhXCIsXG4gICAgXCIjYzM1NWY1XCIsXG4gICAgXCIjZjFmYTNjXCJcbiAgXVxuXG4gIGV5ZUNvbG9yT3B0aW9ucyA9IFtcbiAgICBcIiNkZWZjZjlcIixcbiAgICBcIiNjYWRlZmNcIixcbiAgICBcIiNjM2JlZjBcIixcbiAgICBcIiNjY2E4ZTlcIlxuICBdXG5cbiAgaGFpckNvbG9yT3B0aW9ucyA9IFtcbiAgICBcIiNmZmNjMDBcIixcbiAgICBcIiNmZjY2NjZcIixcbiAgICBcIiNjYzAwNjZcIixcbiAgICBcIiM2NmNjY2NcIlxuICBdXG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblxuICAgIHJldHVybiB7IHBvc3RzOiBcImRhdGFcIiB9XG4gIH1cblxuICBoYW5kbGVDb2xvckNoYW5nZSA9IChwYXJ0LCBjb2xvcikgPT4ge1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBbcGFydF06IGNvbG9yIH0pXG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmFjZUNvbG9yLCBoYWlyQ29sb3IsIGV5ZUNvbG9yIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMCw5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC10YWJzL3N0eWxlL3JlYWN0LXRhYnMuY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGgxPkJ1aWxkIFlvIFNlbGY8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLW1lbnVcIj5cbiAgICAgICAgICAgICAgPFRhYnM+XG4gICAgICAgICAgICAgICAgPFRhYkxpc3Q+XG4gICAgICAgICAgICAgICAgICA8VGFiPkZhY2UgQ29sb3I8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+RXllIENvbG9yPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPkhhaXIgQ29sb3I8L1RhYj5cbiAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPHA+bG90cyBvZiBmYWNlIGNvbG9yczwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmZhY2VDb2xvck9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IG9wdGlvbiB9fSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbG9yQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxwPmxvdHMgb2YgZXllIGNvbG9yczwvcD5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxwPmxvdHMgb2YgaGFpciBjb2xvcnM8L3A+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxTVkdFZGl0b3IgZmFjZUNvbG9yPXtmYWNlQ29sb3J9IGV5ZUNvbG9yPXtleWVDb2xvcn0gaGFpckNvbG9yPXtoYWlyQ29sb3J9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFwcC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiA1MDBwdDtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBwdDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEIxMzJCO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW46bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUMyNTQxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW4gaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSwgaHRtbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYxNzY7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWItbGlzdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkMxMDc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wdGlvbnMtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1263513118",
      __self: this
    }, "body,html{width:100%;height:100%;margin:0;background-color:#fff176;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#333;font-family:'Nunito',sans-serif;}.react-tabs__tab-list{border-bottom:none;}.react-tabs__tab--selected{background:inherit;border:none;color:#FFF;border-radius:0;border-bottom:2px solid #FFC107;}.react-tabs__tab{padding-right:10px;padding-left:10px;color:#bdbdbd;}.react-tabs__tab:first-child{padding-left:0;}.options-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.option{width:25px;height:25px;border-radius:25px;margin:10px;margin-right:20px;margin-left:0px;background:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0kyQixBQUd3QixBQVdRLEFBR0EsQUFPQSxBQUtKLEFBR0YsQUFPRixXQW5DQyxBQW9DQSxJQVZkLElBZkEsQUFHYyxBQU9NLElBcEJULEFBb0NVLFFBdEJSLENBYmMsS0FvQlgsS0FORSxBQXNCSixTQWZkLEdBZ0JvQixHQXBDTCxDQWNtQixjQXVCaEIsRUFYRyxjQVlGLEVBdkJuQixlQXdCQSwwQkF0Q3FCLFlBMEJKLHlEQUNZLHdCQTFCSixpRkEyQkEsa0JBMUJaLFdBQ3NCLGdDQUNuQyxnREF5QkEiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9zdmctbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFRhYiwgVGFicywgVGFiTGlzdCwgVGFiUGFuZWwgfSBmcm9tICdyZWFjdC10YWJzJztcbmltcG9ydCBTVkdFZGl0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9TVkdFZGl0b3InXG5cbi8qXG5cbmxldCBmYWNlQ29sb3IgPSAnI0I3QzdGRidcbmxldCBleWVDb2xvciA9ICcjNDUzQjg1J1xubGV0IG1vdXRoQ29sb3IgPSAnI0U3MzBCRSdcbmxldCBoYWlyQ29sb3IgPSAnIzdBRDI5RCdcblxuY29uc3QgZHJhdyA9IFNWRygpLmFkZFRvKCdib2R5Jykuc2l6ZSg1MDAsIDYwMClcblxuY29uc3QgZmFjZSA9IGRyYXcuZWxsaXBzZSgyMDAsIDIwMCkubW92ZSgxMDAsIDUwKS5maWxsKGZhY2VDb2xvcilcblxuY29uc3QgbGVmdEV5ZU91dGVyID0gZHJhdy5lbGxpcHNlKDcwLCAxMDApLm1vdmUoMTI1LCA5MCkuZmlsbCgnI2ZmZicpXG5jb25zdCByaWdodEV5ZU91dGVyID0gZHJhdy5lbGxpcHNlKDcwLCAxMDApLm1vdmUoMjAwLCA5MCkuZmlsbCgnI2ZmZicpXG5cbmNvbnN0IGxlZnRFeWVDb2xvciA9IGRyYXcuZWxsaXBzZSg1MCwgNzApLm1vdmUoMTM1LCAxMDUpLmZpbGwoZXllQ29sb3IpXG5jb25zdCByaWdodEV5ZUNvbG9yID0gZHJhdy5lbGxpcHNlKDUwLCA3MCkubW92ZSgyMTAsIDEwNSkuZmlsbChleWVDb2xvcilcblxuY29uc3QgbGVmdEV5ZVB1cGlsID0gZHJhdy5lbGxpcHNlKDIwLCAyMCkubW92ZSgxNTUsIDExNSkuZmlsbCgnI2ZmZicpXG5jb25zdCByaWdodEV5ZVB1cGlsID0gZHJhdy5lbGxpcHNlKDIwLCAyMCkubW92ZSgyMzAsIDExNSkuZmlsbCgnI2ZmZicpXG5cbmNvbnN0IG1vdXRoID0gZHJhdy5lbGxpcHNlKDIwLCAyMCkubW92ZSgxOTAsIDIwMCkuZmlsbChtb3V0aENvbG9yKVxuXG5jb25zdCBoYWlyID0gZHJhdy5wYXRoKCdNNzIuNDQ5MSAxMy40NzU2TDcyLjQxNjcgMTMuNDQ1OEw4NS43MDMxIDEzLjU4NTdMODUuNDUyOCAxMy4zNTU4TDEwMC44ODkgMTcuNTAzNUwxMDAuNDczIDE2Ljg0TDEwNS44NyAxOC41ODlMMTI4LjMzMyAzMC45MzE4TDEyMi44MzIgMTMuMTY0OEwxMTIuMTI3IDE1LjU3MzdMMTA2LjQ2IDUuMzAyODZMOTYuMDcyNyA5LjgwNTA4TDkwLjkyMTkgMS41NzEwNkw3OS4wNDEyIDcuNDY0NTRMNzEuNjY1MSAwLjY4NzEzNEw2NC45NTE3IDYuNTg2NzJMNTguNDExMiAwLjU3NzA0Mkw0OC41OTkgOS4xOTk4TDM3LjcyMiAzLjEwMzk2TDMwLjQzMzEgMTMuNDg2OEwxOC4zMzM3IDEwLjMyNTdMMTUuMjA3OSAxOS4yMjI4TDYuNDU0MTkgMTYuOTM1N0wwLjI4MTg5MSAzNC41MDQyTDI1LjMxNzMgMjEuODYzOUwyNC41MTg0IDIxLjY1NTJMMzMuNTgxNyAxNy4wNzkyTDUxLjI2NDggMTMuMjUyNkw3Mi40NDkxIDEzLjQ3NTZaJykubW92ZSgxMzUsIDQ0KS5maWxsKGhhaXJDb2xvcilcblxuLy9mYWNlLmZpbGwoJyM4MDgnKVxuXG4qL1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBmYWNlQ29sb3I6ICcjQjdDN0ZGJywgaGFpckNvbG9yOiAnI0U3MzBCRScsIGV5ZUNvbG9yOiAnIzQ1M0I4NScgfVxuXG4gIGZhY2VDb2xvck9wdGlvbnMgPSBbXG4gICAgXCIjODUxZGUwXCIsXG4gICAgXCIjYWEyNmRhXCIsXG4gICAgXCIjYzM1NWY1XCIsXG4gICAgXCIjZjFmYTNjXCJcbiAgXVxuXG4gIGV5ZUNvbG9yT3B0aW9ucyA9IFtcbiAgICBcIiNkZWZjZjlcIixcbiAgICBcIiNjYWRlZmNcIixcbiAgICBcIiNjM2JlZjBcIixcbiAgICBcIiNjY2E4ZTlcIlxuICBdXG5cbiAgaGFpckNvbG9yT3B0aW9ucyA9IFtcbiAgICBcIiNmZmNjMDBcIixcbiAgICBcIiNmZjY2NjZcIixcbiAgICBcIiNjYzAwNjZcIixcbiAgICBcIiM2NmNjY2NcIlxuICBdXG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblxuICAgIHJldHVybiB7IHBvc3RzOiBcImRhdGFcIiB9XG4gIH1cblxuICBoYW5kbGVDb2xvckNoYW5nZSA9IChwYXJ0LCBjb2xvcikgPT4ge1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBbcGFydF06IGNvbG9yIH0pXG4gICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZmFjZUNvbG9yLCBoYWlyQ29sb3IsIGV5ZUNvbG9yIH0gPSB0aGlzLnN0YXRlXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXdyYXBwZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1OdW5pdG86NDAwLDcwMCw5MDAmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdC10YWJzL3N0eWxlL3JlYWN0LXRhYnMuY3NzXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPGgxPkJ1aWxkIFlvIFNlbGY8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLW1lbnVcIj5cbiAgICAgICAgICAgICAgPFRhYnM+XG4gICAgICAgICAgICAgICAgPFRhYkxpc3Q+XG4gICAgICAgICAgICAgICAgICA8VGFiPkZhY2UgQ29sb3I8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+RXllIENvbG9yPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPkhhaXIgQ29sb3I8L1RhYj5cbiAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPHA+bG90cyBvZiBmYWNlIGNvbG9yczwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmZhY2VDb2xvck9wdGlvbnMubWFwKChvcHRpb24pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvblwiIHN0eWxlPXt7IGJhY2tncm91bmQ6IG9wdGlvbiB9fSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbG9yQ2hhbmdlfT5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxwPmxvdHMgb2YgZXllIGNvbG9yczwvcD5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxwPmxvdHMgb2YgaGFpciBjb2xvcnM8L3A+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxTVkdFZGl0b3IgZmFjZUNvbG9yPXtmYWNlQ29sb3J9IGV5ZUNvbG9yPXtleWVDb2xvcn0gaGFpckNvbG9yPXtoYWlyQ29sb3J9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmFwcC1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIHdpZHRoOiA1MDBwdDtcbiAgICAgICAgICAgIGhlaWdodDogNDAwcHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBwdDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEIxMzJCO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW46bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUMyNTQxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW4gaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSwgaHRtbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYxNzY7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWItbGlzdCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLS1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRkMxMDc7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWIge1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wdGlvbnMtd3JhcHBlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmVlbjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/pages/index.js */"));
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

/***/ }),

/***/ "svg.js":
/*!*************************!*\
  !*** external "svg.js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("svg.js");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map