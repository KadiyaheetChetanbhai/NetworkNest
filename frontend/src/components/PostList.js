import React, { useEffect, useState } from 'react';
import AxiosInstance from './AxiosInstance'; // Your configured Axios instance
import { Grid, Box, Button } from '@mui/material';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        AxiosInstance.get('/posts/Post_part/')
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching posts', error);
            });
    }, []);

    const handleDelete = (postId) => {
        AxiosInstance.delete(`/posts/Post_part/${postId}/`)
            .then(() => {
                setPosts(posts.filter(post => post.post_id !== postId));
            })
            .catch((error) => {
                console.error('Error deleting post', error);
            });
    };

    return (
        <Grid container spacing={3}>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <Grid item xs={12} sm={6} md={4} key={post.post_id}>
                        <Box sx={{ p: 2, m: 2, boxShadow: 3 }}>
                            <img
                                src={post.Media_url}
                                alt={post.title}
                                style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                            />
                            <h3>{post.title}</h3>
                            <p>{post.caption}</p>
                            <p>{post.blog_content}</p>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleDelete(post.post_id)}
                            >
                                Delete
                            </Button>
                        </Box>
                    </Grid>
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </Grid>
    );
};

export default PostsList;
