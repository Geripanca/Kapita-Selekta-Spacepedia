import { useState } from "react";
import { questions } from "./quizdata";
import { Link } from "react-router-dom";

const style = {
  fail: `text-red-400`,
  success: `text-blue-400`, // Fix the style class name
};

export const Quiz = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const handleReTake = () => {
    setScore(0);
    setCurrentQuestion(0);
    setIsLoading(false);
    setShowResults(false);
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleStartQuiz = () => {
    setIsLoading(false);
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        {isLoading ? (
          <>
            <button onClick={handleStartQuiz} className="w-24 bg-slate-900 mt-4 p-4 rounded text-white">
              Start Quiz
            </button>
          </>
        ) : (
          <>
            {showResult ? (
              <>
                <div className="w-1/2">
                  <div class="border-4 border-slate-900 rounded-md p-4 md:p-8 w-full md:w-1/2">
                    <h1 className="p-2 text-white">
                      Total score:
                      <span className={`p-4 ${score < questions.length / 2 ? style.fail : style.success}`}>{score}</span>/{questions.length}
                    </h1>
                  </div>
                  <div className="space-x-4">
                    <button onClick={() => handleReTake()} className="w-24 bg-slate-900 mt-4 p-4  rounded text-white">
                      Mulai
                    </button>

                    <Link to="/">
                      <button className="w-24 bg-slate-900 mt-4 p-4 rounded text-white md:w-24">Kembali</button>
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="border-4 border-slate-900 rounded-md p-8 w-1/2">
                  <div className="flex justify-between">
                    <h4 className="text-base font-semibold text-white">
                      {currentQuestion + 1}. {questions[currentQuestion].question}
                    </h4>
                    <h3 className="text-base font-semibold tracking-wide text-white hidden md:block">
                      {currentQuestion + 1} dari {questions.length}
                    </h3>
                  </div>
                  <div className="flex flex-col text-white">
                    {questions[currentQuestion].options.map((option, index) => (
                      <div key={index} onClick={() => handleAnswer(option.isCorrect)} className="border-2 cursor-pointer rounded-lg border-slate-900  p-4 mt-8 hover:bg-sky-500 hover:text-white">
                        {option.answer}
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};
