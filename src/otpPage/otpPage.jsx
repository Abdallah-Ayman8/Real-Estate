import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Timer from "./Timer";
import { useDispatch, useSelector } from "react-redux";
import { disableResendBtn, logIn } from "@/Redux/slices/RealEstate/slicer";
import toast, { Toaster } from "react-hot-toast";

export default function OtpPage() {
  const location = useLocation();
  const data = location?.state;

  const notify = () => toast("Invalid OTP code");

  const navigate = useNavigate();

  const { resend } = useSelector((state) => state.listings);
  const dispatch = useDispatch();

  const [seconds, setSeconds] = useState(120);
  const [otp, setOtp] = useState("");
  const [resetSignal, setResetSignal] = useState(0);

  return (
    <div className="bg-[#eee] w-full min-h-screen flex justify-center items-center px-4">
      <form className="bg-white w-90 lg:w-96 flex justify-center items-center flex-col gap-4 p-3 rounded-xl">
        <div className="flex flex-col gap-2 justify-center items-center mb-14">
          <h1 className="text-2xl font-semibold">Verification Code</h1>
          <p className=" text-center">
            Please <span className="font-semibold">Mr.{data?.name}</span> Enter
            the code sent to your phone number.
          </p>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <InputOTP maxLength={4} onChange={(value) => setOtp(value)}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
          <Timer
            seconds={seconds}
            setSeconds={setSeconds}
            resetSignal={resetSignal}
          />
        </div>
        <div className="w-[80%]">
          <Toaster />
          <button
            type="button"
            className="w-full font-semibold bg-blue-600 px-16 py-3 mt-14 rounded-xl cursor-pointer disabled:bg-blue-400"
            disabled={otp.length <= 3}
            onClick={() => {
              if (otp === "0000") {
                let userData;

                if (data.image instanceof Blob) {
                  userData = {
                    ...data,
                    image: URL.createObjectURL(data.image),
                  };
                }

                dispatch(logIn(userData));
                localStorage.setItem("userData", JSON.stringify(userData));
                navigate("/", { state: userData });
              } else {
                return notify();
              }
            }}
          >
            Verify
          </button>
          <div className="flex justify-center items-center gap-2 mt-3">
            <p>Didn't receive a code?</p>
            <button
              type="button"
              className={`font-semibold text-stone-600 cursor-pointer disabled:font-normal ${!resend && "underline"}`}
              disabled={resend}
              onClick={() => {
                dispatch(disableResendBtn());
                setResetSignal((prev) => prev + 1);
              }}
            >
              Resend code
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
