$(function(){
	$('#rollno').on('blur',function(){
		if(!/(\d{2}((CO)|(DCO)|(EE)|(DEE)|(EX)|(DEX)|(ME)|(DME)|(CE)|(DCE)|(CES)|(DCES))\d{2,3})/i.test(this.value)){
			alert("Invalid Roll No");
			this.value="";
			$(this).focus();
		}
	});

	$('#sname').on('keypress',function(e){
		if(/[^a-zA-Z]/.test(e.key)){
			alert("Invalid Name. Only Alphabets and Spaces are allowed");
			this.value="";
			$(this).focus();
			return false;
		}
	});

	$('#address').on('blur',function(){
		if(this.value.length<50 || this.value.length>150){
			alert("Address Should be Between 50-150 Character");
			this.value="";
			$(this).focus();
		}
	});
	
	$('#semail').on('blur',function(){
		if(!/(^\w+)@([a-z]+).([a-z]{2,3})/i.test(this.value)){
			alert("Invalid Email Address.");
			this.value="";
			$(this).focus();
		}
	});
});