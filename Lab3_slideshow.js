// QUINTEN BATTERMAN
//EECS 488

let current = 0;

function previous()
{
	let pic = document.getElementById("pictures");
	if (current == 0)
	{
		current = 4;
	}
	else
	{
		current--;
	}

	pic.src = "pic" + current.toString() + ".jpg";
}

function next()
{
	let pic = document.getElementById("pictures");
	if (current == 4)
	{
		current = 0;
	}
	else
	{
		current++;
	}

	pic.src = "pic" + current.toString() + ".jpg";
}