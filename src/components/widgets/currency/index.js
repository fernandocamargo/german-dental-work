import { number, oneOfType, string } from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import withStyle from './style';

export const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const Currency = ({ className, children }) => {
  const parts = useMemo(() => formatter.formatToParts(Number(children)), [
    children,
  ]);
  const renderPart = useCallback(
    ({ type, value }, index) => (
      <span key={index} aria-roledescription={type}>
        {value}
      </span>
    ),
    []
  );

  return <span className={className}>{parts.map(renderPart)}</span>;
};

Currency.propTypes = {
  className: string.isRequired,
  children: oneOfType([number.isRequired, string.isRequired]).isRequired,
};

Currency.defaultProps = {};

export default withStyle(Currency);
