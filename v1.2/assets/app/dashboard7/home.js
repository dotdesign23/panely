"use strict";function t(t,e){var r,o=Object.keys(t);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(t),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,r)),o}function n(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach(function(e){var t,r,o;t=a,o=n[r=e],r in t?Object.defineProperty(t,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))})}return a}$(function(){var e="#fff",t="#424242",r={theme:{mode:"light",palette:"palette1"}},o={theme:{mode:"dark",palette:"palette1"}},a=new ApexCharts(document.querySelector("#widget-chart-6"),n(n({},r),{},{series:[{name:"Unique",data:[6400,4e3,7600,6200,9800,6400,8600,7e3]}],chart:{type:"area",height:300,sparkline:{enabled:!0}},markers:{strokeColors:e},fill:{type:"gradient",gradient:{shade:"light",type:"vertical",opacityFrom:1,opacityTo:0,stops:[0,100]}},tooltip:{marker:{show:!1},y:{formatter:function(e){return"".concat(e," Visited")}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],crosshairs:{show:!1}}}));a.render(),$("#theme-toggle").on("click",function(){$("body").hasClass("theme-dark")?a.updateOptions(n(n({},o),{},{markers:{strokeColors:t}})):a.updateOptions(n(n({},r),{},{markers:{strokeColors:e}}))})});