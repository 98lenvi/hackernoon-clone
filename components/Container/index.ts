import styled from "styled-components";

const Container = styled.div`
    margin: auto;
    width: 95%;
    position: relative;
  @media (min-width: ${(_) => _.theme.breakpoints.xs}) {
    width: 95%;
  }
  @media (min-width: ${(_) => _.theme.breakpoints.sm}) {
    width: 95%;
  }
  @media (min-width: ${(_) => _.theme.breakpoints.md}) {
    width: 80%;

  }
  @media (min-width: ${(_) => _.theme.breakpoints.lg}) {
    width: 100%;
    max-width: 1200px;
  }
`;

export default Container;
