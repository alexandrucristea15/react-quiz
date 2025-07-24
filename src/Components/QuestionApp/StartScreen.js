const StartScreen = ({ selectedNumQuestions, dispatch }) => {
  return (
    <div className="start">
      <h2>Welcome to the react quiz</h2>
      <h3>Pick the number of questions to test your react mastery</h3>
      <h4>Number of Questions: </h4>
      <input
        className="timer btn btn-ui"
        type="number"
        min={1}
        max={15}
        value={selectedNumQuestions}
        onChange={(e) => {
          dispatch({ type: "selectNumQuestions", payload: e.target.value });
        }}
        onKeyDown={(e) => e.preventDefault()} // Prevent typing, but arrows still work
      />
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let's Start
      </button>
    </div>
  );
};

export default StartScreen;
