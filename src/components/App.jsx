import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { GlobalStyle } from './ClobalStyle';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { Loader } from './Loader';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import RegisterPage from 'pages/RegisterPage';
import LogInPage from 'pages/LogInPage';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ChakraProvider>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}></Route>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/contacts" element={<div>Contacts</div>} />
          <Route path="*" element={<div>SingUp</div>} />
        </Routes>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && <Loader />}
        {error && <p>{error}</p>}
        {contacts.length > 0 && !isLoading && !error && <ContactList />}
        <GlobalStyle />
      </div>
    </ChakraProvider>
  );
};
