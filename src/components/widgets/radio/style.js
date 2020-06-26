import styled from 'styled-components';

import Option from './option';

export default component => styled(component)`
  h4 {
    align-items: flex-start;
    color: #49ad33;
    display: flex;
    flex-direction: row;
    font-size: 1rem;
    justify-content: center;
    line-height: 1.1875rem;
  }

  div[aria-roledescription='options'] {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 32px;

    ${Option} {
      &:not(:first-child) {
        margin-left: 13.93px;
      }
    }
  }
`;
