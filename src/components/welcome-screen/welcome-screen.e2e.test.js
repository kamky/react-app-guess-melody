// Modules
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Components
import {WelcomeScreen} from "./welcome-screen";

// Enzyme configuration
Enzyme.configure({adapter: new Adapter()});

// E2E test for component <WelcomeScreen />
describe(`e2e test for component <WelcomeScreen />`, () => {
  const clickHandler = jest.fn();
  const defaultProps = {onStartGameButtonClick: clickHandler};
  const wrapper = shallow(<WelcomeScreen {...defaultProps} />);

  test(`should be called callback when the button is pressed`, () => {
    expect(wrapper.find(`button.welcome__button`).length).toBe(1);
    expect(clickHandler).toHaveBeenCalledTimes(0);
    wrapper
      .find(`button.welcome__button`)
      .simulate(`click`, {preventDefault: jest.fn()});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
