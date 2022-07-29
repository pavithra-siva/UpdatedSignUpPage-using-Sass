$(document).ready(function(){
	$('#usererrorMessage').hide()
	$('#emailerrorMessage').hide()
	$('#passerrorMessage').hide()
	var user_err=true;
	var email=true;
	var pass_err=true;

	$('#username').keyup(function(){
		username_check();
	});

	function username_check(){
		var user=$('#username').val();
		if(user == ""){
			$('#usererrorMessage').show();
			$('#usererrorMessage').html("*Username must be required.");
			$('#usererrorMessage').focus()
			$('#usererrorMessage').css('color','red')
			user_err=false;
		    return false;
		}
		else{
			$('#usererrorMessage').hide()
		}
		if((user.length <=3 ) || (user.length >=10 )){
			$('#usererrorMessage').show();
			$('#usererrorMessage').html("*Username must be Long.");
			$('#usererrorMessage').focus()
			$('#usererrorMessage').css('color','red')
			user_err=false;
		    return false;
		}
		else{
			$('#usererrorMessage').hide()
		}
	}

	$('#email').keyup(function(){
		email_check();
	});

	function email_check(){
		var email=$('#email').val();
		var patt = new RegExp("/^[a-zA-Z0-9_.+-]{2,15}+\@{1}+[a-zA-Z0-9-]{2,15}+\.{1}([a-zA-Z0-9]{2,4}+$/");
		if(email == ""){
			$('#emailerrorMessage').show();
			$('#emailerrorMessage').html("*Email must be required.");
			$('#emailerrorMessage').focus()
			$('#emailerrorMessage').css('color','red')
			email=false;
		    return false;
		}
		else{
			$('#emailerrorMessage').hide()
		}
		if(!patt.test(email)){
			$('#emailerrorMessage').show();
			$('#emailerrorMessage').html("*Give valid email Id.");
			$('#emailerrorMessage').focus()
			$('#emailerrorMessage').css('color','red')
			email=false;
		    return false;
		}
		else{
			$('#emailerrorMessage').hide()
		}
	}

	$('#password').keyup(function(){
		password_check();
	});

	function password_check(){
		var password=$('#password').val();
		var patt = new RegExp("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$");
		if(password == ""){
			$('#passerrorMessage').show();
			$('#passerrorMessage').html("*Password must be required.");
			$('#passerrorMessage').focus()
			$('#passerrorMessage').css('color','red')
			pass_err=false;
		    return false;
		}
		else{
			$('#passerrorMessage').hide()
		}
		if((password.length>=8)){
			$('#passerrorMessage').hide()
		}
		else{	
			$('#passerrorMessage').show();
			$('#passerrorMessage').html("*Give Strong Password.");
			$('#passerrorMessage').focus()
			$('#passerrorMessage').css('color','red')
			pass_err=false;
		    return false;
		}
		// if(!patt.test(password)){
		// 	$('#passerrorMessage').show();
		// 	$('#passerrorMessage').html("*Give Strong Password.");
		// 	$('#passerrorMessage').focus()
		// 	$('#passerrorMessage').css('color','red')
		// 	pass_err=false;
		//     return false;
		// }
		// else{
		// 	$('#passerrorMessage').hide()
		// }
	}
});