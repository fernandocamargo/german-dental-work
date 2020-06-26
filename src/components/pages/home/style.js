import styled from 'styled-components';

export default component => styled(component)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  h1 {
    font-size: 1.5625rem;
    text-align: center;

    strong {
      display: block;
      font-weight: 500;
    }
  }
`;
