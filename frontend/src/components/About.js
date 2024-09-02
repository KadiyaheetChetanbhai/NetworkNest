import React, { useState } from 'react';
import axios from 'axios';
import { Box, Button, TextField } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AxiosInstance from './AxiosInstance';
import MyMessage from './Message';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();
    const { handleSubmit, control, reset } = useForm();

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            console.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'networkmedia');  // Use your Cloudinary preset

        setUploading(true);

        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dt5n81vtw/upload', formData);
            setUploadedUrl(response.data.secure_url);
            setUploading(false);
        } catch (error) {
            console.error('Upload error:', error.response ? error.response.data : error.message);
            setUploading(false);
        }
    };

    
    const onSubmit = async (data) => {
        if (!uploadedUrl) {
            await handleUpload();
        }

        if (uploadedUrl) {
            AxiosInstance.post('posts/Create/', {
                title: data.title,
                caption: data.caption,
                Media_url: uploadedUrl,
                blog_content: data.blog_content
            })
                .then((response) => {
                    console.log(response);
                    setShowMessage(false);
                    reset();
                    navigate('/home');
                })
                .catch((error) => {
                    setShowMessage(true);
                    console.error('Error during post creation', error);
                });
        }
    };


    return (
        <div>
            {showMessage && <MyMessage text={"Post has not been created"} color={'#EC5A76'} />}

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ p: 2, m: 2, boxShadow: 3 }}>
                    <Box className={"itemBox"}>
                        <Controller
                            name="title"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            )}
                        />
                    </Box>

                    <Box className={"itemBox"}>
                        <Controller
                            name="caption"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Caption"
                                    variant="outlined"
                                    fullWidth
                                    required
                                />
                            )}
                        />
                    </Box>

                    <Box className={"itemBox"}>
                        <Controller
                            name="blog_content"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Blog Content"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    required
                                />
                            )}
                        />
                    </Box>

                    <Box className={"itemBox"}>
                        <input type="file" onChange={handleFileChange} required />
                        <Button
                            onClick={handleUpload}
                            variant="contained"
                            color="primary"
                            disabled={uploading}
                            sx={{ mt: 2 }}
                        >
                            {uploading ? 'Uploading...' : 'Upload Image'}
                        </Button>
                    </Box>

                    <Box className={"itemBox"}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            fullWidth
                            sx={{ mt: 2 }}
                            disabled={!file || uploading}
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </form>
        </div>
    );
};

export default UploadForm;
