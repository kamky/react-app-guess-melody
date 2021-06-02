// React
import React from "react";
import renderer from "react-test-renderer";

// Components
import {TrackItem} from "./track-item";

describe(`Snapshot test for component <TrackItem />`, () => {
  const defaultProps = {index: 0, userAnswer: false, onInputChange: jest.fn()};
  const wrapper = renderer.create(<TrackItem {...defaultProps} />);
  test(`should component <TrackItem /> renders correctly`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
