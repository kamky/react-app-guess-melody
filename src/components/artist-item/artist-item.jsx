// React
import React from "react";
import PropTypes from "prop-types";

// Component ArtistItem
export const ArtistItem = (props) => {
  const {index, answer, onUserAnswer} = props;

  const handleInputChange = () => {
    onUserAnswer(answer);
  };

  return (
    <div className="artist">
      <input
        className="artist__input visually-hidden"
        type="radio"
        name="answer"
        value={`answer-${index}`}
        id={`answer-${index}`}
        onChange={handleInputChange}
      />
      <label className="artist__name" htmlFor={`answer-${index}`}>
        <img
          className="artist__picture"
          src={answer.picture}
          alt={answer.artist}
        />
        {answer.artist}
      </label>
    </div>
  );
};

ArtistItem.propTypes = {
  index: PropTypes.number.isRequired,
  onUserAnswer: PropTypes.func.isRequired,
  answer: PropTypes.shape({
    artist: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
  }).isRequired,
};
