var input, buttons, solved, dot;
function onInit()
{
	buttons = document.querySelectorAll("button");
	input = document.querySelector("input");
	solved = 0;
	dot = 0;
}

function onInput(b)
{
	if(solved != 0)
	{
		if(b.value === "+" || b.value === "-" || b.value === "*" || b.value === "/")
		{
			input.value = input.value + b.value;
			solved = 0;
		}
		else{
			input.value = b.value;
			solved = 0;
		}
	}
	else
	{
		if(b.value === "m" || b.value === "r" || b.value === "c")
		{
			input.value = "This button does not work yet";
		}
		else if(b.value === ".")
		{
			if(input.length == 0)
			{
				input.value = "0."
			}
			dot++;
		}
		else{
			input.value = input.value + b.value;
		}
	}
}

function onCancel(){
	if(input.lenght != 0)
	{
		input.value = " ";
	}
}

function onSolve(){
	var breakloop = 0, empty = 0;
	if(input.value == null || input.value == "")
	{
		alert("Input is empty.");
	}
	else
	{
		for(i = 0; i < input.value.length; i++)
		{
			if(breakloop == 1){break;}
			if(input.value[i] == "+" || input.value[i] == "-" || input.value[i] == "*" || input.value[i] == "/"){breakloop = 1; empty = 0;}
			else{empty++;}
		}
		if(empty == 0){
			solved++;
			if(input.value.endsWith("+") == true || input.value.endsWith("-") == true || input.value.endsWith("/") == true || input.value.endsWith("*") == true){
				input.value = input.value+"0";
			}
			var formula = input.value;
			input.value = eval(formula);
		}
		else{alert("You can't solve without an operator"); empty=0;}
	}
}