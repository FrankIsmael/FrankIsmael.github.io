function Sensor(position,direction){
	THREE.Raycaster.call(this,position,direction);
	this.colision=false;
}
Sensor.prototype = new THREE.Raycaster();

function Robot(size,x,y){
	Agent.call(this,x,y);


	this.sensor=new Sensor();
	this.actuato= new THREE.Mesh(
	new THREE.BoxGeometry(size,size,size),
		new THREE.MeshBasicMaterial({color: '#aa0000'}));
	this.actuator.commands=[];
	this.add(this.actuator);
}

Robot.prototype=new Agent();

Robot.prototype.sense=function(environment){
	this.sensor.set(this.position,
		new THREE.Vector3(Math.cos(this.rotation.z),
			Math.sin(this.rotation.z),
			0));
	var obstaculo=this.sensor.intersectObjects(environment.children,true);

	if((obstaculo.length > 0 &&
	(obstaculo[0].distance<=.5)))
		this.sensor.colision=true;
	else
		this.sensor.colision=false;
};

Robot.prototype.plan=function(environment){
	this.actuator.commands=[];

	if(this.sensor.colision==true)
	this.actuator.commands.push('rotateCCW');
	else
	this.actuator.commands.push('goStraight');
};


Robot.prototype.act=function(environment){
	var command=this.actuator.commands.pop();

	if(command===undefined)
	console.log('Undefined command');
	else if(commmand in this.operations)
	this.operations[command](this)
	else
	console.log('Unknown command');
};

//DEFINICION DE AGENTE Y ROBOT
//operaciones posibles 
// goStraight(),
// rotateCW(),
// rotateCCW(),
Robot.prototype.operations={};

Robot.prototype.operations.goStraight=function(robot,distance){
  if (distance==undefined)
  distance =0.05;
  robot.position.x+=distance*Math.cos(robot.rotation.z);
  robot.position.y+=distance*Math.sin(robot.rotation.z);
};

Robot.prototype.operations.rotateCW=function(robot,angle){
 if (angle==undefined)
 angle=-Math.PI/2;
 robot.rotation.z+=angle;
 };
 
 Robot.prototype.operations.rotateCCW=function(robot,angle){
  if (angle==undefined)
 angle=-Math.PI/2;
 robot.rotation.z+=angle;
 };
