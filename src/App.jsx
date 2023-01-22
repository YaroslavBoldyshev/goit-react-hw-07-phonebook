import styled from 'styled-components';
import Form from './Components/Form/Form';
import { ContactsList } from './Components/ContactsList/ContactsList';
import { SearchField } from './Components/SearchField/SearchField';
import Watermelon from './icons/Watermelon.png';

const App = () => {
  return (
    <Section>
      <Title>
        <Logo src={Watermelon} alt="logo" />
        Phonebook
      </Title>

      <Form />

      <h2>Contacts</h2>

      <SearchField />

      <ContactsList />
    </Section>
  );
};

export default App;

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 10px;
  background-color: #ffffe8;
`;

const Logo = styled.img`
  width: 50px;
`;

const Title = styled.h1`
  display: flex;
  align-items: crnter;
`;
