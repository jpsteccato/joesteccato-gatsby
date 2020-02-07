/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */

export default function sketch(p) {
  p.state = [];
  p.dispatch = () => {};

  p.x = [];
  p.y = [];
  p.segNum = 40;
  p.segLength = 10;

  p.numSprites = 0;

  // let spritesArr = []

  for (let i = 0; i < p.segNum; i++) {
    p.x[i] = 0;
    p.y[i] = 0;
  }

  p.windowResized = () => {
    p.resizeCanvas(600,300);
    p.background(0);
  };

  p.getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  p.getRandomRgb = () => {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }

  p.setup = () => {
    p.createCanvas(600,300);
    p.background(0);
    // p.numSprites = (p.windowWidth/10) + (p.windowHeight/10)
    // for(let i=0; i<300; i++){
    // //       if(c<50){
    // //   c = c * 2;
    // // }
    // // for(let i=0; i<(c); i++){
    //  spritesArr.push(new Sprite());

    // // }
    // }
  };

  p.drawSprite = () => {
    var sizeX = p.windowWidth;
    var sizeY = p.windowHeight;
    var x = p.getRandomInt(sizeX+(sizeX*0.2))-100;   // x
    var y = p.getRandomInt(sizeY+(sizeY*0.2))-100;   // y
    var s = (p.getRandomInt(3)/2)*1.6;               // size
    p.beginShape();
    p.fill(p.getRandomRgb());
    p.vertex(s*20+x,s*0+y);
    p.vertex(s*19+x,s*9+y);
    p.vertex(s*15+x,s*10+y);
    p.vertex(s*19+x,s*11+y);
  
    p.vertex(s*20+x,s*20+y);
    p.vertex(s*21+x,s*11+y);
    p.vertex(s*25+x,s*10+y);
    p.vertex(s*21+x,s*9+y);
    p.endShape();
  }

  p.dragSegment = (i, xin, yin) => {
    const dx = xin - p.x[i];
    const dy = yin - p.y[i];
    const angle = p.atan2(dy, dx);
    p.x[i] = xin - p.cos(angle) * p.segLength;
    p.y[i] = yin - p.sin(angle) * p.segLength;
    p.segment(p.x[i],p.y[i], angle);
  }

  p.segment = (x, y, a) => {
    p.push();
    p.translate(x, y);
    p.rotate(a);
    p.colorMode("blue");
    p.strokeWeight(4);
    p.stroke(p.getRandomRgb());
    p.line(0, 0, p.segLength, 0);
    p.pop();
  }

  p.draw = () => {

    // for(let i=0; i<p.numSprites; i++){
    //   // spritesArr[i].move();
    //   // spritesArr[i].display();
    //   p.drawSprite();

    // }
    p.dragSegment(0, p.mouseX, p.mouseY);
    for (let i = 0; i < p.x.length - 1; i++) {
      p.dragSegment(i + 1, p.x[i], p.y[i]);
    }
  };

  // class Sprite {
  //   constructor() {
  //     this.speed = 20;
  //     this.rgb = p.getRandomRgb();
  //     var sizeX = p.windowWidth;
  //     var sizeY = p.windowHeight;

  //     this.x = p.getRandomInt(sizeX+(sizeX*0.2))-100;   // x
  //     this.y = p.getRandomInt(sizeY+(sizeY*0.2))-100;   // y
  //     this.s = (p.getRandomInt(3)/2)*1.5;               // size
      
  //   }
  //   move() {
  //     this.x += p.random(-this.speed, this.speed);
  //     this.y += p.random(-this.speed, this.speed);
  //   }
  //   display() {
  //     p.beginShape();
  //     p.fill(p.getRandomRgb());
  //     p.vertex(this.s*20+this.x,this.s*0+this.y);
  //     p.vertex(this.s*19+this.x,this.s*9+this.y);
  //     p.vertex(this.s*15+this.x,this.s*10+this.y);
  //     p.vertex(this.s*19+this.x,this.s*11+this.y);
    
  //     p.vertex(this.s*20+this.x,this.s*20+this.y);
  //     p.vertex(this.s*21+this.x,this.s*11+this.y);
  //     p.vertex(this.s*25+this.x,this.s*10+this.y);
  //     p.vertex(this.s*21+this.x,this.s*9+this.y);
  //     p.endShape();
  //   }
  // }
}
