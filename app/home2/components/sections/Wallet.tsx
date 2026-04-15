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
              <div className="sticky-title">
                <ul>
                  <li>
                    <div>TravelPay Wallet</div>
                    <div>6.0</div>
                  </li>
                </ul>
              </div>
              <div className="content">
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
