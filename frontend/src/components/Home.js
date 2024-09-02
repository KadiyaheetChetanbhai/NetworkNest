import AxiosInstance from './AxiosInstance';
import { React, useEffect, useState } from 'react';
import { Box } from '@mui/material';

const Home = () => {
    const [myData, setMyData] = useState(null); // Initialize as null since it's a single object
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // For handling errors

    const GetData = () => {
        AxiosInstance.get(`users/`)
            .then((res) => {
                setMyData(res.data); // Directly set the user object
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        GetData();
    }, []); // Empty dependency array ensures this runs only once on mount

    if (loading) {
        return <p>Loading data...</p>;
    }

    if (error) {
        return <p>Error loading data: {error}</p>;
    }

    return (
        <div>
            {myData ? (
                <Box sx={{ p: 2, m: 2, boxShadow: 3 }}>
                    <div>ID: {myData.id}</div>
                    <div>Email: {myData.email}</div>
                    <div>Username: {myData.username}</div>
                    <div>Bio: {myData.bio}</div>
                </Box>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default Home;
