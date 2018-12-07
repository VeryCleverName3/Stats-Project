function minimum(valueArray)
{
	//This for loop increments i until there is a value in valueArray at i. This would be the minimum. Then it adds 2 because 2 is subtracted when valueArray is populated
	var i;
	for (i = 0; valueArray[i] == 0; i++) {}
	return i + 2;
}
function maximum(valueArray)
{
	//Adds 2 to the last subscript, which is the maximum. .length is the last subscript + 1, and then I add one more because 2 is subtracted during population
	return valueArray.length + 1;
}
function Q1(valueArray)
{
	//Get the sum of all values in the array. This is equal to the number of games played
	var sum = 0;
	for (var i = 0; i < valueArray.length; i++)
	{
		sum += valueArray[i];
	}
	//Divide by 4 to get the game number in question
	div4 = sum / 4;
	var q1;
	//See if you have passed it or not. If you have, set q1 and return
	for (var i = 0; i < valueArray.length; i++)
	{
		div4 -= valueArray[i];
		if (div4 <= 0)
		{
			q1 = i + 2;
			break;
		}
	}
	return q1;
}
function Q2(valueArray)
{
	//Get the sum of all values in the array. This is equal to the number of games played
	var sum = 0;
	for (var i = 0; i < valueArray.length; i++)
	{
		sum += valueArray[i];
	}
	//Divide by 2 to get the game number in question
	div2 = sum / 2;
	var q2;
	//See if you have passed it or not. If you have, set q2 and return
	for (var i = 0; i < valueArray.length; i++)
	{
		div2 -= valueArray[i];
		if (div2 <= 0)
		{
			q2 = i + 2;
			break;
		}
	}
	return q2;
}
function Q3(valueArray)
{
	var sum = 0;
	for (var i = 0; i < valueArray.length; i++)
	{
		sum += valueArray[i];
	}
	//Multiply by 0.75 to get the game number in question
	div4 = sum * 0.75;
	var q3;
	//See if you have passed it or not. If you have, set q3 and return
	for (var i = 0; i < valueArray.length; i++)
	{
		div4 -= valueArray[i];
		if (div4 <= 0)
		{
			q3 = i + 2;
			break;
		}
	}
	return q3;
}

function outlierMin(valueArray)
{
	IQR = 1.5 * (Q3(valueArray) - Q1(valueArray));
	return Q1(valueArray) - IQR;
}

function outlierMax(valueArray)
{
	IQR = 1.5 * (Q3(valueArray) - Q1(valueArray));
	return Q3(valueArray) + IQR;
}

function allOutliers(valueArray)
{
	min = outlierMin(valueArray);
	max = outlierMax(valueArray);
	outliers = []
	for (var i = 0; i < valueArray.length; i++)
	{
		if ((i + 2) < min || (i+2) > max)
		{
			outliers[outliers.length] = i;
		}
	}
	return outliers;
}