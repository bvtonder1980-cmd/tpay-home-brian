export default function About() {
    const features = [
      {
        icon: "layers",
        title: "All-in-One Platform",
        description: "Credit cards, EFT, crypto, Apple Pay, Google Pay and more - all with a single sign-on."
      },
      {
        icon: "trending-up",
        title: "Expand Your Business",
        description: "Give customers more payment options, enhancing their experience and boosting your sales."
      },
      {
        icon: "shield",
        title: "Closed Ecosystem",
        description: "All participants are vetted travel businesses. Make wallet payments without exposing bank details."
      },
      {
        icon: "sliders",
        title: "Full Control",
        description: "Manage all companies and branches with a single sign-on. Set approval workflows and limits."
      },
      {
        icon: "settings",
        title: "Fully Customisable",
        description: "Set detailed user rights across your organisation. Tailor the platform to your needs."
      }
    ];

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
              <div className="sticky-title">
                <ul>
                  <li>
                    <div>About travelPay</div>
                    <div>2.0</div>
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="content__left">
                  {/* Header */}
                  <div className="about-header">
                    <span className="about-eyebrow">Why travelPay</span>
                    <h1 className="about-title">
                      <span className="about-title-line">Built by travel,</span>
                      <span className="about-title-line about-title-accent">for travel</span>
                    </h1>
                    <p className="about-subtitle">
                      Born from within the industry, travelPay is engineered to serve travel businesses exclusively - because your needs are unique.
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
                  <div className="about-features">
                    {features.map((feature, index) => (
                      <div key={index} className="about-feature-card" style={{ animationDelay: `${index * 0.1}s` }}>
                        <div className="about-feature-icon">
                          {renderIcon(feature.icon)}
                        </div>
                        <div className="about-feature-content">
                          <h3>{feature.title}</h3>
                          <p>{feature.description}</p>
                        </div>
                        <div className="about-feature-arrow">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="5" y1="12" x2="19" y2="12"/>
                            <polyline points="12 5 19 12 12 19"/>
                          </svg>
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
