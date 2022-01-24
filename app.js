let menulists=document.querySelectorAll("#menulist li");
let pagelists=["homesection","aboutsection","servicesection"];
function homesection(e){
	sectionfilter("homesection");
	e.style.borderBottom="2px solid cyan";
	menuListfilter(e);
}
function aboutsection(e){
	sectionfilter("aboutsection");
	e.style.borderBottom="2px solid cyan";
	menuListfilter(e);

}
function servicesection(e){
	sectionfilter("servicesection");
	e.style.borderBottom="2px solid cyan";
	menuListfilter(e);

}
function sectionfilter(value){
	for(let i=0;i<pagelists.length;i++){
		if (pagelists[i]==value) {
			document.querySelector("#"+pagelists[i]).style.zIndex=1;
			document.querySelector("#"+pagelists[i]).style.opacity="1";
		}else{
			document.querySelector("#"+pagelists[i]).style.zIndex=0;
			document.querySelector("#"+pagelists[i]).style.opacity="0";
		}
	}
}
function menuListfilter(e){
	for (let i = 0;i<menulists.length;i++) {
		if(menulists[i] != e){
			menulists[i].style.borderBottom="2px solid white";
		}
	}
}