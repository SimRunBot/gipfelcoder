import React from "react";

function VideoSelection(props) {
  return(
    <>
      <div
          className="VideoSelection-container">
            <button 
              value="vertical"
              onClick={props.handleVideoChange}>
                vertical
            </button>
            <button 
              value="traverse"
              onClick={props.handleVideoChange}>
                traverse
            </button>
            <button 
              value="overhang"
              onClick={props.handleVideoChange}>
                overhang
            </button>
      </div>
    </>
  );
}
export default VideoSelection;