var i=0;
	function timedCount(){
	i=i++;
	postMessage(i)
	setTimeout("timed count()",500);
}
	timedCount();
	