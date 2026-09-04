import type { ReactNode, SelectHTMLAttributes } from 'react'
import type { RegisterOptions } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import Label from './Label'

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'name'> {
  name: string
  label?: string
  rules?: RegisterOptions
  required?: boolean
  children: ReactNode
}

const Select = ({
  name,
  label,
  rules,
  required = false,
  children,
  className = '',
  ...rest
}: SelectProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const error = errors[name]?.message as string | undefined

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
      )}
      <select
        id={name}
        className={`rounded-lg border bg-white px-3 py-2 text-sm text-gray-700 outline-none transition-colors focus:ring-2 ${
          error
            ? 'border-danger/50 focus:ring-danger/30'
            : 'border-neonPurple/30 focus:border-neonPurple focus:ring-neonCyan/30'
        } ${className}`}
        {...register(name, {
          ...(required && { required: 'Este campo es obligatorio' }),
          ...rules,
        })}
        {...rest}
      >
        {children}
      </select>
      {error && <span className="text-xs text-red-700">{error}</span>}
    </div>
  )
}

export default Select