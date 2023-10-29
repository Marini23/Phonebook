import { Box, Typography, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/operations';
import { selectUserEmail, selectUserName } from 'redux/selectors';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        alignContent: 'center',
        gap: 7,
      }}
    >
      <Typography color="#fff">Welcome, {name}</Typography>
      <Button
        sx={{ color: '#fff' }}
        variant="text"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Box>
  );
}
