import { images } from "@/types/images";

export default function Cards() {
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
                  <div className="content__title">
                    <div className="h1">Card, Bank and Mobile</div>
                    <div className="h1">Payments</div>
                  </div>
                   <div style={{fontSize: '1.5em', marginTop: '20px', lineHeight: '1.2', textAlign: 'justify'}}>With a transaction rate of almost 20,000 transactions per hour, Cross Switch is an international powerhouse that gives our customers access to state of the art card processing and bank payments, while their fraud detection systems and AI transaction monitoring adds additional layers of safety when transacting.</div>
                  <div style={{display: 'flex', justifyContent: 'end', verticalAlign: 'bottom', height: '100%', alignItems: 'end', marginTop: '20px', marginBottom: '20px'}}>
                  <img src="/images/secureLogos/crossswitch.png" alt="Cross Switch" style={{height: '120px'}} />
                  </div>
                </div>
                <div className="content__right">
                  <div className="content__subtitle">More ways to get <span>paid</span></div>
                  <div className="content__awards awards__list">
                    <div className="content__award">
                      <div className="content__award-title">
                        <p>Credit &amp; Debit Card</p>
                      </div>
                      <div className="content__award-text small" style={{display: 'flex', gap: '10px', flexDirection: 'row'}}>
                        <img src="/images/newHome/mc.png" alt="Card" style={{height: '70px'}} />
                        <img src="/images/newHome/visa.png" alt="Card" style={{height: '70px'}} />
                        <img src="/images/newHome/amex.png" alt="Card" style={{height: '70px'}} />
                        <img src="/images/newHome/diners.png" alt="Card" style={{height: '70px'}} />
                        <img src="/images/secureLogos/3ds.png" alt="Card" style={{marginLeft: '20px', height: '60px', marginTop: '5px'}} />
                      </div>
                    </div>
                    <div className="content__award">
                      <div className="content__award-title">
                        <p>Instant EFT &amp; Bank Payments</p>
                      </div>
                      <div className="content__award-text small" style={{display: 'flex', gap: '10px', flexDirection: 'row'}}>
                        <img src="/images/newHome/absa.png" alt="Card" style={{height: '70px'}} />
                        <img src="/images/newHome/fnb.png" alt="Card" style={{height: '70px'}} />
                      </div>
                    </div>
                    <div className="content__award">
                      <div className="content__award-title">
                        <p>Mobile Wallet Payments</p>
                      </div>
                      <div className="content__award-text small" style={{display: 'flex', gap: '10px', flexDirection: 'row'}}>
                        <img src="/images/newHome/appl.png" alt="Card" style={{height: '70px'}} />
                        <img src="/images/newHome/ggl.png" alt="Card" style={{height: '70px'}} />
                      </div>
                    </div>
                    <div className="content__award">
                      <div className="content__award-title">
                        <p>travelPay Wallet</p>
                      </div>
                      <div className="content__award-text small" style={{display: 'flex', gap: '10px', flexDirection: 'row'}}>
                        <img src="/images/newHome/tpay.png" alt="Card" style={{height: '70px'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}