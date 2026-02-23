import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";
import Form from "./ui/Form";
import ButtonGroup from "./ui/ButtonGroup";

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type="horizontal">
            <Heading as="h1">Wild Oasis</Heading>
            <div>
              <Heading as="h1">Check in/out</Heading>
              <ButtonGroup>
                <Button>Check in</Button>
                <Button variation="secondary" size="small">
                  Check out
                </Button>
              </ButtonGroup>
            </div>
          </Row>
          <Row>
            <Heading as="h2">Guests </Heading>
            <Form>
              <Input type="number" placeholder="Guests" />
              <Input type="number" placeholder="Guests" />
            </Form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
