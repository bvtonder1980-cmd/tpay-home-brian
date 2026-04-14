import { images } from "@/types/images";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import './footer.css';

export default function Footer({style}: {style?: React.CSSProperties}) {
    return (
        <footer style={style}>
            <Container> 
            <div className="justify-content-center align-items-center" style={{marginTop:'50px', marginBottom:'-30px'}}>
                <center>
                    <div style={{width:'100%', borderBottom:'1px solid #313131', marginBottom:'50px'}}>

                    </div>
                </center>
            </div>
            <Row style={{ width: '100%' }}>
                <Col align="left" sm={12} md={3} style={{ padding: '20px', borderRight:'1px solid #313131' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Payment Solutions</h2>
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        <li><Link href="/card-payments">Card Payments</Link></li>
                        <li><Link href="/instant-eft">Instant EFT</Link></li>
                        <li><Link href="/cardless-payments">Cardless Payments</Link></li>
                        <li><Link href="/bitcoin-payments">Bitcoin Payments</Link></li>
                        <li><Link href="/p2p">travelPay P2P</Link></li>
                    </ul>
                </Col>
                <Col align="left" sm={12} md={3} style={{ padding: '20px', borderRight:'1px solid #313131' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>For Developers</h2>
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        <li><Link href="/contact">Developer Portal</Link></li>
                    </ul>
                </Col>
                <Col align="left" sm={12} md={3} style={{ padding: '20px', borderRight:'1px solid #313131' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Legal</h2>
                    <ul style={{ listStyleType: 'none', padding: '0' }}>
                        <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                        <li><Link href="/privacypolicy">Privacy Policy</Link></li>
                        <li>Cookie Policy</li>
                        <li>AML Policy</li>
                        <li>PAIA Manual</li>
                    </ul>
                </Col>
                <Col align="left" sm={12} md={3} style={{ padding: '20px', }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '20px' }}>Contact Us</h2>
                    <p>
                        Email: <a href="mailto:info@travelpay.co.za">info@travelpay.co.za</a>
                        <br/>
                        Phone: <a href="tel:+27824567890">+27 82 456 7890</a>
                    </p>
                </Col>
            </Row>
            <div className="justify-content-center align-items-center" style={{marginTop:'20px'}}>
                <center>
                    <div style={{width:'100%', borderBottom:'1px solid #313131', marginBottom:'50px'}}>

                    </div>
                </center>
            </div>

            <table style={{ width: '100%', marginTop:'-20px' }}>
                <tbody>
                    <tr>
                        <td width="20%">&copy; {new Date().getFullYear()} travelPay</td>
                        <td align="center">
                        </td>
                        <td valign="bottom" align="right" width="20%" style={{ fontSize: '14px', color: '#fff' }}></td>

                    </tr>
                </tbody>
            </table>
            </Container>
        </footer>
    );
}