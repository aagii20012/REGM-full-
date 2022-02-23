import React from 'react'
import { Container } from '@mui/material'
import Box from '@mui/material/Box';
import {
    createTheme,
    responsiveFontSizes,
    ThemeProvider,
  } from '@mui/material/styles';
  import Typography from '@mui/material/Typography';

function Suggest() {

    const styleTheme= {
        comment:{
            fontSize: '14px',
            lineHeight:'18.55px',
            margin: '10px 0 0 0',
            padding: '0',
            color:"white"
        },
        title:{
            fontSize: '40px',
            lineHeight:'50px',
            margin: '0',
            padding: '0',
            color:"white"
        },
        name:{
            fontSize: '14px',
            lineHeight:'18.12px',
            margin: '0 0 -2px 0',
            padding: '0',
            color:"white"
        }
    };
  return (
    <Box  sx={{ bgcolor: 'black',display: 'flex',justifyContent: 'center' }} height='600px' width={'100%'}
    style={{backgroundImage:"url(img/bigPic.jpg)",objectFit: "fill",backgroundRepeat: "no-repeat"}}> 
        <Box sx={{ alignSelf: 'flex-end',bgcolor: 'red',mb:8,ml:-4, width:"50%"}}>
            <p style={styleTheme.name} >Vehicle</p>
            <p style={styleTheme.title}>One of Saturn’s largest rings may be newer than anyone</p>
            <p style={styleTheme.comment}>June 6, 2019 By Rickie Baroch 4 comments</p>
        </Box>
    </Box>
  )
}

export default Suggest