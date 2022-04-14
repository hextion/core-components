"use strict";(self.webpackChunk_alfalab_core_components_repository=self.webpackChunk_alfalab_core_components_repository||[]).push([[2140],{"./packages/spinner/src/docs/Component.stories.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},preset:function(){return preset},spinner:function(){return spinner}});var react=__webpack_require__("./node_modules/react/index.js"),mdx_react_shim=__webpack_require__("./node_modules/@storybook/addon-docs/dist/shims/mdx-react-shim.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),addon_knobs_dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),blocks=__webpack_require__("./.storybook/blocks/index.ts"),modern=__webpack_require__("./dist/spinner/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){let _components=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",a:"a"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"примеры",children:"Примеры"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"У компонента есть стандартные размеры: 16, 24 и 48px."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"const PRESETS = [16, 24, 48];\n\nrender(\n    <Container>\n        <Row align='middle'>\n            {PRESETS.map((preset) => (\n                <div key={preset} style={{ marginRight: 20 }}>\n                    <Spinner visible={true} preset={preset} />\n                </div>\n            ))}\n        </Row>\n    </Container>,\n);\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"кастомизация",children:"Кастомизация"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"Спиннеру можно задать кастомную высоту, цвет, толщину линии и отступы внутри контейнера."}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'\nrender(\n    <Container>\n        <Row align=\'middle\'>\n            <div style={{ marginRight: 20 }}>\n                <Spinner visible={true} size={28} lineWidth={4} style={{ padding: "var(--gap-2)", color: "var(--color-light-decorative-text-red)" }} />\n            </div>\n            <div style={{ marginRight: 20 }}>\n                <Spinner visible={true} size={24} lineWidth={2} style={{ padding: "var(--gap-4)", color: "var(--color-light-decorative-text-blue)" }} />\n            </div>\n        </Row>\n    </Container>,\n);\n'})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование-в-других-компонентах",children:"Использование в других компонентах"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Часто используется в ",(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/button--docs",children:"Button"}),"."]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{live:!0,children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"    <Container>\n        <div style={{marginBottom: 20}}>\n            <Button view=\"primary\" loading={true} size='m'>\n               Label\n            </Button>\n        </div>\n        <div>\n            <Button leftAddons={<Spinner visible={true} preset={24} />} size='m'>\n                Дела делаются\n            </Button>\n        </div>\n    </Container>\n//MOBILE\n    <Container>\n        <Button view=\"primary\" block={true} loading={true} size='m'>\n            Label\n        </Button>\n        <br/>\n        <Button block={true} leftAddons={<Spinner visible={true} preset={24} />} size='m'>\n            Дела делаются\n        </Button>\n    </Container>\n"})})]})}var description=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)},Component=__webpack_require__("./packages/spinner/src/Component.tsx");function development_createMdxContent(props){let _components=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(_components.h2,{id:"подключениe",children:"Подключениe"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"import { Spinner } from '@alfalab/core-components/spinner';\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"использование",children:"Использование"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Spinner size={20} lineWidth={2} {...restProps} />\n"})}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"или преднастроенный вариант"}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:"<Spinner preset={48} {...restProps} />\n"})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"свойства",children:"Свойства"}),"\n",(0,jsx_runtime.jsx)(dist.Ed,{of:Component.$}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"переменные",children:"Переменные"}),"\n",(0,jsx_runtime.jsx)(blocks.ZV,{css:"@import '../../vars/src/index.css';\n\n:root {\n    --spinner-display-visible: inline-block;\n    --spinner-animation-duration: 0.8s;\n    --spinner-animation-timing-function: linear;\n\n    /* default */\n    --spinner-default-color: var(--color-light-neutral-translucent-1300);\n\n    /* inverted */\n    --spinner-inverted-color: var(--color-light-neutral-translucent-1300-inverted);\n}\n"})]})}var development=function(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(development_createMdxContent,props)})):development_createMdxContent(props)};function Component_stories_createMdxContent(props){let _components=Object.assign({div:"div"},(0,mdx_react_shim.useMDXComponents)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Components/Spinner",component:modern.Spinner,id:"Spinner"}),"\n","\n",(0,jsx_runtime.jsx)(dist.oG,{name:"Spinner",children:react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Spinner,{size:(0,addon_knobs_dist.number)("size",20),lineWidth:(0,addon_knobs_dist.number)("lineWidth",2),visible:(0,addon_knobs_dist.boolean)("visible",!0),colors:colors,style:(0,addon_knobs_dist.object)("style",{})})})})}),"\n",(0,jsx_runtime.jsx)(dist.oG,{name:"Preset",children:react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)(_components.div,{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Spinner,{preset:(0,addon_knobs_dist.select)("preset",[16,24,48],24),visible:(0,addon_knobs_dist.boolean)("visible",!0),colors:colors})})})}),"\n","\n",(0,jsx_runtime.jsx)(blocks.yt,{name:"Spinner",children:"Используется для индикации выполнения команды пользователя."}),"\n",(0,jsx_runtime.jsx)(blocks.mQ,{description:(0,jsx_runtime.jsx)(description,{}),development:(0,jsx_runtime.jsx)(development,{}),changelog:(0,jsx_runtime.jsx)(dist.UG,{children:"# @alfalab/core-components-spinner\n\n## 4.0.5\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.16.0\n\n## 4.0.4\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.15.0\n\n## 4.0.3\n\n### Patch Changes\n\n<sup><time>09.01.2025</time></sup>\n\n### [#1461](https://github.com/core-ds/core-components/pull/1461)\n\n-   Обновление зависимостей\n\n## 4.0.2\n\n### Patch Changes\n\n<sup><time>26.12.2024</time></sup>\n\n### [#1502](https://github.com/core-ds/core-components/pull/1502)\n\n-   Апдейт версий пакетов (в них починена сборка esm-версии): @alfalab/data, @alfalab/hooks, @alfalab/utils\n\n-   Обновлены зависимости\n    -   shared@0.14.1\n\n## 4.0.1\n\n### Patch Changes\n\n<sup><time>13.12.2024</time></sup>\n\n### [#1478](https://github.com/core-ds/core-components/pull/1478)\n\n-   Вендор classnames обновлён 2.3.1 -> 2.5.1\n\n<sup><time>13.12.2024</time></sup>\n\n### [#1491](https://github.com/core-ds/core-components/pull/1491)\n\n-   Добавлено sideEffects: false в package.json. Помогает бандлерам убирать неиспользуемые части кода при сборке (treeshake). Часть 3.\n\n## 4.0.0\n\n### Major Changes\n\n<sup><time>18.11.2024</time></sup>\n\n### [#1332](https://github.com/core-ds/core-components/pull/1332)\n\nКрупное обновление Спиннера\n\n-   Обновленный вид спиннера.\n-   Добавлены новые пропсы для тонкой настройки внешнего вида:\n    -   `preset` - преднастроенный вариант спиннера;\n    -   `size` - теперь отвечает за размер кольца спиннера;\n    -   `lineWidth` - толщина линии спиннера;\n    -   `style` - позволяет регулировать отступы, цвет и т.п.\n-   Добавлен [`codemod`](https://www.npmjs.com/package/@alfalab/core-components-codemod/v/2.7.0) для бесшовной миграции `Spinner`:\n    ```bash\n    npx @alfalab/core-components-codemod --transformers=spinner --glob='src/**/*.tsx'\n    ```\n    | Внимание                                                                                                                                                                                           |\n    | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\n    | `codemod` может не работать в случаях использования [Spread Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals) в коде. |\n\n### Patch Changes\n\n-   Обновлены зависимости\n    -   shared@0.14.0\n\n## 3.5.0\n\n### Minor Changes\n\n<sup><time>10.09.2024</time></sup>\n\n### [#1347](https://github.com/core-ds/core-components/pull/1347)\n\n-   Добавлена сборка moderncssm (ES2020, esm, сырые css-модули, отключен импорт базовых токенов)\n\n## 3.4.0\n\n### Minor Changes\n\n<sup><time>05.07.2024</time></sup>\n\n### [#1277](https://github.com/core-ds/core-components/pull/1277)\n\n-   Исправили ширину и высоту для размера '16' с 18px на 16px\n\n## 3.3.1\n\n### Patch Changes\n\n<sup><time>13.06.2024</time></sup>\n\n### [#1229](https://github.com/core-ds/core-components/pull/1229)\n\n-   Изменили цветовые токены: color-light-neutral-1500 -> color-light-neutral-translucent-1300, color-light-neutral-1500-inverted -> color-light-neutral-translucent-1300-inverted, color-static-neutral-1500 -> color-static-neutral-translucent-1300, color-static-neutral-1500-inverted -> color-static-neutral-translucent-1300-inverted\n\n## 3.3.0\n\n### Minor Changes\n\n<sup><time>12.02.2024</time></sup>\n\n### [#1030](https://github.com/core-ds/core-components/pull/1030)\n\n-   Добавлены новые способы указать размеры - 16, 24, 48. Буквенные значения размеров xs, s, m теперь deprecated, используйте вместо них 16, 24, 48 соответственно\n\n## 3.2.0\n\n### Minor Changes\n\n### [#931](https://github.com/core-ds/core-components/pull/931)\n\n-   В компонентах ActionButton, Badge, IconButton, InternationalPhoneInput, PickerButton, Spinner, StepperInput, UniversalDateInput цветовые токены изменены на новые (синхронизация и обновление цветовых токенов в рамках перевода их значений на базовую палитру)\n\n## 3.1.0\n\n### Minor Changes\n\n### [#713](https://github.com/core-ds/core-components/pull/713)\n\n-   Теперь каждый пакет публикуется с исходниками\n\n## 3.0.7\n\n### Patch Changes\n\n### [#766](https://github.com/core-ds/core-components/pull/766)\n\n-   Удален скрипт отправки статистики (send-stats)\n\n## 3.0.6\n\n### Patch Changes\n\n### [#676](https://github.com/core-ds/core-components/pull/676)\n\n-   Обновлена зависимость @alfalab/hooks\n\n## 3.0.5\n\n### Patch Changes\n\n### [#588](https://github.com/core-ds/core-components/pull/588)\n\n-   Добавлен \\_\\_esModule в cjs экспорт\n\n## 3.0.4\n\n### Patch Changes\n\n### [#526](https://github.com/core-ds/core-components/pull/526)\n\n-   В зависимости добавлена библиотека tslib\n\n## 3.0.3\n\n### Patch Changes\n\n### [#418](https://github.com/core-ds/core-components/pull/418)\n\n-   Исправлена проблема с default-импортом в cjs форматах\n\nAll notable changes to this project will be documented in this file.\nSee [Conventional Commits](https://conventionalcommits.org) for commit guidelines.\n\n## [3.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@3.0.1...@alfalab/core-components-spinner@3.0.2) (2022-09-12)\n\n### Bug Fixes\n\n-   renamed default classnames ([#198](https://github.com/core-ds/core-components/issues/198)) ([bf22bba](https://github.com/core-ds/core-components/commit/bf22bbafbd16c14804316cba25a4026b85dde2f7))\n\n## [3.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@3.0.0...@alfalab/core-components-spinner@3.0.1) (2022-08-19)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n# [3.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.3.1...@alfalab/core-components-spinner@3.0.0) (2022-08-17)\n\n### Features\n\n-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))\n\n### BREAKING CHANGES\n\n-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена\n    директория dist)\n\nCo-authored-by: Vladimir Gevak <VGevak@alfabank.ru>\n\n## [2.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.3.0...@alfalab/core-components-spinner@2.3.1) (2022-08-17)\n\n### Bug Fixes\n\n-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))\n\n# [2.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.3...@alfalab/core-components-spinner@2.3.0) (2022-08-04)\n\n### Features\n\n-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))\n\n## [2.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.2...@alfalab/core-components-spinner@2.2.3) (2022-07-18)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [2.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.1...@alfalab/core-components-spinner@2.2.2) (2022-07-15)\n\n### Bug Fixes\n\n-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))\n\n## [2.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.2.0...@alfalab/core-components-spinner@2.2.1) (2022-07-14)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n# [2.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.1.0...@alfalab/core-components-spinner@2.2.0) (2022-07-11)\n\n### Features\n\n-   **spinner:** new size & inverted theme ([#123](https://github.com/core-ds/core-components/issues/123)) ([5568ab5](https://github.com/core-ds/core-components/commit/5568ab5183badaded723ebc5a608b20bf471c6bc))\n\n# [2.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.0.3...@alfalab/core-components-spinner@2.1.0) (2022-06-28)\n\n### Features\n\n-   circumflexus retrieval ([#57](https://github.com/core-ds/core-components/issues/57)) ([3820da8](https://github.com/core-ds/core-components/commit/3820da818bcdcbee6904c648b3e29c3c828fe202))\n\n## [2.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@2.0.0...@alfalab/core-components-spinner@2.0.1) (2021-07-09)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n# [2.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.9...@alfalab/core-components-spinner@2.0.0) (2021-07-08)\n\n### Features\n\n-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))\n\n## [1.0.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.8...@alfalab/core-components-spinner@1.0.9) (2021-04-26)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.7...@alfalab/core-components-spinner@1.0.8) (2021-04-01)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.5...@alfalab/core-components-spinner@1.0.7) (2021-03-18)\n\n### Bug Fixes\n\n-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))\n\n## [1.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.4...@alfalab/core-components-spinner@1.0.5) (2021-03-14)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.3...@alfalab/core-components-spinner@1.0.4) (2021-03-04)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n\n## [1.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-spinner@1.0.2...@alfalab/core-components-spinner@1.0.3) (2021-03-03)\n\n**Note:** Version bump only for package @alfalab/core-components-spinner\n"})})]})}function Component_stories_MDXContent(props={}){let{wrapper:MDXLayout}=Object.assign({},(0,mdx_react_shim.useMDXComponents)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(Component_stories_createMdxContent,{...props})}):Component_stories_createMdxContent(props)}let spinner=()=>react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Spinner,{size:(0,addon_knobs_dist.number)("size",20),lineWidth:(0,addon_knobs_dist.number)("lineWidth",2),visible:(0,addon_knobs_dist.boolean)("visible",!0),colors:colors,style:(0,addon_knobs_dist.object)("style",{})})})});spinner.storyName="Spinner",spinner.parameters={storySource:{source:'React.createElement(() => {\n  const colors = select("colors", ["default", "inverted"], "default");\n  return <div style={{\n    backgroundColor: colors === "inverted" ? "var(--color-light-base-bg-primary-inverted)" : "transparent",\n    padding: "8px",\n    position: "absolute",\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0\n  }}>\n                <Spinner size={number("size", 20)} lineWidth={number("lineWidth", 2)} visible={boolean("visible", true)} colors={colors} style={object("style", {})} />\n            </div>;\n})'}};let preset=()=>react.createElement(()=>{let colors=(0,addon_knobs_dist.select)("colors",["default","inverted"],"default");return(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"inverted"===colors?"var(--color-light-base-bg-primary-inverted)":"transparent",padding:"8px",position:"absolute",top:0,left:0,right:0,bottom:0},children:(0,jsx_runtime.jsx)(modern.Spinner,{preset:(0,addon_knobs_dist.select)("preset",[16,24,48],24),visible:(0,addon_knobs_dist.boolean)("visible",!0),colors:colors})})});preset.storyName="Preset",preset.parameters={storySource:{source:'React.createElement(() => {\n  const colors = select("colors", ["default", "inverted"], "default");\n  return <div style={{\n    backgroundColor: colors === "inverted" ? "var(--color-light-base-bg-primary-inverted)" : "transparent",\n    padding: "8px",\n    position: "absolute",\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0\n  }}>\n                <Spinner preset={select("preset", [16, 24, 48], 24)} visible={boolean("visible", true)} colors={colors} />\n            </div>;\n})'}};let componentMeta={title:"Components/Spinner",id:"Spinner",component:modern.Spinner,tags:["stories-mdx"],includeStories:["spinner","preset"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:Component_stories_MDXContent};var Component_stories=componentMeta;let __namedExportsOrder=["spinner","preset"]},"./packages/spinner/src/Component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Spinner}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),modern=__webpack_require__("./dist/shared/modern/index.js"),hook=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/useId/hook.js"),preset_module={preset16:"preset16_OgyPy",preset24:"preset24_yDZsP",preset48:"preset48_Is80j"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),colorStyles={default:{component:"component_eRftq"},inverted:{component:"component_uu1gU"}},PRESET_CONFIG={16:[2,14,"preset16"],24:[2,20,"preset24"],48:[4,40,"preset48"]},Spinner=function(props){var size,lineWidth,presetClassname,style=props.style,visible=props.visible,id=props.id,className=props.className,dataTestId=props.dataTestId,_props$colors=props.colors;if((0,modern.hasOwnProperty)(props,"preset")){var config=PRESET_CONFIG[props.preset],styleKey=(0,slicedToArray.Z)(config,3)[2],_config2=(0,slicedToArray.Z)(config,2);lineWidth=_config2[0],size=_config2[1],presetClassname=preset_module[styleKey]}else size=props.size,lineWidth=props.lineWidth;var color=null==style?void 0:style.color;(0,modern.isNonNullable)(color)&&(0,modern.devWarning)("[Spinner]: Палитра, в контексте которой используется спиннер (проп 'colors') игнорируется. Используется цвет 'style.color' ".concat(color));var uniqId=(0,hook.M)(),radius=size/2-lineWidth/2,rotationAngle=Math.ceil(180*Math.asin(lineWidth/2/radius)/Math.PI),strokeDasharray="".concat(270-rotationAngle," ").concat(90+rotationAngle),gradient="conic-gradient(from ".concat(rotationAngle,"deg, transparent ").concat(90-2*rotationAngle,"deg, currentColor)");return(0,jsx_runtime.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(size," ").concat(size),style:(0,objectSpread2.Z)((0,objectSpread2.Z)({},style),{},{height:size,width:size}),className:classnames_default()("spinner_eJwLa",colorStyles[void 0===_props$colors?"default":_props$colors].component,presetClassname,className,(0,defineProperty.Z)({},"visible_w8m5L",visible)),"data-test-id":dataTestId,id:id,children:[(0,jsx_runtime.jsx)("defs",{children:(0,jsx_runtime.jsx)("mask",{id:uniqId,children:(0,jsx_runtime.jsx)("circle",{cx:"50%",cy:"50%",r:radius,strokeWidth:lineWidth,strokeLinecap:"round",stroke:"#fff",strokeDashoffset:-rotationAngle,strokeDasharray:strokeDasharray,pathLength:360})})}),(0,jsx_runtime.jsx)("foreignObject",{x:"0",y:"0",width:size,height:size,mask:"url(#".concat(uniqId,")"),children:(0,jsx_runtime.jsx)("div",{className:"gradient_biq4V",style:{backgroundImage:gradient}})})]})};try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"",displayName:"Spinner",props:{colors:{defaultValue:{value:"default"},description:"Палитра, в контексте которой используется спиннер",name:"colors",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"inverted"'}]}},visible:{defaultValue:{value:"false"},description:"Управление видимостью компонента",name:"visible",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Дополнительный класс",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Идентификатор компонента в DOM",name:"id",required:!1,type:{name:"string"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Дополнительные инлайн стили для cпиннера",name:"style",required:!1,type:{name:"React.CSSProperties"}},size:{defaultValue:null,description:"Размер спиннера (кольца)",name:"size",required:!0,type:{name:"number"}},lineWidth:{defaultValue:null,description:"Толщина линии спинера (кольца)",name:"lineWidth",required:!0,type:{name:"number"}},preset:{defaultValue:null,description:"Преднастроенный вариант",name:"preset",required:!0,type:{name:"enum",value:[{value:"48"},{value:"16"},{value:"24"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/spinner/src/Component.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"packages/spinner/src/Component.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}}}]);