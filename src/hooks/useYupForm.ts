import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, UseFormProps, UseFormReturn } from 'react-hook-form'
import { InferType, ObjectSchema } from 'yup'

type UseyupFormProps<T extends ObjectSchema<any>> = Omit<UseFormProps<InferType<T>>, 'resolver'> & {
  schema: T
}

export function UseyupForm<T extends ObjectSchema<any>>({
  schema,
  ...formConfig
}: UseyupFormProps<T>): UseFormReturn<InferType<T>> {
  return useForm<InferType<T>>({
    ...formConfig,
    resolver: yupResolver(schema)
  })
}
