(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{108:function(e,t,n){e.exports=n(172)},113:function(e,t,n){},118:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(34),o=n(35),r=n(37),c=n(36),i=n(38),u=n(0),l=n.n(u),s=n(2),m=n(105),p=n(13),h=(n(113),function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(r.a)(this,Object(c.a)(t).call(this,e))).state={pokemonUrl:"",pokemonName:""},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.createCard()}},{key:"createCard",value:function(){var e,t=this,n="https://pokeapi.co/api/v2/pokemon/".concat(this.props.id);fetch(n).then((function(e){return e.json()})).then((function(n){e=n.sprites.front_default,t.setState({pokemonUrl:e,pokemonName:n.forms[0].name})}))}},{key:"render",value:function(){var e=this.state,t=e.pokemonUrl,n=e.pokemonName;return l.a.createElement("div",{className:"pokemonCard"},l.a.createElement("img",{src:t}),l.a.createElement("p",null,n))}}]),t}(u.Component)),f=Object(p.e)(h),d=n(174),k=(n(118),n(119),function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];return(n=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(i)))).state={currentPageSize:10,currentPage:1,idArray:[1,2,3,4,5,6,7,8,9,10]},n.onShowSizeChange=function(e,t){console.log("@"),n.pageChanger(e,t)},n.pageChanger=function(e,t){for(var a=[],o=e*t-t+1;o<=e*t;o++)a.push(o);n.setState({idArray:a})},n}return Object(i.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.onShowSizeChange,t=this.pageChanger,n=this.state,a=n.idArray,o=n.currentPage;return l.a.createElement("div",null,l.a.createElement("div",{className:"headerBlock"}),l.a.createElement("div",{className:"mainBlock"},l.a.createElement("div",{className:"pokemonsInfo"},a.map((function(e){return console.log(e),l.a.createElement(f,{id:e,key:e})}))),l.a.createElement(d.a,{showSizeChanger:!0,onShowSizeChange:e,onChange:t,defaultCurrent:o,total:810,pageSizeOptions:[10,20,50]})))}}]),t}(u.Component)),v=Object(p.e)(k),b=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement(p.a,{path:"/",exact:!0,component:v}),l.a.createElement(p.a,{path:"/home",exact:!0,component:v})))}}]),t}(l.a.Component);Object(s.render)(l.a.createElement(b,null),document.getElementById("root"))}},[[108,1,2]]]);
//# sourceMappingURL=main.c1fb2b99.chunk.js.map