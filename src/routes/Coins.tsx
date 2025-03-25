import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

function Coins() {
  console.log("ddd");
  return <Title>Coins</Title>;
}

export default Coins;
