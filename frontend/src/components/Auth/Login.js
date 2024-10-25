// src/components/Login.js
import React from 'react';
import { Box } from '@mui/material';
import MyTextField from '../forms/MyTextField';
import MyPassField from '../forms/MyPassField';
import MyButton from '../forms/MyButton';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AxiosInstance from '../AxiosInstance';

const Login = () => {
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();

    const submission = (data) => {
        AxiosInstance.post('login/', {
            email: data.email,
            password: data.password,
        })
            .then((response) => {
                console.log(response);
                localStorage.setItem('Token', response.data.token);
                navigate("/home");
            })
            .catch((error) => {
                console.error('Error during login', error);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form 
                onSubmit={handleSubmit(submission)}
                className="w-full max-w-md bg-white p-8 rounded-lg shadow-md"
            >
                <div className="text-center text-2xl font-bold text-gray-700 mb-6">
                    Login for Auth App
                </div>

                <div className="mb-4">
                    <MyTextField
                        label="Email"
                        name="email"
                        control={control}
                        className="w-full"
                    />
                </div>

                <div className="mb-6">
                    <MyPassField
                        label="Password"
                        name="password"
                        control={control}
                        className="w-full"
                    />
                </div>

                <div className="mb-4">
                    <MyButton
                        label="Login"
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    />
                </div>

                <div className="text-center mt-4">
                    <Link 
                        to="/register" 
                        className="text-blue-500 hover:underline"
                    >
                        No account yet? Please register!
                    </Link>
                </div>
            </form>
        </div>
    );
};

export default Login;