import"./assets/modulepreload-polyfill-B5Qt9EMX.js";import{f as d,i as m}from"./assets/vendor-BbbuE1sJ.js";let n;const o=document.querySelector("button[data-start]"),a=document.querySelector("#datetime-picker"),b=document.querySelectorAll(".value");o.setAttribute("disabled","");const h="../error.svg",f={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const r=Date.now(),e=t[0].getTime();if(e<=r){m.error({backgroundColor:"red",iconUrl:h,theme:"dark",overlay:!0,position:"topCenter",title:"Error",titleColor:"white",message:"Please choose a date in the future",messageColor:"white",overlayColor:"rgba(0, 0, 0, 0.6)"}),o.setAttribute("disabled","");return}o.removeAttribute("disabled"),n=e,console.log(t[0])}};function p(t){const s=Math.floor(t/864e5),c=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:s,hours:c,minutes:u,seconds:l}}function v(t){return String(t).padStart(2,"0")}let i;function y(){const t=n-Date.now();[...b].map((r,e)=>r.textContent=v(Object.values(p(t))[e])),t<=1e3&&(clearInterval(i),a.removeAttribute("disabled",""))}o.addEventListener("click",()=>{i=setInterval(y,1e3),o.setAttribute("disabled",""),a.setAttribute("disabled","")});d('input[type="text"]',f);
//# sourceMappingURL=1-timer.js.map
