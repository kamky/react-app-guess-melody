// React
import React from "react";

// Game settings
import {gameSettings} from "../../consts";
const {GAME_TIME, MAX_MISTAKES} = gameSettings;

// Component WelcomeScreen
export const WelcomeScreen = () => {

  const handleButtonClick = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className="welcome">
      <div className="welcome__logo">
        <img
          src="img/melody-logo.png"
          alt="Угадай мелодию"
          width="186"
          height="83"
        />
      </div>
      <button onClick={handleButtonClick} className="welcome__button">
        <span className="visually-hidden">Начать игру</span>
      </button>
      <h2 className="welcome__rules-title">Правила игры</h2>
      <p className="welcome__text">Правила просты:</p>
      <ul className="welcome__rules-list">
        <li>За {GAME_TIME} минут нужно ответить на все вопросы.</li>
        <li>Можно допустить {MAX_MISTAKES} ошибки.</li>
      </ul>
      <p className="welcome__text">Удачи!</p>
    </section>
  );
};
