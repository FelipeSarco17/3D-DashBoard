import type { LabelHTMLAttributes, ReactNode } from 'react'

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
  required?: boolean
}

const Label = ({ children, required = false, className = '', ...rest }: LabelProps) => {
  return (
    <label className={`text-sm font-medium text-gray-700 ${className}`} {...rest}>
      {children}
      {required && <span className="ml-1 text-danger">*</span>}
    </label>
  )
}

export default Label