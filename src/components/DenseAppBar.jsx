//import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Grid, Typography, Box, Stack, Container, Link } from '@mui/material';
import myImage1 from '../images/footer.png';
import logoEmbajada from '../assets/images/LogoEspaña.png';
import IIAPlogo from '../images/IIAPlogo.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ height: '100%', overflow: 'hidden', backgroundColor: 'black' }}>
        <Toolbar variant="dense">
          <Container  maxWidth="xl">
            <Grid container spacing={2} alignItems="center" sx={{ mt: 2 }}>
              <Grid item xs={12} md={8}>
                <img src={myImage1} alt="Imagen 1" style={{ maxWidth: '100%' }} />
                <img src={logoEmbajada} alt="Cooperación Española" style={{ maxWidth: '100%', height: '100%' }} />
                <Typography variant="subtitle1" component="div" sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                  <Box>
                    <PlaceOutlinedIcon fontSize="medium" sx={{ marginRight: '0.5rem' }} />
                  </Box>
                  Carretera Iquitos - Nauta Km 4.5, Quistococha, Distrito de San Juan Bautista, Maynas, Loreto
                </Typography>
                <Typography variant="subtitle1" component="div" sx={{ color: 'white', display: 'flex', alignItems: 'center' }}>
                  <Box>
                    <EmailSharpIcon fontSize="medium" sx={{ marginRight: '0.5rem' }} />
                  </Box>
                  <Link href="mailto:ciiap@iiap.gob.pe" color="inherit">
                    ciiap@iiap.gob.pe
                  </Link>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <img src={IIAPlogo} alt="Logo IIAP" />
                <Typography variant="h5" sx={{ color: 'white' }}>
                  Conéctate con el IIAP
                </Typography>
                <Stack direction="row" spacing={1} sx={{ marginTop: '1%' }}>
                  <Link href="https://www.facebook.com">
                    <Box>
                      <FacebookIcon fontSize="large" sx={{ color: 'white' }} />
                    </Box>
                  </Link>
                  <Link href="https://www.linkedin.com">
                    <Box>
                      <LinkedInIcon fontSize="large" sx={{ color: 'white' }} />
                    </Box>
                  </Link>
                  <Link href="https://www.google.com">
                    <Box>
                      <GoogleIcon fontSize="large" sx={{ color: 'white' }} />
                    </Box>
                  </Link>
                  <Link href="https://www.instagram.com">
                    <Box>
                      <InstagramIcon fontSize="large" sx={{ color: 'white' }} />
                    </Box>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
