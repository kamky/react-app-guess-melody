// React
import React from "react";
import renderer from "react-test-renderer";

// Components
import {WelcomeScreen} from "./welcome-screen";

describe(`Snapshot test for component <WelcomeScreen />`, () => {
  const wrapper = renderer.create(<WelcomeScreen />);
  test(`should component <WelcomeScreen /> renders correctly`, () => {
    expect(wrapper).toMatchSnapshot();
  });
});
