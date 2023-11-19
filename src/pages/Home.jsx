import styled from 'styled-components';
import Header from 'components/Header';
import Form from 'components/Form';
import LetterList from 'components/LetterList';


function Home() {

  return (
    <Container>
      <Header />
      <Form />
      <LetterList />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
