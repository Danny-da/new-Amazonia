import { Grid, Typography, Box } from '@mui/material';
import { Container } from '@material-ui/core';
import Header from './header';

export default function BodyPi() {
  return (
    <>
      <Header />
      <Container fixed >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12 }} sx={{ mt: 12 }}>
            <Grid item xs={4} sm={6} md={6}>
            </Grid>
            <Grid item xs={4} sm={6} md={6}>
              <Typography variant="body1" component="div">
                COMUNIDAD INDÍGENA
              </Typography>
              <Typography component="div" sx={{ fontSize: 45, fontFamily: 'Poppins', fontWeight: 'bold' }}>
                Nombre de la comunidad
              </Typography>

              <Typography variant="body1" component="div">
                Ubicación y población:
                <ul>
                  <li>El pueblo achuar vive principalmente en el norte del departamento de Loreto, cerca de la frontera con Ecuador.</li>
                  <li>Según el censo de comunidades nativas realizado por el INEI en 2017, la población del pueblo achuar asciende a 6,444 personas.</li>
                </ul>
              </Typography>

              <Typography variant="body1" component="div">
                Primeros contactos con exploradores Europeos:
                <ul>
                  <li>En 1 535, la expedición de Alonso de Alvarado estableció el primer contacto
con los achuar durante una ruta exploratoria.</li>
                  <li>La fundación de la ciudad de Borja en 1619 abrió nuevas rutas de contacto
con los europeos.</li>
                </ul>
              </Typography>
              
              <Typography variant="body1" component="div">
                Primeros contactos con exploradores Europeos:
                <ul>
                  <li>En 1 535, la expedición de Alonso de Alvarado estableció el primer contacto
con los achuar durante una ruta exploratoria.</li>
                  <li>La fundación de la ciudad de Borja en 1619 abrió nuevas rutas de contacto
con los europeos.</li>
                </ul>
              </Typography>

            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
