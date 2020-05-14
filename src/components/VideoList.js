import React from 'react'
import {Grid} from '@material-ui/core'
import Videoitem from './Videoitem'

export default ({videos, onVideoSelect})=>{
    const listOfVideos = videos.map((video)=> <Videoitem
    
    onVideoSelect={onVideoSelect}
    key={video.id.videoId}
    video={video}
    />)

    return(
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    )

    }
