const changeImage = () => {
	if (document.getElementById("Armenia-Ball").src.indexOf("resources/images/armeniaball.png") != -1)  {
		document.getElementById("Armenia-Ball").src = "resources/images/assyriaball.png";
	}
	else {
		document.getElementById("Armenia-Ball").src = "resources/images/armeniaball.png";
	}
}