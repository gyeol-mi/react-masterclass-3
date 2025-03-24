import styled from "styled-components";

const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;

const H1 = styled.div`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text }: DummyProps) {
  return <H1>{text}</H1>;
}

function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event;
  };
  return (
    <Container>
      <H1>Protected</H1>
      <Dummy text="hello" active></Dummy>
      <form>
        <button onClick={onClick}>click me</button>
      </form>
    </Container>
  );
}

export default App;
