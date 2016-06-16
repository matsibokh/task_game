function play(){
	var size= 100; //розмір ячейок
	//масив для рандомного перемішання кольорів:
	var arr = ['#FF0000','#FF0000','#FF009E','#FF009E','#9100FF','#9100FF','#0000FF','#0000FF','#00FFFC','#00FFFC','#09FF00','#09FF00','#E2FF00','#E2FF00','#4B4646','#4B4646'];
	//масив з кольорами для ячейок
	var e = [['#FF0000','#FF0000','#FF009E','#FF009E'],['#9100FF','#9100FF','#0000FF','#0000FF'],['#00FFFC','#00FFFC','#09FF00','#09FF00'],['#E2FF00','#E2FF00','#4B4646','#4B4646']];
	var n=0;  //початкове значення для ключів масиву arr
	var fin=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]; //початковий масив для перевірки того, чи відкрита ячейка (по замовчуванню всі зариті)
	var win=0; //початкове значення для відкритих пар кольорів
	var k=0; // кількість кліків (до 2-х)
	var color1=null;
	var color2=null;
	var detailsOneX=null;
	var detailsOneY=null;
	var detailsTwoX=null;
	var detailsTwoY=null;
	
	//малюємо пусту дошку. 
	var bord = document.getElementById('bord');
	var ctx = bord.getContext('2d');
	ctx.fillRect(0,0,bord.width,bord.height);
	
		//малюєм сірі ячейки
		for (var i=0; i<4; i++){
			for (var j=0; j<4; j++){
				ctx.fillStyle='#D3D3D3';
				ctx.fillRect(i*size, j*size, 99, 99);
			}	
		}
	
	
	this.getRandom = function(a,b){
		return Math.random()-0.5;
	};
	var arr1=arr.sort(getRandom);
		ctx.fillStyle= arr1[n];
		ctx.fillRect(i*size, j*size, 99, 99);
	for (i=0;i<4;i++){
		for(j=0;j<4;j++){
			e[i][j]=arr1[n]
			n++
		}
	};
		
	function checkRes(){
		if (win===8){
			alert("You Win");
		}
	};
	
	function eventOne(x, y) { 
		if (fin[x][y]===1){
			alert("Ця ячейка вже відкрита");
		} else if (fin[x][y]===0){
			ctx.fillStyle= e[y][x];
			ctx.fillRect(y*size, x*size, 99, 99);
			k++;
			color1=e[y][x];
			detailsOneX = x;
			detailsOneY = y;
			return color1, detailsOneX, detailsOneY;
		}
	};

	function eventTwo(x, y, detailsOneX, detailsOneY){
		if (fin[x][y]===1 || (detailsOneX===x && detailsOneY===y) ){
			alert("Ця ячейка вже відкрита");
		} else if (fin[x][y]===0){
			ctx.fillStyle= e[y][x];
			ctx.fillRect(y*size, x*size, 99, 99);
			k--;
			color2=e[y][x];
			detailsTwoX = x;
			detailsTwoY = y;
			setTimeout(result,300,color1, color2, detailsOneX, detailsOneY, detailsTwoX, detailsTwoY);
			return color2, detailsTwoX, detailsTwoY;
		}
	};

	function result(color1,color2,detailsOneX,detailsOneY, detailsTwoX,detailsTwoY){
		if (color1===color2){
			fin[detailsOneX][detailsOneY]=1;
			fin[detailsTwoX][detailsTwoY]=1;
			win++;
			checkRes();
		} else if (color1!==color2)
			ctx.fillStyle='#D3D3D3';
			ctx.fillRect(detailsOneY*size, detailsOneX*size, 99, 99);
			ctx.fillRect(detailsTwoY*size, detailsTwoX*size, 99, 99);
	};

	bord.onclick=function(e){
		var y = Math. floor((e.pageX - bord.offsetLeft)/100);
		var x = Math. floor((e.pageY - bord.offsetTop)/100);
		if(k===0){
			eventOne(x, y);
		} else if ((k===1)){
			eventTwo(x, y, detailsOneX, detailsOneY);
		}
	};
}