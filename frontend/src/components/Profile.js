import AxiosInstance from './AxiosInstance';
import { React, useEffect, useState } from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [myData, setMyData] = useState(null); // Initialize as null since it's a single object
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // For handling errors
    const [ownsCompany, setOwnsCompany] = useState(false); // State to handle company ownership
    const navigate = useNavigate();
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

    const handleCompanyButtonClick = () => {
        setOwnsCompany(true);
        // You can add more logic here if you need to handle company ownership in any other way.
        console.log("User clicked the 'Do you own a company?' button");
    };

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

                
                   
                    <button onClick={() => navigate('/companyadd')}>Click To add Your Company</button>

                    <Button variant="contained"
                        color="primary"
                        sx={{ mt: 2 }} // Add some margin top for spacing
                        onClick={()=>{navigate('/legaldata')}}>Add legal data
                    </Button>
                    
                    <Button variant="contained"
                        color="primary"
                        sx={{ mt: 2 }} // Add some margin top for spacing
                        onClick={()=>{navigate('/findata')}}>Add Fin data
                    </Button>
                </Box>
            ) : (
                <p>No data available</p>
            )}
        </div>
    );
};

export default Home;
