'use client';
import '../home.css';
import Header from './Header';
import PageTitles from './PageTitles';
import Intro from './sections/Intro';
import About from './sections/About';
import Cards from './sections/Cards';
import Crypto from './sections/Crypto';
import International from './sections/International';
import Wallet from './sections/Wallet';
import Contact from './sections/Contact';
import HomeLegacyScript from './HomeLegacyScript';
import Register from './sections/registration/Register';
import { useState } from 'react';

export default function Home() {
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [loginMessage, setLoginMessage] = useState('');
    const [loginError, setLoginError] = useState('');
    const [registerPercentage, setRegisterPercentage] = useState(0);
    return (
        <>
        <main className="main main--home" style={{ opacity: 0 }}>
            <Header onMenuClick={() => setShowRegister(false)} />
            <div className="scroll">
                <div className="home-page">
                    {/* tP Logo */}
                    <div className="tp-logo-fixed">
                      <span>tP</span>
                    </div>
                    <PageTitles showRegister={showRegister} registerPercentage={registerPercentage} />
                    <Intro showLogin={showLogin} loginMessage={loginMessage} setLoginMessage={setLoginMessage} loginError={loginError} setLoginError={setLoginError} setShowLogin={setShowLogin} onRegisterClick={() => {document.getElementById('contact-link')?.click(); setTimeout(() => {setShowRegister(true);}, 650);}} />
                    <About />
                    <Cards />
                    <Crypto />
                    <International />
                    <Wallet />
                    <Contact showRegister={showRegister} registerPercentage={registerPercentage} setRegisterPercentage={setRegisterPercentage} onRegisterClick={() => {setShowRegister(true);}} />
                   
                </div>
            </div>
            <Register setLoginMessage={setLoginMessage} setLoginError={setLoginError} goToLogin={() => { window.scrollTo(0, 0); setShowRegister(false); setShowLogin(true);}} progressUpdated={(percentage: number) => {setRegisterPercentage(percentage);}} showRegister={showRegister} setShowRegister={setShowRegister} />
        </main>
        <HomeLegacyScript />
        </>
    );
}
