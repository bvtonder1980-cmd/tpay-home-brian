export default function International() {
    const features = [
      {
        icon: "rocket",
        title: "More Speed",
        description: "Fast track your cross-border money transfers and settle your international suppliers in minutes."
      },
      {
        icon: "savings",
        title: "Less Cost",
        description: "Our cost-effective solutions enable you to transact internationally for less fees and decreased volatility."
      },
      {
        icon: "globe",
        title: "Greater Reach",
        description: "Transact with difficult to reach countries, especially in Africa, with USD or local currency options."
      },
      {
        icon: "shield",
        title: "Safe & Secure",
        description: "Secure and efficient exchange platform designed to handle your fiat to crypto needs effortlessly."
      },
      {
        icon: "compliance",
        title: "Fully Compliant",
        description: "Working closely with regulators, Xago ensures all transactions fall within scope of regulations."
      }
    ];

    const renderIcon = (iconName: string) => {
      switch (iconName) {
        case "rocket":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
            </svg>
          );
        case "savings":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"/>
              <path d="M2 9v1c0 1.1.9 2 2 2h1"/>
              <path d="M16 11h.01"/>
            </svg>
          );
        case "globe":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          );
        case "shield":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
          );
        case "compliance":
          return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
              <path d="M9 15l2 2 4-4"/>
            </svg>
          );
        default:
          return null;
      }
    };

    return (
        <div className="scrollable">
            <section className="experience">
              <div className="content">
                <div className="content__left">
                  {/* Header */}
                  <div className="intl-header">
                    <span className="intl-eyebrow">Cross-Border Payments</span>
                    <h1 className="intl-title">
                      <span className="intl-title-line">Global money</span>
                      <span className="intl-title-line intl-title-accent">movement</span>
                    </h1>
                    <p className="intl-subtitle">
                      Pay international suppliers in most countries around the globe in minutes, while reducing cost and currency volatility using stablecoins.
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="intl-stats">
                    <div className="intl-stat">
                      <span className="intl-stat-number">150+</span>
                      <span className="intl-stat-label">Countries</span>
                    </div>
                    <div className="intl-stat">
                      <span className="intl-stat-number">Minutes</span>
                      <span className="intl-stat-label">Settlement time</span>
                    </div>
                    <div className="intl-stat">
                      <span className="intl-stat-number">Low</span>
                      <span className="intl-stat-label">Volatility</span>
                    </div>
                  </div>
                  
                  {/* Coming Soon Badge */}
                  <div className="intl-badge">
                    <span className="intl-badge-tag">Coming Soon</span>
                    <span className="intl-badge-text">Available on travelPay</span>
                  </div>
                  
                  {/* Partner */}
                  <div className="intl-partner">
                    <span className="intl-partner-label">Powered by</span>
                    <img src="/images/secureLogos/xago.png" alt="Xago" className="intl-partner-logo" />
                  </div>
                </div>
                
                <div className="content__right">
                  {/* Features */}
                  <div className="intl-features">
                    <div className="intl-features-header">
                      <h2>Why go <span>global</span> with us?</h2>
                    </div>
                    
                    <div className="intl-features-list">
                      {features.map((feature, index) => (
                        <div key={index} className="intl-feature-item">
                          <div className="intl-feature-icon">
                            {renderIcon(feature.icon)}
                          </div>
                          <div className="intl-feature-content">
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}
