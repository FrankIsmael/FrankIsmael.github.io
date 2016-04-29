function ROBOTtexture(){
 THREE.Object3D.call(this);
 THREE.ImageUtils.crossOrigin = '';
 var textura = new THREE.TextureLoader().load('http://FrankIsmael.github.io/rv/fantasy.jpg');
 
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
 }
 
 ROBOTtexture.prototype=new THREE.Object3D();
 
 function setup(){
  modeloROBOT = new ROBOTtexture();
  luzPuntual = new THREE.PointLight(0xffffff);
  luzPuntual.position.x=0;
  luzPuntual.position.y=10;
  luzPuntual.position.z=30;
  escena = new THREE.Scene();
  escena.add(modeloROBOT);
  escena.add(luzPuntual);
  camara = new THREE.PerspectiveCamera();
  camara.position.z=10;
  renderer = new THREE.WebGLRenderer();
  renderer.setSize (window.innerHeight*0.95, window.innerHeight*0.95);
  document.body.appendChild( renderer.domElement );
}

function loop(){
  requestAnimationFrame( loop );
  renderer.render( escena, camara);
  modeloROBOT.rotation.y+=0.01;
  modeloROBOT.rotation.x+=0.01;
}

var escena,luzPuntual,camara,renderer,controls;

setup();
loop();
