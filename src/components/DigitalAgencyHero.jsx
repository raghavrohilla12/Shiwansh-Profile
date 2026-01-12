import React, { useState, useEffect } from 'react';
import './App.css';

export default function DigitalAgencyHero() {
  const tabs = [
    'Web Development',
    'Mobile Apps',
    'Cloud Services',
    'UI/UX Design',
    'Fullstack',
    'Performance Marketing'
  ];

  const [activeTab, setActiveTab] = useState('Mobile Apps');
  const [typedLines, setTypedLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  // ⭐ AUTO TAB ROTATION 
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab(prev => {
        const nextIndex = (tabs.indexOf(prev) + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 2000); 

    return () => clearInterval(interval);
  }, []);

  const contentData = {
    'Web Development': {
      emoji: '🌐',
      title: 'Web Development Service',
      className: 'WebDevTeam',
      method: 'buildWebsite',
      param: 'technology',
      outputParts: { first: 'Responsive', rest: 'websites with modern frameworks.' }
    },
    'Mobile Apps': {
      emoji: '📱',
      title: 'Mobile Apps Service',
      className: 'MobileAppTeam',
      method: 'createApp',
      param: 'platform',
      outputParts: { first: 'Beautiful', rest: 'apps with seamless UX.' }
    },
    'Cloud Services': {
      emoji: '☁️',
      title: 'Cloud Services',
      className: 'CloudTeam',
      method: 'deployInfra',
      param: 'provider',
      outputParts: { first: 'Scalable', rest: 'infrastructure on AWS, Azure & GCP.' }
    },
    'UI/UX Design': {
      emoji: '🎨',
      title: 'UI/UX Design Service',
      className: 'DesignTeam',
      method: 'createDesign',
      param: 'product',
      outputParts: { first: 'Stunning', rest: 'designs with user-first approach.' }
    },
    'Fullstack': {
      emoji: '⚙️',
      title: 'Fullstack Development',
      className: 'FullstackTeam',
      method: 'buildSolution',
      param: 'requirements',
      outputParts: { first: 'End-to-end', rest: 'solutions from database to UI.' }
    },
    'Performance Marketing': {
      emoji: '📈',
      title: 'Performance Marketing',
      className: 'MarketingTeam',
      method: 'runCampaign',
      param: 'channel',
      outputParts: { first: 'Data-driven', rest: 'campaigns with ROI focus.' }
    }
  };

  const content = contentData[activeTab];

  const generateCodeLines = (content) => {
    return [
      { type: 'comment', text: `// ${content.emoji}${content.title}` },
      { type: 'code', text: `class ${content.className} {` },
      { type: 'code', text: `  ${content.method}(${content.param}) {`, indent: 1 },
      { type: 'code', text: `    return '${content.outputParts.first} ' + ${content.param} + ' ${content.outputParts.rest}';`, indent: 2 },
      { type: 'code', text: '  }', indent: 1 },
      { type: 'code', text: '}' },
      { type: 'code', text: '' },
      { type: 'code', text: `const team = new ${content.className}();` },
      { type: 'code', text: `console.log(team.${content.method}('iOS'));` }
    ];
  };

  // Typing animation effect
  useEffect(() => {
    const codeLines = generateCodeLines(content);
    
    // Initialize with empty lines to maintain height
    const emptyLines = codeLines.map(line => ({
      ...line,
      displayText: ''
    }));
    setTypedLines(emptyLines);
    setCurrentLineIndex(0);
    setCurrentCharIndex(0);

    let lineIndex = 0;
    let charIndex = 0;
    const typedLinesArray = [...emptyLines];

    const typingInterval = setInterval(() => {
      if (lineIndex < codeLines.length) {
        const currentLine = codeLines[lineIndex];
        
        if (charIndex < currentLine.text.length) {
          typedLinesArray[lineIndex] = {
            ...currentLine,
            displayText: currentLine.text.slice(0, charIndex + 1)
          };
          charIndex++;
        } else {
          typedLinesArray[lineIndex] = {
            ...currentLine,
            displayText: currentLine.text
          };
          lineIndex++;
          charIndex = 0;
        }
        
        setTypedLines([...typedLinesArray]);
        setCurrentLineIndex(lineIndex);
        setCurrentCharIndex(charIndex);
      } else {
        clearInterval(typingInterval);
      }
    }, 50); 

    return () => clearInterval(typingInterval);
  }, [activeTab]);

  const renderCodeLine = (line, index) => {
    if (line.type === 'comment') {
      return (
        <div key={index} className="code-line code-comment">
          <span className="comment-text">{line.displayText}</span>
          {index === currentLineIndex && currentCharIndex > 0 && <span className="cursor">|</span>}
        </div>
      );
    }

    // Parse code line for syntax highlighting
    const text = line.displayText || '';
    const indentClass = line.indent ? `indent-${line.indent}` : '';

    return (
      <div key={index} className={`code-line ${indentClass}`}>
        <span dangerouslySetInnerHTML={{ __html: highlightSyntax(text) }} />
        {index === currentLineIndex && currentCharIndex > 0 && <span className="cursor">|</span>}
      </div>
    );
  };

  const highlightSyntax = (text) => {
    return text
      .replace(/\b(class|const|new|return)\b/g, '<span class="keyword">$1</span>')
      .replace(/\b([A-Z][a-zA-Z]+)/g, '<span class="class-name">$1</span>')
      .replace(/\b([a-z][a-zA-Z]+)(?=\()/g, '<span class="method-name">$1</span>')
      .replace(/'([^']+)'/g, '<span class="string">\'$1\'</span>')
      .replace(/\b(console)\b/g, '<span class="console">$1</span>');
  };

  return (
    <div className="digital-agency-hero">
      <div className="hero-container outer-glow">
        <div className="browser-window">
          <div className="inner-glow"></div>

          {/* HEADER WITH TABS */}
          <div className="browser-header">
            <div className="traffic-lights">
              <div className="traffic-light red"></div>
              <div className="traffic-light yellow"></div>
              <div className="traffic-light green"></div>
            </div>

            <div className="nav-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="search-icon">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" strokeWidth="2"/>
                <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* CODE CONTENT WITH TYPING ANIMATION */}
          <div className="code-content">
            <div className="main-heading">
              <h1>Custom Software Solutions & Digital Marketing Experts</h1>
            </div>

            <div className="code-block">
              {typedLines.map((line, index) => renderCodeLine(line, index))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}