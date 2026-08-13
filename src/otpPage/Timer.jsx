import { activateResendBtn } from "@/Redux/slices/RealEstate/slicer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Timer({ seconds, setSeconds }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (seconds === 0) {
      dispatch(activateResendBtn());
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [dispatch, seconds, setSeconds]);

  return <p className="self-start">{seconds}</p>;
}
