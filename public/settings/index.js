function settitle(){var e=document.getElementsByClassName("title")[0];""!==e.value?(localStorage.setItem("title",e.value),document.title=e.value,e.value=""):(localStorage.removeItem("title"),window.location.reload())}function seticon(){var e=document.getElementsByClassName("title")[0];""!==e.value?(localStorage.setItem("icon",e.value),document.querySelector("link[rel='icon']").href=e.value,e.value=""):(localStorage.removeItem("icon"),window.location.reload())}window.addEventListener("load",function(){var e=localStorage.getItem("title");null!==localStorage.getItem("title")&&(document.title=e);localStorage.getItem("icon");null!==localStorage.getItem("icon")&&(document.querySelector("link[rel='icon']").href=e)});function NoTheme(){document.getElementById("theme-container").style.filter="invert(0%)",console.log("done");localStorage.setItem("theme","notheme"),location.reload()}function InvertTheme(){console.log("done");localStorage.setItem("theme","InvertColorsTheme"),document.getElementById("theme-container").style.filter="sepia(0%)";let a=document.documentElement;a.style.filter="saturate(0)",a.style.filter="invert(100%)",a.style.background="radial-gradient(ellipse at bottom, rgb(142, 21, 255) 0%, rgb(49, 5, 59) 100",location.reload}function SaturateTheme(){document.getElementById("theme-container").style.filter="saturate(8)",console.log("done");localStorage.setItem("theme","Satur");let a=document.documentElement;a.style.filter="saturate(80)",a.style.filter="invert(0%)",location.reload}function SepiaTheme(){document.getElementById("theme-container").style.filter="sepia(100%)",console.log("done");let a=document.documentElement;a.style.filter="invert(0%)",a.style.background="radial-gradient(ellipse at bottom, rgb(94, 71, 7) 0%, rgb(112, 97, 10) 100%)";localStorage.setItem("theme","Sepia"),location.reload}function HackerTheme(){let a=document.documentElement;a.style.background="radial-gradient(ellipse at bottom, rgb(0, 0, 0) 0%, rgb(13, 12, 12) 100%)",document.getElementById("heads").style.color="#04ff00",document.getElementById("heads-1").style.color="#04ff00",document.getElementById("heads-2").style.color="#04ff00",document.getElementById("heads-3").style.color="#04ff00",document.getElementById("heads-4").style.color="#04ff00",document.getElementById("heads-5").style.color="#04ff00",document.getElementById("heads-6").style.color="#04ff00";localStorage.setItem("theme","Hacker"),location.reload}window.addEventListener("load",function(){console.log("loaded");localStorage.getItem("theme");if("InvertColorsTheme"==localStorage.getItem("theme")){console.log("done");let a=document.documentElement;a.style.filter="saturate(0)",a.style.filter="invert(100%)"}else if("Satur"==localStorage.getItem("theme")){document.getElementById("theme-container").style.filter="invert(0%)",document.getElementById("theme-container").style.filter="saturate(8)",console.log("done");let a=document.documentElement;a.style.filter="saturate(80)",a.style.filter="invert(0%)"}else if("Sepia"==localStorage.getItem("theme")){document.getElementById("theme-container").style.filter="invert(0%)",document.getElementById("theme-container").style.filter="saturate(0%)",document.getElementById("theme-container").style.filter="sepia(100%)";let a=document.documentElement;a.style.background="radial-gradient(ellipse at bottom, rgb(94, 71, 7) 0%, rgb(112, 97, 10) 100%)"}else if("Hacker"==localStorage.getItem("theme")){let a=document.documentElement;a.style.background="radial-gradient(ellipse at bottom, rgb(0, 0, 0) 0%, rgb(13, 12, 12) 100%)",document.getElementById("heads").style.color="#04ff00",document.getElementById("heads-1").style.color="#04ff00",document.getElementById("heads-2").style.color="#04ff00",document.getElementById("heads-3").style.color="#04ff00",document.getElementById("heads-4").style.color="#04ff00",document.getElementById("heads-5").style.color="#04ff00",document.getElementById("heads-6").style.color="#04ff00"}else document.getElementById("checker").innerHTML="You're not using any themes.",document.getElementById("theme-container").style.filter="invert(0%)",document.body.style.background="radial-gradient(ellipse at bottom, rgb(142, 21, 255) 0%, rgb(49, 5, 59) 100%)"});