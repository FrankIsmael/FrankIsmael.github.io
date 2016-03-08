function setup(){
// se plantean las geometrias

var esferaForma= new THREE.SphereGeometry(2,32,32,0,3.15,0,3.15);
var cilinfroFormaCuerpo= new THREE.CylinderGeomeyry(2,2,5);
var cilinfroFormaAntena= new THREE.CylinderGeomeyry(0.3,0.3,0.5);
var cilinfroFormaCuello= new THREE.CylinderGeomeyry(1.8,1.8,1);
var cilinfroFormaPie= new THREE.CylinderGeomeyry(0.2,0.2,2);
var cilinfroFormaBrazo= new THREE.CylinderGeomeyry(0.2,0.2,2.5);
var cilinfroFormaBrazo1= new THREE.CylinderGeomeyry(0.1,0.1,0.5);

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

Cuello.position.y=2.5;
esfera1.position.y=3.5;
Antena1.position.x=-1;
Antena1.position.y=5.5;
Antena2.position.x=1;
Antena2.position.y=5.5;

PieI.position.x=-1;
PieI.position.y=-2.5;
PieD.position.x=1;
PieD.position.y=-2.5;

brazI.rotation.z=90*Math.PI/180;
brazD.rotation.z=90*Math.PI/180;

brazI.position.x=-2;
brazI.position.y=2.3;
brazD.position.x=2;
brazD.position.y=2.3;

BrazoI.position.x=-2.5;
BrazoI.position.y=2.3;
BrazoD.position.x=2.5;
BrazoD.position.y=2.3;

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

malla=new THREE.Mesh(forma);

// se inicializa la escena y se agrega la malla 

escena = new THREE.Scene();
escena.add(malla);

// Se inicializa la camara y el renderer 

camara = new THREE.PerspectiveCamera();
camara.position.z=10;

renderer=new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95, window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
}

function loop(){
requestAnimationFrame(loop);
// Las rotaciones son sobre los ejes que estan fijos en la malla,
// no los ejes del lienzo, inicialmente ambos coinciden

malla.rotation.y+=o.01;

renderer.render(escena,camara);
}

var escena,camara,renderer,malla;

setup();
loop()



















