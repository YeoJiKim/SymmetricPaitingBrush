var _Canvas;
var _pBrushes=new Array();
var _br;


function setup(){
	createCanvas(800,600);
	frameRate(100);
	createPanel();
	
	
	_br=new Particle(color(0,0,0,255),7.0,createVector(width/2,height/2),createVector(0),null,0,1);
	_pBrushes.push(_br);

}
function draw(){
	
	bindPanelValue();
	
	noStroke();
	
	
	if(_pBrushes[0]!=null){
	updateBrushes();
	
	drawBrushes();
	useControl();}
	
	
}


function drawBrushes(){
	for(var i=0;i<_pBrushes.length;i++){
		_pBrushes[i].draw();
	}
}

function updateBrushes(){
	var dt=(millis()/1000)/frameCount;
	
	for(var i=0;i<_pBrushes.length;i++){
		_pBrushes[i].update(dt);
		var p=_pBrushes[i].getPos();
		if(p.x<0||p.x>width||p.y<0||p.y>height)
	  {
		  p.x=wrap(p.x,0,width);
		  p.y=wrap(p.y,0,height);
		  _pBrushes[i].setPos(p);
	  }
	}
}

function useControl(){
	if(mouseIsPressed&&(!_bAddBrush)){
	var mpos=createVector(mouseX,mouseY);
	var brPos=_pBrushes[0].getPos();
	
	var offset=p5.Vector.sub(mpos,brPos);
	var vel=p5.Vector.mult(offset,_DragSpd);
	_pBrushes[0].setVel(vel);
	}
}


function mousePressed(){
	if(mouseX<width&&mouseX>0&&mouseY>0&&mouseY<height){
	if(_bAddBrush){
		var radius=_Radius;
		var rot=_Rot;
		var scl=_Scale;
		var cr=_Color;
		if(_bRandomBrushProps){
			radius=random(3,15);
			rot=random(-180,180);
			scl=random(-2,2);
			cr=color(random(0,255),random(0,255),random(0,255),random(75,150));
		}
		var newBr;
		newBr=new Particle(cr,radius,createVector(mouseX,mouseY),createVector(0),_pBrushes[0],rot,scl);
		_pBrushes.push(newBr);
	}
	else{
		_pBrushes[0].setPos(createVector(mouseX,mouseY));
	}
	}
}

function wrap(value,f,t)
{
	var temp;
	if(f>t)
	{
		temp=f;f=t;t=temp;
	}
	var cycle=t-f;
	if(cycle==0)
	{
		return t;
	}
	
	return value-cycle*floor((value-f)/cycle);
}