!function(){var t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),n=document.querySelector("body");function c(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var e=!1,r=null;t.addEventListener("click",(function(){if(e)return;r=setInterval((function(){e=!0,console.log("click to button START,","color: ".concat(c())),c(),n.style.backgroundColor=c()}),1e3)})),o.addEventListener("click",(function(){clearInterval(r),e=!1,console.log("click to button STOP!!!")}))}();
//# sourceMappingURL=01-color-switcher.28d281ce.js.map