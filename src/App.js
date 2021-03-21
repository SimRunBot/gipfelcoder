
import './App.css';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import vertical from "./data/vertical/Straight Wall (vertical).mp4";
import overhang from "./data/overhang/Overhang (vertical + horizontal).mp4";
import traverse from "./data/traverse/Traverse (horizontal).mp4";

import VideoSelection from "./components/VideoSelection.js";
import HandSimulation from "./components/HandSimulation.js";
import MoveAndHeight from "./components/MoveAndHeight.js";


function App() {
  /* der time state ist TimeSynchro auf der skizze */
  const [time,setTime] = useState(0);
  const [videoFilePath,setVideoFilePath] = useState(vertical); 
  /* videooption state zum wechseln der 3 daten/videos */
  const [videoOption,setVideoOption] = useState("vertical"); 

  function syncT(newtime){
    setTime(newtime.playedSeconds);
  }

  function handleVideoChange(event){
    switch(event.target.value){
      case "vertical":
        setVideoFilePath(vertical);
        setVideoOption("vertical");
        break;
      case "traverse":
        setVideoFilePath(traverse);
        setVideoOption("traverse");
        break;
      case "overhang":
        setVideoFilePath(overhang);
        setVideoOption("overhang");
        break;
    }

  }

  return (
    <div className="App">

      <h1> Time: {time.toFixed(0)} s</h1>

      <div
        className="video-container">
          <ReactPlayer 
            url={videoFilePath} 
            controls={true}
            height={640}
            width={360}
            pip={false}
            muted={true}
            onProgress={syncT}/>
      </div>

      <VideoSelection
        handleVideoChange={handleVideoChange}
      />
            
      <MoveAndHeight 
        videoOption={videoOption}
        time={time}/>

      <HandSimulation 
        videoOption={videoOption}
        time={time}
        />


    </div>
  );

}

export default App;