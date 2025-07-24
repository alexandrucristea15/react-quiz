import { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  // Add leading zeros if minutes or seconds are less than 10
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [dispatch]);

  return (
    <div className="timer">{`${formattedMinutes}:${formattedSeconds}`}</div>
  );
};

export default Timer;
