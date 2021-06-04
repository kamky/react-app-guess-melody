// React
import React from "react";
import renderer from "react-test-renderer";

// Components
import {ArtistQuestionScreen} from "./artist-question-screen";

const questionMock = {
  type: `artist`,
  song: {
    artist: `artist-1`,
    src: `src-1`,
  },
  answers: [
    {
      picture: `picture-1`,
      artist: `artist-1`,
    },
    {
      picture: `picture-2`,
      artist: `artist-2`,
    },
    {
      picture: `picture-3`,
      artist: `artist-3`,
    },
  ],
};

describe(`Snapshot test for component <ArtistQuestionScreen />`, () => {
  const question = questionMock;
  const defaultProps = {
    question,
    onUserAnswer: jest.fn(),
    renderAudioPlayer: jest.fn(),
  };

  const wrapper = renderer.create(<ArtistQuestionScreen {...defaultProps} />);
  test(`should component <ArtistQuestionScreen /> renders correctly`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
