import { Col, Row } from "react-bootstrap";

export default function Wallet() {
    return (
        <div className="scrollable">
            <section className="news">
              <div className="sticky-title">
                <ul>
                  <li>
                    <div>TravelPay Wallet</div>
                    <div>6.0</div>
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="content__left">
                  <div className="content__title">
                    <div className="h1">travelPay</div>
                    <div className="h1">Wallet</div>
                    <div style={{fontSize: '1.5em', marginTop: '20px', lineHeight: '1.2', textAlign: 'justify'}}>The Closed Payments Ecosystem designed exclusively for travel businesses</div>
                  </div>
                  <ul className="content__menu news__menu">
                    <li className="active"><a href="javascript:;">What is my travelPay Wallet</a></li>
                    <li><a href="javascript:;">Instant, yet cost effective</a></li>
                    <li><a href="javascript:;">Let your team transact</a></li>
                    <li><a href="javascript:;">Total Visibility</a></li>
                  </ul>
                </div>
                <div className="content__right">
                  <div className="news__blocks">
                    <div className="news__block active">
                      <div className="news__block-image" style={{ height: 'calc(100vh - 120px)'}}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', height: '100%'}}>
                          <Row>
                            <Col xs={12} md={6}>
                              <h2 style={{marginTop:'40px'}}>What is my travelPay Wallet</h2>
                              <p style={{fontSize: '1.2em', lineHeight: '1.2', textAlign: 'justify', marginTop: '10px'}}>The travelPay wallet is a digital, transactional wallet that allows you to make and receive payments to or from other members in the travelPay network.</p>
                              <p style={{fontSize: '1.2em', lineHeight: '1.2', textAlign: 'justify', marginTop: '20px'}}>Each business in the network is assigned a travelPay ID, which allows for payments to occur without exposing bank or card details, making it much safer to transact and less vulnerable to scams, such as swopping banking details on invoices. </p>
                              <p style={{fontSize: '1.2em', lineHeight: '1.2', textAlign: 'justify', marginTop: '20px'}}>Since all members are vetted and approved travel businesses, you have full control over who is able to be paid from your wallet. </p>
                            </Col>
                            <Col xs={12} md={6}>
                            
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className="news__block active">
                      <div className="news__block-image" style={{height: 'calc(100vh - 120px)'}}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', height: '100%'}}>
                          <Row>
                            <Col xs={12} md={6}>
                              <h2 style={{marginTop:'-15px'}}>Instant, yet cost effective.</h2>
                              <p style={{fontSize: '1.2em', lineHeight: '1.2', textAlign: 'justify', marginTop: '10px'}}>All wallet-to-wallet payments are instant and our low fees on these transactions ensure savings of up to 50% compared to traditional payment methods. </p>
                            </Col>
                            <Col xs={12} md={6}>
                            
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className="news__block active">
                      <div className="news__block-image" style={{ height: 'calc(100vh - 120px)'}}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', height: '100%'}}>
                          <Row>
                            <Col xs={12} md={6}>
                              <h2 style={{marginTop:'-15px'}}>Let your team transact.</h2>
                              <p style={{fontSize: '1.2em', lineHeight: '1.2', textAlign: 'justify', marginTop: '10px'}}>Since businesses owners pre-approve recipients, you can now let your agents pay their preferred suppliers. You are also able to set spending limits, allowing for different levels of access within your organisation. </p>
                              <p style={{fontSize: '1.2em', lineHeight: '1.2', textAlign: 'justify', marginTop: '20px'}}>You have the option of letting your team transact, or to let them load payments for you to approve. </p>
                              <p style={{fontSize: '1.2em', lineHeight: '1.2', textAlign: 'justify', marginTop: '20px'}}>Our wallet technology gives you full control and is customisable enough to fit into your businesses' existing operational model. </p>
                            </Col>
                            <Col xs={12} md={6}>
                            
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                    <div className="news__block active">
                      <div className="news__block-image" style={{ height: 'calc(100vh - 120px)'}}>
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', height: '100%'}}>
                          <Row>
                            <Col xs={12} md={6}>
                              <h2 style={{marginTop:'-15px'}}>Total Visibility</h2>
                              <p style={{fontSize: '1.2em', lineHeight: '1.2', textAlign: 'justify', marginTop: '10px'}}>From login to navigation and all the way to actual transacting, our system logs every request a user makes. This gives you full visibility into what your team is doing on travelPay and gives you exact insights into each transaction.</p>
                            </Col>
                            <Col xs={12} md={6}>
                            
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}