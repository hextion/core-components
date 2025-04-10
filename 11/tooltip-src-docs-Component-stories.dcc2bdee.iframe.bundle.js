"use strict";(self.webpackChunk_balafla_core_components_repository=self.webpackChunk_balafla_core_components_repository||[]).push([[9117],{"./packages/tooltip/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},tooltip_desktop:function(){return tooltip_desktop},tooltip_responsive:function(){return tooltip_responsive}});var _tooltip_desktop$para,_tooltip_desktop$para2,_tooltip_desktop$para3,_tooltip_responsive$p,_tooltip_responsive$p2,_tooltip_responsive$p3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_balafla_core_components_tooltip_desktop__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/tooltip/modern/desktop/index.js"),_balafla_core_components_tooltip__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/tooltip/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Tooltip",component:_balafla_core_components_tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip,id:"Tooltip"},POSITION_OPTIONS=["top","top-start","top-end","bottom","bottom-start","bottom-end","right","right-start","right-end","left","left-start","left-end"],tooltip_desktop={name:"Tooltip",render:function render(){var openSelectValue=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("open",["true","false","undefined"],"undefined"),trigger=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("trigger",["hover","click"],"hover"),previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.Ph)("wrapperStyles")),isPreview=Object.keys(previewStyles).length>0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:isPreview?previewStyles:{width:"100%",height:"300px",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("style",{children:".popover > div{transform:scale(2)}  "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_balafla_core_components_tooltip_desktop__WEBPACK_IMPORTED_MODULE_2__.TooltipDesktop,{content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:isPreview?{display:"flex",justifyContent:"center",alignItems:"center"}:{width:"215px"},children:isPreview?"Подсказка":"Теперь вам можно снимать наличные в кассе и банкоматах, если ваш тариф это позволяет"}),popoverClassName:isPreview?"popover":void 0,open:"false"!==openSelectValue&&("true"===openSelectValue||void 0),trigger:trigger,offset:[(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("offset[0]",0),(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("offset[1]",16)],position:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("position",POSITION_OPTIONS,"left"),onCloseDelay:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("onCloseDelay (in ms)",300),onOpenDelay:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("onOpenDelay (in ms)",300),view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",["tooltip","hint"],"tooltip"),colors:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("colors",["default","inverted"],"default"),withTransition:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("withTransition",[!0,!1],!0),dataTestId:"test-id",children:isPreview?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{padding:"15px",border:"1px dashed rgba(0, 0, 0, 0.1)"},children:"hover"===trigger?"Hover me":"Click me"})})]})}},tooltip_responsive={name:"TooltipResponsive",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{width:"100%",height:"300px",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_balafla_core_components_tooltip__WEBPACK_IMPORTED_MODULE_3__.Tooltip,{open:open,content:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{children:"Tooltip Responsive"}),trigger:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("trigger",["hover","click"],"hover"),offset:[(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("offset[0]",0),(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("offset[1]",16)],position:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("position",POSITION_OPTIONS,"left"),onOpen:function(){setOpen(!0)},onClose:function(){setOpen(!1)},fallbackPlacements:["bottom","top"],actionButtonTitle:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("title","Хорошо"),view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",["tooltip","hint"],"tooltip"),hasCloser:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("hasCloser",[!0,!1],!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{padding:"15px",border:"1px dashed rgba(0, 0, 0, 0.1)"},children:"Подробнее"})})})}};__webpack_exports__.default=meta,tooltip_desktop.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},tooltip_desktop.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_tooltip_desktop$para=tooltip_desktop.parameters)||void 0===_tooltip_desktop$para?void 0:_tooltip_desktop$para.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'Tooltip',\n  render: () => {\n    const openSelectValue = select('open', ['true', 'false', 'undefined'], 'undefined');\n    const open = openSelectValue === 'false' ? false : openSelectValue === 'true' ? true : undefined;\n    const trigger = select('trigger', ['hover', 'click'], 'hover');\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    const isPreview = Object.keys(previewStyles).length > 0;\n    return <div style={isPreview ? previewStyles : {\n      width: '100%',\n      height: '300px',\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center'\n    }}>\n                <style>{`.popover > div{transform:scale(2)}  `}</style>\n                <TooltipDesktop content={<div style={isPreview ? {\n        display: 'flex',\n        justifyContent: 'center',\n        alignItems: 'center'\n      } : {\n        width: '215px'\n      }}>\n                            {isPreview ? 'Подсказка' : 'Теперь вам можно снимать наличные в кассе и банкоматах, если ваш тариф это позволяет'}\n                        </div>} popoverClassName={isPreview ? 'popover' : undefined} open={open} trigger={trigger} offset={[number('offset[0]', 0), number('offset[1]', 16)]} position={select('position', POSITION_OPTIONS, 'left')} onCloseDelay={number('onCloseDelay (in ms)', 300)} onOpenDelay={number('onOpenDelay (in ms)', 300)} view={select('view', ['tooltip', 'hint'], 'tooltip')} colors={select('colors', ['default', 'inverted'], 'default')} withTransition={select('withTransition', [true, false], true)} dataTestId='test-id'>\n                    {isPreview ? <div /> : <div style={{\n          padding: '15px',\n          border: '1px dashed rgba(0, 0, 0, 0.1)'\n        }}>\n                            {trigger === 'hover' ? 'Hover me' : 'Click me'}\n                        </div>}\n                </TooltipDesktop>\n            </div>;\n  }\n}"},null===(_tooltip_desktop$para2=tooltip_desktop.parameters)||void 0===_tooltip_desktop$para2?void 0:null===(_tooltip_desktop$para3=_tooltip_desktop$para2.docs)||void 0===_tooltip_desktop$para3?void 0:_tooltip_desktop$para3.source)})}),tooltip_responsive.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},tooltip_responsive.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_tooltip_responsive$p=tooltip_responsive.parameters)||void 0===_tooltip_responsive$p?void 0:_tooltip_responsive$p.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'TooltipResponsive',\n  render: () => {\n    const [open, setOpen] = React.useState(false);\n    const handleOpen = () => {\n      setOpen(true);\n    };\n    const handleClose = () => {\n      setOpen(false);\n    };\n    return <div style={{\n      width: '100%',\n      height: '300px',\n      display: 'flex',\n      justifyContent: 'center',\n      alignItems: 'center'\n    }}>\n                <Tooltip open={open} content={<div>Tooltip Responsive</div>} trigger={select('trigger', ['hover', 'click'], 'hover')} offset={[number('offset[0]', 0), number('offset[1]', 16)]} position={select('position', POSITION_OPTIONS, 'left')} onOpen={handleOpen} onClose={handleClose} fallbackPlacements={['bottom', 'top']} actionButtonTitle={text('title', 'Хорошо')} view={select('view', ['tooltip', 'hint'], 'tooltip')} hasCloser={select('hasCloser', [true, false], false)}>\n                    <div style={{\n          padding: '15px',\n          border: '1px dashed rgba(0, 0, 0, 0.1)'\n        }}>\n                        Подробнее\n                    </div>\n                </Tooltip>\n            </div>;\n  }\n}"},null===(_tooltip_responsive$p2=tooltip_responsive.parameters)||void 0===_tooltip_responsive$p2?void 0:null===(_tooltip_responsive$p3=_tooltip_responsive$p2.docs)||void 0===_tooltip_responsive$p3?void 0:_tooltip_responsive$p3.source)})});let __namedExportsOrder=["tooltip_desktop","tooltip_responsive"]},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}}}]);