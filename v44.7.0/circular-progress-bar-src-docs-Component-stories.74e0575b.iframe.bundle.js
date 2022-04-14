"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[3494],{"./packages/circular-progress-bar/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},circular_progress_bar:function(){return circular_progress_bar}});var _circular_progress_ba,_circular_progress_ba2,_circular_progress_ba3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/circular-progress-bar/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/CircularProgressBar",component:_alfalab_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressBar,id:"CircularProgressBar"},circular_progress_bar={name:"CircularProgressBar",render:function render(){var value=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("value",50),view=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",["positive","negative"],"positive"),completeTextColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("completeTextColor",["primary","primary-inverted","positive","negative","secondary"],"secondary"),title=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("title","title"),titleComplete=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("titleComplete",""),subtitle=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("subtitle","subtitle"),contentColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("contentColor",["primary","secondary","tertiary","positive","negative"],"secondary"),subtitleComplete=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("subtitleComplete",""),progressStrokeColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("progressStrokeColor",""),strokeColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("strokeColor",""),circleColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("circleColor","");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressBar,{value:value,view:view,progressStrokeColor:progressStrokeColor,strokeColor:strokeColor,circleColor:circleColor,title:title,titleComplete:titleComplete,subtitle:subtitle,contentColor:contentColor,subtitleComplete:subtitleComplete,stroke:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("stroke",!0),direction:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("direction",["clockwise","counter-clockwise"],"clockwise"),fillComplete:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("fillComplete",!1),completeTextColor:completeTextColor,height:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("height",0),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",["xs","s","m","l","xl","xxl"],"l")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Без атрибута title значение для title берётся из value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressBar,{value:value,view:view,subtitle:subtitle,size:"l"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Если есть children, то они подставляются в центр, а title и subtitle игнорируются"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressBar,{value:value,view:view,title:title,subtitle:subtitle,size:"l",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Hello"})})]})}};__webpack_exports__.default=meta,circular_progress_bar.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},circular_progress_bar.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_circular_progress_ba=circular_progress_bar.parameters)||void 0===_circular_progress_ba?void 0:_circular_progress_ba.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  name: 'CircularProgressBar',\n  render: () => {\n    const value = number('value', 50);\n    const view = select('view', ['positive', 'negative'], 'positive');\n    const completeTextColor = select('completeTextColor', ['primary', 'primary-inverted', 'positive', 'negative', 'secondary'], 'secondary');\n    const title = text('title', 'title');\n    const titleComplete = text('titleComplete', '');\n    const subtitle = text('subtitle', 'subtitle');\n    const contentColor = select('contentColor', ['primary', 'secondary', 'tertiary', 'positive', 'negative'], 'secondary');\n    const subtitleComplete = text('subtitleComplete', '');\n    const progressStrokeColor = text('progressStrokeColor', '');\n    const strokeColor = text('strokeColor', '');\n    const circleColor = text('circleColor', '');\n    return <>\n                <CircularProgressBar value={value} view={view} progressStrokeColor={progressStrokeColor} strokeColor={strokeColor} circleColor={circleColor} title={title} titleComplete={titleComplete} subtitle={subtitle} contentColor={contentColor} subtitleComplete={subtitleComplete} stroke={boolean('stroke', true)} direction={select('direction', ['clockwise', 'counter-clockwise'], 'clockwise')} fillComplete={boolean('fillComplete', false)} completeTextColor={completeTextColor} height={number('height', 0)} size={select('size', ['xs', 's', 'm', 'l', 'xl', 'xxl'], 'l')} />\n                <p>Без атрибута title значение для title берётся из value</p>\n                <CircularProgressBar value={value} view={view} subtitle={subtitle} size='l' />\n                <p>\n                    Если есть children, то они подставляются в центр, а title и subtitle\n                    игнорируются\n                </p>\n                <CircularProgressBar value={value} view={view} title={title} subtitle={subtitle} size='l'>\n                    <p>Hello</p>\n                </CircularProgressBar>\n            </>;\n  }\n}"},null===(_circular_progress_ba2=circular_progress_bar.parameters)||void 0===_circular_progress_ba2?void 0:null===(_circular_progress_ba3=_circular_progress_ba2.docs)||void 0===_circular_progress_ba3?void 0:_circular_progress_ba3.source)})});let __namedExportsOrder=["circular_progress_bar"]}}]);