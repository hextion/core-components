"use strict";(self.webpackChunk_balafla_core_components_repository=self.webpackChunk_balafla_core_components_repository||[]).push([[9126,5126],{"./packages/dropzone/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},dropzone:function(){return dropzone}});var _dropzone$parameters,_dropzone$parameters2,_dropzone$parameters3,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_balafla_core_components_dropzone__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/dropzone/modern/index.js"),_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/screenshot-utils/screenshots-story/utils.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),WRAPPER_STYLES={display:"inline-block",background:"var(--color-light-modal-bg-primary)"},meta={title:"Components/Dropzone",component:_balafla_core_components_dropzone__WEBPACK_IMPORTED_MODULE_2__.Dropzone,id:"Dropzone"},dropzone={name:"Dropzone",render:function render(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState([]),_React$useState2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_React$useState,2),filesList=_React$useState2[0],setFilesList=_React$useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({display:"inline-block"},(0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_3__.FX)((0,_screenshot_utils_screenshots_story_utils__WEBPACK_IMPORTED_MODULE_3__.Ph)("wrapperStyles"))),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:WRAPPER_STYLES,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_balafla_core_components_dropzone__WEBPACK_IMPORTED_MODULE_2__.Dropzone,{error:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("error",!1),block:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("block",!1),overlayVisible:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("overlayVisible (deprecated)",void 0),disabled:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("disabled",!1),onDrop:function(files){setFilesList(Array.from(files).map(function(file){return file.name}).filter(Boolean))},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{minWidth:400,width:"100%",height:200,display:"flex",alignItems:"center",justifyContent:"center"},children:filesList.length>0?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul",{children:filesList.map(function(file){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li",{children:file},file)})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span",{children:"Перетащите файлы"})})})})})}};__webpack_exports__.default=meta,dropzone.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},dropzone.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({},null===(_dropzone$parameters=dropzone.parameters)||void 0===_dropzone$parameters?void 0:_dropzone$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_6__.Z)({originalSource:"{\n  name: 'Dropzone',\n  render: () => {\n    const [filesList, setFilesList] = React.useState([]);\n    const handleDrop = (files: FileList) => {\n      setFilesList(Array.from(files).map(file => file.name).filter(Boolean));\n    };\n    return <div style={{\n      display: 'inline-block',\n      ...stylesStringToObj(getQueryParam('wrapperStyles'))\n    }}>\n                <div style={WRAPPER_STYLES}>\n                    <Dropzone error={boolean('error', false)} block={boolean('block', false)} overlayVisible={boolean('overlayVisible (deprecated)', undefined)} disabled={boolean('disabled', false)} onDrop={handleDrop}>\n                        <div style={{\n            minWidth: 400,\n            width: '100%',\n            height: 200,\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center'\n          }}>\n                            {filesList.length > 0 ? <ul>\n                                    {filesList.map(file => <li key={file}>{file}</li>)}\n                                </ul> : <span>Перетащите файлы</span>}\n                        </div>\n                    </Dropzone>\n                </div>\n            </div>;\n  }\n}"},null===(_dropzone$parameters2=dropzone.parameters)||void 0===_dropzone$parameters2?void 0:null===(_dropzone$parameters3=_dropzone$parameters2.docs)||void 0===_dropzone$parameters3?void 0:_dropzone$parameters3.source)})});let __namedExportsOrder=["dropzone"]},"./packages/dropzone/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/dropzone/src/docs/Component.stories.tsx");function _createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,desktopOnly:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"render(() => {\n    const [filesList, setFilesList] = React.useState([]);\n    const [ downloadStatus, setDownloadStatus] = React.useState('success');\n\n    const handleDrop = files => {\n        setFilesList(\n            Array.from(files)\n                .map(file => file.name)\n                .filter(Boolean),\n        );\n    };\n    const onDownloadStatusChange = (_, payload) => {\n        setDownloadStatus(payload.value);\n        setFilesList([])\n    };\n    \n    const stylesStatus = {\n        display: 'flex',\n        flexDirection: 'column',\n        alignItems: 'center',\n        justifyContent: 'center',\n        width: 724,\n        height: 200,\n    }\n\n    const stylesText = {\n        lineHeight: '24px',\n        marginTop: 8,\n    }\n\n    const isError = filesList.length && downloadStatus === 'error';\n\n    const statusDropzone = (text, Icon)=> (\n        <div style={stylesStatus}> \n            <Icon />\n            <span style={stylesText}>{text}</span>\n        </div>\n    )\n\n    return (\n        <Space size={24}>\n            <Dropzone\n                error={isError}\n                onDrop={handleDrop}\n            >\n                    {filesList.length > 0 ? (\n                        downloadStatus === 'success' ?\n                        statusDropzone('Успех',CheckmarkMIcon ) :\n                        statusDropzone('Ошибка',CrossMIcon )\n                    ) : (\n                        statusDropzone('Перетащите файлы',ContainerMIcon )\n                    )}\n            </Dropzone>\n            <RadioGroup\n                label='Состояние после загрузки'\n                direction='vertical'\n                name='radioGroup'\n                onChange={onDownloadStatusChange}\n                value={downloadStatus}\n            >\n                <Radio size='m' label='Успех' value='success' />\n                <Radio size='m' label='Ошибка' value='error' />\n            </RadioGroup>\n        </Space>\n    );\n});\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/dropzone/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Dropzone } from '@balafla/core-components/dropzone';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.$4,{of:Component.f}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:"@import '../../vars/src/index.css';\n\n:root {\n    --dropzone-active-bg: transparent;\n    --dropzone-border-radius: var(--border-radius-12);\n}\n\n.component {\n    display: inline-block;\n    position: relative;\n    transition: border-color 0.2s ease, background-color 0.2s ease;\n    border-radius: var(--dropzone-border-radius);\n    border: 1px dashed var(--color-light-neutral-translucent-1300);\n}\n\n.disabled {\n    cursor: var(--disabled-cursor);\n}\n\n.component:not(.disabled):hover {\n    background-color: var(--dropzone-active-bg);\n}\n\n.block {\n    width: 100%;\n}\n\n.dragOver {\n    background-color: var(--dropzone-active-bg);\n}\n\n.error {\n    border-color: var(--color-light-status-negative);\n}\n\n.inner {\n    transition: opacity 0.2s ease;\n}\n\n.hidden {\n    opacity: 0;\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Dropzone",children:"Используется для прикрепления файлов."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# @alfalab/core-components-dropzone\n\n## 4.1.5\n\n### Patch Changes\n\n<sup><time>10.04.2025</time></sup>\n\n#### [#1](https://github.com/hextion/core-components/pull/1)\n\n-   Обновлена сборка.\n-   Добавлены пропущенные зависимости.\n-   Синхронизированы версии зависимостей.\n\n## 4.1.4\n\n### Patch Changes\n\n<sup><time>09.01.2025</time></sup>\n\n### [#1461](https://github.com/core-ds/core-components/pull/1461)\n\n-   Обновление зависимостей\n\n## 4.1.3\n\n### Patch Changes\n\n<sup><time>26.12.2024</time></sup>\n\n### [#1497](https://github.com/core-ds/core-components/pull/1497)\n\n-   Добавлено sideEffects: false (package.json)\n\n## 4.1.2\n\n### Patch Changes\n\n<sup><time>13.12.2024</time></sup>\n\n### [#1478](https://github.com/core-ds/core-components/pull/1478)\n\n-   Вендор classnames обновлён 2.3.1 -> 2.5.1\n\n## 4.1.1\n\n### Patch Changes\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1358](https://github.com/core-ds/core-components/pull/1358)\n\n-   Обновлены наименования переменных скругления\n\n<sup><time>13.09.2024</time></sup>\n\n### [#1370](https://github.com/core-ds/core-components/pull/1370)\n\n-   Заменили числовые значения на переменные отступов\n\n## 4.1.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n## 4.0.2\n\n### Patch Changes\n\n<sup><time>04.09.2024</time></sup>\n\n### [#1354](https://github.com/core-ds/core-components/pull/1354)\n\n-   Обновлены наименования переменных отступов\n\n## 4.0.1\n\n### Patch Changes\n\n<sup><time>13.06.2024</time></sup>\n\n### [#1229](https://github.com/core-ds/core-components/pull/1229)\n\n-   Изменили цветовые токены: color-light-neutral-1500 -> color-light-neutral-translucent-1300, color-light-neutral-1500-inverted -> color-light-neutral-translucent-1300-inverted, color-static-neutral-1500 -> color-static-neutral-translucent-1300, color-static-neutral-1500-inverted -> color-static-neutral-translucent-1300-inverted\n\n## 4.0.0\n\n### Major Changes\n\n<sup><time>28.05.2024</time></sup>\n\n### [#1194](https://github.com/core-ds/core-components/pull/1194)\n\n-   Изменен тип параметра на Files[] в обработчике onDrop\n\n## 3.5.1\n\n### Patch Changes\n\n### [#1081](https://github.com/core-ds/core-components/pull/1081)\n\n-   Добавлен дополнительный класс для контента - contentClassName\n\n## 3.5.0\n\n### Minor Changes\n\n### [#1038](https://github.com/core-ds/core-components/pull/1038)\n\n-   Раньше при появления оверлея в дропозоне контент оставался видимым и из-за прозрачности в цвете оверлея его было видно, теперь скрываем контент при появление оверлея\n\n## 3.4.0\n\n### Minor Changes\n\n### [#1007](https://github.com/core-ds/core-components/pull/1007)\n\n-   Обновлена зависимость @alfalab/icons-glyph\n\n## 3.3.0\n\n### Minor Changes\n\n### [#973](https://github.com/core-ds/core-components/pull/973)\n\n-   В компонентах Badge,CircularProgressBar,Dropzone,FileUploadItem,HatchingProgressBar,Indicator,IconView,Status,ProgressBar и SteppedProgressBar цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n## 3.2.1\n\n### Patch Changes\n\n### [#881](https://github.com/core-ds/core-components/pull/881)\n\n-   Исправлен радиус скругления оверлея\n\n## 3.2.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.1.0\n\n### Minor Changes\n\n### [#754](https://github.com/core-ds/core-components/pull/754)\n\n-   Pадиус скругления изменен на 12px во всех темах\n\n## 3.0.9\n\n### Patch Changes\n\n### [#635](https://github.com/core-ds/core-components/pull/635)\n\n-   Обновлена версия пакета @alfalab/icons-glyph в зависимостях\n\n## 3.0.8\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.7\n\n### Patch Changes\n\n### [#554](https://github.com/core-ds/core-components/pull/554)\n\n-   Изменена ширина бордера с 2 пикселей на 1\n\n## 3.0.6\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.5\n\n### Patch Changes\n\n### [#396](https://github.com/core-ds/core-components/pull/396)\n\n-   Обновлена версия пакета @alfalab/icons-glyph в зависимостях\n\n## 3.0.4\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n## 3.0.3\n\n### Patch Changes\n\n-   [#208](https://github.com/core-ds/core-components/pull/208): Обновлён лого в BankCard. Thanks [@reabiliti](https://github.com/reabiliti)\n    Обновлены версии зависимостей с иконками (icons-logotype/icons-classic/icons-glyph/icons-flag)\n\n## 3.0.2\n\n### Patch Changes\n\n-   [#189](https://github.com/core-ds/core-components/pull/189): Обновлена зависимость @alfalab/icons-glyph. Thanks [@blackraydev](https://github.com/blackraydev)\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@3.0.0...@alfalab/core-components-dropzone@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-dropzone\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.5.1...@alfalab/core-components-dropzone@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.5.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.5.0...@alfalab/core-components-dropzone@2.5.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.5.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.4.2...@alfalab/core-components-dropzone@2.5.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.4.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.4.1...@alfalab/core-components-dropzone@2.4.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.4.0...@alfalab/core-components-dropzone@2.4.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-dropzone\n\n# [2.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.3.3...@alfalab/core-components-dropzone@2.4.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.2.3...@alfalab/core-components-dropzone@2.3.0) (2022-03-04)\n\n### Bug Fixes\n\n-   update glyph deps ([#1019](https://github.com/core-ds/core-components/issues/1019)) ([3e910d0](https://github.com/core-ds/core-components/commit/3e910d0801c4c46bcd399163200c1f7bfaba375e))\n\n### Features\n\n-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))\n\n## [2.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.2.2...@alfalab/core-components-dropzone@2.2.3) (2022-02-17)\n\n### Bug Fixes\n\n-   imports for glyph icons ([#994](https://github.com/core-ds/core-components/issues/994)) ([8e807f2](https://github.com/core-ds/core-components/commit/8e807f26abf0f942fe8eadbd201caecb297b35dc))\n\n## [2.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.2.1...@alfalab/core-components-dropzone@2.2.2) (2022-01-17)\n\n### Bug Fixes\n\n-   **dropzone:** корректный сброс dragCounter ([#944](https://github.com/core-ds/core-components/issues/944)) ([091b4a4](https://github.com/core-ds/core-components/commit/091b4a4b2f42fb0b84581c875a18c14c735eb92b))\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.2.0...@alfalab/core-components-dropzone@2.2.1) (2021-11-16)\n\n**Note:** Version bump only for package @alfalab/core-components-dropzone\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.1.0...@alfalab/core-components-dropzone@2.2.0) (2021-09-14)\n\n### Features\n\n-   **dropzone:** design improvements (PDS-282) ([#829](https://github.com/core-ds/core-components/issues/829)) ([437ec3c](https://github.com/core-ds/core-components/commit/437ec3c80c507a37c8a24106a6ee6514abd68d04))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.0.2...@alfalab/core-components-dropzone@2.1.0) (2021-08-27)\n\n### Features\n\n-   **dropzone:** add block prop ([#813](https://github.com/core-ds/core-components/issues/813)) ([39bf4c3](https://github.com/core-ds/core-components/commit/39bf4c3158525d419c75aedec8be81e4a4bb90da))\n\n## [2.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.0.1...@alfalab/core-components-dropzone@2.0.2) (2021-08-09)\n\n### Bug Fixes\n\n-   **attach:** fix drag counter & styles ([#786](https://github.com/core-ds/core-components/issues/786)) ([b075725](https://github.com/core-ds/core-components/commit/b0757250ea57a6e5db64a5026315f8837e8a3303))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@2.0.0...@alfalab/core-components-dropzone@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-dropzone\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@1.1.1...@alfalab/core-components-dropzone@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-dropzone@1.1.0...@alfalab/core-components-dropzone@1.1.1) (2021-06-04)\n\n### Bug Fixes\n\n-   **dropzone:** add pointer-events none to overlay ([#677](https://github.com/core-ds/core-components/issues/677)) ([5f9077a](https://github.com/core-ds/core-components/commit/5f9077a7c6c88272c7e9e67ec243488249cc5ded))\n\n# 1.1.0 (2021-04-26)\n\n### Features\n\n-   **dropzone:** add component ([#566](https://github.com/core-ds/core-components/issues/566)) ([693a720](https://github.com/core-ds/core-components/commit/693a720202d78d47e39954edff7b72335904d714))\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./node_modules/querystring/decode.js":function(module){function hasOwnProperty(obj,prop){return Object.prototype.hasOwnProperty.call(obj,prop)}module.exports=function(qs,sep,eq,options){sep=sep||"&",eq=eq||"=";var obj={};if("string"!=typeof qs||0===qs.length)return obj;var regexp=/\+/g;qs=qs.split(sep);var maxKeys=1e3;options&&"number"==typeof options.maxKeys&&(maxKeys=options.maxKeys);var len=qs.length;maxKeys>0&&len>maxKeys&&(len=maxKeys);for(var i=0;i<len;++i){var kstr,vstr,k,v,x=qs[i].replace(regexp,"%20"),idx=x.indexOf(eq);idx>=0?(kstr=x.substr(0,idx),vstr=x.substr(idx+1)):(kstr=x,vstr=""),k=decodeURIComponent(kstr),v=decodeURIComponent(vstr),hasOwnProperty(obj,k)?Array.isArray(obj[k])?obj[k].push(v):obj[k]=[obj[k],v]:obj[k]=v}return obj}},"./node_modules/querystring/encode.js":function(module){var stringifyPrimitive=function(v){switch(typeof v){case"string":return v;case"boolean":return v?"true":"false";case"number":return isFinite(v)?v:"";default:return""}};module.exports=function(obj,sep,eq,name){return(sep=sep||"&",eq=eq||"=",null===obj&&(obj=void 0),"object"==typeof obj)?Object.keys(obj).map(function(k){var ks=encodeURIComponent(stringifyPrimitive(k))+eq;return Array.isArray(obj[k])?obj[k].map(function(v){return ks+encodeURIComponent(stringifyPrimitive(v))}).join(sep):ks+encodeURIComponent(stringifyPrimitive(obj[k]))}).join(sep):name?encodeURIComponent(stringifyPrimitive(name))+eq+encodeURIComponent(stringifyPrimitive(obj)):""}},"./node_modules/querystring/index.js":function(__unused_webpack_module,exports,__webpack_require__){exports.decode=exports.parse=__webpack_require__("./node_modules/querystring/decode.js"),exports.encode=exports.stringify=__webpack_require__("./node_modules/querystring/encode.js")},"./packages/dropzone/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:function(){return Dropzone}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ContainerMIcon=__webpack_require__("./node_modules/@alfalab/icons-glyph/ContainerMIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Component_Overlay=function(_ref){var _ref$text=_ref.text,_ref$visible=_ref.visible;return(0,jsx_runtime.jsxs)("div",{className:classnames_default()("overlay_SxncF",(0,defineProperty.Z)({},"visible_P3PYx",void 0!==_ref$visible&&_ref$visible)),children:[(0,jsx_runtime.jsx)(ContainerMIcon.ContainerMIcon,{}),(0,jsx_runtime.jsx)("span",{className:"text_pNpuV",children:void 0===_ref$text?"Перетащите файлы":_ref$text})]})};try{Component_Overlay.displayName="Overlay",Component_Overlay.__docgenInfo={description:"",displayName:"Overlay",props:{text:{defaultValue:{value:"Перетащите файлы"},description:"Подпись для заглушки",name:"text",required:!1,type:{name:"string"}},visible:{defaultValue:{value:"false"},description:"Управление видимостью",name:"visible",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropzone/src/components/overlay/Component.tsx#Overlay"]={docgenInfo:Component_Overlay.__docgenInfo,name:"Overlay",path:"packages/dropzone/src/components/overlay/Component.tsx#Overlay"})}catch(__react_docgen_typescript_loader_error){}var preventAndStopEvent=function(event){event.preventDefault(),event.stopPropagation()},src_index_module={component:"component_gxayQ",disabled:"disabled_H_DRi",block:"block_OXdQR",dragOver:"dragOver_HzDtF",error:"error_Ky_Dd",inner:"inner_mgEzj",hidden:"hidden_UIMOJ"},Dropzone=function(_ref){var className=_ref.className,contentClassName=_ref.contentClassName,children=_ref.children,_ref$text=_ref.text,_ref$error=_ref.error,overlayVisible=_ref.overlayVisible,_ref$Overlay=_ref.Overlay,Overlay=void 0===_ref$Overlay?Component_Overlay:_ref$Overlay,onDragEnter=_ref.onDragEnter,onDragLeave=_ref.onDragLeave,onDragOver=_ref.onDragOver,onDrop=_ref.onDrop,_ref$block=_ref.block,disabled=_ref.disabled,dataTestId=_ref.dataTestId,_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),dragOver=_useState2[0],setDragOver=_useState2[1],dragCounter=(0,react.useRef)(0),isOverlayVisible=!!(dragOver||overlayVisible),handleDragOver=(0,react.useCallback)(function(event){preventAndStopEvent(event),!disabled&&onDragOver&&onDragOver(event)},[onDragOver,disabled]),handleDragEnter=(0,react.useCallback)(function(event){preventAndStopEvent(event),!disabled&&(dragCounter.current+=1,setDragOver(!0),onDragEnter&&onDragEnter(event))},[disabled,onDragEnter]),handleDragLeave=(0,react.useCallback)(function(event){preventAndStopEvent(event),disabled||(dragCounter.current-=1,!(dragCounter.current>0)&&(setDragOver(!1),onDragLeave&&onDragLeave(event)))},[disabled,onDragLeave]),handleDrop=(0,react.useCallback)(function(event){preventAndStopEvent(event),!disabled&&(setDragOver(!1),dragCounter.current=0,event.dataTransfer.files&&event.dataTransfer.files.length>0&&(onDrop&&onDrop(Array.from(event.dataTransfer.files)),event.dataTransfer.clearData()))},[disabled,onDrop]);return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(src_index_module.component,className,(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},src_index_module.dragOver,dragOver),src_index_module.error,void 0!==_ref$error&&_ref$error),src_index_module.block,void 0!==_ref$block&&_ref$block),src_index_module.disabled,disabled)),"data-test-id":dataTestId,onDragEnter:handleDragEnter,onDragLeave:handleDragLeave,onDragOver:handleDragOver,onDrop:handleDrop,children:[(0,jsx_runtime.jsx)("div",{className:classnames_default()(src_index_module.inner,isOverlayVisible&&src_index_module.hidden,contentClassName),children:children}),(0,jsx_runtime.jsx)(Overlay,{text:void 0===_ref$text?"Перетащите файлы":_ref$text,visible:isOverlayVisible})]})};try{Dropzone.displayName="Dropzone",Dropzone.__docgenInfo={description:"",displayName:"Dropzone",props:{className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"Дополнительный класс для контента",name:"contentClassName",required:!1,type:{name:"string"}},text:{defaultValue:{value:"Перетащите файлы"},description:"Подпись для заглушки",name:"text",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Заблокированное состояние",name:"disabled",required:!1,type:{name:"boolean"}},error:{defaultValue:{value:"false"},description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}},block:{defaultValue:{value:"false"},description:"Растягивать ли компонент на всю ширину",name:"block",required:!1,type:{name:"boolean"}},overlayVisible:{defaultValue:null,description:"@deprecated (используйте Overlay)\nПозволяет вручную управлять видимостью заглушки",name:"overlayVisible",required:!1,type:{name:"boolean"}},Overlay:{defaultValue:{value:"({ text = 'Перетащите файлы', visible = false }) => (\n    <div\n        className={cn(styles.overlay, {\n            [styles.visible]: visible,\n        })}\n    >\n        <ContainerMIcon />\n        <span className={styles.text}>{text}</span>\n    </div>\n)"},description:"Компонент оверлея",name:"Overlay",required:!1,type:{name:"ComponentType<OverlayProps>"}},onDrop:{defaultValue:null,description:"Обработчик события 'drop'",name:"onDrop",required:!1,type:{name:"(files: File[]) => void"}},onDragOver:{defaultValue:null,description:"Обработчик события 'dragover'",name:"onDragOver",required:!1,type:{name:"(event: React.DragEvent<HTMLElement>) => void"}},onDragLeave:{defaultValue:null,description:"Обработчик события 'dragleave'",name:"onDragLeave",required:!1,type:{name:"(event: React.DragEvent<HTMLElement>) => void"}},onDragEnter:{defaultValue:null,description:"Обработчик события 'dragenter'",name:"onDragEnter",required:!1,type:{name:"(event: React.DragEvent<HTMLElement>) => void"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Дочерние элементы.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/dropzone/src/Component.tsx#Dropzone"]={docgenInfo:Dropzone.__docgenInfo,name:"Dropzone",path:"packages/dropzone/src/Component.tsx#Dropzone"})}catch(__react_docgen_typescript_loader_error){}},"./packages/screenshot-utils/screenshots-story/utils.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{DO:function(){return isJsonObj},FX:function(){return stylesStringToObj},Ph:function(){return getQueryParam},Qh:function(){return parseKnobs}});var _home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),queryParams=__webpack_require__("./node_modules/querystring/index.js").parse(document.location.search),getQueryParam=function(param){var parse=arguments.length>1&&void 0!==arguments[1]&&arguments[1],value=queryParams[param];return parse?parseValue(value):value},parseKnobs=function(){return Object.entries(queryParams).reduce(function(acc,_ref){var _ref2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,2),k=_ref2[0],v=_ref2[1];return k.startsWith("knob-")&&(acc[k.replace("knob-","")]=parseValue(v)),acc},{})};function parseValue(value){if(value){if(["true","false"].includes(value))return"true"===value;if(!Number.isNaN(+value)&&!Number.isNaN(parseFloat(value)))return parseFloat(value);try{return JSON.parse(value)}catch(e){return value}}}function stylesStringToObj(){var str=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(!str)return{};var properties=str.split(";").map(function(v){return v.trim()}),obj={};return properties.forEach(function(property){var _property$split$map=property.split(":").map(function(v){return v.trim()}),_property$split$map2=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_property$split$map,2),name=_property$split$map2[0],val=_property$split$map2[1];obj[name]=val}),obj}function isJsonObj(str){try{var ret=JSON.parse(str);return"object"==typeof ret}catch(e){return!1}}}}]);