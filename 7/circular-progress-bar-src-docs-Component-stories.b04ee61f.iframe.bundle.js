"use strict";(self.webpackChunk_balafla_core_components_repository=self.webpackChunk_balafla_core_components_repository||[]).push([[3494],{"./packages/circular-progress-bar/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},circular_progress_bar:function(){return circular_progress_bar},timer:function(){return timer}});var _circular_progress_ba,_circular_progress_ba2,_circular_progress_ba3,_timer$parameters,_timer$parameters2,_timer$parameters2$do,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_balafla_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/circular-progress-bar/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/CircularProgressBar",component:_balafla_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressBar,id:"CircularProgressBar"},circular_progress_bar={name:"CircularProgressBar",render:function render(){var value=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("value",50),view=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",["positive","negative"],"positive"),completeTextColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("completeTextColor",["primary","primary-inverted","positive","negative","secondary"],"secondary"),title=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("title","title"),titleComplete=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("titleComplete",""),subtitle=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("subtitle","subtitle"),contentColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("contentColor",["primary","secondary","tertiary","positive","negative"],"secondary"),subtitleComplete=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("subtitleComplete",""),progressStrokeColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("progressStrokeColor",""),strokeColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("strokeColor",""),circleColor=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("circleColor","");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_balafla_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressBar,{value:value,view:view,progressStrokeColor:progressStrokeColor,strokeColor:strokeColor,circleColor:circleColor,title:title,titleComplete:titleComplete,subtitle:subtitle,contentColor:contentColor,subtitleComplete:subtitleComplete,stroke:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("stroke",!0),direction:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("direction",["clockwise","counter-clockwise"],"clockwise"),fillComplete:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("fillComplete",!1),completeTextColor:completeTextColor,height:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("height",0),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",[24,48,64,80,128,144],80)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Без атрибута title значение для title берётся из value"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_balafla_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressBar,{value:value,view:view,subtitle:subtitle,size:80}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Если есть children, то они подставляются в центр, а title и subtitle игнорируются"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_balafla_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressBar,{value:value,view:view,title:title,subtitle:subtitle,size:80,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Hello"})})]})}},timer={name:"Timer",render:function render(){var counting=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("counting",["backward","forward"],"backward"),directionType=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("directionType",["desc","asc"],"desc");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_balafla_core_components_circular_progress_bar__WEBPACK_IMPORTED_MODULE_2__.CircularProgressBar,{timer:!0,size:80,value:60,counting:counting,directionType:directionType})}};__webpack_exports__.default=meta,circular_progress_bar.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},circular_progress_bar.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_circular_progress_ba=circular_progress_bar.parameters)||void 0===_circular_progress_ba?void 0:_circular_progress_ba.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  name: 'CircularProgressBar',\n  render: () => {\n    const value = number('value', 50);\n    const view = select('view', ['positive', 'negative'], 'positive');\n    const completeTextColor = select('completeTextColor', ['primary', 'primary-inverted', 'positive', 'negative', 'secondary'], 'secondary');\n    const title = text('title', 'title');\n    const titleComplete = text('titleComplete', '');\n    const subtitle = text('subtitle', 'subtitle');\n    const contentColor = select('contentColor', ['primary', 'secondary', 'tertiary', 'positive', 'negative'], 'secondary');\n    const subtitleComplete = text('subtitleComplete', '');\n    const progressStrokeColor = text('progressStrokeColor', '');\n    const strokeColor = text('strokeColor', '');\n    const circleColor = text('circleColor', '');\n    return <>\n                <CircularProgressBar value={value} view={view} progressStrokeColor={progressStrokeColor} strokeColor={strokeColor} circleColor={circleColor} title={title} titleComplete={titleComplete} subtitle={subtitle} contentColor={contentColor} subtitleComplete={subtitleComplete} stroke={boolean('stroke', true)} direction={select('direction', ['clockwise', 'counter-clockwise'], 'clockwise')} fillComplete={boolean('fillComplete', false)} completeTextColor={completeTextColor} height={number('height', 0)} size={select('size', [24, 48, 64, 80, 128, 144], 80)} />\n                <p>Без атрибута title значение для title берётся из value</p>\n                <CircularProgressBar value={value} view={view} subtitle={subtitle} size={80} />\n                <p>\n                    Если есть children, то они подставляются в центр, а title и subtitle\n                    игнорируются\n                </p>\n                <CircularProgressBar value={value} view={view} title={title} subtitle={subtitle} size={80}>\n                    <p>Hello</p>\n                </CircularProgressBar>\n            </>;\n  }\n}"},null===(_circular_progress_ba2=circular_progress_bar.parameters)||void 0===_circular_progress_ba2?void 0:null===(_circular_progress_ba3=_circular_progress_ba2.docs)||void 0===_circular_progress_ba3?void 0:_circular_progress_ba3.source)})}),timer.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},timer.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_timer$parameters=timer.parameters)||void 0===_timer$parameters?void 0:_timer$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  name: 'Timer',\n  render: () => {\n    const counting = select('counting', ['backward', 'forward'], 'backward');\n    const directionType = select('directionType', ['desc', 'asc'], 'desc');\n    return <CircularProgressBar timer={true} size={80} value={60} counting={counting} directionType={directionType} />;\n  }\n}"},null===(_timer$parameters2=timer.parameters)||void 0===_timer$parameters2?void 0:null===(_timer$parameters2$do=_timer$parameters2.docs)||void 0===_timer$parameters2$do?void 0:_timer$parameters2$do.source)})});let __namedExportsOrder=["circular_progress_bar","timer"]}}]);