// QUINTEN BATTERMAN
//EECS 488

function checkPassword()
{
	let pass1 = document.getElementById('password1').value;
	let pass2 = document.getElementById('password2').value;

	if(pass1.length >= 8 && pass1 == pass2)
	{
		window.alert("passwords match!");
	}
	else if (pass1.length < 8 || pass2.length < 8)
	{
		window.alert("Your password must be at least 8 characters")
	}
  else
	{
  	window.alert("Your passwords do not match, please check you typing and try again")
  }
}
