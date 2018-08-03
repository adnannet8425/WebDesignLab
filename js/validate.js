function checkEmail(e){
	var element=e.target;
	if(/[^a-zA-Z0-9@._]/.test(element.value)){
		alert("Email is invalid! Only characters a-z A-Z 0-9 A @ . _ are allowed");
		element.value="";
		return false;
	}
	if(!/[^a-zA-Z]/.test(element.value)){
		alert("Email is invalid! Only characters are must");
		element.value="";
		return false;
	}
	if(/[@]/.test(element.value)){
		alert("Email is invalid! You are missing @");
		element.value="";
		return false;
	}
	if(/[.]/.test(element.value)){
		alert("Email is invalid! . domain name is missing");
		element.value="";
		return false;
	}
	return true;
}

function checkSubject(e){
	var element=e.target;
	if(/[^a-zA-Z]/.test(element.value)){
		alert("Invalid Subject. Use only a-z or A-Z");
		element.value="";
		return false;
	}
	return true;
}

function submitForm(e){
	e.preventDefault();
	if(document.getElementById('user-email').value!="" && 
		document.getElementById('subject').value!="" && 
		document.getElementById('message').valye!=""){
			var contact=document.getElementsByClassName('contact-form');
		contact[0].innerHTML="<h3>Thank You For Feedbac. I'll Get To You Shortly</h3>";

	}
}

var email = document.getElementById("user-email");
email.addEventListener('blur',checkEmail,false);

var subject = document.getElementById("subject");
subject.addEventListener('blur',checkSubject,false);

var submit = document.getElementById('submit-btn');
submit.addEventListener('click',submitForm,false);