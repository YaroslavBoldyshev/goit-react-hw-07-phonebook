import styled from 'styled-components';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { RotatingLines } from 'react-loader-spinner';

export const ContactsList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const filtredContacts = contacts.items.filter(el =>
    el.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ListOfContacts>
      {contacts.isLoading && <RotatingLines strokeColor="pink" width="80" />}
      {filtredContacts.map(contact => {
        return <ContactListItem contact={contact} key={contact.id} />;
      })}
    </ListOfContacts>
  );
};

const ListOfContacts = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
