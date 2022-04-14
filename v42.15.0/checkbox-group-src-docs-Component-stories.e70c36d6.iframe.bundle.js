"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[7377],{"./packages/checkbox-group/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},checkbox_group:function(){return checkbox_group},checkbox_group_desktop:function(){return checkbox_group_desktop},checkbox_group_mobile:function(){return checkbox_group_mobile}});var _checkbox_group$param,_checkbox_group$param2,_checkbox_group$param3,_checkbox_group_mobil,_checkbox_group_mobil2,_checkbox_group_mobil3,_checkbox_group_deskt,_checkbox_group_deskt2,_checkbox_group_deskt3,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/checkbox/modern/index.js"),_alfalab_core_components_checkbox_group__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/checkbox-group/modern/index.js"),_alfalab_core_components_checkbox_group_mobile__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/checkbox-group/modern/mobile/index.js"),_alfalab_core_components_checkbox_group_desktop__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/checkbox-group/modern/desktop/index.js"),_alfalab_core_components_tag__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/tag/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/CheckboxGroup",component:_alfalab_core_components_checkbox_group__WEBPACK_IMPORTED_MODULE_3__.CheckboxGroup,id:"CheckboxGroup"},checkbox_group={name:"CheckboxGroup",render:function render(){var wrapperStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.Ph)("wrapperStyles"),_React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState({one:!!wrapperStyles,two:!!wrapperStyles,three:!1}),_React$useState2=(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__.Z)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1],order={0:["1","one"],1:["2","two"],2:["3","three"]},direction=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("direction",["vertical","horizontal"],"vertical"),error=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),disabled=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),label=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("label","Заголовок группы"),hint=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("hint",""),size=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Checkbox.size",["s","m"],"s"),type=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("type",["checkbox","tag"],"checkbox");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.FX)(wrapperStyles),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_checkbox_group__WEBPACK_IMPORTED_MODULE_3__.CheckboxGroup,{label:label,hint:hint,onChange:function onChange(_,payload){setValue((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},value),{},(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__.Z)({},payload.name,payload.checked)))},direction:direction,error:error,disabled:disabled,type:type,children:Array.from({length:3}).map((function(_,index){return"checkbox"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox,{size:size,label:"Значение ".concat(order[index][0]),name:"".concat(order[index][1]),checked:value[order[index][1]]},"".concat(index,"-check")):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_tag__WEBPACK_IMPORTED_MODULE_6__.Tag,{size:size,name:"".concat(order[index][1]),checked:value[order[index][1]],children:"Значение ".concat(order[index][0])},"".concat(index,"-tag"))}))})})}},checkbox_group_mobile={name:"CheckboxGroupMobile",render:function render(){var wrapperStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.Ph)("wrapperStyles"),_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState({one:!!wrapperStyles,two:!!wrapperStyles,three:!1}),_React$useState4=(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__.Z)(_React$useState3,2),value=_React$useState4[0],setValue=_React$useState4[1],order={0:["1","one"],1:["2","two"],2:["3","three"]},direction=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("direction",["vertical","horizontal"],"vertical"),error=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),disabled=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),label=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("label","Заголовок группы"),hint=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("hint",""),size=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Checkbox.size",["s","m"],"s"),type=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("type",["checkbox","tag"],"checkbox");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.FX)(wrapperStyles),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_checkbox_group_mobile__WEBPACK_IMPORTED_MODULE_4__.CheckboxGroupMobile,{label:label,hint:hint,onChange:function onChange(_,payload){setValue((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},value),{},(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__.Z)({},payload.name,payload.checked)))},direction:direction,error:error,disabled:disabled,type:type,children:Array.from({length:3}).map((function(_,index){return"checkbox"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox,{size:size,label:"Значение ".concat(order[index][0]),name:"".concat(order[index][1]),checked:value[order[index][1]]},"".concat(index,"-check")):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_tag__WEBPACK_IMPORTED_MODULE_6__.Tag,{size:size,name:"".concat(order[index][1]),checked:value[order[index][1]],children:"Значение ".concat(order[index][0])},"".concat(index,"-tag"))}))})})}},checkbox_group_desktop={name:"CheckboxGroupDesktop",render:function render(){var wrapperStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.Ph)("wrapperStyles"),_React$useState5=react__WEBPACK_IMPORTED_MODULE_0__.useState({one:!!wrapperStyles,two:!!wrapperStyles,three:!1}),_React$useState6=(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__.Z)(_React$useState5,2),value=_React$useState6[0],setValue=_React$useState6[1],order={0:["1","one"],1:["2","two"],2:["3","three"]},direction=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("direction",["vertical","horizontal"],"vertical"),error=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),disabled=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),label=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("label","Заголовок группы"),hint=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("hint",""),size=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Checkbox.size",["s","m"],"s"),type=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("type",["checkbox","tag"],"checkbox");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.FX)(wrapperStyles),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_checkbox_group_desktop__WEBPACK_IMPORTED_MODULE_5__.CheckboxGroupDesktop,{label:label,hint:hint,onChange:function onChange(_,payload){setValue((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},value),{},(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_11__.Z)({},payload.name,payload.checked)))},direction:direction,error:error,disabled:disabled,type:type,children:Array.from({length:3}).map((function(_,index){return"checkbox"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_checkbox__WEBPACK_IMPORTED_MODULE_2__.Checkbox,{size:size,label:"Значение ".concat(order[index][0]),name:"".concat(order[index][1]),checked:value[order[index][1]]},"".concat(index,"-check")):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_tag__WEBPACK_IMPORTED_MODULE_6__.Tag,{size:size,name:"".concat(order[index][1]),checked:value[order[index][1]],children:"Значение ".concat(order[index][0])},"".concat(index,"-tag"))}))})})}};__webpack_exports__.default=meta,checkbox_group.parameters=(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},checkbox_group.parameters),{},{docs:(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},null===(_checkbox_group$param=checkbox_group.parameters)||void 0===_checkbox_group$param?void 0:_checkbox_group$param.docs),{},{source:(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({originalSource:"{\n  name: 'CheckboxGroup',\n  render: () => {\n    const wrapperStyles = getQueryParam('wrapperStyles');\n    const [value, setValue] = React.useState({\n      one: !!wrapperStyles,\n      two: !!wrapperStyles,\n      three: false\n    });\n    const onChange = (_, payload) => {\n      setValue({\n        ...value,\n        [payload.name]: payload.checked\n      });\n    };\n    const order = {\n      0: ['1', 'one'],\n      1: ['2', 'two'],\n      2: ['3', 'three']\n    };\n    const direction = select('direction', ['vertical', 'horizontal'], 'vertical');\n    const error = text('error', '');\n    const disabled = boolean('disabled', false);\n    const label = text('label', 'Заголовок группы');\n    const hint = text('hint', '');\n    const size = select('Checkbox.size', ['s', 'm'], 's');\n    const type = select('type', ['checkbox', 'tag'], 'checkbox');\n    return <div style={stylesStringToObj(wrapperStyles)}>\n                <CheckboxGroup label={label} hint={hint} onChange={onChange} direction={direction} error={error} disabled={disabled} type={type}>\n                    {Array.from({\n          length: 3\n        }).map((_, index) => type === 'checkbox' ? <Checkbox key={`${index}-check`} size={size} label={`Значение ${order[index][0]}`} name={`${order[index][1]}`} checked={value[order[index][1]]} /> : <Tag key={`${index}-tag`} size={size} name={`${order[index][1]}`} checked={value[order[index][1]]}>\n                                {`Значение ${order[index][0]}`}\n                            </Tag>)}\n                </CheckboxGroup>\n            </div>;\n  }\n}"},null===(_checkbox_group$param2=checkbox_group.parameters)||void 0===_checkbox_group$param2||null===(_checkbox_group$param3=_checkbox_group$param2.docs)||void 0===_checkbox_group$param3?void 0:_checkbox_group$param3.source)})}),checkbox_group_mobile.parameters=(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},checkbox_group_mobile.parameters),{},{docs:(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},null===(_checkbox_group_mobil=checkbox_group_mobile.parameters)||void 0===_checkbox_group_mobil?void 0:_checkbox_group_mobil.docs),{},{source:(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({originalSource:"{\n  name: 'CheckboxGroupMobile',\n  render: () => {\n    const wrapperStyles = getQueryParam('wrapperStyles');\n    const [value, setValue] = React.useState({\n      one: !!wrapperStyles,\n      two: !!wrapperStyles,\n      three: false\n    });\n    const onChange = (_, payload) => {\n      setValue({\n        ...value,\n        [payload.name]: payload.checked\n      });\n    };\n    const order = {\n      0: ['1', 'one'],\n      1: ['2', 'two'],\n      2: ['3', 'three']\n    };\n    const direction = select('direction', ['vertical', 'horizontal'], 'vertical');\n    const error = text('error', '');\n    const disabled = boolean('disabled', false);\n    const label = text('label', 'Заголовок группы');\n    const hint = text('hint', '');\n    const size = select('Checkbox.size', ['s', 'm'], 's');\n    const type = select('type', ['checkbox', 'tag'], 'checkbox');\n    return <div style={stylesStringToObj(wrapperStyles)}>\n                <CheckboxGroupMobile label={label} hint={hint} onChange={onChange} direction={direction} error={error} disabled={disabled} type={type}>\n                    {Array.from({\n          length: 3\n        }).map((_, index) => type === 'checkbox' ? <Checkbox key={`${index}-check`} size={size} label={`Значение ${order[index][0]}`} name={`${order[index][1]}`} checked={value[order[index][1]]} /> : <Tag key={`${index}-tag`} size={size} name={`${order[index][1]}`} checked={value[order[index][1]]}>\n                                {`Значение ${order[index][0]}`}\n                            </Tag>)}\n                </CheckboxGroupMobile>\n            </div>;\n  }\n}"},null===(_checkbox_group_mobil2=checkbox_group_mobile.parameters)||void 0===_checkbox_group_mobil2||null===(_checkbox_group_mobil3=_checkbox_group_mobil2.docs)||void 0===_checkbox_group_mobil3?void 0:_checkbox_group_mobil3.source)})}),checkbox_group_desktop.parameters=(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},checkbox_group_desktop.parameters),{},{docs:(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},null===(_checkbox_group_deskt=checkbox_group_desktop.parameters)||void 0===_checkbox_group_deskt?void 0:_checkbox_group_deskt.docs),{},{source:(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({originalSource:"{\n  name: 'CheckboxGroupDesktop',\n  render: () => {\n    const wrapperStyles = getQueryParam('wrapperStyles');\n    const [value, setValue] = React.useState({\n      one: !!wrapperStyles,\n      two: !!wrapperStyles,\n      three: false\n    });\n    const onChange = (_, payload) => {\n      setValue({\n        ...value,\n        [payload.name]: payload.checked\n      });\n    };\n    const order = {\n      0: ['1', 'one'],\n      1: ['2', 'two'],\n      2: ['3', 'three']\n    };\n    const direction = select('direction', ['vertical', 'horizontal'], 'vertical');\n    const error = text('error', '');\n    const disabled = boolean('disabled', false);\n    const label = text('label', 'Заголовок группы');\n    const hint = text('hint', '');\n    const size = select('Checkbox.size', ['s', 'm'], 's');\n    const type = select('type', ['checkbox', 'tag'], 'checkbox');\n    return <div style={stylesStringToObj(wrapperStyles)}>\n                <CheckboxGroupDesktop label={label} hint={hint} onChange={onChange} direction={direction} error={error} disabled={disabled} type={type}>\n                    {Array.from({\n          length: 3\n        }).map((_, index) => type === 'checkbox' ? <Checkbox key={`${index}-check`} size={size} label={`Значение ${order[index][0]}`} name={`${order[index][1]}`} checked={value[order[index][1]]} /> : <Tag key={`${index}-tag`} size={size} name={`${order[index][1]}`} checked={value[order[index][1]]}>\n                                {`Значение ${order[index][0]}`}\n                            </Tag>)}\n                </CheckboxGroupDesktop>\n            </div>;\n  }\n}"},null===(_checkbox_group_deskt2=checkbox_group_desktop.parameters)||void 0===_checkbox_group_deskt2||null===(_checkbox_group_deskt3=_checkbox_group_deskt2.docs)||void 0===_checkbox_group_deskt3?void 0:_checkbox_group_deskt3.source)})});var __namedExportsOrder=["checkbox_group","checkbox_group_mobile","checkbox_group_desktop"]},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function getQueryParam(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function parseKnobs(){return Object.entries(queryParams).reduce((function(acc,_ref){var _ref2=(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc}),{})};function parseValue(value){if(value){if(function isBoolean(){return["true","false"].includes(value)}())return"true"===value;if(function isNumeric(){return!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value))}())return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map((function(v){return v.trim()})),obj={};return properties.forEach((function(property){var _property$split$map=property.split(":").map((function(v){return v.trim()})),_property$split$map2=(0,_home_vladimir_projects_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val})),obj}function isJsonObj(str){try{return"object"==typeof JSON.parse(str)}catch(e){return!1}}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj?Object.keys(obj).map((function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map((function(v){return ks+encodeURIComponent(stringifyPrimitive(v))})).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))})).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);