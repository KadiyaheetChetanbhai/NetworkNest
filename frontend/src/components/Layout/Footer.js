import react from 'react';

function Footer() {
    return (
        <>
        <footer className="bg-gray-100 text-gray-600 py-10 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* NetworkNest Logo and About */}
            <div>
                <img src={nn} alt="NetworkNest Logo" className="mb-4 w-24" />
                <p className="mb-6">
                    NetworkNest is empowering investors to discover and invest in promising startups, fueling innovation and growth in the entrepreneurial ecosystem.
                </p>
            </div>

            {/* Company Links */}
            <div>
                <h5 className="font-semibold mb-4">Company</h5>
                <ul>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Shikshodaya</a></li>
                    <li><a href="#" className="hover:underline">Careers</a></li>
                    <li><a href="#" className="hover:underline">Blogs</a></li>
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Terms and Conditions</a></li>
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h5 className="font-semibold mb-4">Reach out to us</h5>
                <p className="mb-2">Get your questions answered about investing with NetworkNest.</p>
                <div className="flex items-center space-x-2">
                    <span className="text-lg">📞</span>
                    <a href="tel:+91123456790" className="hover:underline">+91 1234567890</a>
                </div>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-6">
            <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
                <p>&copy; 2024 batch-6 Technologies Pvt Ltd</p>
                <div className="flex space-x-4">
                    <a href="#" className="hover:text-gray-800">Facebook</a>
                    <a href="#" className="hover:text-gray-800">YouTube</a>
                    <a href="#" className="hover:text-gray-800">Twitter</a>
                    <a href="#" className="hover:text-gray-800">Instagram</a>
                    <a href="#" className="hover:text-gray-800">LinkedIn</a>
                </div>
            </div>
        </div>
    </footer>
</>
    );
}