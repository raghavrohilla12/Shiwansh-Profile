import React, { useState } from 'react';
import { ArrowRight, X, Calendar, User } from 'lucide-react';

const BlogDetailModal = ({ blog, onClose }) => {
  if (!blog) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="blog-detail-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="blog-detail-header">
          <img src={blog.image} alt={blog.title} className="blog-detail-image" />
        </div>
        
        <div className="blog-detail-content">
          <h1 className="blog-detail-title">{blog.title}</h1>
          
          <div className="blog-meta">
            <span className="meta-item">
              <Calendar size={16} />
              {blog.date}
            </span>
            <span className="meta-item">
              <User size={16} />
              {blog.author}
            </span>
          </div>
          
          <div className="blog-full-content">
            {blog.fullContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogCard = ({ blog, onClick }) => (
  <div className="blog-card">
    <div className={`blog-image ${blog.gradient || 'gradient-purple'}`}>
      <img src={blog.image} alt={blog.title} />
    </div>
    <div className="blog-content">
      <h3 className="blog-title">{blog.title}</h3>
      <p className="blog-description">{blog.description}</p>
      <button className="read-more-btn" onClick={onClick}>
        Read More
        <ArrowRight className="arrow-icon" />
      </button>
    </div>
  </div>
);

const LatestBlogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      title: "Top SaaS Tools Every Startup Should Use in 2024",
      description: "Startups in 2025 need to move fast, work smart, and scale efficiently. Software-as-a-Service (SaaS) tools provide everyt...",
      gradient: "gradient-purple",
      date: "November 15, 2025",
      author: "Tech Insights Team",
      fullContent: [
        "In today's fast-paced business environment, startups need to leverage the right tools to stay competitive. Software-as-a-Service (SaaS) solutions have revolutionized how businesses operate, offering cost-effective and scalable options for companies of all sizes.",
        "Cloud-based project management tools like Asana and Trello help teams collaborate seamlessly, regardless of their physical location. These platforms provide real-time updates, task assignments, and progress tracking that keep everyone aligned.",
        "Customer relationship management (CRM) systems such as HubSpot and Salesforce enable startups to manage their customer interactions effectively. From lead generation to customer support, these tools streamline the entire customer journey.",
        "Communication platforms like Slack and Microsoft Teams have become essential for remote and hybrid work environments. They facilitate instant messaging, video calls, and file sharing, creating a virtual office space.",
        "Analytics tools such as Google Analytics and Mixpanel provide valuable insights into user behavior and business performance. These data-driven insights help startups make informed decisions and optimize their strategies.",
        "By choosing the right SaaS tools, startups can reduce operational costs, improve efficiency, and focus on what matters most: growing their business and serving their customers."
      ]
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      title: "How AI is Transforming Web Development and Design in 2025",
      description: "Artificial Intelligence (AI) is no longer just a futuristic concept—it's reshaping industries in real time. In 2025, web...",
      gradient: "gradient-dark",
      date: "November 18, 2025",
      author: "AI Research Team",
      fullContent: [
        "Artificial Intelligence is revolutionizing the web development landscape in unprecedented ways. From automated code generation to intelligent design suggestions, AI tools are making developers more productive than ever before.",
        "AI-powered design assistants can now analyze user preferences and generate personalized website layouts. These systems learn from millions of design patterns to suggest optimal color schemes, typography, and spacing.",
        "Code completion tools like GitHub Copilot have transformed how developers write code. By understanding context and intent, these AI assistants can suggest entire functions and help debug complex issues in real-time.",
        "Natural language processing enables developers to create more intuitive user interfaces. Chatbots and voice interfaces are becoming increasingly sophisticated, providing users with seamless interaction experiences.",
        "AI-driven testing and quality assurance tools can automatically detect bugs, security vulnerabilities, and performance issues. This automation significantly reduces the time and cost associated with manual testing.",
        "As we move forward, the integration of AI in web development will continue to accelerate, making it an essential skill for developers to understand and leverage these powerful tools."
      ]
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
      title: "Top 10 Cloud Computing Trends in 2025",
      description: "Cloud computing is no longer just a tech buzzword—it's the backbone of modern businesses. As we move into 2025, cloud ad...",
      gradient: "gradient-blue",
      date: "November 20, 2025",
      author: "Cloud Solutions Team",
      fullContent: [
        "Cloud computing continues to evolve rapidly, with new trends emerging that reshape how businesses operate. The shift to cloud-first strategies has become essential for organizations seeking scalability and flexibility.",
        "Multi-cloud and hybrid cloud architectures are gaining prominence as businesses seek to avoid vendor lock-in and optimize their infrastructure costs. Organizations are strategically distributing workloads across multiple cloud providers.",
        "Edge computing is bringing computation closer to data sources, reducing latency and improving performance for IoT devices and real-time applications. This trend is particularly important for industries requiring instant data processing.",
        "Serverless computing is simplifying application deployment by abstracting infrastructure management. Developers can focus solely on code while cloud providers handle scaling and resource allocation automatically.",
        "Cloud-native security solutions are becoming more sophisticated, with zero-trust architectures and AI-powered threat detection becoming standard practices. Security is no longer an afterthought but a fundamental design principle.",
        "Sustainability in cloud computing is gaining attention, with providers investing in renewable energy and more efficient data centers. Green cloud computing is becoming a competitive advantage and a corporate responsibility.",
        "The democratization of cloud services through low-code and no-code platforms is enabling non-technical users to build and deploy applications. This trend is accelerating digital transformation across all industries.",
        "As cloud technology matures, we're seeing increased focus on cost optimization, performance monitoring, and governance. These trends will define the cloud computing landscape in 2025 and beyond."
      ]
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1484807352052-23338990c6c6?w=500&h=300&fit=crop",
      title: "Cloud Deployment for Beginners: How to Host Your Website on AWS in 2025",
      description: "IntroductionCloud deployment is no longer just for tech giants. In 2025, hosting your website on AWS has become easier t...",
      gradient: "gradient-light",
      date: "November 12, 2025",
      author: "DevOps Team",
      fullContent: [
        "Amazon Web Services (AWS) has made cloud deployment accessible to developers of all skill levels. With its comprehensive suite of services and user-friendly interfaces, hosting a website on AWS is now more straightforward than ever.",
        "The first step in AWS deployment is understanding the core services: EC2 for virtual servers, S3 for storage, and Route 53 for domain management. These building blocks form the foundation of most web applications.",
        "Setting up an AWS account is simple and comes with a generous free tier that allows beginners to experiment without significant costs. The free tier includes enough resources to host a small to medium-sized website for a year.",
        "Elastic Beanstalk simplifies the deployment process by automatically handling capacity provisioning, load balancing, and application health monitoring. It's perfect for developers who want to deploy quickly without managing infrastructure.",
        "Security best practices on AWS include using IAM roles for access control, enabling MFA, and configuring security groups properly. AWS provides extensive documentation and tools to help secure your applications.",
        "Monitoring and logging with CloudWatch ensure you can track your application's performance and troubleshoot issues quickly. Setting up alerts for critical metrics helps maintain optimal uptime.",
        "Cost management is crucial in cloud deployments. AWS provides tools like Cost Explorer and budgets to help you track spending and optimize resource usage. Understanding pricing models prevents unexpected bills.",
        "With these fundamentals in place, anyone can successfully deploy and manage a website on AWS, taking advantage of enterprise-grade infrastructure and global reach."
      ]
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      title: "How to Become a High-Paying Full Stack Developer in 2025",
      description: "In today's tech-driven world, the demand for Full Stack Developers continues to rise. Companies want professionals who c...",
      gradient: "gradient-cyan",
      date: "November 10, 2025",
      author: "Career Development Team",
      fullContent: [
        "Full stack development has become one of the most sought-after career paths in the tech industry. The ability to work on both frontend and backend systems makes full stack developers invaluable to organizations of all sizes.",
        "Mastering modern JavaScript frameworks like React, Vue, or Angular is essential for frontend development. These tools enable developers to create dynamic, responsive user interfaces that provide excellent user experiences.",
        "Backend proficiency in languages like Node.js, Python, or Java is equally important. Understanding server-side logic, database management, and API development forms the foundation of full stack expertise.",
        "Database knowledge spanning both SQL and NoSQL systems is crucial. Whether working with PostgreSQL, MongoDB, or Redis, knowing when and how to use different database technologies sets high-performing developers apart.",
        "DevOps skills including CI/CD, containerization with Docker, and orchestration with Kubernetes are increasingly important. Modern full stack developers need to understand the entire application lifecycle.",
        "Soft skills like communication, problem-solving, and teamwork are just as important as technical abilities. The ability to collaborate effectively with designers, product managers, and other developers is essential.",
        "Building a strong portfolio with real-world projects demonstrates your capabilities to potential employers. Contributing to open-source projects and maintaining a GitHub profile showcases your coding style and commitment.",
        "Continuous learning through online courses, bootcamps, and staying updated with industry trends ensures your skills remain relevant. The tech landscape evolves rapidly, and adaptability is key to long-term success and high earning potential."
      ]
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=300&fit=crop",
      title: "Common Mistakes to Avoid When Hiring a Software Development Company in 2025",
      description: "Hiring the right software development company can make or break your project in 2025. With so many vendors in the market...",
      gradient: "gradient-slate",
      date: "November 8, 2025",
      author: "Business Strategy Team",
      fullContent: [
        "Choosing the right software development partner is one of the most critical decisions a business can make. The wrong choice can lead to missed deadlines, budget overruns, and subpar products that fail to meet business objectives.",
        "One common mistake is focusing solely on cost without considering value. The cheapest option often leads to compromises in quality, communication, and long-term support. It's essential to evaluate the total cost of ownership rather than just initial development costs.",
        "Failing to verify technical expertise and past work is another pitfall. Always review portfolios, check references, and conduct technical interviews. A company's claims should be backed by demonstrable experience and successful case studies.",
        "Poor communication can derail even the most promising projects. Ensure the development team has clear communication channels, regular update schedules, and a project management methodology that aligns with your needs.",
        "Not defining clear requirements and success metrics from the start leads to scope creep and misaligned expectations. Invest time in creating detailed specifications and establishing measurable objectives before development begins.",
        "Ignoring cultural fit and time zone differences can impact collaboration quality. Consider whether the development team's work style, values, and availability align with your organization's needs and operating hours.",
        "Overlooking post-launch support and maintenance is a critical error. Software requires ongoing updates, bug fixes, and improvements. Ensure your development partner offers comprehensive support packages.",
        "By avoiding these common mistakes and conducting thorough due diligence, you can find a software development partner that delivers high-quality results, meets deadlines, and contributes to your business success."
      ]
    }
  ];

  return (
    <>

      <div className="blogs-container">
        <div className="blogs-wrapper">
          <h1 className="main-title">Latest Blogs</h1>
          
          <div className="blogs-grid">
            {blogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
                onClick={() => setSelectedBlog(blog)}
              />
            ))}
          </div>
        </div>
      </div>

      {selectedBlog && (
        <BlogDetailModal 
          blog={selectedBlog} 
          onClose={() => setSelectedBlog(null)} 
        />
      )}
    </>
  );
};

export default LatestBlogs;