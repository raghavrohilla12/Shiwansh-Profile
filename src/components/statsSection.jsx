import React from 'react';
import { Users, Sparkles, Laptop } from 'lucide-react';
import './App.css';

const StatsCard = ({ icon: Icon, number, label, color }) => {
  return (
    <div className="stats-card">
      <div className={`stats-icon ${color}`}>
        <Icon size={32} />
      </div>
      <div className={`stats-number ${color}`}>{number}</div>
      <div className="stats-label">{label}</div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: '50+',
      label: 'Happy Clients',
      color: 'green'
    },
    {
      icon: Sparkles,
      number: '100+',
      label: 'Projects Completed',
      color: 'blue'
    },
    {
      icon: Laptop,
      number: '50+',
      label: 'Team Members',
      color: 'purple'
    }
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <StatsCard
          key={index}
          icon={stat.icon}
          number={stat.number}
          label={stat.label}
          color={stat.color}
        />
      ))}
    </div>
  );
};
        
export default StatsSection;