// React
import React from "react";

// Component AudioPlayer
export const AudioPlayer = () => {
  return (
    <>
      <button
        className="track__button track__button--play"
        type="button"
      ></button>
      <div className="track__status">
        <audio />
      </div>
    </>
  );
};
