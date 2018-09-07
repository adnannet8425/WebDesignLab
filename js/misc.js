$(function(){

	$("#cpass").on('change',function(e){
		e.preventDefault();
		var cpass=$(this).val();
		var pass=$("#pass").val();
		if(pass!=cpass)
		{
			$(this).val("");
			$("$cpasserr").html("<span class='alert alert-danger'>Password do not match</span>");
		}
		else
		{
			$("$cpasserr").html("<span class='alert alert-danger'>Password matches</span>");
		}
		});
		$("#cpass").on('change',function(e))
		{
			$
		}
});