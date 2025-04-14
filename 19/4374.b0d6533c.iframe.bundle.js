"use strict";(self.webpackChunk_balafla_core_components_repository=self.webpackChunk_balafla_core_components_repository||[]).push([[4374],{"./packages/pure-cell/src/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{dy:function(){return ExtraSubtitle},sX:function(){return PureCell},OD:function(){return PureCellComponent},Gm:function(){return PureCellContext}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),react_merge_refs_esm=__webpack_require__("./node_modules/react-merge-refs/dist/react-merge-refs.esm.js"),modern=__webpack_require__("./dist/comment/modern/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hook=__webpack_require__("./node_modules/@alfalab/hooks/dist/esm/useFocus/hook.js"),component=__webpack_require__("./packages/pure-cell/src/components/addon/component.tsx"),amount_component=__webpack_require__("./packages/pure-cell/src/components/amount/component.tsx"),amount_title_component=__webpack_require__("./packages/pure-cell/src/components/amount-title/component.tsx"),category_component=__webpack_require__("./packages/pure-cell/src/components/category/component.tsx"),content_component=__webpack_require__("./packages/pure-cell/src/components/content/component.tsx"),footer_component=__webpack_require__("./packages/pure-cell/src/components/footer/component.tsx"),footer_button_component=__webpack_require__("./packages/pure-cell/src/components/footer-button/component.tsx"),shared_modern=__webpack_require__("./dist/shared/modern/index.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),graphics_component=__webpack_require__("./packages/pure-cell/src/components/graphics/component.tsx"),main_component=__webpack_require__("./packages/pure-cell/src/components/main/component.tsx"),text_component=__webpack_require__("./packages/pure-cell/src/components/text/component.tsx"),index_module={component:"component_kn8FA",horizontal:"horizontal_Etkwv",vertical:"vertical_EC3nL",button:"button_RSfCP",hover:"hover_ObaRk",active:"active_M4Cxn",link:"link_PjZd7",none:"none_REPhZ",airy:"airy_AIVoH",default:"default_DDgNq",compact:"compact_g7rsI",tiny:"tiny_Pr_Om",noneTop:"noneTop_XxpnH",airyTop:"airyTop_mlbMs",defaultTop:"defaultTop_gYD1N",compactTop:"compactTop_A9Y5s",tinyTop:"tinyTop_lvf9T",noneBottom:"noneBottom_b1ocI",airyBottom:"airyBottom_sAiLQ",defaultBottom:"defaultBottom_cOgJ5",compactBottom:"compactBottom_Q9yKf",tinyBottom:"tinyBottom_qOAYT",left:"left_awn_3",right:"right_Wftj9",both:"both_OfuoJ",focused:"focused_xiX72"},_excluded=["className","dataTestId","onClick","href","tag","children","horizontalPadding","verticalPadding","direction"],PureCellContext=react.createContext({}),PureCellComponent=(0,react.forwardRef)(function(_ref,ref){var className=_ref.className,dataTestId=_ref.dataTestId,onClick=_ref.onClick,href=_ref.href,_ref$tag=_ref.tag,Component=void 0===_ref$tag?href&&"a"||onClick&&"button"||"section":_ref$tag,children=_ref.children,_ref$horizontalPaddin=_ref.horizontalPadding,_ref$verticalPadding=_ref.verticalPadding,verticalPadding=void 0===_ref$verticalPadding?"none":_ref$verticalPadding,_ref$direction=_ref.direction,direction=void 0===_ref$direction?"horizontal":_ref$direction,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),cellRef=(0,react.useRef)(null),_useFocus=(0,hook.K)(cellRef,"keyboard"),focused=(0,slicedToArray.Z)(_useFocus,1)[0],_useState=(0,react.useState)(!1),_useState2=(0,slicedToArray.Z)(_useState,2),hoverState=_useState2[0],setHoverState=_useState2[1],_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),activeState=_useState4[0],setActiveState=_useState4[1],setHover=function(){return setHoverState(!0)},unsetHover=function(){return setHoverState(!1)},mouseEvents={onMouseEnter:setHover,onMouseLeave:unsetHover,onMouseDown:function(){return setActiveState(!0)},onMouseUp:function(){return setActiveState(!1)}},addClasses=(0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)((0,defineProperty.Z)({},index_module.component,!0),index_module.focused,focused),index_module[direction],!0),index_module[void 0===_ref$horizontalPaddin?"none":_ref$horizontalPaddin],!0),index_module.hover,hoverState),index_module.active,activeState),contextState={direction:direction,dataTestId:dataTestId,setMainHover:setHover,unsetMainHover:unsetHover};if("string"==typeof verticalPadding&&(addClasses[index_module[verticalPadding]]="string"==typeof verticalPadding),"object"==typeof verticalPadding&&(addClasses[index_module["".concat(verticalPadding.top,"Top")]]=!!verticalPadding.top,addClasses[index_module["".concat(verticalPadding.bottom,"Bottom")]]=!!verticalPadding.bottom),href){var target=restProps.target,hrefProps=(0,defineProperty.Z)({},"string"==typeof Component?"href":"to",href);return(0,jsx_runtime.jsx)(Component,(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({rel:"_blank"===target?"noreferrer noopener":void 0},restProps),hrefProps),{},{ref:(0,react_merge_refs_esm.Z)([cellRef,ref]),className:classnames_default()(index_module.link,addClasses,className),"data-test-id":dataTestId,onClick:onClick},mouseEvents),{},{children:(0,jsx_runtime.jsx)(PureCellContext.Provider,{value:contextState,children:children})}))}return onClick?(0,jsx_runtime.jsx)(Component,(0,objectSpread2.Z)((0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{ref:(0,react_merge_refs_esm.Z)([cellRef,ref]),className:classnames_default()(index_module.button,addClasses,className),"data-test-id":dataTestId,onClick:onClick},mouseEvents),{},{children:(0,jsx_runtime.jsx)(PureCellContext.Provider,{value:contextState,children:children})})):(0,jsx_runtime.jsx)(Component,(0,objectSpread2.Z)((0,objectSpread2.Z)({},restProps),{},{ref:ref,tabIndex:0,className:classnames_default()(addClasses,className),"data-test-id":dataTestId,children:(0,jsx_runtime.jsx)(PureCellContext.Provider,{value:contextState,children:children})}))}),ExtraSubtitle=function(_ref){var children=_ref.children,_ref$color=_ref.color,dataTestId=_ref.dataTestId,pureCellContext=(0,react.useContext)(PureCellContext);return(0,jsx_runtime.jsx)(typography_modern.Text,{view:"primary-small",color:void 0===_ref$color?"secondary":_ref$color,"data-test-id":(0,shared_modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"footer-title"),children:children})},PureCell=Object.assign(PureCellComponent,{Main:main_component.o,Graphics:graphics_component.T,Content:content_component.V,Text:text_component.x,Amount:amount_component.$,AmountTitle:amount_title_component.l,Addon:component.e,Footer:footer_component.$,ExtraSubtitle:ExtraSubtitle,FooterButton:footer_button_component.S,Comment:modern.Comment,Category:category_component.W});PureCellComponent.displayName="PureCellComponent";try{PureCell.displayName="PureCellComponent",PureCell.__docgenInfo={description:"Универсальный конструктор для сборки любой ячейки.\n\n[Макет](https://www.figma.com/file/KlFOLLkKO8rtvvQE3RXuhq/Click-Library?node-id=43525%3A240018)",displayName:"PureCellComponent",props:{direction:{defaultValue:{value:"horizontal"},description:"Направление",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},className:{defaultValue:null,description:"Сss класс для стилизации общей обёртки",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"Выводит ссылку в виде ячейки",name:"href",required:!1,type:{name:"string"}},verticalPadding:{defaultValue:{value:"none"},description:"Вертикальные отступы",name:"verticalPadding",required:!1,type:{name:'"default" | "none" | "airy" | "compact" | "tiny" | { top?: "default" | "none" | "airy" | "compact" | "tiny"; bottom?: "default" | "none" | "airy" | "compact" | "tiny"; }'}},horizontalPadding:{defaultValue:{value:"none"},description:"Горизонтальные отступы",name:"horizontalPadding",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"none"'},{value:'"both"'},{value:'"left"'}]}},tag:{defaultValue:null,description:"Позволяет использовать кастомный компонент для кнопки (например Link из роутера)",name:"tag",required:!1,type:{name:"ElementType<any>"}},children:{defaultValue:null,description:"Компоненты",name:"children",required:!1,type:{name:"PureCellElement & ReactNode"}},dataTestId:{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования",name:"dataTestId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pure-cell/src/component.tsx#PureCellComponent"]={docgenInfo:PureCellComponent.__docgenInfo,name:"PureCellComponent",path:"packages/pure-cell/src/component.tsx#PureCellComponent"})}catch(__react_docgen_typescript_loader_error){}},"./packages/pure-cell/src/components/addon/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{e:function(){return Addon}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/shared/modern/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component=__webpack_require__("./packages/pure-cell/src/component.tsx"),index_module={component:"component_uTdYw",none:"none_Q6Koo",default:"default_Fjj8h",addonPadding:"addonPadding_DmTfF",auto:"auto_YanNE",top:"top_suDPv",center:"center_UgsOi",bottom:"bottom_MhVN4",button:"button_y_egv"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ADDON_COMPONENT={button:"button",section:"section"},Addon=function(_ref){var children=_ref.children,_ref$verticalAlign=_ref.verticalAlign,_ref$addonPadding=_ref.addonPadding,dataTestId=_ref.dataTestId,_onClick=_ref.onClick,pureCellContext=(0,react.useContext)(component.Gm),Component=_onClick?ADDON_COMPONENT.button:ADDON_COMPONENT.section;return(0,jsx_runtime.jsx)(Component,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()("component_uTdYw",index_module[void 0===_ref$addonPadding?"default":_ref$addonPadding],index_module[void 0===_ref$verticalAlign?"top":_ref$verticalAlign],(0,defineProperty.Z)({},"button_y_egv",_onClick)),"data-test-id":(0,modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"addon")},_onClick&&{onClick:function onClick(e){e.stopPropagation(),null==_onClick||_onClick()},onMouseEnter:function onMouseEnter(){var _pureCellContext$unse;null===(_pureCellContext$unse=pureCellContext.unsetMainHover)||void 0===_pureCellContext$unse||_pureCellContext$unse.call(pureCellContext)},onMouseLeave:function onMouseLeave(){var _pureCellContext$setM;null===(_pureCellContext$setM=pureCellContext.setMainHover)||void 0===_pureCellContext$setM||_pureCellContext$setM.call(pureCellContext)},onMouseDown:function onMouseDown(e){e.stopPropagation()}}),{},{children:children}))}},"./packages/pure-cell/src/components/amount-title/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return AmountTitle}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/amount/modern/index.js"),shared_modern=__webpack_require__("./dist/shared/modern/index.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component=__webpack_require__("./packages/pure-cell/src/component.tsx"),index_module={component:"component_U0c5c",weight:"weight_Qmog0",hidden:"hidden_ehrkJ","hidden-xsmall":"hidden-xsmall_DCHyr","hidden-small":"hidden-small_O4GE8","hidden-medium":"hidden-medium_g1lh4","hidden-large":"hidden-large_cKQVi","hidden-xlarge":"hidden-xlarge_sPhZk",hiddenWrapper:"hiddenWrapper_tmj4m","hiddenWrapper-xsmall":"hiddenWrapper-xsmall_d9H9M","hiddenWrapper-small":"hiddenWrapper-small_Hd0hf","hiddenWrapper-medium":"hiddenWrapper-medium_tSpk7","hiddenWrapper-large":"hiddenWrapper-large_WzaOE","hiddenWrapper-xlarge":"hiddenWrapper-xlarge_wvul2"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["minority","minorUnits","hidden","className","color","dataTestId","titleProps"],AmountTitle=function(_ref){var minority=_ref.minority,_ref$minorUnits=_ref.minorUnits,hidden=_ref.hidden,className=_ref.className,_ref$color=_ref.color,dataTestId=_ref.dataTestId,_ref$titleProps=_ref.titleProps,titlePropsFromProps=void 0===_ref$titleProps?{}:_ref$titleProps,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),pureCellContext=(0,react.useContext)(component.Gm),titleProps=(0,objectSpread2.Z)({tag:"h4",view:"small",color:void 0===_ref$color?"primary":_ref$color},titlePropsFromProps);return hidden?(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.hiddenWrapper,index_module["hiddenWrapper-".concat(titleProps.view)]),children:(0,jsx_runtime.jsx)("div",{className:classnames_default()(index_module.hidden,index_module["hidden-".concat(titleProps.view)])})}):(0,jsx_runtime.jsx)(typography_modern.TitleResponsive,(0,objectSpread2.Z)((0,objectSpread2.Z)({},titleProps),{},{dataTestId:(0,shared_modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"amount-title"),className:classnames_default()(index_module.component,null==titlePropsFromProps?void 0:titlePropsFromProps.className),children:(0,jsx_runtime.jsx)(modern.Amount,(0,objectSpread2.Z)((0,objectSpread2.Z)({minority:minority||(void 0===_ref$minorUnits?100:_ref$minorUnits),className:classnames_default()(index_module.weight,className),dataTestId:(0,shared_modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"core-amount-title")},restProps),{},{bold:"none"}))}))}},"./packages/pure-cell/src/components/amount/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Amount}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/amount/modern/index.js"),shared_modern=__webpack_require__("./dist/shared/modern/index.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component=__webpack_require__("./packages/pure-cell/src/component.tsx"),index_module={component:"component_WZU2n",hidden:"hidden_u_9m5",hiddenWrapper:"hiddenWrapper_mvilb"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["weight","textView","color","minority","minorUnits","hidden","dataTestId"],Amount=function(_ref){var _ref$weight=_ref.weight,_ref$textView=_ref.textView,_ref$color=_ref.color,minority=_ref.minority,_ref$minorUnits=_ref.minorUnits,hidden=_ref.hidden,dataTestId=_ref.dataTestId,restProps=(0,objectWithoutProperties.Z)(_ref,_excluded),pureCellContext=(0,react.useContext)(component.Gm);return hidden?(0,jsx_runtime.jsx)("div",{className:index_module.hiddenWrapper,children:(0,jsx_runtime.jsx)("div",{className:index_module.hidden})}):(0,jsx_runtime.jsx)(typography_modern.Text,{view:void 0===_ref$textView?"component":_ref$textView,dataTestId:(0,shared_modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"amount-text"),className:classnames_default()(index_module.component),color:void 0===_ref$color?"primary":_ref$color,children:(0,jsx_runtime.jsx)(modern.Amount,(0,objectSpread2.Z)({minority:minority||(void 0===_ref$minorUnits?100:_ref$minorUnits),bold:"bold"===(void 0===_ref$weight?"normal":_ref$weight)?"full":"none",dataTestId:(0,shared_modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"amount")},restProps))})}},"./packages/pure-cell/src/components/category/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{W:function(){return Category}});var react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/shared/modern/index.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),component=__webpack_require__("./packages/pure-cell/src/component.tsx"),index_module={component:"component_RNQaX",categoryName:"categoryName_LQVD4",categoryPercent:"categoryPercent_mo1wK",rightAddon:"rightAddon_UK4o8"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Category=function(_ref){var categoryName=_ref.categoryName,categoryPercent=_ref.categoryPercent,rightAddons=_ref.rightAddons,dataTestId=_ref.dataTestId,pureCellContext=(0,react.useContext)(component.Gm);return(0,jsx_runtime.jsxs)("div",{className:index_module.component,"data-test-id":"cell-pure-category",children:[(0,jsx_runtime.jsx)(typography_modern.Text,{view:"primary-small",color:"secondary",dataTestId:(0,modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"category-name"),className:index_module.categoryName,children:categoryName}),void 0!==categoryPercent&&(0,jsx_runtime.jsxs)(typography_modern.Text,{tag:"div",view:"primary-small",color:"secondary",className:index_module.categoryPercent,dataTestId:(0,modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"category-percent"),children:[categoryPercent,"%"]}),void 0!==rightAddons&&(0,jsx_runtime.jsx)("div",{className:index_module.rightAddon,"data-test-id":(0,modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"category-right-addon"),children:rightAddons})]})}},"./packages/pure-cell/src/components/content/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return Content}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/shared/modern/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component=__webpack_require__("./packages/pure-cell/src/component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Content=function(_ref){var children=_ref.children,dataTestId=_ref.dataTestId,_useContext=(0,react.useContext)(component.Gm),direction=_useContext.direction,contextDataTestId=_useContext.dataTestId;return(0,jsx_runtime.jsx)("section",{className:classnames_default()("component_CFva2",(0,defineProperty.Z)({},"horizontal_TCHb7","horizontal"===direction)),"data-test-id":(0,modern.getDataTestId)(dataTestId||contextDataTestId,"content"),children:children})}},"./packages/pure-cell/src/components/footer-button/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{S:function(){return FooterButton}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/button/modern/index.js"),shared_modern=__webpack_require__("./dist/shared/modern/index.js"),component=__webpack_require__("./packages/pure-cell/src/component.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children","dataTestId","onClick","onMouseDown","onMouseEnter","onMouseLeave"],FooterButton=(0,react.forwardRef)(function(_ref,ref){var children=_ref.children,dataTestId=_ref.dataTestId,onClick=_ref.onClick,onMouseDown=_ref.onMouseDown,onMouseEnter=_ref.onMouseEnter,onMouseLeave=_ref.onMouseLeave,props=(0,objectWithoutProperties.Z)(_ref,_excluded),pureCellContext=(0,react.useContext)(component.Gm);return(0,jsx_runtime.jsx)(modern.Button,(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{size:"xxs",dataTestId:(0,shared_modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"button"),className:"component_ohVPj",ref:ref,onClick:function(e){e.stopPropagation(),null==onClick||onClick(e)},onMouseEnter:function(e){var _pureCellContext$unse;null==onMouseEnter||onMouseEnter(e),null===(_pureCellContext$unse=pureCellContext.unsetMainHover)||void 0===_pureCellContext$unse||_pureCellContext$unse.call(pureCellContext)},onMouseLeave:function(e){var _pureCellContext$setM;null==onMouseLeave||onMouseLeave(e),null===(_pureCellContext$setM=pureCellContext.setMainHover)||void 0===_pureCellContext$setM||_pureCellContext$setM.call(pureCellContext)},onMouseDown:function(e){null==onMouseDown||onMouseDown(e),e.stopPropagation()},children:children}))});try{FooterButton.displayName="FooterButton",FooterButton.__docgenInfo={description:"",displayName:"FooterButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/pure-cell/src/components/footer-button/component.tsx#FooterButton"]={docgenInfo:FooterButton.__docgenInfo,name:"FooterButton",path:"packages/pure-cell/src/components/footer-button/component.tsx#FooterButton"})}catch(__react_docgen_typescript_loader_error){}},"./packages/pure-cell/src/components/footer/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{$:function(){return Footer}});var react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/shared/modern/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component=__webpack_require__("./packages/pure-cell/src/component.tsx"),index_module={component:"component_JxPUw",none:"none_cYmad",default:"default_kRR0c"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Footer=function(_ref){var children=_ref.children,_ref$footerPadding=_ref.footerPadding,dataTestId=_ref.dataTestId,pureCellContext=(0,react.useContext)(component.Gm);return(0,jsx_runtime.jsx)("footer",{className:classnames_default()("component_JxPUw",index_module[void 0===_ref$footerPadding?"default":_ref$footerPadding]),"data-test-id":(0,modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"footer"),children:children})}},"./packages/pure-cell/src/components/graphics/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{T:function(){return Graphics}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/shared/modern/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component=__webpack_require__("./packages/pure-cell/src/component.tsx"),index_module={component:"component_KfXlP",top:"top_vUba4",center:"center_ppdLl",bottom:"bottom_JMtrw",horizontal:"horizontal_bjtRH",none:"none_J9n_U",airy:"airy_jKnBl",default:"default_QzruS",compact:"compact_Zw9L2",tiny:"tiny_RuJ2U",vertical:"vertical_m7gvO",button:"button_hwjaL"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),GRAPHICS_COMPONENT={button:"button",section:"section"},Graphics=function(_ref){var children=_ref.children,dataTestId=_ref.dataTestId,_ref$verticalAlign=_ref.verticalAlign,graphicPadding=_ref.graphicPadding,_onClick=_ref.onClick,pureCellContext=(0,react.useContext)(component.Gm),Component=_onClick?GRAPHICS_COMPONENT.button:GRAPHICS_COMPONENT.section,defaultGraphicPadding="horizontal"===pureCellContext.direction?"airy":"default";return(0,jsx_runtime.jsx)(Component,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()("component_KfXlP",index_module[void 0===_ref$verticalAlign?"top":_ref$verticalAlign],index_module[pureCellContext.direction||"horizontal"],index_module[graphicPadding||defaultGraphicPadding],(0,defineProperty.Z)({},"button_hwjaL",_onClick)),"data-test-id":(0,modern.getDataTestId)(dataTestId||pureCellContext.dataTestId,"graphics")},_onClick&&{onClick:function onClick(e){e.stopPropagation(),null==_onClick||_onClick()},onMouseEnter:function onMouseEnter(){var _pureCellContext$unse;null===(_pureCellContext$unse=pureCellContext.unsetMainHover)||void 0===_pureCellContext$unse||_pureCellContext$unse.call(pureCellContext)},onMouseLeave:function onMouseLeave(){var _pureCellContext$setM;null===(_pureCellContext$setM=pureCellContext.setMainHover)||void 0===_pureCellContext$setM||_pureCellContext$setM.call(pureCellContext)},onMouseDown:function onMouseDown(e){e.stopPropagation()}}),{},{children:children}))}},"./packages/pure-cell/src/components/main/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{o:function(){return Main}});var objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/shared/modern/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component=__webpack_require__("./packages/pure-cell/src/component.tsx"),index_module={component:"component_l1Bpk",vertical:"vertical_dtFlu",reverse:"reverse_vSuqm",button:"button_r5zqZ"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),MAIN_COMPONENT={button:"button",section:"section"},Main=function(_ref){var children=_ref.children,isReverse=_ref.isReverse,className=_ref.className,dataTestId=_ref.dataTestId,_onClick=_ref.onClick,_useContext=(0,react.useContext)(component.Gm),_useContext$direction=_useContext.direction,contextDataTestId=_useContext.dataTestId,setMainHover=_useContext.setMainHover,unsetMainHover=_useContext.unsetMainHover,Component=_onClick?MAIN_COMPONENT.button:MAIN_COMPONENT.section;return(0,jsx_runtime.jsx)(Component,(0,objectSpread2.Z)((0,objectSpread2.Z)({className:classnames_default()("component_l1Bpk",index_module[void 0===_useContext$direction?"horizontal":_useContext$direction],(0,defineProperty.Z)({},"reverse_vSuqm",isReverse),(0,defineProperty.Z)({},"button_r5zqZ",_onClick),className),"data-test-id":(0,modern.getDataTestId)(dataTestId||contextDataTestId,"main")},_onClick&&{onClick:function onClick(e){e.stopPropagation(),null==_onClick||_onClick()},onMouseEnter:function onMouseEnter(){null==unsetMainHover||unsetMainHover()},onMouseLeave:function onMouseLeave(){null==setMainHover||setMainHover()},onMouseDown:function onMouseDown(e){e.stopPropagation()}}),{},{children:children}))}},"./packages/pure-cell/src/components/text/component.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{x:function(){return Text}});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("./node_modules/react/index.js"),modern=__webpack_require__("./dist/shared/modern/index.js"),typography_modern=__webpack_require__("./dist/typography/modern/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),component=__webpack_require__("./packages/pure-cell/src/component.tsx"),index_module={horizontal:"horizontal_KKl6c",rowLimit1:"rowLimit1_YUUG2",rowLimit2:"rowLimit2_TIlsh",component:"component_qyE8O",vertical:"vertical_mvmPD",title:"title_EgeNN",value:"value_KqfO9"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Text=function(_ref){var children=_ref.children,value=_ref.value,rowLimit=_ref.rowLimit,_ref$view=_ref.view,view=void 0===_ref$view?"component-primary":_ref$view,titleWeight=_ref.titleWeight,titleColor=_ref.titleColor,valueColor=_ref.valueColor,dataTestId=_ref.dataTestId,_useContext=(0,react.useContext)(component.Gm),_useContext$direction=_useContext.direction,contextDataTestId=_useContext.dataTestId,className=rowLimit&&index_module["rowLimit".concat(rowLimit)];return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(index_module.component,(0,defineProperty.Z)({},index_module.vertical,"horizontal"!==(void 0===_useContext$direction?"horizontal":_useContext$direction))),children:[(0,jsx_runtime.jsx)("div",{className:index_module.title,children:(0,jsx_runtime.jsx)(typography_modern.Text,{view:view,weight:titleWeight,tag:"div",color:titleColor,className:className,"data-test-id":(0,modern.getDataTestId)(dataTestId||contextDataTestId,"text_content"),children:children})}),value&&(0,jsx_runtime.jsx)("div",{className:index_module.value,children:(0,jsx_runtime.jsx)(typography_modern.Text,{view:view,tag:"div",color:valueColor,className:className,"data-test-id":(0,modern.getDataTestId)(dataTestId||contextDataTestId,"text_value"),children:value})})]})}}}]);