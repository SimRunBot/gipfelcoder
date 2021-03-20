
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import Video from "./data/vertical/Straight Wall (vertical).mp4";
/* other 2 videos: */
// ./data/overhang/Overhang (vertical + horizontal).mp4
// ./data/traverse/Traverse (horizontal).mp4

function App() {
  /* time state ist unser TimeSynchro auf der skizze */
  const [time,setTime] = useState(0);
  const [videoFilePath,setVideoFilePath] = useState(Video); 
  
  function syncT(newtime){
    setTime(newtime.playedSeconds);
  }

  function handleVideoChange(event){
    /* TODO implement video changing via buttons */
  }

  return (
    <div className="App">

      <h1> Time: {time} </h1>

      <div
        className="video-container">
          <ReactPlayer 
            url={videoFilePath} 
            controls={true}
            onProgress={syncT}/>
      </div>

      <div
        className="C2-container">
          {/* Hier cann C2 component dann hin  */}
      </div>

    </div>
  );

}

export default App;
