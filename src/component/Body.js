// import React from "react";

// import { Link } from "react-router-dom";
// const Body = () => {
//   const handleDownloadResume = () => {
//     // Create a dummy resume download
//     const link = document.createElement('a');
//     link.href = 'https://drive.google.com/file/d/1UrMHea0H24o6Iipa6uc4hj3ZfFva74WY/view?usp=drive_link'; // You would replace this with actual resume path
//     link.download = 'AnupUpd(Resume).pdf';
//     link.click();
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-5">
//         <div className="container mx-auto px-6 text-center">
//           <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
//             {/* Profile Image */}
//             <div className="flex-shrink-0">
//               <img
//                 src="https://drive.google.com/uc?export=view&id=1pgVaM7NUmbz1H1BR9taKs228t9wbdTD9"
//                 alt="Anup Kumar"
//                 className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
//               />
//             </div>
            
//             {/* Hero Content */}
//             <div className="text-center md:text-left">
//               <h1 className="text-4xl md:text-4xl font-bold mb-3">
//                 Hi, I'm <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Anup Kumar</span>
//               </h1>
//               <h2 className="text-1xl md:text-2xl font-light mb-3">
//                 MERN Stack Developer
//               </h2>
//               <p className="text-md mb-4 max-w-2xl">
//               Passionate MERN Stack Developer dedicated to crafting seamless and high-performing web applications using MongoDB, Express.js, React, and Node.js. I specialize in building scalable, full-stack solutions that deliver exceptional user experiences and maintainable code architecture.
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//                 <button
//                   onClick={handleDownloadResume}
//                   className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg cursor-pointer"
//                 >
//                   Resume
//                 </button>
//                 <Link
//                   to="/contact"
//                   className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
//                 >
//                   Get In Touch
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Stats */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
//               <p className="text-gray-600">Projects Completed</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-4xl font-bold text-blue-600 mb-2">6+</h3>
//               <p className="text-gray-600">Months Experience</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-4xl font-bold text-blue-600 mb-2">30+</h3>
//               <p className="text-gray-600">Happy Clients</p>
//             </div>
//             <div className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
//               <p className="text-gray-600">Support</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured Projects Preview */}
//       <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl font-bold text-center mb-12 text-white">
//             Featured Projects
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((project) => (
//               <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
//                 <img
//                   src={`https://plus.unsplash.com/premium_photo-1661771564227-1d8484e32c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwY291cnNlfGVufDB8fDB8fHww${project + 5}-${project}b7d4e4f891d?w=400&h=250&fit=crop`}
//                   alt={`Project ${project}`}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold mb-2">❖ CourseOcean: {project}</h3>
//                   <p className="text-gray-600 mb-4">
//                   Built a scalable e-learning platform with secure JWT authentication, Stripe payment integration, and role-based access. Developed a responsive React.js UI and optimized the Node.js/Express.js backend for performance and efficient data handling.
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
//                     <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
//                     <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
//                   </div>
//                   <a
//                     href="#"
//                     className="text-blue-600 hover:text-blue-800 font-medium"
//                   >
//                     View Project →
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <Link
//               to="/projects"
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//             >
//               View All Projects
//             </Link>
//           </div>
//         </div>
//       </section>

//       {/* Skills Preview */}
//       <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold mb-12 text-white">
//             Tech Stack
//           </h2>
//           <div className="grid grid-cols-2 md:grid-cols-6 gap-4 cursor-pointer">
//             {[ 'Java', 'JavaScript','React', 'Node.js', 'Express.js', 'MongoDB'].map((skill) => (
//               <div key={skill} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-2xl font-bold text-blue-600">{skill[0]}</span>
//                 </div>
//                 <h3 className="font-semibold text-gray-800">{skill}</h3>
//               </div>
//             ))}
//           </div>
//           <div className="mt-8">
//             <Link
//               to="/skills"
//               className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
//             >
//               View All Skills
//             </Link>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Body;


import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Body = () => {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/file/d/1UrMHea0H24o6Iipa6uc4hj3ZfFva74WY/view?usp=drive_link";
      link.target="_blank"
      
    link.download = "AnupUpd(Resume).pdf";
    link.click();
  };

  // Animation Logic for "Stack Developer"
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Stack Developer";
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  

  useEffect(() => {
    const typingSpeed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayedText(fullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="https://avatars.githubusercontent.com/u/87388940?s=400&u=3537c385e5e69159d2e3bbf0541267b364c5eae8&v=4"
                alt="Anup Kumar"
                className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
              />
            </div>

            {/* Hero Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-4xl font-bold mb-3">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  Anup Kumar
                </span>
              </h1>

              {/* Animated Subheading */}
              <h2 className="text-1xl md:text-2xl font-light mb-3">
                MERN <span className="text-yellow-300">{displayedText}</span>
              </h2>

              <p className="text-md mb-4 max-w-2xl">
                Passionate MERN Stack Developer dedicated to crafting seamless
                and high-performing web applications using MongoDB, Express.js,
                React, and Node.js. I specialize in building scalable,
                full-stack solutions that deliver exceptional user experiences
                and maintainable code architecture.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={handleDownloadResume} 
                  className="bg-yellow-400 text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg  cursor-pointer"
                >
                  Resume
                </button>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">10+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">6+</h3>
              <p className="text-gray-600">Months Experience</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">30+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={`https://plus.unsplash.com/premium_photo-1661771564227-1d8484e32c8f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b25saW5lJTIwY291cnNlfGVufDB8fDB8fHww${project + 5}-${project}b7d4e4f891d?w=400&h=250&fit=crop`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    ❖ CourseOcean: {project}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Built a scalable e-learning platform with secure JWT
                    authentication, Stripe payment integration, and role-based
                    access. Developed a responsive React.js UI and optimized the
                    Node.js/Express.js backend for performance and efficient
                    data handling.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      React
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Node.js
                    </span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      MongoDB
                    </span>
                  </div>
                  <a
                    href="#"
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 cursor-pointer">
            {[
              "Java",
              "JavaScript",
              "React",
              "Node.js",
              "Express.js",
              "MongoDB",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {skill[0]}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-800">{skill}</h3>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/skills"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Skills
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
