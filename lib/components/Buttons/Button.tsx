/* eslint-disable @typescript-eslint/no-unused-vars */
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonBaseProps extends ButtonHTMLAttributes<HTMLButtonElement>{
leftDecor?:ReactNode,
rightDecor?:ReactNode
}

const Button = ({leftDecor, rightDecor ,...props}: ButtonBaseProps) => {

  return (
    <div>
        {rightDecor && rightDecor}
        <button {...props}>ButtonText</button>
        {leftDecor &&leftDecor}
    </div>
  )
}
export {Button}