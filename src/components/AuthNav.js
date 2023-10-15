import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        fontSize: 20,
        gap: 7,
      }}
    >
      <Link to="/register">
        <Typography color="#fff">Register</Typography>
      </Link>
      <Link to="/login">
        <Typography color="#fff">Log In</Typography>
      </Link>
    </Box>
  );
};
