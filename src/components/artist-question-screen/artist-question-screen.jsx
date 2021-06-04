// React
import React from "react";

// Prop Types
import PropTypes from "prop-types";
import {ArtistQuestionTypes} from "./artist-question-screen.prop";

// Components
import {ArtistItem} from "../artist-item/artist-item";

// Component ArtistQuestionScreen
export const ArtistQuestionScreen = (props) => {
  const {question, onUserAnswer, renderAudioPlayer} = props;
  const {answers, song} = question;

  const handleUserAnswer = (answer) => {
    onUserAnswer(answer, question);
  };

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <div className="track">
          {renderAudioPlayer(song.src, 0)}
        </div>
      </div>

      <form className="game__artist">
        {answers.map((answer, idx) => (
          <ArtistItem
            key={`${idx}-${answer.artist}`}
            index={idx}
            answer={answer}
            onUserAnswer={handleUserAnswer}
          />
        ))}
      </form>
    </section>
  );
};

ArtistQuestionScreen.propTypes = {
  question: ArtistQuestionTypes,
  onUserAnswer: PropTypes.func.isRequired,
  renderAudioPlayer: PropTypes.func.isRequired,
};
