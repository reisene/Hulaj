function isElementInView(t){t=t.getBoundingClientRect();return 0<=t.top&&0<=t.left&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}$(document).ready(function(){$(".timer").counterUp({delay:10,time:1e3});let t=()=>{$(".timer").each(function(){var t=parseInt($(this).attr("data-to")),e=parseInt($(this).attr("data-speed")),n=0,i=t/(e/100),o=$(this),r=setInterval(function(){t<=(n+=i)&&(n=t,clearInterval(r)),o.text(Math.floor(n))},100)})},e=new Set;var n=()=>{$(".counter").each(function(){isElementInView(this)&&!e.has(this)&&(t(),e.add(this))})};$(window).scroll(n),n()});
//# sourceMappingURL=counters.js.map
