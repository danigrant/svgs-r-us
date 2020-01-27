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
  avatarStyle,
  topType,
  accessoriesType,
  facialHairType,
  clotheType,
  clotheColor,
  eyeType,
  eyebrowType,
  mouthType,
  skinColor
}) => __jsx("div", {
  className: "jsx-2448575129" + " " + "wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(avataaars__WEBPACK_IMPORTED_MODULE_2___default.a, {
  avatarStyle: avatarStyle,
  topType: topType,
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
  id: "2448575129",
  __self: undefined
}, ".wrapper.jsx-2448575129{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvY29tcG9uZW50cy9XWVNJV1lHLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCZ0IsQUFHc0IsMEVBQ1UsbUdBQ1gsWUFDTyw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2RhbmlncmFudC9Qcm9qZWN0cy9zdmctbmV4dC9jb21wb25lbnRzL1dZU0lXWUcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXZhdGFyIGZyb20gJ2F2YXRhYWFycydcblxuIGV4cG9ydCBkZWZhdWx0ICh7IGF2YXRhclN0eWxlLCB0b3BUeXBlLCBhY2Nlc3Nvcmllc1R5cGUsIGZhY2lhbEhhaXJUeXBlLCBjbG90aGVUeXBlLCBjbG90aGVDb2xvciwgZXllVHlwZSwgZXllYnJvd1R5cGUsIG1vdXRoVHlwZSwgc2tpbkNvbG9yIH0pID0+IChcbiAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgIDxBdmF0YXJcbiAgICAgICAgIGF2YXRhclN0eWxlPXthdmF0YXJTdHlsZX1cbiAgICAgICAgIHRvcFR5cGU9e3RvcFR5cGV9XG4gICAgICAgICBhY2Nlc3Nvcmllc1R5cGU9e2FjY2Vzc29yaWVzVHlwZX1cbiAgICAgICAgIGZhY2lhbEhhaXJUeXBlPXtmYWNpYWxIYWlyVHlwZX1cbiAgICAgICAgIGNsb3RoZVR5cGU9e2Nsb3RoZVR5cGV9XG4gICAgICAgICBjbG90aGVDb2xvcj17Y2xvdGhlQ29sb3J9XG4gICAgICAgICBleWVUeXBlPXtleWVUeXBlfVxuICAgICAgICAgZXllYnJvd1R5cGU9e2V5ZWJyb3dUeXBlfVxuICAgICAgICAgbW91dGhUeXBlPXttb3V0aFR5cGV9XG4gICAgICAgICBza2luQ29sb3I9e3NraW5Db2xvcn1cbiAgICAgICAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICA8L2Rpdj5cbiApXG4iXX0= */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/components/WYSIWYG.js */")));

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
var _jsxFileName = "/Users/danigrant/Projects/svg-next/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      topType: 'LongHairFrida',
      accessoriesType: 'Kurt',
      facialHairType: 'Blank',
      clotheType: 'Overall',
      clotheColor: 'Red',
      eyeType: 'Default',
      eyebrowType: 'RaisedExcited',
      mouthType: 'Tongue',
      skinColor: 'Tanned'
    });

    _defineProperty(this, "handleChange", (part, color) => {
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
      avatarStyle,
      topType,
      accessoriesType,
      facialHairType,
      clotheType,
      clotheColor,
      eyeType,
      eyebrowType,
      mouthType,
      skinColor
    } = this.state;
    return __jsx("div", {
      className: "jsx-558649186" + " " + "page-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("link", {
      href: "https://fonts.googleapis.com/css?family=Nunito:400,700,900&display=swap",
      rel: "stylesheet",
      className: "jsx-558649186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://unpkg.com/react-tabs/style/react-tabs.css",
      className: "jsx-558649186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    })), __jsx("div", {
      className: "jsx-558649186" + " " + "app-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-558649186" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, __jsx("h1", {
      className: "jsx-558649186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, "Build Yo Self"), __jsx("div", {
      className: "jsx-558649186" + " " + "tabs-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabList"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, "\uD83C\uDFA8 Skin"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, "\uD83D\uDC41 Eyes"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "\u270F\uFE0F Eyebrow"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, "\uD83D\uDC44 Mouth"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "\u2702\uFE0F Hair"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "\uD83D\uDC88 Hair Color"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "\uD83D\uDC54 Clothes"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "\uD83D\uDC53 Accessories"), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "\uD83E\uDD81 Facial Hair")), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-558649186" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, clotheTypeOptions.map(option => __jsx("div", {
      key: option.name,
      onClick: () => this.handleChange('clotheType', option.name),
      className: "jsx-558649186" + " " + "option",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("img", {
      style: {
        width: 80
      },
      src: option.file,
      className: "jsx-558649186",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }))))), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-558649186" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-558649186" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-558649186" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-558649186" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-558649186" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-558649186" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-558649186" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    })), __jsx(react_tabs__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: "jsx-558649186" + " " + "options-wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }))))), __jsx("div", {
      className: "jsx-558649186" + " " + "column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx(_components_WYSIWYG__WEBPACK_IMPORTED_MODULE_4__["default"], {
      avatarStyle: avatarStyle,
      topType: topType,
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
        lineNumber: 105
      },
      __self: this
    }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3102340224",
      __self: this
    }, ".app-container.jsx-558649186{background-color:#fff;width:800pt;max-width:95%;height:500pt;border-radius:10px;box-shadow:0px 0px 40px rgba(0,0,0,0.1);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;}.column.jsx-558649186{box-sizing:border-box;width:50%;height:100%;padding:20pt;color:white;}.column.jsx-558649186:first-child{background:#0B132B;border-radius:10px 0px 0px 10px;}.column.jsx-558649186:last-child{background:#1C2541;border-radius:0px 10px 10px 0px;}.column.jsx-558649186 h1.jsx-558649186{margin-bottom:0.2em;}.options-wrapper.jsx-558649186{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.option.jsx-558649186{width:80px;height:80px;border-radius:25px;margin:10px;margin-right:20px;margin-left:0px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkdvQixBQUdtQyxBQVVBLEFBT0gsQUFJQSxBQUlDLEFBR1AsQUFPRixXQUNDLFFBbEJvQixBQUlBLENBSWxDLEVBekJjLEFBVUYsQ0EwQlMsU0F6QlAsRUFWRSxRQW9DRixFQXpCQyxJQVZBLEdBZ0JmLEFBSUEsR0FnQm9CLEdBekJOLElBVk8sUUFXckIsR0F5QmtCLEVBWEcsTUF4QnFCLFFBb0MxQyxnQ0FuQ2UsdUJBd0JFLG1EQXZCSSxNQXdCUSwrREF2QjdCLDBDQXdCeUIsNkdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBUYWIsIFRhYnMsIFRhYkxpc3QsIFRhYlBhbmVsIH0gZnJvbSAncmVhY3QtdGFicyc7XG5pbXBvcnQgV1lTSVdZRyBmcm9tICcuLi9jb21wb25lbnRzL1dZU0lXWUcnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdG9wVHlwZTogJ0xvbmdIYWlyRnJpZGEnLFxuICAgIGFjY2Vzc29yaWVzVHlwZTogJ0t1cnQnLFxuICAgIGZhY2lhbEhhaXJUeXBlOiAnQmxhbmsnLFxuICAgIGNsb3RoZVR5cGU6ICdPdmVyYWxsJyxcbiAgICBjbG90aGVDb2xvcjogJ1JlZCcsXG4gICAgZXllVHlwZTogJ0RlZmF1bHQnLFxuICAgIGV5ZWJyb3dUeXBlOiAnUmFpc2VkRXhjaXRlZCcsXG4gICAgbW91dGhUeXBlOiAnVG9uZ3VlJyxcbiAgICBza2luQ29sb3I6ICdUYW5uZWQnXG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xuXG4gICAgcmV0dXJuIHsgcG9zdHM6IFwiZGF0YVwiIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSA9IChwYXJ0LCBjb2xvcikgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBbcGFydF06IGNvbG9yIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBhdmF0YXJTdHlsZSwgdG9wVHlwZSwgYWNjZXNzb3JpZXNUeXBlLCBmYWNpYWxIYWlyVHlwZSwgY2xvdGhlVHlwZSwgY2xvdGhlQ29sb3IsIGV5ZVR5cGUsIGV5ZWJyb3dUeXBlLCBtb3V0aFR5cGUsIHNraW5Db2xvciB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS13cmFwcGVyXCI+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TnVuaXRvOjQwMCw3MDAsOTAwJmRpc3BsYXk9c3dhcFwiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vcmVhY3QtdGFicy9zdHlsZS9yZWFjdC10YWJzLmNzc1wiIC8+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxoMT5CdWlsZCBZbyBTZWxmPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFicy1tZW51XCI+XG4gICAgICAgICAgICAgIDxUYWJzPlxuICAgICAgICAgICAgICAgIDxUYWJMaXN0PlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn46oIFNraW48L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+RgSBFeWVzPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPuKcj++4jyBFeWVicm93PC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkYQgTW91dGg8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+4pyC77iPIEhhaXI8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+SiCBIYWlyIENvbG9yPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkZQgQ2xvdGhlczwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5GTIEFjY2Vzc29yaWVzPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfpoEgRmFjaWFsIEhhaXI8L1RhYj5cbiAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge2Nsb3RoZVR5cGVPcHRpb25zLm1hcCgob3B0aW9uKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25cIiBrZXk9e29wdGlvbi5uYW1lfSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUNoYW5nZSgnY2xvdGhlVHlwZScsIG9wdGlvbi5uYW1lKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7IHdpZHRoOiA4MCB9fSBzcmM9e29wdGlvbi5maWxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICA8L1RhYnM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgICAgPFdZU0lXWUcgYXZhdGFyU3R5bGU9e2F2YXRhclN0eWxlfSB0b3BUeXBlPXt0b3BUeXBlfSBhY2Nlc3Nvcmllc1R5cGU9e2FjY2Vzc29yaWVzVHlwZX0gZmFjaWFsSGFpclR5cGU9e2ZhY2lhbEhhaXJUeXBlfSBjbG90aGVUeXBlPXtjbG90aGVUeXBlfSBjbG90aGVDb2xvcj17Y2xvdGhlQ29sb3J9IGV5ZVR5cGU9e2V5ZVR5cGV9IGV5ZWJyb3dUeXBlPXtleWVicm93VHlwZX0gbW91dGhUeXBlPXttb3V0aFR5cGV9IHNraW5Db2xvcj17c2tpbkNvbG9yfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5hcHAtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogODAwcHQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDk1JTtcbiAgICAgICAgICAgIGhlaWdodDogNTAwcHQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA0MHB4IHJnYmEoMCwwLDAsMC4xKTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIHtcbiAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMjBwdDtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMEIxMzJCO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW46bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUMyNTQxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDEwcHggMTBweCAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW4gaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcHRpb25zLXdyYXBwZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm9wdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHksIGh0bWwge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMTc2O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiLWxpc3Qge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi0tc2VsZWN0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkZDMTA3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhY3QtdGFic19fdGFiIHtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1230321771",
      __self: this
    }, "body,html{width:100%;height:100%;margin:0;background-color:#fff176;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;color:#333;font-family:'Nunito',sans-serif;}.react-tabs__tab-list{border-bottom:none;}.react-tabs__tab--selected{background:inherit;border:none;color:#FFF;border-radius:0;border-bottom:2px solid #FFC107;}.react-tabs__tab{padding-right:10px;padding-left:10px;color:#bdbdbd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZ3JhbnQvUHJvamVjdHMvc3ZnLW5leHQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0oyQixBQUd3QixBQVdRLEFBR0EsQUFPQSxXQXBCUCxRQVdkLEFBR2MsQUFPTSxJQXBCVCxRQWNFLENBYmMsS0FvQlgsS0FORSxTQU9sQixNQXBCZSxDQWNtQixnQ0FDbEMseUNBZHFCLDZGQUNJLG1HQUNaLFdBQ3NCLGdDQUNuQyIsImZpbGUiOiIvVXNlcnMvZGFuaWdyYW50L1Byb2plY3RzL3N2Zy1uZXh0L3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgVGFiLCBUYWJzLCBUYWJMaXN0LCBUYWJQYW5lbCB9IGZyb20gJ3JlYWN0LXRhYnMnO1xuaW1wb3J0IFdZU0lXWUcgZnJvbSAnLi4vY29tcG9uZW50cy9XWVNJV1lHJ1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHRvcFR5cGU6ICdMb25nSGFpckZyaWRhJyxcbiAgICBhY2Nlc3Nvcmllc1R5cGU6ICdLdXJ0JyxcbiAgICBmYWNpYWxIYWlyVHlwZTogJ0JsYW5rJyxcbiAgICBjbG90aGVUeXBlOiAnT3ZlcmFsbCcsXG4gICAgY2xvdGhlQ29sb3I6ICdSZWQnLFxuICAgIGV5ZVR5cGU6ICdEZWZhdWx0JyxcbiAgICBleWVicm93VHlwZTogJ1JhaXNlZEV4Y2l0ZWQnLFxuICAgIG1vdXRoVHlwZTogJ1Rvbmd1ZScsXG4gICAgc2tpbkNvbG9yOiAnVGFubmVkJ1xuICB9XG5cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcblxuICAgIHJldHVybiB7IHBvc3RzOiBcImRhdGFcIiB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UgPSAocGFydCwgY29sb3IpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgW3BhcnRdOiBjb2xvciB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYXZhdGFyU3R5bGUsIHRvcFR5cGUsIGFjY2Vzc29yaWVzVHlwZSwgZmFjaWFsSGFpclR5cGUsIGNsb3RoZVR5cGUsIGNsb3RoZUNvbG9yLCBleWVUeXBlLCBleWVicm93VHlwZSwgbW91dGhUeXBlLCBza2luQ29sb3IgfSA9IHRoaXMuc3RhdGVcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utd3JhcHBlclwiPlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU51bml0bzo0MDAsNzAwLDkwMCZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LXRhYnMvc3R5bGUvcmVhY3QtdGFicy5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICA8aDE+QnVpbGQgWW8gU2VsZjwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYnMtbWVudVwiPlxuICAgICAgICAgICAgICA8VGFicz5cbiAgICAgICAgICAgICAgICA8VGFiTGlzdD5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+OqCBTa2luPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkYEgRXllczwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7inI/vuI8gRXllYnJvdzwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5GEIE1vdXRoPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPuKcgu+4jyBIYWlyPC9UYWI+XG4gICAgICAgICAgICAgICAgICA8VGFiPvCfkoggSGFpciBDb2xvcjwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn5GUIENsb3RoZXM8L1RhYj5cbiAgICAgICAgICAgICAgICAgIDxUYWI+8J+RkyBBY2Nlc3NvcmllczwvVGFiPlxuICAgICAgICAgICAgICAgICAgPFRhYj7wn6aBIEZhY2lhbCBIYWlyPC9UYWI+XG4gICAgICAgICAgICAgICAgPC9UYWJMaXN0PlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIHtjbG90aGVUeXBlT3B0aW9ucy5tYXAoKG9wdGlvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uXCIga2V5PXtvcHRpb24ubmFtZX0gb25DbGljaz17KCkgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoJ2Nsb3RoZVR5cGUnLCBvcHRpb24ubmFtZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17eyB3aWR0aDogODAgfX0gc3JjPXtvcHRpb24uZmlsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgICA8VGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnMtd3JhcHBlclwiPlxuXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxuICAgICAgICAgICAgICAgIDxUYWJQYW5lbD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9ucy13cmFwcGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XG4gICAgICAgICAgICAgICAgPFRhYlBhbmVsPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cblxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cbiAgICAgICAgICAgICAgPC9UYWJzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgIDxXWVNJV1lHIGF2YXRhclN0eWxlPXthdmF0YXJTdHlsZX0gdG9wVHlwZT17dG9wVHlwZX0gYWNjZXNzb3JpZXNUeXBlPXthY2Nlc3Nvcmllc1R5cGV9IGZhY2lhbEhhaXJUeXBlPXtmYWNpYWxIYWlyVHlwZX0gY2xvdGhlVHlwZT17Y2xvdGhlVHlwZX0gY2xvdGhlQ29sb3I9e2Nsb3RoZUNvbG9yfSBleWVUeXBlPXtleWVUeXBlfSBleWVicm93VHlwZT17ZXllYnJvd1R5cGV9IG1vdXRoVHlwZT17bW91dGhUeXBlfSBza2luQ29sb3I9e3NraW5Db2xvcn0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuYXBwLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgd2lkdGg6IDgwMHB0O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwMHB0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNDBweCByZ2JhKDAsMCwwLDAuMSk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbHVtbiB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHQ7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb2x1bW46Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzBCMTMyQjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFDMjU0MTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMHB4IDEwcHggMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29sdW1uIGgxIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAub3B0aW9ucy13cmFwcGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5vcHRpb24ge1xuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5LCBodG1sIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjE3NjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYi1saXN0IHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFjdC10YWJzX190YWItLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGQzEwNztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWN0LXRhYnNfX3RhYiB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/danigrant/Projects/svg-next/pages/index.js */"));
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