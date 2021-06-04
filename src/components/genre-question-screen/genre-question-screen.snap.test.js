// React
import React from "react";
import renderer from "react-test-renderer";

// Components
import {GenreQuestionScreen} from "./genre-question-screen";

// Question Mock
const questionMock = {
  type: `genre`,
  genre: `reggae`,
  answers: [
    {
      src: `src-1`,
      genre: `alternative`,
    },
    {
      src: `src-2`,
      genre: `reggae`,
    },
    {
      src: `src-3`,
      genre: `electronic`,
    },
    {
      src: `src-4`,
      genre: `reggae`,
    },
  ],
};

describe(`Snapshot test for component <GenreQuestionScreen />`, () => {
  const question = questionMock;
  const defaultProps = {
    question,
    onUserAnswer: jest.fn(),
    renderAudioPlayer: jest.fn(),
  };

  const wrapper = renderer.create(<GenreQuestionScreen {...defaultProps} />);
  test(`should component <GenreQuestionScreen /> renders correctly`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
