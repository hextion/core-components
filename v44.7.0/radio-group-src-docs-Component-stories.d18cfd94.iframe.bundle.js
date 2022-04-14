"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[9206],{"./packages/radio-group/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},radio_group:function(){return radio_group},radio_group_desktop:function(){return radio_group_desktop},radio_group_mobile:function(){return radio_group_mobile}});var _radio_group$paramete,_radio_group$paramete2,_radio_group$paramete3,_radio_group_mobile$p,_radio_group_mobile$p2,_radio_group_mobile$p3,_radio_group_desktop$,_radio_group_desktop$2,_radio_group_desktop$3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_radio__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/radio/modern/index.js"),_alfalab_core_components_radio_group__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/radio-group/modern/index.js"),_alfalab_core_components_radio_group_mobile__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/radio-group/modern/mobile/index.js"),_alfalab_core_components_radio_group_desktop__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/radio-group/modern/desktop/index.js"),_alfalab_core_components_tag__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/tag/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/RadioGroup",component:_alfalab_core_components_radio_group__WEBPACK_IMPORTED_MODULE_3__.RadioGroup,id:"RadioGroup"},radio_group={name:"RadioGroup",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState("one"),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__.Z)(_React$useState,2),value=_React$useState2[0],setValue=_React$useState2[1],order={0:["1","one"],1:["2","two"],2:["3","three"]},direction=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("direction",["vertical","horizontal"],"vertical"),error=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),disabled=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),label=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("label","Заголовок группы"),hint=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("hint",""),size=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Radio.size",["s","m"],"s"),type=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("type",["radio","tag"],"radio"),wrapperStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.Ph)("wrapperStyles");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.FX)(wrapperStyles),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_radio_group__WEBPACK_IMPORTED_MODULE_3__.RadioGroup,{label:label,hint:hint,onChange:function(_,payload){setValue(payload.value)},direction:direction,error:error,disabled:disabled,type:type,value:value,children:Array.from({length:3}).map(function(_,index){return"radio"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_radio__WEBPACK_IMPORTED_MODULE_2__.Radio,{size:size,label:"Значение ".concat(order[index][0]),value:order[index][1]},"".concat(index,"-check")):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_tag__WEBPACK_IMPORTED_MODULE_6__.Tag,{size:size,value:order[index][1],children:"".concat(order[index][0]," вариант")},"".concat(index,"-tag"))})})})}},radio_group_mobile={name:"RadioGroupMobile",render:function render(){var _React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState("one"),_React$useState4=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__.Z)(_React$useState3,2),value=_React$useState4[0],setValue=_React$useState4[1],order={0:["1","one"],1:["2","two"],2:["3","three"]},direction=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("direction",["vertical","horizontal"],"vertical"),error=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),disabled=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),label=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("label","Заголовок группы"),hint=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("hint",""),size=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Radio.size",["s","m"],"s"),type=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("type",["radio","tag"],"radio"),wrapperStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.Ph)("wrapperStyles");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.FX)(wrapperStyles),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_radio_group_mobile__WEBPACK_IMPORTED_MODULE_4__.RadioGroupMobile,{label:label,hint:hint,onChange:function(_,payload){setValue(payload.value)},direction:direction,error:error,disabled:disabled,type:type,value:value,children:Array.from({length:3}).map(function(_,index){return"radio"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_radio__WEBPACK_IMPORTED_MODULE_2__.Radio,{size:size,label:"Значение ".concat(order[index][0]),value:order[index][1]},"".concat(index,"-check")):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_tag__WEBPACK_IMPORTED_MODULE_6__.Tag,{size:size,value:order[index][1],children:"".concat(order[index][0]," вариант")},"".concat(index,"-tag"))})})})}},radio_group_desktop={name:"RadioGroupDesktop",render:function render(){var _React$useState5=react__WEBPACK_IMPORTED_MODULE_0__.useState("one"),_React$useState6=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__.Z)(_React$useState5,2),value=_React$useState6[0],setValue=_React$useState6[1],order={0:["1","one"],1:["2","two"],2:["3","three"]},direction=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("direction",["vertical","horizontal"],"vertical"),error=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("error",""),disabled=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),label=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("label","Заголовок группы"),hint=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("hint",""),size=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("Radio.size",["s","m"],"s"),type=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("type",["radio","tag"],"radio"),wrapperStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.Ph)("wrapperStyles");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div",{style:(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_7__.FX)(wrapperStyles),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_radio_group_desktop__WEBPACK_IMPORTED_MODULE_5__.RadioGroupDesktop,{label:label,hint:hint,onChange:function(_,payload){setValue(payload.value)},direction:direction,error:error,disabled:disabled,type:type,value:value,children:Array.from({length:3}).map(function(_,index){return"radio"===type?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_radio__WEBPACK_IMPORTED_MODULE_2__.Radio,{size:size,label:"Значение ".concat(order[index][0]),value:order[index][1]},"".concat(index,"-check")):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_alfalab_core_components_tag__WEBPACK_IMPORTED_MODULE_6__.Tag,{size:size,value:order[index][1],children:"".concat(order[index][0]," вариант")},"".concat(index,"-tag"))})})})}};__webpack_exports__.default=meta,radio_group.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},radio_group.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},null===(_radio_group$paramete=radio_group.parameters)||void 0===_radio_group$paramete?void 0:_radio_group$paramete.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({originalSource:"{\n  name: 'RadioGroup',\n  render: () => {\n    const [value, setValue] = React.useState('one');\n    const onChange = (_, payload) => {\n      setValue(payload.value);\n    };\n    const order = {\n      0: ['1', 'one'],\n      1: ['2', 'two'],\n      2: ['3', 'three']\n    };\n    const direction = select('direction', ['vertical', 'horizontal'], 'vertical');\n    const error = text('error', '');\n    const disabled = boolean('disabled', false);\n    const label = text('label', 'Заголовок группы');\n    const hint = text('hint', '');\n    const size = select('Radio.size', ['s', 'm'], 's');\n    const type = select('type', ['radio', 'tag'], 'radio');\n    const wrapperStyles = getQueryParam('wrapperStyles');\n    return <div style={stylesStringToObj(wrapperStyles)}>\n                <RadioGroup label={label} hint={hint} onChange={onChange} direction={direction} error={error} disabled={disabled} type={type} value={value}>\n                    {Array.from({\n          length: 3\n        }).map((_, index) => type === 'radio' ? <Radio key={`${index}-check`} size={size} label={`Значение ${order[index][0]}`} value={order[index][1]} /> : <Tag key={`${index}-tag`} size={size} value={order[index][1]}>\n                                {`${order[index][0]} вариант`}\n                            </Tag>)}\n                </RadioGroup>\n            </div>;\n  }\n}"},null===(_radio_group$paramete2=radio_group.parameters)||void 0===_radio_group$paramete2?void 0:null===(_radio_group$paramete3=_radio_group$paramete2.docs)||void 0===_radio_group$paramete3?void 0:_radio_group$paramete3.source)})}),radio_group_mobile.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},radio_group_mobile.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},null===(_radio_group_mobile$p=radio_group_mobile.parameters)||void 0===_radio_group_mobile$p?void 0:_radio_group_mobile$p.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({originalSource:"{\n  name: 'RadioGroupMobile',\n  render: () => {\n    const [value, setValue] = React.useState('one');\n    const onChange = (_, payload) => {\n      setValue(payload.value);\n    };\n    const order = {\n      0: ['1', 'one'],\n      1: ['2', 'two'],\n      2: ['3', 'three']\n    };\n    const direction = select('direction', ['vertical', 'horizontal'], 'vertical');\n    const error = text('error', '');\n    const disabled = boolean('disabled', false);\n    const label = text('label', 'Заголовок группы');\n    const hint = text('hint', '');\n    const size = select('Radio.size', ['s', 'm'], 's');\n    const type = select('type', ['radio', 'tag'], 'radio');\n    const wrapperStyles = getQueryParam('wrapperStyles');\n    return <div style={stylesStringToObj(wrapperStyles)}>\n                <RadioGroupMobile label={label} hint={hint} onChange={onChange} direction={direction} error={error} disabled={disabled} type={type} value={value}>\n                    {Array.from({\n          length: 3\n        }).map((_, index) => type === 'radio' ? <Radio key={`${index}-check`} size={size} label={`Значение ${order[index][0]}`} value={order[index][1]} /> : <Tag key={`${index}-tag`} size={size} value={order[index][1]}>\n                                {`${order[index][0]} вариант`}\n                            </Tag>)}\n                </RadioGroupMobile>\n            </div>;\n  }\n}"},null===(_radio_group_mobile$p2=radio_group_mobile.parameters)||void 0===_radio_group_mobile$p2?void 0:null===(_radio_group_mobile$p3=_radio_group_mobile$p2.docs)||void 0===_radio_group_mobile$p3?void 0:_radio_group_mobile$p3.source)})}),radio_group_desktop.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},radio_group_desktop.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({},null===(_radio_group_desktop$=radio_group_desktop.parameters)||void 0===_radio_group_desktop$?void 0:_radio_group_desktop$.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__.Z)({originalSource:"{\n  name: 'RadioGroupDesktop',\n  render: () => {\n    const [value, setValue] = React.useState('one');\n    const onChange = (_, payload) => {\n      setValue(payload.value);\n    };\n    const order = {\n      0: ['1', 'one'],\n      1: ['2', 'two'],\n      2: ['3', 'three']\n    };\n    const direction = select('direction', ['vertical', 'horizontal'], 'vertical');\n    const error = text('error', '');\n    const disabled = boolean('disabled', false);\n    const label = text('label', 'Заголовок группы');\n    const hint = text('hint', '');\n    const size = select('Radio.size', ['s', 'm'], 's');\n    const type = select('type', ['radio', 'tag'], 'radio');\n    const wrapperStyles = getQueryParam('wrapperStyles');\n    return <div style={stylesStringToObj(wrapperStyles)}>\n                <RadioGroupDesktop label={label} hint={hint} onChange={onChange} direction={direction} error={error} disabled={disabled} type={type} value={value}>\n                    {Array.from({\n          length: 3\n        }).map((_, index) => type === 'radio' ? <Radio key={`${index}-check`} size={size} label={`Значение ${order[index][0]}`} value={order[index][1]} /> : <Tag key={`${index}-tag`} size={size} value={order[index][1]}>\n                                {`${order[index][0]} вариант`}\n                            </Tag>)}\n                </RadioGroupDesktop>\n            </div>;\n  }\n}"},null===(_radio_group_desktop$2=radio_group_desktop.parameters)||void 0===_radio_group_desktop$2?void 0:null===(_radio_group_desktop$3=_radio_group_desktop$2.docs)||void 0===_radio_group_desktop$3?void 0:_radio_group_desktop$3.source)})});let __namedExportsOrder=["radio_group","radio_group_mobile","radio_group_desktop"]},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")}}]);