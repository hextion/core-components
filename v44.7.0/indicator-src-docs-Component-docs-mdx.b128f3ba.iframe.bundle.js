"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[2,9485,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./packages/indicator/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},indicator:function(){return indicator}});var _indicator$parameters,_indicator$parameters2,_indicator$parameters3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_indicator__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/indicator/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Indicator",component:_alfalab_core_components_indicator__WEBPACK_IMPORTED_MODULE_2__.Indicator,id:"Indicator"},indicator={name:"Indicator",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{backgroundColor:"var(--color-light-bg-tertiary)",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_alfalab_core_components_indicator__WEBPACK_IMPORTED_MODULE_2__.Indicator,{value:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("value",1),height:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.number)("height",void 0),size:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("size",["xs","s","m","l"],"s"),color:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("color",""),backgroundColor:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("backgroundColor",""),border:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("border",!0),view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",[void 0,"red","grey","white"],void 0)})})}};__webpack_exports__.default=meta,indicator.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},indicator.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({},null===(_indicator$parameters=indicator.parameters)||void 0===_indicator$parameters?void 0:_indicator$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_4__.Z)({originalSource:"{\n  name: 'Indicator',\n  render: () => {\n    return <div style={{\n      backgroundColor: 'var(--color-light-bg-tertiary)',\n      padding: '8px',\n      position: 'absolute',\n      top: 0,\n      left: 0,\n      right: 0,\n      bottom: 0\n    }}>\n                <Indicator value={number('value', 1)} height={number('height', undefined)} size={select('size', ['xs', 's', 'm', 'l'], 's')} color={text('color', '')} backgroundColor={text('backgroundColor', '')} border={boolean('border', true)} view={select('view', [undefined, 'red', 'grey', 'white'], undefined)} />\n            </div>;\n  }\n}"},null===(_indicator$parameters2=indicator.parameters)||void 0===_indicator$parameters2?void 0:null===(_indicator$parameters3=_indicator$parameters2.docs)||void 0===_indicator$parameters3?void 0:_indicator$parameters3.source)})});let __namedExportsOrder=["indicator"]},"./packages/indicator/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/indicator/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"размер",children:"Размер"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компонент занимает заданную высоту, подстраивая под неё свои отступы и стиль текста."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    gap: '20px',\n    width: 260,\n    padding: 20,\n    backgroundColor: 'var(--color-light-bg-secondary)',\n    borderRadius: '12px',\n    boxSizing: 'border-box',\n    alignItems: 'center',\n};\n\nrender(\n    <Container>\n        <div style={styles}>\n            <Indicator height={48} value={1} view='red' />\n            <Indicator height={40} value={1} view='red' />\n            <Indicator height={24} value={1} view='red' />\n            <Indicator height={20} value={1} view='red' />\n            <Indicator view='red' />\n        </div>\n    </Container>\n);\n//MOBILE\nconst styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    gap: '20px',\n    width: 320,\n    padding: 20,\n    backgroundColor: 'var(--color-light-bg-secondary)',\n    borderRadius: '12px',\n    boxSizing: 'border-box',\n    alignItems: 'center',\n};\n\nrender(\n    <Container>\n        <div style={styles}>\n            <Indicator height={48} value={1} view='red' />\n            <Indicator height={40} value={1} view='red' />\n            <Indicator height={24} value={1} view='red' />\n            <Indicator height={20} value={1} view='red' />\n            <Indicator view='red' />\n        </div>\n    </Container>\n);\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"виды-индикатора",children:"Виды индикатора"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Индикатор имеет три преднастроенных вида."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\nconst [border, setBorder] = React.useState(false);\n\nconst styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    gap: '20px',\n    width: 169,\n    padding: 20,\n    backgroundColor: 'var(--color-light-bg-secondary)',\n    borderRadius: '12px',\n    boxSizing: 'border-box',\n    alignItems: 'center',\n};\n    return (\n        <Container>\n\n            <div style={styles}>\n                <Indicator height={24} value={1} view='red' border={border} />\n                <Indicator height={24} value={99} view='red' border={border} />\n                <Indicator height={24} value={100} view='red' border={border} />\n            </div>\n            <Gap size='xs' />\n            <div style={styles}>\n                <Indicator height={24} value={1} view='grey' border={border} />\n                <Indicator height={24} value={99} view='grey' border={border} />\n                <Indicator height={24} value={100} view='grey' border={border} />\n            </div>\n            <Gap size='xs' />\n            <div style={styles}>\n                <Indicator height={24} value={1} view='white' border={border} />\n                <Indicator height={24} value={99} view='white' border={border} />\n                <Indicator height={24} value={100} view='white' border={border} />\n            </div>\n            <Gap size='xl' />\n            <Switch\n                block={true}\n                checked={border}\n                label='Обводка'\n                onChange={() => setBorder(!border)}\n            />\n        </Container>\n    );\n});\n//MOBILE\nrender(() => {\nconst [border, setBorder] = React.useState(false);\n\nconst styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    gap: '20px',\n    width: 320,\n    padding: 20,\n    backgroundColor: 'var(--color-light-bg-secondary)',\n    borderRadius: '12px',\n    boxSizing: 'border-box',\n    alignItems: 'center',\n};\n\n    return (\n        <Container>\n\n            <div style={styles}>\n                <Indicator height={24} value={1} view='red' border={border} />\n                <Indicator height={24} value={99} view='red' border={border} />\n                <Indicator height={24} value={100} view='red' border={border} />\n            </div>\n            <Gap size='xs' />\n            <div style={styles}>\n                <Indicator height={24} value={1} view='grey' border={border} />\n                <Indicator height={24} value={99} view='grey' border={border} />\n                <Indicator height={24} value={100} view='grey' border={border} />\n            </div>\n            <Gap size='xs' />\n            <div style={styles}>\n                <Indicator height={24} value={1} view='white' border={border} />\n                <Indicator height={24} value={99} view='white' border={border} />\n                <Indicator height={24} value={100} view='white' border={border} />\n            </div>\n            <Gap size='l' />\n            <Switch\n                block={true}\n                checked={border}\n                label='Обводка'\n                onChange={() => setBorder(!border)}\n            />\n        </Container>\n    );\n});\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"кастомизация",children:"Кастомизация"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"При необходимости, можно задать индикатору кастомный фон, цвет текста, цвет и толщину обводки."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    gap: '20px',\n    width: 108,\n    padding: 20,\n    backgroundColor: 'var(--color-light-bg-secondary)',\n    borderRadius: '12px',\n    boxSizing: 'border-box',\n    alignItems: 'center',\n};\n\nrender(\n    <Container>\n        <div style={styles}>\n            <Indicator\n                value={1}\n                height={24}\n                backgroundColor='var(--color-light-graphic-attention)'\n                color='var(--color-light-graphic-negative)'\n                border={{\n                    width: 4,\n                    color: 'var(--color-light-graphic-negative)',\n                }}\n            />\n            <Indicator\n                value={1}\n                height={24}\n                backgroundColor='var(--color-light-graphic-primary-inverted)'\n                color='var(--color-light-graphic-link)'\n                border={{\n                    width: 2,\n                    color: 'var(--color-light-graphic-link)',\n                }}\n            />\n        </div>\n    </Container>\n);\n//MOBILE\nconst styles = {\n    display: 'flex',\n    justifyContent: 'center',\n    gap: '20px',\n    width: 320,\n    padding: 20,\n    backgroundColor: 'var(--color-light-bg-secondary)',\n    borderRadius: '12px',\n    boxSizing: 'border-box',\n    alignItems: 'center',\n};\n\nrender(\n    <Container>\n        <div style={styles}>\n            <Indicator\n                value={1}\n                height={24}\n                backgroundColor='var(--color-light-graphic-attention)'\n                color='var(--color-light-graphic-negative)'\n                border={{\n                    width: 4,\n                    color: 'var(--color-light-graphic-negative)',\n                }}\n            />\n            <Indicator\n                value={1}\n                height={24}\n                backgroundColor='var(--color-light-graphic-primary-inverted)'\n                color='var(--color-light-graphic-link)'\n                border={{\n                    width: 2,\n                    color: 'var(--color-light-graphic-link)',\n                }}\n            />\n        </div>\n    </Container>\n);\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/indicator/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Indicator } from '@alfalab/core-components/indicator';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.z})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Indicator",children:"Используется для визаулизации количества уведомлений, сообщений и т. д."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# @alfalab/core-components-indicator\n\n## 1.2.0\n\n### Minor Changes\n\n### [#973](https://github.com/core-ds/core-components/pull/973)\n\n-   В компонентах Badge,CircularProgressBar,Dropzone,FileUploadItem,HatchingProgressBar,Indicator,IconView,Status,ProgressBar и SteppedProgressBar цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n## 1.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 1.0.1\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 1.0.0\n\n### Major Changes\n\n### [#670](https://github.com/core-ds/core-components/pull/670)\n\n-   feat(indicator): Добавлен новый компонент Indicator\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/indicator/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{z:function(){return Indicator}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),index_module={component:"component_dps9B",red:"red_aXXvQ",border:"border_Cmy4J",white:"white_K_qSw",grey:"grey_rYijs",xs:"xs_EpLNh",s:"s_iVuD8",content:"content_KtxO2",m:"m_nROyp",l:"l_yhn3E",xl:"xl_K6gcc",xxl:"xxl_RO3RL"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["value","view","color","backgroundColor","height","border","className","dataTestId","style","size"];function getSize(height,value){return height?height<=8?"xs":height<=18?"s":height<=24?"m":height<=32?"l":height<=40?"xl":"xxl":void 0===value?"xs":"s"}function formatValue(rawValue){return"number"==typeof rawValue&&rawValue>=100?"99+":rawValue}function borderStyles(border,view){return border?"object"==typeof border?{outlineColor:border.color,outlineWidth:border.width,outlineStyle:border.style||"solid"}:view?{}:{outlineWidth:2,outlineColor:"var(--color-light-graphic-primary)",outlineStyle:"solid"}:{}}var Indicator=(0,react.forwardRef)(function(_ref,ref){var value=_ref.value,view=_ref.view,color=_ref.color,backgroundColor=_ref.backgroundColor,height=_ref.height,border=_ref.border,className=_ref.className,dataTestId=_ref.dataTestId,style=_ref.style,_ref$size=_ref.size,size=void 0===_ref$size?getSize(height,value):_ref$size,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),showContent=void 0!==value&&"xs"!==size;return(0,jsx_runtime.jsx)("div",(0,objectSpread2.Z)((0,objectSpread2.Z)({ref:ref,className:classnames_default()(index_module.component,index_module[size],view&&index_module[view],!0===border&&index_module.border,className),style:(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({},style),!view&&{backgroundColor:backgroundColor,color:color}),{},{height:height,minWidth:height},borderStyles(border,view)),"data-test-id":dataTestId},restProps),{},{children:showContent&&(0,jsx_runtime.jsx)("span",{className:index_module.content,children:formatValue(value)})}))});try{Indicator.displayName="Indicator",Indicator.__docgenInfo={description:"",displayName:"Indicator",props:{value:{defaultValue:null,description:"Значение индикатора",name:"value",required:!1,type:{name:"number | ReactElement<any, string | JSXElementConstructor<any>>"}},backgroundColor:{defaultValue:null,description:"Цвет заливки",name:"backgroundColor",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"Высота компонента, min = 16; max = 48",name:"height",required:!1,type:{name:"number"}},size:{defaultValue:{value:"getSize(height, value)"},description:"Размер компонента",name:"size",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xs"'}]}},border:{defaultValue:null,description:"Настройки обводки",name:"border",required:!1,type:{name:"boolean | Border"}},view:{defaultValue:null,description:"Пресет компонента",name:"view",required:!1,type:{name:"enum",value:[{value:'"red"'},{value:'"grey"'},{value:'"white"'}]}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/indicator/src/Component.tsx#Indicator"]={docgenInfo:Indicator.__docgenInfo,name:"Indicator",path:"packages/indicator/src/Component.tsx#Indicator"})}catch(__react_docgen_typescript_loader_error){}}}]);