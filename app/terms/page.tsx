import { Container } from 'react-bootstrap';
import { images } from '../../types/images';
import Link from 'next/link';
import Footer from '@/components/footer/footer';

export default function Terms() {
    return (
        <div>
            <Container>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <Link href="/">
                        <img src={images.branding.logoW.src} alt="travelPay" className="img-fluid" style={{width:300}} />
                    </Link>
                </div>
            <h1 className="text-center" style={{marginTop: '20px', marginBottom: '20px'}}>Terms and Conditions</h1>
            <p className="text-center"><strong>Last Updated:</strong> 28 July 2025</p>

            <p>
            These Terms and Conditions (“Terms”) govern your use of TravelPay’s services (“Services”), including but not limited to card payments, cryptocurrency transactions, and peer-to-peer payments. By accessing or using TravelPay, you agree to be bound by these Terms.
            </p>

            <h2>1. About TravelPay</h2>
            <p>
            TravelPay is a financial technology platform that facilitates secure and convenient payment solutions for the travel industry. Our Services allow users to make and receive payments via debit/credit card, supported cryptocurrencies, and peer-to-peer (P2P) transfers.
            </p>

            <h2>2. Eligibility</h2>
            <p>
            You must be at least 18 years old and capable of entering into legally binding contracts to use TravelPay. By registering, you represent that the information you provide is accurate and that you will keep it up to date.
            </p>

            <h2>3. Account Registration</h2>
            <p>
            To access certain Services, you must create a TravelPay account. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. Notify us immediately if you suspect unauthorized access.
            </p>

            <h2>4. Payment Services</h2>
            <ul>
            <li><strong>Card Payments:</strong> TravelPay enables users to make payments via supported debit and credit cards. We use third-party payment processors to facilitate transactions securely.</li>
            <li><strong>Cryptocurrency Payments:</strong> We support certain cryptocurrencies as a form of payment. Crypto transactions are final and irreversible once confirmed on the relevant blockchain. Exchange rates are determined at the time of transaction and may vary.</li>
            <li><strong>Peer-to-Peer (P2P) Payments:</strong> Users may send and receive money directly between verified TravelPay accounts. P2P payments are subject to transaction limits and may be monitored for compliance with anti-fraud and anti-money laundering regulations.</li>
            </ul>

            <h2>5. Fees and Limits</h2>
            <p>
            Fees may apply for certain transactions or services. These fees will be disclosed at the point of transaction. We may also impose limits on the amount and frequency of transactions.
            </p>

            <h2>6. Prohibited Activities</h2>
            <p>
            You agree not to use TravelPay for:
            </p>
            <ul>
            <li>Any illegal or fraudulent activity</li>
            <li>Money laundering or terrorist financing</li>
            <li>Buying or selling prohibited items (e.g., drugs, weapons, counterfeit goods)</li>
            <li>Engaging in misleading or deceptive practices</li>
            </ul>
            <p>We reserve the right to suspend or terminate accounts involved in such activities.</p>

            <h2>7. Compliance and Verification</h2>
            <p>
            To comply with regulatory obligations, TravelPay may require you to verify your identity, including submitting personal identification documents. We may conduct ongoing monitoring of your transactions to ensure compliance with legal requirements.
            </p>

            <h2>8. Security</h2>
            <p>
            We implement industry-standard security measures to protect your data and funds. However, you acknowledge that no system is completely secure and agree to use the Services at your own risk.
            </p>

            <h2>9. Disclaimers and Limitation of Liability</h2>
            <p>
            TravelPay is provided on an “as-is” and “as-available” basis. We do not guarantee uninterrupted or error-free operation. To the maximum extent permitted by law, TravelPay is not liable for any loss, including indirect or consequential loss, arising from your use of the Services.
            </p>

            <h2>10. Changes to the Terms</h2>
            <p>
            We may update these Terms at any time. Any changes will be posted on our website with the updated date. Continued use of the Services after changes become effective constitutes your acceptance.
            </p>

            <h2>11. Termination</h2>
            <p>
            You may close your account at any time. TravelPay reserves the right to suspend or terminate your account if you breach these Terms or if required by law.
            </p>

            <h2>12. Governing Law</h2>
            <p>
            These Terms are governed by the laws of [Insert Country or Jurisdiction]. Any disputes arising under these Terms shall be resolved in the courts of [Insert Location].
            </p>

            <h2>13. Contact Us</h2>
            <p>
            If you have questions or concerns about these Terms, you can contact us at:
            </p>
            <p>
            <strong>Email:</strong> support@travelpay.io<br/>
            <strong>Website:</strong> <a href="https://www.travelpay.com" target="_blank">www.travelpay.com</a>
            </p>
            </Container>
            <Footer />
        </div>
    );
}