import React from 'react';

const Button = (props) => {

  const { children, onClick } = props;

  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;