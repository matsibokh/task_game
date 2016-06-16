var size= 100;
//дані з кольорами
var arr = ['#FF0000','#FF0000','#FF009E','#FF009E','#9100FF','#9100FF','#0000FF','#0000FF','#00FFFC','#00FFFC','#09FF00','#09FF00','#E2FF00','#E2FF00','#4B4646','#4B4646'];
var e = [['#FF0000','#FF0000','#FF009E','#FF009E'],['#9100FF','#9100FF','#0000FF','#0000FF'],['#00FFFC','#00FFFC','#09FF00','#09FF00'],['#E2FF00','#E2FF00','#4B4646','#4B4646']];
var n=0;
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

/*                         функція що рамдомно перемішує кольори і малює їх на дошці. 
//рамдомнні числа
function getRandom(a,b){
			return Math.random()-0.5;
		}

var arr1=arr.sort(getRandom);

for (var i=0; i<4; i++){
	for (var j=0; j<4; j++){
		ctx.fillStyle= arr1[n];
		ctx.fillRect(i*size, j*size, 99, 99);
		n++;
	}	
}
*/