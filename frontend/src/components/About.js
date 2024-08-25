import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');
    const [videoContent, setVideoContent] = useState(null);
    const [imageContent, setImageContent] = useState(null);
    const [Blobs_Content, setBlobsContent] = useState('');

    // Handle the form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Create form data to handle files
        const formData = new FormData();
        formData.append('title', title);
        formData.append('caption', caption);
        formData.append('Video_content', videoContent);
        formData.append('Image_content', imageContent);
        formData.append('Blobs_content', Blobs_Content);

        try {
            const response = await axios.post('http://127.0.0.1:8000/posts/Createpost/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Post created successfully', response.data);
        } catch (error) {
            console.error('There was an error creating the post!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Caption:</label>
                <textarea
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                />
            </div>

            <div>
                <label>Video Content:</label>
                <input
                    type="file"
                    accept="video/*"
                    onChange={(e) => setVideoContent(e.target.files[0])}
                />
            </div>

            <div>
                <label>Image Content:</label>
                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImageContent(e.target.files[0])}
                />
            </div>

            <div>
                <label>Blobs Content:</label>
                <textarea
                    value={Blobs_Content}
                    onChange={(e) => setBlobsContent(e.target.value)}
                />
            </div>

            <button type="submit">Create Post</button>
        </form>
    );
};

export default CreatePost;
