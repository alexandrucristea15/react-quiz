import QuestionOptions from "./QuestionOptions";

const Question = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h4>{question.question}</h4>
      <QuestionOptions
        question={question}
        dispatch={dispatch}
        answer={answer}
      />
      {/* <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart
      </button> */}
    </div>
  );
};

export default Question;
