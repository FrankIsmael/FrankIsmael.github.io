function Nave(){
/***********************************************EMPIEZA EL DISEÑO DE LA NAVE***********************************************/

    var geometry = new THREE.Geometry();
    geometry.vertices.push(

        // CABINA:
        new THREE.Vector3(  1,   1,   1 ),	//0
        new THREE.Vector3( -1,   1,   1 ),	//1
        new THREE.Vector3( -1,  -1,   2 ),	//2
        new THREE.Vector3(  1,  -1,   2 ),	//3
        new THREE.Vector3(  1,   1,  -1 ),	//4
        new THREE.Vector3( -1,   1,  -1 ),	//5
        new THREE.Vector3( -1,  -1,   0 ),	//6
        new THREE.Vector3(  1,  -1,   0 ),	//7

        // CUERPO:
        new THREE.Vector3(  0,  -3,  15 ),	//8
        new THREE.Vector3(  3,  -3,   3 ),	//9
        new THREE.Vector3(  0,  -5,   3 ),	//10
        new THREE.Vector3(  0,  -5,  -1 ),	//11
        new THREE.Vector3(  3,  -3,  -1 ),	//12
        new THREE.Vector3( -3,  -3,   3 ),	//13
        new THREE.Vector3( -3,  -3,  -1 ),	//14

        // ALA IZQIERDA:
        new THREE.Vector3( 10,  -3,  -1 ),	//15
        new THREE.Vector3(  9,  -3,   2 ),	//16
        new THREE.Vector3( 11,  -3,   1 ),	//17
        new THREE.Vector3( 10,  -4,  -1 ),	//18
        new THREE.Vector3( 14,  -3,  -2 ),	//19

        //ALA DERECHA:
        new THREE.Vector3( -10,  -3,  -1 ),	//20
        new THREE.Vector3(  -9,  -3,   2 ),	//21
        new THREE.Vector3( -11,  -3,   1 ),	//22
        new THREE.Vector3( -10,  -4,  -1 ),	//23
        new THREE.Vector3( -14,  -3,  -2 )	//24
    );

    //CABINA:
    geometry.faces.push( new THREE.Face3( 0,1,2) );
    geometry.faces.push( new THREE.Face3( 2,3,0) );
    geometry.faces.push( new THREE.Face3( 4,0,3) );
    geometry.faces.push( new THREE.Face3( 3,7,4) );
    geometry.faces.push( new THREE.Face3( 1,5,6) );
    geometry.faces.push( new THREE.Face3( 6,2,1) );
    geometry.faces.push( new THREE.Face3( 5,4,7) );
    geometry.faces.push( new THREE.Face3( 7,6,5) );
    geometry.faces.push( new THREE.Face3( 4,5,1) );
    geometry.faces.push( new THREE.Face3( 1,0,4) );

    //CUERPO:    
    geometry.faces.push( new THREE.Face3( 7,6,2) );
    geometry.faces.push( new THREE.Face3( 2,3,7) );
    geometry.faces.push( new THREE.Face3( 3,2,8) );
    geometry.faces.push( new THREE.Face3( 9,3,8) );
    geometry.faces.push( new THREE.Face3( 10,9,8) );
    geometry.faces.push( new THREE.Face3( 7,3,9) );
    geometry.faces.push( new THREE.Face3( 9,12,7) );
    geometry.faces.push( new THREE.Face3( 12,9,10) );
    geometry.faces.push( new THREE.Face3( 10,11,12) );
    geometry.faces.push( new THREE.Face3( 7,12,11) );
    geometry.faces.push( new THREE.Face3( 6,7,11) );
    geometry.faces.push( new THREE.Face3( 14,6,11) );
    geometry.faces.push( new THREE.Face3( 2,6,14) );
    geometry.faces.push( new THREE.Face3( 14,13,2) );
    geometry.faces.push( new THREE.Face3( 2,13,8) );
    geometry.faces.push( new THREE.Face3( 13,10,8) );
    geometry.faces.push( new THREE.Face3( 13,14,11) );
    geometry.faces.push( new THREE.Face3( 11,10,13) );

    //ALA IZQUIERDA
    geometry.faces.push( new THREE.Face3( 12,9,16) );
    geometry.faces.push( new THREE.Face3( 16,15,12) );
    geometry.faces.push( new THREE.Face3( 16,17,15) );
    geometry.faces.push( new THREE.Face3( 15,17,19) );
    geometry.faces.push( new THREE.Face3( 18,16,9) );
    geometry.faces.push( new THREE.Face3( 18,17,16) );
    geometry.faces.push( new THREE.Face3( 18,19,17) );
    geometry.faces.push( new THREE.Face3( 18,15,19) );
    geometry.faces.push( new THREE.Face3( 18,9,12) );
    geometry.faces.push( new THREE.Face3( 18,12,15) );


    //ALA DERECHA
    geometry.faces.push( new THREE.Face3( 20,21,13) );
    geometry.faces.push( new THREE.Face3( 13,14,20) );
    geometry.faces.push( new THREE.Face3( 20,24,22) );
    geometry.faces.push( new THREE.Face3( 20,22,21) );
    geometry.faces.push( new THREE.Face3( 23,14,13) );
    geometry.faces.push( new THREE.Face3( 23,13,21) );
    geometry.faces.push( new THREE.Face3( 23,20,14) );
    geometry.faces.push( new THREE.Face3( 22,23,21) );
    geometry.faces.push( new THREE.Face3( 23,22,24) );
    geometry.faces.push( new THREE.Face3( 23,24,20) );


    geometry.computeLineDistances();
		  
    var material = new THREE.MeshBasicMaterial({map: THREE.ImageUtils.loadTexture('mat1.jpg')});

        var glass =[
            new THREE.Vector2(0.0,0.5),
            new THREE.Vector2(0.5,0.5),
            new THREE.Vector2(0.0,1.0),
            new THREE.Vector2(0.5,1.0)
        ]

        var ship =[
            new THREE.Vector2(0.0,0.0),
            new THREE.Vector2(0.5,0.0),
            new THREE.Vector2(0.0,0.5),
            new THREE.Vector2(0.5,0.5)
        ]

        var metal =[
            new THREE.Vector2(0.5,0.5),
            new THREE.Vector2(1.0,0.5),
            new THREE.Vector2(0.5,1.0),
            new THREE.Vector2(1.0,1.0)
        ]

        geometry.faceVertexUvs[0][0]=[glass[0],glass[1],glass[2]];
        geometry.faceVertexUvs[0][1]=[glass[0],glass[1],glass[2]];
        geometry.faceVertexUvs[0][2]=[glass[0],glass[1],glass[2]];
        geometry.faceVertexUvs[0][3]=[glass[0],glass[1],glass[2]];
        geometry.faceVertexUvs[0][4]=[glass[0],glass[1],glass[2]];
        geometry.faceVertexUvs[0][5]=[glass[0],glass[1],glass[2]];

        for(var i=6; i<(geometry.faces.length-20); i++){
            geometry.faceVertexUvs[0][i]=[ship[0],ship[1],ship[2]];
        }

        var secuencia=[2,0,1,1,3,2,3,0,1,2,0,1,1,3,2,0,3,2,0,3,1,0,1,3,1,0,2,1,0,3];

        for(var q=2; q>0; q-- ){
            for(var p=0; p<10; p++){
                geometry.faceVertexUvs[0][(geometry.faces.length-(q*10-p))]=[metal[secuencia[p*3]],metal[secuencia[p*3+1]],metal[secuencia[p*3+2]]];
            }
        }
		this.__proto__=new THREE.Mesh(geometry, material);
/***********************************************TERMINA EL DISEÑO DE LA NAVE***********************************************/

/***********************************************EMPIEZA COMPORTAMIENTO DE AGENTE NAVE***********************************************/
                                   
  this.rotation.x = 1.5;
  this.rotation.y = Math.PI;
	this.position.y = -70;
	var _step = 3;
	var _colision = 0;
	var _raycaster = new THREE.Raycaster(this.position,new THREE.Vector3(1,0,0));

	this.setStep = function(step){_step=step;};
	this.getStep = function(){return _step;};

	this.sensar = function(escena){
  	_raycaster.set(this.position,new THREE.Vector3(0,1,0));
  	var obstaculo1 = _raycaster.intersectObjects(escena.children);
  
  	_raycaster.set(new THREE.Vector3(this.position.x,this.position.y,0),new THREE.Vector3(-1,0,0));
  	var obstaculo2 = _raycaster.intersectObjects(escena.children);
  	
  	_raycaster.set(new THREE.Vector3(this.position.x,this.position.y,0),new THREE.Vector3(1,0,0));
  	var obstaculo3 = _raycaster.intersectObjects(escena.children);
  	
  	if((obstaculo1.length>0 && (obstaculo1[0].distance <= 14)) ||
  	   (obstaculo2.length>0 && (obstaculo2[0].distance <= 14)) ||
  	   (obstaculo3.length>0 && (obstaculo3[0].distance <= 14)))
  	_colision = 1;
  	else
  	_colision = 0;
	};

	this.evaluar=function(escena){
	  if(_colision === 1 && activarEscudo === 0){
	    escena.add(Explota);
	    escena.remove(this);
	  }
	 	naveX = this.position.x;
  	naveY = this.position.y;
    
  	if(avanceNaveI === 1){
  	  if(this.position.x < -140)
  	  this.position.x = this.position.x;
  	  else
  	    this.position.x -= _step;
  	}
  	if(avanceNaveD === 1){
  	  if(this.position.x > 140)
  	  this.position.x = this.position.x;
  	  else
  	    this.position.x += _step;
  	}
  	if(Bala === 1 && banderaDisparo === 1){
  	  escena.add(new Disparo(this.position.x, this.position.y+15));
  	  banderaDisparo = 0;
  	}
  	if(activarEscudo === 1){
  	  if(contadorEscudo<tiempoEscudo)
  	    escena.add(Barrera);
  	  else{
  	    activarEscudo = 0;
  	    escena.remove(Barrera);
  	  }
    }
	};
	
}

