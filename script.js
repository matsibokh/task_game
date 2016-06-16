function play(){
	var size= 100; //cell size
	//random color array
	var arr = ['#FF0000','#FF0000','#FF009E','#FF009E','#9100FF','#9100FF','#0000FF','#0000FF','#00FFFC','#00FFFC','#09FF00','#09FF00','#E2FF00','#E2FF00','#4B4646','#4B4646'];
	//cell color array
	var e = [['#FF0000','#FF0000','#FF009E','#FF009E'],['#9100FF','#9100FF','#0000FF','#0000FF'],['#00FFFC','#00FFFC','#09FF00','#09FF00'],['#E2FF00','#E2FF00','#4B4646','#4B4646']];
	var n=0;  //initial arr key value
	var fin=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]; //initial cell array
	var win=0; //winner counter
	var k=0; // click counter
	var isTime = true; // result time out flag
 	var color1, color2, detailsOneX, detailsOneY, detailsTwoX, detailsTwoY;
	
	//draw empty board 
	var board = document.getElementById('board');
	var ctx = board.getContext('2d');
	init();
	ctx.fillRect(0,0,board.width,board.height);
	
		//fill up board
		for (var i=0; i<4; i++){
			for (var j=0; j<4; j++){
				ctx.fillStyle='#D3D3D3';
				ctx.fillRect(i*size, j*size, 99, 99);
			}	
		}
	
	//random color mix
	function getRandom(a,b){
		return Math.random()-0.5;
	};
	function init(){
		var arr1=arr.sort(getRandom);
		for (i=0;i<4;i++){
			for(j=0;j<4;j++){
				e[i][j]=arr1[n]
				n++
			}
		};
	}
		
	// winner verification
	function checkRes(){
		if (win===8){
			alert("Congratulation! You are winner");
		}
	};
	
	//first click handler
	function eventOne(x, y) { 
		if (fin[x][y]===1){
			alert("This color is already match");
			isTime=true;
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

	//second click handler
	function eventTwo(x, y, detailsOneX, detailsOneY){
		if (fin[x][y]===1 || (detailsOneX===x && detailsOneY===y) ){
			alert("This color is already match");
			isTime=true;
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

	//color matching verification
	function result(color1,color2,detailsOneX,detailsOneY, detailsTwoX,detailsTwoY){
		if (color1===color2){
			fin[detailsOneX][detailsOneY]=1;
			fin[detailsTwoX][detailsTwoY]=1;
			win++;
			checkRes();
		} else if (color1!==color2) {
			ctx.fillStyle='#D3D3D3';
			ctx.fillRect(detailsOneY*size, detailsOneX*size, 99, 99);
			ctx.fillRect(detailsTwoY*size, detailsTwoX*size, 99, 99);
		}
		isTime=true;
	};

	//on board click handler
	board.onclick=function(e){
		if(isTime){
			var y = Math. floor((e.pageX - board.offsetLeft)/100);
			var x = Math. floor((e.pageY - board.offsetTop)/100);
			if(k===0){
				eventOne(x, y);
			} else if ((k===1)){
				isTime=false;
				eventTwo(x, y, detailsOneX, detailsOneY);
			}
		}
	};
}