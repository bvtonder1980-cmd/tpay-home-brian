import { Col, Row } from "react-bootstrap"

export default function About() {
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
                  <div className="content__title">
                    <div className="h1">About travelPay</div>
                  </div>
                  <ul className="content__menu projects__menu">
                    <li className="active"><a href="javascript:;">All in one payment solution for travel</a></li>
                    <li><a href="javascript:;">Expand your business</a></li>
                    <li><a href="javascript:;">Closed Ecosystem Wallet Payments</a></li>
                    <li><a href="javascript:;">Full Control</a></li>
                    <li><a href="javascript:;">Full Customisation</a></li>
                  </ul>
                </div>
                <div className="content__right" style={{color:"#ffffff"}}> {/* style={{backgroundColor: '#f4f4f4'}} */}
                  {/* Tech Flow Illustration */}
                  <div className="tech-flow-illustration">
                    <svg className="tech-flow-svg" viewBox="0 0 200 1200" preserveAspectRatio="xMidYMin slice">
                      {/* Main vertical circuit line */}
                      <path className="circuit-main" d="M100 0 L100 1200" strokeDasharray="8 4" />
                      
                      {/* Connection nodes */}
                      <circle className="node node-1" cx="100" cy="80" r="8" />
                      <circle className="node node-2" cx="100" cy="280" r="8" />
                      <circle className="node node-3" cx="100" cy="480" r="8" />
                      <circle className="node node-4" cx="100" cy="680" r="8" />
                      <circle className="node node-5" cx="100" cy="880" r="8" />
                      <circle className="node node-6" cx="100" cy="1080" r="8" />
                      
                      {/* Branch circuits left */}
                      <path className="circuit-branch branch-left-1" d="M100 80 L40 80 L40 140" />
                      <path className="circuit-branch branch-left-2" d="M100 480 L30 480 L30 560" />
                      <path className="circuit-branch branch-left-3" d="M100 880 L50 880 L50 940" />
                      
                      {/* Branch circuits right */}
                      <path className="circuit-branch branch-right-1" d="M100 280 L160 280 L160 340" />
                      <path className="circuit-branch branch-right-2" d="M100 680 L170 680 L170 760" />
                      <path className="circuit-branch branch-right-3" d="M100 1080 L150 1080 L150 1140" />
                      
                      {/* Small connector dots */}
                      <circle className="dot-small" cx="40" cy="140" r="4" />
                      <circle className="dot-small" cx="160" cy="340" r="4" />
                      <circle className="dot-small" cx="30" cy="560" r="4" />
                      <circle className="dot-small" cx="170" cy="760" r="4" />
                      <circle className="dot-small" cx="50" cy="940" r="4" />
                      <circle className="dot-small" cx="150" cy="1140" r="4" />
                      
                      {/* Data packets animating along the line */}
                      <circle className="data-packet packet-1" cx="100" cy="0" r="3" />
                      <circle className="data-packet packet-2" cx="100" cy="0" r="3" />
                      <circle className="data-packet packet-3" cx="100" cy="0" r="3" />
                      
                      {/* Icon placeholders - credit card */}
                      <rect className="icon-box" x="20" y="160" width="40" height="28" rx="4" />
                      <line className="icon-detail" x1="26" y1="172" x2="40" y2="172" />
                      <line className="icon-detail" x1="26" y1="178" x2="34" y2="178" />
                      
                      {/* Icon - globe */}
                      <circle className="icon-box" cx="160" cy="370" r="18" fill="none" />
                      <ellipse className="icon-detail" cx="160" cy="370" rx="18" ry="8" />
                      <line className="icon-detail" x1="160" y1="352" x2="160" y2="388" />
                      
                      {/* Icon - shield */}
                      <path className="icon-box" d="M30 580 L30 600 Q30 620 45 630 Q60 620 60 600 L60 580 L45 574 Z" fill="none" />
                      
                      {/* Icon - wallet */}
                      <rect className="icon-box" x="150" y="780" width="40" height="30" rx="4" />
                      <rect className="icon-detail-fill" x="170" y="790" width="12" height="10" rx="2" />
                      
                      {/* Icon - lock */}
                      <rect className="icon-box" x="30" y="960" width="30" height="24" rx="3" />
                      <path className="icon-detail" d="M38 960 L38 952 Q45 944 52 952 L52 960" fill="none" />
                      
                      {/* Icon - check */}
                      <circle className="icon-box" cx="165" cy="1160" r="16" fill="none" />
                      <path className="icon-detail" d="M156 1160 L162 1168 L176 1152" fill="none" />
                    </svg>
                  </div>
                  <div className="projects__blocks">
                    <div className="projects__block active" style={{height: '100%'}}>
                      <Row style={{marginTop: '0px'}}>
                        <Col xs={12} md={6}>
                          <h2>All in one payment solution for travel</h2>
                          <p>Get the latest payment technologies with a single sign-on; from Credit Card, Debit Card, EFT, Bitcoin & Crypto, Apple Pay, Google Pay and more, packaged into a platform, that allows your business to remain at the forefront off payments technology. </p>
                          <p>travelPay is also a closed payments ecosystem, designed exclusively for travel businesses who want to enhance, simplify, scale and streamline their pay-ins and pay-outs. </p>
                          <p>Born from within the industry, travelPay is engineered to serve the travel industry exclusively, because our needs are unique. </p>
                        </Col>
                      </Row>
                    </div>
                    <div className="projects__block active" style={{height: '100%'}}>
                      <Row style={{marginTop: '0px'}}>
                        <Col xs={12} md={6}>
                          <h2>Expand your business</h2>
                          <p>In a world where customers love options, travelPay allows you to give your clients more options to pay you, enhancing their customer experience and boosting sales. </p>
                          <p>Insert all payment options icons</p>
                          <p>From normal card and EFT to Bitcoin and crypto payments, it’s all included in your travelPay profile and payment options are displayed on your very own branded payments page. </p>
                          <p>No need to sign up for or manage multiple incoming payment channels. Your travelPay profile covers it all, streamlining your payment processes across channels and simplifying transactional reporting.  
                          </p>
                        </Col>
                      </Row>
                    </div>
                    <div className="projects__block active" style={{height: '100%'}}>
                      <Row style={{marginTop: '0px'}}>
                        <Col xs={12} md={6}>
                          <h2>Closed Ecosystem Wallet Payments</h2>
                          <p>travelPay is a closed ecosystem, which ensures that all participants are vetted as legitimate travel businesses. </p>
                          <p>Users can make wallets payments to each other without exposing bank or card details, drastically reducing the risk of fraud while transacting becomes instant. </p>
                          <p>Enjoy full control over which suppliers are approved for payment from your travelPay profile, ensuring that your team spend remains secure and controlled. </p>

                        </Col>
                      </Row>
                    </div>
                    <div className="projects__block active" style={{height: '100%'}}>
                      <Row style={{marginTop: '0px'}}>
                        <Col xs={12} md={6}>
                          <h2>Full Control</h2>
                          <p>You have full control over all your companies and/or branches with a single sign-on. </p>
                          <p>Give your team the ability to load payments for you to approve, or to make payment directly to pre-selected suppliers, with set limits in place. </p>
                          <p>Our systems are designed to be adaptable to your unique business infrastructure, operations and requirements. </p>

                        </Col>
                      </Row>
                    </div>
                    <div className="projects__block active" style={{height: '100%', paddingBottom: '40px'}}>
                      <Row style={{marginTop: '0px'}}>
                        <Col xs={12} md={6}>
                          <h2>Full Customisation</h2>
                          <p>Set detailed user rights across your organisation. </p>
                          <p>Allow your team to create payment links for customers, add links to existing invoices, pay suppliers or simply load the payment for your approval, on a user-by-user level. </p>
                          <p>Set different user functions for management, accounts, agents, etc. </p>
                          <p>travelPay is fully customisable to your needs. </p>  

                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}
