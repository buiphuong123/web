function changeProductList(type,element){
	let tabs=document.getElementsByClassName('tab-item');
	//console.log(tabs);  
	for(i=0;i<tabs.length;i++){
		tabs[i].style.background='#b14c38';
	}
	element.style.background='#ee4d2d';
	//document.getElementById(type).style.display='block'; xoas di may cai block o case

	switch(type){
		case 'trend':
		// hien thi danh sach ten trend
		document.getElementById(type).style.display='block';
		document.getElementById('new').style.display='none';
		document.getElementById('best-sell').style.display='none';
		break;
		case 'new':
		document.getElementById('trend').style.display='none';
		document.getElementById(type).style.display='block';
		document.getElementById('best-sell').style.display='none';
		break;
		case 'best-sell':
		document.getElementById('trend').style.display='none';
		document.getElementById('new').style.display='none';
		document.getElementById(type).style.display='block';
		break;
		

	}




}