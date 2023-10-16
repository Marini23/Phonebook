import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'start',
          gap: 7,
        }}
      >
        <Link to="/">
          <Typography color="#fff">HOME</Typography>
        </Link>
        {isLoggedIn && (
          <Link to="/contacts">
            <Typography color="#fff">MY CONTACTS</Typography>
          </Link>
        )}
      </Box>
    </nav>
  );
};
