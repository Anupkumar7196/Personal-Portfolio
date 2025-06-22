// src/components/Error.js
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 hero-pattern flex items-center justify-center">
            <div className="text-center animate-fade-in">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-blue-600">404</h1>
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Oops! The page you're looking for doesn't exist.
                    </p>
                </div>
                
                <div className="space-y-4">
                    <Link
                        to="/"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Go Home
                    </Link>
                    <div className="text-gray-500">
                        or try one of these pages:
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
                        <Link to="/skills" className="text-blue-600 hover:underline">Skills</Link>
                        <Link to="/projects" className="text-blue-600 hover:underline">Projects</Link>
                        <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Error;