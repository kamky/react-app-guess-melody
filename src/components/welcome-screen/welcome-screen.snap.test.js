// React
import React from "react";
import renderer from "react-test-renderer";

// Components
import {WelcomeScreen} from "./welcome-screen";

describe(`Snapshot test for component <WelcomeScreen />`, () => {
  const defaultProps = {onStartGameButtonClick: jest.fn()};
  const wrapper = renderer.create(<WelcomeScreen {...defaultProps} />);
  test(`should component <WelcomeScreen /> renders correctly`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
