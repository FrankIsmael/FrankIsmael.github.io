function setup(){
cubo1=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),
                new THREE.MeshNormalMaterial());
  cubo2=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),
                new THREE.MeshNormalMaterial());
                
pelota=new THREE.Mesh(new THREE.SphereGeometry(0.5),
                new THREE.MeshNormalMaterial());
                
cubo1.position.x=0.7;
cubo2.position.x=-0.7;

camara=new THREE.PerspectiveCamera();
camara.position.z=20;

// en THREE.js se usa Raycaster()

raycaster1 = new THREE.Raycaster(pelota.position, new THREE.Vector3(1,0,0));
raycaster1 = new THREE.Raycaster(pelota.position, new THREE.Vector3(-1,0,0));

escena = new THREE.Scene();
escena.add(cubo1);
escena.add(cubo2);
escena.add(pelota);
escena.add(camara);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
document.body.appendChild(renderer.domElement);
step=0.01;
}

function loop(){
obstaculo1= raycaster1.intersectObject(cubo1);
obstaculo2= raycaster2.intersectObject(cubo2);

if((obstaculo1.length>0 && (obstaculo[0].distance <= 0.05)) || 
  (obstaculo1.length>0 && (obstaculo[0].distance <= 0.05)))
  step = -step;
  
  pelota.position.x=step;
  raycaster1.set(pelota.position, new THREE.Vector3(1,0,0));
  raycaster2.set(pelota.position, new THREE.Vector3(-1,0,0));

renderer.render(escena,camara);
requestAnimationFrame(loop);
}

step();
loop();


