import { Box, IconButton } from '@mui/material';
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
        position: 'relative',
        top: 60,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        mx: 2,
        gap: 5,
      }}
    >
      <div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            alignContent: 'center',
            width: 618,
          }}
        >
          <h2>Contacts</h2>
          <IconButton
            edge="end"
            aria-label="add"
            type="button"
            onClick={toggleModalAdd}
          >
            <AddIcon style={{ fontSize: 40, color: '#ff6f00' }} />
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
      </div>
    </Box>
  );
}
