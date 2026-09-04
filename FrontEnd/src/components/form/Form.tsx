import type { ReactNode } from 'react'
import type { DefaultValues, FieldValues, SubmitHandler } from 'react-hook-form'
import { FormProvider, useForm } from 'react-hook-form'

interface FormProps<TFormValues extends FieldValues> {
  children: ReactNode
  onSubmit: SubmitHandler<TFormValues>
  defaultValues?: DefaultValues<TFormValues>
  className?: string
}

const Form = <TFormValues extends FieldValues>({
  children,
  onSubmit,
  defaultValues,
  className = '',
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({ defaultValues })

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
        className={`flex flex-col gap-4 ${className}`}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export default Form