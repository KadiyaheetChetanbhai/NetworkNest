// JobListings.js
import React, { useEffect, useState } from 'react';
import AxiosInstance from './AxiosInstance'; // Your configured Axios instance


const JobListings = () => {
    const [hirings, setHirings] = useState([]);

    useEffect(() => {
        const fetchHirings = async () => {
            const response = await AxiosInstance.get('/jobs/hirings/');
            setHirings(response.data);
        };
        fetchHirings();
    }, []);

    return (
        <div>
            <h1>Job Listings</h1>
            <ul>
                {hirings.map((hiring) => (
                    <li key={hiring.id}>
                        <h2>{hiring.title}</h2>
                        <p>{hiring.description}</p>
                        <p>Company: {hiring.company_name}</p>
                        <p>Location: {hiring.location}</p>
                        <p>Salary: ${hiring.salary}</p>
                        <button onClick={() => alert(`Apply for ${hiring.title}`)}>Apply Now</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobListings;
