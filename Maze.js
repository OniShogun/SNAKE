function Maze(besarDinding){
	this.besarDinding = besarDinding;
	this.mazeLayout = null;
	
	this.setMazeLayout = function(layoutInText){
		var lines = layoutInText.split('\n');
		this.mazeLayout = [];
		for ( var i = 0 ; i < lines.length ; i++ ) {
			this.mazeLayout[i] = lines[i];
		}
	}
	
	this.getMazeLayout = function(){
		return this.mazeLayout;
	}
	
	this.getBesarDinding = function(){
		return this.besarDinding;
	}
	
}