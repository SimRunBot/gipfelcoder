import {Card, Button} from "ui-neumorphism";
import 'ui-neumorphism/dist/index.css';
import './App.css';

import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player'
import vertical from "./data/vertical/Straight Wall (vertical).mp4";
import overhang from "./data/overhang/Overhang (vertical + horizontal).mp4";
import traverse from "./data/traverse/Traverse (horizontal).mp4";

import VideoSelection from "./components/VideoSelection.js";
import HandSimulation from "./components/HandSimulation.js";
import MoveAndHeight from "./components/MoveAndHeight.js";

import VerticalCsv from './data/vertical/vertical_roll_pitch.csv'
import TraverseCsv from './data/traverse/traverse_roll_pitch.csv'
import OverhangCsv from './data/overhang/overhang_roll_pitch.csv'


function App() {
  /* framelocations from pfsx files */
  const frameLocV = 1707
  const frameLocT = 1836
  const frameLocO = 1742

  /* accelerator data */
  const [dataV, setDataV] = useState();
  const [dataT, setDataT] = useState();
  const [dataO, setDataO] = useState();

  /* rotation */
  const [rotation,setRotation] = useState(["0","0","0","0"]);

  /* der time state ist TimeSynchro auf der skizze */
  const [time,setTime] = useState(0);
  const [videoFilePath,setVideoFilePath] = useState(vertical); 
  /* videooption state zum wechseln der 3 daten/videos */
  const [videoOption,setVideoOption] = useState("vertical"); 

  useEffect(() => {
    getData()

  }, [])

  async function getData() {
    const responseV = await fetch(VerticalCsv);
    const responseT = await fetch(TraverseCsv);
    const responseO = await fetch(OverhangCsv);
    const _dataV = await responseV.text();
    const _dataT = await responseT.text();
    const _dataO = await responseO.text();

    setDataV(_dataV.split(/\n/));
    setDataT(_dataT.split(/\n/));
    setDataO(_dataO.split(/\n/));

  } 

  useEffect(() => {
    if (videoOption == "vertical" && dataV && time) {
      var row = dataV[Math.floor(time*50)+1+frameLocV].split(',')
      setRotation(row.slice(1))
    }
    if (videoOption == "traverse" && dataT && time) {
      var row = dataV[Math.floor(time*50)+1+frameLocT].split(',')
      setRotation(row.slice(1))
    }
    if (videoOption == "overhang" && dataO && time) {
      var row = dataV[Math.floor(time*50)+1+frameLocO].split(',')
      setRotation(row.slice(1))
    }

  }, [time, videoOption])

  function syncT(newtime){
    setTime(newtime.playedSeconds);
  }

  function handleVideoChange(event){
    switch(event.target.textContent){
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

      <Card
        width={600}
        rounded
        className="MainCard">
          
          <VideoSelection
            handleVideoChange={handleVideoChange}/>

          <MoveAndHeight 
            videoOption={videoOption}
            time={time}/>

          <h2> Time: {time.toFixed(0)} s</h2>
          <Card
            className="Video-Container"
            rounded
            elevation={4} 
            width={400}>
              <ReactPlayer 
                url={videoFilePath} 
                controls={true}
                height={600}
                width={360}
                pip={false}
                muted={true}
                onProgress={syncT}/>
          </Card>

          <Card
            className="Hand-Container"
            rounded
            elevation={4} 
            width={520}>
              <h3> 3D Hand Position</h3>
              <HandSimulation 
                rotation={rotation}/>
          </Card>
      </Card>
    
    </div>
  );

}

export default App;
