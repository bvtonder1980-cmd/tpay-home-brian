'use client';
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import "./Intro.css";

const paymentLogos = [
  { src: "/images/newHome/visa.png", alt: "Visa" },
  { src: "/images/newHome/mc.png", alt: "Mastercard" },
  { src: "/images/newHome/amex.png", alt: "American Express" },
  { src: "/images/newHome/diners.png", alt: "Diners Club" },
  { src: "/images/newHome/appl.png", alt: "Apple Pay" },
  { src: "/images/newHome/ggl.png", alt: "Google Pay" },
];

const stats = [
  { number: "500+", label: "Travel Agencies", delay: 0 },
  { number: "R2.5B+", label: "Processed Annually", delay: 0.1 },
  { number: "99.9%", label: "Uptime", delay: 0.2 },
  { number: "24/7", label: "Support", delay: 0.3 },
];

const features = [
  { icon: "shield", title: "Secure Payments", desc: "PCI-DSS compliant" },
  { icon: "globe", title: "Multi-Currency", desc: "Accept 50+ currencies" },
  { icon: "zap", title: "Instant Settlement", desc: "Same-day payouts" },
];

export default function Intro({ showLogin, setShowLogin, onRegisterClick, loginMessage, setLoginMessage, loginError, setLoginError }: { showLogin: boolean, setShowLogin: (show: boolean) => void, onRegisterClick: () => void, loginMessage: string, setLoginMessage: (message: string) => void, loginError: string, setLoginError: (error: string) => void }) {
    const headlines = ["Travel Agents", "Tour Operators", "TMCs", "OTAs"];
    const [animationPhase, setAnimationPhase] = useState<'typing' | 'backspacing' | 'idle'>('idle');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentHeadline, setCurrentHeadline] = useState<string>(headlines[0]);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
      // Trigger entrance animation
      setIsVisible(true);
    }, []);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setAnimationPhase('backspacing');
  
        setTimeout(() => {
          const nextIndex = (currentIndex + 1) % headlines.length;
          setCurrentIndex(nextIndex);
          setCurrentHeadline(headlines[nextIndex]);
          setAnimationPhase('typing');
  
          setTimeout(() => {
            setAnimationPhase('idle');
          }, 1000);
        }, 800);
      }, 3000);
  
      return () => clearInterval(interval);
  }, [currentIndex, headlines.length]);
  
    return (
        <div className="scrollable">
        <section className="home">
          <div className="sticky-title">
            <ul>
              <li>
                <div>Welcome to TravelPay</div>
                <div>1.0</div>
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="content__left">
              <div className="content__logo">
                <div className="logo-text">
                  <span className="logo-travel">travel</span><span className="logo-pay">Pay</span>
                </div>
              </div>
              <div className="content__title">
                <div className="h1">The Closed Payments</div>
                <div className="h1">Ecosystem designed</div>
                <div className="h1">for Travel businesses</div>
              </div>
              <div className="login-box2" >
                <div className="login-modal__content">
                  {loginMessage && <Alert variant="info">{loginMessage}</Alert>}
                  {loginError && <Alert variant="danger">{loginError}</Alert>}
                  <div className="login-modal__form">
                    <div className="login-modal__form-input">
                      <input type="text" name="username" placeholder="Username"/>
                    </div>
                    <div className="login-modal__form-input">
                      <input type="password" name="password" placeholder="Password"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content__btn-block">
                <a className="login-btn" data-link="6" onClick={() => setShowLogin(true)}>
                  Login
                </a>
                &nbsp;
                <a className="register-btn" data-link="6" onClick={onRegisterClick}>
                  Register
                </a>
              </div>
              <div className="home__numbers">
                <div className="home__number">
                  <div className="home__number-digital" data-number="8">8</div>
                  <div className="home__number-text small">Years <br/>experience</div>
                </div>
                <div className="home__number">
                  <div className="home__number-digital" data-number="5">5</div>
                  <div className="home__number-text small">Themeforest <br/>awwards</div>
                </div>
                <div className="home__number">
                  <div className="home__number-digital" data-number="60">60</div>
                  <div className="home__number-text small">Projects <br/>Done</div>
                </div>
              </div>
            </div>
            <div className="content__right">
              <div className={`hero-section ${isVisible ? 'visible' : ''}`}>
                {/* Main Hero Content */}
                <div className="hero-main">
                  <div className="hero-badge">
                    <span className="badge-dot"></span>
                    Built for Travel
                  </div>
                  
                  <h2 className="hero-title">
                    Payment Solutions for
                    <span className="headline-wrapper">
                      {headlines.map((headline, index) => (
                        <span
                          key={index}
                          className={`rotating-headline ${currentHeadline === headline ? 'active' : ''} ${animationPhase === 'typing' && currentHeadline === headline ? 'typing-in' : ''} ${animationPhase === 'backspacing' && currentHeadline === headline ? 'typing-out' : ''}`}
                        >
                          {headline}
                        </span>
                      ))}
                    </span>
                  </h2>
                  
                  <p className="hero-description">
                    Streamline your payment operations with our all-in-one platform designed 
                    specifically for the travel industry. Accept payments, manage refunds, 
                    and grow your business globally.
                  </p>
                  
                  {/* Payment Methods */}
                  <div className="payment-methods">
                    <span className="payment-label">Accepted Payments</span>
                    <div className="payment-logos">
                      {paymentLogos.map((logo, index) => (
                        <div 
                          key={logo.alt} 
                          className="payment-logo"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <img src={logo.src} alt={logo.alt} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Stats Row */}
                <div className="hero-stats">
                  {stats.map((stat, index) => (
                    <div 
                      key={stat.label} 
                      className="stat-item"
                      style={{ animationDelay: `${stat.delay + 0.3}s` }}
                    >
                      <span className="stat-number">{stat.number}</span>
                      <span className="stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
                
                {/* Feature Cards */}
                <div className="hero-features">
                  {features.map((feature, index) => (
                    <div 
                      key={feature.title} 
                      className="feature-card"
                      style={{ animationDelay: `${0.5 + index * 0.15}s` }}
                    >
                      <div className="feature-icon">
                        {feature.icon === 'shield' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                          </svg>
                        )}
                        {feature.icon === 'globe' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                          </svg>
                        )}
                        {feature.icon === 'zap' && (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                          </svg>
                        )}
                      </div>
                      <div className="feature-content">
                        <h4>{feature.title}</h4>
                        <p>{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Decorative Elements */}
                <div className="hero-decorations">
                  <div className="decoration-circle circle-1"></div>
                  <div className="decoration-circle circle-2"></div>
                  <div className="decoration-circle circle-3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}
