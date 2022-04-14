"use strict";(self.webpackChunk_alfalab_core_components_repository=self.webpackChunk_alfalab_core_components_repository||[]).push([[8210,1341],{"./node_modules/@mdx-js/react/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MDXContext:function(){return MDXContext},MDXProvider:function(){return MDXProvider},useMDXComponents:function(){return useMDXComponents},withMDXComponents:function(){return withMDXComponents}});var react=__webpack_require__("./node_modules/react/index.js");let MDXContext=react.createContext({});function withMDXComponents(Component){return boundMDXComponent;function boundMDXComponent(props){let allComponents=useMDXComponents(props.components);return react.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){let contextComponents=react.useContext(MDXContext);return react.useMemo(()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components},[contextComponents,components])}let emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-18.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise((resolve,reject)=>{__webpack_require__.e(1341).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@mdx-js/react/index.js")).then(({MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXProvider,{components},react__WEBPACK_IMPORTED_MODULE_0__.createElement(TDocs,{context,docsParameter}))),element)).then(()=>resolve())})},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Ed:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ed},UG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.UG},h_:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.h_},oG:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oG}}),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js":function(module,__unused_webpack_exports,__webpack_require__){var mod,secondTarget,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__hasOwnProp=Object.prototype.hasOwnProperty,__copyProps=(to,from,except,desc)=>{if(from&&"object"==typeof from||"function"==typeof from)for(let key of __getOwnPropNames(from))__hasOwnProp.call(to,key)||key===except||__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},mdx_react_shim_exports={};module.exports=__copyProps(__defProp({},"__esModule",{value:!0}),mdx_react_shim_exports),mod=__webpack_require__("./node_modules/@mdx-js/react/index.js"),secondTarget=module.exports,__copyProps(mdx_react_shim_exports,mod,"default"),secondTarget&&__copyProps(secondTarget,mod,"default")},"./docs/theming.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},__page:function(){return __page},default:function(){return theming_stories}});var react=__webpack_require__("./node_modules/react/index.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),modern=__webpack_require__("./dist/typography/modern/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),radio_modern=__webpack_require__("./dist/radio/modern/index.js"),radio_group_modern=__webpack_require__("./dist/radio-group/modern/index.js"),space_modern=__webpack_require__("./dist/space/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Questions=function(_ref){var _ref$config=_ref.config,answers=_ref.answers,_ref$onChange=_ref.onChange,onChange=void 0===_ref$onChange?function(){}:_ref$onChange,handleChange=function(name,payload){onChange((0,objectSpread2.Z)((0,objectSpread2.Z)({},answers),{},(0,defineProperty.Z)({},name,null==payload?void 0:payload.value)),name)};return(0,jsx_runtime.jsx)(space_modern.Space,{children:(void 0===_ref$config?[]:_ref$config).map(function(question){return(0,jsx_runtime.jsx)(radio_group_modern.RadioGroup,{label:(0,jsx_runtime.jsx)(modern.Typography.Text,{weight:"bold",children:question.title}),direction:"horizontal",name:question.name,onChange:function onChange(_,payload){return handleChange(question.name,payload)},value:answers[question.name],children:question.variants.map(function(variant){return(0,react.createElement)(radio_modern.Radio,(0,objectSpread2.Z)((0,objectSpread2.Z)({},variant),{},{key:variant.value,align:"center"}))})},question.name)})})};try{Questions.displayName="Questions",Questions.__docgenInfo={description:"",displayName:"Questions",props:{config:{defaultValue:{value:"[]"},description:"",name:"config",required:!1,type:{name:"Question[]"}},answers:{defaultValue:null,description:"",name:"answers",required:!0,type:{name:"Answers"}},onChange:{defaultValue:{value:"() => {}"},description:"",name:"onChange",required:!1,type:{name:'(answers: Answers, question: "product" | "keepCssVars" | "darkMode" | "aruiScripts") => void'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/theming-wizard/questions/index.tsx#Questions"]={docgenInfo:Questions.__docgenInfo,name:"Questions",path:".storybook/theming-wizard/questions/index.tsx#Questions"})}catch(__react_docgen_typescript_loader_error){}var list_modern=__webpack_require__("./dist/list/modern/index.js"),esm=__webpack_require__("./node_modules/storybook-addon-live-examples/dist/esm/index.js"),cssImportsExample=function(answers){var cssImports=["default"===answers.product?"@import '@alfalab/core-components/vars/index.css';":"@import '@alfalab/core-components/vars/bundle/".concat(answers.product,".css';"),"default"!==answers.product?"@import '@alfalab/core-components/themes/".concat(answers.product,".css';"):""].filter(Boolean);return"/* app.css */\n".concat(cssImports.join("\n"))},KeepCssVars=function(_ref){var answers=_ref.answers,steps=[];return steps.push((0,jsx_runtime.jsxs)("div",{style:{flex:1},children:[(0,jsx_runtime.jsxs)(modern.Typography.Text,{children:["Подключите на проект набор переменных и тему продукта. Обычно это можно сделать в одном из корневых файлов проекта:"," ",(0,jsx_runtime.jsx)(modern.Typography.Text,{weight:"bold",children:"App.tsx, root.tsx или app.css"})]}),(0,jsx_runtime.jsx)(esm.en,{live:!1,language:"css",code:cssImportsExample(answers)})]},"keepCssVars-".concat(answers.product))),steps.push((0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(modern.Typography.Text,{children:"Также если вы используете индексный файл с переменными (vars/index.css) , то рекомендуем вам перейти на один из бандлов, подготовленных под продукты (например, vars/bundle/click.css). В этих бандлах всегда будет правильный набор переменных для вашего продукта. Если в продукте встречаются очень старые deprecated цвета из файла vars/colors.css, дополнительно подключите его (он всё ещё есть в индексном файле, но в бандлы его уже не добавляли)."})})),"yes"===answers.darkMode&&steps.push((0,jsx_runtime.jsxs)("div",{style:{flex:1},children:[(0,jsx_runtime.jsx)(modern.Typography.Text,{children:"Добавьте на страницу дополнительные стили, если темный режим был включен. Обычно это можно сделать в корне приложения."}),(0,jsx_runtime.jsx)(esm.en,{live:!1,language:"css",code:"\nimport darkMode from '@alfalab/core-components/themes/dark';\n\n<>\n    {mode === 'dark' && <style>{darkMode}</style>}\n    {this.renderPage()}\n</>\n"})]},"darkModeWithVars")),(0,jsx_runtime.jsx)(list_modern.List,{tag:"ul",children:steps})};try{KeepCssVars.displayName="KeepCssVars",KeepCssVars.__docgenInfo={description:"",displayName:"KeepCssVars",props:{answers:{defaultValue:null,description:"",name:"answers",required:!0,type:{name:"Answers"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/theming-wizard/answers/keepCssVars/index.tsx#KeepCssVars"]={docgenInfo:KeepCssVars.__docgenInfo,name:"KeepCssVars",path:".storybook/theming-wizard/answers/keepCssVars/index.tsx#KeepCssVars"})}catch(__react_docgen_typescript_loader_error){}var config=[{name:"product",title:"Тема продукта",variants:[{label:"default",value:"default"},{label:"click",value:"click"},{label:"corp",value:"corp"},{label:"site",value:"site"}]},{name:"keepCssVars",title:"CSS-переменные",variants:[{label:"Оставляем в проде",value:"yes"},{label:"Выпиливаем",value:"no"}]},{name:"darkMode",title:"Темный режим",variants:[{label:"Есть",value:"yes"},{label:"Нет",value:"no"}]},{name:"aruiScripts",title:"arui-scripts",variants:[{label:"Есть",value:"yes"},{label:"Нет",value:"no"}]}],defaultByProduct={default:{product:"default",keepCssVars:"yes",darkMode:"no",aruiScripts:"yes"},click:{product:"click",keepCssVars:"yes",darkMode:"no",aruiScripts:"yes"},mobile:{product:"mobile",keepCssVars:"yes",darkMode:"yes",aruiScripts:"yes"},site:{product:"site",keepCssVars:"no",darkMode:"no",aruiScripts:"yes"},corp:{product:"corp",keepCssVars:"no",darkMode:"no",aruiScripts:"yes"}},link_modern=__webpack_require__("./dist/link/modern/index.js"),withoutAruiScriptsExample=function(answers){var settings={preserve:!1};return"default"!==answers.product&&(settings.importFrom="./node_modules/@alfalab/core-components/themes/".concat(answers.product,".css")),"postcssCustomProperties(".concat(JSON.stringify(settings,null,4),")")},DropCssVars=function(_ref){var answers=_ref.answers,steps=[];return"yes"===answers.aruiScripts&&"default"!==answers.product&&steps.push((0,jsx_runtime.jsxs)("div",{style:{flex:1},children:[(0,jsx_runtime.jsxs)(modern.Typography.Text,{children:["Подключите тему в"," ",(0,jsx_runtime.jsx)(link_modern.Link,{href:"https://git.moscow.alfaintra.net/projects/EF/repos/arui-scripts/browse/packages/arui-scripts#%D0%BD%D0%B0%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%BA%D0%B8",view:"default",rel:"noopener",target:"_blank",children:"настройках"})," ","arui-scripts"]}),(0,jsx_runtime.jsx)(esm.en,{live:!1,language:"json",code:JSON.stringify({keepCssVars:!1,componentsTheme:"./node_modules/@alfalab/core-components/themes/".concat(answers.product,".css")},null,4)})]},"arui-scripts")),("no"===answers.aruiScripts&&steps.push((0,jsx_runtime.jsxs)("div",{style:{flex:1},children:[(0,jsx_runtime.jsxs)(modern.Typography.Text,{children:["Настройте плагин"," ",(0,jsx_runtime.jsx)(link_modern.Link,{href:"https://github.com/postcss/postcss-custom-properties#importfrom",view:"default",rel:"noopener",target:"_blank",children:"postcss-custom-properties"})]}),(0,jsx_runtime.jsx)(esm.en,{live:!1,language:"json",code:withoutAruiScriptsExample(answers)})]},"without-arui-scripts")),steps.length)?(0,jsx_runtime.jsx)(list_modern.List,{tag:"ul",children:steps}):(0,jsx_runtime.jsx)(modern.Typography.Text,{children:"Дополнительных настроек не требуется"})};try{DropCssVars.displayName="DropCssVars",DropCssVars.__docgenInfo={description:"",displayName:"DropCssVars",props:{answers:{defaultValue:null,description:"",name:"answers",required:!0,type:{name:"Answers"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/theming-wizard/answers/dropCssVars/index.tsx#DropCssVars"]={docgenInfo:DropCssVars.__docgenInfo,name:"DropCssVars",path:".storybook/theming-wizard/answers/dropCssVars/index.tsx#DropCssVars"})}catch(__react_docgen_typescript_loader_error){}var ThemingWizard=function(){var _useState=(0,react.useState)(defaultByProduct.default),_useState2=(0,slicedToArray.Z)(_useState,2),answers=_useState2[0],setAnswers=_useState2[1];return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsx)(Questions,{config:config,answers:answers,onChange:function(newAnswers,question){"product"===question?setAnswers((0,objectSpread2.Z)((0,objectSpread2.Z)({},newAnswers),defaultByProduct[newAnswers.product]||{})):setAnswers(newAnswers)}}),(0,jsx_runtime.jsx)(modern.Typography.Title,{tag:"h3",defaultMargins:!0,view:"small",children:"Настройка темизации"}),"yes"===answers.keepCssVars?(0,jsx_runtime.jsx)(KeepCssVars,{answers:answers}):(0,jsx_runtime.jsx)(DropCssVars,{answers:answers})]})};function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",h3:"h3",h4:"h4",strong:"strong"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"For users/Темизация",parameters:{previewTabs:{canvas:{hidden:!0}}},id:"Instructions/Theming"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"темизация",children:"Темизация"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Настройка темизации может несколько отличаться в разных продуктах."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Выберите конфигурацию своего проекта, чтобы получить инструкцию по настройке."}),"\n",(0,jsx_runtime.jsx)(ThemingWizard,{}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"ограничения",children:"Ограничения"}),"\n",(0,jsx_runtime.jsxs)(_components.h4,{id:"на-одной-странице-должна-использоваться-только-одна-тема",children:["На одной странице должна использоваться только ",(0,jsx_runtime.jsx)(_components.strong,{children:"одна тема"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"В идеале весь проект должен использовать только одну тему, например тему mobile."}),"\n",(0,jsx_runtime.jsxs)(_components.h4,{id:"на-одной-странице-должна-использоваться-только-одна-палитра-цветов",children:["На одной странице должна использоваться только ",(0,jsx_runtime.jsx)(_components.strong,{children:"одна палитра цветов"})]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Если в проекте используется и блютинт и индиго, то палитры цветов должны подключаться через отдельные css-бандлы, либо через вставку style-тэга с нужно палитрой на нужной странице.\nИначе в итоговом css-бандле цвета перезапишут друг-друга."}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"По умолчанию используется палитра bluetint."}),"\n",(0,jsx_runtime.jsx)(_components.h4,{id:"темный-режим-перекрашивает-всю-страницу-целиком",children:"Темный режим перекрашивает всю страницу целиком"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Темный режим применяется на всю страницу. Перекрасить отдельные блоки нельзя. Если вам это нужно — скорее всего это не темный режим, а inverted версия компонента."})]})}function MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}let __page=()=>{throw Error("Docs-only story")};__page.parameters={docsOnly:!0};let componentMeta={title:"For users/Темизация",id:"Instructions/Theming",parameters:{previewTabs:{canvas:{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:MDXContent};var theming_stories=componentMeta;let __namedExportsOrder=["__page"]}}]);