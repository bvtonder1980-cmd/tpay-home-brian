'use client';
import { useState } from 'react';

export default function Wallet() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    
    const features = [
      {
        icon: "wallet",
        title: "What is my travelPay Wallet",
        description: "A digital wallet to make and receive payments within the travelPay network.",
        details: [
          "The travelPay wallet is a digital, transactional wallet that allows you to make and receive payments to or from other members in the travelPay network.",
          "Each business in the network is assigned a travelPay ID, which allows for payments to occur without exposing bank or card details, making it much safer to transact and less vulnerable to scams, such as swopping banking details on invoices.",
          "Since all members are vetted and approved travel businesses, you have full control over who is able to be paid from your wallet."
        ]
      },
      {
        icon: "zap",
        title: "Instant, yet cost effective",
        description: "Save up to 50% compared to traditional payment methods.",
        details: [
          "All wallet-to-wallet payments are instant and our low fees on these transactions ensure savings of up to 50% compared to traditional payment methods."
        ]
      },
      {
        icon: "users",
        title: "Let your team transact",
        description: "Pre-approve recipients and set spending limits for your team.",
        details: [
          "Since businesses owners pre-approve recipients, you can now let your agents pay their preferred suppliers. You are also able to set spending limits, allowing for different levels of access within your organisation.",
          "You have the option of letting your team transact, or to let them load payments for you to approve.",
          "Our wallet technology gives you full control and is customisable enough to fit into your businesses' existing operational model."
        ]
      },
      {
        icon: "eye",
        title: "Total Visibility",
        description: "Full audit trail and insights into every transaction.",
        details: [
          "From login to navigation and all the way to actual transacting, our system logs every request a user makes. This gives you full visibility into what your team is doing on travelPay and gives you exact insights into each transaction."
        ]
      }
    ];
    
    const toggleExpand = (index: number) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

    const renderIcon = (iconName: string) => {
      switch (iconName) {
        case "wallet":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
              <path d="M18 12a2 2 0 0 0 0 4h4v-4h-4z"/>
            </svg>
          );
        case "zap":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          );
        case "users":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          );
        case "eye":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
          );
        default:
          return null;
      }
    };

    return (
        <div className="scrollable dark-theme">
            <section className="news">
              <div className="content wallet-content">
                {/* Video Background */}
                <div className="wallet-video-bg">
                  <video 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    poster="/images/travel-bg.jpg"
                  >
                    <source src="https://videos.pexels.com/video-files/856419/856419-hd_1920_1080_25fps.mp4" type="video/mp4" />
                  </video>
                  <div className="wallet-video-overlay"></div>
                </div>
                
                {/* Floating Travel Icons */}
                <div className="wallet-floating-icons">
                  {/* Airplane */}
                  <div className="wallet-float-icon wallet-float-1">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                  </div>
                  {/* Luggage */}
                  <div className="wallet-float-icon wallet-float-2">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9.5 18H8V9h1.5v9zm3.25 0h-1.5V9h1.5v9zm3.25 0H14.5V9H16v9zM18 6h-2V3c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v3H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2 0 .55.45 1 1 1s1-.45 1-1h8c0 .55.45 1 1 1s1-.45 1-1c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8-3h4v3h-4V3zm8 16H6V8h12v11z"/>
                    </svg>
                  </div>
                  {/* Globe */}
                  <div className="wallet-float-icon wallet-float-3">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  {/* Passport */}
                  <div className="wallet-float-icon wallet-float-4">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 2c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H6zm6 3c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm0 2c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm-4 10h8v1H8v-1z"/>
                    </svg>
                  </div>
                  {/* Hotel/Bed */}
                  <div className="wallet-float-icon wallet-float-5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/>
                    </svg>
                  </div>
                  {/* Airplane 2 */}
                  <div className="wallet-float-icon wallet-float-6">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                    </svg>
                  </div>
                  {/* Map Pin */}
                  <div className="wallet-float-icon wallet-float-7">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  {/* Credit Card */}
                  <div className="wallet-float-icon wallet-float-8">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  {/* Palm Tree / Beach */}
                  <div className="wallet-float-icon wallet-float-9">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.127 14.56l1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73l2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02l-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"/>
                    </svg>
                  </div>
                  {/* Ship/Cruise */}
                  <div className="wallet-float-icon wallet-float-10">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 10.62V6c0-1.1-.9-2-2-2h-3V1H9v3H6c-1.1 0-2 .9-2 2v4.62l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v3.97L12 8 6 9.97V6z"/>
                    </svg>
                  </div>
                </div>
                <div className="content__left">
                  {/* Header */}
                  <div className="wallet-header">
                    <span className="wallet-eyebrow">Digital Payments</span>
                    <h1 className="wallet-title">
                      <span className="wallet-title-line">travelPay</span>
                      <span className="wallet-title-line wallet-title-accent">Wallet</span>
                    </h1>
                    <p className="wallet-subtitle">
                      The closed payments ecosystem designed exclusively for travel businesses. Secure, instant, and cost-effective.
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="wallet-stats">
                    <div className="wallet-stat">
                      <span className="wallet-stat-number">50%</span>
                      <span className="wallet-stat-label">Cost savings</span>
                    </div>
                    <div className="wallet-stat">
                      <span className="wallet-stat-number">Instant</span>
                      <span className="wallet-stat-label">Transfers</span>
                    </div>
                    <div className="wallet-stat">
                      <span className="wallet-stat-number">100%</span>
                      <span className="wallet-stat-label">Visibility</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="wallet-cta">
                    <a href="#" className="wallet-cta-btn primary">Get Started</a>
                    <a href="#" className="wallet-cta-btn secondary">Learn More</a>
                  </div>
                </div>
                
                <div className="content__right">
                  {/* Feature Cards */}
                  <div className="news__blocks wallet-features">
                    {features.map((feature, index) => (
                      <div 
                        key={index} 
                        className={`wallet-feature-card ${expandedIndex === index ? 'expanded' : ''}`}
                        onClick={() => toggleExpand(index)}
                      >
                        <div className="wallet-feature-header">
                          <div className="wallet-feature-icon">
                            {renderIcon(feature.icon)}
                          </div>
                          <div className="wallet-feature-content">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                          </div>
                          <div className="wallet-feature-toggle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="6 9 12 15 18 9"/>
                            </svg>
                          </div>
                        </div>
                        <div className="wallet-feature-details">
                          {feature.details.map((detail, dIndex) => (
                            <p key={dIndex}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}
