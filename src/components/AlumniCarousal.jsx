import React, { useEffect, useState } from "react";

export default function AlumniCarousel() {
  const cards = [
    {
      company: "Shiwansh Solutions",
      name: "Raju Kumar",
      role: "Fullstack Developer",
      location: "Noida",
      img: "https://randomuser.me/api/portraits/men/76.jpg",
      text: "From learning basics to becoming a professional developer at Shiwansh Solutions."
    },
    {
      company: "Tech Mahindra",
      name: "Ranvir Kumar Sinha",
      role: ".Net Fullstack Developer",
      location: "Noida",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      text: "The mock interviews and technical sessions helped me crack Tech Mahindra's hiring process."
    },
    {
      company: "WE Excel Software Pvt. Ltd.",
      name: "Ravi Barnawal",
      role: ".Net Fullstack Developer",
      location: "Chandigarh",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      text: "The hands-on projects gave me the practical experience needed to excel at WE Excel Software."
    },
    {
      company: "Aviox Technologies",
      name: "Vikrant Goswami",
      role: "Python Developer",
      location: "Mohali",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
      text: "The Python specialization track gave me the skills needed for my role at Aviox."
    },
    {
      company: "Infosys",
      name: "Amit Sharma",
      role: "Full Stack Developer",
      location: "Bangalore",
      img: "https://randomuser.me/api/portraits/men/64.jpg",
      text: "The comprehensive curriculum and mentorship helped me land my dream job at Infosys."
    },
    {
      company: "TCS",
      name: "Rahul Verma",
      role: "Backend Developer",
      location: "Pune",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
      text: "Amazing trainers and practical exposure made all the difference in my career."
    }
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => {
      if (prev + 3 >= cards.length) return 0;
      return prev + 3;
    });
  };

  const prev = () => {
    setIndex((prev) => {
      if (prev - 3 < 0) return Math.floor((cards.length - 1) / 3) * 3;
      return prev - 3;
    });
  };

  useEffect(() => {
    const auto = setInterval(next, 4000);
    return () => clearInterval(auto);
  }, []);

  const page = Math.floor(index / 3);

  return (
    <div style={{ 
      minHeight: '100vh',
    background:"white",
      padding: '80px 20px'
    }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ 
          fontSize: '56px', 
          fontWeight: '700',
          color: '#1a1a1a',
          margin: '0 0 10px 0',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          Trained <span style={{ color: '#2563eb' }}>&</span> Transformed
        </h1>
        <p style={{ 
          fontSize: '18px',
          color: '#64748b',
          margin: 0
        }}>
          Success stories from our talented alumni
        </p>
      </div>

      {/* Carousel */}
      <div style={{ 
        maxWidth: '1400px',
        margin: '0 auto',
        position: 'relative',
        overflow: 'visible',
        padding: '0 20px'
      }}>
        {/* Left Arrow */}
        <button
          onClick={prev}
          style={{
            position: 'absolute',
            left: '-25px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
          onMouseLeave={(e) => e.target.style.background = '#2563eb'}
        >
          ❮
        </button>

        {/* Cards Slider */}
        <div style={{ 
          display: 'flex',
          transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: `translateX(-${page * 100}%)`
        }}>
          {cards.map((card, i) => (
            <div
              key={i}
              style={{
                minWidth: 'calc(33.333% - 20px)',
                margin: '0 10px',
                background: 'white',
                borderRadius: '20px',
                overflow: 'visible',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                transition: 'all 0.3s',
                position: 'relative'
              }}
            >
              {/* Company Header */}
              <div style={{
                background: '#2563eb',
                color: "white",
                padding: '15px 20px',
                fontSize: '15px',
                fontWeight: '600',
                textAlign: 'center',
                borderRadius: '20px 20px 0 0',
                paddingBottom: '70px',
                margin:"8px"
              }}>
                {card.company}
              </div>

              {/* Image Container */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '10px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '5px solid #2563eb',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
                  background: 'white'
                }}>
                  <img
                    src={card.img}
                    alt={card.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '0 25px 30px 25px', textAlign: 'center' }}>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: '700',
                  color: '#1a1a1a',
                  margin: '0 0 8px 0'
                }}>
                  {card.name}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: '#2563eb',
                  fontWeight: '500',
                  margin: '0 0 8px 0'
                }}>
                  {card.role}
                </p>
                <p style={{
                  fontSize: '14px',
                  color: '#64748b',
                  margin: '0 0 20px 0'
                }}>
                  📍 {card.location}
                </p>

                {/* Quote Box */}
                <div style={{
                  background: '#eff6ff',
                  borderRadius: '12px',
                  padding: '20px',
                  position: 'relative',
                  marginTop: '15px',
                  borderLeft: '4px solid #2563eb'
                }}>
                  <div style={{
                    fontSize: '40px',
                    color: '#93c5fd',
                    lineHeight: '0',
                    marginBottom: '10px'
                  }}>
                    "
                  </div>
                  <p style={{
                    fontSize: '14px',
                    color: '#475569',
                    lineHeight: '1.6',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          style={{
            position: 'absolute',
            right: '-25px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            background: '#2563eb',
            color: 'white',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            zIndex: 10,
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
            transition: 'all 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
          onMouseLeave={(e) => e.target.style.background = '#2563eb'}
        >
          ❯
        </button>
      </div>
    </div>
  );
}