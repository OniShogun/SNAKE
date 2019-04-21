function Snake(besarUlar){
		this.x;
		this.y;
		this.panjangTubuhSaatIni = 15;
		this.speed = 2;
		this.tubuhSnake = [{x:this.x,y:this.y}];
		this.besarUlar = besarUlar;
		
		this.move = function(sudut){
			this.x += Math.cos(sudut*Math.PI/180)*this.speed;
			this.y += Math.sin(sudut*Math.PI/180)*this.speed;
	}
}