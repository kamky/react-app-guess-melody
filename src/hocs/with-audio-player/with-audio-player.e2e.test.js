// JSDOM
import "jsdom-global/register";

// React
import React from "react";

// Enzyme
import Enzyme, {mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
Enzyme.configure({adapter: new Adapter()});

// HOCs
import {withAudioPlayer} from "./with-audio-player";

// MockComponent AudioPlayer
const AudioPlayerMock = (props) => {
  // eslint-disable-next-line react/prop-types
  const {children, onToggleAudioButtonClick} = props;
  return (
    <div>
      <button onClick={onToggleAudioButtonClick}></button>
      {children}
    </div>
  );
};

// Wrapped Components
const AudioPlayerWrapped = withAudioPlayer(AudioPlayerMock);

// E2E test for component </>
describe(`e2e test for hoc <withAudioPlayer />`, () => {
  const onPlayAndPauseBtnMock = jest
  .fn(() => null)
  .mockImplementationOnce(() => wrapper.setProps({isPlaying: true}))
  .mockImplementationOnce(() => wrapper.setProps({isPlaying: false}));

  const playMock = jest
    .spyOn(window.HTMLMediaElement.prototype, `play`)
    .mockImplementation(() => Promise.resolve());

  const pauseMock = jest
    .spyOn(window.HTMLMediaElement.prototype, `pause`)
    .mockImplementation(() => Promise.resolve());

  afterEach(() => {
    playMock.mockRestore();
    pauseMock.mockRestore();
    onPlayAndPauseBtnMock.mockRestore();
  });

  // Default Props
  const defaultProps = {
    src: ``,
    isPlaying: false,
    onToggleAudioButtonClick: onPlayAndPauseBtnMock,
  };

  // prettier-ignore
  const wrapper = mount(
      <AudioPlayerWrapped {...defaultProps} />
  );

  test(`should properly switch audio playback and stop to pause`, () => {
    expect(wrapper.find(`button`).length).toEqual(1);
    expect(wrapper.find(`audio`).length).toEqual(1);

    // audio is not playing
    expect(playMock).toHaveBeenCalledTimes(0);
    expect(pauseMock).toHaveBeenCalledTimes(1);
    expect(wrapper.prop(`isPlaying`)).toEqual(false);

    // audio is playing
    wrapper.find(`button`).simulate(`click`);

    expect(playMock).toHaveBeenCalledTimes(1);
    expect(pauseMock).toHaveBeenCalledTimes(1);
    expect(wrapper.prop(`isPlaying`)).toEqual(true);

    // audio is not playing
    wrapper.find(`button`).simulate(`click`);

    expect(playMock).toHaveBeenCalledTimes(1);
    expect(pauseMock).toHaveBeenCalledTimes(2);
    expect(wrapper.prop(`isPlaying`)).toEqual(false);
  });
});
