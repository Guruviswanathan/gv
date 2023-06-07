import React, { useState } from "react";
import './otp.css';




const OTPBox = () => {
    const [otp, setOtp] = useState(new Array(4).fill(""));

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        //Focus next input
        if (element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    return (
        <>
           

      <body class="o1">

            <div className="container">
            <header>
        <i class="bx bxs-check-shield"></i>
      </header>
      <h4>Enter OTP Code</h4>
                <div className="form">
                   
                    

                    {otp.map((data, index) => {
                        return (
                            <input
                                className="otp-field"
                                type="text"
                                name="otp"
                                maxLength="1"
                                key={index}
                                value={data}
                                onChange={e => handleChange(e.target, index)}
                                onFocus={e => e.target.select()}
                            />
                        );
                    })}

                    <p>
                       
                        <button
                            className="ob"
                            onClick={e =>
                                alert("Entered OTP is " + otp.join(""))
                            }
                        >
                            Verify OTP
                        </button>
                        </p>

                        <small>If you didn't recieve a code!!<strong>RESEND</strong></small>
                        
                 
                </div>
            </div>
            </body>
        </>
    );
};

export default OTPBox;