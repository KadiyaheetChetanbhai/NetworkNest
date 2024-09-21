// JobApplication.js
import React, { useState } from 'react';
import AxiosInstance from './AxiosInstance'; // Your configured Axios instance

import { useParams } from 'react-router-dom';

const JobApplication = () => {
    const { hiringId } = useParams();
    const [resume, setResume] = useState(null);
    const [coverLetter, setCoverLetter] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('hiring', hiringId);
        formData.append('resume', resume);
        formData.append('cover_letter', coverLetter);

        await   AxiosInstance.post('/jobs/applications/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        alert('Application submitted!');
    };

    return (
        <div>
            <h1>Apply for Job</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Resume:</label>
                    <input
                        type="file"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                    />
                </div>
                <div>
                    <label>Cover Letter:</label>
                    <textarea
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                    />
                </div>
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default JobApplication;
