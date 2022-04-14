"use strict";(self.webpackChunk_alfalab_core_components_repository=self.webpackChunk_alfalab_core_components_repository||[]).push([[8778],{"./packages/typography/src/docs/Component.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Component_stories},typography_text:function(){return typography_text},typography_title:function(){return typography_title},typography_title_mobile:function(){return typography_title_mobile},typography_title_responsive:function(){return typography_title_responsive}});var _typography_title$par,_typography_title$par2,_typography_title$par3,_typography_title_res,_typography_title_res2,_typography_title_res3,_typography_title_mob,_typography_title_mob2,_typography_title_mob3,_typography_text$para,_typography_text$para2,_typography_text$para3,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");__webpack_require__("./node_modules/react/index.js");var dist=__webpack_require__("./node_modules/@storybook/addon-knobs/dist/index.js"),modern=__webpack_require__("./dist/typography/modern/index.js"),colors=["tertiary","disabled","accent","primary","attention","positive","secondary","tertiary-inverted","primary-inverted","secondary-inverted","link","negative","static-primary-light","static-secondary-light","static-tertiary-light","static-primary-dark","static-secondary-dark","static-tertiary-dark","static-accent","static-positive"],jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),meta={title:"Components/Typography",component:modern.Typography,id:"Typography"},typography_title={name:"Typography.Title",render:function render(){var color=(0,dist.select)("color",colors,""),weight=(0,dist.select)("weight",["regular","medium","bold","semibold","-"],"-"),font=(0,dist.select)("font",["styrene","system"],"styrene");return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:["xlarge","large","medium","small","xsmall"].map(function(view){return(0,jsx_runtime.jsxs)(modern.Typography.Title,{defaultMargins:(0,dist.boolean)("defaultMargins",!1),view:view,color:color,weight:weight,font:font,children:["заголовок view='",view,"'"]},view)})})}},typography_title_responsive={name:"Typography.TitleResponsive",render:function render(){var color=(0,dist.select)("color",colors,""),weight=(0,dist.select)("weight",["regular","medium","bold","semibold","-"],"-"),font=(0,dist.select)("font",["styrene","system"],"styrene");return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:["xlarge","large","medium","small","xsmall"].map(function(view){return(0,jsx_runtime.jsxs)(modern.Typography.TitleResponsive,{defaultMargins:(0,dist.boolean)("defaultMargins",!1),view:view,color:color,weight:weight,font:font,children:["заголовок view='",view,"'"]},view)})})}},typography_title_mobile={name:"Typography.TitleMobile",render:function render(){var color=(0,dist.select)("color",colors,""),weight=(0,dist.select)("weight",["regular","medium","bold","semibold","-"],"-"),font=(0,dist.select)("font",["styrene","system"],"styrene");return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:["xlarge","large","medium","small","xsmall"].map(function(view){return(0,jsx_runtime.jsxs)(modern.Typography.TitleMobile,{view:view,color:color,weight:weight,font:font,children:["заголовок view='",view,"'"]},view)})})}},typography_text={name:"Typography.Text",render:function render(){var color=(0,dist.select)("color",colors,""),tag=(0,dist.select)("tag",["div","p","span"],"p"),weight=(0,dist.select)("weight",["regular","medium","bold",void 0],"regular"),monospace=(0,dist.boolean)("monospaceNumbers",!1),defaultMargins="p"===tag?(0,dist.boolean)("defaultMargins",!0):void 0;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:["primary-large","primary-medium","primary-small","secondary-large","secondary-medium","secondary-small","component-primary","component-secondary","caps"].map(function(view){return(0,jsx_runtime.jsxs)(modern.Typography.Text,{view:view,color:color,tag:tag,weight:weight,monospaceNumbers:monospace,defaultMargins:defaultMargins,children:[view,". Космологи́ческая сингуля́рность — состояния Вселенной в определённый момент времени в прошлом, когда плотность энергии (материи) и кривизна пространства-времени были очень велики — порядка планковских значений. 1234567890, например."]},view)})})}},Component_stories=meta;typography_title.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},typography_title.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_typography_title$par=typography_title.parameters)||void 0===_typography_title$par?void 0:_typography_title$par.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: 'Typography.Title',\n  render: () => {\n    const VIEW_TYPES = ['xlarge', 'large', 'medium', 'small', 'xsmall'];\n    const color = select('color', colors, '');\n    const weight = select('weight', ['regular', 'medium', 'bold', 'semibold', '-'], '-');\n    const font = select('font', ['styrene', 'system'], 'styrene');\n    return <>\n                {VIEW_TYPES.map(view => <Typography.Title defaultMargins={boolean('defaultMargins', false)} view={view} color={color} weight={weight} font={font} key={view}>\n                        заголовок view='{view}'\n                    </Typography.Title>)}\n            </>;\n  }\n}"},null===(_typography_title$par2=typography_title.parameters)||void 0===_typography_title$par2?void 0:null===(_typography_title$par3=_typography_title$par2.docs)||void 0===_typography_title$par3?void 0:_typography_title$par3.source)})}),typography_title_responsive.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},typography_title_responsive.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_typography_title_res=typography_title_responsive.parameters)||void 0===_typography_title_res?void 0:_typography_title_res.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: 'Typography.TitleResponsive',\n  render: () => {\n    const VIEW_TYPES = ['xlarge', 'large', 'medium', 'small', 'xsmall'];\n    const color = select('color', colors, '');\n    const weight = select('weight', ['regular', 'medium', 'bold', 'semibold', '-'], '-');\n    const font = select('font', ['styrene', 'system'], 'styrene');\n    return <>\n                {VIEW_TYPES.map(view => <Typography.TitleResponsive defaultMargins={boolean('defaultMargins', false)} view={view} color={color} weight={weight} font={font} key={view}>\n                        заголовок view='{view}'\n                    </Typography.TitleResponsive>)}\n            </>;\n  }\n}"},null===(_typography_title_res2=typography_title_responsive.parameters)||void 0===_typography_title_res2?void 0:null===(_typography_title_res3=_typography_title_res2.docs)||void 0===_typography_title_res3?void 0:_typography_title_res3.source)})}),typography_title_mobile.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},typography_title_mobile.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_typography_title_mob=typography_title_mobile.parameters)||void 0===_typography_title_mob?void 0:_typography_title_mob.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: 'Typography.TitleMobile',\n  render: () => {\n    const VIEW_TYPES = ['xlarge', 'large', 'medium', 'small', 'xsmall'];\n    const color = select('color', colors, '');\n    const weight = select('weight', ['regular', 'medium', 'bold', 'semibold', '-'], '-');\n    const font = select('font', ['styrene', 'system'], 'styrene');\n    return <>\n                {VIEW_TYPES.map(view => <Typography.TitleMobile view={view} color={color} weight={weight} font={font} key={view}>\n                        заголовок view='{view}'\n                    </Typography.TitleMobile>)}\n            </>;\n  }\n}"},null===(_typography_title_mob2=typography_title_mobile.parameters)||void 0===_typography_title_mob2?void 0:null===(_typography_title_mob3=_typography_title_mob2.docs)||void 0===_typography_title_mob3?void 0:_typography_title_mob3.source)})}),typography_text.parameters=(0,objectSpread2.Z)((0,objectSpread2.Z)({},typography_text.parameters),{},{docs:(0,objectSpread2.Z)((0,objectSpread2.Z)({},null===(_typography_text$para=typography_text.parameters)||void 0===_typography_text$para?void 0:_typography_text$para.docs),{},{source:(0,objectSpread2.Z)({originalSource:"{\n  name: 'Typography.Text',\n  render: () => {\n    const VIEW_TYPES = ['primary-large', 'primary-medium', 'primary-small', 'secondary-large', 'secondary-medium', 'secondary-small', 'component-primary', 'component-secondary', 'caps'];\n    const color = select('color', colors, '');\n    const tag = select('tag', ['div', 'p', 'span'], 'p');\n    const weight = select('weight', ['regular', 'medium', 'bold', undefined], 'regular');\n    const monospace = boolean('monospaceNumbers', false);\n    const defaultMargins = tag === 'p' ? boolean('defaultMargins', true) : undefined;\n    return <>\n                {VIEW_TYPES.map(view => <Typography.Text view={view} color={color} tag={tag} weight={weight} monospaceNumbers={monospace} key={view} defaultMargins={defaultMargins}>\n                        {view}. Космологи́ческая сингуля́рность — состояния Вселенной в определённый\n                        момент времени в прошлом, когда плотность энергии (материи) и кривизна\n                        пространства-времени были очень велики — порядка планковских значений.\n                        1234567890, например.\n                    </Typography.Text>)}\n            </>;\n  }\n}"},null===(_typography_text$para2=typography_text.parameters)||void 0===_typography_text$para2?void 0:null===(_typography_text$para3=_typography_text$para2.docs)||void 0===_typography_text$para3?void 0:_typography_text$para3.source)})});let __namedExportsOrder=["typography_title","typography_title_responsive","typography_title_mobile","typography_text"]}}]);