function minimum(sortedList)
{
	return sortedList[0];
}
function maximum(sortedList)
{
	return sortedList[sortedList.length - 1];
}
function Q1(sortedList)
{
	div4 = Math.floor(sortedList.length/4);
	switch(sortedList.length % 4)
	{
		case 0:
			return (sortedList[div4 - 1] + sortedList[div4]) / 2;
		case 1:
			return (sortedList[div4 - 1] + sortedList[div4]) / 2;
		case 2:
			return (sortedList[div4]);
		case 3:
			return (sortedList[div4]);
}
function Q2(sortedList)
{
	div2 = Math.floor(sortedList.length/2);
	switch(sortedList.length % 2)
	{
		case 0:
			return (sortedList[div2 - 1] + sortedList[div2]) / 2;
		case 1:
			return sortedList[div2];
	}
}
function Q3(sortedList)
{
	div4 = Math.floor(sortedList.length/4);
	div4 *= 3;
	switch(sortedList.length % 4)
	{
		case 0:
			return (sortedList[div4 - 1] + sortedList[div4]) / 2;
		case 1:
			return (sortedList[div4] + sortedList[div4 + 1]) / 2;
		case 2:
			return sortedList[div4 + 1];
		case 3:
			return sortedList[div4 + 2];
	}
}
