'use client';

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export default function Contact({ showRegister, registerPercentage, setRegisterPercentage, onRegisterClick }: { showRegister: boolean, registerPercentage: number, setRegisterPercentage: (percentage: number) => void, onRegisterClick?: () => void }) {
    
  const benefits = [
    { icon: "free", text: "Sign up is completely free" },
    { icon: "clock", text: "Register in under 3 minutes" },
    { icon: "secure", text: "Bank-level security" },
    { icon: "support", text: "24/7 dedicated support" },
  ];

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "free":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
            <path d="M12 18V6"/>
          </svg>
        );
      case "clock":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
        );
      case "secure":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
        );
      case "support":
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  // Registration in progress view
  if(showRegister) {
    return (
      <div className="scrollable" id="hireme">
        <section className="contacts">
          <div className="content">
            <div className="content__left">
              <div className="contact-header">
                <span className="contact-eyebrow">Almost There</span>
                <h1 className="contact-title">
                  <span className="contact-title-line">Secure registration</span>
                  <span className="contact-title-line contact-title-accent">in progress...</span>
                </h1>
              </div>
              
              <div className="contact-progress">
                <CircularProgressbar 
                  value={registerPercentage} 
                  styles={buildStyles({ 
                    pathColor: '#E07A5F', 
                    textColor: '#1E3A5F', 
                    trailColor: 'rgba(30, 58, 95, 0.1)',
                    textSize: '1.5rem'
                  })} 
                  text={`${registerPercentage}%`} 
                />
              </div>
              
              <div className="contact-copyright">
                © travelPay {new Date().getFullYear()}. All Rights Reserved
              </div>
            </div>
            
            <div className="content__right" style={{pointerEvents:'none', opacity: 0.3}}>
              <div className="contact-form-section">
                <div className="contact-form-header">
                  <h2>Get in <span>touch</span></h2>
                  <p>We would love to hear from you</p>
                </div>
                
                <form className="contact-form" method="post">
                  <div className="contact-form-group">
                    <input type="text" name="name" placeholder="Your name" />
                  </div>
                  <div className="contact-form-group">
                    <input type="email" name="email" placeholder="Email address *" required />
                  </div>
                  <div className="contact-form-group">
                    <textarea name="message" placeholder="Your message *" required minLength={10} rows={4}></textarea>
                  </div>
                  <button type="submit" className="contact-form-btn">
                    <span>Send Message</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>    
    );
  }
  
  // Default contact view
  return (
    <div className="scrollable" id="hireme">
      <section className="contacts">
        <div className="content">
          <div className="content__left">
            <div className="contact-header">
              <span className="contact-eyebrow">Get Started</span>
              <h1 className="contact-title">
                <span className="contact-title-line">Ready to</span>
                <span className="contact-title-line contact-title-accent">travelPay?</span>
              </h1>
              <p className="contact-subtitle">
                Join thousands of travel businesses already saving time and money with travelPay.
              </p>
            </div>
            
            {/* Benefits */}
            <div className="contact-benefits">
              {benefits.map((benefit, index) => (
                <div key={index} className="contact-benefit">
                  <div className="contact-benefit-icon">
                    {renderIcon(benefit.icon)}
                  </div>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA */}
            <div className="contact-cta">
              <button className="contact-cta-btn primary" onClick={onRegisterClick}>
                {registerPercentage > 0 ? 'Continue Registration' : 'Sign up now'}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
            
            <div className="contact-copyright">
              © travelPay {new Date().getFullYear()}. All Rights Reserved
            </div>
          </div>
          
          <div className="content__right">
            <div className="contact-form-section">
              <div className="contact-form-header">
                <h2>Get in <span>touch</span></h2>
                <p>Have questions? We would love to hear from you.</p>
              </div>
              
              <form className="contact-form" method="post">
                <div className="contact-form-group">
                  <input type="text" name="name" placeholder="Your name" />
                </div>
                <div className="contact-form-group">
                  <input type="email" name="email" placeholder="Email address *" required />
                </div>
                <div className="contact-form-group">
                  <textarea name="message" placeholder="Your message *" required minLength={10} rows={4}></textarea>
                </div>
                <button type="submit" className="contact-form-btn">
                  <span>Send Message</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"/>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>    
  );
}
