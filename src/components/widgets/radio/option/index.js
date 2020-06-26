import { bool, number, oneOfType, string } from 'prop-types';
import React, { useCallback, useMemo } from 'react';

import withStyle from './style';

export const Option = ({
  onChange: change,
  className,
  name,
  value,
  checked,
}) => {
  const id = useMemo(() => JSON.stringify({ name, value }), [name, value]);
  const onChange = useCallback(({ target: { value } }) => change(value), [
    change,
  ]);

  return (
    <div className={className}>
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

Option.propTypes = {
  className: string.isRequired,
  name: string.isRequired,
  value: oneOfType([string.isRequired, number.isRequired]).isRequired,
  checked: bool,
};

Option.defaultProps = {
  checked: false,
};

export default withStyle(Option);
