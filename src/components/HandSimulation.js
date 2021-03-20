import React from 'react';
import Sketch from 'react-p5';

function HandSimulation() {
  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 400).parent(canvasParentRef);
    
  }
  var radius = 40;
  const draw = p5 => {
    p5.background(255, 130, 20);
    p5.ellipse(p5.mouseX, p5.mouseY, radius, radius);
    p5.ellipse(300, 100, 100);
  }
  
  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
}

export default HandSimulation;