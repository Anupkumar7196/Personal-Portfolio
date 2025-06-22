// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import About from "./About";
// import Skills from "./Skills";
// import Projects from "./Projects";
// import Contact from "./Contact";

// const Home = () => {
//     const [displayText, setDisplayText] = useState("");
//     const [isTyping, setIsTyping] = useState(true);
//     const fullText = "MERN Stack Developer";

//     useEffect(() => {
//         let index = 0;
//         setDisplayText("MERN Stack Developer"); // Reset text
        
//         const typeText = () => {
//             if (index < fullText.length) {
//                 setDisplayText(fullText.substring(0, index + 1));
//                 index++;
//                 setTimeout(typeText, 150);
//             } else {
//                 setIsTyping(false);
//             }
//         };
        
//         const timer = setTimeout(typeText, 500); // Start after 500ms
        
//         return () => clearTimeout(timer);
//     }, []);

//     const handleViewResume = () => {
//         // Replace this URL with your actual resume link
//         // You can use Google Drive, Dropbox, or any other file hosting service
//         const resumeUrl = "https://drive.google.com/file/d/1UrMHea0H24o6Iipa6uc4hj3ZfFva74WY/view?usp=drive_link";
//         window.open(resumeUrl, '_blank');
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 hero-pattern">
//             <div className="container mx-auto px-6 py-20">
//                 <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
//                     {/* Left Content */}
//                     <div className="lg:w-1/2 text-white animate-slide-in">
//                         <div className="space-y-6">
//                             <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//                                 Hi, I'm{" "}
//                                 <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
//                                     Anup Kumar
//                                 </span>
//                             </h1>
                            
//                             <div className="text-2xl lg:text-3xl font-medium h-6 flex items-center ">
//                                 <span>{displayText}</span>
//                                 {isTyping && <span className="animate-pulse ml-1 text-yellow-400">|</span>}
//                                 {!isTyping && !displayText && <span>MERN Stack Developer</span>}
//                             </div>
                            
//                             <p className="text-sm text-gray-200 max-w-2xl leading-relaxed ">
//                             As a MERN Stack Developer, I’m passionate about building end-to-end web applications using modern, efficient technologies. I specialize in MongoDB, Express.js, React, and Node.js, and enjoy crafting scalable, responsive solutions that provide seamless user experiences. With a strong foundation in both frontend and backend development, I focus on delivering high-performance applications that are maintainable, secure, and user-centric.
//                             </p>
                            
//                             <div className="flex flex-col sm:flex-row gap-x-20 pt-6">
//                                 <button
//                                     onClick={handleViewResume}
//                                     className="bg-transparent border-2 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-100 
//                                     hover:text-blue-600 
//                                     transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 cursor-pointer"
//                                 >
//                                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                                     </svg>
//                                     Resume
//                                 </button>
                                
//                                 <Link
//                                     to="/contact"
//                                     className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 text-center"
//                                 >
//                                     Get In Touch
//                                 </Link>
//                                 <a href="https://www.instagram.com/anupkr_08" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500 transition-colors duration-300 mt-4">
//                                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.43.403a4.924 4.924 0 011.675 1.092 4.924 4.924 0 011.092 1.675c.163.46.347 1.26.403 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.43a4.902 4.902 0 01-1.092 1.675 4.902 4.902 0 01-1.675 1.092c-.46.163-1.26.347-2.43.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.43-.403a4.902 4.902 0 01-1.675-1.092 4.902 4.902 0 01-1.092-1.675c-.163-.46-.347-1.26-.403-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.43a4.924 4.924 0 011.092-1.675A4.924 4.924 0 015.403 2.636c.46-.163 1.26-.347 2.43-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.736 0 8.332.013 7.052.072 5.771.131 4.794.342 3.98.659 3.146.984 2.42 1.422 1.757 2.086.94 2.905.501 3.936.178 5.075.006 5.72-.045 6.596.001 7.999v8.002c-.046 1.403.005 2.279.177 2.924.323 1.139.762 2.17 1.579 2.989.664.664 1.395 1.102 2.229 1.427.814.317 1.791.528 3.071.587 1.28.059 1.684.072 4.948.072s3.668-.013 4.948-.072c1.28-.059 2.257-.27 3.071-.587.834-.325 1.565-.763 2.229-1.427.817-.819 1.256-1.85 1.579-2.989.172-.645.223-1.521.177-2.924V7.999c.046-1.403-.005-2.279-.177-2.924-.323-1.139-.762-2.17-1.579-2.989a5.934 5.934 0 00-2.229-1.427C19.277.342 18.3.131 17.02.072 15.739.013 15.335 0 12 0zM12 5.838A6.162 6.162 0 105.838 12 6.156 6.156 0 0012 5.838zm0 10.162A3.999 3.999 0 1116 12a3.999 3.999 0 01-4 4zm6.406-11.845a1.44 1.44 0 11-1.44-1.44 1.439 1.439 0 011.44 1.44z"/>
//                                     </svg>
//                                 </a>
//                                 <a href="https://www.linkedin.com/in/anupk08" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-500 transition-colors duration-300 mt-4">
//                                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                                     </svg>
//                                 </a>
//                                 <a href="https://github.com/Anupkumar7196" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black transition-colors duration-300 mt-4">
//                                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
//                                         <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
//                                     </svg>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
                
//             </div>
//             <div><About/></div>
//             <div><Skills/></div>
//             <div><Projects/></div>
//             <div><Contact/></div>
//         </div>
        
//     );
// };

// export default Home;