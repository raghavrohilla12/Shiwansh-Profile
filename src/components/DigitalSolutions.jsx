    import React from 'react';
    import './App.css';
    export default function DigitalSolutions() {
      const services = [
        {
          id: 1,
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          ),
          title: 'Web Development',
          description: 'Custom websites and web applications built with modern technologies for optimal performance.'
        },
        {
          id: 2,
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          ),
          title: 'Mobile Apps',
          description: 'Cross-platform mobile applications that deliver seamless user experiences.'
        },
        {
          id: 3,
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
            </svg>
          ),
          title: 'Cloud Solutions',
          description: 'Scalable cloud infrastructure and services to power your business operations.'
        },
        {
          id: 4,
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          ),
          title: 'SaaS Development',
          description: 'Custom software-as-a-service solutions tailored to your business needs.'
        },
        {
          id: 5,
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
              <line x1="9" y1="9" x2="9.01" y2="9"></line>
              <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>
          ),
          title: 'UI/UX Designing',
          description: 'Intuitive and engaging user interfaces designed for optimal user experience.'
        },
        {
          id: 6,
          icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          ),
          title: 'Digital Marketing',
          description: 'Comprehensive digital marketing strategies to boost your online presence.'
        }
      ];

      return (
        <section className="digital-solutions-section">
          <div className="solutions-container">
            <div className="section-header">
              <p className="section-label">OUR SERVICES</p>
              <h2 className="section-title">Comprehensive Digital Solutions</h2>
              <p className="section-subtitle">
                We provide end-to-end technology services to help your business grow
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <div key={service.id} className="service-card">
                  <div className="service-icon">
                    {service.icon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }