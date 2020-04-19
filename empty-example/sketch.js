let shipe;
let astroides = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  shipe = new Ship();
  for (var i = 0; i < 10; i++) {
     astroides.push(new Asteroid);
}
}

function draw() {
  background(0);
  shipe.render();
  shipe.turn();
  shipe.update();
  shipe.edges();


  for (var i = 0; i < astroides.length; i++) {
    astroides[i].render();
  }
}

function keyReleased(){
  shipe.setRotation(0);

}


function keyPressed(){
  if(keyCode == RIGHT_ARROW){
    shipe.setRotation(0.1);
  }else if (keyCode == LEFT_ARROW) {
    shipe.setRotation(-0.1);
  }else if (keyCode == UP_ARROW) {
    shipe.boosting(true);
  }
}

function Ship(){
  this.pos = createVector(width/2, height/2);
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.vel = createVector(0, 0);
  this.isBoosting = false;

  this.boosting = function(b){
    this.isBoosting = b;
  }


  this.update = function() {
    if (this.isBoosting) {
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.95);
  }

  this.boost = function(){
    var force = p5.Vector.fromAngle(this.heading);
    force.mult(0.1);
    this.vel.add(force);
  }

  this.render = function(){
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading);
    //noFill();
    //stroke(255);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop();
  }

  this.edges = function(){
    if(this.pos.x > width + this.r){
      this.pos.x = -this.r;
    }else if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if(this.pos.y > height + this.r){
      this.pos.y = -this.r;
    }else if (this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  this.setRotation = function(a){
    this.rotation = a;
  }

  this.turn = function(){
    this.heading += this.rotation;
  }
}


// // Existing code unchanged.
// window.onload = function() {
//   var context = new AudioContext();
//   // Setup all nodes
// }
//
// // One-liner to resume playback when user interacted with the page.
// document.querySelector('button').addEventListener('click', function() {
//   context.resume().then(() => {
//     console.log('Playback resumed successfully');
//   });
// });
// document.querySelector('button').addEventListener('click', function() {
//   var context = new AudioContext();
//   // Setup all nodes
//
// });
