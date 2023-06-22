//import * as React from 'react';
//import { styled } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';
import Indigenas from '../images/img-landing.png'

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

export default function BodyPi() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
                <Grid item xs={4} sm={6} md={6}>
                    <img src={Indigenas} alt="Logo de Amazonía" id="amazo-image" />
                </Grid>
                <Grid item xs={4} sm={6} md={6}>
                <Typography variant="body1" component="div">
                COMUNIDAD INDíGENA
                  </Typography>
                    <Typography component="div"
                        sx={{ fontSize: 45, fontFamily: 'Poppins', fontWeight: 'bold' }} >
                        Nombre de la comunidad
                    </Typography>
                    <Typography variant="body1" component="div">
                    Los pueblos indígenas en la Amazonía son clave para la diversidad cultural y el desarrollo sostenible,
                    ya que mantienen sistemas de vida ancestrales en armonía con el medio ambiente.
                  </Typography>
                  <Typography variant="body1" component="div">
                  Ubicación y población:
• El pueblo achuar vive principalmente en el norte del departamento de
Loreto, cerca de la frontera con Ecuador.
• Según el censo de comunidades nativas realizado por el INEI en 2017, la
población del pueblo achuar asciende a 6,444 personas.
                  </Typography>
                </Grid>
            </Grid>
        </Box>
    );
}