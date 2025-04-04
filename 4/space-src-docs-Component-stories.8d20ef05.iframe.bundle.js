"use strict";(self.webpackChunk_balafla_core_components_repository=self.webpackChunk_balafla_core_components_repository||[]).push([[9815],{"./packages/space/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},space:function(){return space}});var _space$parameters,_space$parameters2,_space$parameters2$do,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_balafla_core_components_input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/input/modern/index.js"),_balafla_core_components_space__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/space/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),DIRECTIONS=["horizontal","vertical"],ALIGNES=["start","end","center"],SIZES=["s","m","l",8,72],meta={title:"Components/Space",component:_balafla_core_components_space__WEBPACK_IMPORTED_MODULE_3__.Space,id:"Space"},space={name:"Space",render:function render(){var stylesAddon={width:"80px",height:"80px",borderRadius:"8px",backgroundColor:"var(--color-light-neutral-translucent-200)"},stylesGap={display:"flex",justifyContent:"center",width:"28px",lineHeight:"24px",margin:"0 8px",borderRadius:"4px",backgroundColor:"var(--color-light-status-info)",color:"var(--color-light-text-primary-inverted)"},previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.Ph)("wrapperStyles"));return Object.keys(previewStyles).length>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:previewStyles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{display:"flex",alignItems:"center"},children:[1,2,3].map(function(item){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:stylesAddon}),3!==item&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:stylesGap,children:"24"})]})})})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_balafla_core_components_space__WEBPACK_IMPORTED_MODULE_3__.Space,{direction:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("direction",DIRECTIONS,"horizontal"),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",SIZES,"m"),align:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("align",ALIGNES,"start"),wrap:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("wrap",!1),divider:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("divider",""),fullWidth:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("fullWidth",!1),dataTestId:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("dataTestId","testIdSpace"),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_balafla_core_components_input__WEBPACK_IMPORTED_MODULE_2__.Input,{placeholder:"Над вишней в цвету"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_balafla_core_components_input__WEBPACK_IMPORTED_MODULE_2__.Input,{placeholder:"Спряталась за облака"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_balafla_core_components_input__WEBPACK_IMPORTED_MODULE_2__.Input,{placeholder:"Скромница луна."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_balafla_core_components_input__WEBPACK_IMPORTED_MODULE_2__.Input,{placeholder:"(с) Мацуо Басе"})]})}};__webpack_exports__.default=meta,space.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},space.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_space$parameters=space.parameters)||void 0===_space$parameters?void 0:_space$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'Space',\n  render: () => {\n    const stylesAddon = {\n      width: '80px',\n      height: '80px',\n      borderRadius: '8px',\n      backgroundColor: 'var(--color-light-neutral-translucent-200)'\n    };\n    const stylesGap = {\n      display: 'flex',\n      justifyContent: 'center',\n      width: '28px',\n      lineHeight: '24px',\n      margin: '0 8px',\n      borderRadius: '4px',\n      backgroundColor: 'var(--color-light-status-info)',\n      color: 'var(--color-light-text-primary-inverted)'\n    };\n    const stylesWrapper = {\n      display: 'flex',\n      alignItems: 'center'\n    };\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    const isPreview = Object.keys(previewStyles).length > 0;\n    return isPreview ? <div style={previewStyles}>\n                <div style={stylesWrapper}>\n                    {[1, 2, 3].map(item => <>\n                            <div style={stylesAddon} />\n                            {item !== 3 && <div style={stylesGap}>24</div>}\n                        </>)}\n                </div>\n            </div> : <Space direction={select('direction', DIRECTIONS, 'horizontal')} size={select('size', SIZES, 'm')} align={select('align', ALIGNES, 'start')} wrap={boolean('wrap', false)} divider={text('divider', '')} fullWidth={boolean('fullWidth', false)} dataTestId={text('dataTestId', 'testIdSpace')}>\n                <Input placeholder='Над вишней в цвету' />\n                <Input placeholder='Спряталась за облака' />\n                <Input placeholder='Скромница луна.' />\n                <Input placeholder='(с) Мацуо Басе' />\n            </Space>;\n  }\n}"},null===(_space$parameters2=space.parameters)||void 0===_space$parameters2?void 0:null===(_space$parameters2$do=_space$parameters2.docs)||void 0===_space$parameters2$do?void 0:_space$parameters2$do.source)})});let __namedExportsOrder=["space"]},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}}}]);