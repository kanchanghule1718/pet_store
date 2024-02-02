import React from 'react'

export default function Product() {
  return (
    <div>
      <h1  className="mt-3" style={{textAlign:"center"}}>The Animal Kingdom.</h1>

      <div className="d-flex justify-content-evenly  mt-2">
          <video src={"http://localhost:3001/images/pexels_videos_1182756%20(1080p).mp4"} width="500" height="300" controls="controls" autoPlay loop/>
          <video src={"http://localhost:3001/images/video_of_a_tabby_cat%20(720p).mp4"} width="500" height="300" controls="loop" autoPlay={true} loop />

      </div>
      
      {/* <video width="320" height="240" controls/>
  <source src="http://localhost:3001/images/pexels_videos_1182756%20(1080p).mp4" type="video/mp4"/> */}


  


  {/* <source src="http://localhost:3001/images/video_of_a_tabby_cat%20(720p).mp4" type="video/mp4"/> */}

  
  

    </div>
  )
}
