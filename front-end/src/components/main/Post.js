import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Post({name,url,title,date,person}) {
    const imageUrl= url
    const styleTheme= {
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
            fontSize: '20px',
            lineHeight:'28px',
            margin: '0',
            padding: '0',
            color:"#171717"
        },
        name:{
            fontSize: '12px',
            lineHeight:'15.53px',
            margin: '0',
            padding: '0',
            color:"#C9A96E"
        }
    };

  return (
    <Card square={true} style={styleTheme.border}>
      <CardMedia
        component="img"
        height="280"
        image={ imageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="center" sx={{px:2}}>
            <p style={styleTheme.name} >{name.toUpperCase()}</p>
            <p style={styleTheme.title}>{title}</p>
            <p style={styleTheme.comment}>{date} By {person}</p>
        </Typography>
      </CardContent>
      
    </Card>
  )
}

export default Post