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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/game/cartPlayer */ \"./components/game/cartPlayer.tsx\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../styles/game/HomeGame.module.css */ \"./styles/game/HomeGame.module.css\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/game */ \"./components/game.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/3amii9.png */ \"./public/images/3amii9.png\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_conterDown_conterDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/conterDown/conterDown */ \"./components/conterDown/conterDown.tsx\");\n/* harmony import */ var _components_cartwin_cartwin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/cartwin/cartwin */ \"./components/cartwin/cartwin.tsx\");\n/* harmony import */ var _components_cartlose_cartlose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/cartlose/cartlose */ \"./components/cartlose/cartlose.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomeGame = function(props) {\n    _s();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Waiting\"), oppenent = ref4[0], changeOpp = ref4[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: \"\",\n        pic1: \"\",\n        player2: \"\",\n        pic2: \"\"\n    }), players = ref1[0], changeName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: 0,\n        player2: 0\n    }), score = ref2[0], changeScore = ref2[1];\n    var test = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ref5, ref3;\n        (ref5 = props.socket) === null || ref5 === void 0 ? void 0 : ref5.emit(\"matchmaking\");\n        (ref3 = props.socket) === null || ref3 === void 0 ? void 0 : ref3.on(\"matchmaking\", function(data) {\n            var ref6;\n            if (typeof data != \"string\") {\n                if (true) changeOpp(\"counter\");\n                window.setTimeout(function() {\n                    var ref;\n                    (ref = props.socket) === null || ref === void 0 ? void 0 : ref.emit(\"setInterval\");\n                    changeName(function(oldvalues) {\n                        return _objectSpread({}, oldvalues, {\n                            player1: data[0],\n                            player2: data[1]\n                        });\n                    });\n                    changeOpp(\"Found\");\n                    axios__WEBPACK_IMPORTED_MODULE_6___default().post(\"http://\".concat(\"10.13.3.3\", \":\").concat(\"3001\", \"/users/getPicture\"), {\n                        userName1: data[0],\n                        userName2: data[1]\n                    }, {\n                        headers: {\n                            Authorization: \"Bearer \".concat(localStorage.getItem(\"accessToken\"))\n                        }\n                    }).then(function(res) {\n                        changeName(function(oldvalues) {\n                            return _objectSpread({}, oldvalues, {\n                                pic1: res.data.user1,\n                                pic2: res.data.user2\n                            });\n                        });\n                    });\n                }, 6000);\n            }\n            (ref6 = props.socket) === null || ref6 === void 0 ? void 0 : ref6.on(\"opponentLeft\", function(data) {\n                console.log();\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_10___default().Container),\n            children: oppenent == \"Waiting\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexFlow: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_11__.Loading, {\n                        type: \"spinner\",\n                        size: \"xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Waiting for Oppenent ...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 70,\n                columnNumber: 11\n            }, _this) : oppenent === \"counter\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_conterDown_conterDown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 75,\n                columnNumber: 11\n            }, _this) : oppenent === \"Winner\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cartwin_cartwin__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 11\n            }, _this) : oppenent === \"Loser\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cartlose_cartlose__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 81,\n                columnNumber: 11\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_10___default().imgImoji),\n                        src: _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_10___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player1,\n                            name: players.player1,\n                            img: players.pic1\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        changeScore: changeScore,\n                        socket: props.socket,\n                        score: score\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_10___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player2,\n                            name: players.player2,\n                            img: players.pic2\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HomeGame, \"ftmZm8s0H3G2YzEyIEEY9Qc5rX0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = HomeGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeGame);\nvar _c;\n$RefreshReg$(_c, \"HomeGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBRWxELG1GQUFjO3dCQUFFMkQsR0FBRyxFQUFFdEQscUVBQVc7Ozs7OzZCQUFJO2tDQUNwRCw4REFBQzRDLEtBQUc7d0JBQUNDLFNBQVMsRUFBRWxELHFGQUFnQjtrQ0FDOUIsNEVBQUNELG1FQUFVOzRCQUNUc0IsS0FBSyxFQUFFQSxLQUFLLENBQUNOLE9BQU87NEJBQ3BCOEMsSUFBSSxFQUFFMUMsT0FBTyxDQUFDSixPQUFPOzRCQUNyQjBDLEdBQUcsRUFBRXRDLE9BQU8sQ0FBQ0gsSUFBSTs7Ozs7aUNBQ2pCOzs7Ozs2QkFDRTtrQ0FDTiw4REFBQ2Ysd0RBQUk7d0JBQUNxQixXQUFXLEVBQUVBLFdBQVc7d0JBQUVHLE1BQU0sRUFBRWIsS0FBSyxDQUFDYSxNQUFNO3dCQUFFSixLQUFLLEVBQUVBLEtBQUs7Ozs7OzZCQUFHO2tDQUNyRSw4REFBQzRCLEtBQUc7d0JBQUNDLFNBQVMsRUFBRWxELHFGQUFnQjtrQ0FDOUIsNEVBQUNELG1FQUFVOzRCQUNUc0IsS0FBSyxFQUFFQSxLQUFLLENBQUNKLE9BQU87NEJBQ3BCNEMsSUFBSSxFQUFFMUMsT0FBTyxDQUFDRixPQUFPOzRCQUNyQndDLEdBQUcsRUFBRXRDLE9BQU8sQ0FBQ0QsSUFBSTs7Ozs7aUNBQ2pCOzs7Ozs2QkFDRTs7NEJBQ0w7Ozs7O2lCQUVEO3FCQUdMLENBQ0g7Q0FDSDtHQTdGS1AsUUFBUTs7UUFZTVAsb0RBQVc7OztBQVp6Qk8sS0FBQUEsUUFBUTtBQStGZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWUvaW5kZXgudHN4P2I4YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcnRQbGF5ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2FtZS9jYXJ0UGxheWVyXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9nYW1lL0hvbWVHYW1lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dhbWVcIjtcbmltcG9ydCBVc2VySW5mb1BvcHVwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJJbmZvUG9wdXAvVXNlckluZm9Qb3B1cFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBsZWFnZW5kIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzLzNhbWlpOS5wbmdcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBDb3VudERvd24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGVyRG93bi9jb250ZXJEb3duXCI7XG5pbXBvcnQgQ2FydHdpbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJ0d2luL2NhcnR3aW5cIjtcbmltcG9ydCBDYXJ0TG9zZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJ0bG9zZS9jYXJ0bG9zZVwiO1xuXG5jb25zdCBIb21lR2FtZSA9IChwcm9wczogYW55KSA9PiB7XG4gIGNvbnN0IFtvcHBlbmVudCwgY2hhbmdlT3BwXSA9IHVzZVN0YXRlKFwiV2FpdGluZ1wiKTtcbiAgY29uc3QgW3BsYXllcnMsIGNoYW5nZU5hbWVdID0gdXNlU3RhdGUoe1xuICAgIHBsYXllcjE6IFwiXCIsXG4gICAgcGljMTogXCJcIixcbiAgICBwbGF5ZXIyOiBcIlwiLFxuICAgIHBpYzI6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbc2NvcmUsIGNoYW5nZVNjb3JlXSA9IHVzZVN0YXRlPGFueT4oe1xuICAgIHBsYXllcjE6IDAsXG4gICAgcGxheWVyMjogMCxcbiAgfSk7XG4gIGNvbnN0IHRlc3Q6IGFueSA9IHVzZVNlbGVjdG9yPGFueT4oKHN0YXRlKSA9PiBzdGF0ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvcHMuc29ja2V0Py5lbWl0KFwibWF0Y2htYWtpbmdcIik7XG4gICAgcHJvcHMuc29ja2V0Py5vbihcIm1hdGNobWFraW5nXCIsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YSAhPSBcInN0cmluZ1wiKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgY2hhbmdlT3BwKFwiY291bnRlclwiKVxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIHByb3BzLnNvY2tldD8uZW1pdChcInNldEludGVydmFsXCIpO1xuICAgICAgICAgIGNoYW5nZU5hbWUoKG9sZHZhbHVlcykgPT4gKHtcbiAgICAgICAgICAgIC4uLm9sZHZhbHVlcyxcbiAgICAgICAgICAgIHBsYXllcjE6IGRhdGFbMF0sXG4gICAgICAgICAgICBwbGF5ZXIyOiBkYXRhWzFdLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBjaGFuZ2VPcHAoXCJGb3VuZFwiKTtcbiAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXG4gICAgICAgICAgICAgIGBodHRwOi8vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JUF9BRFJFU1NFfToke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BPUlR9L3VzZXJzL2dldFBpY3R1cmVgLFxuICAgICAgICAgICAgICB7IHVzZXJOYW1lMTogZGF0YVswXSwgdXNlck5hbWUyOiBkYXRhWzFdIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKX1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY2hhbmdlTmFtZSgob2xkdmFsdWVzKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLm9sZHZhbHVlcyxcbiAgICAgICAgICAgICAgICBwaWMxOiByZXMuZGF0YS51c2VyMSxcbiAgICAgICAgICAgICAgICBwaWMyOiByZXMuZGF0YS51c2VyMixcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSw2MDAwKVxuICAgICAgICB9XG4gICAgICAgIHByb3BzLnNvY2tldD8ub24oXCJvcHBvbmVudExlZnRcIiwoZGF0YTphbnkpID0+e1xuICAgICAgICAgIGNvbnNvbGUubG9nKClcbiAgICAgICAgfSlcbiAgICB9KTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuQ29udGFpbmVyfT5cbiAgICAgICAge29wcGVuZW50ID09IFwiV2FpdGluZ1wiID8gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhGbG93OiBcImNvbHVtblwiIH19PlxuICAgICAgICAgICAgPExvYWRpbmcgdHlwZT1cInNwaW5uZXJcIiBzaXplPVwieGxcIiAvPlxuICAgICAgICAgICAgPHA+V2FpdGluZyBmb3IgT3BwZW5lbnQgLi4uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogb3BwZW5lbnQgPT09IFwiY291bnRlclwiID8gKFxuICAgICAgICAgIDxDb3VudERvd24gLz5cbiAgICAgICAgKTpcbiAgICAgICAgb3BwZW5lbnQgPT09IFwiV2lubmVyXCIgPyAoXG4gICAgICAgICAgPENhcnR3aW4gLz5cbiAgICAgICAgKTpcbiAgICAgICAgb3BwZW5lbnQgPT09IFwiTG9zZXJcIiA/IChcbiAgICAgICAgICA8Q2FydExvc2UgLz5cbiAgICAgICAgKTooXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5pbWdJbW9qaX0gc3JjPXtsZWFnZW5kLnNyY30gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJ0UGxheWVyfT5cbiAgICAgICAgICAgICAgPENhcnRQbGF5ZXJcbiAgICAgICAgICAgICAgICBzY29yZT17c2NvcmUucGxheWVyMX1cbiAgICAgICAgICAgICAgICBuYW1lPXtwbGF5ZXJzLnBsYXllcjF9XG4gICAgICAgICAgICAgICAgaW1nPXtwbGF5ZXJzLnBpYzF9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxHYW1lIGNoYW5nZVNjb3JlPXtjaGFuZ2VTY29yZX0gc29ja2V0PXtwcm9wcy5zb2NrZXR9IHNjb3JlPXtzY29yZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcnRQbGF5ZXJ9PlxuICAgICAgICAgICAgICA8Q2FydFBsYXllclxuICAgICAgICAgICAgICAgIHNjb3JlPXtzY29yZS5wbGF5ZXIyfVxuICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllcnMucGxheWVyMn1cbiAgICAgICAgICAgICAgICBpbWc9e3BsYXllcnMucGljMn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiB7dGVzdC5zaXplc18uemFrX3Rlc3QgJiYgPFVzZXJJbmZvUG9wdXAgLz59ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUdhbWU7XG4iXSwibmFtZXMiOlsiQ2FydFBsYXllciIsInN0eWxlIiwiR2FtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJsZWFnZW5kIiwiTG9hZGluZyIsImF4aW9zIiwiQ291bnREb3duIiwiQ2FydHdpbiIsIkNhcnRMb3NlIiwiSG9tZUdhbWUiLCJwcm9wcyIsIm9wcGVuZW50IiwiY2hhbmdlT3BwIiwicGxheWVyMSIsInBpYzEiLCJwbGF5ZXIyIiwicGljMiIsInBsYXllcnMiLCJjaGFuZ2VOYW1lIiwic2NvcmUiLCJjaGFuZ2VTY29yZSIsInRlc3QiLCJzdGF0ZSIsInNvY2tldCIsImVtaXQiLCJvbiIsImRhdGEiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwib2xkdmFsdWVzIiwicG9zdCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19JUF9BRFJFU1NFIiwiTkVYVF9QVUJMSUNfUE9SVCIsInVzZXJOYW1lMSIsInVzZXJOYW1lMiIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRoZW4iLCJyZXMiLCJ1c2VyMSIsInVzZXIyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIkNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RmxvdyIsInR5cGUiLCJzaXplIiwicCIsImltZyIsImltZ0ltb2ppIiwic3JjIiwiY2FydFBsYXllciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game/index.tsx\n");

/***/ })

});