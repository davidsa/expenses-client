import * as yup from 'yup';

export const loginSchema = yup.object({
	email: yup.string().required('Email is required'),
	password: yup.string().required('Password is required')
});

export const registerSchema = yup.object({
	name: yup.string().required('Name is required'),
	lastname: yup.string().required('Lastname is required'),
	email: yup.string().required('Email is required'),
	password: yup.string().required('Password is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref<string>('password')], "Passwords don't match")
		.required('Confirm password is required')
});
