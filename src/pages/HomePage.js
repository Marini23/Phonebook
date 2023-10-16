import { Box, Typography } from '@mui/material';
import Image from 'background-img.png';

export default function HomePage() {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        fontSize: 36,
      }}
    >
      <Typography
        color="#fff"
        position="absolute"
        top="80%"
        width="105%"
        textAlign="center"
        variant="h1"
        component="h1"
      >
        PHONEBOOK
      </Typography>
    </Box>
  );
}
