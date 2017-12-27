import React from 'react';

import Button from './Button';

const PrimaryButton = props => {
  return <Button {...props} type="primary">{props.children}</Button>;
};

export default PrimaryButton;