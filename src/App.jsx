import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="horizontal">
          <Heading as="h1">Wild Oasis</Heading>
          <div>
            <Heading as="h1">Check in/out</Heading>
            <Button>Check in</Button>
            <Button>Check out</Button>
          </div>
        </Row>
        <Row type="vertical">
          <Heading as="h2">Guests </Heading>
          <form>
            <Input type="number" placeholder="Guests" />
            <Input type="number" placeholder="Guests" />
          </form>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
