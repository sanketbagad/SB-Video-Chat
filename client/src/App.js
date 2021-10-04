import React from 'react'
import {Typography, AppBar} from '@material-ui/core'
import VideoPlayer from './Components/VideoPlayer'
import Options from './Components/Options'
import Notifications from './Components/Notifications'

const App = () => {
    return (
        <div>
           <AppBar position="static" color="inherit">
            <Typography variant="h2" align="center">
                Video Chat
            </Typography>
           </AppBar>

            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    )
}

export default App
