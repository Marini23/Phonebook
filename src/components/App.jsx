import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { GlobalStyle } from './ClobalStyle';

import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import RegisterPage from 'pages/RegisterPage';
import LogInPage from 'pages/LogInPage';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LogInPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
        {/* <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader />}
        {error && <p>{error}</p>}
        {contacts.length > 0 && !isLoading && !error && <ContactList />} */}
        <GlobalStyle />
      </div>
    </ChakraProvider>
  );
};
