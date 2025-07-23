const QuestionOptions = ({ question, dispatch, answer }) => {
  const answered = answer !== null;
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            answered && (index === question.correctOption ? "correct" : "wrong")
          }`}
          key={option}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
            })
          }
          disabled={answer}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionOptions;
