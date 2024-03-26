import React from 'react'
/**
 * Input component
 *  * @component
 * @example
 * // Example usage:
 * // Renders a basic input field with a placeholder and custom class name.
 * <Input
 *   className="custom-input"
 *   placeholder="Enter your name"
 * />
 * 
 * @param {object} props - Component props
 * @param {string} [props.className] - Class name for the input element
 * @returns {JSX.Element} Input component
 */
const Input = ({className,...props}) => {
  return (
    <input type="text" className={className} {...props} />
  )
}

export {Input}