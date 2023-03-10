let colors = ['#E2A9F5', '#B0B5FF', '#ADE0E9', '#B0FFC9', '#ECF7B5', "##FFACBA", "#FFC6A3", "#FFE59D"];

function setup() {
  createCanvas(960, 960);
  frameRate(4);
  smooth();
  blendMode(BLEND);
}

function draw() {
  noStroke();
  blendMode(BLEND);
  if (frameCount === 1){
    capturer.start();
  }
  background(60);

  fill(colors[Math.floor(Math.random()*colors.length)]);
  quad(random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960));

  fill(colors[Math.floor(Math.random()*colors.length)]);
  ellipse(random(0,960), random(0,960), random(500,960), random(0,500));

  fill(colors[Math.floor(Math.random()*colors.length)]);
  quad(random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960));

  fill(colors[Math.floor(Math.random()*colors.length)]);
  quad(random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960));

  fill(colors[Math.floor(Math.random()*colors.length)]);
  quad(random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960));

  fill(colors[Math.floor(Math.random()*colors.length)]);
  quad(random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960), random(0,960));

  if (frameCount < 65) {
    capturer.capture(canvas);
  } else if (frameCount === 65) {
    capturer.save();
    capturer.stop();
  }
}
