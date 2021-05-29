// React
import React from "react";

// Components
import {AudioPlayer} from "../audio-player/audio-player";

// Component TrackItem
export const TrackItem = () => {
  return (
    <div className="track">
      <AudioPlayer />
      <div className="game__answer">
        <input
          className="game__input visually-hidden"
          type="checkbox"
          name="answer"
          value="answer-1"
          id="answer-2"
        />
        <label className="game__check" htmlFor="answer-2">
          Отметить
        </label>
      </div>
    </div>
  );
};
