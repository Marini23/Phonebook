import { useSelector } from 'react-redux';
import { ListContacts } from './ContactsList.styled';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  console.log(contacts);

  return (
    <ListContacts>
      {contacts.map(contact => (
        <ContactsListItem contact={contact} key={contact.id} />
      ))}
    </ListContacts>
  );
};
