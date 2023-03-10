import{a as u,v as h,J as x,L as v,e1 as k,aC as N,o as r,h as n,i,q as p,F as A,aF as G,t as a,j as C,z as P,l as c,eY as _,eZ as S}from"./index.664a474d.js";import{h as w}from"./moment.9709ab41.js";import{r as M}from"./random.0da295ae.js";import"./_isIterateeCall.8bce29ba.js";import"./toFinite.1248a2a6.js";const o=w().add(M(4,10),"days").format("YYYY-MM-DD"),y=[{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"HOUSTON,TX",containsPrice:{fortyNORAdditionalCharge:"AMS:30",fortyHighCubeBasicPrice:"4185",fortyGpAdditionalCharge:"AMS:30",twentyGpBasicPrice:"3570",twentyGpPrice:"3285",fortyNORPrice:"4040",twentyGpAdditionalCharge:"AMS:30",fortyGpBasicPrice:"4185",fortyGpPrice:"3850",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"3850"},id:"1541227254012420967",provider:"carrier",carrier:"CMA",destinationPortCode:"USHOU"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"LOS ANGELES,CA",containsPrice:{fortyNORAdditionalCharge:"AMS:30;",fortyHighCubeBasicPrice:"1492",fortyGpAdditionalCharge:"AMS:30;",twentyGpBasicPrice:"1162",twentyGpPrice:"1055",fortyNORPrice:"1270",twentyGpAdditionalCharge:"AMS:30;",fortyGpBasicPrice:"1492",fortyGpPrice:"1355",fortyHighCubeAdditionalCharge:"AMS:30;",fortyHighCubePrice:"1355"},id:"1541227254012420998",provider:"carrier",carrier:"EMC",destinationPortCode:"USLAX"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"HOUSTON,TX",containsPrice:{fortyHighCubeBasicPrice:"3981",twentyGpBasicPrice:"3591",twentyGpPrice:"3420",fortyGpBasicPrice:"3981",fortyGpPrice:"3790",fortyHighCubePrice:"3790"},id:"1541227254012421024",provider:"carrier",carrier:"EMC",destinationPortCode:"USHOU"}],H=[{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"MIAMI,FL",containsPrice:{fortyNORAdditionalCharge:"AMS:30",fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"3755",fortyNORPrice:"3815",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4720",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4720"},id:"1541227254012420964",provider:"carrier",carrier:"CMA",destinationPortCode:"USMIA"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"NEW YORK,NY",containsPrice:{fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"3210",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4550",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4550"},id:"1541227254012421012",provider:"carrier",carrier:"EMC",destinationPortCode:"USNYC"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"SAVANNAH,GA",containsPrice:{fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"3520",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4395",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4395"},id:"1541227254012421087",provider:"carrier",carrier:"OOCL",destinationPortCode:"USSAV"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"NEW YORK,NY",containsPrice:{fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"3595",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4485",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4485"},id:"1541227254012421083",provider:"carrier",carrier:"OOCL",destinationPortCode:"USNYC"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"SAVANNAH,GA",containsPrice:{fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"3755",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4720",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4720"},id:"1541227254012420955",provider:"carrier",carrier:"CMA",destinationPortCode:"USSAV"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"NEW YORK,NY",containsPrice:{fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"3755",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4720",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4720"},id:"1541227254012420951",provider:"carrier",carrier:"CMA",destinationPortCode:"USNYC"}],B=[{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"DALLAS,TX",containsPrice:{fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"4485",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4980",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4980"},id:"1541227254012421037",provider:"carrier",carrier:"EMC",destinationPortCode:"USDAL"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"CHICAGO,IL",containsPrice:{fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"3850",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4275",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4275"},id:"1541227254012421033",provider:"carrier",carrier:"EMC",destinationPortCode:"USCHI"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"DALLAS,TX",containsPrice:{fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"4335",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4815",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4815"},id:"1541227254012421073",provider:"carrier",carrier:"OOCL",destinationPortCode:"USDAL"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"CHICAGO,IL",containsPrice:{fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"3915",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4345",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4345"},id:"1541227254012421067",provider:"carrier",carrier:"OOCL",destinationPortCode:"USCHI"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"DETROIT,MI",containsPrice:{twentyGpPrice:"4480",fortyGpPrice:"5635",fortyHighCubePrice:"5635"},id:"1541227254012421492",provider:"carrier",carrier:"CMA",destinationPortCode:"USDET"},{ETD:o,remainTeu:4,originPortCode:"CNNGB",originPortCityName:"NINGBO",destinationPortCityName:"CHICAGO,IL",containsPrice:{fortyNORAdditionalCharge:"",fortyGpAdditionalCharge:"AMS:30",twentyGpPrice:"3850",twentyGpAdditionalCharge:"AMS:30",fortyGpPrice:"4520",fortyHighCubeAdditionalCharge:"AMS:30",fortyHighCubePrice:"4520"},id:"1541227254012420976",provider:"carrier",carrier:"CMA",destinationPortCode:"USCHI"}];var O="/resource/img/index/icon_hot.png",I="/resource/img/index/cheap_title.png",$="/resource/img/index/cheap.png",T="/resource/img/index/icon_line.png";const L=u({name:"IndexPage",components:{},setup(){const e=h([]),g=s=>{l.value=s,s===0?e.value=y:s===1?e.value=H:e.value=B},l=h(0);return x(async()=>{e.value=y}),{goOrderDetails:s=>{k.push({path:"orderDetailsNew",query:{item:JSON.stringify(s)}})},imgPath:s=>{try{return"/resource/img/shipComplay/"+s+".png"}catch{return"/resource/img/shipComplay/empty.png"}},onCheck:g,marketDataList:e,activeClass:l}}}),d=e=>(_("data-v-b1690984"),e=e(),S(),e),D={class:"ship-wrap"},U={class:"marketing-box"},F={class:"tab"},E=d(()=>i("div",{class:"tab-left"},[i("img",{src:O,style:{"margin-right":"8px"},alt:""}),i("img",{src:I,alt:""})],-1)),z={class:"tab-right"},Y=d(()=>i("div",{class:"fast-content"},[i("span",null,"\u7F8E\u897F\u7279\u5FEB")],-1)),R=[Y],j=d(()=>i("span",null,"\u7F8E\u4E1C\u8D85\u503C",-1)),V=[j],X=d(()=>i("span",null,"IPI\u76F4\u8FBE",-1)),K=[X],W={style:{width:"100%"},class:"marketing-content"},q=["onClick"],J=d(()=>i("img",{src:$,class:"cheap-img",alt:""},null,-1)),Q={class:"title"},Z={class:"title-left"},tt=["src"],it={key:0,class:"title-right-item"},et={class:"title-right-item"},rt=d(()=>i("div",{class:"title-middle"},[i("img",{src:T,alt:""})],-1)),nt={key:0,class:"title-right-item"},ot={class:"title-right-item"},at={class:"costPrice"},ct={class:"costPrice-left"},st={key:0},dt={key:1},gt={key:2},pt={class:"costPrice-right"},lt={key:0},ft={key:1},ht={key:2},Ct=d(()=>i("span",null,a("40HQ"),-1)),Pt=[Ct],yt={class:"price"},mt={class:"price-left"},bt={key:0},ut={key:1},xt={key:2},vt={key:0,class:"price-right"},kt=d(()=>i("div",{class:"line"},null,-1)),Nt={class:"message"},At={class:"message-right"},Gt=d(()=>i("div",{class:"message-left"},[i("span",{style:{"text-align":"center"}}," \u7ACB\u5373\u8BA2\u8231> ")],-1));function _t(e,g,l,m,b,s){const f=N("el-tooltip");return r(),n("div",null,[i("div",D,[i("div",U,[i("div",F,[E,i("div",z,[i("div",{class:p(e.activeClass===0?"active fast":"unActive fast"),onClick:g[0]||(g[0]=t=>e.onCheck(0))},R,2),i("div",{class:p(e.activeClass===1?"active cheap":"unActive cheap")},[i("div",{class:"cheap-content",onClick:g[1]||(g[1]=t=>e.onCheck(1))},V)],2),i("div",{class:p(e.activeClass===2?"active direct":"unActive direct")},[i("div",{class:"direct-content",onClick:g[2]||(g[2]=t=>e.onCheck(2))},K)],2)])]),i("div",null,[i("div",W,[(r(!0),n(A,null,G(e.marketDataList,t=>(r(),n("div",{key:t.id,onClick:St=>e.goOrderDetails(t),class:"marketing-item"},[J,i("div",Q,[i("div",Z,[i("img",{src:e.imgPath(t.carrier)},null,8,tt),t.originPortCityName.length<=10?(r(),n("span",it,a(t.originPortCityName),1)):(r(),C(f,{key:1,effect:"dark",content:t.originPortCityName,placement:"top-start"},{default:P(()=>[i("span",et,a(t.originPortCityName),1)]),_:2},1032,["content"]))]),rt,i("div",{class:p((t.destinationPortCityName.length>=10,"title-right"))},[t.destinationPortCityName.length<=10?(r(),n("span",nt,a(t.destinationPortCityName),1)):(r(),C(f,{key:1,effect:"dark",content:t.destinationPortCityName,placement:"top-start"},{default:P(()=>[i("span",ot,a(t.destinationPortCityName),1)]),_:2},1032,["content"]))],2)]),i("div",at,[i("div",ct,[t.containsPrice.twentyGpPrice?(r(),n("span",st,a(`${t.containsPrice.twentyGpBasicPrice!=null?"$"+t.containsPrice.twentyGpBasicPrice:"$-"}${t.containsPrice.fortyHighCubePrice&&!t.containsPrice.fortyGpPrice?"/":""}`),1)):c("",!0),t.containsPrice.fortyGpPrice?(r(),n("span",dt,[i("span",null,a(`${t.containsPrice.twentyGpPrice?"/":""}${t.containsPrice.fortyGpBasicPrice!=null?"$"+t.containsPrice.fortyGpBasicPrice:"$-"}${t.containsPrice.fortyHighCubePrice?"/":""}`),1)])):c("",!0),t.containsPrice.fortyHighCubePrice?(r(),n("span",gt,a(t.containsPrice.fortyHighCubeBasicPrice!=null?"$"+t.containsPrice.fortyHighCubeBasicPrice:"$-"),1)):c("",!0)]),i("div",pt,[t.containsPrice.twentyGpPrice?(r(),n("span",lt,a(`20GP${t.containsPrice.fortyHighCubePrice&&!t.containsPrice.fortyGpPrice?"/":""}`),1)):c("",!0),t.containsPrice.fortyGpPrice?(r(),n("span",ft,[i("span",null,a(`${t.containsPrice.twentyGpPrice?"/":""}40GP${t.containsPrice.fortyHighCubePrice?"/":""}`),1)])):c("",!0),t.containsPrice.fortyHighCubePrice?(r(),n("span",ht,Pt)):c("",!0)])]),i("div",yt,[i("div",mt,[t.containsPrice.twentyGpPrice?(r(),n("span",bt,a(`$${t.containsPrice.twentyGpPrice}${t.containsPrice.fortyHighCubePrice&&!t.containsPrice.fortyGpPrice?"/":""}`),1)):c("",!0),t.containsPrice.fortyGpPrice?(r(),n("span",ut,[i("span",null,a(`${t.containsPrice.twentyGpPrice?"/":""}$${t.containsPrice.fortyGpPrice}${t.containsPrice.fortyHighCubePrice?"/":""}`),1)])):c("",!0),t.containsPrice.fortyHighCubePrice?(r(),n("span",xt,a("$"+t.containsPrice.fortyHighCubePrice),1)):c("",!0)]),t.remainTeu==0?(r(),n("div",vt," \u552E\u7F44 ")):c("",!0)]),kt,i("div",Nt,[i("div",At,[i("span",null,"\u5F00\u822A\u65E5\u671F\uFF1A"+a(t.ETD),1)]),Gt])],8,q))),128))])])])])])}var It=v(L,[["render",_t],["__scopeId","data-v-b1690984"]]);export{It as default};
