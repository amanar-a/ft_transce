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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/game/cartPlayer */ \"./components/game/cartPlayer.tsx\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/game/HomeGame.module.css */ \"./styles/game/HomeGame.module.css\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/game */ \"./components/game.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/3amii9.png */ \"./public/images/3amii9.png\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_conterDown_conterDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/conterDown/conterDown */ \"./components/conterDown/conterDown.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomeGame = function(props) {\n    _s();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Waiting\"), oppenent = ref4[0], changeOpp = ref4[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: \"\",\n        pic1: \"\",\n        player2: \"\",\n        pic2: \"\"\n    }), players = ref1[0], changeName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: 0,\n        player2: 0\n    }), score = ref2[0], changeScore = ref2[1];\n    var test = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ref5, ref3;\n        (ref5 = props.socket) === null || ref5 === void 0 ? void 0 : ref5.emit(\"matchmaking\");\n        (ref3 = props.socket) === null || ref3 === void 0 ? void 0 : ref3.on(\"matchmaking\", function(data) {\n            if (typeof data != \"string\") {\n                if (true) changeOpp(\"counter\");\n                window.setTimeout(function() {\n                    var ref;\n                    (ref = props.socket) === null || ref === void 0 ? void 0 : ref.emit(\"matchmaking\");\n                    changeName(function(oldvalues) {\n                        return _objectSpread({}, oldvalues, {\n                            player1: data[0],\n                            player2: data[1]\n                        });\n                    });\n                    changeOpp(\"Found\");\n                    axios__WEBPACK_IMPORTED_MODULE_6___default().post(\"http://\".concat(\"10.13.3.3\", \":\").concat(\"3001\", \"/users/getPicture\"), {\n                        userName1: data[0],\n                        userName2: data[1]\n                    }, {\n                        headers: {\n                            Authorization: \"Bearer \".concat(localStorage.getItem(\"accessToken\"))\n                        }\n                    }).then(function(res) {\n                        changeName(function(oldvalues) {\n                            return _objectSpread({}, oldvalues, {\n                                pic1: res.data.user1,\n                                pic2: res.data.user2\n                            });\n                        });\n                    });\n                }, 6000);\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8___default().Container),\n            children: oppenent == \"Waiting\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexFlow: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.Loading, {\n                        type: \"spinner\",\n                        size: \"xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Waiting for Oppenent ...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 66,\n                columnNumber: 11\n            }, _this) : oppenent === \"counter\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_conterDown_conterDown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 71,\n                columnNumber: 11\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8___default().imgImoji),\n                        src: _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player1,\n                            name: players.player1,\n                            img: players.pic1\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        changeScore: changeScore,\n                        socket: props.socket,\n                        score: score\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player2,\n                            name: players.player2,\n                            img: players.pic2\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HomeGame, \"ftmZm8s0H3G2YzEyIEEY9Qc5rX0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = HomeGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeGame);\nvar _c;\n$RefreshReg$(_c, \"HomeGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVHLE1BQU0sRUFBRWIsS0FBSyxDQUFDYSxNQUFNO3dCQUFFSixLQUFLLEVBQUVBLEtBQUs7Ozs7OzZCQUFHO2tDQUNyRSw4REFBQzBCLEtBQUc7d0JBQUNDLFNBQVMsRUFBRTlDLG9GQUFnQjtrQ0FDOUIsNEVBQUNELG1FQUFVOzRCQUNUb0IsS0FBSyxFQUFFQSxLQUFLLENBQUNKLE9BQU87NEJBQ3BCMEMsSUFBSSxFQUFFeEMsT0FBTyxDQUFDRixPQUFPOzRCQUNyQnNDLEdBQUcsRUFBRXBDLE9BQU8sQ0FBQ0QsSUFBSTs7Ozs7aUNBQ2pCOzs7Ozs2QkFDRTs7NEJBQ0w7Ozs7O2lCQUVEO3FCQUdMLENBQ0g7Q0FDSDtHQXJGS1AsUUFBUTs7UUFZTUwsb0RBQVc7OztBQVp6QkssS0FBQUEsUUFBUTtBQXVGZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWUvaW5kZXgudHN4P2I4YTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcnRQbGF5ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2FtZS9jYXJ0UGxheWVyXCI7XG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4uLy4uL3N0eWxlcy9nYW1lL0hvbWVHYW1lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBHYW1lIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dhbWVcIjtcbmltcG9ydCBVc2VySW5mb1BvcHVwIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VzZXJJbmZvUG9wdXAvVXNlckluZm9Qb3B1cFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBsZWFnZW5kIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzLzNhbWlpOS5wbmdcIjtcbmltcG9ydCB7IExvYWRpbmcgfSBmcm9tIFwiQG5leHR1aS1vcmcvcmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBDb3VudERvd24gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY29udGVyRG93bi9jb250ZXJEb3duXCI7XG5cbmNvbnN0IEhvbWVHYW1lID0gKHByb3BzOiBhbnkpID0+IHtcbiAgY29uc3QgW29wcGVuZW50LCBjaGFuZ2VPcHBdID0gdXNlU3RhdGUoXCJXYWl0aW5nXCIpO1xuICBjb25zdCBbcGxheWVycywgY2hhbmdlTmFtZV0gPSB1c2VTdGF0ZSh7XG4gICAgcGxheWVyMTogXCJcIixcbiAgICBwaWMxOiBcIlwiLFxuICAgIHBsYXllcjI6IFwiXCIsXG4gICAgcGljMjogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtzY29yZSwgY2hhbmdlU2NvcmVdID0gdXNlU3RhdGU8YW55Pih7XG4gICAgcGxheWVyMTogMCxcbiAgICBwbGF5ZXIyOiAwLFxuICB9KTtcbiAgY29uc3QgdGVzdDogYW55ID0gdXNlU2VsZWN0b3I8YW55Pigoc3RhdGUpID0+IHN0YXRlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBwcm9wcy5zb2NrZXQ/LmVtaXQoXCJtYXRjaG1ha2luZ1wiKTtcbiAgICBwcm9wcy5zb2NrZXQ/Lm9uKFwibWF0Y2htYWtpbmdcIiwgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhICE9IFwic3RyaW5nXCIpIHtcblxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPSBcInVuZGVmaW5lZFwiKVxuICAgICAgICBjaGFuZ2VPcHAoXCJjb3VudGVyXCIpXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgcHJvcHMuc29ja2V0Py5lbWl0KFwibWF0Y2htYWtpbmdcIik7XG4gICAgICAgICAgY2hhbmdlTmFtZSgob2xkdmFsdWVzKSA9PiAoe1xuICAgICAgICAgICAgLi4ub2xkdmFsdWVzLFxuICAgICAgICAgICAgcGxheWVyMTogZGF0YVswXSxcbiAgICAgICAgICAgIHBsYXllcjI6IGRhdGFbMV0sXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIGNoYW5nZU9wcChcIkZvdW5kXCIpO1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChcbiAgICAgICAgICAgICAgYGh0dHA6Ly8ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lQX0FEUkVTU0V9OiR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUE9SVH0vdXNlcnMvZ2V0UGljdHVyZWAsXG4gICAgICAgICAgICAgIHsgdXNlck5hbWUxOiBkYXRhWzBdLCB1c2VyTmFtZTI6IGRhdGFbMV0gfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpfWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjaGFuZ2VOYW1lKChvbGR2YWx1ZXMpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ub2xkdmFsdWVzLFxuICAgICAgICAgICAgICAgIHBpYzE6IHJlcy5kYXRhLnVzZXIxLFxuICAgICAgICAgICAgICAgIHBpYzI6IHJlcy5kYXRhLnVzZXIyLFxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LDYwMDApXG4gICAgICAgIH1cblxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Db250YWluZXJ9PlxuICAgICAgICB7b3BwZW5lbnQgPT0gXCJXYWl0aW5nXCIgPyAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleEZsb3c6IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwic3Bpbm5lclwiIHNpemU9XCJ4bFwiIC8+XG4gICAgICAgICAgICA8cD5XYWl0aW5nIGZvciBPcHBlbmVudCAuLi48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBvcHBlbmVudCA9PT0gXCJjb3VudGVyXCIgPyAoXG4gICAgICAgICAgPENvdW50RG93biAvPlxuICAgICAgICApOihcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLmltZ0ltb2ppfSBzcmM9e2xlYWdlbmQuc3JjfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcnRQbGF5ZXJ9PlxuICAgICAgICAgICAgICA8Q2FydFBsYXllclxuICAgICAgICAgICAgICAgIHNjb3JlPXtzY29yZS5wbGF5ZXIxfVxuICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllcnMucGxheWVyMX1cbiAgICAgICAgICAgICAgICBpbWc9e3BsYXllcnMucGljMX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEdhbWUgY2hhbmdlU2NvcmU9e2NoYW5nZVNjb3JlfSBzb2NrZXQ9e3Byb3BzLnNvY2tldH0gc2NvcmU9e3Njb3JlfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2FydFBsYXllcn0+XG4gICAgICAgICAgICAgIDxDYXJ0UGxheWVyXG4gICAgICAgICAgICAgICAgc2NvcmU9e3Njb3JlLnBsYXllcjJ9XG4gICAgICAgICAgICAgICAgbmFtZT17cGxheWVycy5wbGF5ZXIyfVxuICAgICAgICAgICAgICAgIGltZz17cGxheWVycy5waWMyfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIHt0ZXN0LnNpemVzXy56YWtfdGVzdCAmJiA8VXNlckluZm9Qb3B1cCAvPn0gKi99XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lR2FtZTtcbiJdLCJuYW1lcyI6WyJDYXJ0UGxheWVyIiwic3R5bGUiLCJHYW1lIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VTZWxlY3RvciIsImxlYWdlbmQiLCJMb2FkaW5nIiwiYXhpb3MiLCJDb3VudERvd24iLCJIb21lR2FtZSIsInByb3BzIiwib3BwZW5lbnQiLCJjaGFuZ2VPcHAiLCJwbGF5ZXIxIiwicGljMSIsInBsYXllcjIiLCJwaWMyIiwicGxheWVycyIsImNoYW5nZU5hbWUiLCJzY29yZSIsImNoYW5nZVNjb3JlIiwidGVzdCIsInN0YXRlIiwic29ja2V0IiwiZW1pdCIsIm9uIiwiZGF0YSIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJvbGR2YWx1ZXMiLCJwb3N0IiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0lQX0FEUkVTU0UiLCJORVhUX1BVQkxJQ19QT1JUIiwidXNlck5hbWUxIiwidXNlck5hbWUyIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidGhlbiIsInJlcyIsInVzZXIxIiwidXNlcjIiLCJkaXYiLCJjbGFzc05hbWUiLCJDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleEZsb3ciLCJ0eXBlIiwic2l6ZSIsInAiLCJpbWciLCJpbWdJbW9qaSIsInNyYyIsImNhcnRQbGF5ZXIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/game/index.tsx\n");

/***/ })

});