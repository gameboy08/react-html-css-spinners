(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{264:function(module){module.exports=JSON.parse('{"name":"react-html-css-spinners","version":"1.0.0","description":"CSS-only spinners for React","main":"./dist/bundle.cjs.js","module":"./dist/bundle.esm.js","sideEffects":false,"scripts":{"lint":"eslint \'**/*.js\'","lint:fix":"prettier-eslint \'**/*.js\' --write","prebuild":"rimraf dist","build":"rollup -c","storybook":"start-storybook","storybook:build":"build-storybook","test":"jest","test:staged":"jest --findRelatedTests","test:watch":"jest --watch","test:coverage":"jest --coverage","test:coveralls":"jest --coverage --coverageReporters=text-lcov | coveralls","predeploy":"npm run storybook:build","deploy":"gh-pages -d storybook-static"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"*.js":["npm run lint:fix","git add","npm test:staged"]},"repository":{"type":"git","url":"https://github.com/gameboy08/react-html-css-spinners.git"},"keywords":["react","html","css","spinners"],"author":"Wayne","license":"MIT","bugs":{"url":"https://github.com/gameboy08/react-html-css-spinners/issues"},"homepage":"https://github.com/gameboy08/react-html-css-spinners#readme","devDependencies":{"@babel/core":"^7.6.2","@babel/preset-env":"^7.6.2","@babel/preset-react":"^7.0.0","@storybook/react":"^5.2.1","babel-jest":"^24.9.0","babel-loader":"^8.0.6","coveralls":"^3.0.6","eslint":"^6.4.0","eslint-config-standard":"^14.1.0","eslint-plugin-import":"^2.18.2","eslint-plugin-jest":"^22.17.0","eslint-plugin-node":"^10.0.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-react":"^7.14.3","eslint-plugin-standard":"^4.0.1","gh-pages":"^2.1.1","husky":"^3.0.5","jest":"^24.9.0","lint-staged":"^9.3.0","prettier-eslint":"^9.0.0","prettier-eslint-cli":"^5.0.0","react":"^16.9.0","react-dom":"^16.9.0","react-test-renderer":"^16.9.0","rimraf":"^3.0.0","rollup":"^1.21.4","rollup-plugin-babel":"^4.3.3","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-string":"^3.0.0","rollup-plugin-terser":"^5.1.2"},"dependencies":{},"peerDependencies":{"react":">=16.2"},"engines":{"node":">=8"},"jest":{"moduleNameMapper":{"\\\\.css$":"<rootDir>/mocks/styleMock.js"}}}')},265:function(module,exports,__webpack_require__){var content=__webpack_require__(580);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(163)(content,options);content.locals&&(module.exports=content.locals)},266:function(module,exports,__webpack_require__){var content=__webpack_require__(582);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(163)(content,options);content.locals&&(module.exports=content.locals)},267:function(module,exports,__webpack_require__){var content=__webpack_require__(583);"string"==typeof content&&(content=[[module.i,content,""]]);var options={hmr:!0,transform:void 0,insertInto:void 0};__webpack_require__(163)(content,options);content.locals&&(module.exports=content.locals)},268:function(module,exports,__webpack_require__){__webpack_require__(269),__webpack_require__(378),module.exports=__webpack_require__(379)},290:function(module,exports){},379:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(164),_package_json__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(264);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{name:"React CSS Spinners",url:_package_json__WEBPACK_IMPORTED_MODULE_1__.repository.url,showAddonsPanel:!0}}),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(579),module)}.call(this,__webpack_require__(380)(module))},579:function(module,exports,__webpack_require__){var map={"./index.stories.js":584};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=579},580:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(162)(!1)).push([module.i,".lds-ripple {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n.lds-ripple div {\n  position: absolute;\n  border: 4px solid #fcf;\n  opacity: 1;\n  border-radius: 50%;\n  -webkit-animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n          animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n.lds-ripple div:nth-child(2) {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s;\n}\n@-webkit-keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n  }\n}\n@keyframes lds-ripple {\n  0% {\n    top: 28px;\n    left: 28px;\n    width: 0;\n    height: 0;\n    opacity: 1;\n  }\n  100% {\n    top: -1px;\n    left: -1px;\n    width: 58px;\n    height: 58px;\n    opacity: 0;\n  }\n}\n",""])},582:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(162)(!1)).push([module.i,".lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #fcf;\n  -webkit-animation-timing-function: cubic-bezier(0, 1, 1, 0);\n          animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  -webkit-animation: lds-ellipsis1 0.6s infinite;\n          animation: lds-ellipsis1 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  -webkit-animation: lds-ellipsis2 0.6s infinite;\n          animation: lds-ellipsis2 0.6s infinite;\n}\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  -webkit-animation: lds-ellipsis3 0.6s infinite;\n          animation: lds-ellipsis3 0.6s infinite;\n}\n@-webkit-keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@-webkit-keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(19px, 0);\n  }\n}\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(19px, 0);\n  }\n}\n",""])},583:function(module,exports,__webpack_require__){(module.exports=__webpack_require__(162)(!1)).push([module.i,".lds-ring {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n.lds-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 6px solid #fcf;\n  border-radius: 50%;\n  -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fcf transparent transparent transparent;\n}\n.lds-ring div:nth-child(1) {\n  -webkit-animation-delay: -0.45s;\n          animation-delay: -0.45s;\n}\n.lds-ring div:nth-child(2) {\n  -webkit-animation-delay: -0.3s;\n          animation-delay: -0.3s;\n}\n.lds-ring div:nth-child(3) {\n  -webkit-animation-delay: -0.15s;\n          animation-delay: -0.15s;\n}\n@-webkit-keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes lds-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n",""])},584:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),styles=__webpack_require__(265),styles_default=__webpack_require__.n(styles),_ref=react_default.a.createElement("div",{className:"lds-ripple"},react_default.a.createElement("div",null),react_default.a.createElement("div",null));function Ripple(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("style",null,"".concat(styles_default.a)),_ref)}var Ripple_Ripple=Ripple;Ripple.__docgenInfo={description:"",methods:[],displayName:"Ripple"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Ripple/Ripple.js"]={name:"Ripple",docgenInfo:Ripple.__docgenInfo,path:"src/Ripple/Ripple.js"});var Ellipsis_styles=__webpack_require__(266),Ellipsis_styles_default=__webpack_require__.n(Ellipsis_styles),Ellipsis_ref=react_default.a.createElement("div",{className:"lds-ellipsis"},react_default.a.createElement("div",null),react_default.a.createElement("div",null),react_default.a.createElement("div",null),react_default.a.createElement("div",null));function Ellipsis(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("style",null,"".concat(Ellipsis_styles_default.a)),Ellipsis_ref)}Ellipsis.__docgenInfo={description:"",methods:[],displayName:"Ellipsis"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Ellipsis/Ellipsis.js"]={name:"Ellipsis",docgenInfo:Ellipsis.__docgenInfo,path:"src/Ellipsis/Ellipsis.js"});var Ring_styles=__webpack_require__(267),Ring_styles_default=__webpack_require__.n(Ring_styles),Ring_ref=react_default.a.createElement("div",{className:"lds-ring"},react_default.a.createElement("div",null),react_default.a.createElement("div",null),react_default.a.createElement("div",null),react_default.a.createElement("div",null));function Ring(){return react_default.a.createElement(react_default.a.Fragment,null,react_default.a.createElement("style",null,"".concat(Ring_styles_default.a)),Ring_ref)}Ring.__docgenInfo={description:"",methods:[],displayName:"Ring"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Ring/Ring.js"]={name:"Ring",docgenInfo:Ring.__docgenInfo,path:"src/Ring/Ring.js"}),__webpack_require__.d(__webpack_exports__,"ripple",(function(){return ripple})),__webpack_require__.d(__webpack_exports__,"ellipsis",(function(){return ellipsis})),__webpack_require__.d(__webpack_exports__,"ring",(function(){return ring}));__webpack_exports__.default={title:"Spinners"};var ripple=function(){return react_default.a.createElement(Ripple_Ripple)},index_stories_ref=react_default.a.createElement(Ellipsis,null),ellipsis=function(){return index_stories_ref};ellipsis.displayName="ellipsis";var _ref2=react_default.a.createElement(Ring,null),ring=function(){return _ref2};ring.displayName="ring",ripple.__docgenInfo={description:"",methods:[],displayName:"ripple"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.stories.js"]={name:"ripple",docgenInfo:ripple.__docgenInfo,path:"stories/index.stories.js"}),ellipsis.__docgenInfo={description:"",methods:[],displayName:"ellipsis"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.stories.js"]={name:"ellipsis",docgenInfo:ellipsis.__docgenInfo,path:"stories/index.stories.js"}),ring.__docgenInfo={description:"",methods:[],displayName:"ring"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["stories/index.stories.js"]={name:"ring",docgenInfo:ring.__docgenInfo,path:"stories/index.stories.js"})}},[[268,1,2]]]);
//# sourceMappingURL=main.8a35400a4a8abe4366d8.bundle.js.map