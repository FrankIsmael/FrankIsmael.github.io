function setup(){
// se plantean las geometrias

var esferaForma= new THREE.SphereGeometry(2.5,32,32,0,6.3,0,1.57);
var cilinfroFormaCuerpo= new THREE.CylinderGeometry(2.5, 2.5, 4.5);
//2, 2, 5, 64, 64, 0, 0, 6.3
var cilinfroFormaAntena= new THREE.CylinderGeometry(0.1,0.1,0.7);
var cilinfroFormaCuello= new THREE.CylinderGeometry(2.3,2.3,0.3,64,64,0,0,6.3);
var cilinfroFormaPie= new THREE.CylinderGeometry(0.5,0.5,1.8);
var cilinfroFormaBrazo= new THREE.CylinderGeometry(0.5,0.5,3.3);
var cilinfroFormaBrazo1= new THREE.CylinderGeometry(0.33,0.33,0.4);

// para generar una forma combinada se requiere de las mallas
//para poder desplazar las formas en el espacio virtual

var esfera1=new THREE.Mesh(esferaForma);
var Cuerpo=new THREE.Mesh(cilinfroFormaCuerpo);
var Antena1 = new THREE.Mesh(cilinfroFormaAntena);
var Antena2 = new THREE.Mesh(cilinfroFormaAntena);
var Cuello = new THREE.Mesh(cilinfroFormaCuello);
var PieI = new THREE.Mesh(cilinfroFormaPie);
var PieD = new THREE.Mesh(cilinfroFormaPie);
var BrazoI = new THREE.Mesh(cilinfroFormaBrazo);
var BrazoD = new THREE.Mesh(cilinfroFormaBrazo);
var brazI = new THREE.Mesh(cilinfroFormaBrazo1);
var brazD = new THREE.Mesh(cilinfroFormaBrazo1);

// Se desplazan las mallas

Cuello.position.y=2.4;
esfera1.position.y=2.4;
Antena1.position.x=-1;
Antena1.position.y=4.75;
Antena2.position.x=1;
Antena2.position.y=4.75;

PieI.position.x=-1;
PieI.position.y=-2.5;
PieD.position.x=1;
PieD.position.y=-2.5;

brazI.rotation.z=90*Math.PI/180;
brazD.rotation.z=90*Math.PI/180;

brazI.position.x=-2.7;
brazI.position.y=1.8;
brazD.position.x=2.7;
brazD.position.y=1.8;

BrazoI.position.x=-3.1;
BrazoI.position.y=0.65;
BrazoD.position.x=3.1;
BrazoD.position.y=0.65;

// se genera una forma geometrica abstracta

var forma = new THREE.Geometry();

// se utiliza el paquete GeometryUtils para conjuntar las formas 
THREE.GeometryUtils.merge(forma,esfera1);
THREE.GeometryUtils.merge(forma,Cuerpo);
THREE.GeometryUtils.merge(forma,Antena1);
THREE.GeometryUtils.merge(forma,Antena2);
THREE.GeometryUtils.merge(forma,Cuello);
THREE.GeometryUtils.merge(forma,PieI);
THREE.GeometryUtils.merge(forma,PieD);
THREE.GeometryUtils.merge(forma,BrazoI);
THREE.GeometryUtils.merge(forma,BrazoD);
THREE.GeometryUtils.merge(forma,brazI);
THREE.GeometryUtils.merge(forma,brazD);

// se genera la malla a partir de la forma
var material= new THREE.MeshLambertMaterial( { color: 0x3fce21} ) ;

//new THREE.MeshPhongMaterial(#3fce21);-->
 malla= new THREE.Mesh(forma, material);

// se inicializa la escena y se agrega la malla 

escena = new THREE.Scene();
escena.add(malla);

// Se inicializa la camara y el renderer 

camara = new THREE.PerspectiveCamera();
camara.position.z=15;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
// Las rotaciones son sobre los ejes que estan fijos en la malla,
// no los ejes del lienzo, inicialmente ambos coinciden

malla.rotation.y+=0.01;

renderer.render(escena,camara);
}

var escena,camara,renderer,malla;

setup();
loop()



















