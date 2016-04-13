function Wall(size,x,y){
  THREE.BoxGeometry(size,size,size),
  new THREE.MeshNormalMaterial();
  this.size=size;
  this.position.x=x;
  this.position.y=y;
}
  
Wall.prototype=new THREE.Mesh();

Enviroment.prototype.setMap=function(map){
  var _offset=Math.floor(map.length/2);
  
  for (var i=0;i<map.length;i++)
  for (var j=0;j<map.length;j++){
    if(map[i][j]==="x")
    this.add(new Wall(1,j -_offset,-(i-_offset)));
    else if(map[i][j]==="r")
    this.add(new Robot(0.5,j-_offset,-(i-_offset)));
    }
    }
    
function setup(){
  var mapa = new Array();
  mapa[0] ="xxxxxxxxxxxxxxxxxxxxxx";
  mapa[1] ="xr           r       x";
  mapa[2] ="x                    X";
  mapa[3] ="x                    X";
  mapa[4] ="x                    X";
  mapa[5] ="x                    X";
  mapa[6] ="x                    X";
  mapa[7] ="x                    X";
  mapa[8] ="xxxx   xxxxxxxxxxxxxxx";
  mapa[9] ="x                    x";
  mapa[10]="x      r             x";
  mapa[11]="x                    x";
  mapa[12]="xxxxxxxxxxxxxxxx   xxx";
  mapa[13] ="x                    X";
  mapa[14] ="x                    X";
  mapa[15] ="x                    X";
  mapa[16] ="x                    x";
  mapa[17] ="x                    X";
  mapa[18] ="x                    X";
  mapa[19] ="xxxxxxxxx    xxxxxxxxx"; 
  mapa[20] ="x                    X";
  mapa[21] ="x                    X";
  mapa[22] ="x                    X";
  mapa[23] ="x                    X";
  mapa[0]  ="xxxxxxxxxxxxxxxxxxxxxx";

  enviroment = new Enviroment();
  
  enviroment.setMap(mapa);
  
  camera=new THREE.PerspectiveCamera();
  camera.position.z=30;
  
  renderer=new THREE.WebGLRenderer();
  renderer.setSize(window.innerHeight*.95,window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
  
  environment.add(camera);
}

function loop(){
  requestAnimationFrame(loop);
  
  environment.sense();
  environment.plan();}
  environment.act();
  renderer.render(environment,camera);
}
var environment,camera,renderer;
setup();
loop();
