/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "./App.css";

import OtpInput from "otp-input-react";

function App() {
  // const [otpValue, setOtpValue] = useState<any>();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Firebase Otp react!</h1>
      {/* <OtpInput
        OTPLength={6}
        value={otpValue}
        onChange={(e: any) => setOtpValue(e.target.value)}
        otpType="number"
        disabled={false}
        autoFocus
      ></OtpInput> */}
    </>
  );
}

export default App;
