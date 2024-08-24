import React, { useState } from 'react';
import axios from 'axios';

function MediaUpload() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [video, setVideo] = useState(null);
    const [caption, setCaption] = useState('');
    const [blobs, setBlobs] = useState('');

    const handleFileChange = (e) => {
        if (e.target.name === 'image') {
            setImage(e.target.files[0]);
        } else if (e.target.name === 'video') {
            setVideo(e.target.files[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('caption', caption);
        formData.append('blobs', blobs);
        if (image) formData.append('image', image);
        if (video) formData.append('video', video);

        try {
            await axios.post('http://localhost:8000/posts/Createpost/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Upload successful');
        } catch (error) {
            console.error('Error uploading media', error);
            alert('Upload failed');
        }
    };

    return (
        <div>
            <h1>Upload Media</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Caption:
                    <input
                        type="text"
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                    />
                </label>
                <label>
                    Blobs:
                    <input
                        type="text"
                        value={blobs}
                        onChange={(e) => setBlobs(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Image:
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </label>
                <br />
                <label>
                    Video:
                    <input
                        type="file"
                        name="video"
                        accept="video/*"
                        onChange={handleFileChange}
                    />
                </label>
                <br />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default MediaUpload;
