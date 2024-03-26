import  { ButtonHTMLAttributes, ReactNode } from 'react';
import PropTypes from 'prop-types';
/**
 * Button component
 * @param {object} props - Component props
 * @param {ReactNode} props.leftDecor - Left decorator for the button
 * @param {ReactNode} props.rightDecor - Right decorator for the button
 * @param {string} props.text - Text content for the button (required)
 * @returns {JSX.Element} Button component
 */
interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  leftDecor?: ReactNode;
  rightDecor?: ReactNode;
  text: string;
}

const Button = ({ leftDecor, rightDecor, text, ...props }: ButtonBaseProps) => {

  return (
    <div>
      {rightDecor && rightDecor}
      <button {...props}>{text}</button>
      {leftDecor && leftDecor}
    </div>
  );
};

export { Button };