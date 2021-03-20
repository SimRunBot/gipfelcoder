
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player'
import Video from "./data/vertical/Straight Wall (vertical).mp4";
//Overhang (vertical + horizontal).mp4
//Traverse (horizontal).mp4

function App() {
  const [time,setTime] = useState(0);
  const [videoFilePath,setVideoFilePath] = useState(Video); 
  

  function syncTime(newTime){
    setTime(newTime);
  }
  
  function VideoPlayer(props) {
    const PlayerRef = useRef();
    console.log(PlayerRef.current);

    return(
      <>
        <ReactPlayer 
          url={props.video_file} 
          ref={PlayerRef}
          controls={true}/>
      </>
    );
  }

  return (
    <div className="App">

      <h1> Time: {time} </h1>

      <VideoPlayer 
        video_file={videoFilePath}
        synchTime={syncTime}
        />
      
      <video 
        src={Video}>
      </video>

    </div>
  );

}

export default App;
