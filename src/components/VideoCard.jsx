import {Typography, Card, CardContent, CardMedia} from '@mui/material'
import { Link } from 'react-router-dom'
import { CheckCircle } from '@mui/icons-material'
import { demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle} from '../utils/constants'

const VideoCard = ({ video: { id: {
    videoId}, snippet } }) => {
  return (
      <Card sx={{
          width: {xs: '100%', sm: '358px', md: '320px',  },
          boxShadow: 'none',
      borderRadius: '1px'
      }} >
          <Link to={videoId ? `/video/${videoId}` :  demoVideoUrl}>
              <CardMedia image={snippet?.thumbnails?.high?.url}
                  alt={snippet?.title}
                  sx={{
                      width: {
                      xs: '100%', sm:'358px', md: '320px'
                  }, height:180}}
              />
          </Link>
          <CardContent sx={{
              backgroundColor: '#1e1e1e',
              height: '106px',
            minWidth: '348px'
          }} >
              
              <Link to={videoId ? `/video/${videoId}` :  demoVideoUrl}>
                  <Typography variant="subtitle1" fontWeight="bold" color="#fff" >
                      {snippet?.title.slice(0,50) ||demoVideoTitle.slice(0,50)}
              </Typography>
              </Link>
              <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` :  demoChannelUrl}>
                  <Typography variant="subtitle2" fontWeight="bold" color="gray" >
                      {snippet?.channelTitle || demoChannelTitle}
                      <CheckCircle sx={{fontSize: 12, color:'gray', ml:'5px'}} />
              </Typography>
              </Link>
          </CardContent>
     </Card>
  )
}

export default VideoCard