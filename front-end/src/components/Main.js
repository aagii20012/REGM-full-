import { Container, Stack } from '@mui/material'
import React from 'react'
import { Grid,Box } from '@mui/material'
import Post from './Post'
import BigPost from './BigPost'
import SidePost from './SidePost'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { color } from '@mui/system'

function createData(name, number) {
    return { name, number };
  }

function Main() {

    const rows = [
        createData('Fashion', 23),
        createData('Style & clothes', 7),
        createData('Minimalism', 16),
        createData('Black & White', 5),
        createData('Modern clothes', 12),
      ];


    const styleTheme= {
        addBorder:{
            border:"1px solid #E5E5E5",
            padding:"5px"
        },
        removeBorder:{
            border:"none",
            color:"black",
            padding:"5px"
        },
        tag:{
            font:"PT Serif",
            color:"#666666",
            fontSize:"14px",
            lineHeight:"18.55px",
            padding:"7px"
        },
        buttonColor:{
            backgroundColor: "#FFFFFF",
            color:'black',
        },
        button:{
            width:'100%',
            border: '1px solid #E5E5E5',
            backgroundColor: "#FFFFFF",
            boxSizing: 'border-box',
            margin:'0px 0px 20px 0'
        },
        bottom:{
            width:'100%',
            borderTop: '1px solid #E5E5E5',
            textAlign: 'center',
            margin:'0px',
            padding:"10px 0 0 0",
            color:'#C9A96E',
        },
        comment:{
            fontSize: '14px',
            lineHeight:'24px',
            margin: '4px 0 0 0',
            padding: '0',
        },
        title:{
            fontSize: '14px',
            lineHeight:'18.55px',
            margin: '0',
            padding: '0',
        },
        name:{
            fontSize: '16px',
            lineHeight:'21.2px',
            margin: '0',
            padding: '0',
            color:"#C9A96E"
        }

    };

  return (
    <Container >
        <Grid container spacing={20} padding="50px 0" >
            <Grid container item xs={8} spacing={5}  >
                <Grid  item  xs={6} >
                    <Box sx={{bgcolor: 'red',height: 400 }}>
                        <Post name="Tourism" url="little"/>
                    </Box>
                </Grid>
                <Grid  item  xs={6} >
                    <Box sx={{bgcolor: 'red',height: 400 }}>
                        <Post name="sport" url="little"/>
                    </Box>
                </Grid>
                <Grid  item  xs={6} >
                    <Box sx={{bgcolor: 'red',height: 400 }}>
                        <Post name="fashion" url="little"/>
                    </Box>
                </Grid>
                <Grid  item  xs={6} >
                    <Box sx={{bgcolor: 'red',height: 400 }}>
                        <Post name="clothes" url="little"/>
                    </Box>
                </Grid>
                <Grid  item  xs={6} >
                    <Box sx={{bgcolor: 'red',height: 400 }}>
                        <Post name="fashion" url="little"/>
                    </Box>
                </Grid>
                <Grid  item  xs={6} >
                    <Box sx={{bgcolor: 'red',height: 400 }}>
                        <Post name="clothes" url="little"/>
                    </Box>
                </Grid>
                <Grid  item  xs={12} >
                    <Box sx={{bgcolor: 'red',height: 500 }}>
                        <BigPost name="Summer" url="little"/>
                    </Box>
                </Grid>
                <Grid  item  xs={6} >
                    <Box sx={{bgcolor: 'red',height: 400 }}>
                        <Post name="Autumn" url="little"/>
                    </Box>
                </Grid>
                <Grid  item  xs={6} >
                    <Box sx={{bgcolor: 'red',height: 400 }}>
                        <Post name="clothes" url="little"/>
                    </Box>
                </Grid>
                <Grid  item  xs={6} >
                    <Box sx={{bgcolor: 'red',height: 400 }}>
                        <Post name="Summer" url="little"/>
                    </Box>
                </Grid>
                <Grid  item  xs={6} >
                    <Box sx={{bgcolor: 'red',height: 400 }}>
                        <Post name="Summer" url="little"/>
                    </Box>
                </Grid>
                <Grid item  xs={12}>
                    <Box sx={{mt:5}}
                    justifyContent="center"
                    display= 'flex'
                    alignItems= 'center'
                    flexWrap= 'wrap'
                    textAlign='center'
                    >
                        <div>
                            <ButtonGroup size="small" aria-label="small button group" 
                            style={styleTheme.addBorder}>
                            <Button key="OLDER POST" style={styleTheme.removeBorder} >
                                    <ArrowBackIosIcon fontSize="small" color="disabled"/>OLDER POST</Button>
                                <Button key="1" style={styleTheme.removeBorder}>1</Button>
                                <Button key="2" style={styleTheme.removeBorder}>2</Button>
                                <Button key="3" style={styleTheme.removeBorder}>3</Button>
                                <Button key="..." style={styleTheme.removeBorder}>...</Button>
                                <Button key="8" style={styleTheme.removeBorder}>8</Button>
                                <Button key="NEXT POST" style={styleTheme.removeBorder}>NEXT POST
                                <ArrowForwardIosIcon fontSize="small" color="disabled"/></Button>
                            </ButtonGroup>
                        </div>
                    </Box>
                </Grid>
            </Grid>
            <Grid item xs={4}>
                <Stack spacing={5}>
                    <Box sx={{bgcolor: 'red',height: 430 }}>
                    <Card square={true} style={styleTheme.border}>
                        <CardHeader
                            component="button"
                            style={styleTheme.button}
                            title="About the author"
                            titleTypographyProps={{variant:'text' }}
                        />
                        <CardMedia
                            component="img"
                            height="180"
                            image="img/sideLittle.jpg"
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary" align="center">
                                <p style={styleTheme.name}>Kate Willems</p>
                                <p style={styleTheme.title}>Food & cooking bloger</p>
                                <p style={styleTheme.comment}>Hi, I'm Sonia. Cooking is the way I express my creative side to the world. Welcome to my Kitchen Corner on…</p>
                            </Typography>
                            <div style={styleTheme.bottom} >
                                Continue Readings
                            </div>
                        </CardContent>
                        
                    </Card>
                    </Box>
                    <Box >
                        <SidePost name="Tourism" url="little" head="true"/>
                        <SidePost name="Tourism" url="little"/>
                        <SidePost name="Tourism" url="little"/>
                    </Box>
                    <Box>
                        <Stack spacing={10}>
                            <Box >
                            <Button fullWidth sx={ { borderRadius: 0 } }
                                style={styleTheme.buttonColor}
                            variant="contained" size="large">Categories</Button>
                            <TableContainer component={Paper} sx={{mt:2}}>
                                <Table >
                                    <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                        key={row.name}
                                        width="30%"
                                        >
                                        <TableCell width="70%" component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell width="70%" align="right">{row.number}</TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            </Box>
                            <Box sx={{ }}>
                                <Button fullWidth sx={ { borderRadius: 0, } }
                                style={styleTheme.buttonColor}
                                variant="contained" size="large">Social media</Button>
                                <Grid container spacing={1} >
                                    <Grid item xs={4}>
                                        <Box sx={{pt:2}}
                                        justifyContent="center"
                                        display= 'flex'
                                        alignItems= 'center'
                                        flexWrap= 'wrap'
                                        textAlign='center'
                                        >
                                            <FacebookOutlinedIcon fontSize="large" />
                                            <p>32k likes</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{pt:2}}
                                        justifyContent="center"
                                        display= 'flex'
                                        alignItems= 'center'
                                        flexWrap= 'wrap'
                                        textAlign='center'
                                        >
                                            <svg width="30" height="30" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.0546 2.81762C11.741 1.48267 9.92295 0.747437 7.93556 0.747437C4.89971 0.747437 3.03253 2.06473 2.00076 3.16973C0.72917 4.53153 0 6.33971 0 8.13076C0 10.3795 0.888595 12.1056 2.37667 12.7477C2.47657 12.791 2.57709 12.8129 2.67563 12.8129C2.98956 12.8129 3.2383 12.5954 3.32448 12.2466C3.3747 12.0465 3.4911 11.5529 3.5417 11.3386C3.65004 10.9154 3.56251 10.7118 3.32626 10.4171C2.89588 9.87809 2.69545 9.24065 2.69545 8.41107C2.69545 5.94694 4.42882 3.32807 7.64145 3.32807C10.1905 3.32807 11.774 4.86168 11.774 7.33037C11.774 8.88822 11.457 10.3309 10.8812 11.3929C10.4811 12.1308 9.77756 13.0105 8.69747 13.0105C8.2304 13.0105 7.81085 12.8074 7.5461 12.4533C7.29601 12.1186 7.21359 11.6862 7.31417 11.2356C7.4278 10.7264 7.58273 10.1953 7.73267 9.6819C8.00616 8.74415 8.26469 7.85847 8.26469 7.15183C8.26469 5.94316 7.56272 5.13104 6.51809 5.13104C5.19049 5.13104 4.15041 6.55838 4.15041 8.38051C4.15041 9.27415 4.37477 9.94253 4.47634 10.1992C4.3091 10.9493 3.31512 15.4087 3.12658 16.2497C3.01757 16.7405 2.36085 20.6177 3.44783 20.9269C4.66913 21.2743 5.76079 17.4981 5.87189 17.0714C5.96195 16.7244 6.27704 15.4122 6.47014 14.6055C7.0597 15.2067 8.00899 15.6131 8.93267 15.6131C10.674 15.6131 12.24 14.7836 13.3422 13.2776C14.4112 11.8169 15 9.78101 15 7.54519C15 5.79728 14.2909 4.07412 13.0546 2.81762Z" fill="#5A5A5A"/>
                                            </svg>
                                            <p>814 followers</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{pt:2}}
                                        justifyContent="center"
                                        display= 'flex'
                                        alignItems= 'center'
                                        flexWrap= 'wrap'
                                        textAlign='center'
                                        >
                                            <svg width="30" height="30" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 5.71933C1.75987 4.29489 4.26211 1.16689 6.21375 1.16689C8.16305 1.16689 8.64182 3.50155 8.90775 5.61908C9.17718 7.73661 9.94295 12.369 10.9735 12.369C12.0064 12.369 14.3579 8.27113 14.2239 6.688C14.0921 5.10486 12.3887 5.34231 11.4524 5.7969C12.3135 2.63077 14.3016 0.947388 16.8438 0.947388C19.3871 0.947388 20 2.76902 20 5.00593C20 8.41069 13.1945 18.8421 9.08298 18.8421C6.53964 18.8421 5.90904 15.0413 5.39384 13.16C4.87734 11.2811 3.86334 6.35043 2.6776 6.03422C2.21757 5.95665 0.918894 7.00289 0.918894 7.00289L0 5.71933Z" fill="#5A5A5A"/>
                                            </svg>

                                            <p>165 followers</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{pt:2}}
                                        justifyContent="center"
                                        display= 'flex'
                                        alignItems= 'center'
                                        flexWrap= 'wrap'
                                        textAlign='center'
                                        >
                                            <svg width="30" height="30" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.99972 0.444458C4.48587 0.444458 0 4.97604 0 10.5456C0 16.1152 4.48587 20.6465 9.99972 20.6465C15.5138 20.6465 20 16.1155 20 10.5456C20 4.97604 15.5138 0.444458 9.99972 0.444458ZM16.58 5.21193C17.7206 6.64175 18.4139 8.44752 18.4458 10.4152C18.0663 10.3364 16.4588 10.0333 14.538 10.0333C13.9182 10.0333 13.2659 10.0648 12.6119 10.1464C12.5566 10.0106 12.5014 9.87536 12.4434 9.7387C12.2738 9.33524 12.091 8.9349 11.9018 8.54052C14.8582 7.3086 16.2842 5.59895 16.58 5.21193ZM15.566 4.14503C14.0783 2.82635 12.1305 2.02568 9.99972 2.02568C9.34514 2.02568 8.70767 2.10195 8.09514 2.24541C8.43883 2.71436 9.8831 4.73448 11.2026 7.17393C14.0533 6.08462 15.3305 4.46995 15.566 4.14503ZM6.37082 2.85357C6.66209 3.2593 8.1086 5.30096 9.46204 7.72085C5.82978 8.68653 2.60428 8.74948 1.8258 8.74948H1.7431C2.30237 6.14275 4.04379 3.97661 6.37082 2.85357ZM1.55472 10.3483C1.55248 10.4183 1.55136 10.4886 1.55136 10.5589C1.55136 12.7256 2.35563 14.7052 3.6788 16.213C4.03594 15.6162 6.35681 11.9647 10.5794 10.5853C10.6722 10.5547 10.7656 10.5272 10.8603 10.4997C10.6588 10.0429 10.4421 9.58588 10.2145 9.13564C6.46417 10.2612 2.8249 10.3488 1.77646 10.3488C1.67975 10.3488 1.60518 10.3488 1.55472 10.3483ZM9.99972 19.0916C8.06207 19.0916 6.27383 18.4279 4.84694 17.3151C5.0883 16.8365 6.8401 13.6465 11.4675 12.0177C11.4703 12.0165 11.4734 12.0154 11.4768 12.0146C12.6371 15.0698 13.1285 17.634 13.2633 18.4287C12.2592 18.8557 11.1564 19.0916 9.99972 19.0916ZM13.1658 11.5958C14.2165 14.5269 14.6717 16.93 14.785 17.5875C16.6349 16.2983 17.9525 14.2842 18.334 11.9567C18.013 11.8575 16.6318 11.4665 14.866 11.4665C14.3283 11.4665 13.755 11.5031 13.1658 11.5958Z" fill="#5A5A5A"/>
                                            </svg>


                                            <p>6k followers</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{pt:2}}
                                        justifyContent="center"
                                        display= 'flex'
                                        alignItems= 'center'
                                        flexWrap= 'wrap'
                                        textAlign='center'
                                        >
                                            <TwitterIcon fontSize="large" />
                                            <p>130k followers</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{pt:2}}
                                        justifyContent="center"
                                        display= 'flex'
                                        alignItems= 'center'
                                        flexWrap= 'wrap'
                                        textAlign='center'
                                        >
                                            <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8.07247 6.84028C8.07247 6.84028 9.96213 6.69327 9.96213 4.3413C9.96213 1.99587 8.41658 0.845215 6.45439 0.845215H0V13.9792H6.45381C6.45381 13.9792 10.3964 14.1072 10.3964 10.0998C10.3967 10.0998 10.5658 6.84028 8.07247 6.84028ZM10.8855 9.23079C10.8855 9.20499 10.8917 4.18776 15.649 4.18776C20.6724 4.18776 19.966 9.88879 19.966 9.88879H13.5421C13.5421 12.3241 15.7216 12.1705 15.7216 12.1705C17.7862 12.1705 17.714 10.7582 17.714 10.7582H19.8934C19.8934 14.5097 15.649 14.2542 15.649 14.2542C10.5596 14.2542 10.8855 9.23079 10.8855 9.23079ZM15.6975 6.11141C13.7834 6.11141 13.5177 8.13111 13.5177 8.13111H17.5871C17.5871 8.13111 17.6174 6.11141 15.6975 6.11141ZM6.4541 3.17791H2.84389V6.11141H6.23066C6.81641 6.11141 7.32964 5.91311 7.32964 4.54551C7.32964 3.17791 6.4541 3.17791 6.4541 3.17791ZM6.27324 11.6465H2.84389V8.13111H6.4541C6.4541 8.13111 7.76447 8.11837 7.75831 9.93977C7.75831 11.474 6.78647 11.6337 6.27324 11.6465ZM12.9804 3.23572V1.61853H18.1004V3.23572H12.9804Z" fill="#5A5A5A"/>
                                            </svg>

                                            <p>37k followers</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{pt:2}}
                                        justifyContent="center"
                                        display= 'flex'
                                        alignItems= 'center'
                                        flexWrap= 'wrap'
                                        textAlign='center'
                                        >
                                            <InstagramIcon fontSize="large" />
                                            <p>854k followers</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{pt:2}}
                                        justifyContent="center"
                                        display= 'flex'
                                        alignItems= 'center'
                                        flexWrap= 'wrap'
                                        textAlign='center'
                                        >
                                            <YouTubeIcon fontSize="large" />
                                            <p>52k subscribers</p>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Box sx={{pt:2}}
                                        justifyContent="center"
                                        display= 'flex'
                                        alignItems= 'center'
                                        flexWrap= 'wrap'
                                        textAlign='center'
                                        >
                                            <GoogleIcon fontSize="large" />
                                            <p>642 followers</p>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box >
                                <Button fullWidth sx={ { borderRadius: 0 } }
                                    style={styleTheme.buttonColor}
                                variant="contained" size="large">Tags</Button>
                                <Box sx={{mt:2}}>
                                    <Button style={styleTheme.tag}>
                                        Business
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                        Freelance
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                        Money
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                        Experience
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                        Lifestyle
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                        SEO
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                        Wordpress
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                        Marketing
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                     UX
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                    Modern
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                    Success
                                    </Button>
                                    <Button style={styleTheme.tag}>
                                    Nature
                                    </Button>
                                </Box>
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Main