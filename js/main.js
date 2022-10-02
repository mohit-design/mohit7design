$(function() {
  // AOS Animation JS
  AOS.init({
    easing: 'ease-in-out-sine'
  });
  // Mobile Menu JS
	$(".burger-menu").click(function() {
		$(".fixed-navbar-menu").toggleClass("active");
		$(".menu-listing").toggleClass("active");
		$("body").toggleClass("active");
	});
});
// When the user scrolls the page, Scroll width ( progress ) Increase 
window.addEventListener("scroll", event => {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let progress = 100*scrollTop/scrollHeight;
  document.querySelector(".display-progress").style.width = progress + "%";
});
// Disabled "Ctrl" and "Ctrl + Shift" Keys JS
$(document).keydown(function (event) {
  if (event.keyCode == 123) {
      return false;
  }
  else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
      return false;
  }
});
// Disabled Right Click JS
// window.oncontextmenu = function () {
//   return false;
// }
// Disabled Ctrl + U and Ctrl + C JS
$(document).keydown(function(event) {
	var pressedKey = String.fromCharCode(event.keyCode).toLowerCase();
	if (event.ctrlKey && (pressedKey == "c" || pressedKey == "u")) {
	return false;
	}
});