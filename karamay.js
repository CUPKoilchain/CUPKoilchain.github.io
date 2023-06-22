window.onload=function(){
	var curIndex =0;
			var modelfive=document.querySelectorAll("#modelfour  .modelfive li")
			var modeleights=document.querySelectorAll("#modelfour .modeleight li")
			var timer = this.setInterval(function(){right.click();},2000)

			
			for(let i=0;i<modeleights.length;i++){
				modeleights[i].index=i
				modeleights[i].onclick=start
			
			}
			function start(){
				 curIndex=this.index;
				 
				 for(let i=0;i<modeleights.length;i++){
					 modeleights[i].classList.remove("modelnine")
					 modelfive[i].classList.remove("modelsix")
				 }
				 modeleights[curIndex].classList.add("modelnine")
				 modelfive[curIndex].classList.add("modelsix")
			}
			
			
			let left = document.querySelector('#modelfour .modelseven').firstElementChild
			let right = document.querySelector('#modelfour .modelseven').lastElementChild
			
			left.onclick = function() {
			if(curIndex===0){
				curIndex=6
			}else{
				curIndex--
			}
			for(let i=0;i<modeleights.length;i++){
				modeleights[i].classList.remove("modelnine")
				modelfive[i].classList.remove("modelsix")
			}
			modeleights[curIndex].classList.add("modelnine")
			modelfive[curIndex].classList.add("modelsix")
			}
			
			right.onclick = function() {
				curIndex=(++curIndex)%7
			for(let i=0;i<modeleights.length;i++){
				modeleights[i].classList.remove("modelnine")
				modelfive[i].classList.remove("modelsix")
			}
			modeleights[curIndex].classList.add("modelnine")
			modelfive[curIndex].classList.add("modelsix")
			}
			
			var Tle2="document.all.a26.style";
var Tle1="document.all.a25.style";
	
function Fade(){   
	var BackX = Math.random()*10;
	var BackY = Math.random()*5;   
	if(Math.random()<0.5){   
		BackX = -BackX;   
		BackY = -BackY;   
	}   
	eval(Tle1).visibility = eval(Tle2).visibility = "visible";   
	eval(Tle2).left = parseInt(eval(Tle1).left) + BackX;   
	eval(Tle2).top = parseInt(eval(Tle1).top)  + BackY;   
	var FadeID = setTimeout("Fade()",100);   
}
Fade();
}
			