// React
import React, {useState, useRef, useEffect} from "react";
import PropTypes from "prop-types";

// Higher-Order Component
export const withAudioPlayer = (WrappedComponent) => {
  const WithAudioPlayer = (props) => {
    const {src, isPlaying} = props;

    // Audio Ref
    const audioRef = useRef(null);

    // Audio control
    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
        return;
      }

      audioRef.current.pause();
    }, [isPlaying]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const audio = audioRef.current;
      audio.oncanplaythrough = () => setIsLoading(false);

      return () => {
        audio.src = ``;
        audio.oncanplaythrough = null;
        audioRef.current = null;
      };
    }, []);

    return (
      <WrappedComponent {...props} isLoading={isLoading}>
        <audio src={src} ref={audioRef} />
      </WrappedComponent>
    );
  };

  WithAudioPlayer.propTypes = {
    src: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    onToggleAudioButtonClick: PropTypes.func.isRequired,
  };

  return WithAudioPlayer;
};
