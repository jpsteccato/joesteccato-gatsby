/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */

export default function sketch(p) {
	p.state = [];
	p.dispatch = () => {};

	p.x = [];
	p.y = [];
	p.segNum = 50;
	p.segLength = 10;

	p.pressed = false;

	p.mouseClicked = (event) => {
		if(event.target.id === "p5-pen-clear") p.clear()
		if(event.target.id === "p5-pen-save") p.saveCanvas('painting','png')
	}

	p.mousePressed = (event) => {
		if(event.target.className === "p5Canvas") p.pressed = true
	}

	p.mouseReleased = () => {
	  	p.pressed = false
	}

	p.touchMoved = (event) => {
		event.preventDefault();
	}

	p.touchStarted = (event) => {
		if(event.target.className === "p5Canvas") p.pressed = true
	}

	p.touchEnded = (event) => {
		p.pressed = false
	}

	for (let i = 0; i < p.segNum; i++) {
	  p.x[i] = p.mouseX;
	  p.y[i] = p.mouseY;
	}

	p.setDimensions = () => {
		p.thisHeight = (p.windowHeight * 0.45)
		p.thisWidth = (p.windowWidth * 0.75)
		if(p.thisWidth > 800){
			p.thisWidth = 800
		}
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
		p.setDimensions();
	  p.resizeCanvas(p.thisWidth,p.thisHeight);
	  p.background(0);
	};

	p.setup = () => {
		p.setDimensions();
	  p.createCanvas(p.thisWidth,p.thisHeight);
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

	  if(p.pressed){
	    p.dragSegment(0, p.mouseX, p.mouseY);
	    for (let i = 0; i < p.x.length - 1; i++) {
	      p.dragSegment(i + 1, p.x[i], p.y[i]);
	    }
	  }
	  
	};
}