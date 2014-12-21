function toggle() {
	var ele = document.getElementById("toggleText");
	var text = document.getElementById("displayText");
	if(ele.style.display == "block") {
    	ele.style.display = "none";
		text.innerHTML = "[<i>show</i>]";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "[<i>hide</i>]";
	}
} 

 