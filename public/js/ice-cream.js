const form = document.querySelector("#ice-cream-form");

form.addEventListener("submit", function (event) {
	event.preventDefault();
	// Variables
	let fname = document.getElementById("fname").value.trim();
	let email = document.getElementById("email").value.trim();
	let flavor = document.getElementById("flavors").value;
	let cones = document.getElementsByName("cone-types");

	// Validate first name
	if (fname == "") {
		document.getElementById("err-fname").style.display = "block";
	} else {
		document.getElementById("err-fname").style.display = "none";
	}

	// Validate email
	let validEmail = false;
	for (let i = 0; i < email.length; i++) {
		// Contains an @
		if (email[i] == "@") {
			validEmail = true;
		}
	}

	// Validate flavor options
	if (flavor == "") {
		document.getElementById("err-flavor").style.display = "block";
	} else {
		document.getElementById("err-flavor").style.display = "none";
	}

	// Validate cone
	let count = 0;
	for (let i = 0; i < cones.length; i++) {
		if (cones[i].checked) {
			count++;
		}
	}
	if (count > 0) {
		document.getElementById("err-cone").style.display = "none";
	} else {
		document.getElementById("err-cone").style.display = "block";
	}

	// Check if the email is valid
	if (validEmail) {
		document.getElementById("err-email").style.display = "none";
	} else {
		document.getElementById("err-email").style.display = "block";
	}

	// This is basically a return statement
	if (validEmail == true && fname != "" && count > 0 && flavor != "") {
		form.submit();
	}
});
