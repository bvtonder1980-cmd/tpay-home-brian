import { Button } from "react-bootstrap";
import { images } from "@/types/images";
import './tPayButton.css';

export default function TPayButton({ text, href, onClick, style }: { text: string, href: string, onClick: () => void, style?: React.CSSProperties }) {
    return (
        <Button variant="light" className="tpay-button" style={{ ...style }} onClick={onClick} href={href}>{text}</Button>
    );
}