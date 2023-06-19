import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';


export default function FolderList({number, categorie}) {
  FolderList.propTypes = {
    number: PropTypes.number.isRequired,
    categorie: PropTypes.string.isRequired
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <ListItem 
      sx={{
        border: 'solid 1px  #DDE1E6', borderRadius:'16px'
      }}
      >
        <ListItemAvatar>
          <Avatar  >
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText 
         primary={
          <Typography variant="body1" component="div" sx={{ fontSize: '18px', fontWeight:'bold' }}>
             {number}+ 
          </Typography>
        }
        secondary={
          <Typography variant="body2" component="div" sx={{ fontSize: '14px' }}>
            {categorie}
          </Typography>
        }
        />
      </ListItem>
    </List>
  );
}
