import type { ReactNode, ButtonHTMLAttributes } from 'react'

type ButtonColor = 'red' | 'green' | 'yellow' | 'primary'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  color: ButtonColor
}

const colorStyles: Record<ButtonColor, string> = {
  red: 'bg-danger/15 text-red-700 border border-danger/30 hover:bg-danger/25',
  green: 'bg-success/15 text-green-700 border border-success/30 hover:bg-success/25',
  yellow: 'bg-warning/15 text-yellow-700 border border-warning/30 hover:bg-warning/25',
  primary: 'bg-primary text-white border border-primary/30 hover:bg-primary/90',
}

const Button = ({ children, color, className = '', ...rest }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${colorStyles[color]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button