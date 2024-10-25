import React, { useEffect, useState } from 'react';
import AxiosInstance from '../AxiosInstance'; // Your configured Axios instance
import { Box, Typography, Grid } from '@mui/material';

const LegalData = () => {
    const [legalData, setLegalData] = useState([]);

    useEffect(() => {
        AxiosInstance.get('legal_financial/LegalData/')  // Adjust the URL according to your Django REST Framework API route
            .then(response => {
                setLegalData(response.data);
            })
            .catch(error => {
                console.error('Error fetching legal data:', error);
            });
    }, []);

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" mb={3}>Legal Data</Typography>
            {legalData.length === 0 ? (
                <Typography>No legal data available.</Typography>
            ) : (
                <Grid container spacing={3}>
                    {legalData.map(legal => (
                        <Grid item xs={12} md={6} key={legal.l_id}>
                            <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
                                <Typography variant="h6">User: {legal.user}</Typography>
                                <Typography>Case Name: {legal.case_name}</Typography>
                                <Typography>Case Description: {legal.case_description}</Typography>
                                <Typography>Date Posted: {new Date(legal.date_posted).toLocaleDateString()}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default LegalData;
