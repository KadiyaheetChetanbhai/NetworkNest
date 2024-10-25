import { React, useEffect, useState } from 'react';
import AxiosInstance from '../AxiosInstance'; // Your configured Axios instance
import { Box, TextField, Button, Typography } from '@mui/material';

const CompanyComponent = () => {
    const [companies, setCompanies] = useState([]);  // State to store list of companies
    const [companyName, setCompanyName] = useState(''); // State to store new company input
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // For handling errors

    // Function to fetch companies data
    const fetchCompanies = () => {
        setLoading(true);
        AxiosInstance.get('/company/myCompany/') // Adjust the endpoint based on your API
            .then((res) => {
                setCompanies(res.data); // Assuming the response is a list of companies
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    };

    // Fetch companies on component mount
    useEffect(() => {
        fetchCompanies();
    }, []);

    return (
        <Box sx={{ p: 2, m: 2 }}>
            <Typography variant="h4" gutterBottom>
                Companies List
            </Typography>

            {/* Display loading state */}
            {loading && <p>Loading companies...</p>}

            {/* Display error if any */}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {/* List of companies */}
            {companies.length > 0 ? (
                <Box>
                    {companies.map((company) => (
                        <Box key={company.company_id} sx={{ mb: 2, p: 2, boxShadow: 2 }}>
                            <Typography variant="h6">Company Name: {company.company_name}</Typography>
                            <Typography variant="body2">Owned by: {company.owned_by}</Typography>
                        </Box>
                    ))}
                </Box>
            ) : (
                <p>No companies available.</p>
            )}
            </Box>

    );
};

export default CompanyComponent;
