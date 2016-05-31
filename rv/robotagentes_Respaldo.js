
function Sensor(position,direction){
 THREE.Raycaster.call(this,position,direction);
 this.colision=false;
}
Sensor.prototype=new THREE.Raycaster();

function Robot(){
 THREE.Object3D.call(this);
 THREE.ImageUtils.crossOrigin = '';
 var textura = THREE.ImageUtils.loadTexture('./android.jpg');

 this.esfera= new THREE.Mesh(new THREE.SphereGeometry(2.5,100,100,0,6.3,0,1.57),new THREE.MeshPhongMaterial({map:textura}));
 this.Cuerpo= new THREE.Mesh(new THREE.CylinderGeometry(2.5, 2.5, 4.5,100),new THREE.MeshPhongMaterial({map:textura}));
 this.Antena1= new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.7),new THREE.MeshPhongMaterial({map:textura}));
 this.Antena2= new THREE.Mesh(new THREE.CylinderGeometry(0.1,0.1,0.7),new THREE.MeshPhongMaterial({map:textura}));
 this.Cuello= new THREE.Mesh(new THREE.CylinderGeometry(2.3,2.3,0.3,64,64,0,0,6.3),new THREE.MeshPhongMaterial({map:textura}));
 this.PieI= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,1.8),new THREE.MeshPhongMaterial({map:textura}));
 this.PieD= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,1.8),new THREE.MeshPhongMaterial({map:textura}));
 this.BrazoI= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,3.3,100),new THREE.MeshPhongMaterial({map:textura}));
 this.BrazoD= new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,3.3,100),new THREE.MeshPhongMaterial({map:textura}));
 this.brazI= new THREE.Mesh(new THREE.CylinderGeometry(0.33,0.33,0.4),new THREE.MeshPhongMaterial({map:textura}));
 this.brazD= new THREE.Mesh(new THREE.CylinderGeometry(0.33,0.33,0.4),new THREE.MeshPhongMaterial({map:textura}));
 
 /*this.esfera.scale.set(.2,.2,.2);
 this.Cuerpo.scale.set(.2,.2,.2);
 this.Antena1.scale.set(.2,.2,.2);
 this.Antena2.scale.set(.2,.2,.2);
 this.Cuello.scale.set(.2,.2,.2);
 this.PieI.scale.set(.2,.2,.2);
 this.PieD.scale.set(.2,.2,.2);
 this.BrazoI.scale.set(.2,.2,.2);
 this.BrazoD.scale.set(.2,.2,.2);
 this.brazI.scale.set(.2,.2,.2);
 this.brazD.scale.set(.2,.2,.2);*/
 
 this.Cuello.position.y=2.4;
 this.esfera.position.y=2.4;
 this.Antena1.position.x=-1;
 this.Antena1.position.y=4.75;
 this.Antena2.position.x=1;
 this.Antena2.position.y=4.75;

 this.PieI.position.x=-1;
 this.PieI.position.y=-2.5;
 this.PieD.position.x=1;
 this.PieD.position.y=-2.5;

 /*this.brazI.rotation.z=90*Math.PI/180;
 this.brazD.rotation.z=90*Math.PI/180;*/
 this.brazI.position.x=-2.7;
 this.brazI.position.y=1.8;
 this.brazD.position.x=2.7;
 this.brazD.position.y=1.8;

 this.BrazoI.position.x=-3.1;
 this.BrazoI.position.y=0.65;
 this.BrazoD.position.x=3.1;
 this.BrazoD.position.y=0.65;
 
 this.add(this.esfera);
 this.add(this.Cuerpo);
 this.add(this.Antena1);
 this.add(this.Antena2);
 this.add(this.Cuello);
 this.add(this.PieI);
 this.add(this.PieD);
 this.add(this.BrazoI);
 this.add(this.BrazoD);
 this.add(this.brazI);
 this.add(this.brazD);
}

Robot.prototype=new THREE.Object3D();

