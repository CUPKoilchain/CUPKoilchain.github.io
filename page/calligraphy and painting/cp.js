var x01;
function over(x){
	x01=x.style.zIndex;
	x.style.zIndex=8;
}
function leave(y){
	y.style.zIndex=x01;
	/*alert("现在的z-index为"+y.style.zIndex);*/
}