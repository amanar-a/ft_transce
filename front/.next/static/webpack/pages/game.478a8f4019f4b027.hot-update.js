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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/game/cartPlayer */ \"./components/game/cartPlayer.tsx\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../styles/game/HomeGame.module.css */ \"./styles/game/HomeGame.module.css\");\n/* harmony import */ var _styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/game */ \"./components/game.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../public/images/3amii9.png */ \"./public/images/3amii9.png\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @nextui-org/react */ \"./node_modules/@nextui-org/react/esm/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_conterDown_conterDown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/conterDown/conterDown */ \"./components/conterDown/conterDown.tsx\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomeGame = function(props) {\n    _s();\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"Waiting\"), oppenent = ref4[0], changeOpp = ref4[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: \"\",\n        pic1: \"\",\n        player2: \"\",\n        pic2: \"\"\n    }), players = ref1[0], changeName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        player1: 0,\n        player2: 0\n    }), score = ref2[0], changeScore = ref2[1];\n    var test = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function(state) {\n        return state;\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var ref, ref3;\n        (ref = props.socket) === null || ref === void 0 ? void 0 : ref.emit(\"matchmaking\");\n        (ref3 = props.socket) === null || ref3 === void 0 ? void 0 : ref3.on(\"matchmaking\", function(data) {\n            if (typeof data != \"string\") {\n                if (true) wi;\n                changeName(function(oldvalues) {\n                    return _objectSpread({}, oldvalues, {\n                        player1: data[0],\n                        player2: data[1]\n                    });\n                });\n                changeOpp(\"Found\");\n                axios__WEBPACK_IMPORTED_MODULE_6___default().post(\"http://\".concat(\"10.13.3.3\", \":\").concat(\"3001\", \"/users/getPicture\"), {\n                    userName1: data[0],\n                    userName2: data[1]\n                }, {\n                    headers: {\n                        Authorization: \"Bearer \".concat(localStorage.getItem(\"accessToken\"))\n                    }\n                }).then(function(res) {\n                    changeName(function(oldvalues) {\n                        return _objectSpread({}, oldvalues, {\n                            pic1: res.data.user1,\n                            pic2: res.data.user2\n                        });\n                    });\n                });\n            }\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8___default().Container),\n            children: oppenent == \"Waiting\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexFlow: \"column\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_9__.Loading, {\n                        type: \"spinner\",\n                        size: \"xl\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Waiting for Oppenent ...\"\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 62,\n                columnNumber: 11\n            }, _this) : oppenent === \"counter\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_conterDown_conterDown__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                lineNumber: 67,\n                columnNumber: 11\n            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8___default().imgImoji),\n                        src: _public_images_3amii9_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 70,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player1,\n                            name: players.player1,\n                            img: players.pic1\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        changeScore: changeScore,\n                        socket: props.socket\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_game_HomeGame_module_css__WEBPACK_IMPORTED_MODULE_8___default().cartPlayer),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_game_cartPlayer__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            score: score.player2,\n                            name: players.player2,\n                            img: players.pic2\n                        }, void 0, false, {\n                            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true)\n        }, void 0, false, {\n            fileName: \"/Users/amanar/Desktop/ft_transce/front/pages/game/index.tsx\",\n            lineNumber: 60,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(HomeGame, \"ftmZm8s0H3G2YzEyIEEY9Qc5rX0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = HomeGame;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomeGame);\nvar _c;\n$RefreshReg$(_c, \"HomeGame\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxJQUFJOzs7OztpQ0FDakI7Ozs7OzZCQUNFOzs0QkFDTDs7Ozs7aUJBRUQ7cUJBR0wsQ0FDSDtDQUNIO0dBakZLUCxRQUFROztRQVlNTCxvREFBVzs7O0FBWnpCSyxLQUFBQSxRQUFRO0FBbUZkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZS9pbmRleC50c3g/YjhhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FydFBsYXllciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9nYW1lL2NhcnRQbGF5ZXJcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL2dhbWUvSG9tZUdhbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEdhbWUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvZ2FtZVwiO1xuaW1wb3J0IFVzZXJJbmZvUG9wdXAgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXNlckluZm9Qb3B1cC9Vc2VySW5mb1BvcHVwXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGxlYWdlbmQgZnJvbSBcIi4uLy4uL3B1YmxpYy9pbWFnZXMvM2FtaWk5LnBuZ1wiO1xuaW1wb3J0IHsgTG9hZGluZyB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IENvdW50RG93biBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jb250ZXJEb3duL2NvbnRlckRvd25cIjtcblxuY29uc3QgSG9tZUdhbWUgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCBbb3BwZW5lbnQsIGNoYW5nZU9wcF0gPSB1c2VTdGF0ZShcIldhaXRpbmdcIik7XG4gIGNvbnN0IFtwbGF5ZXJzLCBjaGFuZ2VOYW1lXSA9IHVzZVN0YXRlKHtcbiAgICBwbGF5ZXIxOiBcIlwiLFxuICAgIHBpYzE6IFwiXCIsXG4gICAgcGxheWVyMjogXCJcIixcbiAgICBwaWMyOiBcIlwiLFxuICB9KTtcbiAgY29uc3QgW3Njb3JlLCBjaGFuZ2VTY29yZV0gPSB1c2VTdGF0ZTxhbnk+KHtcbiAgICBwbGF5ZXIxOiAwLFxuICAgIHBsYXllcjI6IDAsXG4gIH0pO1xuICBjb25zdCB0ZXN0OiBhbnkgPSB1c2VTZWxlY3Rvcjxhbnk+KChzdGF0ZSkgPT4gc3RhdGUpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHByb3BzLnNvY2tldD8uZW1pdChcIm1hdGNobWFraW5nXCIpO1xuICAgIHByb3BzLnNvY2tldD8ub24oXCJtYXRjaG1ha2luZ1wiLCAoZGF0YTogYW55KSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGRhdGEgIT0gXCJzdHJpbmdcIikge1xuXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9IFwidW5kZWZpbmVkXCIpXG4gICAgICAgIHdpXG4gICAgICAgICAgY2hhbmdlTmFtZSgob2xkdmFsdWVzKSA9PiAoe1xuICAgICAgICAgICAgLi4ub2xkdmFsdWVzLFxuICAgICAgICAgICAgcGxheWVyMTogZGF0YVswXSxcbiAgICAgICAgICAgIHBsYXllcjI6IGRhdGFbMV0sXG4gICAgICAgICAgfSkpO1xuICAgICAgICAgIGNoYW5nZU9wcChcIkZvdW5kXCIpO1xuICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAucG9zdChcbiAgICAgICAgICAgICAgYGh0dHA6Ly8ke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0lQX0FEUkVTU0V9OiR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUE9SVH0vdXNlcnMvZ2V0UGljdHVyZWAsXG4gICAgICAgICAgICAgIHsgdXNlck5hbWUxOiBkYXRhWzBdLCB1c2VyTmFtZTI6IGRhdGFbMV0gfSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjY2Vzc1Rva2VuXCIpfWAsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjaGFuZ2VOYW1lKChvbGR2YWx1ZXMpID0+ICh7XG4gICAgICAgICAgICAgICAgLi4ub2xkdmFsdWVzLFxuICAgICAgICAgICAgICAgIHBpYzE6IHJlcy5kYXRhLnVzZXIxLFxuICAgICAgICAgICAgICAgIHBpYzI6IHJlcy5kYXRhLnVzZXIyLFxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5Db250YWluZXJ9PlxuICAgICAgICB7b3BwZW5lbnQgPT0gXCJXYWl0aW5nXCIgPyAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleEZsb3c6IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgICA8TG9hZGluZyB0eXBlPVwic3Bpbm5lclwiIHNpemU9XCJ4bFwiIC8+XG4gICAgICAgICAgICA8cD5XYWl0aW5nIGZvciBPcHBlbmVudCAuLi48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBvcHBlbmVudCA9PT0gXCJjb3VudGVyXCIgPyAoXG4gICAgICAgICAgPENvdW50RG93biAvPlxuICAgICAgICApOihcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlLmltZ0ltb2ppfSBzcmM9e2xlYWdlbmQuc3JjfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcnRQbGF5ZXJ9PlxuICAgICAgICAgICAgICA8Q2FydFBsYXllclxuICAgICAgICAgICAgICAgIHNjb3JlPXtzY29yZS5wbGF5ZXIxfVxuICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllcnMucGxheWVyMX1cbiAgICAgICAgICAgICAgICBpbWc9e3BsYXllcnMucGljMX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEdhbWUgY2hhbmdlU2NvcmU9e2NoYW5nZVNjb3JlfSBzb2NrZXQ9e3Byb3BzLnNvY2tldH0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcnRQbGF5ZXJ9PlxuICAgICAgICAgICAgICA8Q2FydFBsYXllclxuICAgICAgICAgICAgICAgIHNjb3JlPXtzY29yZS5wbGF5ZXIyfVxuICAgICAgICAgICAgICAgIG5hbWU9e3BsYXllcnMucGxheWVyMn1cbiAgICAgICAgICAgICAgICBpbWc9e3BsYXllcnMucGljMn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiB7dGVzdC5zaXplc18uemFrX3Rlc3QgJiYgPFVzZXJJbmZvUG9wdXAgLz59ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZUdhbWU7XG4iXSwibmFtZXMiOlsiQ2FydFBsYXllciIsInN0eWxlIiwiR2FtZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJsZWFnZW5kIiwiTG9hZGluZyIsImF4aW9zIiwiQ291bnREb3duIiwiSG9tZUdhbWUiLCJwcm9wcyIsIm9wcGVuZW50IiwiY2hhbmdlT3BwIiwicGxheWVyMSIsInBpYzEiLCJwbGF5ZXIyIiwicGljMiIsInBsYXllcnMiLCJjaGFuZ2VOYW1lIiwic2NvcmUiLCJjaGFuZ2VTY29yZSIsInRlc3QiLCJzdGF0ZSIsInNvY2tldCIsImVtaXQiLCJvbiIsImRhdGEiLCJ3aSIsIm9sZHZhbHVlcyIsInBvc3QiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfSVBfQURSRVNTRSIsIk5FWFRfUFVCTElDX1BPUlQiLCJ1c2VyTmFtZTEiLCJ1c2VyTmFtZTIiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aGVuIiwicmVzIiwidXNlcjEiLCJ1c2VyMiIsImRpdiIsImNsYXNzTmFtZSIsIkNvbnRhaW5lciIsImRpc3BsYXkiLCJmbGV4RmxvdyIsInR5cGUiLCJzaXplIiwicCIsImltZyIsImltZ0ltb2ppIiwic3JjIiwiY2FydFBsYXllciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game/index.tsx\n");

/***/ })

});