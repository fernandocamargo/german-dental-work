import { string } from 'prop-types';
import React from 'react';

import { Loader } from 'components/widgets';

import { useHome } from './hooks';
import Form from './form';
import withStyle from './style';

export const Home = ({ className }) => {
  const { loading, ...form } = useHome();

  return (
    <section className={className}>
      <h1>
        Configure o plano que <strong>melhor encaixa na sua rotina.</strong>
      </h1>
      {loading ? <Loader /> : <Form {...form} />}
    </section>
  );
};

Home.propTypes = {
  className: string.isRequired,
};

Home.defaultProps = {};

export default withStyle(Home);
