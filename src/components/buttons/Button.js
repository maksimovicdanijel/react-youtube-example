import React from 'react';

const Button = ({ type, ...props }) => {
  let className = 'btn';

  switch(type) {
    case 'primary':
      className += ' btn-primary';
      break;
    default:
      break;
  }

  return (
    <button className={className} {...props}>{props.children}</button>
  );
};

export default Button;