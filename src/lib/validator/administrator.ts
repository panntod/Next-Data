import * as yup from 'yup'

export const CreateAdministratorSchema = yup.object({
  name: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required(),
  password: yup.string().min(8, 'Min 8 chars').required(),
  role: yup.string()
})

export const UpdateAdministratorSchema = yup.object({
  name: yup.string().required('Name is required'),
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required(),
  password: yup.string().min(8, 'Min 8 chars').required(),
  role: yup.string()
})
