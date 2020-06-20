import React from 'react';

type ButtonProps = {
  type: 'primary' | 'secondary';
  onClick: () => void;
  id?: string;
  className?: string;
};

const Button: React.FunctionComponent<ButtonProps> = ({
  type,
  onClick,
  id,
  className,
  children,
}) => (
  <button
    id={id}
    className={`riftpay-button ${className ? className : ''} ${
      type === 'primary' ? 'is-primary' : ''
    } button is-rounded`}
    onClick={onClick}>
    {children}
    <style jsx>{`
      button {
        background-color: seagreen;
      }
    `}</style>
  </button>
);

export default Button;
