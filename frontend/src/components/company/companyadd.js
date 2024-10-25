import { React, useState } from 'react';
import AxiosInstance from '../AxiosInstance'; // Your configured Axios instance
import { Box, TextField, Button, Typography } from '@mui/material';

const CompanyComponent = () => {
    const [companyName, setCompanyName] = useState(''); // State to store new company input
    const [error, setError] = useState(null); // For handling errors
    const [successMessage, setSuccessMessage] = useState(null); // For success feedback

    // Function to handle form submission for new company
    const handleCreateCompany = (e) => {
        e.preventDefault(); // Prevent form default submit behavior

        AxiosInstance.post('/company/myCompany/', {
            company_name: companyName
        })
            .then((res) => {
                setSuccessMessage(`Company "${res.data.company_name}" created successfully!`);
                setCompanyName(''); // Clear the input field
                setError(null); // Clear any existing errors
            })
            .catch((err) => {
                setError(err.message);
                setSuccessMessage(null); // Clear success message on error
            });
    };

    return (
        <Box sx={{ p: 2, m: 2 }}>
            <Typography variant="h4" gutterBottom>
                Create a Company
            </Typography>

            {/* Display error if any */}
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            {/* Display success message if the company is created */}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

            {/* Form to create a new company */}
            <Box component="form" onSubmit={handleCreateCompany} sx={{ mt: 4 }}>
                <TextField
                    label="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    fullWidth
                    sx={{ mb: 2 }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    disabled={!companyName.trim()} // Disable button if input is empty
                >
                    Create Company
                </Button>
            </Box>
        </Box>
    );
};

export default CompanyComponent;
