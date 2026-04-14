export default function PageTitles({ showRegister, registerPercentage }: { showRegister: boolean, registerPercentage: number }) {
    return (
        <div className="page-title show">
            <ul>
              <li>
                <div className="title">Welcome to TravelPay</div>
                <div className="number">1.0</div>
              </li>
              <li>
                <div className="title">about travelPay</div>
                <div className="number">2.0</div>
              </li>
              <li>
                <div className="title">Card, Bank and Mobile Payments</div>
                <div className="number">3.0</div>
              </li>
              <li>
                <div className="title">Crypto</div>
                <div className="number">4.0</div>
              </li>
              <li>
                <div className="title">Global</div>
                <div className="number">5.0</div>
              </li>
              <li>
                <div className="title">TravelPay Wallet</div>
                <div className="number">6.0</div>
              </li>
              <li>
                <div className="title">{showRegister ? 'Register' : 'Contact'}</div>
                <div className="number">{showRegister ? `${registerPercentage}%` : '7.0'}</div>
              </li>
            </ul>
          </div>
    );
}