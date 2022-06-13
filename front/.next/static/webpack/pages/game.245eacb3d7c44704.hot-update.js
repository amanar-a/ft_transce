"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./pages/game/index.tsx":
/*!******************************!*\
  !*** ./pages/game/index.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/game/cartPlayer */ \"./components/game/cartPlayer.tsx\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/game/HomeGame.module.css */ \"./styles/game/HomeGame.module.css\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/game */ \"./components/game.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/3amii9.png */ \"./public/images/3amii9.png\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_conterDown_conterDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/conterDown/conterDown */ \"./components/conterDown/conterDown.tsx\");\n/* harmony import */ var _components_cartwin_cartwin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/cartwin/cartwin */ \"./components/cartwin/cartwin.tsx\");\n/* harmony import */ var _components_cartlose_cartlose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/cartlose/cartlose */ \"./components/cartlose/cartlose.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomeGame = function(props) {\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Waiting\"), oppenent = ref5[0], changeOpp = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: \"\",\n        pic1: \"\",\n        player2: \"\",\n        pic2: \"\"\n    }), players = ref1[0], changeName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        winner: \"\",\n        loser: \"\"\n    }), gameOver = ref2[0], changeGameOver = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: 0,\n        player2: 0\n    }), score = ref3[0], changeScore = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ref6, ref4;\n        (ref6 = props.socket) === null || ref6 === void 0 ? void 0 : ref6.emit(\"matchmaking\");\n        (ref4 = props.socket) === null || ref4 === void 0 ? void 0 : ref4.on(\"matchmaking\", function(data1) {\n            var ref7;\n            if (typeof data1 != \"string\") {\n                if (true) changeOpp(\"counter\");\n                window.setTimeout(function() {\n                    var ref;\n                    (ref = props.socket) === null || ref === void 0 ? void 0 : ref.emit(\"setInterval\");\n                    changeName(function(oldvalues) {\n                        return _objectSpread({}, oldvalues, {\n                            player1: data1[0],\n                            player2: data1[1]\n                        });\n                    });\n                    changeOpp(\"Found\");\n                    axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"http://\".concat(\"10.13.3.3\", \":\").concat(\"3001\", \"/users/getPicture\"), {\n                        userName1: data1[0],\n                        userName2: data1[1]\n                    }, {\n                        headers: {\n                            Authorization: \"Bearer \".concat(localStorage.getItem(\"accessToken\"))\n                        }\n                    }).then(function(res) {\n                        changeName(function(oldvalues) {\n                            return _objectSpread({}, oldvalues, {\n                                pic1: res.data.user1,\n                                pic2: res.data.user2\n                            });\n                        });\n                    });\n                }, 6000);\n            }\n            (ref7 = props.socket) === null || ref7 === void 0 ? void 0 : ref7.on(\"opponentLeft\", function(data) {\n                changeOpp(\"Winner\");\n                changeGameOver(function(oldValues) {\n                    return _objectSpread({}, oldValues, {\n                        winner: data.user\n                    });\n                });\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9___default().Container),\n            children: oppenent == \"Waiting\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexFlow: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_10__.Loading, {\n                        type: \"spinner\",\n                        size: \"xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Waiting for Oppenent ...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 76,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 74,\n                columnNumber: 11\n            }, _this) : oppenent === \"counter\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_conterDown_conterDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 79,\n                columnNumber: 11\n            }, _this) : oppenent === \"Winner\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cartwin_cartwin__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                userName: game\n            }, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 82,\n                columnNumber: 11\n            }, _this) : oppenent === \"Loser\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cartlose_cartlose__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 85,\n                columnNumber: 11\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9___default().imgImoji),\n                        src: _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player1,\n                            name: players.player1,\n                            img: players.pic1\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        changeScore: changeScore,\n                        socket: props.socket,\n                        score: score\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player2,\n                            name: players.player2,\n                            img: players.pic2\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n            lineNumber: 72,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HomeGame, \"GdRZpUUjJ5RUWdLwc0+BV6qHNO8=\");\n_c = HomeGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeGame);\nvar _c;\n$RefreshReg$(_c, \"HomeGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aW5kZXgudHN4P2I4YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcnRQbGF5ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2FtZS9jYXJ0UGxheWVyXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9nYW1lL0hvbWVHYW1lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dhbWVcIjtcbmltcG9ydCBVc2VySW5mb1BvcHVwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJJbmZvUG9wdXAvVXNlckluZm9Qb3B1cFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBsZWFnZW5kIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzLzNhbWlpOS5wbmdcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBDb3VudERvd24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGVyRG93bi9jb250ZXJEb3duXCI7XG5pbXBvcnQgQ2FydHdpbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJ0d2luL2NhcnR3aW5cIjtcbmltcG9ydCBDYXJ0TG9zZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJ0bG9zZS9jYXJ0bG9zZVwiO1xuXG5jb25zdCBIb21lR2FtZSA9IChwcm9wczogYW55KSA9PiB7XG4gIGNvbnN0IFtvcHBlbmVudCwgY2hhbmdlT3BwXSA9IHVzZVN0YXRlKFwiV2FpdGluZ1wiKTtcbiAgY29uc3QgW3BsYXllcnMsIGNoYW5nZU5hbWVdID0gdXNlU3RhdGUoe1xuICAgIHBsYXllcjE6IFwiXCIsXG4gICAgcGljMTogXCJcIixcbiAgICBwbGF5ZXIyOiBcIlwiLFxuICAgIHBpYzI6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbZ2FtZU92ZXIsIGNoYW5nZUdhbWVPdmVyXSA9IHVzZVN0YXRlKHtcbiAgICB3aW5uZXI6XCJcIixcbiAgICBsb3NlcjpcIlwiXG4gIH0pXG4gIGNvbnN0IFtzY29yZSwgY2hhbmdlU2NvcmVdID0gdXNlU3RhdGU8YW55Pih7XG4gICAgcGxheWVyMTogMCxcbiAgICBwbGF5ZXIyOiAwLFxuICB9KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5zb2NrZXQ/LmVtaXQoXCJtYXRjaG1ha2luZ1wiKTtcbiAgICBwcm9wcy5zb2NrZXQ/Lm9uKFwibWF0Y2htYWtpbmdcIiwgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhICE9IFwic3RyaW5nXCIpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKVxuICAgICAgICBjaGFuZ2VPcHAoXCJjb3VudGVyXCIpXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgcHJvcHMuc29ja2V0Py5lbWl0KFwic2V0SW50ZXJ2YWxcIik7XG4gICAgICAgICAgY2hhbmdlTmFtZSgob2xkdmFsdWVzKSA9PiAoe1xuICAgICAgICAgICAgLi4ub2xkdmFsdWVzLFxuICAgICAgICAgICAgcGxheWVyMTogZGF0YVswXSxcbiAgICAgICAgICAgIHBsYXllcjI6IGRhdGFbMV0sXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIGNoYW5nZU9wcChcIkZvdW5kXCIpO1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChcbiAgICAgICAgICAgICAgYGh0dHA6Ly8ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lQX0FEUkVTU0V9OiR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUE9SVH0vdXNlcnMvZ2V0UGljdHVyZWAsXG4gICAgICAgICAgICAgIHsgdXNlck5hbWUxOiBkYXRhWzBdLCB1c2VyTmFtZTI6IGRhdGFbMV0gfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpfWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjaGFuZ2VOYW1lKChvbGR2YWx1ZXMpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ub2xkdmFsdWVzLFxuICAgICAgICAgICAgICAgIHBpYzE6IHJlcy5kYXRhLnVzZXIxLFxuICAgICAgICAgICAgICAgIHBpYzI6IHJlcy5kYXRhLnVzZXIyLFxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LDYwMDApXG4gICAgICAgIH1cbiAgICAgICAgcHJvcHMuc29ja2V0Py5vbihcIm9wcG9uZW50TGVmdFwiLChkYXRhOmFueSkgPT57XG4gICAgICAgICAgY2hhbmdlT3BwKFwiV2lubmVyXCIpXG4gICAgICAgICAgY2hhbmdlR2FtZU92ZXIob2xkVmFsdWVzID0+KHsuLi5vbGRWYWx1ZXMsd2lubmVyOmRhdGEudXNlcn0pKVxuICAgICAgICB9KVxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Db250YWluZXJ9PlxuICAgICAgICB7b3BwZW5lbnQgPT0gXCJXYWl0aW5nXCIgPyAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleEZsb3c6IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwic3Bpbm5lclwiIHNpemU9XCJ4bFwiIC8+XG4gICAgICAgICAgICA8cD5XYWl0aW5nIGZvciBPcHBlbmVudCAuLi48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBvcHBlbmVudCA9PT0gXCJjb3VudGVyXCIgPyAoXG4gICAgICAgICAgPENvdW50RG93biAvPlxuICAgICAgICApOlxuICAgICAgICBvcHBlbmVudCA9PT0gXCJXaW5uZXJcIiA/IChcbiAgICAgICAgICA8Q2FydHdpbiB1c2VyTmFtZT17Z2FtZX0vPlxuICAgICAgICApOlxuICAgICAgICBvcHBlbmVudCA9PT0gXCJMb3NlclwiID8gKFxuICAgICAgICAgIDxDYXJ0TG9zZSAvPlxuICAgICAgICApOihcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLmltZ0ltb2ppfSBzcmM9e2xlYWdlbmQuc3JjfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcnRQbGF5ZXJ9PlxuICAgICAgICAgICAgICA8Q2FydFBsYXllclxuICAgICAgICAgICAgICAgIHNjb3JlPXtzY29yZS5wbGF5ZXIxfVxuICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllcnMucGxheWVyMX1cbiAgICAgICAgICAgICAgICBpbWc9e3BsYXllcnMucGljMX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEdhbWUgY2hhbmdlU2NvcmU9e2NoYW5nZVNjb3JlfSBzb2NrZXQ9e3Byb3BzLnNvY2tldH0gc2NvcmU9e3Njb3JlfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FydFBsYXllcn0+XG4gICAgICAgICAgICAgIDxDYXJ0UGxheWVyXG4gICAgICAgICAgICAgICAgc2NvcmU9e3Njb3JlLnBsYXllcjJ9XG4gICAgICAgICAgICAgICAgbmFtZT17cGxheWVycy5wbGF5ZXIyfVxuICAgICAgICAgICAgICAgIGltZz17cGxheWVycy5waWMyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIHt0ZXN0LnNpemVzXy56YWtfdGVzdCAmJiA8VXNlckluZm9Qb3B1cCAvPn0gKi99XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lR2FtZTtcbiJdLCJuYW1lcyI6WyJDYXJ0UGxheWVyIiwic3R5bGUiLCJHYW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsZWFnZW5kIiwiTG9hZGluZyIsImF4aW9zIiwiQ291bnREb3duIiwiQ2FydHdpbiIsIkNhcnRMb3NlIiwiSG9tZUdhbWUiLCJwcm9wcyIsIm9wcGVuZW50IiwiY2hhbmdlT3BwIiwicGxheWVyMSIsInBpYzEiLCJwbGF5ZXIyIiwicGljMiIsInBsYXllcnMiLCJjaGFuZ2VOYW1lIiwid2lubmVyIiwibG9zZXIiLCJnYW1lT3ZlciIsImNoYW5nZUdhbWVPdmVyIiwic2NvcmUiLCJjaGFuZ2VTY29yZSIsInNvY2tldCIsImVtaXQiLCJvbiIsImRhdGEiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwib2xkdmFsdWVzIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19JUF9BRFJFU1NFIiwiTkVYVF9QVUJMSUNfUE9SVCIsInVzZXJOYW1lMSIsInVzZXJOYW1lMiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJyZXMiLCJ1c2VyMSIsInVzZXIyIiwib2xkVmFsdWVzIiwidXNlciIsImRpdiIsImNsYXNzTmFtZSIsIkNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RmxvdyIsInR5cGUiLCJzaXplIiwicCIsInVzZXJOYW1lIiwiZ2FtZSIsImltZyIsImltZ0ltb2ppIiwic3JjIiwiY2FydFBsYXllciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game/index.tsx\n");

/***/ })

});