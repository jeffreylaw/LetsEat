(this["webpackJsonplets-eat-react"]=this["webpackJsonplets-eat-react"]||[]).push([[0],{37:function(e,t,a){e.exports=a(86)},43:function(e,t,a){e.exports=a.p+"static/media/non_existent_image2.7e62e439.jpg"},44:function(e,t,a){e.exports=a.p+"static/media/dishes.fb0434cc.svg"},84:function(e,t,a){e.exports=a.p+"static/media/cute.12bc02f1.svg"},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(7),i=a(12),s=function(e){var t=e.foodList,a=e.setFoodList,n={};return 0===t.length?null:r.a.createElement("div",null,r.a.createElement("ul",{className:"list-group list-group-flush",style:{margin:"10px"}},t.map((function(e){return r.a.createElement("li",{className:"list-group-item",style:n,key:e},e," ",r.a.createElement(i.a,{variant:"danger",onClick:function(){return a(t.filter((function(t){return t!==e})))}},"\u2715"))}))))},u=function(e){var t=e.message,a=e.type;return null===t?null:"error"===a?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},t):r.a.createElement("div",{className:"alert alert-success",role:"alert"},t)},m=a(10),d=function(e){var t=e.restaurant,n=e.coordinates,l=t.location.address.split(" ").join("+").replace(/,/g,""),c="".concat(n.latitude,",").concat(n.longitude),o="https://www.google.com/maps/dir/?api=1&origin=".concat(c,"&destination=").concat(t.name,"+").concat(l);return r.a.createElement(m.a,{style:{width:"18rem",margin:"0 auto"}},r.a.createElement(m.a.Img,{variant:"top",src:t.thumb||a(43)}),r.a.createElement(m.a.Body,null,r.a.createElement(m.a.Title,{className:"centerText"},r.a.createElement("a",{href:t.url,target:"_blank",rel:"noopener noreferrer"},t.name)),r.a.createElement(m.a.Subtitle,{className:"text-dark"},t.location.address),r.a.createElement(m.a.Text,null,r.a.createElement("b",null,"Hours: "),t.timings,r.a.createElement("br",null),r.a.createElement("b",null,"Cuisines: "),t.cuisines," ",r.a.createElement("br",null),r.a.createElement("b",null,"Price range: "),"$".repeat(t.price_range),"  ",r.a.createElement("b",null,"Rating: "),t.user_rating.aggregate_rating," (",t.user_rating.votes,")",r.a.createElement("a",{href:o,className:"btn btn-outline-primary mt-1",style:{display:"block"},target:"_blank",rel:"noopener noreferrer"},"Get Directions"))))},f=a(15),g=a(14),E=function(e){var t=e.restaurants,a=e.coordinates;return console.log(t),r.a.createElement(g.a,{fluid:!0},r.a.createElement(f.a,{className:"justify-content-md-center"},t.map((function(e){return r.a.createElement(d,{key:e.id,restaurant:e,coordinates:a})}))))},h=function(e){var t=e.restaurantList,a=e.newSearch,n=e.foodInput,l=e.handleFoodInputChange,c=e.addFoodItem,o=e.handleChooseButton;return t.length>0?r.a.createElement(i.a,{onClick:a},"Start new search"):r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",value:n,onChange:l}),r.a.createElement(i.a,{onClick:c,className:"ml-1"},"Add"),r.a.createElement(i.a,{onClick:o,className:"ml-1"},"Decide for me"),r.a.createElement("br",null))},p=a(19),b=function(){return r.a.createElement(g.a,{fluid:!0},r.a.createElement(f.a,{className:"d-flex flex-column"},r.a.createElement(p.a,{className:"d-flex flex-sm-row flex-column align-items-center justify-content-center"},r.a.createElement("img",{src:a(44),style:{width:"16rem",marginRight:"0"},alt:"dishes with smiley face"}),r.a.createElement("p",{className:"lead intro-p"},"LetsEat is a eatery decider app for the undecisive. Create a list of dishes or cuisines of what you or your friends might want to eat and we will do the decision-making for you.")),r.a.createElement(p.a,{className:"d-flex align-items-center justify-content-center lead"},r.a.createElement("ol",null,r.a.createElement("h3",{className:"font-weight-light"},"How to use"),r.a.createElement("li",null,"Enter dishes or cuisines that you might like to eat."),r.a.createElement("li",null,"Let us randomly choose an item from the list."),r.a.createElement("li",null,"Browse through the relevant restaurants around your location.*"),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"},"*Access to your location required. Accuracy may vary on PC devices."))))))},y=a(20),v=a.n(y),j=a(31),w=a(32),O=a.n(w),k={get:function(){var e=Object(j.a)(v.a.mark((function e(t,a,n){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://developers.zomato.com/api/v2.1/search?q=".concat(t,"&start=").concat(n,"&lat=").concat(a.latitude,"&lon=").concat(a.longitude,"&sort=real_distance&order=desc"),{headers:{"user-key":"2da08fdb0e253646533d241423c90e16"}});case 2:return r=e.sent,e.abrupt("return",r.data.restaurants);case 4:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},N=a(33),x=a.n(N),C=a(89),T=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),l=t[0],c=t[1],m=Object(n.useState)(!0),d=Object(o.a)(m,2),p=d[0],y=d[1],v=Object(n.useState)(""),j=Object(o.a)(v,2),w=j[0],O=j[1],N=Object(n.useState)(""),T=Object(o.a)(N,2),I=T[0],S=T[1],L=Object(n.useState)(0),F=Object(o.a)(L,2),_=F[0],A=F[1],B=Object(n.useState)({longitude:null,latitude:null}),D=Object(o.a)(B,2),M=D[0],R=D[1],P=Object(n.useState)(null),q=Object(o.a)(P,2),H=q[0],J=q[1],U=Object(n.useState)(null),G=Object(o.a)(U,2),z=G[0],V=G[1],$=Object(n.useState)([]),K=Object(o.a)($,2),Q=K[0],W=K[1],X=Object(n.useState)(!1),Y=Object(o.a)(X,2),Z=Y[0],ee=Y[1],te=Object(n.useState)(!1),ae=Object(o.a)(te,2),ne=ae[0],re=ae[1],le=Object(n.useRef)(),ce=Object(n.useRef)(),oe=Object(n.useRef)();Object(n.useEffect)((function(){if(I&&M.latitude&&M.longitude){ee(!0),k.get(I,M,_).then((function(e){0===(e=e.map((function(e){return delete e.restaurant.apikey,e.restaurant}))).length&&(V("No restaurants found with the keyword: ".concat(I)),setTimeout((function(){V(null)}),2e3)),W((function(t){return t.concat(e)})),0===_&&window.scrollTo({top:le.current.offsetTop-10,behavior:"smooth"}),ee(!1)})).catch((function(e){J("Error: ".concat(H)),setTimeout((function(){J(null)}),3e3)}))}}),[I,M,_,H]);var ie=function(e){switch(e.code){case e.PERMISSION_DENIED:J("Location permission was declined, please enable before trying again."),setTimeout((function(){J(null)}),5e3);break;case e.POSITION_UNAVAILABLE:J("Location information is unavailable."),setTimeout((function(){J(null)}),5e3);break;case e.TIMEOUT:J("The request to get user location timed out."),setTimeout((function(){J(null)}),5e3);break;default:J("An unknown error occurred."),setTimeout((function(){J(null)}),5e3)}},se=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){R({longitude:e.coords.longitude,latitude:e.coords.latitude})}),ie,{enableHighAccuracy:!0,maximumAge:0,timeout:5e3}):(J("Geolocation is not supported by this browser"),setTimeout((function(){J(null)}),5e3))},ue=function(){return null!==M.latitude&&null!==M.latitude};Object(n.useEffect)((function(){var e=new IntersectionObserver((function(e){Object(o.a)(e,1)[0].isIntersecting?re(!1):re(!0)}),{root:null,rootMargin:"0px",threshold:0});oe.current&&e.observe(oe.current)}),[oe]);return r.a.createElement("div",null,r.a.createElement(C.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(C.a.Brand,{href:"#",onClick:function(){return c([]),y(!0),O(""),S(""),A(0),R({longitude:null,latitude:null}),W([]),void re(!1)}},"LetsEat"),r.a.createElement(C.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(C.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a.Collapse,{className:"justify-content-end"},r.a.createElement(C.a.Text,null,"Created by: ",r.a.createElement("a",{href:"#login"},"Jeffrey Law"))))),r.a.createElement(g.a,{fluid:!0},M.latitude,", ",M.longitude,r.a.createElement(f.a,{className:"justify-content-center"},r.a.createElement(u,{message:H,type:"error"})),r.a.createElement(f.a,{ref:oe},r.a.createElement(b,null)),r.a.createElement(f.a,{className:"justify-content-center",ref:le},r.a.createElement(h,{restaurantList:Q,newSearch:function(){W([]),c([]),S(""),y(!0)},foodInput:w,handleFoodInputChange:function(e){O(e.target.value)},addFoodItem:function(){var e=w.toLowerCase().trim();y(!0),O(""),l.includes(e)&&(V("Food item is already in the list"),setTimeout((function(){V(null)}),3e3)),!l.includes(e)&&e.length>0&&c(l.concat(e))},handleChooseButton:function(){ue()||se(),y(!1),c([]),S(l[Math.floor(Math.random()*l.length)])}})),r.a.createElement(f.a,{className:"justify-content-center mt-2"},r.a.createElement(u,{message:z,type:"error"})),r.a.createElement(f.a,{className:"justify-content-center"},I&&Q.length>0&&r.a.createElement("h1",null,"It's ",I," time! ",r.a.createElement("img",{className:"birdIcon",src:a(84),alt:"bird icon"})),r.a.createElement(s,{foodList:p?l:[],setFoodList:c}))),r.a.createElement(g.a,{fluid:!0},r.a.createElement(E,{restaurants:Q,coordinates:M}),r.a.createElement(f.a,{className:"justify-content-center test",ref:ce},Z&&r.a.createElement(x.a,{type:"Circles",color:"#00BFFF"}),!Z&&I&&Q.length>0&&100!==Q.length&&r.a.createElement(i.a,{onClick:function(){return A(_+20)}},"Show more restaurants"),r.a.createElement(i.a,{style:{display:Q.length>0&&ne?"inline-block":"none"},id:"pageUp",onMouseDown:function(e){return e.preventDefault()},onClick:function(){return window.scrollTo({top:le.current.offsetTop-10,behavior:"smooth"})}},"\u27a4"))))};a(85);c.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ba35df38.chunk.js.map