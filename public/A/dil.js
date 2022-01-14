// Open Optimized* Optimized by https://jscompress.com/ 
$(".menu").click(function(){$(this).toggleClass("icon-menu"),$(this).toggleClass("icon-cross"),$("nav").toggleClass("down"),$("nav li a").removeClass("down"),$(".search").removeClass("down"),$(".icon-search").removeClass("icon-cross")}),$("nav li a").click(function(){$(".menu").addClass("icon-menu"),$(".menu").removeClass("icon-cross"),$("nav").toggleClass("down")}),$(".icon-search").click(function(){$(this).toggleClass("icon-cross"),$(".menu").addClass("icon-menu"),$(".menu").removeClass("icon-cross"),$(".search").toggleClass("down"),$("nav").removeClass("down")});
// Close optimized 

// TAB CLOAK
function tab() {
  let title = prompt("Enter a title")
  if (title !== "") {
    localStorage.setItem("title", title)
    document.title = title
  } else {
    localStorage.removeItem("title")
    document.title = "\u200E"
  }
}

window.addEventListener('load', function() {
  var title = localStorage.getItem("title")

  if (localStorage.getItem("title") !== null) {
    document.title = title
  } else {
    document.title = "NEBULA"
  } })

  // 

  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
 
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {

    modal.style.display = "none";
  }
}



function discordlol() {
  window.location.replace("https://justcool.thejangoteam.repl.co/service/hvtrs8%2F-dksaopd%2Ccmm-arp/")
}

function history() {


let url = prompt("Please insert a URL: https://example.com")
let url2 = prompt("Please insert another URL: https://example.com")
let url3 = prompt("Please insert one last URL: https://example.com")

let yep = url.value
let yep2 = url2.value
let yep3 = url3.value

window.open(url, "_blank");
window.open(url2,"_blank");
window.open(url3, "_blank");

}

 function popup(mylink, windowname) { 
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string') href=mylink;
    else href=mylink.href; 
    window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); 
    return false; 
  }
