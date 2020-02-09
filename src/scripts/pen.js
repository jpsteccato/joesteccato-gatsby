/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */

export default function sketch(p) {
	p.state = [];
	p.dispatch = () => {};

	p.x = [];
	p.y = [];
	p.segNum = 50;
	p.segLength = 10;

	p.numSprites = 0;

	p.pressed = false;

	// p.mouseClicked = () => {
	//   p.pressed = !p.pressed
	//   if(p.pressed) p.background(0);
	// }

	// p.mousePressed = () => {
	//   p.pressed = true
	// }

	// p.mouseReleased = () => {
	//   p.pressed = false
	// }

	for (let i = 0; i < p.segNum; i++) {
	  p.x[i] = p.mouseX;
	  p.y[i] = p.mouseY;
	}

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

	p.windowResized = () => {
	  p.resizeCanvas(720,420);
	  p.background(0);
	};

	p.setup = () => {
	  p.createCanvas(720,420);
	  p.background(0);
	};

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

	  if(p.mouseIsPressed){
	    p.dragSegment(0, p.mouseX, p.mouseY);
	    for (let i = 0; i < p.x.length - 1; i++) {
	      p.dragSegment(i + 1, p.x[i], p.y[i]);
	    }
	  }
	  
	};
}