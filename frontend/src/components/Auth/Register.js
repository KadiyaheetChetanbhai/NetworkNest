

import '../../App.css'
import { Box } from '@mui/material'
import MyTextField from '../forms/MyTextField'
import MyPassField from '../forms/MyPassField'
import MyButton from '../forms/MyButton'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AxiosInstance from '../AxiosInstance'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const Register = () => {
    const navigate = useNavigate()

    const schema = yup
        .object({
            email: yup.string().email('Field expects an email address').required('Email is a required field'),
            username: yup.string().required('Username is a required field').min(4, 'Username must be at least 4 characters'),
            bio: yup.string(),
            password: yup.string()
                .required('Password is a required field')
                .min(4, 'Password must be at least 4 characters')
                .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
                .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                .matches(/[0-9]/, 'Password must contain at least one number')
                .matches(/[!@#$%^&*(),.?":;{}|<>+]/, 'Password must contain at least one special character'),
            password2: yup.string().required('Password confirmation is a required field')
                .oneOf([yup.ref('password'), null], 'Passwords must match')
        })

    const { handleSubmit, control } = useForm({ resolver: yupResolver(schema) })

    const submission = (data) => {
        AxiosInstance.post('register/', {
            email: data.email,
            password: data.password,
            username: data.username,
            bio: data.bio,
        })
            .then(() => {
                navigate('/login')
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form 
                onSubmit={handleSubmit(submission)} 
                className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md"
            >
                <div className="text-2xl font-semibold text-center mb-6 text-gray-800">User Registration</div>
                
                <div className="mb-4">
                    <MyTextField
                        label="Email"
                        name="email"
                        control={control}
                        className="w-80"   
                    />
                </div>

                <div className="mb-4">
                    <MyTextField
                        label="Username"
                        name="username"
                        control={control}
                        className="w-80"  
                    />
                </div>

                <div className="mb-4">
                    <MyTextField
                        label="Bio"
                        name="bio"
                        control={control}
                        className="w-80"  
                    />
                </div>

                <div className="mb-4">
                    <MyPassField
                        label="Password"
                        name="password"
                        control={control}
                        className="w-80"  
                    />
                </div>

                <div className="mb-4">
                    <MyPassField
                        label="Confirm Password"
                        name="password2"
                        control={control}
                        className="w-80"  
                    />
                </div>

                <div className="mb-6">
                    <MyButton
                        type="submit"
                        label="Register"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-lg font-semibold"
                    />
                </div>

                <div className="text-center">
                    <Link to="/" className="text-blue-600 hover:underline">
                        Already registered? Please login!
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Register
