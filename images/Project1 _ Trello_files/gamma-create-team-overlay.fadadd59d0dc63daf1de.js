(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{3893:function(e,t,n){var a=n(3894);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(18)(a,r);a.locals&&(e.exports=a.locals)},3894:function(e,t,n){(t=e.exports=n(17)(!1)).push([e.i,"._3gUubwRZDWaOF0{align-items:center;box-sizing:border-box;display:flex;height:100vh;justify-content:center;overflow:auto;width:100vw}._1URVGCiHsrWlwF{background:rgba(0,0,0,.6)}._2WhIqhRFBTG7Ry{background:rgba(0,0,0,.75)}._1rhhEuk7pUqNV_{background:transparent;position:relative;top:48px;margin-bottom:80px}._1rhhEuk7pUqNV_:focus{outline:none}",""]),t.locals={overlay:"_3gUubwRZDWaOF0",light:"_1URVGCiHsrWlwF",dark:"_2WhIqhRFBTG7Ry",contents:"_1rhhEuk7pUqNV_"}},3919:function(e,t,n){"use strict";var a,r=n(0),o=n.n(r),i=n(47),c=n(221),l=n(145),s=n(263),u=n(25),m=n(5),p=n.n(m),d=n(3893),b=n.n(d);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}!function(e){e.LIGHT="light",e.DARK="dark"}(a||(a={}));var h=function(e){var t=e.background,n=void 0===t?a.LIGHT:t,i=e.className,c=void 0===i?"":i,l=e.closeOnEscape,s=void 0===l||l,m=e.children,d=e.isAnyPopoverCurrentlyOpen,h=e.onClose,v=void 0===h?function(){}:h,g=f(Object(r.useState)(!1),2),x=g[0],y=g[1];return Object(u.useShortcut)(function(){s&&v()},{scope:u.Scope.Overlay,key:u.Key.Escape}),o.a.createElement("div",{className:p()(b.a.overlay,b.a[n],c),onMouseDown:function(e){y(!d&&e.target===e.currentTarget)},onMouseUp:function(){x&&v()},role:"dialog"},o.a.createElement("div",{className:b.a.contents},m))};function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e,t){return!t||"object"!==v(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"a",function(){return a});var _=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),x(this,y(t).apply(this,arguments))}var n,a,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,o.a.Component),n=t,(a=[{key:"render",value:function(){return o.a.createElement(c.b,{layer:c.c.Overlay},o.a.createElement(h,this.props))}}])&&g(n.prototype,a),r&&g(n,r),t}(),O=Object(i.c)(function(e){return{isAnyPopoverCurrentlyOpen:Object(s.a)(e)}},function(e){return{onClose:function(){e(Object(l.removeOverlay)())}}})(_);t.b=O},3945:function(e,t,n){"use strict";n.r(t),n.d(t,"InviteTeamMembersAutocompleteComponent",function(){return b});var a=n(0),r=n.n(a),o=n(9),i=n(2),c=n(1),l=n(4016),s=n.n(l);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var m=n(96),p=n(831),d=Object(o.forTemplate)("org_members"),b=function(e){var t=e.children,n=e.placeholder,o=e.orgId,l=e.model,b=e.onEmailSelected,f=void 0===b?function(){}:b,h=e.optionsAddMembers,v=e.fullWidthButton,g=e.onInviteTeamMembersSuccess,x=u(Object(a.useState)([]),2),y=x[0],w=x[1],_=u(Object(a.useState)(!1),2),O=_[0],E=_[1],T=h?h.invitationMessage:"",I=!!h&&h.changedInviteMessage,S={placeholder:n,onSubmit:function(){var e;e=T?I?"with personalized invite message":"with canned invite message":"with no invite message",Object(c.trackUe)({category:c.Noun.TEAM_VIEW,verb:c.Verb.SENDS,directObj:c.Noun.TEAM_INVITATION,prepositionalObj:e,indirectObj:"with ".concat(y.length," invites"),method:"by clicking invite to team button on team members page",context:{teamId:l.get("id")}});var t=l.addMembers(y,{invitationMessage:T});return g&&(E(!0),g()),t},onAutocompleteSearch:function(e){return e.length>2?m({url:"/1/search/members/",type:"get",data:{query:e,idOrganization:o},dataType:"json"}):[]},displayDetails:!0,displayUsername:!0,submitText:d("invite-to-team"),onRemoveMemberOption:function(e){w(function(t){return t.filter(function(t,n){return n!==e})})},onSelectMemberOption:function(e){w(function(t){return Object(i.uniq)(Object(i.union)(t,Object(i.flatten)([e])),!1,function(e){return e.username?e.username:e.email})}),f()},shouldFocusOnSelectMemberOption:!0,selectedOptions:y,children:t,fullWidthButton:v,submitDisabled:O||!l};return r.a.createElement("div",{className:"org-team-members-autocomplete-container"},r.a.createElement("label",{className:s.a.teamMemberLabel},r.a.createElement("span",{className:s.a.teamMemberLabelText},d("team-members")),r.a.createElement(p,S)))}},4013:function(e,t,n){"use strict";n.d(t,"a",function(){return f});var a=n(0),r=n.n(a),o=n(5),i=n.n(o),c=n(9),l=n(4014),s=n.n(l),u=n(3945);function m(e,t,n,a,r,o,i){try{var c=e[o](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(a,r)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var d=n(28),b=Object(c.forTemplate)("org_members"),f=function(e){var t=e.orgId,n=e.orgDisplayName,o=e.model,c=e.startAnimation,l=e.fullWidthButton,f=e.className,h=e.onInviteTeamMembersSuccess,v=e.preventTextareaResize,g=b("personalized-message-2",{teamName:n}),x=p(Object(a.useState)(g),2),y=x[0],w=x[1],_=p(Object(a.useState)(),2),O=_[0],E=_[1];Object(a.useEffect)(function(){(function(){var e,n=(e=regeneratorRuntime.mark(function e(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o){e.next=6;break}return e.next=3,d.loadOrganizationData(t);case 3:return n=e.sent,e.next=6,E(n);case 6:case"end":return e.stop()}},e)}),function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){m(o,a,r,i,c,"next",e)}function c(e){m(o,a,r,i,c,"throw",e)}i(void 0)})});return function(){return n.apply(this,arguments)}})()()},[o,t]);var T,I,S,N=g!==y;return r.a.createElement("div",{className:i()(s.a.formWrapper,f)},r.a.createElement("div",{className:s.a.heading},b("invite-your-team")),r.a.createElement("div",{className:s.a.subtitle},b("trello-makes-teamwork-your-best-work")),r.a.createElement(u.InviteTeamMembersAutocompleteComponent,{placeholder:b("invite-input-placeholder"),orgId:t,model:o||O,optionsAddMembers:{invitationMessage:y,changedInviteMessage:N},onEmailSelected:c,fullWidthButton:l,onInviteTeamMembersSuccess:h},r.a.createElement("div",{className:s.a.autocompleteHelpText},r.a.createElement("strong",null,b("pro-tip"))," ",b("paste-as-many-emails-here-as-needed")),r.a.createElement("label",{className:s.a.invitationMessageLabel},r.a.createElement("span",{className:s.a.invitationMessageLabelText},b("give-this-message-a-personal-touch")),r.a.createElement("textarea",{className:i()(s.a.invitationMessage,(T={},I=s.a.invitationMessageNoResize,S=v,I in T?Object.defineProperty(T,I,{value:S,enumerable:!0,configurable:!0,writable:!0}):T[I]=S,T)),placeholder:b("personalized-message-placeholder"),value:y,onChange:function(e){w(e.target.value)},maxLength:500}))))}},4014:function(e,t,n){var a=n(4015);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(18)(a,r);a.locals&&(e.exports=a.locals)},4015:function(e,t,n){(t=e.exports=n(17)(!1)).push([e.i,"._2ozyzeoG-varDs{flex:1 1 auto;width:100%}._2ozyzeoG-varDs .autocomplete-input-container{max-width:none}._2ozyzeoG-varDs .autocomplete-btn{margin-bottom:0}._2XVmjWq1Ds8-i2{color:#172b4d;font-size:14px;font-weight:400;line-height:20px;margin:8px 0 16px}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2XVmjWq1Ds8-i2{text-align:center}}._2-T1xH-fhIz60N{color:#172b4d;font-size:24px;font-weight:600;letter-spacing:-.01em;line-height:28px;margin-top:40px;margin-top:0}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2-T1xH-fhIz60N{text-align:center}}._2wzRTdc1Iq0neb{color:#172b4d;font-size:14px;font-weight:400;line-height:20px;color:#5e6c84;margin:8px 0 28px}._1WPFYqViAabF58{margin:0}._3XpIQdKAqERycK{font-weight:700;color:#5e6c84;font-size:12px;line-height:16px;margin-top:12px;margin-bottom:4px;display:block;margin-bottom:12px}.wS5q-Owapul__t{background-color:#fafbfc;color:#172b4d;height:156px;margin-bottom:0}.wS5q-Owapul__t,.wS5q-Owapul__t:hover{border:none;box-shadow:inset 0 0 0 2px #dfe1e6}.wS5q-Owapul__t:hover{background-color:#ebecf0}.wS5q-Owapul__t:focus{background:#fff;border:none;box-shadow:inset 0 0 0 2px #0079bf}._12XgQEL5_g2Lmq{resize:none}",""]),t.locals={formWrapper:"_2ozyzeoG-varDs",subtitle:"_2XVmjWq1Ds8-i2",heading:"_2-T1xH-fhIz60N",autocompleteHelpText:"_2wzRTdc1Iq0neb",invitationMessageLabel:"_1WPFYqViAabF58",invitationMessageLabelText:"_3XpIQdKAqERycK",invitationMessage:"wS5q-Owapul__t",invitationMessageNoResize:"_12XgQEL5_g2Lmq"}},4016:function(e,t,n){var a=n(4017);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(18)(a,r);a.locals&&(e.exports=a.locals)},4017:function(e,t,n){(t=e.exports=n(17)(!1)).push([e.i,"._3PdcYVtRuHTlvL{margin:0}._1h9PvS3YBMEHS9{font-weight:700;color:#5e6c84;font-size:12px;line-height:16px;margin-top:12px;margin-bottom:4px;display:block;margin-bottom:12px}",""]),t.locals={teamMemberLabel:"_3PdcYVtRuHTlvL",teamMemberLabelText:"_1h9PvS3YBMEHS9"}},4892:function(e,t,n){var a=n(4893);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(18)(a,r);a.locals&&(e.exports=a.locals)},4893:function(e,t,n){var a=n(217);(t=e.exports=n(17)(!1)).push([e.i,"._2vrbr9OyhcQOwQ label{margin-top:24px;color:#091e42}._2vrbr9OyhcQOwQ label._2sunXEAJImmfxS{color:#eb5a46}._2vrbr9OyhcQOwQ ._3Iqnw8HlCKvcSz{color:#091e42;font-size:24px;font-weight:600;letter-spacing:-.01em;line-height:28px;display:block;margin-bottom:12px}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2vrbr9OyhcQOwQ ._3Iqnw8HlCKvcSz{text-align:center}}._2vrbr9OyhcQOwQ ._3O-nh6hx6HTp9W{font-size:18px;color:#6b778c;margin:12px auto 24px}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._2vrbr9OyhcQOwQ ._3O-nh6hx6HTp9W{display:block;text-align:center}}._2vrbr9OyhcQOwQ input._1CLyNodCAa-vQi{width:100%;height:48px;margin-bottom:6px}._2vrbr9OyhcQOwQ input._1CLyNodCAa-vQi._2sunXEAJImmfxS{border:none;box-shadow:inset 0 0 0 2px #eb5a46}._2vrbr9OyhcQOwQ textarea._15aIJYNKhrO4vB{margin-bottom:6px;resize:none;width:100%}._2vrbr9OyhcQOwQ ._1bvaK5JF03W_82{font-weight:100;color:#6b778c;font-size:12px}._2vrbr9OyhcQOwQ ._2ukuek1N8-13Iw{color:#6b778c;font-size:12px;margin-bottom:12px}._2vrbr9OyhcQOwQ ._2ukuek1N8-13Iw._2sunXEAJImmfxS{color:#eb5a46;font-weight:700}._2vrbr9OyhcQOwQ ._1aS0LdGertk5P7{width:100%;margin-top:12px}._2vrbr9OyhcQOwQ ._1aS0LdGertk5P7 .X1P6DVryq8CYGC{height:48px;width:100%}._2vrbr9OyhcQOwQ ._3TP8F77VrSTeHP{background-image:url("+a(n(1279))+");height:30px;width:30px;background-size:30px 30px;display:block;margin:0 auto}@media only screen and (min-width:901px) and (max-width:1280px),only screen and (min-width:1281px){._2vrbr9OyhcQOwQ,._2vrbr9OyhcQOwQ ._1aS0LdGertk5P7 .X1P6DVryq8CYGC,._2vrbr9OyhcQOwQ input._1CLyNodCAa-vQi,._2vrbr9OyhcQOwQ textarea._15aIJYNKhrO4vB{width:388px}}",""]),t.locals={buildTeam:"_2vrbr9OyhcQOwQ",formError:"_2sunXEAJImmfxS",letsBuildATeam:"_3Iqnw8HlCKvcSz",boostProductivity:"_3O-nh6hx6HTp9W",teamNameInput:"_1CLyNodCAa-vQi",teamDescriptionInput:"_15aIJYNKhrO4vB",optional:"_1bvaK5JF03W_82",inputDescriptionText:"_2ukuek1N8-13Iw",addTeamFooter:"_1aS0LdGertk5P7",continueButton:"X1P6DVryq8CYGC",spinner:"_3TP8F77VrSTeHP"}},4894:function(e,t,n){var a=n(4895);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(18)(a,r);a.locals&&(e.exports=a.locals)},4895:function(e,t,n){var a=n(217);(t=e.exports=n(17)(!1)).push([e.i,"._3okPZ1UgyOorbL{align-items:stretch;background-color:#fff;border-radius:3px;box-shadow:0 8px 16px -4px rgba(9,30,66,.25),0 0 0 1px rgba(9,30,66,.08);box-sizing:border-box;display:flex;flex-direction:row;min-height:500px;margin-top:16px;outline:0;overflow:hidden;width:calc(100vw - 48px);z-index:1}@media only screen and (min-width:901px) and (max-width:1280px),only screen and (min-width:1281px){._3okPZ1UgyOorbL{height:594px}}@media only screen and (max-width:750px),only screen and (min-width:751px) and (max-width:900px){._3okPZ1UgyOorbL{flex-direction:column-reverse;max-width:475px}._1wRFJUvIaoq-sR{transform:scaleX(2) rotate(-90deg);z-index:2;background-position:110px}._3lKk_kIqYLGIyx{transform:scaleY(.5) rotate(90deg);z-index:3;padding-top:40px}}@media only screen and (min-width:1281px){._3okPZ1UgyOorbL{width:1200px}}._1f6hQ1rpgO5o-J{flex:1;flex-direction:column;padding:0 24px;overflow:auto;text-align:left;z-index:3}._1f6hQ1rpgO5o-J,._1wRFJUvIaoq-sR{align-items:center;display:flex;justify-content:center}._1wRFJUvIaoq-sR{background-image:url("+a(n(1282))+");background-repeat:no-repeat;background-size:cover;flex:1}@media only screen and (min-width:901px) and (max-width:1280px),only screen and (min-width:1281px){._1wRFJUvIaoq-sR{align-items:flex-start;padding-top:112px}}._2b_HpRl1Tyl1YK{margin-top:16px;position:absolute;right:8px;top:8px;z-index:2}.eg0KI5SqghoOFd{background-color:#fff;color:#7a869a;margin-bottom:21px;text-decoration:underline}.eg0KI5SqghoOFd:hover{color:#172b4d;text-decoration:none}._1FoUOG87ea9M2R{margin:64px auto 16px;width:388px}.VLugHGGP84eldu{margin:12px 0 24px}.b0o1jaEoFEFK9d,.VLugHGGP84eldu{box-sizing:border-box;width:100%}.b0o1jaEoFEFK9d{background-color:#fdfae5;border-radius:3px;padding:4px 8px;text-align:center}",""]),t.locals={createTeamContainer:"_3okPZ1UgyOorbL",illustrationContainer:"_1wRFJUvIaoq-sR",illustrationWrapper:"_3lKk_kIqYLGIyx",formContainer:"_1f6hQ1rpgO5o-J",closeButton:"_2b_HpRl1Tyl1YK",doLaterLinkButton:"eg0KI5SqghoOFd",inviteFormWrapper:"_1FoUOG87ea9M2R",messageContainer:"VLugHGGP84eldu",freeTeamWarningMessage:"b0o1jaEoFEFK9d"}},4896:function(e,t,n){var a=n(4897);"string"==typeof a&&(a=[[e.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(18)(a,r);a.locals&&(e.exports=a.locals)},4897:function(e,t,n){(t=e.exports=n(17)(!1)).push([e.i,"._1M7BOT0FSOTl2E{align-items:flex-start}",""]),t.locals={createTeamOverlay:"_1M7BOT0FSOTl2E"}},4914:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(47),i=n(527),c=n(145),l=n(1180),s=n(275),u=n(4013),m=n(832),p=n(845),d=n(27),b=n(359),f=n(5),h=n.n(f),v=n(40),g=n(175),x=n(43),y=n(4892),w=n.n(y),_=n(9);function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var T=Object(_.forTemplate)("create_team"),I="".concat(Date.now(),"-"),S=function(e){var t=e.submitCreateTeam,n=e.startAnimation,o=e.animationStep,i=E(Object(a.useState)(!0),2),c=i[0],l=i[1],u=E(Object(a.useState)(!1),2),m=u[0],p=u[1],d=E(Object(a.useState)(""),2),b=d[0],f=d[1],y=E(Object(a.useState)(""),2),_=y[0],S=y[1],N=E(Object(a.useState)(!1),2),k=N[0],j=N[1];return r.a.createElement("form",{className:w.a.buildTeam,onSubmit:Object(g.a)(function(){p(!0),t(b.trim(),_)})},r.a.createElement("span",{className:w.a.letsBuildATeam},T("lets-build-a-team")),r.a.createElement("span",{className:w.a.boostProductivity},T("boost-productivity")),r.a.createElement("label",{htmlFor:"".concat(I,"create-team-org-display-name"),className:h()(O({},w.a.formError,k))},T("team-name")),r.a.createElement("input",{id:"".concat(I,"create-team-org-display-name"),"data-test-id":x.HeaderTestIds.CreateTeamNameInput,type:"text",value:b,onBlur:function(){b&&o<1&&Object(s.j)()&&n()},onChange:function(e){f(e.target.value),j(100===e.target.value.length),l(100===e.target.value.length||0===e.target.value.trim().length),Object(s.j)()||3!==o||n()},className:h()(w.a.teamNameInput,O({},w.a.formError,k)),autoFocus:!0,maxLength:100,disabled:m,placeholder:T("tacos-co")}),k?r.a.createElement("span",{className:h()(w.a.inputDescriptionText,O({},w.a.formError,k))},T("team-name-error")):r.a.createElement("span",{className:w.a.inputDescriptionText},T("team-name-description")),r.a.createElement("label",{htmlFor:"".concat(I,"create-team-org-description")},T("team-description")," ",r.a.createElement("span",{className:w.a.optional},T("optional"))),r.a.createElement("textarea",{id:"".concat(I,"create-team-org-description"),rows:6,value:_,onChange:function(e){S(e.target.value)},className:w.a.teamDescriptionInput,disabled:m,placeholder:T("our-team-organizes-everything-here")}),r.a.createElement("span",{className:w.a.inputDescriptionText},T("team-description-description")),r.a.createElement("footer",{className:w.a.addTeamFooter},r.a.createElement(v.g,{disabled:c||m,type:"submit",className:w.a.continueButton,testId:x.HeaderTestIds.CreateTeamSubmitButton},m?r.a.createElement("div",{className:w.a.spinner}):T("continue"))))},N=n(89),k=n(4894),j=n.n(k),C=n(1);function Q(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var L=Object(_.forTemplate)("create_team"),A=n(21),M=n(49),z=n(37),R=Object(o.c)(function(e){return{emailAddress:Object(M.a)(e).email,inTeamBuilderPhaseTwoExperiement:Object(s.j)(),isDesktop:Object(z.isDesktop)(),freeTeamLimitWarning:A.featureFlagClient.get("fv.domain-level-free-team-warning",!1),teamType:Object(l.b)(e)}},function(e){return{onClose:function(){e(Object(c.removeOverlay)())},submitTeamCreation:function(t,n,a,r){return e(Object(i.d)({type:t,displayName:n,desc:a,enterprise:r}))},onCreateTeamSuccess:function(t,n){return e(Object(i.c)({type:t,team:n}))}}})(function(e){var t=e.inTeamBuilderPhaseTwoExperiement,n=e.isDesktop,o=e.freeTeamLimitWarning,c=e.emailAddress,l=e.onClose,s=e.onCreateTeamSuccess,f=e.submitTeamCreation,h=e.teamType,v=Q(Object(a.useState)(t?0:3),2),g=v[0],y=v[1],w=Q(Object(a.useState)({id:"",displayName:"",name:""}),2),_=w[0],O=w[1],E=Q(Object(a.useState)(1),2),T=E[0],I=E[1],k=Q((c||"").split("@"),2)[1]||"";function A(){y(g+1)}Object(a.useEffect)(function(){o&&k&&Object(C.trackUe)({category:C.Noun.TEAM_BUILDER,verb:C.Verb.SHOWS,directObj:C.Noun.FREE_TEAM_LIMIT_WARNING_MESSAGE,context:{domainName:k,env:n?"desktop":"web"}})},[o,k,n]);var M=!!t&&2===T,z=_.id,R=void 0===z?"":z,F=_.displayName,P=void 0===F?"":F,q=_.name,W=void 0===q?"":q;return r.a.createElement("div",{className:j.a.createTeamContainer},r.a.createElement("div",{className:j.a.formContainer},o&&r.a.createElement("div",{className:j.a.messageContainer},r.a.createElement("div",{className:j.a.freeTeamWarningMessage},r.a.createElement("strong",null,L("your-org-is-running-out-of-free-teams",{emailDomain:k?"(".concat(k,")"):""}))," ",n?r.a.createElement("span",null,L("contact-your-admin")):r.a.createElement("span",null,L("learn-more-about-trello-enterprise",{trelloEnterprise:r.a.createElement("a",{href:"/enterprise?utm_source=trello-product&utm_medium=inapp&utm_campaign=P:trello|O:trello|F:awareness|C:ptour|I:trello-enterprise-in-product|E:cloud|&app_source=warning_message_team_builder",target:"_blank",key:"enterprise-link",onClick:function(){Object(C.trackUe)({category:C.Noun.TEAM_BUILDER,verb:C.Verb.CLICKS,directObj:C.Noun.FREE_TEAM_LIMIT_WARNING_MESSAGE_ENTERPRISE_LINK,context:{domainName:k,env:n?"desktop":"web"}})}},"Trello Enterprise")})))),1===T&&r.a.createElement(S,{submitCreateTeam:function(e,t){f(h,e,t).then(function(e){if(e){var t=Object(b.a)(e);O(t||{}),I(2)}})},startAnimation:A,animationStep:g}),2===T&&r.a.createElement(u.a,{startAnimation:A,orgId:R,orgDisplayName:P,model:null,className:j.a.inviteFormWrapper,fullWidthButton:!0,preventTextareaResize:!0,onInviteTeamMembersSuccess:s.bind(void 0,h,_)}),M&&r.a.createElement(N.a,{className:j.a.doLaterLinkButton,testId:x.HeaderTestIds.ShowLaterButton,onClick:l,href:"/".concat(W).concat(h===i.a.Business?"/billing":"")},L("ill-do-this-later"))),r.a.createElement("div",{className:j.a.illustrationContainer},r.a.createElement("div",{className:j.a.illustrationWrapper},r.a.createElement(m.a,{animationStep:g}))),r.a.createElement(p.a,{color:d.IconColor.Dark,className:j.a.closeButton,onClick:l,large:!0}))}),F=n(3919),P=n(4896),q=n.n(P);t.default=function(){return r.a.createElement(F.b,{background:F.a.LIGHT,className:q.a.createTeamOverlay},r.a.createElement(R,null))}}}]);
//# sourceMappingURL=gamma-create-team-overlay.fadadd59d0dc63daf1de.js.map