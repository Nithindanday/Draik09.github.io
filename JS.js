function toggle() {
	var ele = document.getElementById("toggleText");
	var text = document.getElementById("displayText");
	if(ele.style.display == "block") {
    	ele.style.display = "none";
		text.innerHTML = "<sup>show</sup>";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "<sup>hide</sup>";
	}
}