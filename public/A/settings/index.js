function settitle() {
var title = document.getElementsByClassName("title")[0]
if (title.value !== "") {
  localStorage.setItem("title", title.value)
  document.title = title.value
  title.value = ""
} else {
  localStorage.removeItem("title")
  window.location.reload()
}
}

function seticon() {
var title = document.getElementsByClassName("title")[0]
if (title.value !== "") {
  localStorage.setItem("icon", title.value)
  document.querySelector("link[rel='icon']").href = title.value
  title.value = ""
} else {
  localStorage.removeItem("icon")
  window.location.reload()
}
}


window.addEventListener('load', function() {
  var title = localStorage.getItem("title")

  if (localStorage.getItem("title") !== null) {
    document.title = title
  }

var icon = localStorage.getItem("icon")

  if (localStorage.getItem("icon") !== null) {
    document.querySelector("link[rel='icon']").href = title
  }
})
