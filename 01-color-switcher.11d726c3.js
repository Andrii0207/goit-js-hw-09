!function(){var t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),n=document.querySelector("body");function e(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}var c=!1,r=null;t.addEventListener("click",(function(){if(c)return;r=setInterval((function(){c=!0,console.log("click to button START",+Date.now()),e(),n.style.backgroundColor=e()}),1e3)})),o.addEventListener("click",(function(){clearInterval(r),c=!1,console.log("click to button STOP!!!")}))}();
//# sourceMappingURL=01-color-switcher.11d726c3.js.map