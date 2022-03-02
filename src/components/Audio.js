import React from 'react'
//import { AudioPlayerProvider } from "react-use-audio-player"
import ReactPlayer from "react-player";
function Audio({src}) {
  return (
   <ReactPlayer
        url={src}
        
        playing={true}
        
      />
  )
}

export default Audio