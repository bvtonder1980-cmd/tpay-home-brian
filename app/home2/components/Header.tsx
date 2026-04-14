export default function Header({ onMenuClick }: { onMenuClick: () => void }) {
    return (
        <div className="header">
            <div className="header__left">
                <div className="header__letter">t<span style={{ color: "#0058a8" }}>P</span></div>
                <div className="header__socials"><a href="" target="_blank">
                    <svg>
                        <use xlinkHref="/svg/sprite.svg#fb"></use>
                    </svg></a><a href="" target="_blank">
                    <svg>
                        <use xlinkHref="/svg/sprite.svg#tw"></use>
                    </svg></a><a href="" target="_blank">
                    <svg>
                        <use xlinkHref="/svg/sprite.svg#in"></use>
                    </svg></a></div>
                </div>
                <div className="header__right">
                    <ul className="header__menu">
                        <li className="active"><a className="js-scroll-link" href="javascript:;" onClick={onMenuClick} data-link="0">HOME</a></li>
                        <li><a className="js-scroll-link" href="javascript:;" onClick={onMenuClick} data-link="1">travelPay</a></li>
                        <li><a className="js-scroll-link" href="javascript:;" onClick={onMenuClick} data-link="2">Cards/EFT</a></li>
                        <li><a className="js-scroll-link" href="javascript:;" onClick={onMenuClick} data-link="3">Crypto</a></li>
                        <li><a className="js-scroll-link" href="javascript:;" onClick={onMenuClick} data-link="4">Global</a></li>
                        <li><a className="js-scroll-link" href="javascript:;" onClick={onMenuClick} data-link="5">travelPay&nbsp;Wallet</a></li>
                        <li><a id="contact-link" className="js-scroll-link" href="javascript:;" onClick={onMenuClick} data-link="6">CONTACT</a></li>
                    </ul>
                </div>
            </div>
    );
}