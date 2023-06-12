import {Grid, Typography } from "@mui/material";
import phone from '../../assets/images/phone.png'

export default function DownloadApp(){
    return(
        <div>
           <Grid container spacing={2} columns={{xs:4, sm:8, md:12}} alignItems='center'>
                <Grid item xs={4} sm={4} md={6} lg={6} sx={{order: {xs:2, sm:2,md:1, lg:1} }} alignItems='center'>
                <Typography sx={{fontSize:'54px', fontWeight:'bold', fontFamily:'Poppins'}} 
                component='div' >Tú guía movil de especies y pueblos indígenas</Typography>
                <Typography component='div' sx={{fontSize:'18px'}} align="left">
                Amazonia App: Explora, Conecta y Ahorra: 
                Descubre todo el contenido desde cualquier lugar con tu smartphone Android y consume menos datos
                </Typography>
                </Grid>

                <Grid item xs={4} sm={4} md={6} lg={6} sx={{order: {xs:1, sm:1,md:2, lg:2} }}>
                    <div style={{ objectFit:'cover', textAlign:'center',}}>
                    <img src={phone} alt="" style={{ width: '100%', height: '100%'}}/>
                    </div>
                </Grid> 
           </Grid> 
        </div>
    )
}