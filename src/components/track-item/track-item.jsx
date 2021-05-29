// React
import React from "react";
import PropTypes from "prop-types";

// Components
import {AudioPlayer} from "../audio-player/audio-player";

// Component TrackItem
export const TrackItem = (props) => {
  const {index, userAnswer, onInputChange} = props;

  const handleChange = (evt) => {
    const value = evt.target.checked;
    onInputChange(index, value);
  };

  return (
    <div className="track">
      <AudioPlayer />
      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value={`answer-${index}`}
          id={`answer-${index}`}
          checked={userAnswer}
          onChange={handleChange}
        />
        <label className="game__check" htmlFor={`answer-${index}`}>
          Отметить
        </label>
      </div>
    </div>
  );
};

TrackItem.propTypes = {
  index: PropTypes.number.isRequired,
  userAnswer: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};
