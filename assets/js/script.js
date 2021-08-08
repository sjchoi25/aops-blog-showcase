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

function show_comments() {
	document.querySelector("#comments-wrap").style.display = "block";
	document.querySelector("#post-sep").style.display = "inline";
	document.querySelector("#post-title").style.display = "inline-block";
}
function hide_comments() {
	document.querySelector("#comments-wrap").style.display = "none";
	document.querySelector("#post-sep").style.display = "none";
	document.querySelector("#post-title").style.display = "none";
}

// Add css
const urlParams = new URLSearchParams(window.location.search);
const src = urlParams.get('src');
if (src) {
	document.querySelector('head').innerHTML += `<link rel="stylesheet" href="${src}">`;
}
const title = urlParams.get("name");

if (title) {
	document.querySelector("#header h1").textContent = title;
	document.querySelector("#blog-title").textContent = title;
	document.title = title;
}
