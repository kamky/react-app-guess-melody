// React
import React from "react";
import renderer from "react-test-renderer";

// Components
import {ArtistItem} from "./artist-item";

describe(`Snapshot test for component <ArtistItem />`, () => {
  const defaultProps = {
    index: 0,
    onUserAnswer: jest.fn(),
    answer: {artist: `artist-name`, picture: `picture-url`},
  };
  const wrapper = renderer.create(<ArtistItem {...defaultProps} />);
  test(`should component <ArtistItem /> renders correctly`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
