'use client';

import { useEffect, useState } from "react";

export default function Crypto() {
    const stats = [
      { number: "6M+", label: "Crypto users in SA", highlight: "New customers waiting" },
      { number: "49%", label: "Want to spend on travel", highlight: "Untapped market" },
      { number: "40%", label: "Sales increase", highlight: "After accepting crypto" },
      { number: "2.5x", label: "Higher spend", highlight: "vs traditional tourists" },
    ];

    const wallets = [
      { src: "/images/cryptologos/luno.png", alt: "Luno" },
      { src: "/images/cryptologos/binance.png", alt: "Binance" },
      { src: "/images/cryptologos/valr.png", alt: "Valr" },
      { src: "/images/cryptologos/act.png", alt: "ACT" },
      { src: "/images/cryptologos/aqua.png", alt: "Aqua" },
      { src: "/images/cryptologos/btc.png", alt: "Bitcoin" },
      { src: "/images/cryptologos/lightning.png", alt: "Lightning" },
      { src: "/images/cryptologos/blitz.webp", alt: "Blitz" },
    ];

    const [activeStatIndex, setActiveStatIndex] = useState(0);

    useEffect(() => {
      const id = window.setInterval(() => {
        setActiveStatIndex((i) => (i + 1) % stats.length);
      }, 4000);
      return () => window.clearInterval(id);
    }, [stats.length]);

    return (
        <div className="scrollable dark-theme">
            <section className="testimonials">
              <div className="content">
                {/* Floating Bitcoin Icons */}
                <div className="crypto-floating-icons">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`crypto-float-icon crypto-float-${i + 1}`}>
                      <svg viewBox="0 0 32 32" fill="currentColor">
                        <path d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm1.846 8.057v-2.06h2.06v2.06h-2.06zm-4.12 0v-2.06h2.06v2.06h-2.06zm6.695 4.12c.515.824.72 1.854.515 2.884-.206 1.03-.72 1.854-1.545 2.369.927.618 1.545 1.545 1.75 2.678.206 1.133-.103 2.266-.824 3.09-.72.927-1.75 1.442-2.987 1.545v2.163h-2.06v-2.06h-2.06v2.06h-2.06v-2.163H8.162v-2.06h1.03c.412 0 .72-.103.927-.309.206-.206.309-.515.309-.927V12.59c0-.412-.103-.72-.309-.927-.206-.206-.515-.309-.927-.309h-1.03v-2.06h2.987V7.234h2.06v2.06h2.06v-2.06h2.06v2.163c1.03.103 1.957.412 2.678 1.03.72.515 1.236 1.339 1.442 2.266.103.515.103 1.03 0 1.545zm-3.605 1.957c.412-.206.72-.515.824-.927.103-.412.103-.824-.103-1.236-.206-.412-.515-.72-.927-.824-.412-.206-.927-.206-1.442-.103h-2.884v3.502h2.884c.618 0 1.133-.103 1.648-.412zm.515 5.562c.412-.206.72-.618.824-1.03.103-.515 0-1.03-.309-1.442-.309-.412-.72-.72-1.236-.824-.515-.103-1.133-.103-1.75 0h-3.09v3.81h3.09c.824 0 1.545-.103 2.163-.412.103 0 .206-.103.309-.103z"/>
                      </svg>
                    </div>
                  ))}
                </div>
                <div className="content__left">
                  {/* Header */}
                  <div className="crypto-header">
                    <span className="crypto-eyebrow">Cryptocurrency Payments</span>
                    <h1 className="crypto-title">
                      <span className="crypto-title-line">Accept Bitcoin</span>
                      <span className="crypto-title-line crypto-title-accent">zero volatility</span>
                    </h1>
                    <p className="crypto-subtitle">
                      In partnership with MoneyBadger, pioneers of Bitcoin payments in South Africa. Customers pay with crypto, you receive rands instantly.
                    </p>
                  </div>
                  
                  {/* Value Props */}
                  <div className="crypto-value-props">
                    <div className="crypto-value-prop">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                      <span>Zero volatility risk</span>
                    </div>
                    <div className="crypto-value-prop">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <span>Instant settlement</span>
                    </div>
                    <div className="crypto-value-prop">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="1" x2="12" y2="23"/>
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                      </svg>
                      <span>Paid in ZAR</span>
                    </div>
                  </div>
                  
                  {/* Partner Badge */}
                  <div className="crypto-partner">
                    <span className="crypto-partner-label">Powered by</span>
                    <img src="/images/cryptologos/moneybadger.png" alt="MoneyBadger" className="crypto-partner-logo" />
                  </div>
                </div>
                
                <div className="content__right">
                  {/* Headline */}
                  <div className="crypto-right-header">
                    <h2>Customers pay with <span>crypto</span></h2>
                    <p>You get paid in rands - guaranteed</p>
                  </div>
                  
                  {/* Supported Wallets */}
                  <div className="crypto-wallets">
                    <span className="crypto-wallets-label">Supported wallets & networks</span>
                    <div className="crypto-wallets-grid">
                      {wallets.map((wallet, index) => (
                        <div key={index} className="crypto-wallet">
                          <img src={wallet.src} alt={wallet.alt} />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Stats Carousel */}
                  <div className="crypto-stats-carousel">
                    <span className="crypto-stats-label">Did you know?</span>
                    <div className="crypto-stats-container">
                      {stats.map((stat, index) => (
                        <div 
                          key={index} 
                          className={`crypto-stat-slide ${index === activeStatIndex ? 'active' : ''}`}
                        >
                          <div className="crypto-stat-number">{stat.number}</div>
                          <div className="crypto-stat-content">
                            <span className="crypto-stat-main">{stat.label}</span>
                            <span className="crypto-stat-highlight">{stat.highlight}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="crypto-stats-dots">
                      {stats.map((_, index) => (
                        <button 
                          key={index} 
                          className={`crypto-stats-dot ${index === activeStatIndex ? 'active' : ''}`}
                          onClick={() => setActiveStatIndex(index)}
                          aria-label={`Go to stat ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}
