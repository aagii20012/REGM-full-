import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';


function Post({name,url,head}) {
    const imageUrl="img/"+ url +".jpg"
    const styleTheme= {
      button:{
        width:'100%',
        border: '1px solid #E5E5E5',
        boxSizing: 'border-box',
        margin:'0px 0px 20px 0',
        backgroundColor: "#FFFFFF",
      },
        border:{
            border:'none',
            borderShadow:"none"
        },
        comment:{
            fontSize: '12px',
            lineHeight:'15.9px',
            margin: '4px 0 0 0',
            padding: '0',
        },
        title:{
            fontSize: '18px',
            lineHeight:'26px',
            margin: '0',
            padding: '0',
        },
        name:{
            fontSize: '12px',
            lineHeight:'15.53px',
            margin: '0',
            padding: '0',
            color:"#C9A96E"
        }
    }
    let header=<CardHeader
                    component="button"
                    style={styleTheme.button}
                    title="Featured posts"
                    titleTypographyProps={{variant:'text' }}/>
  return (
    <Card square={true} style={styleTheme.border} sx={{mt:1}}>
      {head&& header}
      <CardMedia
        component="img"
        height="180"
        image={ imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="center">
            <p style={styleTheme.name} >{name.toUpperCase()}</p>
            <p style={styleTheme.title}>One of Saturn’s largest rings may be newer than anyone</p>
            <p style={styleTheme.comment}>June 6, 2019 By Rickie Baroch</p>
        </Typography>
      </CardContent>
      
    </Card>
  )
}

export default Post