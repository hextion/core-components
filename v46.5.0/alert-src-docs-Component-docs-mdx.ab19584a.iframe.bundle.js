"use strict";(self.webpackChunk_alfalab_core_components=self.webpackChunk_alfalab_core_components||[]).push([[6178,3979],{"./packages/alert/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},alert:function(){return alert}});var _alert$parameters,_alert$parameters2,_alert$parameters2$do,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/button/modern/index.js"),_alfalab_core_components_alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/alert/modern/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Deprecated components/Alert",component:_alfalab_core_components_alert__WEBPACK_IMPORTED_MODULE_3__.Alert,id:"Alert"},alert={name:"Alert",render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_alert__WEBPACK_IMPORTED_MODULE_3__.Alert,{view:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.select)("view",["common","negative","positive","attention"],"common"),title:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("title",""),hasCloser:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("hasCloser",!1),buttons:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.boolean)("buttons",!1)?[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{children:"Хорошо"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_alfalab_core_components_button__WEBPACK_IMPORTED_MODULE_2__.Button,{children:"Подробнее"})]:null,children:(0,_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__.text)("children","Вам одобрено. Согласитесь на предложение")})}};__webpack_exports__.default=meta,alert.parameters=(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},alert.parameters),{},{docs:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)((0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({},null===(_alert$parameters=alert.parameters)||void 0===_alert$parameters?void 0:_alert$parameters.docs),{},{source:(0,_home_runner_work_core_components_core_components_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_5__.Z)({originalSource:"{\n  name: 'Alert',\n  render: () => <Alert view={select('view', ['common', 'negative', 'positive', 'attention'], 'common')} title={text('title', '')} hasCloser={boolean('hasCloser', false)} buttons={boolean('buttons', false) ? [<Button>Хорошо</Button>, <Button>Подробнее</Button>] : null}>\n            {text('children', 'Вам одобрено. Согласитесь на предложение')}\n        </Alert>\n}"},null===(_alert$parameters2=alert.parameters)||void 0===_alert$parameters2?void 0:null===(_alert$parameters2$do=_alert$parameters2.docs)||void 0===_alert$parameters2$do?void 0:_alert$parameters2$do.source)})});let __namedExportsOrder=["alert"]},"./packages/alert/src/docs/Component.docs.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return Component_docs}}),__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),Component_stories=__webpack_require__("./packages/alert/src/docs/Component.stories.tsx"),esm=__webpack_require__("./node_modules/@alfalab/core-components/plate/esm/index.js"),link_esm=__webpack_require__("./node_modules/@alfalab/core-components/link/esm/index.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(esm.h,{view:"attention",titleView:"light",limitContentWidth:!1,title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Компонент больше не поддерживается, переходите на новый компонент"," ",(0,jsx_runtime.jsx)(link_esm.r,{href:"https://core-ds.github.io/core-components/master/?path=/docs/plate--docs",children:"Plate."})]})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"пример",children:"Пример"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Компонент с серой подложкой используется для \xabбесконечных списков\xbb. Например, для истории операций или списка писем."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Alert>Вам одобрено. Согласитесь на предложение</Alert>\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},src=__webpack_require__("./packages/alert/src/index.ts");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключение",children:"Подключение"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Alert } from '@alfalab/core-components/alert';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:src.Alert})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_docs_createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{of:Component_stories}),"\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Alert",children:"Информирует пользователя о текущем состоянии системы или сообщает какую-либо важную информацию."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# Change Log\n\n## 4.1.25\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.11\n\n## 4.1.24\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.10\n\n## 4.1.23\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.9\n\n## 4.1.22\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.8\n\n## 4.1.21\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.7\n\n## 4.1.20\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.6\n\n## 4.1.19\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.5\n\n## 4.1.18\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.4\n\n## 4.1.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.3\n\n## 4.1.16\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.2\n\n## 4.1.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.1\n\n## 4.1.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.3.0\n\n## 4.1.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.2.0\n\n## 4.1.12\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.1.3\n\n## 4.1.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.1.2\n\n## 4.1.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.1.1\n\n## 4.1.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.1.0\n\n## 4.1.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.0.8\n\n## 4.1.7\n\n### Patch Changes\n\n### [#868](https://github.com/core-ds/core-components/pull/868)\n\n-   Исправлены цвета бордера в соответствии с макетом\n\n-   Обновлены зависимости\n    -   plate@7.0.7\n\n## 4.1.6\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.0.6\n\n## 4.1.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.0.5\n\n## 4.1.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.0.4\n\n## 4.1.3\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.0.3\n\n## 4.1.2\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.0.2\n\n## 4.1.1\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.0.1\n\n## 4.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@7.0.0\n\n## 4.0.28\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n-   Обновлены зависимости\n    -   plate@6.3.20\n\n## 4.0.27\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.19\n\n## 4.0.26\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.18\n\n## 4.0.25\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.17\n\n## 4.0.24\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.16\n\n## 4.0.23\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.15\n\n## 4.0.22\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.14\n\n## 4.0.21\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n-   Обновлены зависимости\n    -   plate@6.3.13\n\n## 4.0.20\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.12\n\n## 4.0.19\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.11\n\n## 4.0.18\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n-   Обновлены зависимости\n    -   plate@6.3.10\n\n## 4.0.17\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.9\n\n## 4.0.16\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.8\n\n## 4.0.15\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.7\n\n## 4.0.14\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.6\n\n## 4.0.13\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.5\n\n## 4.0.12\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\n-   Обновлены зависимости\n    -   plate@6.3.4\n\n## 4.0.11\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.3\n\n## 4.0.10\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.2\n\n## 4.0.9\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.1\n\n## 4.0.8\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   plate@6.3.0\n\n## 4.0.7\n\n### Patch Changes\n\n### [#292](https://github.com/core-ds/core-components/pull/292)\n\n-   Новые стили кнопок в теме default\n-   Новый вид состояния loading во всех темах (Loader заменён на Spinner)<br />\n-   Исправлена высота кнопки ghost в размерах s/m/l/xl (увеличилась на 4px)<br />\n-   Исправлена ширина кнопок secondary/tertiary (уменьшилась на 2px)<br />\n\n-   Обновлены зависимости\n    -   plate@6.2.2\n\n## 4.0.6\n\n### Patch Changes\n\n-   @alfalab/core-components-plate@6.2.1\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [4.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@4.0.4...@alfalab/core-components-alert@4.0.5) (2022-09-13)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [4.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@4.0.3...@alfalab/core-components-alert@4.0.4) (2022-09-12)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [4.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@4.0.2...@alfalab/core-components-alert@4.0.3) (2022-09-02)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [4.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@4.0.1...@alfalab/core-components-alert@4.0.2) (2022-08-31)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [4.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@4.0.0...@alfalab/core-components-alert@4.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n# [4.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.4.0...@alfalab/core-components-alert@4.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n# [3.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.3.1...@alfalab/core-components-alert@3.4.0) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n### Features\n\n-   **plate:** subAddons slot, on/off border&shadow&borderRadius, new view 'custom' ([#158](https://github.com/core-ds/core-components/issues/158)) ([b2fc570](https://github.com/core-ds/core-components/commit/b2fc5703f083d493f0e5222d9a1f752cac190dbf)), closes [#161](https://github.com/core-ds/core-components/issues/161)\n\n## [3.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.3.0...@alfalab/core-components-alert@3.3.1) (2022-08-11)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n# [3.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.2.4...@alfalab/core-components-alert@3.3.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [3.2.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.2.3...@alfalab/core-components-alert@3.2.4) (2022-07-25)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.2.2...@alfalab/core-components-alert@3.2.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.2.1...@alfalab/core-components-alert@3.2.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [3.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.2.0...@alfalab/core-components-alert@3.2.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n# [3.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.1.6...@alfalab/core-components-alert@3.2.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [3.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.1.5...@alfalab/core-components-alert@3.1.6) (2022-06-23)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.1.4...@alfalab/core-components-alert@3.1.5) (2022-06-03)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.1.3...@alfalab/core-components-alert@3.1.4) (2022-06-03)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.0.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.0.8...@alfalab/core-components-alert@3.0.9) (2022-02-15)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.0.7...@alfalab/core-components-alert@3.0.8) (2022-02-09)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.0.6...@alfalab/core-components-alert@3.0.7) (2022-02-03)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.0.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.0.5...@alfalab/core-components-alert@3.0.6) (2022-02-02)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.0.4...@alfalab/core-components-alert@3.0.5) (2021-12-29)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.0.3...@alfalab/core-components-alert@3.0.4) (2021-12-14)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.0.2...@alfalab/core-components-alert@3.0.3) (2021-12-08)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.0.1...@alfalab/core-components-alert@3.0.2) (2021-12-08)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@3.0.0...@alfalab/core-components-alert@3.0.1) (2021-12-08)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@2.0.9...@alfalab/core-components-alert@3.0.0) (2021-11-26)\n\n### Features\n\n-   **button:** добавлена кнопка размера 40px, изменены скругления ([#886](https://github.com/core-ds/core-components/issues/886)) ([88e657a](https://github.com/core-ds/core-components/commit/88e657a9f0f68b8b58f6e9437053954ee984f83c)), closes [#890](https://github.com/core-ds/core-components/issues/890)\n\n### BREAKING CHANGES\n\n-   **button:** Кнопка размера xs теперь имеет размер 40px. Тем, кто использовал размер xs, надо\n    заменить размер на xxs. Можно воспользоваться codemod.\n\n-   feat(codemod): add button xs to xxs transformer\n\n-   feat(tag): добавлен тэг размера 40px, изменены отступы\n\nДобавлен тэг размером 40px, изменены отступы. Тем, кто использовал размер xs, надо заменить размер\nна xxs.\n\n-   **button:** Тэг размера xs теперь имеет размер 40px. Тем, кто использовал размер xs, надо\n    заменить размер на xxs. Можно воспользоваться codemod.\n\n-   test: update screenshots\n\n-   test: update screenshots\n\n-   feat(button): linter fix\n\n-   feat(button): fix min-width\n\n-   feat(tag): remove vertical paddings\n\n-   feat(tag): remove vertical paddings\n\n-   feat(button): updates\n\n## [2.0.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@2.0.8...@alfalab/core-components-alert@2.0.9) (2021-09-14)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [2.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@2.0.7...@alfalab/core-components-alert@2.0.8) (2021-08-27)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [2.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@2.0.6...@alfalab/core-components-alert@2.0.7) (2021-08-23)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [2.0.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@2.0.5...@alfalab/core-components-alert@2.0.6) (2021-08-23)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [2.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@2.0.4...@alfalab/core-components-alert@2.0.5) (2021-08-11)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [2.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@2.0.3...@alfalab/core-components-alert@2.0.4) (2021-08-04)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [2.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@2.0.2...@alfalab/core-components-alert@2.0.3) (2021-07-23)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [2.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@2.0.1...@alfalab/core-components-alert@2.0.2) (2021-07-19)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@2.0.0...@alfalab/core-components-alert@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.10...@alfalab/core-components-alert@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.1.10](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.9...@alfalab/core-components-alert@1.1.10) (2021-06-04)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [1.1.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.8...@alfalab/core-components-alert@1.1.9) (2021-05-31)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [1.1.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.7...@alfalab/core-components-alert@1.1.8) (2021-05-25)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [1.1.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.6...@alfalab/core-components-alert@1.1.7) (2021-05-25)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [1.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.5...@alfalab/core-components-alert@1.1.6) (2021-05-18)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [1.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.4...@alfalab/core-components-alert@1.1.5) (2021-05-07)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [1.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.3...@alfalab/core-components-alert@1.1.4) (2021-04-28)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [1.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.2...@alfalab/core-components-alert@1.1.3) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [1.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.1...@alfalab/core-components-alert@1.1.2) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n## [1.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-alert@1.1.0...@alfalab/core-components-alert@1.1.1) (2021-03-30)\n\n**Note:** Version bump only for package @alfalab/core-components-alert\n\n# 1.1.0 (2021-03-24)\n\n### Features\n\n-   **alert:** add component ([#548](https://github.com/core-ds/core-components/issues/548)) ([264cbf8](https://github.com/core-ds/core-components/commit/264cbf8f7465d2ecaf043bf0f67530e040fc83f6))\n"}),development:(0,jsx_runtime.jsx)(development,{})})]})}var Component_docs=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(Component_docs_createMdxContent,props)})):Component_docs_createMdxContent(props)}},"./packages/alert/src/index.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:function(){return Alert}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/plate/modern/index.js"),index_module={component:"component_aJ3S4",title:"title_qFP8u"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["className","title"],Alert=function(_ref){var className=_ref.className,title=_ref.title,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded);return(0,jsx_runtime.jsx)(modern.Plate,(0,objectSpread2.Z)({className:classnames_default()(index_module.component,className),title:title?(0,jsx_runtime.jsx)("span",{className:index_module.title,children:title}):null,rounded:!1,limitContentWidth:!1},restProps))};try{Alert.displayName="Alert",Alert.__docgenInfo={description:"",displayName:"Alert",props:{onClick:{defaultValue:null,description:"Обработчик клика по плашке",name:"onClick",required:!1,type:{name:"((event?: MouseEvent<HTMLDivElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"Заголовок компонента",name:"title",required:!1,type:{name:"ReactNode"}},children:{defaultValue:null,description:"Дочерние элементы",name:"children",required:!1,type:{name:"ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},breakpoint:{defaultValue:{value:"1024"},description:"Контрольная точка, с нее начинается desktop версия",name:"breakpoint",required:!1,type:{name:"number"}},view:{defaultValue:null,description:"Вид компонента",name:"view",required:!1,type:{name:"enum",value:[{value:'"negative"'},{value:'"positive"'},{value:'"attention"'},{value:'"common"'},{value:'"custom"'}]}},contentClassName:{defaultValue:null,description:"Дополнительный класс для контента",name:"contentClassName",required:!1,type:{name:"string"}},rounded:{defaultValue:null,description:"Включить/выключить скругление",name:"rounded",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Обработчик клика по крестику",name:"onClose",required:!1,type:{name:"((event?: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}},hasCloser:{defaultValue:null,description:"Управление наличием закрывающего крестика",name:"hasCloser",required:!1,type:{name:"boolean"}},rowLimit:{defaultValue:null,description:"Количество строк",name:"rowLimit",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:"3"}]}},border:{defaultValue:null,description:"Включить/Выключить обводку",name:"border",required:!1,type:{name:"boolean"}},onToggle:{defaultValue:null,description:"Обработчик сворачивания",name:"onToggle",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent> | KeyboardEvent<HTMLElement>, payload: { folded: boolean; }) => void)"}},shadow:{defaultValue:null,description:"Включить/выключить тени",name:"shadow",required:!1,type:{name:"boolean"}},folded:{defaultValue:null,description:"Управление видимостью контента (controlled)",name:"folded",required:!1,type:{name:"boolean"}},subAddons:{defaultValue:null,description:"Слот для субаддонов (слева от крестика)",name:"subAddons",required:!1,type:{name:"ReactNode | ReactElement<ButtonProps, string | JSXElementConstructor<any>>[]"}},limitContentWidth:{defaultValue:null,description:"Включить/выключить ограничение максимальной ширины контента в 560px",name:"limitContentWidth",required:!1,type:{name:"boolean"}},titleView:{defaultValue:null,description:"Вид заголовка",name:"titleView",required:!1,type:{name:"enum",value:[{value:'"bold"'},{value:'"light"'}]}},buttons:{defaultValue:null,description:"Набор действий",name:"buttons",required:!1,type:{name:"ReactNode | ReactElement<ButtonProps, string | JSXElementConstructor<any>>[]"}},buttonsClassName:{defaultValue:null,description:"Дополнительный класс для кнопок",name:"buttonsClassName",required:!1,type:{name:"string"}},subAddonsClassName:{defaultValue:null,description:"Дополнительный класс для субаддонов",name:"subAddonsClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/alert/src/Component.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"packages/alert/src/Component.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}}}]);