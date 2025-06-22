import React from "react";

const About = () => {
  return (
    <div className="py-5 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent mb-4">About Me</h1>
          <p className="text-lg text-white max-w-3xl mx-auto">
            A passionate MERN stack developer with a love for creating innovative solutions 
            and bringing ideas to life through code.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://github.com/Anupkumar7196/React/blob/main/src/assets/IMG_9565.JPG?raw=true"
              alt="Anup kumar"
              className="w-[400] h-auto mx-auto rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hello! I'm <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent"> Anup Kumar</span>
            </h2>
            <p className="text-md text-white leading-relaxed">
              I'm a passionate MERN Stack developer based in Delhi, India, with a strong foundation in building full-stack web applications using MongoDB, Express.js, React, and Node.js. As a fresher, I'm eager to apply my skills to real-world projects, contribute to dynamic teams, and grow in a fast-paced development environment.
            </p>
            <p className="text-md text-white leading-relaxed">
            My journey into programming began during my college years, where I discovered a deep interest in technology and problem-solving. Over time, this interest grew into a passion for building efficient, scalable, and user-friendly web applications. I enjoy tackling complex challenges and transforming ideas into interactive digital solutions that are both functional and impactful. Whether it's developing a seamless user interface or structuring a robust backend, I find great satisfaction in writing clean, maintainable code and continuously improving my skills to stay aligned with modern web development trends.
            </p>
            <p className="text-md text-white leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or enjoying outdoor activities like hiking and photography.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-6">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Problem Solver</span>
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Team Player</span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full">Quick Learner</span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">Creative Thinker</span>
            </div>
          </div>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Education
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-lg">BACHELOR OF TECHNOLOGY (B.Tech): </h4><span>Computer Sceince and Engineering</span>
                <p className="text-gray-600 text-[12px]">Panipat Institute of Engineering and Technology, Panipat (Haryana)</p>
                <p className="text-sm text-gray-500">2020 - 2024</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-lg">HIGHER SECONDARY EDUCATION (12th Grade):</h4><span className="text-[12px]">Maharana Pratap College, Siwan (Bihar)</span>
                {/* <p className="text-gray-600">Tech Bootcamp</p> */}
                <p className="text-sm text-gray-500">2018 - 2019</p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6z" />
              </svg>
              Achievements
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-lg">Certification in Java Programming</h4>
                <p className="text-gray-600 text-[12px]">Successfully completed the Java Programming certification program awarded by "ORACAL ACADEMY."</p>
                <p className="text-sm text-gray-500">2023</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-lg">1st Position in National Science Day Competition</h4>
                <p className="text-gray-600 text-[12px]">Secured the top position in the college-wide competition themed "FUTURE OF STI: IMPACT ON EDUCATION, SKILLS & WORK" in commemoration of National Science Day.</p>
                <p className="text-sm text-gray-500">February 24, 2021 </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-lg">Published Book Chapter</h4>
                <p className="text-gray-600 text-[12px]">Contributed a distinguished book chapter titled "Exploring News App (Khabar) Impact: Design, Features, and User Behavior in the Digital Era."</p>
                <p className="text-gray-600 text-[12px]">The chapter is published in "IIPV3EBS14_G23 Futuristic Trends in Information Technology," Volume 3, 2023, with Chapter ID: E14S14G23P3G-IS.</p>
                <p className="text-sm text-gray-500">2021
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Info */}
        <div className="mt-16 bg-gradient-to-r from-pink-600 to-purple-700 text-white p-8 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-2xl font-bold mb-2">New Delhi</h4>
              <p className="text-blue-100">Delhi, India</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Available</h4>
              <p className="text-blue-100">For Freelance</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">Interests</h4>
              <p className="text-blue-100">Photography, Hiking, Tech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;




