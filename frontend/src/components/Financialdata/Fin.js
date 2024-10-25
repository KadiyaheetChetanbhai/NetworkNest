import React, { useEffect, useState } from 'react';
import AxiosInstance from '../AxiosInstance'; // Your configured Axios instance
import { Box, Typography, Grid } from '@mui/material';

const FinancialData = () => {
    const [financialData, setFinancialData] = useState([]);
    const [error, setError] = useState(null); // For handling errors

    useEffect(() => {
        AxiosInstance.get('legal_financial/FinData/') // Adjust the URL according to your Django REST Framework API route
            .then(response => {
                setFinancialData(response.data);
            })
            .catch(error => {
                console.error('Error fetching financial data:', error);
                setError('Error loading financial data.');
            });
    }, []);

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" mb={3}>Financial Data</Typography>
            {error && <Typography color="error">{error}</Typography>} {/* Error message */}
            {financialData.length === 0 ? (
                <Typography>No financial data available.</Typography>
            ) : (
                <Grid container spacing={3}>
                    {financialData.map(financial => (
                        <Grid item xs={12} md={6} key={financial.f_id}>
                            <Box sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
                                <Typography variant="h6">User: {financial.user}</Typography>
                                <Typography>Financial Assets: {financial.financial_assets}</Typography>
                                <Typography>Revenue: {financial.revenue}</Typography>
                                <Typography>Expenses: {financial.expenses}</Typography>
                                <Typography>Net Income: {financial.net_income}</Typography>
                                <Typography>Liquidity Ratios: {financial.liquidity_ratios}</Typography>
                                <Typography>Profitability Ratios: {financial.profitability_ratios}</Typography>
                                <Typography>PAT Margins: {financial.pat_margins}</Typography>
                                <Typography>Date Posted: {new Date(financial.date_posted).toLocaleDateString()}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default FinancialData;
