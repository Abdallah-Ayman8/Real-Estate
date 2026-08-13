import { activateResendBtn } from "@/Redux/slices/RealEstate/slicer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Timer({ seconds, setSeconds, resetSignal }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedEndTime = localStorage.getItem("timerKey");

    if (savedEndTime) {
      const remaining = Math.ceil((Number(savedEndTime) - Date.now()) / 1000);
      if (remaining > 0) setSeconds(remaining > 0 ? remaining : 0);
    } else {
      localStorage.removeItem("timerKey");
      const endTime = Date.now() + 120 * 1000;
      localStorage.setItem("timerKey", endTime);
      setSeconds(120);
    }
  }, [resetSignal]);

  useEffect(() => {
    if (seconds === 0) {
      dispatch(activateResendBtn());
      localStorage.removeItem("timerKey");
    }

    const timer = setInterval(() => {
      const endTime = Number(localStorage.getItem("timerKey"));
      if (!endTime) return;
      const remaining = Math.ceil((endTime - Date.now()) / 1000);
      setSeconds(remaining > 0 ? Number(remaining) : 0);
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, seconds, setSeconds]);

  return <p className="self-start">{seconds}</p>;
}
