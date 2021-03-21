import React from 'react';
import Sketch from 'react-p5';
import Hands from '../data/Kung_Fu_Hand_v1_L1/15803_Kung_Fu_Hand_v1.obj'
import VerticalCsv from '../data/vertical/vertical_roll_pitch.csv'
import TraverseCsv from '../data/traverse/traverse_roll_pitch.csv'
import OverhangCsv from '../data/overhang/overhang_roll_pitch.csv'

function HandSimulation(props) {

  var hand;

  const preload = p5 => {
    console.log('preload')
    hand = p5.loadModel(Hands, true);
  }

  const setup = (p5, canvasParentRef) => {
    console.log('set up')
    p5.createCanvas(500, 200, p5.WEBGL).parent(canvasParentRef);
    p5.angleMode(p5.DEGREES);
    
  }

  const draw = p5 => {


    p5.background(250);

    p5.push();
    p5.normalMaterial();
    p5.translate(-150,0,0)
    // convention xyz rotation from aerospace
    p5.scale(0.8);
    // AP axis
    p5.rotateX(props.rotation[0] - 90);
    // UR axis
    p5.rotateY(props.rotation[1] );

    p5.torus(70, 20);
    p5.pop();

    p5.push()
    p5.normalMaterial();

    p5.translate(150,0,0)
    p5.scale(0.8);
    // AP axis
    p5.rotateX(props.rotation[2] - 90);
    // UR axis
    p5.rotateY(props.rotation[3] );

    p5.torus(70, 20);
    p5.pop();

    

  }
  
  return (
    <>
      <Sketch setup={setup} draw={draw} preload={preload} />
    </>
  );
}

export default HandSimulation;