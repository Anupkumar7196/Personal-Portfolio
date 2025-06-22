import React, { useState } from "react";
import {Link} from "react-router-dom";
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "CourseOcean",
      description: "Built a responsive e-learning platform with React.js, Node.js, and Express.js. Implemented JWT authentication, role-based access, and Stripe payment integration. Optimized backend for performance and secure data handling",
      image: "https://plus.unsplash.com/premium_photo-1661771564227-1d8484e32c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwY291cnNlfGVufDB8fDB8fHww",
      technologies: ["React", "Node.js","Express.js", "MongoDB", "Stripe", "JWT"],
      category: "fullstack",
      liveUrl: "https://courseapp-zeta.vercel.app/",
      githubUrl: "https://github.com/Anupkumar7106/",
      features: ["User Authentication", "Payment Gateway", "Admin Panel", "Responsive Design"]
    },
    {
      id: 2,
      title: "Melodify",
      description: "Designed and built Melodify using React.js and HTML/CSS, focusing on responsive design. Integrated APIs for smooth music playback, demonstrating strong front-end development and API skills.",
      image: "https://images.unsplash.com/photo-1613329671121-5d1cf551cc3f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHNvbmd8ZW58MHx8MHx8fDA%3D",
      technologies: ["React", "JavaScript", "Material-UI", "Music API"],
      category: "frontend",
      liveUrl: "https://melodifyin.netlify.app",
      githubUrl: "https://github.com/Anupkumar08/",
      features: ["Real-time Music Playback", "Responsive &Modern UI", "Search Functionality", "Interactive Music Player"]
    },
    {
      id: 3,
      title: "QR Code Generator",
      description: "Built a responsive QR code generator using HTML, CSS, and JavaScript, allowing users to create and download QR codes in real-time. Integrated with the qrcode library for dynamic code rendering.",
      image: "https://plus.unsplash.com/premium_photo-1682339496351-7e79146d7c48?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHFyfGVufDB8fDB8fHww",
      technologies: ["HTML5", "CSS3", "Tailwind CSS", "JavScript", "React.js"],
      category: "backend",
      liveUrl: "https://qrngener.netlify.app",
      githubUrl: "https://github.com/Anupkumar7196/",
      features: ["Responsive Design", "Customizable Input", "Real-Time QR Generation", "Documentation"]
    },
    {
      id: 4,
      title: "Form Validation",
      description: "Built a responsive and user-friendly form with real-time input validation using JavaScript. Implemented checks for required fields, email format, and password strength to ensure data accuracy.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "JavaScript", "HMTL5", "CSS#", "Tailwind CSS"],
      category: "fullstack",
      liveUrl: "https://verifyform.netlify.app",
      githubUrl: "https://github.com/Anupkumar7196/",
      features: ["Real-Time Input Validation", "Required Field Checks", "Responsive & Accessible UI", "Dynamic Error Messages"]
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "Personal portfolio website built with React and Tailwind CSS. Fully responsive with modern animations.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/johndoe/portfolio",
      features: ["Responsive Design", "Animations", "SEO Optimized", "Fast Loading"]
    },
    {
      id: 6,
      title: "Blog API & CMS",
      description: "Headless CMS and API for blog management with user roles, content moderation, and SEO optimization.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Multer"],
      category: "backend",
      liveUrl: "https://api.example.com",
      githubUrl: "https://github.com/johndoe/blog-cms",
      features: ["User Roles", "Content Management", "File Upload", "SEO Tools"]
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "fullstack", label: "Full Stack" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="py-5 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent mb-5 py-2">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here's a collection of projects I've worked on, showcasing different technologies 
            and solving various challenges.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeFilter === filter.key
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Key Features:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    View Live
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-gray-300 text-gray-700 py-2 rounded-lg hover:border-gray-400 transition-colors text-sm font-medium"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Interested in Working Together?</h2>
          <p className="text-xl mb-6 text-blue-100">
            I'm always open to discussing new opportunities and interesting projects.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get In Touch
            </Link>
            <a
              href="mailto:anupk7196@gmail.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;