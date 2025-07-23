import React from "react";

const FinishScreen = ({ points, totalPoints, highscore }) => {
  const percentage = (points / totalPoints) * 100;
  let emoji;

  if (percentage === 100) {
    emoji = "🥇";
  } else if (percentage < 100 && percentage > 75) {
    emoji = "🥈";
  } else if (percentage <= 75 && percentage > 50) {
    emoji = "🥉";
  } else if (percentage <= 50 && percentage > 25) {
    emoji = "❓";
  } else if (percentage <= 25 && percentage >= 0) {
    emoji = "❓❓❓❓";
  }

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {totalPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">
        (Highscore: <strong>{highscore}</strong> points)
      </p>
    </>
  );
};

export default FinishScreen;
