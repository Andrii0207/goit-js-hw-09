const t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),e=document.querySelector("body");function n(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}let c=!1,r=null;t.addEventListener("click",(function(){if(c)return;r=setInterval((()=>{c=!0,console.log("click to button START,",`color: ${n()}`),n(),e.style.backgroundColor=n()}),1e3)})),o.addEventListener("click",(function(){clearInterval(r),c=!1,console.log("click to button STOP!!!")}));
//# sourceMappingURL=01-color-switcher.e625d43a.js.map
