// React
import React from "react";
import PropTypes from "prop-types";

// Routes
import {Redirect} from "react-router";
import routes from "../../routes";

// Consts
import {gameTypes} from "../../consts";

// Questions Mock
import {questions} from "../../mocks/questions";

// Components
import {GameHeader} from "../game-header/game-header";
import {ArtistQuestionScreen} from "../artist-question-screen/artist-question-screen";
import {GenreQuestionScreen} from "../genre-question-screen/genre-question-screen";

// Component GameScreen
export const GameScreen = (props) => {
  const {step, onIncrementStep} = props;

  if (step === -1) {
    return <Redirect to={routes.ROOT} />;
  }

  if (step >= questions.length) {
    return <Redirect to={routes.ROOT} />;
  }

  const handleUserAnswer = (answer, question) => {
    // eslint-disable-next-line no-console
    console.log(answer, question);
    onIncrementStep();
  };

  const question = questions[step];
  const type = question.type;

  let screen = null;
  switch (type) {
    case gameTypes.ARTIST:
      screen = (
        <ArtistQuestionScreen
          question={question}
          onUserAnswer={handleUserAnswer}
        />
      );
      break;
    case gameTypes.GENRE:
      screen = (
        <GenreQuestionScreen
          question={question}
          onUserAnswer={handleUserAnswer}
        />
      );
      break;
  }

  return (
    <section className={`game game--${type}`}>
      <GameHeader />
      {screen}
    </section>
  );
};

GameScreen.propTypes = {
  step: PropTypes.number.isRequired,
  onIncrementStep: PropTypes.func.isRequired,
};
