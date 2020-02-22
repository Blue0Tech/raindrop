const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rain;
var l,i,c;
var interval, time, droplimit;
function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;
  rain = [];
  i = 0;
  c = 0;
  droplimit = 150; //to prevent game slowing down
  l = rain.length;
  interval = 1; //can be tweaked to change rain spawn rate
  time = 0;
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  l = rain.length;
  while(i<l) {
    rain[i].display();
    i++;
  }
  if(i>=l) {
    i = 0;
  }
  if(time>=interval) {
    time = 0;
    console.log("time");
    rain.push(new Raindrop(random()*600,random()*600,random()*20));
  }
  if(c>=droplimit) {
    rain.shift();
  }
  time++;
  c++;
}