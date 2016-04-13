function Wall(size,x,y){
  THREE.BoxGeometry(size,size,size),
    new THREE.MeshNormalMaterial());
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
  mapa[0]="xxxxxxxxxxxxxxxxxxxxxx";
  mapa[1]="xr           r       x";
  mapa[2]="x                    X";
  mapa[2]="x                    X";
  mapa[2]="x                    X";
  
