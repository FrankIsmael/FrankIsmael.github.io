function Pierna(){
THREE.Object3D.call(this);
this.pierna=new THREE.Mesh(new THREE.CylinderGeometry(0.5,0.5,1.8),new THREE.MeshNormalMaterial());
//new THREE.MeshLambertMaterial();
this.pierna.position.y=-2.5;
this.add(this.pierna);
}

Pierna.prototype=new THREE.Object3D();

function setup(){
 var material = new THREE.MeshNormalMaterial();
piernaD = new Pierna();
piernaI = new Pierna();
piernaI.position.z=-1;
piernaD.position.z=1;
step=0.01;
// se plantean las geometrias

var esferaForma= new THREE.SphereGeometry(2.5,32,32,0,6.3,0,1.57);
var cilinfroFormaCuerpo= new THREE.CylinderGeometry(2.5, 2.5, 4.5);
//2, 2, 5, 64, 64, 0, 0, 6.3
var cilinfroFormaAntena= new THREE.CylinderGeometry(0.1,0.1,0.7);
var cilinfroFormaCuello= new THREE.CylinderGeometry(2.3,2.3,0.3,64,64,0,0,6.3);
// var cilinfroFormaPie= new THREE.CylinderGeometry(0.5,0.5,1.8);
var cilinfroFormaBrazo= new THREE.CylinderGeometry(0.5,0.5,3.3);
var cilinfroFormaBrazo1= new THREE.CylinderGeometry(0.33,0.33,0.4);

// para generar una forma combinada se requiere de las mallas
//para poder desplazar las formas en el espacio virtual

var esfera1=new THREE.Mesh(esferaForma,material);
var Cuerpo=new THREE.Mesh(cilinfroFormaCuerpo,material);
var Antena1 = new THREE.Mesh(cilinfroFormaAntena,material);
var Antena2 = new THREE.Mesh(cilinfroFormaAntena,material);
var Cuello = new THREE.Mesh(cilinfroFormaCuello,material);
//var PieI = new THREE.Mesh(cilinfroFormaPie);
//var PieD = new THREE.Mesh(cilinfroFormaPie);
var BrazoI = new THREE.Mesh(cilinfroFormaBrazo,material);
var BrazoD = new THREE.Mesh(cilinfroFormaBrazo,material);
var brazI = new THREE.Mesh(cilinfroFormaBrazo1,material);
var brazD = new THREE.Mesh(cilinfroFormaBrazo1,material);

// Se desplazan las mallas

Cuello.position.y=2.4;
esfera1.position.y=2.4;
Antena1.position.z=-1;
Antena1.position.y=4.75;
Antena2.position.z=1;
Antena2.position.y=4.75;

brazI.rotation.x=90*Math.PI/180;
brazD.rotation.x=90*Math.PI/180;

brazI.position.z=-2.7;
brazI.position.y=1.8;
brazD.position.z=2.7;
brazD.position.y=1.8;

BrazoI.position.z=-3.1;
BrazoI.position.y=0.65;
BrazoD.position.z=3.1;
BrazoD.position.y=0.65;

escena=new THREE.Scene();
escena.add(Cuerpo);
escena.add(piernaD);
escena.add(piernaI);
escena.add(esfera1);
escena.add(Antena1);
escena.add(Antena2);
escena.add(Cuello);
escena.add(BrazoI);
escena.add(BrazoD);
escena.add(brazI);
escena.add(brazD);
camara=new THREE.PerspectiveCamera();
camara.position.z=15;

renderer =new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
renderer.render(escena,camara);
if(Math.abs(piernaD.rotation.z)>0.5)
step=-step;

piernaD.rotation.z+=step;
piernaI.rotation.z-=step;
}

var escena,camara,renderer;
var step,piernaD,piernaI;

setup();
loop()
