!function e(r,t,n){function o(i,s){if(!t[i]){if(!r[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var f=t[i]={exports:{}};r[i][0].call(f.exports,function(e){var t=r[i][1][e];return o(t?t:e)},f,f.exports,e,r,t,n)}return t[i].exports}for(var u="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,r,t){"use strict";!function(){var e=document.querySelector("#getCourses");document.querySelector("#getInstructors"),document.querySelector("#getRooms");e.addEventListener("click",function(e){var r=e.target;r.disabled=!0;var t=new XMLHttpRequest;t.open("GET","/courses"),t.onload=function(e){if(4===t.readyState&&200===t.status)try{var n=JSON.parse(t.responseText);console.dir(n)}catch(e){console.dir(t.response)}finally{r.disabled=!1}},t.send()})}()},{}]},{},[1]);
//# sourceMappingURL=app.js.map
