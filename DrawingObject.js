function DrawingObject(context,contextMaze){
	this.context = context;
	this.contextMaze = contextMaze;
	
	//untuk gambar apel
	this.drawApple = function(x,y,besarApel){
		this.context.lineWidth = 1;
		this.context.strokeStyle = 'white';
		this.context.beginPath();
		this.context.moveTo(x+(besarApel/2),y+5);
		this.context.quadraticCurveTo(x+besarApel,y,x+besarApel,y+(besarApel/2));
		this.context.quadraticCurveTo(x+(besarApel-2),y+besarApel,x+(besarApel/2),y+(besarApel-2));
		this.context.quadraticCurveTo(x+2,y+besarApel,x,y+(besarApel/2));
		this.context.quadraticCurveTo(x,y,x+(besarApel/2),y+5);
		this.context.closePath();
		
		this.context.fillStyle = 'red';
		this.context.fill();
		this.context.moveTo(x+10,y+5);
		this.context.lineTo(x+10,y);
		this.context.closePath();
		this.context.stroke();
	}

	//untuk gambar ular
	this.drawSnake = function(arrayUlar,besarUlar){
		this.context.lineWidth = besarUlar;
		this.context.strokeStyle = 'lawngreen';
		
		for(var i = 0;i< arrayUlar.length-1;i++){
			if(Math.abs(arrayUlar[i].x - arrayUlar[i+1].x) > 2||
				Math.abs(arrayUlar[i].y - arrayUlar[i+1].y) > 2){
				i++;
			}
			else{
				this.context.lineWidth = besarUlar;
				this.context.strokeStyle = 'lawngreen';
				
				if(i > 5){
					this.context.strokeStyle = 'limegreen';
				}
				
				this.context.beginPath();
				this.context.moveTo(arrayUlar[i].x,arrayUlar[i].y);
				this.context.lineTo(arrayUlar[i+1].x,arrayUlar[i+1].y);
				this.context.closePath();
				this.context.stroke();
				
				if(i == 2){
					this.context.strokeStyle = 'red';
					this.context.lineWidth = 3;
					this.context.beginPath();
					this.context.moveTo(arrayUlar[i].x,arrayUlar[i].y);
					this.context.lineTo(arrayUlar[i+1].x,arrayUlar[i+1].y);
					this.context.closePath();
					this.context.stroke();
				}
			}
		}
			
	}

	//untuk gambar maze
	this.drawMaze = function(arrayLayout,besarDinding){
		this.contextMaze.lineWidth = besarDinding;
		this.contextMaze.fillStyle = 'darkslategrey';
				
		for(var i = 0;i< arrayLayout.length; i++){
			let temp = arrayLayout[i];
			for(var j = 0;j< arrayLayout.length;j++){
				if(temp.charAt(j) == '#'){
					this.contextMaze.fillRect(j*besarDinding,i*besarDinding,besarDinding,besarDinding);
				}
			}
		}
	}
}