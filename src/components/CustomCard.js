//import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Grid, Box, Fab } from '@mui/material';

const CustomCard = ({ imageSrc, title, subtitle }) => {
  const cardStyle = {
    boxShadow: '5px 5px 10px 4px rgba(0, 0, 0, 0.2)',
    marginBottom: '30px',
  };

  const imageStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  };

  const titleStyle = {
    marginLeft: '10px',
    fontWeight: 'bold',
  };

  const contentStyle = {
    marginLeft: '10px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'end',
  };

  return (
    <Card style={cardStyle}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <img src={imageSrc} alt="Card Image" style={imageStyle} />
        </Grid>
        <Grid item xs={12} sm={8}>
          <CardContent>
            <Typography variant="h5" component="div" style={titleStyle}>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" style={contentStyle}>
              {subtitle}
            </Typography>
            <Box mt={2}  style={buttonContainerStyle}>
              <Fab variant="extended" size="medium" color="primary" style={{ whiteSpace: 'nowrap' }}>
                Leer más
              </Fab>
            </Box>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

CustomCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default CustomCard;
