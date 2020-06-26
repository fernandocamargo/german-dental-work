import { node, string } from 'prop-types';
import React, { useCallback } from 'react';

import Option from './option';
import withStyle from './style';

export const Radio = ({
  className,
  name,
  options,
  value,
  onChange,
  children,
}) => {
  const renderOption = useCallback(
    option => {
      const checked = option === value;

      return (
        <Option
          key={option}
          name={name}
          value={option}
          checked={checked}
          onChange={onChange}
        />
      );
    },
    [name, value, onChange]
  );

  return (
    <div className={className} aria-roledescription={name}>
      <h4>{children}</h4>
      <div aria-roledescription="options">{options.map(renderOption)}</div>
    </div>
  );
};

Radio.propTypes = {
  className: string.isRequired,
  name: string.isRequired,
  children: node.isRequired,
};

Radio.defaultProps = {
  options: [],
};

export default withStyle(Radio);
