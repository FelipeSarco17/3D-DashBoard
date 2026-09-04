import type { TextareaHTMLAttributes } from 'react'
import type { RegisterOptions } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'
import Label from './Label'

interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'name'> {
  name: string
  label?: string
  rules?: RegisterOptions
  required?: boolean
}

const TextArea = ({
  name,
  label,
  rules,
  required = false,
  className = '',
  rows = 4,
  ...rest
}: TextAreaProps) => {
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
      <textarea
        id={name}
        rows={rows}
        className={`rounded-lg border px-3 py-2 text-sm text-gray-700 outline-none transition-colors focus:ring-2 ${
          error
            ? 'border-danger/50 focus:ring-danger/30'
            : 'border-neonPurple/30 focus:border-neonPurple focus:ring-neonCyan/30'
        } ${className}`}
        {...register(name, {
          ...(required && { required: 'Este campo es obligatorio' }),
          ...rules,
        })}
        {...rest}
      />
      {error && <span className="text-xs text-red-700">{error}</span>}
    </div>
  )
}

export default TextArea