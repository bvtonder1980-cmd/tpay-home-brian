import { FastForward, MoneyOffCsred, Public, RocketLaunch, Security, VerifiedUser } from "@mui/icons-material";

export default function International() {
    return (
        <div className="scrollable">
            <section className="experience">
              <div className="sticky-title">
                <ul>
                  <li>
                    <div>International</div>
                    <div>5.0</div>
                  </li>
                </ul>
              </div>
              <div className="content">
                
                <div className="content__left">
                  <div className="content__title">
                    <div className="h1">Global Money</div>
                    <div className="h1">Movement</div>
                  </div>
                    <div style={{fontSize: '1.5em', marginTop: '20px', lineHeight: '1.2', textAlign: 'justify'}}>travelPay’s partnership with Xago enables our clients to pay their international suppliers in most countries around the globe in minutes, while also reducing cost and currency volatility. By using stablecoins for each supported currency we ensure stable, secure, and near-instant global transactions.<br/><br/><small><i>Coming soon to travelPay...</i></small></div>
                    <div style={{display: 'flex', justifyContent: 'end', verticalAlign: 'bottom', height: '100%', alignItems: 'end', marginTop: '20px', marginBottom: '20px'}}>
                  <img src="/images/secureLogos/xago.png" alt="Xago" style={{height: '50px'}} />
                  </div>
                </div>
                <div className="content__right">
                  <div className="content__awards experience__list">
                    <div className="content__award">
                      <div className="content__award-img"><RocketLaunch sx={{ fontSize: 50 }}/></div>
                      <div className="content__award-title">
                        <p style={{fontSize: '1.6em', fontWeight: 'bold'}}>More Speed</p>
                      </div>
                      <div className="content__award-text">Fast track your cross-border money transfers and settle your international suppliers in the available destinations in minutes.</div>
                    </div>
                    <div className="content__award">
                      <div className="content__award-img"><MoneyOffCsred sx={{ fontSize: 50 }}/></div>
                      <div className="content__award-title">
                        <p style={{fontSize: '1.6em', fontWeight: 'bold'}}>Less Cost</p>
                      </div>  
                      <div className="content__award-text">Our cost effective solutions and tailored payments channels enable you to transact internationally for less fees and decreased volatility. </div>
                    </div>
                    <div className="content__award">
                      <div className="content__award-img"><Public sx={{ fontSize: 50 }}/></div>
                      <div className="content__award-title">
                        <p style={{fontSize: '1.6em', fontWeight: 'bold'}}>Greater Reach</p>
                      </div>
                      <div className="content__award-text">Transact with difficult to reach countries, especially in Africa with the option of settling them in USD or local currency.</div>
                    </div>
                    <div className="content__award">
                      <div className="content__award-img"><VerifiedUser sx={{ fontSize: 50 }}/></div>
                      <div className="content__award-title">
                        <p style={{fontSize: '1.6em', fontWeight: 'bold'}}>Safe AND Secure</p>
                      </div>
                      <div className="content__award-text">Simplify your financial transactions with our secure and efficient exchange platform, designed to handle your fiat to crypto needs effortlessly.</div>
                    </div>
                    <div className="content__award">
                      <div className="content__award-img"><Security sx={{ fontSize: 50 }}/></div>
                      <div className="content__award-title">
                        <p style={{fontSize: '1.6em', fontWeight: 'bold'}}>Fully Compliant</p>
                      </div>
                      <div className="content__award-text">Working closely with the regulators Xago ensures that all transactions fall within the scope of regulations.</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}