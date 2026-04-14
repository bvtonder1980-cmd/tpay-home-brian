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
                <h1 className="text-center" style={{marginTop: '20px', marginBottom: '20px'}}>Privacy Policy</h1>
            <p className="text-center"><strong>Last Updated:</strong> 28 July 2025</p>

            <div className="privacy-content" style={{lineHeight: '1.6', marginTop: '40px'}}>
                <h2>1. Introduction</h2>
                <p>travelPay ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our travel payment platform and related services.</p>

                <h2>2. Information We Collect</h2>
                <h3>2.1 Personal Information</h3>
                <p>We collect personal information that you provide directly to us, including:</p>
                <ul>
                    <li>Name, email address, and contact information</li>
                    <li>Identification numbers and date of birth</li>
                    <li>Company registration details and VAT information</li>
                    <li>Physical and postal addresses</li>
                    <li>Payment and banking information</li>
                    <li>Travel booking preferences and history</li>
                </ul>

                <h3>2.2 Automatically Collected Information</h3>
                <p>We automatically collect certain information when you use our platform:</p>
                <ul>
                    <li>Device information and IP addresses</li>
                    <li>Browser type and operating system</li>
                    <li>Usage patterns and interaction data</li>
                    <li>Cookies and similar tracking technologies</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use the collected information for the following purposes:</p>
                <ul>
                    <li>Providing and maintaining our travel payment services</li>
                    <li>Processing transactions and payments</li>
                    <li>Verifying your identity and preventing fraud</li>
                    <li>Communicating with you about your account and services</li>
                    <li>Improving our platform and user experience</li>
                    <li>Complying with legal and regulatory requirements</li>
                    <li>Marketing and promotional activities (with your consent)</li>
                </ul>

                <h2>4. Information Sharing and Disclosure</h2>
                <p>We may share your information in the following circumstances:</p>
                <ul>
                    <li><strong>Service Providers:</strong> With trusted third-party service providers who assist in operating our platform</li>
                    <li><strong>Payment Processors:</strong> With payment processors to facilitate transactions</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> With your explicit consent for specific purposes</li>
                </ul>

                <h2>5. Data Security</h2>
                <p>We implement appropriate technical and companyal measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                <ul>
                    <li>Encryption of sensitive data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>Access controls and authentication procedures</li>
                    <li>Employee training on data protection</li>
                </ul>

                <h2>6. Data Retention</h2>
                <p>We retain your personal information for as long as necessary to:</p>
                <ul>
                    <li>Provide our services to you</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes and enforce agreements</li>
                    <li>Maintain business records</li>
                </ul>
                <p>When we no longer need your information, we will securely delete or anonymize it.</p>

                <h2>7. Your Rights and Choices</h2>
                <p>You have the following rights regarding your personal information:</p>
                <ul>
                    <li><strong>Access:</strong> Request a copy of your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to certain processing activities</li>
                    <li><strong>Withdrawal:</strong> Withdraw consent for marketing communications</li>
                </ul>

                <h2>8. Cookies and Tracking Technologies</h2>
                <p>We use cookies and similar technologies to:</p>
                <ul>
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website usage and performance</li>
                    <li>Provide personalized content and advertisements</li>
                    <li>Ensure security and prevent fraud</li>
                </ul>
                <p>You can control cookie settings through your browser preferences.</p>

                <h2>9. International Data Transfers</h2>
                <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy and applicable laws.</p>

                <h2>10. Children's Privacy</h2>
                <p>Our services are not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.</p>

                <h2>11. Third-Party Links</h2>
                <p>Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to review their privacy policies before providing any personal information.</p>

                <h2>12. Changes to This Privacy Policy</h2>
                <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
                <ul>
                    <li>Posting the updated policy on our website</li>
                    <li>Sending you an email notification</li>
                    <li>Displaying a notice on our platform</li>
                </ul>
                <p>Your continued use of our services after such changes constitutes acceptance of the updated Privacy Policy.</p>

                <h2>13. Contact Us</h2>
                <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
                <ul>
                    <li><strong>Email:</strong> privacy@travelpay.com</li>
                    <li><strong>Phone:</strong> +27 11 123 4567</li>
                    <li><strong>Address:</strong> 123 Business Street, Johannesburg, South Africa, 2000</li>
                </ul>

                <h2>14. Governing Law</h2>
                <p>This Privacy Policy is governed by and construed in accordance with the laws of South Africa. Any disputes arising from this Privacy Policy will be subject to the exclusive jurisdiction of the courts of South Africa.</p>

                <div style={{marginTop: '40px', padding: '20px', backgroundColor: '', borderRadius: '8px'}}>
                    <p><strong>Note:</strong> This Privacy Policy is effective as of the date listed above. By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to be bound by its terms.</p>
                </div>
            </div>
            </Container>
            <Footer />
        </div>
        
    );
}