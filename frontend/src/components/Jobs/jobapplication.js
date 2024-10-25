// JobApplication.js
import React, { useState } from 'react';
import AxiosInstance from '../AxiosInstance'; // Your configured Axios instance
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

        await AxiosInstance.post('/jobs/applications/', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        alert('Application submitted!');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form 
                onSubmit={handleSubmit}
                className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
            >
                <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Apply for Job
                </h1>

                <div className="mb-4">
                    <label className="block text-gray-600 font-medium mb-2">Resume:</label>
                    <input
                        type="file"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-600 font-medium mb-2">Cover Letter:</label>
                    <textarea
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:ring-blue-300"
                    />
                </div>

                <button 
                    type="submit" 
                    className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default JobApplication;
