'use client';

import { useEffect, useMemo, useState } from "react";

export default function Crypto() {
    const slides = useMemo(
      () => [
        <div className="content__slider-text" key="s1">
          There are over{" "}
          <span style={{ fontWeight: "bold", fontSize: "1.4em", color: "#0058a8" }}>6 million</span>{" "}
          crypto users in South Africa, unlocking{" "}
          <span style={{ fontWeight: "bold", fontSize: "1.4em", color: "#0058a8" }}>new potential customers</span>{" "}
          for you.
        </div>,
        <div className="content__slider-text" key="s2">
          Around{" "}
          <span style={{ fontWeight: "bold", fontSize: "1.4em", color: "#0058a8" }}>49%</span>{" "}
          of the South African users indicated an openness to{" "}
          <span style={{ fontWeight: "bold", fontSize: "1.4em", color: "#0058a8" }}>spending their crypto on travel.</span>
        </div>,
        <div className="content__slider-text" key="s3">
          Travel businesses who accept crypto globally, have seen an{" "}
          <span style={{ fontWeight: "bold", fontSize: "1.4em", color: "#0058a8" }}>increase in sales of up to 40%</span>{" "}
          since accepting crypto payments.
        </div>,
        <div className="content__slider-text" key="s4">
          Globally,{" "}
          <span style={{ fontWeight: "bold", fontSize: "1.4em", color: "#0058a8" }}>crypto users spend 2.5x</span>{" "}
          more, compared to traditional tourists.
        </div>,
      ],
      []
    );

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const id = window.setInterval(() => {
        setActiveIndex((i) => (i + 1) % slides.length);
      }, 5000);
      return () => window.clearInterval(id);
    }, [slides.length]);

    return (
        <div className="scrollable">
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
                <div className="content__left">
                  <div className="content__title">
                    <div className="h1">Bitcoin and Crypto</div>
                    <div className="h1">Payments</div>
                    <div style={{fontSize: '1.5em', marginTop: '20px', textAlign: 'justify', lineHeight: '1.2'}}>In South Africa, MoneyBadger are the pioneers in enabling Bitcoin and Crypto payments for local and global consumers. Having successfully rolled out nationally in Pick n Pay and other recognised retail brands, our partnership with MoneyBadger now brings zero volatility bitcoin and crypto payment options into the travel sphere. 
                  </div>
                  </div>
                  <div className="testimonials__clients">
                    <div style={{display: 'flex', justifyContent: 'end', marginBottom: '0px', paddingBottom: '20px', width: '100%'}}>
                      <img src="/images/cryptologos/moneybadger.png" alt="" style={{height: '100px'}}/>
                    </div>
                  </div>
                </div>
                <div className="content__right">
                  <div className="content__subtitle" style={{maxWidth: 'auto', width:'100%', fontSize: '2em'}}>Customers pay with <b>Bitcoin &amp; crypto</b></div>
                  <div className="content__subtitle" style={{maxWidth: 'auto', width:'100%', fontSize: '2em'}}>You get paid in rands - <b>No volatility</b></div>

                  <div style={{display: 'flex', alignItems: 'start', flexDirection: 'column', marginTop: '40px', width: '100%'}}>
                    <div style={{display: 'flex', justifyContent: 'center', gap: '15px'}}>
                      <div style={{width: '12.5%'}}><img src="/images/cryptologos/luno.png" alt="Luno" style={{width: '50px'}} /></div>
                      <div style={{width: '12.5%'}}><img src="/images/cryptologos/binance.png" alt="Binance" style={{width: '50px'}} /></div>
                      <div style={{width: '12.5%'}}><img src="/images/cryptologos/valr.png" alt="Valr" style={{width: '50px'}} /></div>
                      <div style={{width: '12.5%'}}><img src="/images/cryptologos/act.png" alt="ACT" style={{width: '50px'}} /></div>
                      <div style={{width: '12.5%'}}><img src="/images/cryptologos/aqua.png" alt="Luno" style={{width: '50px'}} /></div>
                      <div style={{width: '12.5%'}}><img src="/images/cryptologos/btc.png" alt="Binance" style={{width: '50px'}} /></div>
                      <div style={{width: '12.5%'}}><img src="/images/cryptologos/lightning.png" alt="Valr" style={{width: '50px'}} /></div>
                      <div style={{width: '12.5%'}}><img src="/images/cryptologos/blitz.webp" alt="ACT" style={{width: '50px'}} /></div>
                    </div>
                  </div>

                  <div className="content__subtitle" style={{maxWidth: 'auto', marginTop: '60px', fontSize: '1.5em'}}>Did you know...</div>
                  <div className="content__slider slides testimonials__slider">
                    <div className="slides__container">
                      <div className="slides__inner">
                        {slides.map((content, index) => (
                          <div
                            className="slide"
                            key={index}
                            aria-hidden={index !== activeIndex}
                            style={{
                              transform: `translateX(${(index - activeIndex) * 100}%)`,
                              transition: "transform 500ms ease",
                            }}
                          >
                            {content}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div
                      className="slides__progress"
                      role="progressbar"
                      aria-label="Slide progress"
                      aria-valuemin={1}
                      aria-valuemax={slides.length}
                      aria-valuenow={activeIndex + 1}
                    >
                      <div className="slides__progress-track" />
                      <div
                        className="slides__progress-thumb"
                        style={{
                          width: `${100 / slides.length}%`,
                          transform: `translateX(${activeIndex * 100}%)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
    );
}