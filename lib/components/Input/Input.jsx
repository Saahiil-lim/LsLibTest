import React from 'react'
/**
 * Input component
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