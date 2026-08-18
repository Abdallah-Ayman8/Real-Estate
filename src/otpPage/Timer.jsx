import { activateResendBtn } from "@/Redux/slices/RealEstate/slicer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Timer({ resetSignal }) {
  const dispatch = useDispatch();

  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    const savedEndTime = localStorage.getItem("timerKey");

    if (savedEndTime) {
      const remaining = Math.ceil((Number(savedEndTime) - Date.now()) / 1000);
      if (remaining > 0) {
        setSeconds(remaining);
      } else {
        localStorage.removeItem("timerKey");
        setSeconds(0);
      }
    } else {
      const endTime = Date.now() + 120 * 1000;
      localStorage.setItem("timerKey", endTime);
      setSeconds(120);
    }
  }, [resetSignal]);

  useEffect(() => {
    const timer = setInterval(() => {
      const endTime = Number(localStorage.getItem("timerKey"));
      if (!endTime || endTime === 0) return;
      const remaining = Math.ceil((endTime - Date.now()) / 1000);
      const clamped = remaining > 0 ? remaining : 0;

      setSeconds(clamped);

      if (clamped === 0) {
        dispatch(activateResendBtn());
        localStorage.removeItem("timerKey");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, setSeconds]);

  return <p className="self-start">{seconds}</p>;
}
