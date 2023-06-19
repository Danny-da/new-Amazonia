//import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const FirstCards = ({ title, content }) => {
  const cardStyle = {
    filter: 'drop-shadow(2px 4px 20px rgba(0, 0, 0, 0.1))',
  };

  const iconStyle = {
    marginRight: '15px',
  };

  const titleStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '2%',
  };

  const contentStyle = {
    flexGrow: 1,
    marginLeft: '57px',
  };

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography variant="h5" component="div" style={titleStyle}>
          <Box mt={2} style={{ marginLeft: '1%' }}>
            <CheckCircleOutlineIcon fontSize="large" style={iconStyle} />
          </Box>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={contentStyle}>
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
};

FirstCards.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default FirstCards ;
