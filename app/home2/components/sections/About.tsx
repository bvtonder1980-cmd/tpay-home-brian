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
