'use client';
import { useState } from 'react';
import WorldMapBackground from '../WorldMapBackground';

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
                {/* World Map Background with animated connections */}
                <WorldMapBackground />
                <div className="about-video-overlay"></div>
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
