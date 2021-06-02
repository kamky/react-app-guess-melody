// Modules
import "jsdom-global/register";
import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";

// Components
import {WelcomeScreen} from "./welcome-screen";

// Enzyme configuration
Enzyme.configure({adapter: new Adapter()});

// E2E test for component <WelcomeScreen />
describe(`e2e test for component <WelcomeScreen />`, () => {
  const clickHandler = jest.fn();
  const defaultProps = {onStartGameButtonClick: clickHandler};

  const history = createMemoryHistory();
  const wrapper = mount(
      <Router history={history}>
        <WelcomeScreen {...defaultProps} />
      </Router>
  );

  test(`should be called callback when the button is pressed`, () => {
    expect(wrapper.find(`button.welcome__button`).length).toBe(1);
    expect(clickHandler).toHaveBeenCalledTimes(0);
    wrapper
      .find(`button.welcome__button`)
      .simulate(`click`, {preventDefault: jest.fn()});
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
