import React from "react";
import { Rocket } from "lucide-react";
import "./App.css";

const JobCard = ({
  title,
  location,
  description,
  experience,
  education,
  responsibilities,
  skills,
}) => {
  return (
    <div className="job-card">
      <div className="job-header">
        <h3 className="job-title">{title}</h3>
        <span className="job-location">{location}</span>
      </div>

      <p className="job-description">{description}</p>

      <div className="job-info">
        <p>
          <span className="label">Experience:</span> {experience}
        </p>
        <p>
          <span className="label">Education:</span> {education}
        </p>
      </div>

      <div className="job-grid">
        <div>
          <h4>🔸 Responsibilities</h4>
          <ul className="list">
            {responsibilities.map((item, index) => (
              <li key={index} className="list-item">
                 {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 >⚙️ Skills & Requirements</h4>
          <div className="skill-box">
            {skills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <button className="apply-btn">Apply Now</button>
    </div>
  );
};

const CareerUI = () => {
  const jobs = [
    {
      title: "HR",
      location: "Mohali - Upto 2 LPA | Full time",
      description:
        "We are hiring HR to assist with recruitment, onboarding, and employee engagement activities",
      experience: "0 Month - 6 preferred",
      education: "MBA / PGDM in HR or related fields",
      responsibilities: [
        "Post jobs on LinkedIn, Internshala, and job portals.",
        "Shortlist and screen candidates via calls/emails.",
        "Coordinate onboarding and joining formalities.",
        "Maintain employee records and HR sheets.",
        "Assist in organizing employee engagement activities",
      ],
      skills: [
        "Recruitment",
        "HRMS Tools",
        "Google Sheets",
        "Interview Coordination",
        "People Management",
        "Policy Documentation",
        "Professionalism",
        "Team Coordination",
        "Attention to Detail",
        "Clear Communication",
        "Time Management",
        "HR Best Practices",
      ],
    },

    // 2️⃣ AngularJS Developer
    {
      title: "Angular JS Developer",
      location: "Mohali | Full time",
      description:
        "We are hiring experienced Angular developers to build scalable and high-performance applications.",
      experience: "2+ Years Required",
      education: "BCA / MCA / B.Tech / M.Tech in CS or related fields",
      responsibilities: [
        "Convert UI/UX designs into Angular components.",
        "Integrate REST APIs with frontend.",
        "Write clean and reusable TypeScript code.",
        "Work closely with backend and design teams.",
        "Debug, maintain and update existing Angular projects.",
      ],
      skills: [
        "AngularJS",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "API Integration",
        "Bootstrap",
        "Problem Solving",
        "Git",
      ],
    },

    // 3️⃣ DevOps Engineer
    {
      title: "DevOps Engineer",
      location: "Remote / Chandigarh - 6 to 10 LPA | Full time",
      description:
        "We are hiring a skilled DevOps Engineer to automate infrastructure, optimize CI/CD pipelines, and ensure system reliability.",
      experience: "5+ Years Required",
      education: "B.Tech / MCA / M.Tech in CS, IT or related field",
      responsibilities: [
        "Build and automate CI/CD pipelines.",
        "Manage cloud infrastructure (AWS).",
        "Implement Docker & Kubernetes.",
        "Monitor and optimize production systems.",
        "Collaborate with development team for deployments.",
      ],
      skills: [
        "AWS Cloud",
        "Docker",
        "Kubernetes",
        "CI/CD Pipelines",
        "Terraform",
        "Linux Administration",
        "Networking & Security",
        "Monitoring Tools",
      ],
    },

    // 4️⃣ Full Stack Developer
    {
      title: "Full Stack Developer (MERN)",
      location: "Mohali - 3 to 6 LPA | Hybrid",
      description:
        "We are looking for strong MERN developers to work on modern web applications.",
      experience: "1 - 3 Years",
      education: "BCA / MCA / B.Tech (CS/IT)",
      responsibilities: [
        "Build reusable UI components using React.",
        "Develop backend APIs using Node.js & Express.",
        "Work with MongoDB for database operations.",
        "Collaborate with UI/UX and backend teams.",
        "Fix bugs and improve performance.",
      ],
      skills: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "REST APIs",
        "Git & GitHub",
        "Problem Solving",
      ],
    },
  ];

  return (
    <div className="career-page">
      <div className="career-container">
        <div className="career-header">
          <div className="rocket-icon">
            <Rocket size={50} color="#7c3aed" />
          </div>
          <h1 className="career-title">Join Our Team</h1>
          <p className="career-subtitle">
            We're hiring across India! Apply now or send your CV to{" "}
            <span className="highlight">hr@shiwansh.com</span>.
            Be part of digital-first, remote-friendly team
          </p>
        </div>

        {jobs.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default CareerUI;
