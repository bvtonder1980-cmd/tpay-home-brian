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
    const headlines = ["Travel Agents", "Tour Operators", "TMCs", "OTAs", "Hotels", "Airlines"];
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
        <div className="scrollable dark-theme">
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
              {/* Logo */}
              <div className="content__logo">
                <div className="logo-text">
                  <span className="logo-travel">travel</span><span className="logo-pay">Pay</span>
                </div>
              </div>
              
              {/* Hero Headline */}
              <div className="content__title">
                <span className="title-eyebrow">Payment Orchestration Infrastructure</span>
                <h1 className="title-main">
                  <span className="title-line">Payments made</span>
                  <span className="title-line title-gradient">simpler and faster</span>
                  <span className="title-line">for travel businesses</span>
                </h1>
                <p className="title-subtitle">
                  Join other future-focussed, tech-driven travel leaders<br />and streamline your payment operations
                </p>
              </div>
              
              {/* Login Card */}
              <div className="login-card">
                <div className="login-card__header">
                  <span className="login-card__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                      <polyline points="10 17 15 12 10 7"/>
                      <line x1="15" y1="12" x2="3" y2="12"/>
                    </svg>
                  </span>
                  <span className="login-card__title">Access your account</span>
                </div>
                {loginMessage && <Alert variant="info">{loginMessage}</Alert>}
                {loginError && <Alert variant="danger">{loginError}</Alert>}
                <div className="content__btn-block">
                  <a className="login-btn" data-link="6" onClick={() => setShowLogin(true)}>
                    Login
                  </a>
                  &nbsp;
                  <a className="register-btn" data-link="6" onClick={onRegisterClick}>
                    Register
                  </a>
                </div>
                <div className="login-card__form">
                  <div className="login-card__input-group">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                    <input type="text" name="username" placeholder="Username"/>
                  </div>
                  <div className="login-card__input-group">
                    <svg className="input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <input type="password" name="password" placeholder="Password"/>
                  </div>
                </div>
                <a href="#" className="login-card__forgot">Forgot password?</a>
              </div>
              
              {/* Trust Indicators */}
              <div className="trust-indicators">
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="M9 12l2 2 4-4"/>
                  </svg>
                  <span>Bank-grade security</span>
                </div>
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>99.9% uptime</span>
                </div>
                <div className="trust-item">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  <span>PCI-DSS certified</span>
                </div>
              </div>
            </div>
            <div className="content__right">
              <div className={`hero-section ${isVisible ? 'visible' : ''}`}>
                {/* Main Hero Content */}
                <div className="hero-main">
                  <div className="hero-badges">
                    <div className="hero-badge">
                      <span className="badge-dot"></span>
                      Built for Travel
                    </div>
                    <div className="hero-badge">
                      <span className="badge-dot"></span>
                      PCI-DSS Compliant
                    </div>
                    <div className="hero-badge">
                      <span className="badge-dot"></span>
                      Multi-Currency
                    </div>
                    <div className="hero-badge">
                      <span className="badge-dot"></span>
                      24/7 Support
                    </div>
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
                
                {/* Floating Background Particles */}
                <div className="floating-particles">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className={`particle particle-${i + 1}`}>
                      {i % 2 === 0 ? (
                        <svg viewBox="0 0 24 24" fill="currentColor" opacity="0.3">
                          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                        </svg>
                      ) : (
                        <span className="dot"></span>
                      )}
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
