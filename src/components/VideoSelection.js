import React from "react";
import {Button} from "ui-neumorphism";
import 'ui-neumorphism/dist/index.css';

function VideoSelection(props) {
  return(
    <div
      className="VideoSelection-Container">
      <Button 
        className="Button"
        value="vertical"
        rounded
        
        onClick={props.handleVideoChange}>
          vertical
      </Button>
      <Button 
        className="Button"
        value="traverse"
        
        rounded
        onClick={props.handleVideoChange}>
          traverse
      </Button>
      <Button 
        className="Button"
        value="overhang"
        rounded
        
        onClick={props.handleVideoChange}>
          overhang
      </Button>
    </div>
  );
}
export default VideoSelection;