(this["webpackJsonptest-perco"]=this["webpackJsonptest-perco"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(10),r=c.n(s),o=(c(26),c(12)),u=(c(27),c(1)),l=function(e){var t=e.openPopupHandler,c=e.card,a=Object(n.useCallback)((function(){t(c.date)}),[c,t]);return Object(u.jsx)("li",{className:"places__item card",children:Object(u.jsx)("button",{onClick:a,className:"card__button",type:"button",children:Object(u.jsx)("img",{className:"card__image",src:c.image,alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"})})})},i=c(5),d=c(17),j=c(18),b=new(function(){function e(t){Object(d.a)(this,e),this._url=t}return Object(j.a)(e,[{key:"getCards",value:function(){return fetch(this._url).then((function(e){return e.json()})).then((function(e){return e.cards}))}}]),e}())("../data/data.json"),p="CHANGE_CARDS",m="CHANGE_ACTIVE_CARD",O=function(e){return{type:p,payload:e}},f=function(e){return{type:m,payload:e}},_=function(){return function(e){b.getCards().then((function(t){e(O(t))}))}},h=(c(32),function(){var e=Object(i.c)((function(e){return e.cards})),t=Object(i.b)(),c=Object(n.useState)({firstCard:0,lastCard:9}),a=Object(o.a)(c,2),s=a[0],r=a[1];Object(n.useEffect)((function(){t(_())}),[t]);var d=Object(n.useCallback)((function(e){t(f(e))}),[t]),j=Object(n.useCallback)((function(){var e=s.lastCard+9;r({firstCard:s.firstCard,lastCard:e})}),[s]);return Object(u.jsxs)("section",{className:"places page__section",children:[Object(u.jsx)("ul",{className:"places__list",children:e.cards&&Object.values(e.cards).slice(s.firstCard,s.lastCard).map((function(e){return Object(u.jsx)(l,{openPopupHandler:d,card:e},e.date)}))}),Object.values(e.cards).length>=s.lastCard&&Object(u.jsx)("button",{onClick:j,className:"places__button-more",type:"button",children:"\u0431\u043e\u043b\u044c\u0448\u0435 \u0444\u043e\u0442\u043e"})]})}),v=c.p+"static/media/icon-user.8530a465.svg",x=(c(33),function(e){var t=e.comment;return Object(u.jsxs)("li",{className:"comment",children:[Object(u.jsxs)("div",{className:"comment__user-info",children:[Object(u.jsx)("img",{src:v,className:"comment__user-photo",alt:"\u0444\u043e\u0442\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),Object(u.jsx)("p",{className:"comment__user-name",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})]}),Object(u.jsx)("p",{className:"comment__text",children:t})]})}),C=c(19),N=c.n(C),k=(c(34),function(){var e=Object(i.c)((function(e){return e.cards})),t=Object(i.b)(),c=e.cards[e.openCard],a=Object(n.useState)({value:""}),s=Object(o.a)(a,2),r=s[0],l=s[1];Object(n.useEffect)((function(){var e=function(e){"Escape"===e.key&&d()};return document.body.style.overflow="hidden",window.addEventListener("keydown",e),function(){document.body.style.overflow="auto",window.removeEventListener("keydown",e)}}));var d=Object(n.useCallback)((function(){t(f(null))}),[t]),j=Object(n.useCallback)((function(e){l({value:e.target.value})}),[]),b=Object(n.useCallback)((function(c){if(c.preventDefault(),""!==r.value){var n=e.cards,a=r.value;n[e.openCard].comments.unshift(a),t(O(n)),l({value:""})}}),[r,e.cards,e.openCard,t]),p=Object(n.useCallback)((function(){var c=e.cards,n=c[e.openCard];"true"===n.like?n.like="false":n.like="true",t(O(c))}),[e.cards,e.openCard,t]),m=N()({"popup__button-like":!0,"popup__button-like_active":"true"===c.like});return Object(u.jsx)("div",{className:"popup",children:Object(u.jsxs)("div",{className:"popup__container",children:[Object(u.jsx)("img",{className:"popup__image",src:c.image,alt:"\u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435"}),Object(u.jsxs)("div",{className:"popup__wrapper",children:[Object(u.jsx)("ul",{className:"popup__comments",children:c&&c.comments.length>0&&c.comments.map((function(e){return Object(u.jsx)(x,{comment:e},e)}))}),Object(u.jsx)("div",{className:"popup__like-container",children:Object(u.jsx)("button",{onClick:p,className:m,type:"button"})}),Object(u.jsxs)("form",{onSubmit:b,className:"popup__form",children:[Object(u.jsx)("textarea",{onChange:j,className:"popup__new-comment",value:r.value,placeholder:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(u.jsx)("button",{className:"popup__button-submit",type:"submit"})]})]}),Object(u.jsx)("button",{onClick:d,className:"popup__button-close"})]})})}),g=(c(35),function(){return Object(u.jsx)("header",{className:"header page__section",children:Object(u.jsx)("h1",{className:"header__title",children:"\u0422\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435, \u0421\u0435\u0440\u0433\u0435\u0439 \u041a\u043e\u043c\u043b\u0435\u0432"})})});var y=function(){var e=Object(i.c)((function(e){return e.cards}));return Object(u.jsxs)("div",{className:"page__content",children:[Object(u.jsx)(g,{}),Object(u.jsx)("main",{className:"content",children:Object(u.jsx)(h,{})}),null!==e.openCard&&Object(u.jsx)(k,{})]})},w=c(21),E=c(8),A=c(9),S={cards:{cards:{},openCard:null}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S.cards,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(A.a)(Object(A.a)({},e),{},{cards:t.payload});case m:return Object(A.a)(Object(A.a)({},e),{},{openCard:t.payload});default:return e}},D=Object(E.b)({cards:H}),G=c(20),I=Object(E.c)(D,Object(E.a)(G.a));c(36),c(37);r.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(w.a,{children:Object(u.jsx)(i.a,{store:I,children:Object(u.jsx)(y,{})})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ac42b760.chunk.js.map