"use strict";(self.webpackChunk_balafla_core_components_repository=self.webpackChunk_balafla_core_components_repository||[]).push([[5263,7807],{"./packages/accordion/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},accordion:function(){return accordion}});var _accordion$parameters,_accordion$parameters2,_accordion$parameters3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),_balafla_core_components_accordion__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/accordion/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Accordion",component:_balafla_core_components_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion,id:"Accordion"},accordion={name:"Accordion",render:function render(){var previewStyles=(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_2__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_2__.Ph)("wrapperStyles")),isPreview=Object.keys(previewStyles).length>0,header=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("header",!0)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"accordion-header"}):(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("headerText","Зачем нужен аккордион?"),control=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("control",!0)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"accordion-control"}):void 0,children=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("children",!0)?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"accordion-body"}):(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("childrenText","Используется для создания интерактивных списков, которые можно разворачивать и сворачивать для отображения дополнительной информации."),controlPosition=(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("controlPosition",["start","end"],"end");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:previewStyles,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_balafla_core_components_accordion__WEBPACK_IMPORTED_MODULE_3__.Accordion,{header:header,controlPosition:controlPosition,control:control,expanded:isPreview||void 0,className:"accordion-wrapper",bodyClassName:"accordion-container",children:children})})}};__webpack_exports__.default=meta,accordion.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},accordion.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_accordion$parameters=accordion.parameters)||void 0===_accordion$parameters?void 0:_accordion$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'Accordion',\n  render: () => {\n    const previewStyles = stylesStringToObj(getQueryParam('wrapperStyles'));\n    const isPreview = Object.keys(previewStyles).length > 0;\n    const header = boolean('header', true) ? <div className='accordion-header' /> : text('headerText', 'Зачем нужен аккордион?');\n    const control = boolean('control', true) ? <div className='accordion-control' /> : undefined;\n    const children = boolean('children', true) ? <div className='accordion-body' /> : text('childrenText', 'Используется для создания интерактивных списков, ' + 'которые можно разворачивать и сворачивать для отображения дополнительной информации.');\n    const controlPosition = select('controlPosition', ['start', 'end'], 'end');\n    return <div style={previewStyles}>\n                <Accordion header={header} controlPosition={controlPosition} control={control} expanded={isPreview || undefined} className='accordion-wrapper' bodyClassName='accordion-container'>\n                    {children}\n                </Accordion>\n            </div>;\n  }\n}"},null===(_accordion$parameters2=accordion.parameters)||void 0===_accordion$parameters2?void 0:null===(_accordion$parameters3=_accordion$parameters2.docs)||void 0===_accordion$parameters3?void 0:_accordion$parameters3.source)})});let __namedExportsOrder=["accordion"]},"./packages/accordion/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/accordion/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"анатомия",children:"Анатомия"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компонент состоит из только 3 слотов: Control - элемента управления, Header - основной элемент для отображения содержимого и Body - содержимое.\nСлоты могут принимать в себя как готовые компоненты, так и кастомную вёрстку."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"    <Accordion\n        className='accordion-wrapper'\n        header={<div className='accordion-header' />}\n        control={<div className='accordion-control' />}\n    >\n        <div className='accordion-body' />\n    </Accordion>\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"контрол",children:"Контрол"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Control может быть в виде кнопки, иконки или любым другим интерактивным элементом, который инициирует раскрытие или сворачивание секции.\nПо умолчанию Control размещается сбоку справа от Header, но может располагаться и слева, что больше напоминает дерево."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"\nrender(() => {\n    const [controlPosition, setControlPosition] = React.useState('end');\n\n    const handleControlPositionChange = React.useCallback((_, payload) => {\n        setControlPosition(payload.value);\n    }, []);\n\n    return <Space>\n        <Accordion\n            className='accordion-wrapper'\n            header={<div className='accordion-header' />}\n            controlPosition={controlPosition}\n        >\n            <div className='accordion-body' />\n        </Accordion>\n\n        <Accordion\n            className='accordion-wrapper'\n            header={<div className='accordion-header' />}\n            controlPosition={controlPosition}\n        >\n            <div className='accordion-body' />\n        </Accordion>\n\n        <Accordion\n            className='accordion-wrapper'\n            header={<div className='accordion-header' />}\n            controlPosition={controlPosition}\n        >\n            <div className='accordion-body' />\n        </Accordion>\n\n        <RadioGroup\n            label='Расположение контрола'\n            direction='vertical'\n            name='radioGroup'\n            onChange={handleControlPositionChange}\n            value={controlPosition}\n        >\n            <Radio size='m' label='Справа' value='end' />\n            <Radio size='m' label='Слева' value='start' />\n        </RadioGroup>\n    </Space>\n})\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"В качестве пресетов в компонент заложены текстовые контейнеры, как самый распространённый вариант использования."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"\nrender(() => {\n    return <Space>\n        <Accordion\n            header='Зачем нужен аккордион?'\n            className='accordion-container'\n        >\n            Используется для создания интерактивных списков,\n            которые можно разворачивать и сворачивать для\n            отображения дополнительной информации.\n        </Accordion>\n\n        <Accordion\n            header='Когда лучше использовать аккордион?'\n            className='accordion-container'\n        >\n            Подходит для организации сложной информации в ограниченном пространстве,\n            представления большого объема данных, иерархической структуры с\n            возможностью скрытия и открытия разделов,\n            удовлетворения потребностей пользователей в доступе к информации\n            по запросу и просмотра нескольких связанных разделов контента.\n        </Accordion>\n    </Space>\n})\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/accordion/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Accordion } from '@balafla/core-components/accordion';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:src.Accordion})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Accordion",children:"Используется для отображения скрытого контента по клику."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# @alfalab/core-components-accordion\n\n## 1.2.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.12.0\n\n## 1.2.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.11.4\n\n## 1.2.7\n\n### Patch Changes\n\n<sup><time>09.01.2025</time></sup>\n\n### [#1461](https://github.com/core-ds/core-components/pull/1461)\n\n-   Обновление зависимостей\n\n-   Обновлены зависимости\n    -   typography@4.11.3\n\n## 1.2.6\n\n### Patch Changes\n\n<sup><time>26.12.2024</time></sup>\n\n### [#1502](https://github.com/core-ds/core-components/pull/1502)\n\n-   Апдейт версий пакетов (в них починена сборка esm-версии): @alfalab/data, @alfalab/hooks, @alfalab/utils\n\n-   Обновлены зависимости\n    -   typography@4.11.2\n\n## 1.2.5\n\n### Patch Changes\n\n<sup><time>13.12.2024</time></sup>\n\n### [#1478](https://github.com/core-ds/core-components/pull/1478)\n\n-   Вендор classnames обновлён 2.3.1 -> 2.5.1\n\n<sup><time>13.12.2024</time></sup>\n\n### [#1473](https://github.com/core-ds/core-components/pull/1473)\n\n-   Переход на атомарные импорты Typography.\\[Name] -> \\[Name]\n\n-   Обновлены зависимости\n    -   typography@4.11.1\n\n## 1.2.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.11.0\n\n## 1.2.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.10.3\n\n## 1.2.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.10.2\n\n## 1.2.1\n\n### Patch Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1370](https://github.com/core-ds/core-components/pull/1370)\n\n-   Заменили числовые значения на переменные отступов\n\n-   Обновлены зависимости\n    -   typography@4.10.1\n\n## 1.2.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.10.0\n\n## 1.1.4\n\n### Patch Changes\n\n<sup><time>04.09.2024</time></sup>\n\n### [#1353](https://github.com/core-ds/core-components/pull/1353)\n\n-   Обновлены наименования переменных отступов\n\n-   Обновлены зависимости\n    -   typography@4.9.0\n\n## 1.1.3\n\n### Patch Changes\n\n<sup><time>23.08.2024</time></sup>\n\n### [#1344](https://github.com/core-ds/core-components/pull/1344)\n\n-   Исправление SSR\n\n## 1.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.8.0\n\n## 1.1.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.7.0\n\n## 1.1.0\n\n### Minor Changes\n\n<sup><time>04.07.2024</time></sup>\n\n### [#1274](https://github.com/core-ds/core-components/pull/1274)\n\n-   Добавлен проп 'bodyContentClassName'\n\n### Patch Changes\n\n<sup><time>04.07.2024</time></sup>\n\n### [#1274](https://github.com/core-ds/core-components/pull/1274)\n\n-   Исправлен расчет высоты контента\n\n## 1.0.2\n\n### Patch Changes\n\n<sup><time>27.06.2024</time></sup>\n\n### [#1250](https://github.com/core-ds/core-components/pull/1250)\n\n-   Изменен элемент наблюдения ResizeObserver с contentRef.current на contentCaseRef.current, теперь контейнер контента динамически изменяет высоту при добавлении контента\n\n-   Обновлены зависимости\n    -   typography@4.6.0\n\n## 1.0.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   typography@4.5.1\n\n## 1.0.0\n\n### Major Changes\n\n<sup><time>19.04.2024</time></sup>\n\n### [#1164](https://github.com/core-ds/core-components/pull/1164)\n\n-   Добавлен новый компонент Accordion\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")},"./packages/accordion/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Accordion:function(){return Accordion}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/typography/modern/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ChevronDownMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ChevronDownMIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DefaultControlIcon=function(_ref){var expanded=_ref.expanded,startPosition=_ref.startPosition;return(0,jsx_runtime.jsx)(ChevronDownMIcon.ChevronDownMIcon,{className:classnames_default()("icon_jLc6K",(0,defineProperty.Z)((0,defineProperty.Z)({},"expanded_AJ_IE",expanded),"startPosition__ZtrE",startPosition))})};try{DefaultControlIcon.displayName="DefaultControlIcon",DefaultControlIcon.__docgenInfo={description:"",displayName:"DefaultControlIcon",props:{expanded:{defaultValue:null,description:"",name:"expanded",required:!0,type:{name:"boolean"}},startPosition:{defaultValue:null,description:"",name:"startPosition",required:!0,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/accordion/src/components/default-control-icon/Component.tsx#DefaultControlIcon"]={docgenInfo:DefaultControlIcon.__docgenInfo,name:"DefaultControlIcon",path:"packages/accordion/src/components/default-control-icon/Component.tsx#DefaultControlIcon"})}catch(__react_docgen_typescript_loader_error){}var shared_modern=__webpack_require__("./dist/shared/modern/index.js"),resize_observer=__webpack_require__("./node_modules/@juggle/resize-observer/lib/exports/resize-observer.js"),useMeasureHeight=function(){var _useState=(0,react.useState)(null),_useState2=(0,slicedToArray.Z)(_useState,2),element=_useState2[0],setElement=_useState2[1],_useState3=(0,react.useState)(0),_useState4=(0,slicedToArray.Z)(_useState3,2),measurement=_useState4[0],setMeasurement=_useState4[1],resizeObserver=(0,react.useRef)(null);if((0,shared_modern.isClient)()&&!resizeObserver.current){var _ResizeObserver=window.ResizeObserver||resize_observer.do;resizeObserver.current=new _ResizeObserver(function(_ref){setMeasurement((0,slicedToArray.Z)(_ref,1)[0].target.offsetHeight)})}return(0,react.useEffect)(function(){var _resizeObserver$curre;return shared_modern.fnUtils.isNil(element)?shared_modern.fnUtils.noop:(null===(_resizeObserver$curre=resizeObserver.current)||void 0===_resizeObserver$curre||_resizeObserver$curre.observe(element),function(){var _resizeObserver$curre2;null===(_resizeObserver$curre2=resizeObserver.current)||void 0===_resizeObserver$curre2||_resizeObserver$curre2.unobserve(element)})},[element]),(0,react.useEffect)(function(){var _resizeObserver$curre3;return null===(_resizeObserver$curre3=resizeObserver.current)||void 0===_resizeObserver$curre3?void 0:_resizeObserver$curre3.disconnect()},[]),[measurement,setElement]},_excluded=["expanded","defaultExpanded","header","control","controlPosition","children","className","containerClassName","headerClassName","controlClassName","bodyClassName","onExpandedChange","dataTestId","bodyContentClassName"],Accordion=function(_ref){var expanded=_ref.expanded,_ref$defaultExpanded=_ref.defaultExpanded,header=_ref.header,control=_ref.control,_ref$controlPosition=_ref.controlPosition,children=_ref.children,className=_ref.className,containerClassName=_ref.containerClassName,headerClassName=_ref.headerClassName,controlClassName=_ref.controlClassName,bodyClassName=_ref.bodyClassName,onExpandedChange=_ref.onExpandedChange,dataTestId=_ref.dataTestId,bodyContentClassName=_ref.bodyContentClassName,rest=(0,objectWithoutProperties.Z)(_ref,_excluded),uncontrolled=void 0===expanded,_useState=(0,react.useState)(uncontrolled?void 0!==_ref$defaultExpanded&&_ref$defaultExpanded:expanded),_useState2=(0,slicedToArray.Z)(_useState,2),expandedState=_useState2[0],setExpanded=_useState2[1],isExpanded=uncontrolled?expandedState:expanded,isStartPosition="start"===(void 0===_ref$controlPosition?"end":_ref$controlPosition),_useMeasureHeight=useMeasureHeight(),_useMeasureHeight2=(0,slicedToArray.Z)(_useMeasureHeight,2),contentHeight=_useMeasureHeight2[0],contentRef=_useMeasureHeight2[1],controlContent=void 0===control?(0,jsx_runtime.jsx)(DefaultControlIcon,{expanded:isExpanded,startPosition:isStartPosition}):control,headerContent="string"==typeof header?(0,jsx_runtime.jsx)(modern.Text,{view:"primary-large",weight:"medium",children:header}):header,bodyContent="string"==typeof children?(0,jsx_runtime.jsx)(modern.Text,{view:"primary-medium",children:children}):children,handleExpandedChange=(0,react.useCallback)(function(){uncontrolled&&setExpanded(!isExpanded),null==onExpandedChange||onExpandedChange(!isExpanded)},[isExpanded,onExpandedChange,uncontrolled]);return(0,jsx_runtime.jsxs)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({},rest),{},{"data-test-id":dataTestId,className:classnames_default()("accordion_gnjrE",className),children:[(0,jsx_runtime.jsxs)("div",{role:"button",tabIndex:0,"aria-expanded":isExpanded,onClick:handleExpandedChange,onKeyDown:function(event){"Enter"===event.key&&handleExpandedChange()},className:classnames_default()("container_fMvzm",containerClassName),children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()("header_MWzBN",headerClassName,(0,defineProperty.Z)({},"endPosition__DgQ1",isStartPosition)),children:headerContent}),(0,jsx_runtime.jsx)("div",{className:classnames_default()("control_M_my5",controlClassName,(0,defineProperty.Z)({},"startPosition_t7fm3",isStartPosition)),children:controlContent})]}),(0,jsx_runtime.jsx)("div",{className:classnames_default()("body_crIY9",bodyClassName,(0,defineProperty.Z)({},"expandedBody_H1nRS",isExpanded)),style:{height:isExpanded?contentHeight:0},children:(0,jsx_runtime.jsx)("div",{className:classnames_default()("bodyContent_k92sY",bodyContentClassName),ref:contentRef,children:bodyContent})})]}))};try{Accordion.displayName="Accordion",Accordion.__docgenInfo={description:"",displayName:"Accordion",props:{expanded:{defaultValue:null,description:"Состояние компонента",name:"expanded",required:!1,type:{name:"boolean"}},header:{defaultValue:null,description:"Элемент заголовка",name:"header",required:!0,type:{name:"ReactNode"}},control:{defaultValue:null,description:"Слот для элемента управления",name:"control",required:!1,type:{name:"ReactNode"}},controlPosition:{defaultValue:{value:"end"},description:"Указывает компоненту - где будет размещен control",name:"controlPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},defaultExpanded:{defaultValue:{value:"false"},description:"Начальное состояние uncontrolled компонента",name:"defaultExpanded",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Основной элемент для отображения содержимого",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Дополнительный класс обертки",name:"className",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"Дополнительный класс для контейнера с заголовком",name:"containerClassName",required:!1,type:{name:"string"}},headerClassName:{defaultValue:null,description:"Дополнительный класс для header",name:"headerClassName",required:!1,type:{name:"string"}},controlClassName:{defaultValue:null,description:"Дополнительный класс для control",name:"controlClassName",required:!1,type:{name:"string"}},bodyClassName:{defaultValue:null,description:"Дополнительный класс для body",name:"bodyClassName",required:!1,type:{name:"string"}},bodyContentClassName:{defaultValue:null,description:"Дополнительный класс для body content",name:"bodyContentClassName",required:!1,type:{name:"string"}},onExpandedChange:{defaultValue:null,description:"Обработчик смены состояний `expanded`",name:"onExpandedChange",required:!1,type:{name:"(expanded: boolean) => void"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/accordion/src/Component.tsx#Accordion"]={docgenInfo:Accordion.__docgenInfo,name:"Accordion",path:"packages/accordion/src/Component.tsx#Accordion"})}catch(__react_docgen_typescript_loader_error){}},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}}}]);