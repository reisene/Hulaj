function initButtonAnimation(){let s=document.getElementById("my-form-button");return s.addEventListener("click",function(){s.classList.remove("submit"),s.classList.add("loading"),s.querySelector(".fa-paper-plane").classList.add("hidden"),s.querySelector(".fa-spinner").classList.remove("hidden")}),s.addEventListener("transitionend",()=>{s.classList.contains("loading")&&s.classList.remove("loading")}),{animateButton:function(e){"success"!==e&&"error"!==e||(s.classList.add(e),("success"===e?s.querySelector(".fa-check"):s.querySelector(".fa-times")).classList.remove("hidden"),s.querySelector(".fa-spinner").classList.add("hidden"))},resetButton:function(){var e,t;s?(s.classList.remove("loading","success","error"),s.classList.add("submit"),e=s.querySelector(".fa-check"),t=s.querySelector(".fa-times"),e&&e.classList.add("hidden"),t&&t.classList.add("hidden"),s.querySelector(".fa-paper-plane").setAttribute("class","svg-inline--fa fa-paper-plane")):Sentry.captureException(new Error("formButton is null"),{extra:{foo:"bar"}})}}}export default initButtonAnimation;
//# sourceMappingURL=button-animation.js.map
