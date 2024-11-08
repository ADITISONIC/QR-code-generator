import { useState } from "react";
import QRCode from "react-qr-code";

export default function QrCode() {
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState("");

    // Function to update the input state
    function handleInputChange(event) {
        setInput(event.target.value);
    }

    // Function to generate the QR code with the entered value
    function handleGenerateQrCode() {
        setQrCode(input);
        setInput(''); // Clear the input after generating the QR code
    }

    return (
        <div>
            <h1>QR CODE GENERATOR</h1>
            <div>
                <input 
                    type="text" 
                    name="qr-code" 
                    placeholder="Enter your value here" 
                    value={input} 
                    onChange={handleInputChange} // Add onChange to update the input state
                />
                <button 
                    disabled={!input.trim()} 
                    onClick={handleGenerateQrCode}
                >
                    Generate
                </button>
            </div>
            <div>
                {qrCode && (
                    <QRCode
                        id="qr-code-value"
                        value={qrCode}
                        size={400}
                    />
                )}
            </div>
        </div>
    );
}