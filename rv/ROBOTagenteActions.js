function Sensor(position,direction){
 THREE.Raycaster.call(this,position,direction);
 this.colision=false;
}
Sensor.prototype=new THREE.Raycaster();


function RBA(x=0, y=0){
 Agent.call(this,x,y);
 THREE.ImageUtils.crossOrigin = '';
var textura = new THREE.TextureLoader().load('http://FrankIsmael.github.io/rv/linesws.png');

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

 this.brazI.rotation.z=90*Math.PI/180;
 this.brazD.rotation.z=90*Math.PI/180;
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

 this.sensor=new Sensor();
 this.actuator=new Array();
 

 this.esfera.scale.set(.2,.2,.2);
 this.Cuerpo.scale.set(.2,.2,.2);
 this.Antena1.scale.set(.2,.2,.2);
 this.Antena2.scale.set(.2,.2,.2);
 this.Cuello.scale.set(.2,.2,.2);
 this.PieI.scale.set(.2,.2,.2);
 this.PieD.scale.set(.2,.2,.2);
 this.BrazoI.scale.set(.2,.2,.2);
 this.BrazoD.scale.set(.2,.2,.2);
 this.brazI.scale.set(.2,.2,.2);
 this.brazD.scale.set(.2,.2,.2);
}
RBA.prototype=new Agent();

function Wall(size,x=0,y=0){
 THREE.Mesh.call(this,new THREE.BoxGeometry(size,size,size), new THREE.MeshPhongMaterial({color:0x96a3aa})); 
 this.size=size;
 this.position.x=x;
 this.position.y=y;
}
Wall.prototype=new THREE.Mesh();

Environment.prototype.setMap=function(map){
 var offset=Math.floor(map.length/2);
 for(var i=0;i<map.length;i++){
  for(var j=0;j<map.length;j++){
   if(map[i][j]==="x")
    this.add(new Wall(1, j-offset,-(i-offset)));
   else if(map[i][j]==="r")
    this.add(new RBA(j-offset,-(i-offset)));
  }
 }
}	

RBA.prototype.sense=function(environment){
 this.sensor.set(this.position, new THREE.Vector3(Math.cos(this.rotation.z),Math.sin(this.rotation.z),0));
 //this.sensor2.set(this.position, new THREE.Vector3(Math.sin(this.rotation.z),Math.cos(this.rotation.z),0));
 var obstaculo = this.sensor.intersectObjects(environment.children,true);
 //var obstaculo2 = this.sensor2.intersectObjects(environment.children,true);
 if ((obstaculo.length>0&&(obstaculo[0].distance<=1)))
  this.sensor.colision=true;
 else
  this.sensor.colision=false;
 /*if((obstaculo2.length>0&&(obstaculo2[0].distance<=1)))
  this.sensor2.colision=true;
 else
  this.sensor2.colision=false;*/
}

RBA.prototype.plan = function(environment){
 this.actuator.commands=[];
 /*if(this.sensor.colision==false && this.sensor2.colision==true)
  this.actuator.commands.push('Derecho');
 else if(this.sensor.colision==true && this.sensor2.colision==true)
   this.actuator.commands.push('RotarDerecha');
 else
   this.actuator.commands.push('RotarIzquierda');*/
  if(this.sensor.colision==true)
   this.actuator.commands.push('RotarIzquierda');
  else
   this.actuator.commands.push('Derecho');
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

RBA.prototype.operations.Derecho = function(robot,step){
 if(step==undefined)
  step=0.1;
 robot.position.x+=step*Math.cos(robot.rotation.z);
 robot.position.y+=step*Math.sin(robot.rotation.z);
 robot.Cuerpo.rotation.z-=0.5;
};

RBA.prototype.operations.RotarDerecha = function(robot,angulo){
 if(angulo==undefined){
  angulo=-Math.PI/2;
 }
 robot.rotation.z+=angulo;
};

RBA.prototype.operations.RotarIzquierda = function(robot,angulo){
 if(angulo==undefined){
  angulo=Math.PI/2;
 }
 robot.rotation.z+=angulo;
};
 
function setup(){
 var mapa = new Array();
  mapa[0] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx";
  mapa[1] = "x   r                      x";
  mapa[2] = "x                          x";
  mapa[3] = "x                          x";
  mapa[4] = "x                          x";
  mapa[5] = "x                          x";
  mapa[6] = "x                          x";
  mapa[7] = "x                          x";
  mapa[8] = "x                          x";
  mapa[9] = "x                          x";
 mapa[10] = "x                          x";
 mapa[11] = "x                          x";
 mapa[12] = "x                          x";
 mapa[13] = "xXXXXXXXXXXXX    XXXXXXXXXXx";
 mapa[14] = "x                          x";
 mapa[15] = "x                          x";
 mapa[16] = "x                          x";
 mapa[17] = "x                          x";
 mapa[18] = "x                          x";
 mapa[19] = "x                         x";
 mapa[20] = "x                          x";
 mapa[21] = "x                          x";
 mapa[22] = "x                          x";
 mapa[23] = "x                          x";
 mapa[24] = "x                          x";
 mapa[25] = "x                          x";
 mapa[26] = "x                          x";
 mapa[27] = "x                          x";
 mapa[28] = "x r                        x";
 mapa[29] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx";

 entorno=new Environment();
 entorno.setMap(mapa);
 luzPuntual = new THREE.PointLight(0xffffff);
 luzPuntual.position.x=0;  
 luzPuntual.position.y=10;
 luzPuntual.position.z=30;
 camara=new THREE.PerspectiveCamera();
 camara.position.z=50;
 renderer = new THREE.WebGLRenderer();
 renderer.setSize(window.innerHeight*0.95, window.innerHeight*0.95);
 document.body.appendChild(renderer.domElement);
 entorno.add(camara);
 entorno.add(luzPuntual);
}

function loop(){
 requestAnimationFrame(loop);
 entorno.sense();
 entorno.plan();
 entorno.act();
 renderer.render(entorno,camara);
}

var entorno,luzPuntual,robot,step,angulo,camara,renderer;

setup();
loop();
