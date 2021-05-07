function formValidation()
{
var uid = document.registration.userid;
var passid = document.registration.passid;
var uname = document.registration.username;
var uph = document.registration.ph;
var uemail = document.registration.email;
var umsex = document.registration.msex;
var ufsex = document.registration.fsex;
if(userid_validation(uid,5,12))
{
	if(passid_validation(passid,7,12))
	{
		if(allLetter(uname))
		{
			if(allnumeric(uph))
			{
				if(ValidateEmail(uemail))
					{
						if(validsex(umsex,ufsex))
						{
						}
					}
				}
			}	
		}
	}
	return false;
}

function userid_validation(uid,mx,my)
{
	var uid_len = uid.value.length;
		if (uid_len == 0 || uid_len >= my || uid_len < mx)
		{
			document.registration.a1.value="User Id should not be empty / length be between "+mx+" to "+my;
			uid.focus();
			return false;
		}
	return true;
}

	function passid_validation(passid,mx,my)
	{
		var passid_len = passid.value.length;
		if (passid_len == 0 ||passid_len >= my || passid_len < mx)
		{
			document.registration.a1.value="Password should not be empty / length be between "+mx+" to "+my;
			passid.focus();
			return false;
		}
		return true;
	}


function allLetter(uname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters))
	{
		return true;
	}
	else
	{
		document.registration.a1.value="Name should not be empty / must have alphabet characters only";
		uname.focus();
		return false;
	}
}
	
	
	function allnumeric(uph)
	{ 
		var numbers = /^([0-9]{10})+$/;
		if(uph.value.match(numbers))
		{
			return true;
		}
		else
		{
			document.registration.a1.value="you must enter phone number with 10 numeric characters only ";
			uph.focus();
			return false;
		}
	}
	
function ValidateEmail(uemail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
	{
		return true;
	}
	else
	{
		document.registration.a1.value="You must enter mail id /have entered an invalid email address!";
		uemail.focus();
		return false;
	}
	}

	
function validsex(umsex,ufsex)
{
	x=0;
	y=0;
	if(umsex.checked) 
	{
		x++;
	} 
	if(ufsex.checked)
	{
		y++;
	}
	if(x==0&&y==0)
	{
		document.registration.a1.value="Select Male/Female";
		umsex.focus();
		return false;
	}
	else if(x!=0&&y!=0)
	{
		umsex.checked=false;
		ufsex.checked=false;
		document.registration.a1.value="Select any one male/female";
		umsex.focus();
	}
	else
	{
		document.registration.a1.value="Form Succesfully Submitted";
		return true;
	}
}