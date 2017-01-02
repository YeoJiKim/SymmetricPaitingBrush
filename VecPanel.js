
var panel;

var _DragSpd;
var _bAddBrush;
var _bRandomBrushProps;
var _Color;
var _Rot;
var _Scale;
var _Radius;

function createPanel(){
   panel=QuickSettings.create(width+30,0,"Particle Controller")  
  .addRange("DragSpeed",0.2,5.0,1.0,0.1,draw)
  .addBoolean("AddBrush",false,draw)
  .addBoolean("RandomBrushProps",true,draw)
  .addColor("Color","#000000",draw) 
  .addRange("Rotation",-180.0,180.0,0.0,5.0,draw)
  .addRange("Scale",-5.0,5.0,1.0,1.0,draw)
  .addRange("Radius",5.0,20.0,6.0,1.0,draw)
 .addButton("ResetBrush",function(){
								clear();
								for(var i=0;i<_pBrushes.length;i++){
									delete _pBrushes[i];
									_pBrushes[i]=null;
								}
								_pBrushes[0]=new Particle(color(0,0,0,255),7.0,createVector(width/2,height/2),createVector(0),null,0,1);
						})
						
  .addButton("SavePicture",function(){
								saveCanvas("myCanvas","jpg");
						});
  
  
}

function bindPanelValue(){
  _DragSpd=panel.getRangeValue("DragSpeed");
  _bAddBrush=panel.getBoolean("AddBrush");
  _bRandomBrushProps=panel.getBoolean("RandomBrushProps");
  _Color=panel.getColor("Color");
  _Rot=panel.getRangeValue("Rotation");
  _Scale=panel.getRangeValue("Scale");
  _Radius=panel.getRangeValue("Radius");
 
   
}