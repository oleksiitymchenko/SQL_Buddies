document.addEventListener("DOMContentLoaded", function() {
  const first = document.getElementById("first");
  const second = document.getElementById("second");
  const third = document.getElementById("third");
  const form = document.getElementById("form");
  setTimeout(function(){ first.classList.add("hide") }, 6000);
  setTimeout(function(){ second.classList.remove("hide") }, 7000);
  setTimeout(function(){ second.classList.add("show") }, 7500);
  setTimeout(function(){ second.classList.remove("show") }, 7500);
  setTimeout(function(){ second.classList.add("hide") }, 9500);
  setTimeout(function(){ form.classList.remove("hide") }, 12000);
});
function validateCode() {
  let code = document.getElementById("code").value;
  if (code !== "02112USABOSTON335148825") {
    alert("Secret Code is incorrect");
  } else {
    window.open('css/congrats.html', "_self");
  }
  return false;
}
