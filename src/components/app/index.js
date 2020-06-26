import React, { Suspense as OnDemand } from 'react';
import { Switch as Routes, Route } from 'react-router-dom';

import { Style } from 'components';
import { Home, NotFound } from 'components/pages';
import { Loader } from 'components/widgets';

export const App = () => (
  <OnDemand fallback={<Loader />}>
    <Style />
    <Routes>
      <Route path="/" component={Home} exact />
      <Route path="*" component={NotFound} />
    </Routes>
  </OnDemand>
);

App.propTypes = {};

App.defaultProps = {};

export default App;
