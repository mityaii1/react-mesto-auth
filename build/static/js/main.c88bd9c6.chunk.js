(this["webpackJsonpreact-mesto-auth"]=this["webpackJsonpreact-mesto-auth"]||[]).push([[0],{29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),i=a(7),l=(a(29),a(23)),s=a(11),u=a(1),m=a(2),p=a.p+"static/media/header-logo.a307e1c4.svg";var d=function(e){return!0===e.loggedIn?r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:p,alt:"\u041b\u043e\u0433\u043e"}),r.a.createElement("div",{className:"header__auth"},r.a.createElement("p",{className:"header__auth_email"},e.email),r.a.createElement("button",{className:"header__auth_link-exit",onClick:e.signOut,href:e.routePath},e.routePathName))):r.a.createElement("header",{className:"header"},r.a.createElement("img",{className:"header__logo",src:p,alt:"\u041b\u043e\u0433\u043e"}),r.a.createElement("div",{className:"header__auth"},r.a.createElement(i.b,{to:e.routePath,className:"header__auth_link"},e.routePathName)))};var _=function(e){var t=r.a.useState(""),a=Object(u.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),l=Object(u.a)(c,2),s=l[0],m=l[1];return r.a.createElement("div",{className:"register"},r.a.createElement("h1",{className:"register__title"},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.register(n,s)},className:"register__form"},r.a.createElement("input",{name:"email",type:"email",className:"register__input",placeholder:"Email",required:!0,onChange:function(e){o(e.target.value)}}),r.a.createElement("input",{name:"password",type:"password",className:"register__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:function(e){m(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"register__button-singup"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f")),r.a.createElement("div",{className:"register__auth"},r.a.createElement("p",null,"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"),r.a.createElement(i.b,{to:"/sign-in",className:"register__auth_link"},"\u0412\u043e\u0439\u0442\u0438")))};var h=Object(m.g)((function(e){var t=r.a.useState(""),a=Object(u.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),i=Object(u.a)(c,2),l=i[0],s=i[1];return r.a.createElement("div",{className:"register"},r.a.createElement("h1",{className:"register__title"},"\u0412\u0445\u043e\u0434"),r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.register(n,l)},className:"register__form"},r.a.createElement("input",{name:"email",type:"email",className:"register__input",placeholder:"Email",required:!0,onChange:function(e){o(e.target.value)}}),r.a.createElement("input",{name:"password",type:"password",className:"register__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",required:!0,onChange:function(e){s(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"register__button-singup"},"\u0412\u043e\u0439\u0442\u0438")))})),f=r.a.createContext();var E=function(e){var t=r.a.useContext(f),a=e.card.owner._id===t._id,n=e.card.likes.some((function(e){return e._id===t._id})),o="element__button-like ".concat(n?"element__button-like_active":"");return r.a.createElement("div",{className:"element"},a?r.a.createElement("button",{className:"element__button-remove transparent",onClick:function(){e.onCardDelete(e.card)},type:"button","aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}):"",r.a.createElement("img",{src:e.card.link,className:"element__image",alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),r.a.createElement("h3",{className:"element__title"},e.card.name),r.a.createElement("button",{className:"card__like ".concat(o," transparent"),onClick:function(){e.onCardLike(e.card)},type:"button","aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f"}),r.a.createElement("span",{className:"element__number-likes"},e.card.likes.length))};var b=function(e){var t=r.a.useContext(f);return r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"profile"},r.a.createElement("div",{onClick:e.onEditAvatar,className:"profile__avatar-edit"},r.a.createElement("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"})),r.a.createElement("div",{className:"profile__info"},r.a.createElement("div",{className:"profile__edit-form"},r.a.createElement("h1",{className:"profile__title"},t.name),r.a.createElement("button",{onClick:e.onEditProfile,className:"profile__button profile__edit-button transparent",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c"})),r.a.createElement("p",{className:"profile__subtitle"},t.about)),r.a.createElement("button",{onClick:e.onAddPlace,className:"profile__button profile__add-button transparent",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})),r.a.createElement("section",{className:"elements"},e.cards.map((function(t){return r.a.createElement(E,{card:t,key:t._id,onCardClick:e.onCardClick,onCardDelete:e.onCardDelete,onCardLike:e.onCardLike})}))))};var g=function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2020 Mesto Russia"))},v=a(21),N=a(22),k=new(function(){function e(t){Object(v.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(N.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getUserInfo",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then(this._getResponseData)}},{key:"setUserInfo",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then(this._getResponseData)}},{key:"addNewCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this._headers}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this._headers}).then(this._getResponseData)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then(this._getResponseData)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"b1f35061-c301-414a-92c3-da1eeb67e987","Content-Type":"application/json"}});var C=function(e){return r.a.createElement("section",{className:"popup popup_".concat(e.name," ").concat(e.isOpen?"popup_opened":"")},r.a.createElement("div",{className:"popup__container"},r.a.createElement("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit},r.a.createElement("button",{className:"popup__close-icon transparent",onClick:e.onClose,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),r.a.createElement("h2",{className:"popup__title"},e.title),e.children,r.a.createElement("button",{type:"submit",className:"popup__button-save"},e.buttonText))))};var O=function(e){var t=r.a.useContext(f),a=r.a.useState(""),n=Object(u.a)(a,2),o=n[0],c=n[1],i=r.a.useState(""),l=Object(u.a)(i,2),s=l[0],m=l[1];return r.a.useEffect((function(){c(t.name),m(t.about)}),[t]),r.a.createElement(C,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:s})}},r.a.createElement("div",{className:"popup__field"},r.a.createElement("input",{name:"full_name",type:"text",id:"name-input",className:"popup__input popup__input_name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40",value:o,onChange:function(e){c(e.target.value)}}),r.a.createElement("span",{className:"popup__input-error",id:"name-input-error"})),r.a.createElement("div",{className:"popup__field"},r.a.createElement("input",{name:"about_me",type:"text",id:"about-me-input",className:"popup__input popup__input_about-me",placeholder:"\u041e \u0441\u0435\u0431\u0435",required:!0,minLength:"2",maxLength:"200",value:s,onChange:function(e){m(e.target.value)}}),r.a.createElement("span",{className:"popup__input-error",id:"about-me-input-error"})))};var y=function(e){var t=r.a.useRef("");return r.a.createElement(C,{name:"update-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})}},r.a.createElement("div",{className:"popup__field"},r.a.createElement("input",{name:"link_to_avatar",type:"url",id:"link-input",ref:t,className:"popup__input popup__input_link-to-avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0}),r.a.createElement("span",{className:"popup__input-error",id:"link-input-error"})))};var j=function(e){var t=r.a.useState(""),a=Object(u.a)(t,2),n=a[0],o=a[1],c=r.a.useState(""),i=Object(u.a)(c,2),l=i[0],s=i[1];return r.a.createElement(C,{name:"card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:n,link:l})}},r.a.createElement("div",{className:"popup__field"},r.a.createElement("input",{name:"name_card",type:"text",id:"card-input",className:"popup__input popup__input_name-card",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",value:n,onChange:function(e){o(e.target.value)}}),r.a.createElement("span",{className:"popup__input-error",id:"card-input-error"})),r.a.createElement("div",{className:"popup__field"},r.a.createElement("input",{name:"link_to_image",type:"url",id:"link-input",className:"popup__input popup__input_link-to-image",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,value:l,onChange:function(e){s(e.target.value)}}),r.a.createElement("span",{className:"popup__input-error",id:"link-input-error"})))};var S=function(e){return!!e.card&&r.a.createElement("section",{className:"popup popup_images popup_opened"},r.a.createElement("figure",{className:"popup__container-image"},r.a.createElement("button",{className:"popup__close-icon popup__close-image transparent",onClick:e.onClose,type:"button","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),r.a.createElement("img",{src:e.card.link,className:"popup__preview",alt:e.card.name}),r.a.createElement("figcaption",{className:"popup__title-image"},e.card.name)))},U=a(24),P=function(e){var t=e.component,a=Object(U.a)(e,["component"]);return r.a.createElement(m.b,null,(function(){return!0===a.loggedIn?r.a.createElement(t,a):r.a.createElement(m.a,{to:"./sign-in"})}))};a(35);var D=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=(t[1],r.a.useState("")),o=Object(u.a)(n,2),c=(o[0],o[1],r.a.useState(!1)),i=Object(u.a)(c,2),p=i[0],E=i[1],v=r.a.useState(!1),N=Object(u.a)(v,2),U=N[0],D=N[1],w=r.a.useState(!1),x=Object(u.a)(w,2),L=x[0],A=x[1],T=r.a.useState(!1),R=Object(u.a)(T,2),I=R[0],q=R[1],J=r.a.useState(!1),B=Object(u.a)(J,2),H=B[0],M=B[1],W=r.a.useState({name:"",about:"",avatar:""}),z=Object(u.a)(W,2),$=z[0],F=z[1],G=r.a.useState([]),K=Object(u.a)(G,2),Q=K[0],V=K[1],X=function(){E(!1),D(!1),A(!1),q(!1),M(!1)};return r.a.useEffect((function(){Promise.all([k.getUserInfo(),k.getInitialCards()]).then((function(e){var t=Object(u.a)(e,2),a=t[0],n=t[1];F(a),V(n)})).catch((function(e){console.log(e)}))}),[]),r.a.createElement(f.Provider,{value:$},r.a.createElement("div",{className:"page"},r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/sign-up"},r.a.createElement(d,{routePathName:"\u0412\u043e\u0439\u0442\u0438",routePath:"/sign-in"}),r.a.createElement(_,null)),r.a.createElement(m.b,{path:"/sign-in"},r.a.createElement(d,{routePathName:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",routePath:"/sign-up"}),r.a.createElement(h,null)),r.a.createElement(P,{path:"/",loggedIn:a,component:b,onEditAvatar:function(){E(!p)},onEditProfile:function(){D(!U)},onAddPlace:function(){A(!L)},cards:Q,onCardClick:function(e){q(e)},onCardDelete:function(e){k.deleteCard(e._id).then((function(){V(Q.filter((function(t){return t._id!==e._id})))})).catch((function(e){console.log(e)}))},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===$._id}));t||k.addLike(e._id).then((function(t){var a=Q.map((function(a){return a._id===e._id?t:a}));V(a)})),t&&k.deleteLike(e._id).then((function(t){var a=Q.map((function(a){return a._id===e._id?t:a}));V(a)}))}})),r.a.createElement(m.b,null,!0===a?r.a.createElement(m.a,{to:"/sign-in"}):r.a.createElement(m.a,{to:"/"})),r.a.createElement(m.b,{path:"*"},r.a.createElement(m.a,{to:"/sign-in"})),r.a.createElement(y,{isOpen:p,onClose:X,onUpdateAvatar:function(e){k.updateAvatar(e.avatar).then((function(e){F(Object(s.a)(Object(s.a)({},$),{},{avatar:e.avatar})),X()})).catch((function(e){console.log(e)}))}}),r.a.createElement(O,{isOpen:U,onClose:X,onUpdateUser:function(e){k.setUserInfo(e.name,e.about).then((function(e){F(Object(s.a)(Object(s.a)({},$),{},{name:e.name,about:e.about})),X()})).catch((function(e){console.log(e)}))}}),r.a.createElement(j,{isOpen:L,onClose:X,onAddPlace:function(e){k.addNewCard(e.name,e.link).then((function(e){V([e].concat(Object(l.a)(Q))),X()})).catch((function(e){console.log(e)}))}}),r.a.createElement(C,{name:"remove-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:H,onClose:X}),r.a.createElement(S,{name:"images",card:I,onClose:X}),r.a.createElement(g,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.c88bd9c6.chunk.js.map