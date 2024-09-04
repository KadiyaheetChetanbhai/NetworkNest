import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import AxiosInstance from './AxiosInstance';
import MyMessage from './Message';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [uploadedUrl, setUploadedUrl] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [posts, setPosts] = useState([]);  // List of posts
    const [selectedPostId, setSelectedPostId] = useState('');  // ID of the selected post
    const navigate = useNavigate();
    const { handleSubmit, control, reset, setValue } = useForm();

    useEffect(() => {
        // Fetch posts to populate the select field for updating or deleting
        AxiosInstance.get('posts/')
            .then((response) => setPosts(response.data))
            .catch((error) => console.error('Error fetching posts', error));
    }, []);

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
        if (!uploadedUrl && !selectedPostId) {
            await handleUpload();
        }

        if (uploadedUrl || selectedPostId) {
            const apiEndpoint = selectedPostId ? `posts/${selectedPostId}/` : 'posts/Create/';
            const method = selectedPostId ? 'put' : 'post';

            AxiosInstance[method](apiEndpoint, {
                title: data.title,
                caption: data.caption,
                Media_url: uploadedUrl || data.Media_url,
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
                    console.error('Error during post creation/update', error);
                });
        }
    };

    const handleDelete = () => {
        if (!selectedPostId) return;

        AxiosInstance.delete(`posts/${selectedPostId}/`)
            .then(() => {
                console.log('Post deleted');
                reset();
                setSelectedPostId('');
                navigate('/home');
            })
            .catch((error) => console.error('Error during post deletion', error));
    };

    const handlePostSelect = (event) => {
        const postId = event.target.value;
        setSelectedPostId(postId);
        
        // Pre-fill the form with the selected post's data
        const selectedPost = posts.find(post => post.post_id === postId);
        if (selectedPost) {
            setValue('title', selectedPost.title);
            setValue('caption', selectedPost.caption);
            setValue('blog_content', selectedPost.blog_content);
            setUploadedUrl(selectedPost.Media_url);
        }
    };

    return (
        <div>
            {showMessage && <MyMessage text={"Post has not been created/updated"} color={'#EC5A76'} />}

            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ p: 2, m: 2, boxShadow: 3 }}>

                    {/* Select Post to Update/Delete */}
                    <FormControl fullWidth sx={{ mb: 2 }}>
                        <InputLabel>Select Post</InputLabel>
                        <Select
                            value={selectedPostId}
                            onChange={handlePostSelect}
                            displayEmpty
                        >
                            <MenuItem value="">
                                <em>Select a post to update or delete</em>
                            </MenuItem>
                            {Array.isArray(posts) && posts.map((post) => (
                                <MenuItem key={post.post_id} value={post.post_id}>
                                    {post.title}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

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
                        <input type="file" onChange={handleFileChange} />
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
                            disabled={uploading}
                        >
                            {selectedPostId ? 'Update Post' : 'Submit'}
                        </Button>
                    </Box>

                    {selectedPostId && (
                        <Box className={"itemBox"}>
                            <Button
                                onClick={handleDelete}
                                variant="contained"
                                color="error"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                Delete Post
                            </Button>
                        </Box>
                    )}
                </Box>
            </form>
        </div>
    );
};

export default UploadForm;
