import React from 'react'
import {Paper, Typography} from '@material-ui/core'

export default ({video})=>{
if(!video) return <div>Type Any Thing In Search Box</div>

const   videoSrc= `https://www.youtube.com/embed/${video.id.videoId}`
console.log(video.id.videoId);
return(
<React.Fragment>
<Paper elevation={6} style={{height: '70%'}}>
<iframe frameBorder="0" height="100%" width="100%" title="video player" src={videoSrc} />

</Paper>

<Paper elevation={6} style={{padding: '15px'}}>
<Typography variant="h4">{video.snippet.title}- {video.snippet.channelTitle}</Typography>
<Typography variant="h5">{video.snippet.channelTitle}</Typography>
<Typography variant="h6">{video.snippet.description}</Typography>






</Paper>

</React.Fragment>
)}
