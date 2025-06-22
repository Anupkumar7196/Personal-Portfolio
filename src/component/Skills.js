import React from "react";
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "blue",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 95 },
        { name: "HTML5/CSS3", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "BootStrap CSS", level: 82 },
      ]
    },
    {
      title: "Backend",
      color: "green",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Java", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "REST APIs", level: 90 },
      ]
    },
    {
      title: "Database",
      color: "purple",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 78 },
        { name: "Redis", level: 70 },
        { name: "Firebase", level: 75 },
      ]
    },
    {
      title: "DevOps & Tools",
      color: "orange",
      skills: [
        { name: "Git", level: 92 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
        { name: "Vercel", level: 85 },
        { name: "NPM", level: 80 },
        { name: "VS Code", level: 72 },
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      green: "bg-green-100 text-green-800 border-green-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      orange: "bg-orange-100 text-orange-800 border-orange-200"
    };
    return colorMap[color] || colorMap.blue;
  };

  const getProgressColor = (color) => {
    const colorMap = {
      blue: "bg-blue-600",
      green: "bg-green-600",
      purple: "bg-purple-600",
      orange: "bg-orange-600"
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="py-5 bg-gradient-to-r from-blue-600 to-purple-700">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent mb-6">My Skills</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life. 
            I'm always learning and expanding my skill set.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
              <h2 className={`text-2xl font-bold mb-6 inline-block px-4 py-2 rounded-lg ${getColorClasses(category.color)}`}>
                {category.title}
              </h2>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getProgressColor(category.color)} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Other Skills & Interests</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0L4 16z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
              <p className="text-blue-100">Creative approach to complex challenges</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h2l2-3h10l2 3h2a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2zm9 3a4 4 0 100 8 4 4 0 000-8z"
                 />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p className="text-blue-100">Possess a keen eye for capturing and professionally editing high-quality photographs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-400 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3C7.03 3 3 7.03 3 12h3a6 6 0 016-6v3l4-4-4-4v3z M12 21c4.97 0 9-4.03 9-9h-3a6 6 0 01-6 6v-3l-4 4 4 4v-3z"
                 />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
              <p className="text-blue-100">Code optimization and scalable solutions</p>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Certification in Java Programming", issuer: "ORACAL ACADEMY", year: "2023" },
              { name: "Certification in Database Programming with SQL", issuer: "ORACAL ACADEMY", year: "2023" },
              { name: "Certification in Data Structures and Algorithms (C++)", issuer: "MySirG.com", year: "2022" },
              { name: "React.js Certified Developer", issuer: "Namaste React", year: "2024" },
              { name: "JavaScript Algorithms", issuer: "Chai Aur Code", year: "2021" },
              { name: "Node.js Certified Developer", issuer: "Namaste Node", year: "2024" },
              { name: "MongoDB Certified Developer", issuer: "Namaste DataBase", year: "2024" },
              { name: "Express.js Certified Developer", issuer: "Namaste Express", year: "2024" },
            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;