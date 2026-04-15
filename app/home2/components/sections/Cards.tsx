export default function Cards() {
    const paymentMethods = [
      {
        title: "Credit & Debit Cards",
        description: "Accept all major card networks with 3D Secure protection",
        logos: [
          { src: "/images/newHome/mc.png", alt: "Mastercard" },
          { src: "/images/newHome/visa.png", alt: "Visa" },
          { src: "/images/newHome/amex.png", alt: "American Express" },
          { src: "/images/newHome/diners.png", alt: "Diners Club" },
        ],
        badge: { src: "/images/secureLogos/3ds.png", alt: "3D Secure" }
      },
      {
        title: "Instant EFT & Bank",
        description: "Direct bank payments with real-time confirmation",
        logos: [
          { src: "/images/newHome/absa.png", alt: "ABSA" },
          { src: "/images/newHome/fnb.png", alt: "FNB" },
        ]
      },
      {
        title: "Mobile Wallets",
        description: "Tap-to-pay convenience for your customers",
        logos: [
          { src: "/images/newHome/appl.png", alt: "Apple Pay" },
          { src: "/images/newHome/ggl.png", alt: "Google Pay" },
        ]
      },
      {
        title: "travelPay Wallet",
        description: "Instant B2B payments within the ecosystem",
        logos: [
          { src: "/images/newHome/tpay.png", alt: "travelPay" },
        ]
      }
    ];

    return (
        <div className="scrollable">
            <section className="awards">
              <div className="sticky-title">
                <ul>
                  <li>
                    <div>Cards/EFT</div>
                    <div>3.0</div>
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="content__left">
                  {/* Header */}
                  <div className="cards-header">
                    <span className="cards-eyebrow">Payment Processing</span>
                    <h1 className="cards-title">
                      <span className="cards-title-line">Accept payments</span>
                      <span className="cards-title-line cards-title-accent">everywhere</span>
                    </h1>
                    <p className="cards-subtitle">
                      With a transaction rate of almost 20,000 transactions per hour, Cross Switch gives you access to state-of-the-art card processing with AI-powered fraud detection.
                    </p>
                  </div>
                  
                  {/* Stats */}
                  <div className="cards-stats">
                    <div className="cards-stat">
                      <span className="cards-stat-number">20K+</span>
                      <span className="cards-stat-label">Transactions/hour</span>
                    </div>
                    <div className="cards-stat">
                      <span className="cards-stat-number">99.9%</span>
                      <span className="cards-stat-label">Success rate</span>
                    </div>
                    <div className="cards-stat">
                      <span className="cards-stat-number">AI</span>
                      <span className="cards-stat-label">Fraud detection</span>
                    </div>
                  </div>
                  
                  {/* Partner Badge */}
                  <div className="cards-partner">
                    <span className="cards-partner-label">Powered by</span>
                    <img src="/images/secureLogos/crossswitch.png" alt="Cross Switch" className="cards-partner-logo" />
                  </div>
                </div>
                
                <div className="content__right">
                  {/* Payment Methods Grid */}
                  <div className="cards-methods">
                    <div className="cards-methods-header">
                      <h2>More ways to get <span>paid</span></h2>
                      <p>One integration, all payment methods</p>
                    </div>
                    
                    <div className="cards-methods-grid">
                      {paymentMethods.map((method, index) => (
                        <div key={index} className="cards-method-card">
                          <div className="cards-method-content">
                            <h3>{method.title}</h3>
                            <p>{method.description}</p>
                          </div>
                          <div className="cards-method-logos">
                            {method.logos.map((logo, lIndex) => (
                              <img key={lIndex} src={logo.src} alt={logo.alt} />
                            ))}
                            {method.badge && (
                              <img src={method.badge.src} alt={method.badge.alt} className="cards-method-badge" />
                            )}
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
