// src/components/MainSection.js
import React from 'react';
import Navbar from '../Navbar';
import { useNavigate } from 'react-router-dom';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import image6 from '../images/image6.jpg';
import nn from '../images/nn.png';

const MainSection = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            {/* Spacer to offset fixed Navbar if necessary */}
            <div className="spacer" style={{ marginTop: '80px' }}></div>

            <div className="flex justify-center items-start py-16 ">
                <div className="flex flex-col  mr-12">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        Investing Today for a Wealthier <br />Tomorrow, Together
                    </h1>
                    <p className="text-lg text-gray-600 mb-8">
                        Over 10 crore investors trust us for their investments
                    </p>
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => navigate('/register')}
                    >
                        Sign Up
                    </button>
                    <br />
                    <button
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded hover:bg-gray-100"
                        onClick={() => navigate('/login')}
                    >
                        Log in
                    </button>
                </div>

                <div className="flex space-x-4 ml-12">
                    <img src={image1} alt="Student 1" className="w-32 h-32 rounded-full shadow-md" />
                    <img src={image2} alt="Student 2" className="w-32 h-32 rounded-full shadow-md" />
                    <img src={image3} alt="Student 3" className="w-32 h-32 rounded-full shadow-md" />
                </div>
            </div>

            <div className="flex justify-between space-x-6 px-8 py-12">
                {/* Section 1 */}
                <div className="w-1/3 bg-blue-100 p-8 rounded-lg shadow-lg text-center">
                    <div className="mb-4">
                        <img src={image4} alt="Daily live classes" className="mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Startup Pitches
                    </h3>
                    <p className="text-gray-600">
                    Startups can create engaging Reels-style videos to highlight their core product or service and demonstrate their value proposition.
                    </p>
                </div>

                {/* Section 2 */}
                <div className="w-1/3 bg-pink-100 p-8 rounded-lg shadow-lg text-center">
                    <div className="mb-4">
                        <img src={image5} alt="Practice and revise" className="mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Investor Showcase
                    </h3>
                    <p className="text-gray-600">
                    Angel investors can showcase their investment philosophy and highlight their successful portfolio companies, attracting potential startups.
                    </p>
                </div>

                {/* Section 3 */}
                <div className="w-1/3 bg-yellow-100 p-8 rounded-lg shadow-lg text-center">
                    <div className="mb-4">
                        <img src={image6} alt="Learn anytime, anywhere" className="mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Community Engagement
                    </h3>
                    <p className="text-gray-600">
                    The Reels-like section fosters a dynamic community by allowing users to share updates, interact with each other, and stay informed about trends</p>
                </div>
            </div>

        </>
    );
};

export default MainSection;