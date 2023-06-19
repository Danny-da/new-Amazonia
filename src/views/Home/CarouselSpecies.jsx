import { Grid, Typography, Divider, Container,  } from "@mui/material"
import '../../index.css'
import mono from '../../assets/images/mono.jpg'
import fondo from '../../assets/images/sectionSpecies.png'


export default function CarouselSpecies() {

    return (
        <>
        <div className="section"
         style={{
            backgroundImage: `url(${fondo})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100%',
        }}
        >
            <Container maxWidth="lg">
            <Grid container spacing={2} columns={{xs:4, sm:8, md:12, lg:12}}
            >
               <Grid item xs={4} sm={8} md={12} lg={12}>
               <Typography variant="h6" component='div' align="center" sx={{color:'#fff'}}>ESPECIES</Typography>
               <Typography component='div' sx={{fontSize:'36px', fontWeight:'medium', color:'#fff' }} 
               align="center">Explora la asombrosa variedad de flora y fauna en la región amazónica</Typography>
               <Divider
               textAlign="center"
               sx={{width:'60px', backgroundColor:'#fff', borderWidth:'4px', margin: '0 auto', borderRadius:'16px'}}
               />
                <Grid item xs={4} sm={4} md={6} lg={6} sx={{alignItems:'center'}}>
                <img src={mono} ></img>
                </Grid>
               </Grid>
           </Grid>
            </Container>
        </div>
        </>
    )
}