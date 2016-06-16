var size= 100;
//дані з кольорами
var arr = ['#FF0000','#FF0000','#FF009E','#FF009E','#9100FF','#9100FF','#0000FF','#0000FF','#00FFFC','#00FFFC','#09FF00','#09FF00','#E2FF00','#E2FF00','#4B4646','#4B4646'];
var e = [['#FF0000','#FF0000','#FF009E','#FF009E'],['#9100FF','#9100FF','#0000FF','#0000FF'],['#00FFFC','#00FFFC','#09FF00','#09FF00'],['#E2FF00','#E2FF00','#4B4646','#4B4646']];
var n=0;
//малюємо пусту дошку. 
var bord = document.getElementById('bord');
var ctx = bord.getContext('2d');
ctx.fillRect(0,0,bord.width,bord.height);

for (var i=0; i<4; i++){
	for (var j=0; j<4; j++){
		ctx.fillStyle= arr[n];
		ctx.fillRect(i*size, j*size, 99, 99);
		n++;
	}	
}
