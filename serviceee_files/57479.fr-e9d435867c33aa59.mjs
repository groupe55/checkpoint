"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[57479],{498896:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});let i={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetStringifiedCommerceAuxData_pin",selections:[{args:null,kind:"FragmentSpread",name:"useGetStringifiedCommerceAuxData_pin2"}],type:"Pin",abstractKey:null};i.hash="6016b14b2081c4349ad3f3a910cc2ea7";let n=i},157485:(e,t,a)=>{var i;a.r(t),a.d(t,{default:()=>l});let n={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGetStringifiedCommerceAuxData_pin2",selections:[{alias:null,args:null,kind:"ScalarField",name:"isEligibleForPdp",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isOosProduct",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"isStaleProduct",storageKey:null},{alias:null,args:null,concreteType:"RichPinDataView",kind:"LinkedField",name:"richMetadata",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"Brand",kind:"LinkedField",name:"brand",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"signature",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ShippingInfo",kind:"LinkedField",name:"shippingInfo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"freeShippingPrice",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"freeShippingValue",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariantSet",kind:"LinkedField",name:"variantSet",plural:!1,selections:[{alias:null,args:null,concreteType:"DimensionMetadata",kind:"LinkedField",name:"dimensionMetadata",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"values",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"ProductVariant",kind:"LinkedField",name:"variants",plural:!0,selections:i=[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"RichPinGridData",kind:"LinkedField",name:"richSummary",plural:!1,selections:[{alias:null,args:null,concreteType:"RichPinProductMetadata",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"itemId",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"itemSetId",storageKey:null}],storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"shoppingFlags",storageKey:null},{alias:null,args:null,concreteType:"AggregatedPinData",kind:"LinkedField",name:"aggregatedPinData",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"isShopTheLook",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryPinData",kind:"LinkedField",name:"storyPinData",plural:!1,selections:i,storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"storyPinDataId",storageKey:null}],type:"Pin",abstractKey:null};n.hash="4ffad4c63399ee2e54c9a3a86d114984";let l=n},109615:(e,t,a)=>{a.d(t,{Z:()=>_});var i=a(667294),n=a(883119),l=a(587703),r=a(140017),s=a(673020),o=a(785893);let d={sm:12,md:16,lg:20,xl:24};function _({isVerifiedMerchant:e,size:t,showText:a,showVerifiedIdentity:_,inspirationalBadges:c,inspirationalBadgesColor:u}){let p=(0,r.ZP)(),[g,h]=(0,i.useState)(!1),{dangerousInlineStyle:m,iconColor:y}=(0,s.W)(!!e),S=(0,l.Z)();return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(n.iP,{onTap:()=>{S({component:13534,element:11717,event_type:102}),h(!0)},rounding:"circle",children:(0,o.jsxs)(n.xu,{alignItems:"center",dangerouslySetInlineStyle:m,"data-test-id":"verified-badge-icon",display:"flex",children:[(0,o.jsx)(n.JO,{accessibilityLabel:e?p.bt("Icône du badge de vérification du commerçant", "Merchant verification badge icon", "merchantVerification.badge.icon", undefined, true):p.bt("Icône Badge", "Badge icon", "merchantVerification.badge.icon", undefined, true),color:y,icon:"workflow-status-ok",inline:!0,size:d[t]}),a&&!_&&(0,o.jsx)(n.xu,{marginStart:2,children:(0,o.jsx)(n.xv,{color:"shopping",inline:!0,weight:"bold",children:(0,o.jsx)(n.xu,{dangerouslySetInlineStyle:m,children:p.bt("Commerçant vérifié", "Verified merchant", "creator.header.verifiedMerchant", undefined, true)})})})]})}),(e||a&&!_)&&(0,o.jsx)(s.Z,{inspirationalBadges:c,inspirationalBadgesColor:u,setShowModal:h,showModal:g})]})}},673020:(e,t,a)=>{a.d(t,{W:()=>c,Z:()=>u});var i=a(667294),n=a(883119),l=a(557226),r=a(587703),s=a(930837),o=a(140017),d=a(702497),_=a(785893);let c=e=>{let t=e?"shopping":"error";return{iconColor:t,dangerousInlineStyle:{__style:{color:t}}}};function u({inspirationalBadges:e=[],inspirationalBadgesColor:t,showModal:a,setShowModal:u}){let p=(0,o.ZP)(),[g,h]=(0,i.useState)(!0),{dangerousInlineStyle:m,iconColor:y}=c(!0),S=(0,r.Z)();return(0,i.useEffect)(()=>{a&&g&&(h(!1),S({event_type:13,component:13534}))},[a]),(0,_.jsx)(s.ZP,{accessibilityModalLabel:p.bt("Informations sur les commerçants vérifiés", "Verified merchant information", "creator.verifiedMerchant.accessibilityModalLabel", undefined, true),isOpen:a,mobileAccessibilityCloseIconLabel:p.bt("Fermer", "Close", "Close modal window", undefined, true),onDismiss:()=>{S({component:13534,element:11716,event_type:102}),u(!1)},type:"verified_merchant_modal",children:(0,_.jsx)(n.xu,{padding:3,children:(0,_.jsxs)(n.xu,{"data-test-id":"verified-badge-modal",direction:"column",display:"flex",padding:2,children:[(0,_.jsx)(n.xu,{dangerouslySetInlineStyle:m,display:"flex",justifyContent:"center",children:(0,_.jsx)(n.JO,{accessibilityLabel:p.bt("Icône du badge de vérification du commerçant", "Merchant verification badge icon", "creator.verifiedMerchant.modalIcon", undefined, true),color:y,icon:"workflow-status-ok",size:24})}),(0,_.jsx)(n.xu,{marginTop:4,children:(0,_.jsx)(n.xv,{align:"center",color:"shopping",weight:"bold",children:(0,_.jsx)(n.xu,{dangerouslySetInlineStyle:m,children:p.bt("Commerçant vérifié", "Verified merchant", "creator.verifiedMerchant.modalHeader", undefined, true)})})}),(0,_.jsx)(n.xu,{marginBottom:4,marginTop:4,children:(0,_.jsx)(n.xv,{align:"center",overflow:"normal",children:p.bt("Ce retailer respecte les directives pour les commerçants de Pinterest", "This retailer meets Pinterest's Merchant Guidelines", "creator.verifiedMerchant.modalText.", undefined, true)})}),e.map(e=>(0,_.jsxs)(n.xu,{direction:"column",display:"flex",marginTop:4,children:[(0,_.jsx)(n.kC,{alignItems:"stretch",justifyContent:"center",children:(0,_.jsx)(n.xv,{overflow:"noWrap",size:"100",weight:"bold",children:(0,_.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:(0,l.ym)(t)},"data-test-id":"verified-badge-modal-inspirational-badge",display:"inlineBlock",paddingX:2,paddingY:2,rounding:1,children:e.label})})}),(0,_.jsx)(n.xu,{marginTop:2,children:(0,_.jsx)(n.xv,{align:"center",overflow:"normal",children:e.description})})]},e.id)),(0,_.jsx)(n.xu,{"data-test-id":"verified-badge-modal-learn-more",display:"flex",justifyContent:"center",marginTop:8,width:"100%",children:(0,_.jsx)(n.ZP,{accessibilityLabel:p.bt("En savoir plus", "Learn more", "creator.verifiedMerchant.buttonText", undefined, true),href:d.vBy,size:"lg",target:"blank",text:p.bt("En savoir plus", "Learn more", "creator.verifiedMerchant.buttonText", undefined, true)})})]})})})}},922719:(e,t,a)=>{a.d(t,{CC:()=>n,Ll:()=>r,XF:()=>l});let i=(e,t,a)=>({x:Math.floor(e*Math.cos(a)),y:Math.floor(t*Math.sin(a))}),n=(e,t)=>i(t/2,e/2,2*Math.random()*Math.PI),l=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,r=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join("\n")).join("\n")},557226:(e,t,a)=>{a.d(t,{Bu:()=>g,Dm:()=>s,I:()=>y,NG:()=>u,QP:()=>_,S4:()=>d,Xe:()=>c,_f:()=>p,eT:()=>h,hm:()=>m,yQ:()=>o,ym:()=>S});var i=a(743079);let n=Object.freeze({AFRICAN_AMERICAN_OR_BLACK:"african_american_or_black",BLACK_AFRICAN_DIASPORA:"black_african_diaspora",HISPANIC_OR_LATINX:"hispanic_or_latinx",NATIVE_OR_INDIGENOUS:"native_or_indigenous",ABORIGINAL_OR_INDIGENOUS:"aboriginal_or_indigenous",NATIVE_AMERICAN_OR_ALASKA_NATIVE_OR_INDIGENOUS_PEOPLES:"native_american_or_alaska_native_or_indigenous_peoples",ASIAN_OR_PACIFIC_ISLANDERS:"asian_or_pacific_islanders",ASIAN:"asian",LGBTQ:"lgbtq",MIDDLE_EASTERN:"middle_eastern",TURKISH:"turkish",ROMA:"roma",MIDDLE_EASTERN_TURKISH_ROMA:"middle_eastern_turkish_roma",NORTH_AFRICAN:"north_african",MIDDLE_EASTERN_OR_NORTH_AFRICAN:"middle_eastern_or_north_african",NONE:"none"}),l=Object.freeze({PERSON_OF_COLOR:"person_of_color",LGBTQ:"lgbtq",DISABILITY:"disability",WOMAN:"woman",NONE:"none"}),r=Object.freeze({INVESTED_IN_GOOD:"invested_in_good",ECO_FRIENDLY:"eco_friendly",RESPONSIBLY_SOURCED:"responsibly_sourced",INCLUSIVE:"inclusive",PERSONAL_TOUCH:"personal_touch"}),s=[...Object.keys(n).map(e=>n[e]),...Object.keys(l).map(e=>l[e])],o=[...Object.keys(r).map(e=>r[e])],d=3,_=["#EFEFEF","#F8E3D1","#F6F1C1","#DDEEAF","#C9F2EE","#DBD5F4","#EFBCEE"],c={business_diversity_labels:[],created_at:"",disapproval_reasons:[],is_inspirational:!1,review_criteria:[],review_labels:[],updated_at:"",inspirational_badge_selection:{badgeColor:_[0],badgeOptOut:[]},is_eligible_for_storefront_badges:!1,badge_details:[],profile_badges:[]},u="https://help.pinterest.com/article/merchant-details",p="https://help.pinterest.com/business/article/add-merchant-details-to-your-profile";function g({verifiedMerchant:e}){let t=e?.isVerifiedMerchant,a=e?.inspirational_signal?.is_inspirational,i=e?.inspirational_signal?.is_eligible_for_storefront_badges;return!!(t&&a&&i)}function h(e){return e.badge_details?e.badge_details.map(e=>e.id):[]}function m(e){return e?.profile_badges||[]}function y(e,t,a){return t&&a?t.map(e=>a.find(t=>t.id===e.trim())).filter(Boolean):[]}function S(e){let t=e||_[0];return{backgroundColor:t,color:function(e){let t=(0,i.oo)(e);if(!t)return"white";let[a,n,l]=t;return(0,i.DW)(a,n,l)<=i.I?"white":"black"}(t)}}},743079:(e,t,a)=>{a.d(t,{DW:()=>l,I:()=>n,oo:()=>i,zI:()=>r});let i=e=>{let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t&&[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]},n=.18,l=(e,t,a)=>.2126*(e/255)**2.2+.7151*(t/255)**2.2+.0721*(a/255)**2.2,r=e=>{let t=e.replace("#",""),a=parseInt(t.substr(0,2),16);return(299*a+587*parseInt(t.substr(2,2),16)+114*parseInt(t.substr(4,2),16))/1e3<155}},891162:(e,t,a)=>{a.d(t,{Q6:()=>_,ZP:()=>s,qe:()=>o,yU:()=>d});var i=a(520893);let n=(e,t)=>e.length===t.length&&e.every((e,a)=>e===t[a]),l=e=>e;function r(e,t=n,a=l){return function(i){let n=[];return function(...l){let r=n.find(e=>t(e.args,a(l)));if(r)return r.result;let s=i(...l);return n.push({args:a(l),result:s}),e&&n.length>e&&n.shift(),s}}}let s=r(),o=r(1),d=r(void 0,n,e=>[JSON.stringify(e)]),_=r(0,(e,t)=>e.length===t.length&&e.every((e,a)=>(0,i.Z)(e,t[a])))},782005:(e,t,a)=>{a.d(t,{Hd:()=>d,_R:()=>s,gi:()=>l,lw:()=>i,oD:()=>n,wF:()=>o,zh:()=>r});let i={PINS:"pins",PINS_BUYABLE:"buyable_pins",PINS_MINE:"my_pins",PINS_VIDEO:"videos",BOARDS:"boards",USERS:"users",IDEA_PINS:"idea_pins",MY_CONTENT:"my_content"},n=e=>Object.values(i).find(t=>t===e)??void 0,l=e=>{switch(e){case i.PINS:return 0;case i.PINS_MINE:return null;case i.PINS_BUYABLE:return 1;case i.PINS_VIDEO:return 2;case i.BOARDS:return 3;case i.USERS:return 4;default:return null}},r=e=>{switch(e){case 0:return i.PINS;case 1:return i.PINS_BUYABLE;case 2:return i.PINS_VIDEO;case 3:return i.BOARDS;case 4:return i.USERS;default:return null}},s=e=>{switch(e){case i.PINS_MINE:case i.MY_CONTENT:return 107;case i.PINS_BUYABLE:return 254;case i.PINS_VIDEO:return 3306;case i.BOARDS:return 44;case i.USERS:return 45;case i.PINS:default:return 43}},o=e=>{switch(e){case i.PINS:return 60;case i.PINS_MINE:case i.MY_CONTENT:return 63;case i.PINS_BUYABLE:return 3800;case i.PINS_VIDEO:return 64;case i.BOARDS:return 61;case i.USERS:return 62;default:return null}},d=(e,t)=>{if(t)switch(e){case i.USERS:return 1000392;case i.PINS_BUYABLE:return 1000391;case i.PINS:default:return 29}switch(e){case i.USERS:return 1000432;case i.PINS_BUYABLE:return 1000433;case i.PINS:default:return 1000269}}},268127:(e,t,a)=>{a.d(t,{Y:()=>p,Z:()=>g});var i,n,l=a(667294);a(167912);var r=a(333739),s=a(807023);let o=void 0!==i?i:i=a(498896),d=void 0!==n?n:n=a(157485),_=e=>{let t=Symbol("SKIP"),a=e=>Object.entries(e).filter(([,e])=>e!==t).reduce((e,[t,a])=>({...e,[t]:a}),{});if("deprecated"!==e.type){let i=e.data;return a({...i.isEligibleForPdp||i.isOosProduct||i.isStaleProduct?{...(()=>{let e=i.richMetadata?.products?.[0];return{carousel_image_count:t,brand_signature:e?.brand?.signature||t,free_shipping_price:e?.shippingInfo?.freeShippingPrice||t,free_shipping_value:e?.shippingInfo?.freeShippingValue||t,num_variants:e?.variantSet?.variants?.length||t,total_dimension_option_count:e?.variantSet?.dimensionMetadata?.length||t,valid_dimension_option_count:t}})(),pin_show_pdp_oos:!!i.isOosProduct||t,pin_show_pdp_stale:!!i.isStaleProduct||t,pin_show_pdp:!!i.isEligibleForPdp||t}:{},pin_is_shop_the_look:!!(i.shoppingFlags?.includes(2)||i.aggregatedPinData?.isShopTheLook)||t,is_available:!!i.shoppingFlags?.includes(1)||t,is_product_pin_v2:!!i.shoppingFlags?.includes(5)||t,is_rich_product_pin:!!i.shoppingFlags?.includes(6)||t,is_organic_product_carousel:t,item_id:(i.richSummary?.products?.[0]||{}).itemId||t,item_set_id:(i.richSummary?.products?.[0]||{}).itemSetId||t,story_pin_id:i.storyPinData?i.storyPinDataId:t})}{let i=e.data;return i?a({...i.is_eligible_for_pdp||i.is_oos_product||i.is_stale_product?{...(()=>{let e=(i.rich_metadata||i.rich_summary)?.products?.[0],a=e?.additional_images?.length?(i.images?1:0)+e.additional_images.length:i.carousel_data?.carousel_slots?.length,n=i.rich_metadata?.products?.[0],l=n?.variant_set?.variants??[];return{carousel_image_count:a||t,brand_signature:n?.brand?.signature||t,free_shipping_price:n?.shipping_info?.free_shipping_price||t,free_shipping_value:n?.shipping_info?.free_shipping_value||t,num_variants:l.length||t,total_dimension_option_count:n?.variant_set?.dimension_metadata?.length||t,valid_dimension_option_count:(n?.variant_set?.dimension_metadata||[]).reduce((e,{name:t,values:a})=>e+(t&&a||[]).filter(e=>l.some(a=>a.dimensions?.[t??""]===e)).length,0)||t}})(),pin_show_pdp_oos:!!i.is_oos_product||t,pin_show_pdp_stale:!!i.is_stale_product||t,pin_show_pdp:!!i.is_eligible_for_pdp||t}:{},pin_is_shop_the_look:!!(i.shopping_flags?.includes(2)||i.aggregated_pin_data?.is_shop_the_look)||t,is_available:!!i.shopping_flags?.includes(1)||t,is_product_pin_v2:!!i.shopping_flags?.includes(5)||t,is_rich_product_pin:!!i.shopping_flags?.includes(6)||t,is_organic_product_carousel:!!(i.shopping_flags?.includes(10)||(i.product_pin_data?.items?.[0]||{}).additional_images)||t,item_id:(i.rich_summary?.products?.[0]||{}).item_id||t,item_set_id:(i.rich_summary?.products?.[0]||{}).item_set_id||t,story_pin_id:i.story_pin_data?i.story_pin_data_id:t}):{}}},c=e=>0===Object.keys(e).length?{}:{commerce_data:JSON.stringify(e)},u=e=>{let{childDataKey__DEPRECATED:t}=(0,s.Q)(o,e,{useLegacyAdapter:e=>({})}),{childDataKey__DEPRECATED:a}=(0,r.Zm)(d,null==t?{type:"deprecated",data:null}:t,{useGraphQLAdapter:e=>e,useLegacyAdapter:e=>e}),i=(0,l.useRef)(a);return(0,l.useEffect)(()=>{i.current=a}),(0,l.useCallback)(e=>c({...e?.default,..._(i.current),...e?.override}),[])},p=({children:e,pinKey:t})=>e(u(t)),g=u},923368:(e,t,a)=>{a.d(t,{Nb:()=>s,Of:()=>o,YO:()=>r,ZP:()=>c,x4:()=>_});var i=a(667294),n=a(891162),l=a(392029);let r=({showProductDetailPage:e,isLargerPane:t,showCloseupContentRight:a})=>e&&t?a?l.Uj:l.zT:1,s=(0,n.qe)(({paneWidth:e,pdpCarouselSlotToPaneRatio:t,showCloseupContentRight:a,showProductDetailPage:i,viewportSize:n,maxWidth:l,descriptionPaneWidth:r,isCloseupRelatedPinsAboveTheFoldEnabled:s,isCommentThreadExpanded:o,isPinNoteExpanded:d,isProductDetailsExpanded:_,isShoppingModuleExpanded:c,setIsCommentThreadExpanded:u,setIsPinNoteExpanded:p,setIsProductDetailsExpanded:g,setIsShoppingModuleExpanded:h,stackedCloseupEnabled:m,isInRemoveMagnifyingGlassVariant:y,setAbortNoActionPlacementTimeout:S})=>({paneWidth:e,pdpCarouselSlotToPaneRatio:t,showCloseupContentRight:a,showProductDetailPage:i,viewportSize:n,maxWidth:l,descriptionPaneWidth:r,isCloseupRelatedPinsAboveTheFoldEnabled:s,isCommentThreadExpanded:o,isPinNoteExpanded:d,isProductDetailsExpanded:_,isShoppingModuleExpanded:c,setIsCommentThreadExpanded:u,setIsPinNoteExpanded:p,setIsProductDetailsExpanded:g,setIsShoppingModuleExpanded:h,stackedCloseupEnabled:m,isInRemoveMagnifyingGlassVariant:y,setAbortNoActionPlacementTimeout:S})),o={showCloseupContentRight:!0,showProductDetailPage:!1,viewportSize:"lg",paneWidth:l.Gg,pdpCarouselSlotToPaneRatio:1,maxWidth:l.u6,descriptionPaneWidth:l.u6-l.Gg,isCloseupRelatedPinsAboveTheFoldEnabled:!1,isCommentThreadExpanded:!1,isPinNoteExpanded:!1,isShoppingModuleExpanded:!1,stackedCloseupEnabled:!1,isInRemoveMagnifyingGlassVariant:!1,setAbortNoActionPlacementTimeout:()=>{},setIsShoppingModuleExpanded:()=>{}},d=(0,i.createContext)(o);function _(){let e=(0,i.useContext)(d);if(!e)throw Error("useCloseupContext must be used within CloseupContextProvider");return e}let c=d},392029:(e,t,a)=>{a.d(t,{$T:()=>f,CI:()=>r,Ch:()=>o,ER:()=>S,Gb:()=>d,Gg:()=>n,Hf:()=>N,Ie:()=>g,J6:()=>p,KP:()=>h,Kn:()=>s,O5:()=>E,Uj:()=>_,YE:()=>I,bx:()=>m,cg:()=>P,d2:()=>u,g9:()=>y,iB:()=>O,rv:()=>A,u6:()=>l,zT:()=>c});var i=a(883119);let n=508,l=1016,r=488,s=992,o=672,d=1176,_=.6,c=.84,u=40,p=16,g=72,h=740,m=912,y=32,S=16,f=24,E=2,I=16,P=16,A=1,N=new i.Ry(5),O={ARTICLE:"https://schema.org/Article",BRAND:"https://schema.org/Brand",PRODUCT:"https://schema.org/Product",RECIPE:"https://schema.org/Recipe",OFFER:"https://schema.org/Offer",OUT_OF_STOCK:"https://schema.org/OutOfStock",PERSON:"https://schema.org/Person"}},407053:(e,t,a)=>{a.d(t,{AA:()=>l,E9:()=>y,EU:()=>E,IO:()=>f,KH:()=>_,Lg:()=>p,QR:()=>d,Uw:()=>n,ZR:()=>I,dx:()=>g,dy:()=>o,eA:()=>u,eV:()=>h,fo:()=>m,k7:()=>r,rT:()=>S,tz:()=>c,u9:()=>P,zR:()=>s,zu:()=>i});let i="OPEN_UNAUTH",n="openUnauthType",l="_isAfterLogin",r="_lastVisitedPages",s="_lastVisitedPagesBeforeLogin",o="_lastVisitedBoardPages",d="_lastVisitedPagesBeforeNavPage",_="_lastVisitedSessionPages",c="_unauthVisitedPages",u=100,p="_inviteCodeRedemption",g="_inviteCodeRedemptionList",h="_paidTrafficLand",m="_unauthReferrerString",y="unauthTopicsFollowed",S=["US","CA","NZ","AU"],f=new Set(["GB","IE"]),E=new Set(["AT","BE","CH","DE","DK","ES","FR","IT","NL","NO","PT","SE"]),I=new Set(["BR","MX","AR","CL","CO","PE"]),P="ad_img"},736079:(e,t,a)=>{a.d(t,{Z:()=>c,x:()=>_});var i=a(667294),n=a(217058),l=a(785893);let r=(0,i.createContext)(()=>{}),s=()=>{document&&document.body&&document.body.style&&(document.body.style.overflow="hidden")},o=()=>{document&&document.body&&document.body.style&&(document.body.style.overflow="unset")},d=()=>(0,i.useEffect)(()=>o,[]),_=({children:e})=>{let[t,a]=(0,i.useState)(null);d();let _=(0,i.useCallback)(e=>{(0,n.My)("dweb.unauth.context_menu.open_menu"),s(),a(e)},[]),c=!!t;return(0,i.useEffect)(()=>{let e=()=>{a(null),o(),(0,n.My)("dweb.unauth.context_menu.click_away")};return c&&document.addEventListener("click",e),()=>{c&&document.removeEventListener("click",e)}},[c]),(0,l.jsx)(r.Provider,{value:_,children:(0,l.jsxs)(i.Fragment,{children:[e,t]})})},c=()=>(0,i.useContext)(r)},409403:(e,t,a)=>{function i(e,t){return{type:"CHANGE_CAROUSEL_SLOT_INDEX",payload:{id:e,index:t}}}function n(e,t){return{type:"SET_PIN_COMMENTS_DISABLED",payload:{id:e,pinCommentsDisabled:t}}}function l(e){return{type:"PIN_SAVE",payload:e}}function r(e,t){return{type:"PIN_UNSAVE",payload:{id:e,nodeId:t}}}function s(e){return{type:"PIN_SHOW_SUGGESTED_CREATOR_RECS",payload:{id:e,value:!0}}}function o({id:e,nodeId:t}){return{type:"PIN_SHOW_FEEDBACK",payload:{id:e,value:!1,nodeId:t}}}function d({id:e,text:t,nodeId:a}){return{type:"PIN_SHOW_FEEDBACK",payload:{id:e,value:!0,text:t,nodeId:a}}}function _({id:e,nodeId:t}){return{type:"PIN_SHOW_FEEDBACK_OVERLAY",payload:{id:e,value:!0,nodeId:t}}}function c({id:e,nodeId:t}){return{type:"PIN_SHOW_FEEDBACK_OVERLAY",payload:{id:e,value:!1,nodeId:t}}}function u(e){return{type:"PIN_SHOW_AD_REASONS_MODAL",payload:{id:e,value:!0}}}function p(e){return{payload:{id:e,value:!1},type:"PIN_SHOW_AD_REASONS_MODAL"}}function g({id:e,nodeId:t,resource:a,value:i}){return{payload:{id:e,nodeId:t,resource:a,value:i},type:"UPDATE_PIN_TRACKING_PARAMS_MAP"}}a.d(t,{Er:()=>g,Gb:()=>r,I1:()=>o,Ib:()=>_,Ur:()=>l,Vw:()=>s,b9:()=>u,i0:()=>c,mO:()=>n,q1:()=>d,yR:()=>i,yj:()=>p})},170568:(e,t,a)=>{a.d(t,{Cp:()=>o,FK:()=>s,H5:()=>f,MI:()=>g,O0:()=>p,QZ:()=>r,W:()=>y,WF:()=>_,Wz:()=>E,a5:()=>c,dz:()=>m,e0:()=>u,e2:()=>l,iW:()=>S,n1:()=>n,rm:()=>d,xu:()=>h});var i=a(96157);let n=()=>({type:"DISMISS_UNAUTH_SAVE"}),l=()=>({type:"COMPLETE_UNAUTH_SAVE_ACTION"}),r=e=>({type:"SET_UNAUTH_SAVE_PIN_ID",payload:{unauthSavePinId:e}}),s=()=>({type:"HIDE_NAV_FOOTER"}),o=()=>({type:"SHOW_NAV_FOOTER"}),d=e=>({type:"SET_LOGIN_SIGNUP_FROM",payload:{from:e}}),_=()=>({type:"SHOW_REPIN_ANIMATION"}),c=()=>({type:"HIDE_REPIN_ANIMATION"}),u=e=>({type:"SET_NUM_SIGNUP_STEPS",payload:{steps:e}}),p=()=>({type:"SET_OWN_PROFILE_PINS_REFRESH"}),g=e=>({type:"SHOW_BIZ_NUX_HOMEFEED_LOADER",payload:e}),h=e=>({type:"SET_VIEWED_IMAGE",payload:{viewedImageSignature:e}}),m=e=>({type:"SET_VIEWED_SHARED_PINS",payload:{pins:e}}),y=()=>({type:"DISMISS_UNAUTH_APP_UPSELL"}),S=e=>e?{type:"LOGGED_OUT_USER_INFO_FOUND",payload:e}:{type:"LOGGED_OUT_USER_INFO_NOT_FOUND"},f=e=>({type:"UPDATE_USER_FIRST_HOME_FEED_REQUEST_AFTER_NUX",payload:e}),E=(e,t)=>({type:"SET_LANDING_PAGE_TYPE",payload:e?(0,i.bo)(e)?"today":(0,i.dr)(e)?"ideas":t&&(0,i.dZ)(e,t)?"own_section":t&&(0,i.J)(e,t)?"own_board":(0,i.OJ)(e)?"section":(0,i.am)(e)?"board":(0,i.L6)(e)?"closeup":(0,i.C$)(e)?"home":(0,i.cD)(e)?"profile":(0,i.En)(e)?"search":(0,i.$V)(e)?"topic":"":""})},386129:(e,t,a)=>{a.d(t,{Ge:()=>d,JS:()=>r,OF:()=>E,P_:()=>s,Q_:()=>u,b8:()=>p,eR:()=>f,h2:()=>_,h6:()=>c});var i=a(216167),n=a(107366),l=a(666698);function r(e){return{type:"UPDATE_USER_PIN_COUNT",payload:e}}let s=(e,t)=>({type:"USER_FOLLOW",payload:{id:e,value:t}}),o=(e,t)=>({type:"USER_BLOCK",payload:{id:e,value:t}}),d=({id:e,orbacSubjectId:t,blockSource:a,blockContext:n,logContextEvent:l})=>async r=>{r(o(e,!0));let s=await i.Z.create("UserBlockResource",{blocked_user_id:e,orbac_subject_id:t,block_source:a,block_context:n}).callCreate().catch(()=>r(o(e,!1)));return l({event_type:54,object_id_str:e}),s},_=(e,t)=>async a=>{a(o(e,!1));let n=await i.Z.create("UserBlockResource",{blocked_user_id:e}).callDelete().catch(()=>a(o(e,!0)));return t({event_type:55,object_id_str:e}),n};function c(e){return{type:"UPDATE_USER_SCHEDULED_PIN_COUNT",payload:e}}let u=(e,t)=>()=>i.Z.create("UserStateResource",{state:e,value:t}).callCreate(),p=(e,t,a)=>(i,r)=>{(0,n.Z)({url:"/v3/users/me/",method:"POST"}).then(()=>{a({event_type:48,object_id_str:r().session.userId}),e(),(0,l.Dm)()},t)},g=e=>e>=200&&e<400,h=(e,t="150x150")=>e&&`https://i.pinimg.com/${t}/${e.substring(0,2)}/${e.substring(2,4)}/${e.substring(4,6)}/${e}.jpg`||"",m=async(e,t,a)=>{let n=await i.Z.create("VIPResource",{upload_ids:[e]}).callGet();if(n.resource_response.data[e]){let{status:i,signature:l}=n.resource_response.data[e];"processing"===i||"registered"===i?setTimeout(async()=>{m(e,t,a)},5e3):"succeeded"===i?t(h(l)):a()}else a()},y=(e,t,a,n,l)=>(new FormData().append("img",e),i.Z.create("VIPResource",{type:t}).callCreate().then(t=>{if(t.resource_response.data){let{upload_id:i,upload_url:r,upload_parameters:s}=t.resource_response.data,o=new XMLHttpRequest;o.open("POST",r,!0),o.onload=()=>{g(o.status)?(a(100),m(i,n,l)):l()},o.upload.onprogress=e=>{a(Math.round(100*e.loaded/e.total))};let d=new FormData;for(let e in s)d.append(e,s[e]);d.append("file",e),o.send(d)}},()=>{l()})),S=e=>new Promise((t,a)=>{y(e,"pinimage",()=>{},e=>{t(e)},e=>{a(e)})}),f=e=>new Promise((t,a)=>{"string"==typeof e?e.startsWith("data")&&S(function(e,t=512){let a=e.split(";"),i=a[0].split(":")[1],n=atob(a[1].split(",")[1]),l=[];for(let e=0;e<n.length;e+=t){let a=n.slice(e,e+t),i=Array(a.length);for(let e=0;e<a.length;e+=1)i[e]=a.charCodeAt(e);let r=new Uint8Array(i);l.push(r)}return new Blob(l,{type:i})}(e)).then(e=>t(e)):a("Invalid Image")}),E=e=>()=>(0,n.Z)({url:"/v3/register/exists/",data:{email:e}})},811768:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(667294),n=a(883119),l=a(109615),r=a(785893);let s=function({badgeSize:e,badgeSpacing:t,fullName:a,verifiedType:s,truncate:o=!1}){let d=a.split(" "),_=d.slice(0,d.length-1).join(" "),c=" ".concat(d[d.length-1]);return o?(0,r.jsxs)(n.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,r.jsx)(n.xv,{lineClamp:1,weight:"bold",children:a}),(0,r.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{top:t}},flex:"none",paddingX:1,position:"relative",children:(0,r.jsx)(l.Z,{isVerifiedMerchant:"verifiedMerchant"===s,showVerifiedIdentity:"verifiedIdentity"===s,size:e})})]}):(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)("span",{children:_}),(0,r.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[c," ",(0,r.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{top:t}},display:"inlineBlock",flex:"none",position:"relative",children:(0,r.jsx)(l.Z,{isVerifiedMerchant:"verifiedMerchant"===s,showVerifiedIdentity:"verifiedIdentity"===s,size:e})})]})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/57479.fr-e9d435867c33aa59.mjs.map