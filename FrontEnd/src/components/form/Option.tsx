import type { OptionHTMLAttributes, ReactNode } from 'react'

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement> {
  children: ReactNode
}

const Option = ({ children, ...rest }: OptionProps) => {
  return <option {...rest}>{children}</option>
}

export default Option