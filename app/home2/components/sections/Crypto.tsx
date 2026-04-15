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
        <div className="scrollable">
            <section className="testimonials">
              <div className="sticky-title">
                <ul>
                  <li>
                    <div>Crypto</div>
                    <div>4.0</div>
                  </li>
                </ul>
              </div>
              <div className="content">
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
