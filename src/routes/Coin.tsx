import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";

interface RouteParams {
  coinId: string;
}

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;
interface RouteState {
  name: string;
}

function Coin() {
  const { coinId } = useParams<RouteParams>();
  const { state } = useLocation<RouteState>();
  console.log(location);
  const [loading, setLoading] = useState(true);
  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>"...Loading"</Loader> : null}
    </Container>
  );
}

export default Coin;
