'use client';
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

export default function Intro({ showLogin, setShowLogin, onRegisterClick, loginMessage, setLoginMessage, loginError, setLoginError }: { showLogin: boolean, setShowLogin: (show: boolean) => void, onRegisterClick: () => void, loginMessage: string, setLoginMessage: (message: string) => void, loginError: string, setLoginError: (error: string) => void }) {
    const buzzWords = ["Secure", "Reliable", "Fast", "Seamless"];
    const [animationPhase, setAnimationPhase] = useState<'typing' | 'backspacing' | 'idle'>('idle');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentBuzzWord, setCurrentBuzzWord] = useState<string>(buzzWords[0]);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setAnimationPhase('backspacing');
  
        setTimeout(() => {
          const nextIndex = (currentIndex + 1) % buzzWords.length;
          setCurrentIndex(nextIndex);
          setCurrentBuzzWord(buzzWords[nextIndex]);
          setAnimationPhase('typing');
  
          setTimeout(() => {
            setAnimationPhase('idle');
          }, 1000);
        }, 800);
      }, 3000);
  
      return () => clearInterval(interval);
  }, [currentIndex, buzzWords.length]);
  
    return (
        <div className="scrollable">
        <section className="home">
          <div className="sticky-title">
            <ul>
              <li>
                <div>Welcome to TravelPay</div>
                <div>1.0</div>
              </li>
            </ul>
          </div>
          <div className="content">
            <div className="content__left">
              <div className="content__logo">
                <img src="img/tpay-welcome.png" alt=""/>
              </div>
              <div className="content__title">
                <div className="h1">The Closed Payments</div>
                <div className="h1">Ecosystem designed</div>
                <div className="h1">for Travel businesses</div>
              </div>
              <div className="login-box2" >
                <div className="login-modal__content">
                  <div className="login-modal__title">Login</div>
                  {loginMessage && <Alert variant="info">{loginMessage}</Alert>}
                  {loginError && <Alert variant="danger">{loginError}</Alert>}
                  <div className="login-modal__form">
                    <div className="login-modal__form-input">
                      <input type="text" name="username" placeholder="Username"/>
                    </div>
                    <div className="login-modal__form-input">
                      <input type="password" name="password" placeholder="Password"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content__btn-block">
                <a className="register-btn" data-link="6" onClick={onRegisterClick}>
                  Register
                </a>
                &nbsp;
                <a className="login-btn" data-link="6" onClick={() => setShowLogin(true)}>
                  Login
                </a>
              </div>
              <div className="home__numbers">
                <div className="home__number">
                  <div className="home__number-digital" data-number="8">8</div>
                  <div className="home__number-text small">Years <br/>experience</div>
                </div>
                <div className="home__number">
                  <div className="home__number-digital" data-number="5">5</div>
                  <div className="home__number-text small">Themeforest <br/>awwards</div>
                </div>
                <div className="home__number">
                  <div className="home__number-digital" data-number="60">60</div>
                  <div className="home__number-text small">Projects <br/>Done</div>
                </div>
              </div>
            </div>
            <div className="content__right">
              <div className="home__circles">
                <div className="home__circles-lines" style={{display: 'none'}}></div>
                <div className="home__circle home__circle--left"><img className="home__circle-img" src="img/image-1.jpg" alt=""/></div>
                <div className="home__circle home__circle--right">
                  <div className="home__circle-text buzz-word-container">
                  {buzzWords.map((word, index) => (
                      <h1
                        key={index}
                        style={{ display: currentBuzzWord === word ? 'block' : 'none' }}
                        className={`buzz-word ${animationPhase === 'typing' && currentBuzzWord === word ? 'typing-in' : animationPhase === 'backspacing' && currentBuzzWord === word ? 'backspacing-out' : ''}`}
                      >
                        {word}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
}