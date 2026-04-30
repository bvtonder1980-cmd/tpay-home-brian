'use client';
import { useState } from 'react';

export default function About() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    
    const features = [
      {
        icon: "layers",
        title: "All-in-One Platform",
        description: "Credit cards, EFT, crypto, Apple Pay, Google Pay and more - all with a single sign-on.",
        details: [
          "Get the latest payment technologies with a single sign-on; from Credit Card, Debit Card, EFT, Bitcoin & Crypto, Apple Pay, Google Pay and more, packaged into a platform, that allows your business to remain at the forefront of payments technology.",
          "travelPay is also a closed payments ecosystem, designed exclusively for travel businesses who want to enhance, simplify, scale and streamline their pay-ins and pay-outs.",
          "Born from within the industry, travelPay is engineered to serve the travel industry exclusively, because our needs are unique."
        ]
      },
      {
        icon: "trending-up",
        title: "Expand Your Business",
        description: "Give customers more payment options, enhancing their experience and boosting your sales.",
        details: [
          "In a world where customers love options, travelPay allows you to give your clients more options to pay you, enhancing their customer experience and boosting sales.",
          "From normal card and EFT to Bitcoin and crypto payments, it's all included in your travelPay profile and payment options are displayed on your very own branded payments page.",
          "No need to sign up for or manage multiple incoming payment channels. Your travelPay profile covers it all, streamlining your payment processes across channels and simplifying transactional reporting."
        ]
      },
      {
        icon: "shield",
        title: "Closed Ecosystem",
        description: "All participants are vetted travel businesses. Make wallet payments without exposing bank details.",
        details: [
          "travelPay is a closed ecosystem, which ensures that all participants are vetted as legitimate travel businesses.",
          "Users can make wallet payments to each other without exposing bank or card details, drastically reducing the risk of fraud while transacting becomes instant.",
          "Enjoy full control over which suppliers are approved for payment from your travelPay profile, ensuring that your team spend remains secure and controlled."
        ]
      },
      {
        icon: "sliders",
        title: "Full Control",
        description: "Manage all companies and branches with a single sign-on. Set approval workflows and limits.",
        details: [
          "You have full control over all your companies and/or branches with a single sign-on.",
          "Give your team the ability to load payments for you to approve, or to make payment directly to pre-selected suppliers, with set limits in place.",
          "Our systems are designed to be adaptable to your unique business infrastructure, operations and requirements."
        ]
      },
      {
        icon: "settings",
        title: "Fully Customisable",
        description: "Set detailed user rights across your organisation. Tailor the platform to your needs.",
        details: [
          "Set detailed user rights across your organisation.",
          "Allow your team to create payment links for customers, add links to existing invoices, pay suppliers or simply load the payment for your approval, on a user-by-user level.",
          "Set different user functions for management, accounts, agents, etc.",
          "travelPay is fully customisable to your needs."
        ]
      }
    ];
    
    const toggleExpand = (index: number) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

    const renderIcon = (iconName: string) => {
      switch (iconName) {
        case "layers":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="12 2 2 7 12 12 22 7 12 2"/>
              <polyline points="2 17 12 22 22 17"/>
              <polyline points="2 12 12 17 22 12"/>
            </svg>
          );
        case "trending-up":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
              <polyline points="17 6 23 6 23 12"/>
            </svg>
          );
        case "shield":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          );
        case "sliders":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="21" x2="4" y2="14"/>
              <line x1="4" y1="10" x2="4" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12" y2="3"/>
              <line x1="20" y1="21" x2="20" y2="16"/>
              <line x1="20" y1="12" x2="20" y2="3"/>
              <line x1="1" y1="14" x2="7" y2="14"/>
              <line x1="9" y1="8" x2="15" y2="8"/>
              <line x1="17" y1="16" x2="23" y2="16"/>
            </svg>
          );
        case "settings":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          );
        default:
          return null;
      }
    };

    return (
        <div className="scrollable dark-theme">
            <section className="projects">
              <div className="content about-content">
                {/* Background Image - Connected World Fintech */}
                <div className="about-bg-image">
                  <img src="/images/fintech-connected-world.jpg" alt="" />
                  <div className="about-video-overlay"></div>
                </div>
                
                {/* Floating Fintech Icons */}
                <div className="about-floating-icons">
                  {/* Globe/Network */}
                  <div className="about-float-icon about-float-1">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                    </svg>
                  </div>
                  {/* Credit Card */}
                  <div className="about-float-icon about-float-2">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                    </svg>
                  </div>
                  {/* Bitcoin */}
                  <div className="about-float-icon about-float-3">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.5 11.5v-2.5h1.5c.55 0 1 .45 1 1s-.45 1-1 1h-1.5zm0 4v-2.5h2c.55 0 1 .45 1 1s-.45 1-1 1h-2zm4.5-3c0-1.1-.55-2.1-1.39-2.7.26-.41.39-.89.39-1.4 0-1.49-1.21-2.7-2.7-2.7h-3.3v-1.7h-1.5v1.7h-1.5v-1.7h-1.5v1.7h-2v1.5h1v9h-1v1.5h2v1.7h1.5v-1.7h1.5v1.7h1.5v-1.7h3.3c1.49 0 2.7-1.21 2.7-2.7 0-.64-.21-1.22-.55-1.69.9-.62 1.45-1.64 1.45-2.81z"/>
                    </svg>
                  </div>
                  {/* Shield/Security */}
                  <div className="about-float-icon about-float-4">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                    </svg>
                  </div>
                  {/* Wallet */}
                  <div className="about-float-icon about-float-5">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                    </svg>
                  </div>
                  {/* Chart/Analytics */}
                  <div className="about-float-icon about-float-6">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z"/>
                    </svg>
                  </div>
                  {/* Send/Transfer */}
                  <div className="about-float-icon about-float-7">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                  </div>
                  {/* Link/Connection */}
                  <div className="about-float-icon about-float-8">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
                    </svg>
                  </div>
                  {/* Lock/Secure */}
                  <div className="about-float-icon about-float-9">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/>
                    </svg>
                  </div>
                  {/* Globe Network 2 */}
                  <div className="about-float-icon about-float-10">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
                    </svg>
                  </div>
                </div>
                <div className="content__left">
                  {/* Header */}
                  <div className="about-header">
                    <span className="about-eyebrow">Why travelPay</span>
                    <h1 className="about-title">
                      <span className="about-title-line">Built by travel,</span>
                      <span className="about-title-line about-title-accent">for travel</span>
                    </h1>
                    <p className="about-subtitle">
                      Join other future focussed, tech-driven travel leaders and streamline your payment operations
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="about-stats">
                    <div className="about-stat">
                      <span className="about-stat-number">500+</span>
                      <span className="about-stat-label">Travel Agencies</span>
                    </div>
                    <div className="about-stat">
                      <span className="about-stat-number">R2.5B+</span>
                      <span className="about-stat-label">Processed</span>
                    </div>
                    <div className="about-stat">
                      <span className="about-stat-number">99.9%</span>
                      <span className="about-stat-label">Uptime</span>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <div className="about-cta">
                    <a href="#" className="about-cta-btn primary">Get Started</a>
                    <a href="#" className="about-cta-btn secondary">Learn More</a>
                  </div>
                </div>
                
                <div className="content__right">
                  {/* Feature Cards */}
                  <div className="projects__blocks about-features">
                    {features.map((feature, index) => (
                      <div 
                        key={index} 
                        className={`about-feature-card ${expandedIndex === index ? 'expanded' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                        onClick={() => toggleExpand(index)}
                      >
                        <div className="about-feature-header">
                          <div className="about-feature-icon">
                            {renderIcon(feature.icon)}
                          </div>
                          <div className="about-feature-content">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                          </div>
                          <div className="about-feature-toggle">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="6 9 12 15 18 9"/>
                            </svg>
                          </div>
                        </div>
                        <div className="about-feature-details">
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
