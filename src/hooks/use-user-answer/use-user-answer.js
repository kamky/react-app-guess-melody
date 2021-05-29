import {useState} from "react";

export const useUserAnswer = (length) => {
  const [userAnswers, setUserAnswers] = useState(new Array(length).fill(false));

  const handleUserAnswersChange = (idx, value) => {
    const answers = userAnswers.slice(0);
    answers[idx] = value;
    setUserAnswers(answers);
  };

  return [userAnswers, handleUserAnswersChange];
};
