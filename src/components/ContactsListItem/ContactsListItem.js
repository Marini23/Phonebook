import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

import ClearIcon from '@mui/icons-material/Clear';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const ContactsListItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  return (
    <ListItem
      sx={{
        width: 600,
        height: 60,
        border: '1px solid rgba(10, 10, 10, 0.2)',
        borderRadius: 2,
        boxShadow:
          '0px 1px 6px rgba(46, 47, 66, 0.08), 0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08)',
        my: 1,
        backgroundColor: '#f4f4fd',
      }}
    >
      <ListItemAvatar>
        <Avatar>
          <AccountCircleIcon style={{ fontSize: 68, color: '#ff6f00' }} />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignContent: 'center',
          mx: 2,
        }}
        primary={
          <Typography variant="h6" style={{ color: '#ff6f00' }}>
            {name}
          </Typography>
        }
        secondary={
          <Typography variant="h6" style={{ color: '#ff6f00' }}>
            {number}
          </Typography>
        }
      />

      <IconButton
        edge="end"
        aria-label="delete"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        <ClearIcon style={{ fontSize: 36 }} />
      </IconButton>
    </ListItem>
  );
};
