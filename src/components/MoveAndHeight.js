import React from "react";

import traverseMoves from "../data/traverse/e897d166-1618-5bd3-ba3a-cb7577c64647.json";
import verticalMoves from "../data/vertical/40587108-e1a8-56ae-8c7f-1853f009b7c6.json";
import overhangMoves from "../data/overhang/bae8f52c-407e-5f89-a8e3-61fcca51ee0a.json";

function MoveAndHeight(props) {

  /* const currentMove = checkCurrentMove(props.time, props.videoOption); */
  const currentHeight = checkCurrentHeight(props.time, props.videoOption);


  /* function checkCurrentMove(time, video){
    switch(video){
      case "vertical":
        console.log(verticalMoves);
        break;

      case "traverse":
        //console.log(traverseMoves);
        break;

      case "overhang":
        //console.log(overhangMoves);
        break;
    }
  } */

  function checkCurrentHeight(time, video){
    switch(video){
      case "vertical":
        let currHeight_v = verticalMoves
                          .data
                          .climbs[0]
                          .height_profile[Math.floor(time * 8.8)];
                            
        if (currHeight_v == undefined) return "descent";
        return currHeight_v.toFixed(2);

      case "traverse":
        let currHeight_t = traverseMoves
                          .data
                          .climbs[0]
                          .height_profile[Math.floor(time * 10)];
                            
        if (currHeight_t == undefined) return "descent";

        return currHeight_t.toFixed(2);

      case "overhang":
        let currHeight_o = overhangMoves
                          .data
                          .climbs[0]
                          .height_profile[Math.floor(time * 10)]
                            
        if (currHeight_o == undefined) return "descent";

        return currHeight_o.toFixed(2);
    }
  }

  return(
    <div
          className="MoveAndHeight-container">
            <h2>Height: {currentHeight} m</h2>
      </div>
  );
}
export default MoveAndHeight;