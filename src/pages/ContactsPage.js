import { Box, Container, CssBaseline, IconButton } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from 'redux/selectors';
import AddIcon from '@mui/icons-material/Add';
import { ModalWindow } from 'components/Modal';
import Image from 'bg-contactslist.jpg';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModalAdd = () => {
    setIsModalOpen(state => !state);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        display: 'flex',
        top: 60,
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'start',
            width: 620,
            my: 0,
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              width: 620,
              gap: 3,
            }}
          >
            <h2>Contacts</h2>
            <IconButton
              edge="end"
              aria-label="add"
              type="button"
              onClick={toggleModalAdd}
            >
              <AddIcon style={{ fontSize: 58, color: '#008c3f' }} />
            </IconButton>
          </Box>
          <Filter />
          {isLoading && !error && <Loader />}
          {error && <p>{error}</p>}
          {contacts.length > 0 && !isLoading && !error && <ContactList />}
          {isModalOpen && (
            <ModalWindow isClose={toggleModalAdd} open={isModalOpen}>
              <ContactForm />
            </ModalWindow>
          )}
        </Box>
      </Container>
    </Box>
  );
}
