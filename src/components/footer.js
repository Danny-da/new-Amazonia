//import React from 'react';
import { Grid, Typography, Box, Stack, Container } from '@mui/material';
import myImage1 from '../images/footer.png';
import logoEmbajada from '../assets/images/LogoEspaña.png';
import IIAPlogo from '../images/IIAPlogo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-bar"></div>
      <Container fixed>
        <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
          <Grid item xs={12} md={8}>
            <img src={myImage1} alt="Imagen 1" style={{ maxWidth: '100%'}} />
            <img src={logoEmbajada} alt="Cooperación Española" style={{ maxWidth: '328px', height: '100%' }} />
            <Typography variant="subtitle1" component="div" sx={{ color: 'white', display: 'flex', alignItems: 'center', }}>
              <Box>
                <PlaceOutlinedIcon fontSize="medium" sx={{ marginRight: '0.5rem',  }} />
              </Box>
              Carretera Iquitos - Nauta Km 4.5, Quistococha, Distrito de San Juan Bautista, Maynas, Loreto
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
              <Box>
                <EmailSharpIcon fontSize="medium" sx={{ marginRight: '0.5rem' }} />
              </Box>
              ciiap@iiap.gob.pe
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <img src={IIAPlogo} alt="Logo IIAP" />
            <Typography variant="h5" sx={{ color: 'white' }}>
              Conéctate con el IIAP
            </Typography>
            <Stack direction="row" spacing={1} sx={{ marginTop: '1%' }}>
              <Box>
                <FacebookIcon fontSize="large" sx={{ color: 'white' }} />
              </Box>
              <Box>
                <LinkedInIcon fontSize="large" sx={{ color: 'white' }} />
              </Box>
              <Box>
                <GoogleIcon fontSize="large" sx={{ color: 'white' }} />
              </Box>
              <Box>
                <InstagramIcon fontSize="large" sx={{ color: 'white' }} />
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Footer;