function RBA(x=0, y=0){
 Agent.call(this,x,y);
 THREE.ImageUtils.crossOrigin = '';
 
 this.ROBOT=new Robot();
 //this.ROBOT.rotation.z=0.5; 
 this.add(this.ROBOT);
 
this.sensor=new Sensor();
 this.sensor2=new Sensor();
this.sensor3=new Sensor();
this.sensor4=new Sensor();
this.sensor5=new Sensor();
 this.actuator=new Array();
 
 this.ROBOT.rotation.x=Math.PI/2;
 this.ROBOT.rotation.y=Math.PI/2;
 this.ROBOT.scale.set(1,1,1);
}

RBA.prototype=new Agent();

function Target(size,x=0,y=0){
 THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,size), new THREE.MeshBasicMaterial({color:'red'})); 
 this.size=size;
 this.position.x=x;
 this.position.y=y;
}

Target.prototype=new THREE.Mesh();


function Pared(size,x=0,y=0){
 
 THREE.ImageUtils.crossOrigin = '';
 var textura = THREE.ImageUtils.loadTexture('./metal2.jpg');
 THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,size), new THREE.MeshPhongMaterial({map:textura})); 
 this.size=size;
 this.position.x=x;
 this.position.y=y;
}
Pared.prototype=new THREE.Mesh();


Environment.prototype.setMap=function(map){
 var offset=Math.floor(map.length/2);
 for(var i=0;i<map.length;i++){
  for(var j=0;j<map.length;j++){
   if(map[i][j]==="x")
    this.add(new Pared(1, j-offset,-(i-offset)));
   else if(map[i][j]==="r")
    this.add(new RBA(j-offset,-(i-offset)));
   else if(map[i][j]==="t")
    this.add(new Target(1,12,12));
  }
 }
}	

