import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Loader } from 'components/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import {
  selectError,
  selectIsLoading,
  selectIsRefreshing,
  selectVisibleContacts,
} from 'redux/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);
  const error = useSelector(selectError);
  useEffect(() => {
    console.log(`con--`);
    dispatch(fetchContacts());
    console.log(`con-+`);
  }, [dispatch]);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {error && <p>{error}</p>}
      {contacts.length > 0 && !isLoading && !error && isRefreshing && (
        <ContactList />
      )}
    </div>
  );
}
