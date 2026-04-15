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
              <div className="sticky-title">
                <ul>
                  <li>
                    <div>Crypto</div>
                    <div>4.0</div>
                  </li>
                </ul>
              </div>
              <div className="content">
                {/* Floating Bitcoin Icons */}
                <div className="crypto-floating-icons">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className={`crypto-float-icon crypto-float-${i + 1}`}>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c.42-.14.72-.39.89-.76.17-.36.24-.79.19-1.28-.05-.49-.21-.91-.49-1.25-.27-.34-.66-.57-1.18-.67V6h-1v1.18c-.23 0-.47.01-.71.04V6h-1v1.25c-.26.02-.52.05-.77.08l-.23.02v1.05l.47-.02c.32-.01.52.09.6.3v4.64c-.08.21-.28.31-.6.3l-.47-.02v1.05l.23.02c.25.03.51.06.77.08V16h1v-1.18c.24.02.48.04.71.04V16h1v-1.18c.52-.1.92-.33 1.19-.68.28-.35.44-.78.49-1.28.05-.5-.02-.93-.19-1.3-.17-.37-.47-.62-.89-.76zm-1.6-2.28c.56.1.85.42.85.95 0 .54-.29.87-.85.99v-1.94zm.85 4.93c-.56.13-.85.46-.85 1.01v-2.01c.56.12.85.46.85 1z"/>
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
