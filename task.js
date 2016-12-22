function check(){
	let flag=true;
	for (let i=0;i<15;i++)
		if (document.getElementsByClassName('elem')[i].needX+'px'===document.getElementsByClassName('elem')[i].style.left&&
			document.getElementsByClassName('elem')[i].needY+'px'===document.getElementsByClassName('elem')[i].style.top)
			document.getElementsByClassName('elem')[i].style.background='green';
		else {
			document.getElementsByClassName('elem')[i].style.background='blue';
			flag=false;
		}
	if (flag) alert('Поздравляю');
}

function getActive(elem){
	var none=document.getElementsByClassName('none')[0];
	elem.x=elem.style.left;
	elem.y=elem.style.top;
elem.onmousedown = function(e) {
	moveAt(e);
	elem.style.zIndex = 1000;
}
function moveAt(e) {
	elem.classList.remove('goback');
	elem.style.left = e.pageX - elem.offsetWidth / 2 + 'px';
	elem.style.top = e.pageY - elem.offsetHeight / 2 + 'px';
	none.style.background='grey';
	if ((parseInt(elem.style.left) >parseInt(none.style.left)-50)&&
		(parseInt(elem.style.left) <parseInt(none.style.left)+50)&&
		(parseInt(elem.style.top) >parseInt(none.style.top)-50)&&
		(parseInt(elem.style.top) <parseInt(none.style.top)+50)){
		if ((((parseInt(elem.x)-parseInt(none.style.left))<150 &&(parseInt(elem.x)-parseInt(none.style.left))>-150)&&
			((parseInt(elem.y)-parseInt(none.style.top))<150 &&(parseInt(elem.y)-parseInt(none.style.top))>-150))&&
			(parseInt(elem.x)-parseInt(none.style.left)===0 || parseInt(elem.y)-parseInt(none.style.top)===0))
		none.style.background='lime';
	}

document.onmousemove = function(e) {
	moveAt(e);
}

elem.onmouseup = function() {
	document.onmousemove = null;
	flag=true;
	if ((parseInt(elem.style.left) >parseInt(none.style.left)-50)&&
		(parseInt(elem.style.left) <parseInt(none.style.left)+50)&&
		(parseInt(elem.style.top) >parseInt(none.style.top) -50)&&
		(parseInt(elem.style.top) <parseInt(none.style.top) +50))
		if ((((parseInt(elem.x)-parseInt(none.style.left))<150 &&(parseInt(elem.x)-parseInt(none.style.left))>-150)&&
			((parseInt(elem.y)-parseInt(none.style.top))<150 &&(parseInt(elem.y)-parseInt(none.style.top))>-150))&&
			(parseInt(elem.x)-parseInt(none.style.left)===0 || parseInt(elem.y)-parseInt(none.style.top)===0))
		{
			elem.style.left = none.style.left;
			elem.style.top = none.style.top;
			none.style.left = elem.x ;
			none.style.top = elem.y ;
			elem.x=elem.style.left;
			elem.y=elem.style.top;
			none.style.background='grey';
			flag=false;
			check();
		}
	if (flag){
		elem.classList.add('goback');
		elem.style.left = elem.x;
		elem.style.top = elem.y;
	}
	elem.style.zIndex = 5;
}
}
}
{
	let positionDivs=[];
	for (let j=0;j<4;j++)
	for (let i=0;i<4;i++)
	if (i+j*4<15){
		let obj={x:100+100*i,y:100+100*j}
		positionDivs.push(obj);
		document.getElementsByClassName('elem')[i+j*4].needX=obj.x;
		document.getElementsByClassName('elem')[i+j*4].needY=obj.y;
	}
	for (let j=0;j<4;j++)
	for (let i=0;i<4;i++)
		if (i+j*4<15){
		let k;
		let elem=document.getElementsByClassName('elem')[i+j*4];
		k=Math.floor(Math.random()*(positionDivs.length))
		elem.style.left=positionDivs[k].x+'px';
		elem.style.top=positionDivs[k].y+'px';
		positionDivs.splice(k,1);
		getActive(elem);
	}
}
document.getElementsByClassName('none')[0].style.left='400px';
document.getElementsByClassName('none')[0].style.top='400px';
check();