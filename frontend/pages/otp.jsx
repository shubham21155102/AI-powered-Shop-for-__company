import React from "react";
import { useState } from "react";
export default function Otp(){
    const [otpSent, setOtpSent] = useState(false);
    const handleSendOTP = () => {
        // Perform the logic to send OTP to the entered email
        setOtpSent(true);
        };

    return(
        <>
             <button
                        class="btn"
                        style={{color:"white"}}
                        name="sendOTP"
                        type="button"
                        onClick={handleSendOTP}
                      >
                        Send OTP
                      </button>
        </>
    )
}