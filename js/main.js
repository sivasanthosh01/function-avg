function sum(mark1,mark2,mark3,mark4,mark5)
{
	let total=mark1+mark2+mark3+mark4+mark5;
	let average=total/sum.length;
	document.write("total="+total+"&nbsp;");
	return average;
}


var rahul=sum(90,95,91,85,100);
document.write("rahul Average is:"+rahul+"<br>");

var santhosh=sum(88,92,65,62,90);
document.write("santhosh Average is:"+santhosh+"<br>");

var arun=sum(75,72,70,78,70);
document.write("arun Average is:"+arun+"<br>");	

var vasi=sum(68,99,56,60,63);
document.write("vasi Average is :"+vasi+"<br>");

var kohli=sum(99,100,91,100,100);
document.write("vasi Average is :"+kohli+"<br>");


