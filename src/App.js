
import './App.css';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import vertical from "./data/vertical/Straight Wall (vertical).mp4";
import overhang from "./data/overhang/Overhang (vertical + horizontal).mp4";
import traverse from "./data/traverse/Traverse (horizontal).mp4";

import VideoSelection from "./components/VideoSelection.js";

function App() {
  /* time state ist unser TimeSynchro auf der skizze */
  const [time,setTime] = useState(0);
  const [videoFilePath,setVideoFilePath] = useState(vertical); 


  function syncT(newtime){
    setTime(newtime.playedSeconds);
  }

  function handleVideoChange(event){
    switch(event.target.value){
      case "vertical":
        setVideoFilePath(vertical);
        break;
      case "traverse":
        setVideoFilePath(traverse);
        break;
      case "overhang":
        setVideoFilePath(overhang);
        break;
    }

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

      <VideoSelection
        handleVideoChange={handleVideoChange}
      />

    </div>
  );

}

export default App;
