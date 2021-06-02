// React
import React from "react";
import PropTypes from "prop-types";

// Component AudioPlayer
export const AudioPlayer = (props) => {
  const {isPlaying, isLoading, onToggleAudioButtonClick, children} = props;

  return (
    <>
      <button
        className={`track__button track__button--${
          isPlaying ? `pause` : `play`
        }`}
        type="button"
        disabled={isLoading}
        onClick={onToggleAudioButtonClick}
      ></button>
      <div className="track__status">{children}</div>
    </>
  );
};

AudioPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onToggleAudioButtonClick: PropTypes.func.isRequired,
};
