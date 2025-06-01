import * as yup from 'yup'

export const LoginSchema = yup.object({
  email: yup.string().email('Invalid email').required(),
  password: yup.string().min(8, 'Min 8 chars').required()
})
