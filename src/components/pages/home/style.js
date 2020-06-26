import styled from 'styled-components';

import { use } from 'helpers/object';

export default component => styled(component)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 56px;
  width: 100%;

  h1 {
    font-size: 1.875rem;
    line-height: 2.25rem;
    text-align: center;

    strong {
      display: block;
      font-weight: 500;
    }
  }

  ${use('theme.breakpoints.tablet')} {
    h1 {
      font-size: 1.5625rem;
      line-height: 1.8125rem;
    }
  }

  ${use('theme.breakpoints.desktop')} {
    margin-top: 0;
  }
`;
