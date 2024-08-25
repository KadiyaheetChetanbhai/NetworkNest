import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [caption, setCaption] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = () => {
        if (!file) {
            console.error("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'networkmedia');  // Use the name of your preset here

        axios.post('https://api.cloudinary.com/v1_1/dt5n81vtw/upload', formData)
            .then(response => {
                console.log('Upload success:', response.data);
                // Handle success (e.g., send URL to your backend)
            })
            .catch(error => {
                console.error('Upload error:', error.response ? error.response.data : error.message);
            });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
            />
            <input
                type="file"
                onChange={handleFileChange}
            />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default UploadForm;
