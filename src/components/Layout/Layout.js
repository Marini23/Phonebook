import { indigo } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Navigation } from 'components/Navitation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';
import { AuthNav } from 'components/AuthNav';
import { Suspense } from 'react';
import { AppBar, Box } from '@mui/material';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const theme = createTheme({
    palette: {
      primary: {
        main: indigo[900],
        contrastText: indigo[50],
      },
    },
    typography: {
      fontSize: 26,
      fontWeight: 500,
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              height: 60,
              justifyContent: 'space-between',
              alignItems: 'center',
              alignContent: 'center',

              mx: 2,
            }}
          >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Box>
        </AppBar>
      </ThemeProvider>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