function AlgoritmoMeteoritos(cantidad){
  var newContador;
	for(newContador = 0; newContador<cantidad; newContador++){
	 escena.add(new Meteorito(Math.round(Math.random()*(aleatRadioMax-aleatRadioMin)+parseInt(aleatRadioMin)),
	                          Math.round(Math.random()*(aleatNaveXSup-aleatNaveXInf)+parseInt(aleatNaveXInf)),
	                          70));
	}
}

function Meteorito(radio, posicionX, posicionY){
  var materialMeteorito = new THREE.MeshBasicMaterial({map: new THREE.ImageUtils.loadTexture('meteorito.jpg')});
	this.__proto__ = new THREE.Mesh(new THREE.SphereGeometry(radio,50,50), materialMeteorito);
	var _radio = radio;
	var _colision = 0;
	var _step = 0.4;
	var _raycaster = new THREE.Raycaster(this.position,new THREE.Vector3(1,0,0));
	
	this.position.x = posicionX;
	this.position.y = posicionY;
	this.position.z = 0;
	
	this.setRadio = function(radio){_radio=radio;};
	this.getRadio = function(){return _radio;};
	
  var pendientes = [-1, -0.5,-0.1, -0.05, 0, .05, 0.1, 0.5, 1];
  var _pendienteActual = pendientes[Math.round(Math.random()*(8-0)+parseInt(0))];
  
  this.sensar = function(escena){
    _raycaster.set(this.position,new THREE.Vector3(0,-1,0));
  	var obstaculo4 = _raycaster.intersectObjects(escena.children);
  
  	_raycaster.set(new THREE.Vector3(this.position.x,this.position.y,0),new THREE.Vector3(-1,0,0));
  	var obstaculo5 = _raycaster.intersectObjects(escena.children);
  	
  	_raycaster.set(new THREE.Vector3(this.position.x,this.position.y,0),new THREE.Vector3(1,0,0));
  	var obstaculo6 = _raycaster.intersectObjects(escena.children);
  	
  	if((obstaculo4.length>0 && (obstaculo4[0].distance <= _radio)) ||
  	   (obstaculo5.length>0 && (obstaculo5[0].distance <= _radio)) ||
  	   (obstaculo6.length>0 && (obstaculo6[0].distance <= _radio)))
  	_colision = 1;
  	else
  	_colision = 0;
  }
  
  this.evaluar = function(escena){
    if(_colision === 1)
      escena.remove(this);
      
    if(this.position.y-_radio < -70 )
      escena.remove(this);
    else
      this.position.y -= _step;
      
    if((this.position.x+_radio > 140) || (this.position.x-_radio < -140))
      //escena.remove(this);
    //else
      this.position.x += _pendienteActual;
  }
}

