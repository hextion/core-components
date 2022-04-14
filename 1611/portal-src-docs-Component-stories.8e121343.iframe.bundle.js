"use strict";(self.webpackChunk_alfalab_core_components_repository=self.webpackChunk_alfalab_core_components_repository||[]).push([[569],{"./packages/portal/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},portal:function(){return portal}});var _portal$parameters,_portal$parameters2,_portal$parameters2$d,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@alfalab/icons-glyph/StarMIcon.js"),_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/button/modern/index.js"),_alfalab_core_components_space__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/space/modern/index.js"),_alfalab_core_components_portal__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/portal/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Portal",component:_alfalab_core_components_portal__WEBPACK_IMPORTED_MODULE_4__.Portal,id:"Portal"},portal={name:"Portal",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_React$useState,2),show=_React$useState2[0],setShow=_React$useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_alfalab_core_components_space__WEBPACK_IMPORTED_MODULE_3__.Space,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:function(){return setShow(!show)},children:show?"Unmount children":"Mount children"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:show&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_core_components_portal__WEBPACK_IMPORTED_MODULE_4__.Portal,{getPortalContainer:function getPortalContainer(){return document.getElementById("portal-container")},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_alfalab_icons_glyph_StarMIcon__WEBPACK_IMPORTED_MODULE_1__.StarMIcon,{})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:"Контейнер для контента портала"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{id:"portal-container",style:{display:"flex",alignItems:"center",justifyContent:"center",width:240,height:60,border:"1px solid var(--color-light-neutral-300)",padding:"var(--gap-16)"}})]})}};__webpack_exports__.default=meta,portal.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},portal.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_portal$parameters=portal.parameters)||void 0===_portal$parameters?void 0:_portal$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'Portal',\n  render: () => {\n    const [show, setShow] = React.useState(false);\n    const handleClick = () => setShow(!show);\n    const styles = {\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center',\n      width: 240,\n      height: 60,\n      border: '1px solid var(--color-light-neutral-300)',\n      padding: 'var(--gap-16)'\n    };\n    return <Space>\n                <Button onClick={handleClick}>\n                    {show ? 'Unmount children' : 'Mount children'}\n                </Button>\n                <div>\n                    {show && <Portal getPortalContainer={() => document.getElementById('portal-container')}>\n                            <StarMIcon />\n                        </Portal>}\n                </div>\n                <div>Контейнер для контента портала</div>\n                <div id='portal-container' style={styles} />\n            </Space>;\n  }\n}"},null===(_portal$parameters2=portal.parameters)||void 0===_portal$parameters2?void 0:null===(_portal$parameters2$d=_portal$parameters2.docs)||void 0===_portal$parameters2$d?void 0:_portal$parameters2$d.source)})});let __namedExportsOrder=["portal"]}}]);