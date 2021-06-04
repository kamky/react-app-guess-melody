// React
import React from "react";
import renderer from "react-test-renderer";

// Components
import {GameScreen} from "./game-screen";

// Mock
const questionMock = [
  {
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
  },
  {
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
  },
];

jest.mock(`../../mocks/questions`, () => ({
  questions: questionMock,
}));

describe(`Snapshot test for component <GameScreen />`, () => {
  const defaultProps = {onIncrementStep: jest.fn()};

  test(`should render component <ArtistQuestionScreen />`, () => {
    const wrapper = renderer.create(<GameScreen {...defaultProps} step={0} />, {
      createNodeMock: (element) => {
        if (element.type === `audio`) {
          return {
            play: () => {},
          };
        }
        return null;
      },
    });
    expect(wrapper).toMatchSnapshot();
  });

  test(`should render component <GenreQuestionScreen />`, () => {
    const wrapper = renderer.create(<GameScreen {...defaultProps} step={0} />, {
      createNodeMock: (element) => {
        if (element.type === `audio`) {
          return {
            play: () => {},
          };
        }
        return null;
      },
    });
    expect(wrapper).toMatchSnapshot();
  });
});
