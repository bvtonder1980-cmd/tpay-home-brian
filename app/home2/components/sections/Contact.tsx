'use client';

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

export default function Contact({ showRegister,registerPercentage, setRegisterPercentage, onRegisterClick }: { showRegister: boolean, registerPercentage: number, setRegisterPercentage: (percentage: number) => void, onRegisterClick?: () => void }) {
    
  if(showRegister) {
    return (
      <div className="scrollable" id="hireme">
            <section className="contacts">
              <div className="sticky-title">
                <ul>
                  <li>
                    <div>Register</div>
                    <div>{registerPercentage}%</div>
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="content__left">
                  <div className="content__title">
                    <div className="h1">Secure registration</div>
                    <div className="h1">in progress...</div>
                  </div>
                  {showRegister && <div className="progress-container">
                    <CircularProgressbar value={registerPercentage} styles={buildStyles({ pathColor: '#0090d6', textColor: '#fff', trailColor: '#cbcbcb', })} text={`${registerPercentage}%`} />
                  </div>}
                  <div className="contacts__copyright small">© travelPay {new Date().getFullYear()}.  All Rights Resevered</div>
                </div>
                <div className="content__right" style={{pointerEvents:'none'}}>
                  <div className="opac-100-20">
                    <div className="content__subtitle">Let's discuss how travelPay can help you make more money</div>
                    <form className="content__contacts contacts__form js-contact-form" method="post">
                      <div className="content__form">
                        <label className="content__form-input">
                          <input type="text" name="name"/><span className="content__form-placeholder">name</span>
                        </label>
                        <label className="content__form-input">
                          <input type="email" name="emal" required /><span className="content__form-placeholder">EMAIL *</span>
                        </label>
                        <label className="content__form-input">
                          <input type="text" name="msg" required minLength={10} /><span className="content__form-placeholder">MESSAGE *</span>
                        </label>
                        <div className="content__form-btn">
                          <button className="btn" type="submit">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>    
    );
  }
  

    return (
        <div className="scrollable" id="hireme">
            <section className="contacts">
              <div className="sticky-title">
                <ul>
                  <li>
                    <div>Contact</div>
                    <div>7.0</div>
                  </li>
                </ul>
              </div>
              <div className="content">
                <div className="content__left">
                  <div className="content__title">
                    <div className="h1">Ready to travelPay?</div>
                  </div>
                  <ul className="content__menu contacts__menu">
                    <li className="active"><a>Sign up is free</a></li>
                    <li className="active"><a>It takes 3 minutes to register</a></li>
                    <li className="active"><a href="https://behance.net/Paulggooo" target="_blank">www.behance.net/Paulggooo</a></li>
                    <li className="active"><a className="noicon" href="https://t.me/robert_inc" target="_blank">telegram: robert_inc</a></li>
                  </ul>
                  <div style={{ marginTop: 20 }}>
                    <a className="btn" onClick={onRegisterClick}>
                      {registerPercentage > 0 ? 'Continue Registration' : 'Sign me up now!'}
                    </a>
                  </div>
                  {showRegister && <div className="progress-container">
                    <CircularProgressbar value={registerPercentage} styles={buildStyles({ pathColor: '#0090d6', textColor: '#fff', trailColor: '#cbcbcb', })} text={`${registerPercentage}%`} />
                  </div>}
                  <div className="contacts__copyright small">© travelPay {new Date().getFullYear()}.  All Rights Resevered</div>
                </div>
                <div className="content__right">
                  <div className="content__subtitle">Let's discuss how travelPay can help you make more money</div>
                  <form className="content__contacts contacts__form js-contact-form" method="post">
                    <div className="content__form">
                      <label className="content__form-input">
                        <input type="text" name="name"/><span className="content__form-placeholder">name</span>
                      </label>
                      <label className="content__form-input">
                        <input type="email" name="emal" required /><span className="content__form-placeholder">EMAIL *</span>
                      </label>
                      <label className="content__form-input">
                        <input type="text" name="msg" required minLength={10} /><span className="content__form-placeholder">MESSAGE *</span>
                      </label>
                      <div className="content__form-btn">
                        <button className="btn" type="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>    
    );
}