function Disparo(posicionX, posicionY){
  var materialBala = new THREE.MeshBasicMaterial({map: new THREE.ImageUtils.loadTexture('bala.jpg')})
  this.__proto__ = new THREE.Mesh(new THREE.SphereGeometry(0.6, 20, 20), materialBala);

  var _step = 0.3;
  this.position.x = posicionX;
  this.position.y = posicionY;
  var _raycaster = new THREE.Raycaster(this.position,new THREE.Vector3(1,0,0));
  var _colision = 0;
  
  this.sensar = function(escena){
    _raycaster.set(this.position,new THREE.Vector3(0,1,0));
  	var obstaculo4 = _raycaster.intersectObjects(escena.children);
  
  	_raycaster.set(new THREE.Vector3(this.position.x,this.position.y,0),new THREE.Vector3(-1,0,0));
  	var obstaculo5 = _raycaster.intersectObjects(escena.children);
  	
  	_raycaster.set(new THREE.Vector3(this.position.x,this.position.y,0),new THREE.Vector3(1,0,0));
  	var obstaculo6 = _raycaster.intersectObjects(escena.children);
  	
  	if((obstaculo4.length>0 && (obstaculo4[0].distance <= 0.6)) ||
  	   (obstaculo5.length>0 && (obstaculo5[0].distance <= 0.6)) ||
  	   (obstaculo6.length>0 && (obstaculo6[0].distance <= 0.6)))
  	_colision = 1;
  	else
  	_colision = 0;
  }
  
  this.evaluar = function(escena){
    if(_colision === 1 || this.position.y>70)
      escena.remove(this);
    this.position.y += _step;
  };
}

