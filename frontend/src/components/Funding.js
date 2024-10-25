// src/components/FundingList.js
import React, { useEffect, useState } from 'react';
import AxiosInstance from './AxiosInstance'; // Your configured Axios instance
import {
    Grid,
    Box,
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    IconButton,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const FundingList = () => {
    const [fundings, setFundings] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentFunding, setCurrentFunding] = useState(null);
    const [formData, setFormData] = useState({
        Funding_for: '',
        Amount: '',
        Description: '',
        Funding_providedBy: '',
    });
    const [error, setError] = useState('');

    // Fetch funding entries on component mount
    useEffect(() => {
        fetchFundings();
    }, []);

    const fetchFundings = () => {
        AxiosInstance.get('/funding/raise_funding/')
            .then((response) => {
                setFundings(response.data);
            })
            .catch((error) => {
                console.error('Error fetching fundings', error);
                setError('Failed to fetch funding entries.');
            });
    };

    const handleDelete = (fundingId) => {
        if (window.confirm('Are you sure you want to delete this funding entry?')) {
            AxiosInstance.delete(`/funding/raise_funding/${fundingId}/`)
                .then(() => {
                    setFundings(fundings.filter((funding) => funding.Funding_id !== fundingId));
                })
                .catch((error) => {
                    console.error('Error deleting funding', error);
                    setError('Failed to delete funding entry.');
                });
        }
    };

    const handleEdit = (funding) => {
        setIsEditing(true);
        setCurrentFunding(funding);
        setFormData({
            Funding_for: funding.Funding_for,
            Amount: funding.Amount,
            Description: funding.Description,
            Funding_providedBy: funding.Funding_providedBy ? funding.Funding_providedBy : '',
        });
        setDialogOpen(true);
    };

    const handleOpenCreateDialog = () => {
        setIsEditing(false);
        setCurrentFunding(null);
        setFormData({
            Funding_for: '',
            Amount: '',
            Description: '',
            Funding_providedBy: '',
        });
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
        setCurrentFunding(null);
        setFormData({
            Funding_for: '',
            Amount: '',
            Description: '',
            Funding_providedBy: '',
        });
        setError('');
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFormSubmit = () => {
        const payload = {
            Funding_for: formData.Funding_for,
            Amount: parseInt(formData.Amount, 10),
            Description: formData.Description,
            Funding_providedBy: formData.Funding_providedBy ? formData.Funding_providedBy : null,
        };

        if (isEditing && currentFunding) {
            AxiosInstance.put(`/funding/raise_funding/${currentFunding.Funding_id}/`, payload)
                .then((response) => {
                    setFundings(
                        fundings.map((funding) =>
                            funding.Funding_id === currentFunding.Funding_id ? response.data : funding
                        )
                    );
                    handleCloseDialog();
                })
                .catch((error) => {
                    console.error('Error updating funding', error);
                    setError('Failed to update funding entry.');
                });
        } else {
            AxiosInstance.post('/funding/raise_funding/', payload)
                .then((response) => {
                    setFundings([response.data, ...fundings]);
                    handleCloseDialog();
                })
                .catch((error) => {
                    console.error('Error creating funding', error);
                    setError('Failed to create funding entry.');
                });
        }
    };

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom>
                Funding Requests
            </Typography>
            <Button variant="contained" color="primary" onClick={handleOpenCreateDialog} sx={{ mb: 2 }}>
                Create New Funding
            </Button>
            {error && (
                <Typography variant="body1" color="error" gutterBottom>
                    {error}
                </Typography>
            )}
            <Grid container spacing={3}>
                {fundings.length > 0 ? (
                    fundings.map((funding) => (
                        <Grid item xs={12} sm={6} md={4} key={funding.Funding_id}>
                            <Box sx={{ p: 2, boxShadow: 3, borderRadius: 2 }}>
                                <Typography variant="h6">{funding.Funding_for}</Typography>
                                <Typography variant="body1">
                                    <strong>Amount:</strong> ${funding.Amount}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>Description:</strong> {funding.Description}
                                </Typography>
                                <Typography variant="body2">
                                    <strong>Requested By:</strong> {funding.Funding_RequestedBy}
                                </Typography>
                                {funding.Funding_providedBy && (
                                    <Typography variant="body2">
                                        <strong>Provided By:</strong> {funding.Funding_providedBy}
                                    </Typography>
                                )}
                                <Typography variant="body2" color="textSecondary">
                                    <strong>Posted At:</strong> {new Date(funding.posted_at).toLocaleString()}
                                </Typography>
                                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                                    <IconButton
                                        color="primary"
                                        onClick={() => handleEdit(funding)}
                                        aria-label="edit funding"
                                    >
                                        <Edit />
                                    </IconButton>
                                    <IconButton
                                        color="error"
                                        onClick={() => handleDelete(funding.Funding_id)}
                                        aria-label="delete funding"
                                    >
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </Box>
                        </Grid>
                    ))
                ) : (
                    <Typography variant="body1">No funding requests available.</Typography>
                )}
            </Grid>

            {/* Funding Form Dialog */}
            <Dialog open={dialogOpen} onClose={handleCloseDialog} fullWidth maxWidth="sm">
                <DialogTitle>{isEditing ? 'Edit Funding' : 'Create Funding'}</DialogTitle>
                <DialogContent>
                    <TextField
                        margin="dense"
                        label="Funding For"
                        name="Funding_for"
                        type="text"
                        fullWidth
                        variant="outlined"
                        value={formData.Funding_for}
                        onChange={handleFormChange}
                        required
                    />
                    <TextField
                        margin="dense"
                        label="Amount"
                        name="Amount"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={formData.Amount}
                        onChange={handleFormChange}
                        required
                        inputProps={{ min: 1 }}
                    />
                    <TextField
                        margin="dense"
                        label="Description"
                        name="Description"
                        type="text"
                        fullWidth
                        variant="outlined"
                        multiline
                        rows={4}
                        value={formData.Description}
                        onChange={handleFormChange}
                        required
                    />
                    <TextField
                        margin="dense"
                        label="Funding Provided By (User ID)"
                        name="Funding_providedBy"
                        type="number"
                        fullWidth
                        variant="outlined"
                        value={formData.Funding_providedBy}
                        onChange={handleFormChange}
                        helperText="Leave blank if not provided yet."
                        inputProps={{ min: 1 }}
                    />
                    {error && (
                        <Typography variant="body2" color="error" gutterBottom>
                            {error}
                        </Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button variant="contained" color="primary" onClick={handleFormSubmit}>
                        {isEditing ? 'Update' : 'Create'}
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default FundingList;
