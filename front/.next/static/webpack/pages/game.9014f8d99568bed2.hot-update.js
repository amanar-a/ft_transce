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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/game/cartPlayer */ \"./components/game/cartPlayer.tsx\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../styles/game/HomeGame.module.css */ \"./styles/game/HomeGame.module.css\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/game */ \"./components/game.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../public/images/3amii9.png */ \"./public/images/3amii9.png\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_conterDown_conterDown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/conterDown/conterDown */ \"./components/conterDown/conterDown.tsx\");\n/* harmony import */ var _components_cartwin_cartwin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/cartwin/cartwin */ \"./components/cartwin/cartwin.tsx\");\n/* harmony import */ var _components_cartlose_cartlose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/cartlose/cartlose */ \"./components/cartlose/cartlose.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomeGame = function(props) {\n    _s();\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Waiting\"), oppenent = ref5[0], changeOpp = ref5[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: \"\",\n        pic1: \"\",\n        player2: \"\",\n        pic2: \"\"\n    }), players = ref1[0], changeName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        winner: \"\",\n        loser: \"\"\n    }), gameOver = ref2[0], changeGameOver = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: 0,\n        player2: 0\n    }), score = ref3[0], changeScore = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ref7, ref4;\n        (ref7 = props.socket) === null || ref7 === void 0 ? void 0 : ref7.emit(\"matchmaking\");\n        (ref4 = props.socket) === null || ref4 === void 0 ? void 0 : ref4.on(\"matchmaking\", function(data1) {\n            var ref8, ref6;\n            if (typeof data1 != \"string\") {\n                if (true) changeOpp(\"counter\");\n                window.setTimeout(function() {\n                    var ref;\n                    (ref = props.socket) === null || ref === void 0 ? void 0 : ref.emit(\"setInterval\");\n                    changeName(function(oldvalues) {\n                        return _objectSpread({}, oldvalues, {\n                            player1: data1[0],\n                            player2: data1[1]\n                        });\n                    });\n                    changeOpp(\"Found\");\n                    axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"http://\".concat(\"10.13.3.3\", \":\").concat(\"3001\", \"/users/getPicture\"), {\n                        userName1: data1[0],\n                        userName2: data1[1]\n                    }, {\n                        headers: {\n                            Authorization: \"Bearer \".concat(localStorage.getItem(\"accessToken\"))\n                        }\n                    }).then(function(res) {\n                        changeName(function(oldvalues) {\n                            return _objectSpread({}, oldvalues, {\n                                pic1: res.data.user1,\n                                pic2: res.data.user2\n                            });\n                        });\n                    });\n                }, 6000);\n            }\n            (ref8 = props.socket) === null || ref8 === void 0 ? void 0 : ref8.on(\"opponentLeft\", function(data) {\n                changeOpp(\"Winner\");\n                changeGameOver(function(oldValues) {\n                    return _objectSpread({}, oldValues, {\n                        winner: data.user\n                    });\n                });\n            });\n            (ref6 = props.socket) === null || ref6 === void 0 ? void 0 : ref6.on(\"gameOver\", function(data) {\n                changeOpp(\"Winner\");\n                changeGameOver(function(oldValues) {\n                    return _objectSpread({}, oldValues, {\n                        winner: data.user\n                    });\n                });\n            });\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9___default().Container),\n            children: oppenent == \"Waiting\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexFlow: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_10__.Loading, {\n                        type: \"spinner\",\n                        size: \"xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Waiting for Oppenent ...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 78,\n                columnNumber: 11\n            }, _this) : oppenent === \"counter\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_conterDown_conterDown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 83,\n                columnNumber: 11\n            }, _this) : oppenent === \"Winner\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cartwin_cartwin__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                userName: gameOver.winner,\n                score: gameOver.winner == players.player1 ? score.player1 : score.player2,\n                img: gameOver.winner == players.player1 ? players.pic1 : players.pic2\n            }, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 86,\n                columnNumber: 11\n            }, _this) : oppenent === \"Loser\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_cartlose_cartlose__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                userName: gameOver.loser,\n                score: gameOver.winner == players.player1 ? score.player1 : score.player2,\n                img: gameOver.winner == players.player1 ? players.pic1 : players.pic2\n            }, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 89,\n                columnNumber: 11\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9___default().imgImoji),\n                        src: _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player1,\n                            name: players.player1,\n                            img: players.pic1\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 93,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        changeScore: changeScore,\n                        socket: props.socket,\n                        score: score\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_9___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player2,\n                            name: players.player2,\n                            img: players.pic2\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 102,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HomeGame, \"GdRZpUUjJ5RUWdLwc0+BV6qHNO8=\");\n_c = HomeGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeGame);\nvar _c;\n$RefreshReg$(_c, \"HomeGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxJQUFJOzs7OztxQkFBRyxpQkFFdEw7O2tDQUNFLDhEQUFDMEMsS0FBRzt3QkFBQ1IsU0FBUyxFQUFFbkQsa0ZBQWM7d0JBQUU2RCxHQUFHLEVBQUV6RCxxRUFBVzs7Ozs7NkJBQUk7a0NBQ3BELDhEQUFDOEMsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFbkQsb0ZBQWdCO2tDQUM5Qiw0RUFBQ0QsbUVBQVU7NEJBQ1R5QixLQUFLLEVBQUVBLEtBQUssQ0FBQ1YsT0FBTzs0QkFDcEJpRCxJQUFJLEVBQUU3QyxPQUFPLENBQUNKLE9BQU87NEJBQ3JCNkMsR0FBRyxFQUFFekMsT0FBTyxDQUFDSCxJQUFJOzs7OztpQ0FDakI7Ozs7OzZCQUNFO2tDQUNOLDhEQUFDZCx3REFBSTt3QkFBQ3dCLFdBQVcsRUFBRUEsV0FBVzt3QkFBRUMsTUFBTSxFQUFFZixLQUFLLENBQUNlLE1BQU07d0JBQUVGLEtBQUssRUFBRUEsS0FBSzs7Ozs7NkJBQUc7a0NBQ3JFLDhEQUFDMEIsS0FBRzt3QkFBQ0MsU0FBUyxFQUFFbkQsb0ZBQWdCO2tDQUM5Qiw0RUFBQ0QsbUVBQVU7NEJBQ1R5QixLQUFLLEVBQUVBLEtBQUssQ0FBQ1IsT0FBTzs0QkFDcEIrQyxJQUFJLEVBQUU3QyxPQUFPLENBQUNGLE9BQU87NEJBQ3JCMkMsR0FBRyxFQUFFekMsT0FBTyxDQUFDRCxJQUFJOzs7OztpQ0FDakI7Ozs7OzZCQUNFOzs0QkFDTDs7Ozs7aUJBRUQ7cUJBR0wsQ0FDSDtDQUNIO0dBckdLUCxRQUFRO0FBQVJBLEtBQUFBLFFBQVE7QUF1R2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lL2luZGV4LnRzeD9iOGE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJ0UGxheWVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2dhbWUvY2FydFBsYXllclwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvZ2FtZS9Ib21lR2FtZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgR2FtZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nYW1lXCI7XG5pbXBvcnQgVXNlckluZm9Qb3B1cCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Vc2VySW5mb1BvcHVwL1VzZXJJbmZvUG9wdXBcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgbGVhZ2VuZCBmcm9tIFwiLi4vLi4vcHVibGljL2ltYWdlcy8zYW1paTkucG5nXCI7XG5pbXBvcnQgeyBMb2FkaW5nIH0gZnJvbSBcIkBuZXh0dWktb3JnL3JlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgQ291bnREb3duIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbnRlckRvd24vY29udGVyRG93blwiO1xuaW1wb3J0IENhcnR3aW4gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FydHdpbi9jYXJ0d2luXCI7XG5pbXBvcnQgQ2FydExvc2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FydGxvc2UvY2FydGxvc2VcIjtcblxuY29uc3QgSG9tZUdhbWUgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBbb3BwZW5lbnQsIGNoYW5nZU9wcF0gPSB1c2VTdGF0ZShcIldhaXRpbmdcIik7XG4gIGNvbnN0IFtwbGF5ZXJzLCBjaGFuZ2VOYW1lXSA9IHVzZVN0YXRlKHtcbiAgICBwbGF5ZXIxOiBcIlwiLFxuICAgIHBpYzE6IFwiXCIsXG4gICAgcGxheWVyMjogXCJcIixcbiAgICBwaWMyOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW2dhbWVPdmVyLCBjaGFuZ2VHYW1lT3Zlcl0gPSB1c2VTdGF0ZSh7XG4gICAgd2lubmVyOlwiXCIsXG4gICAgbG9zZXI6XCJcIlxuICB9KVxuICBjb25zdCBbc2NvcmUsIGNoYW5nZVNjb3JlXSA9IHVzZVN0YXRlPGFueT4oe1xuICAgIHBsYXllcjE6IDAsXG4gICAgcGxheWVyMjogMCxcbiAgfSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcHJvcHMuc29ja2V0Py5lbWl0KFwibWF0Y2htYWtpbmdcIik7XG4gICAgcHJvcHMuc29ja2V0Py5vbihcIm1hdGNobWFraW5nXCIsIChkYXRhOiBhbnkpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgZGF0YSAhPSBcInN0cmluZ1wiKSB7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgY2hhbmdlT3BwKFwiY291bnRlclwiKVxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIHByb3BzLnNvY2tldD8uZW1pdChcInNldEludGVydmFsXCIpO1xuICAgICAgICAgIGNoYW5nZU5hbWUoKG9sZHZhbHVlcykgPT4gKHtcbiAgICAgICAgICAgIC4uLm9sZHZhbHVlcyxcbiAgICAgICAgICAgIHBsYXllcjE6IGRhdGFbMF0sXG4gICAgICAgICAgICBwbGF5ZXIyOiBkYXRhWzFdLFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgICBjaGFuZ2VPcHAoXCJGb3VuZFwiKTtcbiAgICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QoXG4gICAgICAgICAgICAgIGBodHRwOi8vJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19JUF9BRFJFU1NFfToke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BPUlR9L3VzZXJzL2dldFBpY3R1cmVgLFxuICAgICAgICAgICAgICB7IHVzZXJOYW1lMTogZGF0YVswXSwgdXNlck5hbWUyOiBkYXRhWzFdIH0sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY2Nlc3NUb2tlblwiKX1gLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY2hhbmdlTmFtZSgob2xkdmFsdWVzKSA9PiAoe1xuICAgICAgICAgICAgICAgIC4uLm9sZHZhbHVlcyxcbiAgICAgICAgICAgICAgICBwaWMxOiByZXMuZGF0YS51c2VyMSxcbiAgICAgICAgICAgICAgICBwaWMyOiByZXMuZGF0YS51c2VyMixcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSw2MDAwKVxuICAgICAgICB9XG4gICAgICAgIHByb3BzLnNvY2tldD8ub24oXCJvcHBvbmVudExlZnRcIiwoZGF0YTphbnkpID0+e1xuICAgICAgICAgIGNoYW5nZU9wcChcIldpbm5lclwiKVxuICAgICAgICAgIGNoYW5nZUdhbWVPdmVyKG9sZFZhbHVlcyA9Pih7Li4ub2xkVmFsdWVzLHdpbm5lcjpkYXRhLnVzZXJ9KSlcbiAgICAgICAgfSlcbiAgICAgICAgcHJvcHMuc29ja2V0Py5vbihcImdhbWVPdmVyXCIsKGRhdGE6YW55KSA9PntcbiAgICAgICAgICBjaGFuZ2VPcHAoXCJXaW5uZXJcIilcbiAgICAgICAgICBjaGFuZ2VHYW1lT3ZlcihvbGRWYWx1ZXMgPT4oey4uLm9sZFZhbHVlcyx3aW5uZXI6ZGF0YS51c2VyfSkpXG4gICAgICAgIH0pXG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLkNvbnRhaW5lcn0+XG4gICAgICAgIHtvcHBlbmVudCA9PSBcIldhaXRpbmdcIiA/IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RmxvdzogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAgICAgIDxMb2FkaW5nIHR5cGU9XCJzcGlubmVyXCIgc2l6ZT1cInhsXCIgLz5cbiAgICAgICAgICAgIDxwPldhaXRpbmcgZm9yIE9wcGVuZW50IC4uLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG9wcGVuZW50ID09PSBcImNvdW50ZXJcIiA/IChcbiAgICAgICAgICA8Q291bnREb3duIC8+XG4gICAgICAgICk6XG4gICAgICAgIG9wcGVuZW50ID09PSBcIldpbm5lclwiID8gKFxuICAgICAgICAgIDxDYXJ0d2luIHVzZXJOYW1lPXtnYW1lT3Zlci53aW5uZXJ9IHNjb3JlPXtnYW1lT3Zlci53aW5uZXIgPT0gcGxheWVycy5wbGF5ZXIxID8gc2NvcmUucGxheWVyMSA6IHNjb3JlLnBsYXllcjJ9IGltZz17Z2FtZU92ZXIud2lubmVyID09IHBsYXllcnMucGxheWVyMSA/IHBsYXllcnMucGljMTogcGxheWVycy5waWMyfS8+XG4gICAgICAgICk6XG4gICAgICAgIG9wcGVuZW50ID09PSBcIkxvc2VyXCIgPyAoXG4gICAgICAgICAgPENhcnRMb3NlIHVzZXJOYW1lPXtnYW1lT3Zlci5sb3Nlcn0gc2NvcmU9e2dhbWVPdmVyLndpbm5lciA9PSBwbGF5ZXJzLnBsYXllcjEgPyBzY29yZS5wbGF5ZXIxIDogc2NvcmUucGxheWVyMn0gaW1nPXtnYW1lT3Zlci53aW5uZXIgPT0gcGxheWVycy5wbGF5ZXIxID8gcGxheWVycy5waWMxOiBwbGF5ZXJzLnBpYzJ9Lz5cbiAgICAgICAgKTooXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZS5pbWdJbW9qaX0gc3JjPXtsZWFnZW5kLnNyY30gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJ0UGxheWVyfT5cbiAgICAgICAgICAgICAgPENhcnRQbGF5ZXJcbiAgICAgICAgICAgICAgICBzY29yZT17c2NvcmUucGxheWVyMX1cbiAgICAgICAgICAgICAgICBuYW1lPXtwbGF5ZXJzLnBsYXllcjF9XG4gICAgICAgICAgICAgICAgaW1nPXtwbGF5ZXJzLnBpYzF9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxHYW1lIGNoYW5nZVNjb3JlPXtjaGFuZ2VTY29yZX0gc29ja2V0PXtwcm9wcy5zb2NrZXR9IHNjb3JlPXtzY29yZX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcnRQbGF5ZXJ9PlxuICAgICAgICAgICAgICA8Q2FydFBsYXllclxuICAgICAgICAgICAgICAgIHNjb3JlPXtzY29yZS5wbGF5ZXIyfVxuICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllcnMucGxheWVyMn1cbiAgICAgICAgICAgICAgICBpbWc9e3BsYXllcnMucGljMn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiB7dGVzdC5zaXplc18uemFrX3Rlc3QgJiYgPFVzZXJJbmZvUG9wdXAgLz59ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUdhbWU7XG4iXSwibmFtZXMiOlsiQ2FydFBsYXllciIsInN0eWxlIiwiR2FtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwibGVhZ2VuZCIsIkxvYWRpbmciLCJheGlvcyIsIkNvdW50RG93biIsIkNhcnR3aW4iLCJDYXJ0TG9zZSIsIkhvbWVHYW1lIiwicHJvcHMiLCJvcHBlbmVudCIsImNoYW5nZU9wcCIsInBsYXllcjEiLCJwaWMxIiwicGxheWVyMiIsInBpYzIiLCJwbGF5ZXJzIiwiY2hhbmdlTmFtZSIsIndpbm5lciIsImxvc2VyIiwiZ2FtZU92ZXIiLCJjaGFuZ2VHYW1lT3ZlciIsInNjb3JlIiwiY2hhbmdlU2NvcmUiLCJzb2NrZXQiLCJlbWl0Iiwib24iLCJkYXRhIiwid2luZG93Iiwic2V0VGltZW91dCIsIm9sZHZhbHVlcyIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSVBfQURSRVNTRSIsIk5FWFRfUFVCTElDX1BPUlQiLCJ1c2VyTmFtZTEiLCJ1c2VyTmFtZTIiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwicmVzIiwidXNlcjEiLCJ1c2VyMiIsIm9sZFZhbHVlcyIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJDb250YWluZXIiLCJkaXNwbGF5IiwiZmxleEZsb3ciLCJ0eXBlIiwic2l6ZSIsInAiLCJ1c2VyTmFtZSIsImltZyIsImltZ0ltb2ppIiwic3JjIiwiY2FydFBsYXllciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game/index.tsx\n");

/***/ })

});