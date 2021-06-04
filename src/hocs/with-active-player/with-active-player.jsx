// React
import React, {useState} from "react";

// Components
import {AudioPlayer} from "../../components/audio-player/audio-player";

// HOCs
import {withAudioPlayer} from "../with-audio-player/with-audio-player";

// Wrapped Components
const WithAudioPlayerWrapped = withAudioPlayer(AudioPlayer);

// Higher-Order Component
export const withActivePlayer = (WrappedComponent) => {
  const WithActivePlayer = (props) => {
    const [audioNumber, setAudioNumber] = useState(0);

    const handleToggleAudioButtonClick = (id) => {
      setAudioNumber(audioNumber === id ? -1 : id);
    };

    return (
      <WrappedComponent
        {...props}
        renderAudioPlayer={(src, audioId) => {
          return (
            <WithAudioPlayerWrapped
              src={src}
              isPlaying={audioNumber === audioId}
              onToggleAudioButtonClick={handleToggleAudioButtonClick.bind(null, audioId)}
            />
          );
        }}
      />
    );
  };

  return WithActivePlayer;
};
