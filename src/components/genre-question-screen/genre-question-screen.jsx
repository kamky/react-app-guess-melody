// React
import React from "react";

// Prop Types
import PropTypes from "prop-types";
import {GenreQuestionTypes} from "./genre-question-screen.prop";

// Hooks
import {useUserAnswer} from "../../hooks/use-user-answer/use-user-answer";

// Components
import {TrackItem} from "../track-item/track-item";

// Component GenreQuestionScreen
export const GenreQuestionScreen = (props) => {
  const {question, onUserAnswer, renderAudioPlayer} = props;
  const {genre, answers} = question;

  const [userAnswers, handleUserAnswersChange] = useUserAnswer(answers.length);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onUserAnswer(userAnswers, question);
  };

  return (
    <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form onSubmit={handleSubmit} className="game__tracks">
        {answers.map((answer, idx) => (
          <TrackItem
            key={`${idx}-${answer.src}`}
            index={idx}
            answer={answer}
            userAnswer={userAnswers[idx]}
            onInputChange={handleUserAnswersChange}
            renderAudioPlayer={renderAudioPlayer}
          />
        ))}
        <button className="game__submit button" type="submit">
          Ответить
        </button>
      </form>
    </section>
  );
};

GenreQuestionScreen.propTypes = {
  question: GenreQuestionTypes,
  onUserAnswer: PropTypes.func.isRequired,
  renderAudioPlayer: PropTypes.func.isRequired,
};
