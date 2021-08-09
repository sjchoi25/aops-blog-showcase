// This is not AoPS' own script, it is created by me (Nhv24/player01)

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
	if (!replaced) {
		document.querySelector("#left_navigation_box").innerHTML += '» <a href="#">Test post</a>';
		replaced = true;
	}
}
function hide_comments() {
	document.querySelector("#comments-wrap").style.display = "none";
	if (replaced) {
		document.querySelector("#left_navigation_box").innerHTML = nav_default;
		replaced = false;
	}
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

const nav_default = `
<a href="#">Community</a>
» 
<a href="#">Blogs</a>
» 
<a href="#" id="blog-title" onclick="hide_comments()">${title ? title : "My Blog!"}</a>`;

let replaced = false;
