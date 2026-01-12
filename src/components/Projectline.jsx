import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import './App.css';

const Projectline = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Victoria's Secret",
      subtitle: "For E-commerce",
      description: "Global lingerie and apparel retailer featuring the new Lacie collection with innovative stretch lace technology.",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80",
      link: "#"
    },
    {
      id: 2,
      title: "CMS Software",
      subtitle: "For Construction Company",
      description: "A powerful software for the construction and manufacturing industry. From one dashboard, manage all operations.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
      link: "#"
    },
    {
      id: 3,
      title: "E-Learning Platform",
      subtitle: "For Educational Institute",
      description: "Modern learning management system with interactive courses and real-time collaboration features",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
      link: "#"
    },
    {
      id: 4,
      title: "Restaurant Management",
      subtitle: "For Food Industry",
      description: "Complete restaurant management solution with POS, inventory tracking, and customer ordering system",
      image: "https://plus.unsplash.com/premium_photo-1723491285855-f1035c4c703c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    },
    {
      id: 5,
      title: "AI Integration",
      subtitle: "For IT Industry",
      description: "Advanced AI-powered solutions for automation, data analysis, and intelligent decision-making systems",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?q=80&w=1296&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    },
    {
      id: 6,
      title: "Kitchen Management",
      subtitle: "For Chef Industry",
      description: "Professional kitchen management system with recipe tracking, ingredient inventory, and order coordination",
      image: "https://images.unsplash.com/photo-1761839257845-9283b7d1b933?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">

      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="project-title">PROJECT SHOWCASE</h1>

        <p className="project-desc">
          <span className="line left-line"></span>
          Showcasing our expertise in <span className="highlight">software development</span> and <span className="highlight">website Development</span> through real client projects that deliver innovation, performance, and measurable results.
          <span className="line right-line"></span>
        </p>
      </div>

      {/* Projects Grid */}
      <div className="max-w-9xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="relative h-[350px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>




              {/* Live Button */}
        <button
  className="live-btn"
  onClick={() => window.open(project.link, "_blank")}
>
  <ExternalLink size={16} />
  Live
</button>





              {/* Content Overlay - */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl font-bold mb-1">{project.title}</h2>
                <p className="text-white text-base font-medium mb-3">{project.subtitle}</p>
                <p className="text-gray-200 leading-relaxed text-sm">{project.description}</p>
              </div>
            </div>

            {/* Hover Border */}
            <div
              className={`absolute inset-0 border-4 border-cyan-500 rounded-xl pointer-events-none transition-opacity duration-300 ${hoveredProject === project.id ? "opacity-100" : "opacity-0"
                }`}
            ></div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Projectline;