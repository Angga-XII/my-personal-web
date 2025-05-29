// pages/ProfilePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
        {/* Photo Container */}
        <div className="w-full md:w-2/5 flex justify-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center text-gray-500">
            Profile Photo
          </div>
        </div>
        
        {/* Information Container */}
        <div className="w-full md:w-3/5 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            John Doe
          </h1>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Senior UX Designer & Frontend Developer with 8+ years of experience creating 
            engaging user experiences and responsive web applications. 
            Specialized in React ecosystem and design systems.
          </p>
          <Link 
            to="/resume" 
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-md"
          >
            Explore My Skills
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;