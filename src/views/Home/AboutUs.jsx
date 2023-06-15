import { Box, Grid, Stack, Typography } from "@mui/material";
import CardAboutUs from "../../components/CardAboutUs";
import '../../index.css'

export default function AboutUs() {

    return (
        <div className="section">
           <Grid container spacing={2} columns={{xs:4, sm:4, md:12}}>
           <Grid item xs={4} sm={6} md={6}>
           <Typography  component="div"
           sx={{fontSize: 45, fontFamily: 'Poppins', fontWeight: 'bold'}}
           >
            AMAZONÍA: Acerca de la guía ilustrada
           </Typography>
           <Typography variant="body1" component="div">
           ¡Bienvenidos a la página web de la guía ilustrada de la Amazonía! 
            uno de los ecosistemas más importantes del planeta, es un tesoro que debemos proteger
           </Typography>
           <Typography variant="body1" component="div">
           Los pueblos indígenas en la Amazonía son clave para la diversidad cultural y el desarrollo sostenible, 
           ya que mantienen sistemas de vida ancestrales en armonía con el medio ambiente.
           </Typography>
           <Stack direction='row' spacing={2}>
           <Box sx={{ flexGrow: 1 }}>
            <Typography  component="div" sx={{fontSize:'36px',fontWeight:'bold'}}>
                +51
            </Typography>
            <Typography variant="body1" component="div">
                Especies
            </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }}>
            <Typography  component="div" sx={{fontSize:'36px', fontWeight:'bold'}}>
                +51
            </Typography>
            <Typography variant="body1" component="div">
                Especies
            </Typography>
            </Box>
            </Stack>
           </Grid>

           <Grid item xs={4} sm={6} lg={12}>
            <Stack spacing={2}>
             <CardAboutUs/>
             <CardAboutUs/>
            </Stack>
           </Grid>
           </Grid>
        </div>
    )
}