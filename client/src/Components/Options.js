import React from 'react'
import { Button, TextField, Grid, Typography, Container, Paper } from 'material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import {CopyToClipboard} from "react-copy-to-clipboard"

const Options = ({ children }) => {
    return (
        <div>
            {children}
            {console.log("Fuck you!!")}
        </div>
    )
}

export default Options
