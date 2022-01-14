// Open Optimized* Optimized by https://jscompress.com/ 
$(".menu").click(function(){$(this).toggleClass("icon-menu"),$(this).toggleClass("icon-cross"),$("nav").toggleClass("down"),$("nav li a").removeClass("down"),$(".search").removeClass("down"),$(".icon-search").removeClass("icon-cross")}),$("nav li a").click(function(){$(".menu").addClass("icon-menu"),$(".menu").removeClass("icon-cross"),$("nav").toggleClass("down")}),$(".icon-search").click(function(){$(this).toggleClass("icon-cross"),$(".menu").addClass("icon-menu"),$(".menu").removeClass("icon-cross"),$(".search").toggleClass("down"),$("nav").removeClass("down")});
function tab(){var t=prompt("Enter a title");""!==t?(localStorage.setItem("title",t),document.title=t):(localStorage.removeItem("title"),document.title="‎")}window.addEventListener("load",function(){var t=localStorage.getItem("title");null!==localStorage.getItem("title")?document.title=t:document.title="NEBULA"});
var modal=document.getElementById("myModal"),btn=document.getElementById("myBtn"),span=document.getElementsByClassName("close")[0];function discordlol(){window.location.replace("https://justcool.thejangoteam.repl.co/service/hvtrs8%2F-dksaopd%2Ccmm-arp/")}function history(){var t=prompt("Please insert a URL: https://example.com"),e=prompt("Please insert another URL: https://example.com"),o=prompt("Please insert one last URL: https://example.com");t.value,e.value,o.value;window.open(t,"_blank"),window.open(e,"_blank"),window.open(o,"_blank")}function popup(t,e){if(!window.focus)return!0;t="string"==typeof t?t:t.href;return window.open(t,e,"width=400,height=200,scrollbars=yes"),!1}btn.onclick=function(){modal.style.display="block"},span.onclick=function(){modal.style.display="none"},window.onclick=function(t){t.target==modal&&(modal.style.display="none")};



window.addEventListener('load', function() {
console.log("loaded")
var theTheme = localStorage.getItem("theme")
//Inverted Colors theme
if (localStorage.getItem("theme") == "InvertColorsTheme") {

console.log("done")
let htmlL = document.documentElement;
htmlL.style.filter = "saturate(0)";
htmlL.style.filter = "invert(100%)";
 }
// Saturated theme
 else if (localStorage.getItem("theme") == "Satur") {
document.getElementById("theme-container").style.filter = "invert(0%)";
document.getElementById("theme-container").style.filter = "saturate(8)";
console.log("done")
let htmlL = document.documentElement;
 htmlL.style.filter = "saturate(80)";
 htmlL.style.filter = "invert(0%)";
 }
// Sepia Theme
 else if (localStorage.getItem("theme") == "Sepia") {
document.getElementById("theme-container").style.filter = "invert(0%)";
document.getElementById("theme-container").style.filter = "saturate(0%)";
document.getElementById("theme-container").style.filter = "sepia(100%)";
let htmlL = document.documentElement;
htmlL.style.background = "radial-gradient(ellipse at bottom, rgb(94, 71, 7) 0%, rgb(112, 97, 10) 100%)";
 }
 // Hacker Theme
else if (localStorage.getItem("theme") == "Hacker"){
let htmlL = document.documentElement;
htmlL.style.background = "radial-gradient(ellipse at bottom, rgb(0, 0, 0) 0%, rgb(13, 12, 12) 100%)";
document.getElementById("heads").style.color = "#04ff00";
document.getElementById("heads-1").style.color = "#04ff00";
document.getElementById("heads-2").style.color = "#04ff00";
document.getElementById("heads-3").style.color = "#04ff00";
document.getElementById("heads-4").style.color = "#04ff00";
document.getElementById("heads-5").style.color = "#04ff00";
document.getElementById("heads-6").style.color = "#04ff00";
document.getElementById("heads-7").style.color = "#04ff00";
document.getElementById("heads-8").style.color = "#04ff00";
document.getElementById("heads-9").style.color = "#04ff00";
document.getElementById("heads-10").style.color = "#04ff00";
}
   else {
    
    document.getElementById("checker").innerHTML = "You're not using any themes.";
    document.getElementById("theme-container").style.filter = "invert(0%)";
    document.body.style.background = "radial-gradient(ellipse at bottom, rgb(142, 21, 255) 0%, rgb(49, 5, 59) 100%)"
  } })
