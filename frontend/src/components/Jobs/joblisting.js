// // JobListings.js
// import React, { useEffect, useState } from 'react';
// import AxiosInstance from '../AxiosInstance'; // Your configured Axios instance


// const JobListings = () => {
//     const [hirings, setHirings] = useState([]);

//     useEffect(() => {
//         const fetchHirings = async () => {
//             const response = await AxiosInstance.get('/jobs/hirings/');
//             setHirings(response.data);
//         };
//         fetchHirings();
//     }, []);

//     return (
//         <div>
//             <h1>Job Listings</h1>
//             <ul>
//                 {hirings.map((hiring) => (
//                     <li key={hiring.id}>
//                         <h2>{hiring.title}</h2>
//                         <p>{hiring.description}</p>
//                         <p>Company: {hiring.company_name}</p>
//                         <p>Location: {hiring.location}</p>
//                         <p>Salary: ${hiring.salary}</p>
//                         <button onClick={() => alert(Apply for ${hiring.title})}>Apply Now</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default JobListings;

// JobListings.js
import React, { useEffect, useState } from 'react';
import AxiosInstance from '../AxiosInstance'; // Your configured Axios instance

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
        <>
        <div className="min-h-screen bg-gray-100 py-8">
            <h1 className="text-3xl font-bold text-center mb-8 text-gray-700">
                Job Listings
            </h1>
            <ul className="max-w-4xl mx-auto space-y-6">
                {hirings.map((hiring) => (
                    <li 
                        key={hiring.id} 
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{hiring.title}</h2>
                        <p className="text-gray-600 mb-2">{hiring.description}</p>
                        <p className="text-gray-800 mb-1">
                            <span className="font-semibold">Company:</span> {hiring.company_name}
                        </p>
                        <p className="text-gray-800 mb-1">
                            <span className="font-semibold">Location:</span> {hiring.location}
                        </p>
                        <p className="text-gray-800 mb-4">
                            <span className="font-semibold">Salary:</span> ${hiring.salary}
                        </p>
                        <button 
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            onClick={() => alert('Apply for'+`${hiring.title}`)}> Apply Now</button>
                    </li>
                ))}
            </ul>
        </div>
        </>

    );
};

export default JobListings;
