"use strict";$(document).ready(function(){for(var t=[],e=document.querySelectorAll("#tickets th"),n=(document.querySelectorAll("#tickets th"),document.querySelector("#tickets tbody")),i=0;i<e.length;i++){var l=e[i];t.push(l.textContent.replace(/\r?\n|\r/,""))}for(var c,i=0;c=n.rows[i];i++)for(var s,o=0;s=c.cells[o];o++)s.setAttribute("data-th",t[o]);$(window).resize(function(){$(window).width()<=740?($(".main-menu li:nth-child(6)").css("display","none"),$(".submenu li:nth-child(6)").css("display","block")):($(".main-menu li:nth-child(6)").css("display","inline-block"),$(".submenu li:nth-child(6)").css("display","none"))})});