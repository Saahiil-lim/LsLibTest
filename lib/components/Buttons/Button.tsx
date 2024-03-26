import  { ButtonHTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';

/**
 * Button component
 * @param {object} props - Component props
 * @param {ReactNode} props.leftDecor - Left decorator for the button
 * @param {ReactNode} props.rightDecor - Right decorator for the button
 * @returns {JSX.Element} Button component
 */
interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftDecor?: ReactNode;
  rightDecor?: ReactNode;
}

const Button = ({leftDecor, rightDecor ,...props}: ButtonBaseProps) => {

  return (
    <div>
      {rightDecor && rightDecor}
      <button {...props}>ButtonText</button>
      {leftDecor && leftDecor}
    </div>
  );
};

Button.propTypes = {
  leftDecor: PropTypes.node,
  rightDecor: PropTypes.node,
};

export { Button };
