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
