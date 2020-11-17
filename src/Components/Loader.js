import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  font-size: 20px;
`;

const Loader = () => (
  <Container>
    <span aria-label="loading">⏰ Loading...</span>
  </Container>
);

export default Loader;
