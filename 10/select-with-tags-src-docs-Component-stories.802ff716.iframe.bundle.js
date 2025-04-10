"use strict";(self.webpackChunk_balafla_core_components_repository=self.webpackChunk_balafla_core_components_repository||[]).push([[5592],{"./packages/select-with-tags/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},select_with_tags:function(){return select_with_tags},select_with_tags_desktop:function(){return select_with_tags_desktop},select_with_tags_mobile:function(){return select_with_tags_mobile}});var _select_with_tags$par,_select_with_tags$par2,_select_with_tags$par3,_select_with_tags_des,_select_with_tags_des2,_select_with_tags_des3,_select_with_tags_mob,_select_with_tags_mob2,_select_with_tags_mob3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_utils__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@alfalab/utils/dist/esm/pluralize/util.js"),_balafla_core_components_select_with_tags__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/select-with-tags/modern/index.js"),_balafla_core_components_select_with_tags_desktop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/select-with-tags/modern/desktop/index.js"),_balafla_core_components_select_with_tags_mobile__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/select-with-tags/modern/mobile/index.js"),_balafla_core_components_select_shared__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/select/modern/shared/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/SelectWithTags",component:_balafla_core_components_select_with_tags__WEBPACK_IMPORTED_MODULE_2__.SelectWithTags,id:"SelectWithTags"},options=[{key:"1",content:"H",value:"H"},{key:"2",content:"Li",value:"Li"},{key:"3",content:"Na",value:"Na"},{key:"4",content:"Curium",value:"Curium"},{key:"5",content:"Berkelium",value:"Berkelium"},{key:"6",content:"Californium",value:"Californium"},{key:"7",content:"Einsteinium",value:"Einsteinium"},{key:"8",content:"Fermium",value:"Fermium"},{key:"9",content:"Mendelevium",value:"Mendelevium"},{key:"10",content:"Nobelium",value:"Nobelium"},{key:"11",content:"Lawrencium",value:"Lawrencium"},{key:"12",content:"Rutherfordium",value:"Rutherfordium"},{key:"13",content:"Dubnium",value:"Dubnium"},{key:"14",content:"Seaborgium",value:"Seaborgium"},{key:"15",content:"Bohrium",value:"Bohrium"}],renderComponent=function(){var Component=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_balafla_core_components_select_with_tags__WEBPACK_IMPORTED_MODULE_2__.SelectWithTags,_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(""),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__.Z)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1],_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),_React$useState4=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_7__.Z)(_React$useState3,2),selected=_React$useState4[0],setSelected=_React$useState4[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div",{style:{width:"400px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Component,{collapseTagList:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("collapseTagList",!0),moveInputToNewLine:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("moveInputToNewLine",!0),options:options,block:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("block",!0),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",[48,56,64,72],72),disabled:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),error:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),hint:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("hint",""),Arrow:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("Arrow",!1)?_balafla_core_components_select_shared__WEBPACK_IMPORTED_MODULE_5__.Arrow:void 0,circularNavigation:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("circularNavigation",!1),placeholder:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("placeholder","Элемент"),label:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("label",""),autocomplete:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("autocomplete",!0),onInput:function(event){setValue(event.target.value)},transformCollapsedTagText:function(count){return"+".concat(count," ").concat((0,_alfalab_utils__WEBPACK_IMPORTED_MODULE_8__._)(count,"элемент","элемента","элементов"))},value:value,onChange:function(_ref){setSelected(_ref.selectedMultiple)},selected:selected})})},select_with_tags={name:"SelectWithTags",render:function render(){return renderComponent()}},select_with_tags_desktop={name:"SelectWithTagsDesktop",render:function render(){return renderComponent(_balafla_core_components_select_with_tags_desktop__WEBPACK_IMPORTED_MODULE_3__.SelectWithTagsDesktop)}},select_with_tags_mobile={name:"SelectWithTagsMobile",render:function render(){return renderComponent(_balafla_core_components_select_with_tags_mobile__WEBPACK_IMPORTED_MODULE_4__.SelectWithTagsMobile)}};__webpack_exports__.default=meta,select_with_tags.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)({},select_with_tags.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)({},null===(_select_with_tags$par=select_with_tags.parameters)||void 0===_select_with_tags$par?void 0:_select_with_tags$par.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)({originalSource:"{\n  name: 'SelectWithTags',\n  render: () => renderComponent()\n}"},null===(_select_with_tags$par2=select_with_tags.parameters)||void 0===_select_with_tags$par2?void 0:null===(_select_with_tags$par3=_select_with_tags$par2.docs)||void 0===_select_with_tags$par3?void 0:_select_with_tags$par3.source)})}),select_with_tags_desktop.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)({},select_with_tags_desktop.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)({},null===(_select_with_tags_des=select_with_tags_desktop.parameters)||void 0===_select_with_tags_des?void 0:_select_with_tags_des.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)({originalSource:"{\n  name: 'SelectWithTagsDesktop',\n  render: () => renderComponent(SelectWithTagsDesktop)\n}"},null===(_select_with_tags_des2=select_with_tags_desktop.parameters)||void 0===_select_with_tags_des2?void 0:null===(_select_with_tags_des3=_select_with_tags_des2.docs)||void 0===_select_with_tags_des3?void 0:_select_with_tags_des3.source)})}),select_with_tags_mobile.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)({},select_with_tags_mobile.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)({},null===(_select_with_tags_mob=select_with_tags_mobile.parameters)||void 0===_select_with_tags_mob?void 0:_select_with_tags_mob.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_9__.Z)({originalSource:"{\n  name: 'SelectWithTagsMobile',\n  render: () => renderComponent(SelectWithTagsMobile)\n}"},null===(_select_with_tags_mob2=select_with_tags_mobile.parameters)||void 0===_select_with_tags_mob2?void 0:null===(_select_with_tags_mob3=_select_with_tags_mob2.docs)||void 0===_select_with_tags_mob3?void 0:_select_with_tags_mob3.source)})});let __namedExportsOrder=["select_with_tags","select_with_tags_desktop","select_with_tags_mobile"]}}]);