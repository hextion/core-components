"use strict";(self.webpackChunk_balafla_core_components_repository=self.webpackChunk_balafla_core_components_repository||[]).push([[3430],{"./packages/bottom-sheet/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},bottom_sheet:function(){return bottom_sheet}});var _bottom_sheet$paramet,_bottom_sheet$paramet2,_bottom_sheet$paramet3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_balafla_core_components_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/button/modern/index.js"),_balafla_core_components_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/bottom-sheet/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/BottomSheet",component:_balafla_core_components_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.BottomSheet,id:"BottomSheet"},BACKGROUND=["primary","secondary",void 0],shortText="Пользуйтесь сразу: реквизиты виртуальной и пластиковой карты будут доступны уже через 60 секунд после после оформления.",longText=Array(10).fill(shortText).join("\n\n"),bottom_sheet={name:"BottomSheet",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1],handleClose=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function(){setOpen(!1)},[]),_React$useState3=react__WEBPACK_IMPORTED_MODULE_0__.useState("Пример текстового контента."),_React$useState4=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__.Z)(_React$useState3,2),textContent=_React$useState4[0],setTextContent=_React$useState4[1],renderActionButton=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("renderActionButton",!0),previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_4__.Ph)("wrapperStyles")),isPreview=Object.keys(previewStyles).length>0;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},previewStyles),{},{maxWidth:"none"}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("style",{children:".preview{transform:".concat(previewStyles.transform,";top: ").concat(previewStyles.top,";max-width:").concat(previewStyles.maxWidth,"  ")}),!isPreview&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_balafla_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:function onClick(){setTextContent(shortText),setOpen(!0)},style:{margin:"15px"},id:"button-1",children:"Открыть шторку"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_balafla_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:function onClick(){setTextContent(longText),setOpen(!0)},style:{margin:"15px"},id:"button-2",children:"Открыть шторку с длинным контентом"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_balafla_core_components_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.BottomSheet,{open:open||(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("open",!1),title:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("title","Тайтл"),modalClassName:isPreview?"preview":void 0,actionButton:renderActionButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_balafla_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{view:isPreview?"primary":"secondary",block:!0,size:"s",onClick:handleClose,children:isPreview?"Кнопка":"Понятно"}),onClose:handleClose,swipeable:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("swipeable",!0),titleAlign:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("titleAlign",["center","left"],"center"),trimTitle:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("trimTitle",!1),stickyHeader:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("stickyHeader",!1),hasCloser:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("hasCloser",!1),hasBacker:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("hasBacker",!1),leftAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("leftAddons",[!0,!1],!1),rightAddons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("rightAddons",[!0,!1],!1),stickyFooter:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("stickyFooter",!0),initialHeight:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("initialHeight",["default","full"],"default"),hideOverlay:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("hideOverlay",!1),hideHeader:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("hideHeader",!1),disableOverlayClick:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disableOverlayClick",!1),backgroundColor:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("backgroundColor",BACKGROUND,void 0),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{whiteSpace:"pre-wrap"},children:textContent})},textContent)]})}};__webpack_exports__.default=meta,bottom_sheet.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},bottom_sheet.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({},null===(_bottom_sheet$paramet=bottom_sheet.parameters)||void 0===_bottom_sheet$paramet?void 0:_bottom_sheet$paramet.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__.Z)({originalSource:"{\n  name: 'BottomSheet',\n  render: () => {\n    const [open, setOpen] = React.useState(false);\n    const handleClose = React.useCallback(() => {\n      setOpen(false);\n    }, []);\n    const [textContent, setTextContent] = React.useState('Пример текстового контента.');\n    const renderActionButton = boolean('renderActionButton', true);\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    const isPreview = Object.keys(previewStyles).length > 0;\n    return <div style={{\n      ...previewStyles,\n      maxWidth: 'none'\n    }}>\n                <style>\n                    {`.preview{transform:${previewStyles.transform};top: ${previewStyles.top};max-width:${previewStyles.maxWidth}  `}\n                </style>\n                {!isPreview && <>\n                        <Button onClick={() => {\n          setTextContent(shortText);\n          setOpen(true);\n        }} style={{\n          margin: '15px'\n        }} id='button-1'>\n                            Открыть шторку\n                        </Button>\n                        <Button onClick={() => {\n          setTextContent(longText);\n          setOpen(true);\n        }} style={{\n          margin: '15px'\n        }} id='button-2'>\n                            Открыть шторку с длинным контентом\n                        </Button>\n                    </>}\n                <BottomSheet key={textContent} open={open || boolean('open', false)} title={text('title', 'Тайтл')} modalClassName={isPreview ? 'preview' : undefined} actionButton={renderActionButton && <Button view={isPreview ? 'primary' : 'secondary'} block={true} size='s' onClick={handleClose}>\n                                {isPreview ? 'Кнопка' : 'Понятно'}\n                            </Button>} onClose={handleClose} swipeable={boolean('swipeable', true)} titleAlign={select('titleAlign', ['center', 'left'], 'center')} trimTitle={boolean('trimTitle', false)} stickyHeader={boolean('stickyHeader', false)} hasCloser={boolean('hasCloser', false)} hasBacker={boolean('hasBacker', false)} leftAddons={select('leftAddons', [true, false], false)} rightAddons={select('rightAddons', [true, false], false)} stickyFooter={boolean('stickyFooter', true)} initialHeight={select('initialHeight', ['default', 'full'], 'default')} hideOverlay={boolean('hideOverlay', false)} hideHeader={boolean('hideHeader', false)} disableOverlayClick={boolean('disableOverlayClick', false)} backgroundColor={select('backgroundColor', BACKGROUND, undefined)}>\n                    <div style={{\n          whiteSpace: 'pre-wrap'\n        }}>{textContent}</div>\n                </BottomSheet>\n            </div>;\n  }\n}"},null===(_bottom_sheet$paramet2=bottom_sheet.parameters)||void 0===_bottom_sheet$paramet2?void 0:null===(_bottom_sheet$paramet3=_bottom_sheet$paramet2.docs)||void 0===_bottom_sheet$paramet3?void 0:_bottom_sheet$paramet3.source)})});let __namedExportsOrder=["bottom_sheet"]},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}}}]);