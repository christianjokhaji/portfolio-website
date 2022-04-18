const changeImage = () => {
	if (document.getElementById("Armenia-Ball").src.indexOf("resources/images/armeniaball.png") != -1)  {
		document.getElementById("Armenia-Ball").src = "resources/images/we-are-our-mountains.jpg";
	}
	else {
		document.getElementById("Armenia-Ball").src = "resources/images/armeniaball.png";
	}
}