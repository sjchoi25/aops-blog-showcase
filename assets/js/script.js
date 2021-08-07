// This is not AoPS' own script

function mouseOver() {
	document.querySelector(".cmty-tip-triangle").style.display = "block";
	document.querySelector(".cmty-tip-content").style.display = "block";
}
function mouseOut() {
	document.querySelector(".cmty-tip-triangle").style.display = "none";
	document.querySelector(".cmty-tip-content").style.display = "none";
}
function toggleHide(num) {
	if (document.querySelector(`#hide${num}`).style.display == "none") {
    	document.querySelector(`#hide${num}`).style.display = "block";
  	}
  	else {
    	document.querySelector(`#hide${num}`).style.display = "none";
  	}
}

// Add css
const urlParams = new URLSearchParams(window.location.search);
const src = urlParams.get('src');
if (src) {
	$('head').append(`<link rel="stylesheet" href="${src}">`);
}
