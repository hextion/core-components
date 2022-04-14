"use strict";(self.webpackChunk_alfalab_core_components_repository=self.webpackChunk_alfalab_core_components_repository||[]).push([[6844,9724],{"./packages/drawer/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},drawer:function(){return drawer}});var _drawer$parameters,_drawer$parameters2,_drawer$parameters2$d,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/button/modern/index.js"),_alfalab_core_components_drawer__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/drawer/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Drawer",component:_alfalab_core_components_drawer__WEBPACK_IMPORTED_MODULE_3__.Drawer,id:"Drawer"},drawer={name:"Drawer",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState,2),open=_React$useState2[0],setOpen=_React$useState2[1],handleModalOpen=function(){return setOpen(!open)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{size:"xs",onClick:handleModalOpen,children:"Открыть Drawer"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_drawer__WEBPACK_IMPORTED_MODULE_3__.Drawer,{open:open,onClose:handleModalOpen,keepMounted:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("keepMounted",!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{})})]})}};__webpack_exports__.default=meta,drawer.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},drawer.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_drawer$parameters=drawer.parameters)||void 0===_drawer$parameters?void 0:_drawer$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'Drawer',\n  render: () => {\n    const [open, setOpen] = React.useState(false);\n    const handleModalOpen = () => setOpen(!open);\n    return <>\n                <Button size='xs' onClick={handleModalOpen}>\n                    Открыть Drawer\n                </Button>\n                <Drawer open={open} onClose={handleModalOpen} keepMounted={boolean('keepMounted', false)}>\n                    <div />\n                </Drawer>\n            </>;\n  }\n}"},null===(_drawer$parameters2=drawer.parameters)||void 0===_drawer$parameters2?void 0:null===(_drawer$parameters2$d=_drawer$parameters2.docs)||void 0===_drawer$parameters2$d?void 0:_drawer$parameters2$d.source)})});let __namedExportsOrder=["drawer"]},"./packages/drawer/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/drawer/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,desktopOnly:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const Header = () => {\n    const { setHasHeader } = React.useContext(DrawerContext);\n    React.useEffect(() => setHasHeader(true), [setHasHeader]);\n\n    const commonStyles = {\n        backgroundColor: 'rgba(55, 120, 251, 0.1)',\n        border: '1px dashed rgb(55, 120, 251)',\n        boxSizing: 'border-box',\n        borderRadius: '8px',\n        height: '48px',\n    };\n\n    const addonsStyles = {\n        ...commonStyles,\n        width: '48px',\n    };\n\n    const innerAddonsStyles = {\n        ...addonsStyles,\n        backgroundColor: 'rgba(207, 112, 255, 0.1)',\n    };\n\n    const bottomAddonsStyles = {\n        ...commonStyles,\n        width: '100%',\n    };\n\n    const wrapperStyles = {\n        display: 'flex',\n        justifyContent: 'center',\n    };\n\n    const titleStyles = {\n        ...commonStyles,\n        flexGrow: 1,\n    };\n\n    return (\n        <div style={{ margin: 'var(--modal-s-header-paddings)' }}>\n            <div style={wrapperStyles}>\n                <div style={innerAddonsStyles} />\n                <div style={addonsStyles} />\n                <div style={titleStyles} />\n                <div style={addonsStyles} />\n                <div style={innerAddonsStyles} />\n            </div>\n            <div style={bottomAddonsStyles} />\n        </div>\n    );\n};\n\nfunction Content() {\n    const { contentRef } = React.useContext(DrawerContext);\n    const styleContent = {\n        height: '100%',\n        borderRadius: '8px',\n        backgroundColor: 'rgba(55, 120, 251, 0.1)',\n        border: '1px dashed rgb(55, 120, 251)',\n        boxSizing: 'border-box',\n        margin: '0 40px',\n    };\n\n    return (\n        <div style={styleContent} ref={contentRef}></div>\n    );\n}\n\nfunction Footer() {\n    const { setHasFooter } = React.useContext(DrawerContext);\n    React.useEffect(() => setHasFooter(true), [setHasFooter]);\n\n    const styleFooter = {\n        minHeight: '48px',\n        borderRadius: '8px',\n        backgroundColor: 'rgba(55, 120, 251, 0.1)',\n        border: '1px dashed rgb(55, 120, 251)',\n        boxSizing: 'border-box',\n        margin: 'var(--modal-s-footer-paddings)',\n    };\n    return (\n        <div style={styleFooter}></div>\n    );\n}\n\nrender(() => {\n    const [modalAnatomy, setModalAnatomy] = React.useState(false);\n    const handleModalAnatomy = () => setModalAnatomy(!modalAnatomy);\n\n    return (\n        <Container>\n            <Button type='button' size='s' onClick={handleModalAnatomy}>\n                Показать анатомию\n            </Button>\n            <Drawer open={modalAnatomy} onClose={handleModalAnatomy} size='m'>\n                <Header />\n                <Content />\n                <Footer />\n            </Drawer>\n        </Container>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/drawer/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Drawer } from '@alfalab/core-components/drawer';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.dy}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:"@import '../../vars/src/index.css';\n@import '../../backdrop/src/vars.css';\n\n:root {\n    --drawer-width: 500px;\n}\n\n.component {\n    top: var(--gap-0);\n    height: 100%;\n    width: var(--drawer-width);\n    flex: 1;\n    overflow: auto;\n    will-change: transform;\n}\n\n.component.component {\n    position: fixed;\n}\n\n.customScrollbar {\n    @mixin custom-scrollbar;\n}\n\n.rightPlacement {\n    right: var(--gap-0);\n    align-self: flex-end;\n}\n\n.leftPlacement {\n    left: var(--gap-0);\n    align-self: flex-start;\n}\n\n.content {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n}\n\n/* enter */\n\n.enterRight {\n    transform: translateX(100%);\n}\n\n.enterLeft {\n    transform: translateX(-100%);\n}\n\n.contentEnter {\n    opacity: 0;\n}\n\n.backdropEnter {\n    background-color: var(--backdrop-hidden-background);\n}\n\n.enterActive {\n    transition: transform 0.3s ease-in-out;\n    transform: translateX(0);\n}\n\n.backdropEnterActive,\n.backdropEnterDone {\n    transition: background 0.3s ease-in-out;\n    background-color: var(--backdrop-visible-background);\n}\n\n.contentEnterActive {\n    transition: opacity 0.2s ease-in-out 0.3s;\n    opacity: 1;\n}\n\n/* exit */\n\n.exit {\n    transform: translateX(0);\n}\n\n.backdropExit {\n    background-color: var(--backdrop-visible-background);\n}\n\n.contentExit {\n    opacity: 1;\n}\n\n.exitActiveRight {\n    transition: transform 0.25s ease-in-out 0.1s;\n    transform: translateX(100%);\n}\n\n.exitActiveLeft {\n    transition: transform 0.25s ease-in-out 0.1s;\n    transform: translateX(-100%);\n}\n\n.backdropExitActive,\n.backdropExitDone {\n    transition: background 0.25s ease-in-out 0.1s;\n    background-color: var(--backdrop-hidden-background);\n}\n\n.contentExitActive {\n    opacity: 0;\n    transition: opacity 0.12s ease-in-out;\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Drawer",children:"Используется для десктопных модальных сущностей, появляющихся слева или справа."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:'# @alfalab/core-components-drawer\n\n## 5.1.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.9.0\n\n## 5.1.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.8.10\n\n## 5.1.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.8.9\n\n## 5.1.8\n\n### Patch Changes\n\n<sup><time>09.01.2025</time></sup>\n\n### [#1461](https://github.com/core-ds/core-components/pull/1461)\n\n-   Обновление зависимостей\n\n-   Обновлены зависимости\n    -   base-modal@5.8.8\n\n## 5.1.7\n\n### Patch Changes\n\n<sup><time>26.12.2024</time></sup>\n\n### [#1444](https://github.com/core-ds/core-components/pull/1444)\n\n-   Для drawer исправлена передача backdrop transition пропсов\n-   Для backdrop поднята специфичность transition класса\n\n<sup><time>26.12.2024</time></sup>\n\n### [#1509](https://github.com/core-ds/core-components/pull/1509)\n\n-   Добавлено "sideEffects": false, чтобы бандлер лучше делал тришейк.\n\n-   Обновлены зависимости\n    -   base-modal@5.8.7\n\n## 5.1.6\n\n### Patch Changes\n\n<sup><time>13.12.2024</time></sup>\n\n### [#1478](https://github.com/core-ds/core-components/pull/1478)\n\n-   Вендор classnames обновлён 2.3.1 -> 2.5.1\n\n-   Обновлены зависимости\n    -   base-modal@5.8.6\n\n## 5.1.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.8.5\n\n## 5.1.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.8.4\n\n## 5.1.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.8.3\n\n## 5.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.8.2\n\n## 5.1.1\n\n### Patch Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1370](https://github.com/core-ds/core-components/pull/1370)\n\n-   Заменили числовые значения на переменные отступов\n\n-   Обновлены зависимости\n    -   base-modal@5.8.1\n\n## 5.1.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.8.0\n\n## 5.0.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.11\n\n## 5.0.16\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.10\n\n## 5.0.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.9\n\n## 5.0.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.8\n\n## 5.0.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.7\n\n## 5.0.12\n\n### Patch Changes\n\n<sup><time>14.06.2024</time></sup>\n\n### [#1235](https://github.com/core-ds/core-components/pull/1235)\n\n-   Добавлен параметр displayName для корректного отображения компонентов в React Devtools\n\n-   Обновлены зависимости\n    -   base-modal@5.7.6\n\n## 5.0.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.5\n\n## 5.0.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.4\n\n## 5.0.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.3\n\n## 5.0.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.2\n\n## 5.0.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.1\n\n## 5.0.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.7.0\n\n## 5.0.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.6.0\n\n## 5.0.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.5.0\n\n## 5.0.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.4.1\n\n## 5.0.2\n\n### Patch Changes\n\n### [#812](https://github.com/core-ds/core-components/pull/812)\n\n-   fix: increased css specificity\n\n## 5.0.1\n\n### Patch Changes\n\n### [#793](https://github.com/core-ds/core-components/pull/793)\n\n-   Добавлены недостающие зависимости в package.json\n\n-   Обновлены зависимости\n    -   base-modal@5.4.0\n\n## 5.0.0\n\n### Major Changes\n\n### [#703](https://github.com/core-ds/core-components/pull/703)\n\n-   Кастомный js скроллбар заменен на css версию\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.3.0\n\n## 4.2.12\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   base-modal@5.2.1\n    -   scrollbar@2.1.6\n\n## 4.2.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.2.0\n\n## 4.2.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.1.3\n\n## 4.2.9\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   base-modal@5.1.2\n    -   scrollbar@2.1.5\n\n## 4.2.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   scrollbar@2.1.4\n\n## 4.2.7\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.1.1\n\n## 4.2.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.1.0\n\n## 4.2.5\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   base-modal@5.0.10\n    -   scrollbar@2.1.3\n\n## 4.2.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.0.9\n\n## 4.2.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.0.8\n\n## 4.2.2\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   base-modal@5.0.7\n    -   scrollbar@2.1.2\n\n## 4.2.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.0.6\n\n## 4.2.0\n\n### Minor Changes\n\n### [#323](https://github.com/core-ds/core-components/pull/323)\n\n-   Добавлена возможность передавать пропсы в компонент Scrollbar\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.0.5\n\n## 4.1.0\n\n### Minor Changes\n\n### [#305](https://github.com/core-ds/core-components/pull/305)\n\n-   Добавлен проп placement, теперь Drawer и SidePanel могут появляться слева\n-   Добавлен кастомный скроллбар.<br />\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   base-modal@5.0.4\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [4.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@4.0.2...@alfalab/core-components-drawer@4.0.3) (2022-09-13)\n\n### Bug Fixes\n\n-   **base-modal:** fixed scroll to top issues ([#224](https://github.com/core-ds/core-components/issues/224)) ([2e3fdd2](https://github.com/core-ds/core-components/commit/2e3fdd22a4af2b043c428a3ad800b82ac4166d5d))\n\n## [4.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@4.0.1...@alfalab/core-components-drawer@4.0.2) (2022-09-12)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [4.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@4.0.0...@alfalab/core-components-drawer@4.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n# [4.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.3.1...@alfalab/core-components-drawer@4.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [3.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.3.0...@alfalab/core-components-drawer@3.3.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [3.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.2.8...@alfalab/core-components-drawer@3.3.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [3.2.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.2.7...@alfalab/core-components-drawer@3.2.8) (2022-07-25)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [3.2.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.2.6...@alfalab/core-components-drawer@3.2.7) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [3.2.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.2.5...@alfalab/core-components-drawer@3.2.6) (2022-07-15)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [3.2.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.2.4...@alfalab/core-components-drawer@3.2.5) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [3.2.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.2.3...@alfalab/core-components-drawer@3.2.4) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [3.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.2.2...@alfalab/core-components-drawer@3.2.3) (2022-07-11)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [3.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.2.1...@alfalab/core-components-drawer@3.2.2) (2022-07-01)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [3.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.2.0...@alfalab/core-components-drawer@3.2.1) (2022-06-30)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n# [3.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.1.4...@alfalab/core-components-drawer@3.2.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [3.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.1.3...@alfalab/core-components-drawer@3.1.4) (2022-06-20)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [3.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.1.0...@alfalab/core-components-drawer@3.1.1) (2022-03-24)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n# [3.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.0.3...@alfalab/core-components-drawer@3.1.0) (2022-03-01)\n\n### Features\n\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n\n## [3.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.0.2...@alfalab/core-components-drawer@3.0.3) (2022-01-17)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.0.1...@alfalab/core-components-drawer@3.0.2) (2021-09-14)\n\n### Bug Fixes\n\n-   **base-modal:** modal scroll ([#820](https://github.com/core-ds/core-components/issues/820)) ([1b2d94a](https://github.com/core-ds/core-components/commit/1b2d94ad45e04145bf1292d749ae2028702dc622))\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@3.0.0...@alfalab/core-components-drawer@3.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@2.1.4...@alfalab/core-components-drawer@3.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [2.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@2.1.3...@alfalab/core-components-drawer@2.1.4) (2021-07-02)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [2.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@2.1.2...@alfalab/core-components-drawer@2.1.3) (2021-06-28)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [2.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@2.1.1...@alfalab/core-components-drawer@2.1.2) (2021-05-28)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [2.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@2.1.0...@alfalab/core-components-drawer@2.1.1) (2021-05-25)\n\n### Bug Fixes\n\n-   **modal:** fix styles ([#665](https://github.com/core-ds/core-components/issues/665)) ([06f3615](https://github.com/core-ds/core-components/commit/06f3615c532f8ec2932d8a4d1fcbb1f5ee6b6a30))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@2.0.0...@alfalab/core-components-drawer@2.1.0) (2021-05-18)\n\n### Features\n\n-   **drawer:** update animtaion ([#643](https://github.com/core-ds/core-components/issues/643)) ([3a3cfc5](https://github.com/core-ds/core-components/commit/3a3cfc5be89908df476f77a35bcf6b9460ecb92a))\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.2.2...@alfalab/core-components-drawer@2.0.0) (2021-04-26)\n\n### Features\n\n-   **stack:** add new component ([#612](https://github.com/core-ds/core-components/issues/612)) ([c520f91](https://github.com/core-ds/core-components/commit/c520f91cd22bb9e23fd2f428719865b4c7d5a2a6))\n\n### BREAKING CHANGES\n\n-   **stack:** remove z-index, add stack component\n\n-   feat(modal): remove z-index, add stack component\n\nremove z-index, add stack component\n\n-   **stack:** remove z-index, add stack component\n\n-   feat(notification-manager): remove z-index, add stack component\n\nremove z-index, add stack component\n\n-   **stack:** remove z-index, add stack component\n\n-   feat(notification): remove z-index, add stack component\n\nremove z-index, add stack component\n\n-   **stack:** remove z-index, add stack component\n\n-   feat(popover): remove z-index, add stack component\n\nremove z-index, add stack component\n\n-   **stack:** remove z-index, add stack component\n\n-   feat(select): remove z-index, add stack component\n\nremove z-index, add stack component\n\n-   **stack:** remove z-index, add stack component\n\n-   feat(toast): remove z-index, add stack component\n\nremove z-index, add stack component\n\n-   **stack:** remove z-index, add stack component\n\n-   feat(tooltip): remove z-index, add stack component\n\nremove z-index, add stack component\n\n-   **stack:** remove z-index, add stack component\n\n-   feat(stack): fix comment\n\n-   Revert "feat(modal): remove z-index, add stack component"\n\nThis reverts commit fcae901c6ec58311701cd491296a7b04016a9a65.\n\n-   feat(base-modal): remove z-index, add stack component\n\nremove z-index, add stack component\n\n-   **stack:** remove z-index, add stack component\n\n-   test(file-upload-item): update snapshot\n\n## [1.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.2.1...@alfalab/core-components-drawer@1.2.2) (2021-04-26)\n\n### Bug Fixes\n\n-   **drawer:** lost vars ([#632](https://github.com/core-ds/core-components/issues/632)) ([82a8e46](https://github.com/core-ds/core-components/commit/82a8e461fc16d4ae8b6d3d268c92f7dc969e81f8))\n\n## [1.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.2.0...@alfalab/core-components-drawer@1.2.1) (2021-04-09)\n\n### Bug Fixes\n\n-   **drawer:** backdrop styles ([04da4fa](https://github.com/core-ds/core-components/commit/04da4fac310dbe2634ea4130ead480a88d47ee8e))\n\n# [1.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.15...@alfalab/core-components-drawer@1.2.0) (2021-04-09)\n\n### Features\n\n-   **backdrop:** add component ([948a6c2](https://github.com/core-ds/core-components/commit/948a6c2fb5ec58edb2d087691ce4713d75da6e35))\n\n## [1.1.15](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.14...@alfalab/core-components-drawer@1.1.15) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.14](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.13...@alfalab/core-components-drawer@1.1.14) (2021-03-30)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.13](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.12...@alfalab/core-components-drawer@1.1.13) (2021-03-24)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.12](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.11...@alfalab/core-components-drawer@1.1.12) (2021-03-19)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.11](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.9...@alfalab/core-components-drawer@1.1.11) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.1.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.8...@alfalab/core-components-drawer@1.1.9) (2021-03-16)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.7...@alfalab/core-components-drawer@1.1.8) (2021-03-15)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.6...@alfalab/core-components-drawer@1.1.7) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.5...@alfalab/core-components-drawer@1.1.6) (2021-03-10)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.4...@alfalab/core-components-drawer@1.1.5) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.3...@alfalab/core-components-drawer@1.1.4) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.2...@alfalab/core-components-drawer@1.1.3) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.1...@alfalab/core-components-drawer@1.1.2) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-drawer@1.1.0...@alfalab/core-components-drawer@1.1.1) (2021-02-20)\n\n**Note:** Version bump only for package @alfalab/core-components-drawer\n\n# 1.1.0 (2021-02-19)\n\n### Features\n\n-   **drawer:** add component ([#497](https://github.com/core-ds/core-components/issues/497)) ([5943188](https://github.com/core-ds/core-components/commit/594318886d581e6afca99fcebe9088c222aa3d52))\n'}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/drawer/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{zn:function(){return ANIMATION_DURATION},dy:function(){return Drawer},rf:function(){return DrawerContext}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/base-modal/modern/index.js"),index_module={component:"component_vLydz",customScrollbar:"customScrollbar_q0vgW",rightPlacement:"rightPlacement_d4tZx",leftPlacement:"leftPlacement_Wd_VZ",content:"content_RL5Ks",enterRight:"enterRight_vT83w",enterLeft:"enterLeft_VN0v7",contentEnter:"contentEnter_oL67X",backdropEnter:"backdropEnter_m_rL0",enterActive:"enterActive_PZUWn",backdropEnterActive:"backdropEnterActive_ypABt",backdropEnterDone:"backdropEnterDone_xMDIF",contentEnterActive:"contentEnterActive_d_n28",exit:"exit_POUYD",backdropExit:"backdropExit_FgNUz",contentExit:"contentExit_CxuT5",exitActiveRight:"exitActiveRight_vNDIZ",exitActiveLeft:"exitActiveLeft_BfGuc",backdropExitActive:"backdropExitActive_Rj6Te",backdropExitDone:"backdropExitDone_Aitdr",contentExitActive:"contentExitActive_VwIT3"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["open","className","children","contentTransitionProps","nativeScrollbar","placement"],ANIMATION_DURATION=600,DrawerContext=modern.BaseModalContext,backdropProps={transitionClassNames:{enter:index_module.backdropEnter,appear:index_module.backdropEnter,enterActive:index_module.backdropEnterActive,appearActive:index_module.backdropEnterActive,enterDone:index_module.backdropEnterDone,appearDone:index_module.backdropEnterDone,exit:index_module.backdropExit,exitActive:index_module.backdropExitActive,exitDone:index_module.backdropExitDone},timeout:ANIMATION_DURATION},contentProps={classNames:{enter:index_module.contentEnter,appear:index_module.contentEnter,enterActive:index_module.contentEnterActive,appearActive:index_module.contentEnterActive,exit:index_module.contentExit,exitActive:index_module.contentExitActive},timeout:ANIMATION_DURATION},Drawer=(0,react.forwardRef)(function(_ref,ref){var open=_ref.open,className=_ref.className,children=_ref.children,contentTransitionProps=_ref.contentTransitionProps,_ref$nativeScrollbar=_ref.nativeScrollbar,_ref$placement=_ref.placement,placement=void 0===_ref$placement?"right":_ref$placement,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),isRightPlacement="right"===placement,isLeftPlacement="left"===placement,transitionProps=(0,react.useMemo)(function(){var enterClassName=classnames_default()((0,defineProperty.Z)((0,defineProperty.Z)({},index_module.enterRight,isRightPlacement),index_module.enterLeft,isLeftPlacement)),exitClassName=classnames_default()((0,defineProperty.Z)((0,defineProperty.Z)({},index_module.exitActiveRight,isRightPlacement),index_module.exitActiveLeft,isLeftPlacement));return(0,objectSpread2.Z)({classNames:{enter:enterClassName,appear:enterClassName,enterActive:index_module.enterActive,appearActive:index_module.enterActive,exit:index_module.exit,exitActive:exitClassName},timeout:ANIMATION_DURATION},restProps.transitionProps)},[restProps.transitionProps,isLeftPlacement,isRightPlacement]);return(0,jsx_runtime.jsx)(modern.BaseModal,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{scrollHandler:"content",ref:ref,open:open,className:classnames_default()(index_module.component,className,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},index_module.rightPlacement,isRightPlacement),index_module.leftPlacement,isLeftPlacement),index_module.customScrollbar,!(void 0===_ref$nativeScrollbar||_ref$nativeScrollbar))),transitionProps:transitionProps,backdropProps:(0,objectSpread2.Z)((0,objectSpread2.Z)({},backdropProps),restProps.backdropProps),children:(0,jsx_runtime.jsx)(CSSTransition.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({},(0,objectSpread2.Z)((0,objectSpread2.Z)({},contentProps),contentTransitionProps)),{},{appear:!0,in:open,children:(0,jsx_runtime.jsx)("div",{className:index_module.content,children:children})}))}))});Drawer.displayName="Drawer";try{Drawer.displayName="Drawer",Drawer.__docgenInfo={description:"",displayName:"Drawer",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/drawer/src/Component.tsx#Drawer"]={docgenInfo:Drawer.__docgenInfo,name:"Drawer",path:"packages/drawer/src/Component.tsx#Drawer"})}catch(__react_docgen_typescript_loader_error){}}}]);