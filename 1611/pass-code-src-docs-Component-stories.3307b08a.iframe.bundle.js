"use strict";(self.webpackChunk_alfalab_core_components_repository=self.webpackChunk_alfalab_core_components_repository||[]).push([[2749],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/pass-code/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},pass_code:function(){return pass_code}});var _pass_code$parameters,_pass_code$parameters2,_pass_code$parameters3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_pass_code__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/pass-code/modern/index.js"),_alfalab_icons_glyph_SfFaceIdXxlIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@alfalab/icons-glyph/SfFaceIdXxlIcon.js");__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/PassCode",component:_alfalab_core_components_pass_code__WEBPACK_IMPORTED_MODULE_2__.PassCode,id:"PassCode"},pass_code={name:"PassCode",render:function render(){var codeLength=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("codeLength",0,{min:0,max:12,range:!0});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{height:"100vh"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code__WEBPACK_IMPORTED_MODULE_2__.PassCode,{value:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("value",""),onChange:function onChange(){},maxCodeLength:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("maxCodeLength",8,{min:0,max:12,range:!0}),codeLength:0===codeLength?void 0:codeLength,error:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("error",!1),success:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("success",!1),disabled:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),leftAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("leftAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code__WEBPACK_IMPORTED_MODULE_2__.KeyPadButton,{view:"text",children:"Забыли код?"},"left-addon"),rightAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("rightAddons",!1)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_pass_code__WEBPACK_IMPORTED_MODULE_2__.KeyPadButton,{view:"text",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_icons_glyph_SfFaceIdXxlIcon__WEBPACK_IMPORTED_MODULE_3__.SfFaceIdXxlIcon,{})},"right-addon")})})}};__webpack_exports__.default=meta,pass_code.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},pass_code.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_pass_code$parameters=pass_code.parameters)||void 0===_pass_code$parameters?void 0:_pass_code$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'PassCode',\n  render: () => {\n    const codeLength = number('codeLength', 0, {\n      min: 0,\n      max: 12,\n      range: true\n    });\n    return <div style={{\n      height: '100vh'\n    }}>\n                <PassCode value={text('value', '')} onChange={() => {}} maxCodeLength={number('maxCodeLength', 8, {\n        min: 0,\n        max: 12,\n        range: true\n      })} codeLength={codeLength === 0 ? undefined : codeLength} error={boolean('error', false)} success={boolean('success', false)} disabled={boolean('disabled', false)} leftAddons={boolean('leftAddons', false) && <KeyPadButton view='text' key='left-addon'>\n                                Забыли код?\n                            </KeyPadButton>} rightAddons={boolean('rightAddons', false) && <KeyPadButton view='text' key='right-addon'>\n                                <SfFaceIdXxlIcon />\n                            </KeyPadButton>} />\n            </div>;\n  }\n}"},null===(_pass_code$parameters2=pass_code.parameters)||void 0===_pass_code$parameters2?void 0:null===(_pass_code$parameters3=_pass_code$parameters2.docs)||void 0===_pass_code$parameters3?void 0:_pass_code$parameters3.source)})});let __namedExportsOrder=["pass_code"]}}]);