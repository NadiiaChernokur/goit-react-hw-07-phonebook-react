import { ContactList } from './Contactlist/Contactlist';
import { Filter } from './Filter/Filter';
import { ContactForm } from './Contactform/Contactform';
import { Container, Head, Head2 } from './Appstyles/App.styles';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'reduxfolder/http';

export const App = () => {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Head>Phonebook</Head>
      <ContactForm />

      <Head2>Contacts</Head2>
      <Filter />
      {contacts && <ContactList />}
    </Container>
  );
};
