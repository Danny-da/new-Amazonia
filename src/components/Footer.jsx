import { Container, Grid, Stack } from "@mui/material";
import logoEmbajada from '../assets/images/LogoEspaña.png'
import logoMinam from '../assets/images/logo_minam.png'

export default function Footer() {

    return (
        <div 
        style={{
            backgroundColor:'#000',
        }}
        >
            <Container maxWidth="lg">
              <Stack direction="row" spacing={2}>
                <img src={logoMinam} alt="Minan"
                style={{width:'100%', height:'100%'}}
                />
                <img src={logoEmbajada} alt="Cooperación Española" 
                 style={{width:'328px', height:'100%'}}
                />
                 <img src={logoMinam} alt="IIAP"
                style={{width:'100%', height:'100%'}}
                />
              </Stack>
            <Grid container spacing={2} columns={{xs:4, sm:8, md:12, lg:12}}>
            <Grid item xs={4} sm={8} md={12} lg={12}>
            </Grid>
            <Grid item xs={4} sm={4} md={6} lg={6} sx={{alignItems:'center'}}>
            </Grid>
            </Grid>
            </Container>
        </div>
    )
}