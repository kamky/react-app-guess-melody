// React
import React from "react";
import renderer from "react-test-renderer";

// Components
import {AudioPlayer} from "./audio-player";

describe(`Snapshot test for component <AudioPlayer />`, () => {
  const defaultProps = {
    isPlaying: false,
    isLoading: false,
    onToggleAudioButtonClick: jest.fn(),
  };

  const wrapper = renderer.create(
      <AudioPlayer {...defaultProps}>
        <audio />
      </AudioPlayer>
  );

  test(`should component <AudioPlayer /> renders correctly`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