function Escudo(posicionX, posicionY){
  this.__proto__ = new THREE.Mesh(new THREE.SphereGeometry(16,50,50), new THREE.MeshNormalMaterial({transparent: true, opacity: 0.4}));
  this.position.x = posicionX;
  this.position.y = posicionY;
  
  this.evaluar = function(escena){
    this.position.x = naveX;
    this.position.y = naveY;
  };
}


function Explosion(posicionX, posicionY){
  materialExplosion = new THREE.MeshBasicMaterial({map: new THREE.ImageUtils.loadTexture('explosion.jpg')});
  this.__proto__ = new THREE.Mesh(new THREE.SphereGeometry(16,60,60), materialExplosion);
  this.position.x = posicionX;
  this.position.y = posicionY;
  
  this.evaluar = function(escena){
    this.position.x = naveX;
    this.position.y = naveY;
  };
}

function sensar(escena){
	for(var i = 0;i<escena.children.length;i++){
		if(escena.children[i].sensar !== undefined)
			escena.children[i].sensar(escena);
	}
}

function evaluar(escena){
	for(var i = 0;i<escena.children.length;i++){
		if(escena.children[i].evaluar !== undefined)
			escena.children[i].evaluar(escena);
	}
}

function teclado(event) {
  event = event || window.event;
  var keyCode = [event.keyCode];
  if (keyCode == '37')
    avanceNaveI = 1;
  if (keyCode == '39') 
    avanceNaveD = 1;
  if (keyCode == '32') 
    Bala = 1;
  if (keyCode == '83') 
    activarEscudo = 1;
} 

function tecladoDetener(event) {
  event = event || window.event;
  var keyCode = event.keyCode;
  if (keyCode == '37') 
    avanceNaveI = 0;
  if (keyCode == '39') 
    avanceNaveD = 0;
  if (keyCode == '32') 
    Bala = 0;
  if (keyCode == '83') 
    activarEscudo = 1;
}

function setup(){
	escena = new THREE.Scene();
	var aspect = ancho/alto;
	camara = new THREE.PerspectiveCamera(75,aspect,0.1,1000);

  document.addEventListener("keydown",teclado, false);
  document.addEventListener("keyup", tecladoDetener, false);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(ancho,alto);
	document.body.appendChild(renderer.domElement);
  
	escena.add(new Nave());
	Barrera = new Escudo(naveX,naveY);
	Explota = new Explosion(naveX,naveY);
}

function loop(){
  contador += 1;
  contadorDisparo += 1;
  if(contadorDisparo === intervaloDisparo){
    contadorDisparo = 0;
    banderaDisparo = 1;
  }
  if(contador === 100){
    contador = 0;
    numeroMeteoros = Math.round(Math.random()*(numeroMaximoMeteoros-numeroMinimoMeteoros)+parseInt(numeroMinimoMeteoros));
	  AlgoritmoMeteoritos(numeroMeteoros);
  }
  if(activarEscudo === 1){
    contadorEscudo += 1;
    if(contadorEscudo === tiempoEscudo+1)
      contadorEscudo = 0;
  }
	requestAnimationFrame(loop);
	sensar(escena);
	evaluar(escena);
	renderer.render(escena,camara);
}

var contador = 0, contadorEscudo = 0, tiempoEscudo = 500, activarEscudo = 0, intervaloDisparo = 20, contadorDisparo = 0, banderaDisparo = 1;  
var escena, camara, renderer;
var ancho = 960, alto = 540;
var avanceNaveI = 0, avanceNaveD = 0, Bala = 0;
//var aleatNaveXInf = -156, aleatNaveXSup = 156;
var aleatNaveXInf = -100, aleatNaveXSup = 100;
var aleatRadioMin = 1, aleatRadioMax = 7;
var numeroMaximoMeteoros = 4; // Por cada iteración
var numeroMinimoMeteoros = 1; // Por cada iteración
var numeroMeteoros = Math.round(Math.random()*(numeroMaximoMeteoros-numeroMinimoMeteoros)+parseInt(numeroMinimoMeteoros));
var naveX = 0, naveY = 0;

setup();
camara.position.z = 100;
loop();