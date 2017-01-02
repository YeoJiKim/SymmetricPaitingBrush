
function Particle(color,radius,pos,vel,p,rotation,scale){
	this.init(radius,pos,vel,p,rotation,scale,color);
}

Particle.prototype.makeSymVelToParent=function(parentVel){
	var newVel=parentVel.copy();
	newVel.rotate(this._rot);
	newVel.mult(this._scale);
	this._vel=newVel.copy();
}

Particle.prototype.update=function(dt){
	if(this._ptrParent!=undefined){
		var vel=this._ptrParent.getVel();
		this.makeSymVelToParent(vel);
	}
	var dvel=p5.Vector.mult(this._vel,dt);
	this._pos.add(dvel);
	this._vel.mult(0.98);
}

Particle.prototype.draw=function(){
	push();
	fill(this._color);
	ellipse(this._pos.x,this._pos.y,this._radius);
	pop();
}

Particle.prototype.getVel=function(){
	return this._vel;
}

Particle.prototype.setVel=function(v){
	this._vel=v.copy();
}
Particle.prototype.getPos=function(){
	return this._pos;
}

Particle.prototype.setPos=function(p){
	this._pos=p.copy();
}

Particle.prototype.init=function(radius,pos,vel,p,rotation,scale,color){
	this._radius=radius;
    this._pos=pos;
    this._vel=vel;
    this._ptrParent=p;
    this._rot=rotation;
    this._scale=scale;
    this._color = color;
}