RBA.prototype.sense=function(environment){
this.sensor.set(this.position, new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
//this.sensor.set(this.position, new THREE.Vector3(12,12,0));
this.sensor2.set(this.position, new THREE.Vector3(1,0,0));
this.sensor3.set(this.position, new THREE.Vector3(-1,0,0));
this.sensor4.set(this.position, new THREE.Vector3(0,1,0));
this.sensor5.set(this.position, new THREE.Vector3(0,-1,0));
 var obstaculo = this.sensor.intersectObjects(environment.children,true);
 var obstaculo2 = this.sensor2.intersectObjects(environment.children,true);
var obstaculo3 = this.sensor3.intersectObjects(environment.children,true);
var obstaculo4 = this.sensor4.intersectObjects(environment.children,true);
var obstaculo5 = this.sensor5.intersectObjects(environment.children,true);
 if ((obstaculo.length>0&&(obstaculo[0].distance<=1))){
  this.sensor.colision=true;
  console.log(px);
  console.log(py);}
 else
  this.sensor.colision=false;

 if((obstaculo2.length>0&&(obstaculo2[0].distance<=1)))
  this.sensor2.colision=true;
 else
  this.sensor2.colision=false;

if((obstaculo3.length>0&&(obstaculo3[0].distance<=1)))
  this.sensor3.colision=true;
 else
  this.sensor3.colision=false;

if((obstaculo4.length>0&&(obstaculo4[0].distance<=1)))
  this.sensor4.colision=true;
 else
  this.sensor4.colision=false;

if((obstaculo5.length>0&&(obstaculo5[0].distance<=1)))
  this.sensor5.colision=true;
 else
  this.sensor5.colision=false;

}

RBA.prototype.plan = function(environment){
 this.actuator.commands=[];


  if(this.sensor.colision==false)
  this.actuator.commands.push('Sigue');

else if(px==10.499999999999975 && py==11.599999999999953)
this.actuator.commands.push('Para');
else if(this.sensor3.colision==true && this.sensor5.colision==true)
  this.actuator.commands.push('Derecha');

else if(this.sensor3.colision==true && this.sensor4.colision==true)
  this.actuator.commands.push('Derecha');

else if(this.sensor2.colision==true && this.sensor4.colision==false)
  this.actuator.commands.push('Izquierda');


 else if(this.sensor.colision==true && this.sensor2.colision==true)
   this.actuator.commands.push('Izquierda');

else if(this.sensor.colision==true )
  this.actuator.commands.push('Izquierda');

}

RBA.prototype.act=function(environment){
 var command=this.actuator.commands.pop();
 if(command==undefined)
  console.log('Undefined command');
 else if(command in this.operations)
  this.operations[command](this);
 else
  console.log('Unknown command'); 
}

RBA.prototype.operations = {};

RBA.prototype.operations.Sigue = function(robot,step){
px=robot.position.x;
py=robot.position.y;

 if(step==undefined)
  step=0.1;
 robot.position.x+=step*Math.cos(robot.rotation.z);
 robot.position.y+=step*Math.sin(robot.rotation.z);
 //robot.rotation.z-=0.5;
};


RBA.prototype.operations.Derecha = function(robot,angulo){
 if(angulo==undefined){
  angulo=-Math.PI/2;
 }
 robot.rotation.z+=angulo;
};


RBA.prototype.operations.Izquierda = function(robot,angulo){
 if(angulo==undefined){
  angulo=Math.PI/2;
 }
 robot.rotation.z+=angulo;
};
 
RBA.prototype.operations.Para = function(robot){
};

function setup(){
 var mapa = new Array();
  mapa[0] = "xxxxxxxxxxxxxxxxxxxxxxxxtt";
  mapa[1] = "x                        t";
  mapa[2] = "x                     t  t";
  mapa[3] = "x      xxxxxx     x   x  t";
  mapa[4] = "x                     x  t";
 
  mapa[5] = "x         	       x   xxx";
  mapa[6] = "x    xxx xxxx  xxxx     x";
  
  mapa[7] = "x        x	       x     x";
        
  mapa[8] = "x        x	       x     x";
  
  mapa[9] = "xxxxx    x   xxxxxxxxxxxx";
 mapa[10] = "x   x                   x";
 mapa[11] = "x   x                   x";
 mapa[12] = "x   x                   x";
 mapa[13] = "x   x    xxxxxxxxxxx    x";
 mapa[14] = "x   x         x         x";
 mapa[15] = "x   xxxx      x         x";
 mapa[16] = "x      x  xxxxx   xxx   x";
 mapa[17] = "x         x         x   x";
 mapa[18] = "x         x         x   x";
 mapa[19] = "xxxxxxxxxxx      xxxx   x";
 mapa[20] = "x                x      x";
 mapa[21] = "x                x      x";
 mapa[22] = "x      xxxxxxxxxxxx xxxxx";
 mapa[23] = "x                 x     x ";
 mapa[24] = "x      r          x     x ";
 mapa[25] = "xxxxxxxxxxxxxxxxxxxxxxxxxxx";

 entorno=new Environment();
 entorno.setMap(mapa);
 
 THREE.ImageUtils.crossOrigin = '';
 var textura = THREE.ImageUtils.loadTexture('./metal.jpg');
 var floor=new THREE.Mesh(new THREE.BoxGeometry(40,40,0.2), new THREE.MeshLambertMaterial({map : textura }));

 floor.position.z=-0.5;
 
 
 
 luzPuntual = new THREE.PointLight(0xffcc00);
 luzPuntual.position.x=0;  
 luzPuntual.position.y=10;
 luzPuntual.position.z=30;
 
 camO = new THREE.OrthographicCamera( 40 / -2, 30 / 2, 32/ 2, 30/ - 2, 10, 1000 );
 camO.position.z=50;

 camP = new THREE.PerspectiveCamera( );
 camP.position.z=10;

 
 renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*0.95, window.innerHeight*0.95);
 document.body.appendChild(renderer.domElement);
 entorno.add(camO);
 entorno.add(camP);
 entorno.add(luzPuntual);
 entorno.add(floor);
renderer.shadowMap.enabled=true;
 floor.receiveShadow=true;
 luzPuntual.castShadow=true;


}

function loop(){
 requestAnimationFrame(loop);
 entorno.sense();
 entorno.plan();
 entorno.act();
 camP.position.x=px;
 camP.position.y=py;
 if(keyboard.pressed("P")||keyboard.pressed("p"))
  renderer.render(entorno,camP);
 else  
  renderer.render(entorno,camO);

}

var entorno,luzPuntual,robot,step,angulo,camara,renderer;
var keyboard = new THREEx.KeyboardState();

setup();
loop();

System.exit(1);
