import React, {useState} from 'react';
import {Grid} from '@material-ui/core'
import {SearchBar ,VideoDetails, VideoList} from './components'
import youtube from './api/youtube'
import './App.css'

export default ()=>{
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  
    
  

  return (
      <Grid container style={{justifyContent: "centre"}}   spacing={10} >
        <Grid item xs={16}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              <SearchBar onSubmit={handleSubmit} />
              </Grid>
              <Grid  item xs={8}>
              <VideoDetails video={selectedVideo}/>
              </Grid>
              <Grid item xs={4}>
              <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
              </Grid>

          </Grid>
        </Grid>
    </Grid>

    )

    async function handleSubmit(searchTerm) {
      const { data :{ items: videos } } = await youtube.get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: 'USE YOUR KEY ',
          q: searchTerm,
        }
      })

      
      
      setVideos(videos);
      setSelectedVideo(videos[0]);
    }
    


  // handleSubmit = async(searchTerm)=>{
  //   console.log(searchTerm)
  // const response = await youtube.get("search", 
  // {params: {
  //   part: "snippet",
  //   maxResults: 5,
  //   key: '',
  //   q: searchTerm
  //   }}
  // )
  // console.log(response)
  // }


}




