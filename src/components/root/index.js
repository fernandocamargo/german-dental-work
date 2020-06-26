import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider as Database } from '@apollo/react-hooks';
import { ThemeProvider as Theming } from 'styled-components';

import { GraphQL as client } from 'clients';
import theme from 'theme';
import { App } from 'components';

export const Root = () => (
  <Router>
    <Database client={client}>
      <Theming theme={theme}>
        <App />
      </Theming>
    </Database>
  </Router>
);

Root.propTypes = {};

Root.defaultProps = {};

export default Root;
