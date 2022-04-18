const changeImage = () => {
	if (document.getElementById("Armenia-Ball").src == "resources/images/armeniaball.png") {
		document.getElementById("Armenia-Ball").src = "resources/images/armeniaball.png";
	}
	else {
		document.getElementById("Armenia-Ball").src = "resources/images/we-are-our-mountains.jpg";
	}
}