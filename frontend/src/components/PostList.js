import React, { useEffect, useState } from 'react';
import AxiosInstance from './AxiosInstance'; // Your configured Axios instance
import { Grid, Box, Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [commentDialogOpen, setCommentDialogOpen] = useState(false);
    const [currentPost, setCurrentPost] = useState(null);
    const [commentText, setCommentText] = useState('');

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

    const handleLike = (postId) => {
        AxiosInstance.post(`/posts/Post_part/${postId}/`)
            .then((response) => {
                // Optionally fetch posts again or update the state to reflect the new like
                setPosts(posts.map(p => (p.post_id === postId ? { ...p, likes: [...p.likes, response.data.user_id] } : p)));
                console.log('Post liked', response.data);
            })
            .catch((error) => {
                console.error('Error liking post', error);
            });
    };
    const handleOpenCommentDialog = (post) => {
        setCurrentPost(post);
        setCommentText('');
        setCommentDialogOpen(true);
    };

    const handleCloseCommentDialog = () => {
        setCommentDialogOpen(false);
        setCurrentPost(null);
    };

    const handleCommentSubmit = () => {
        AxiosInstance.post('posts/comments/', {
            post: currentPost.post_id,
            comment_text: commentText,
        })
            .then(() => {
                handleCloseCommentDialog();
                // Optionally fetch posts again or update the state to reflect the new comment
            })
            .catch((error) => {
                console.error('Error submitting comment', error);
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
                                color="primary"
                                onClick={() => handleLike(post.post_id)}
                                sx={{ mr: 1 }}
                            >
                                Like
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                onClick={() => handleOpenCommentDialog(post)}
                                sx={{ mr: 1 }}
                            >
                                Comment
                            </Button>
                            <Button
                                variant="contained"
                                color="error"
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

            {/* Comment Dialog */}
            <Dialog open={commentDialogOpen} onClose={handleCloseCommentDialog}>
                <DialogTitle>Add a Comment</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Comment"
                        type="text"
                        fullWidth
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseCommentDialog}>Cancel</Button>
                    <Button onClick={handleCommentSubmit}>Submit</Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default PostsList;
