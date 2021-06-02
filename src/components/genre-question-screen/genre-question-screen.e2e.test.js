// JSDOM
import "jsdom-global/register";

// React
import React from "react";

// Enzyme
import Enzyme, {mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Components
import {GenreQuestionScreen} from "./genre-question-screen";

// Enzyme configuration
Enzyme.configure({adapter: new Adapter()});

// Mock
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

describe(`e2e test for component <GenreQuestionScreen />`, () => {
  // Mocks init
  let userAnswerMock = jest.fn();
  let handleSubmitMock = jest.fn();

  // initial component
  const question = questionMock;
  const defaultProps = {question, onUserAnswer: userAnswerMock};
  const wrapper = mount(<GenreQuestionScreen {...defaultProps} />);

  afterEach(() => {
    userAnswerMock.mockRestore();
    handleSubmitMock.mockRestore();
  });

  test(`should prevent the form from being submitted`, () => {
    expect(handleSubmitMock).toHaveBeenCalledTimes(0);
    wrapper
      .find(`form.game__tracks`)
      .simulate(`submit`, {preventDefault: handleSubmitMock});
    expect(handleSubmitMock).toHaveBeenCalledTimes(1);
  });

  test(`should pass the correct data format when the user responds`, () => {
    expect(wrapper.find(`form.game__tracks`).length).toBe(1);
    expect(userAnswerMock).toHaveBeenCalledTimes(0);

    wrapper
      .find(`input.game__input`)
      .at(1)
      .simulate(`change`, {target: {checked: true}});
    wrapper
      .find(`input.game__input`)
      .at(3)
      .simulate(`change`, {target: {checked: true}});

    wrapper.find(`form.game__tracks`).simulate(`submit`);

    expect(userAnswerMock).toHaveBeenCalledTimes(1);
    expect(userAnswerMock.mock.calls.length).toBe(1);
    expect(userAnswerMock.mock.calls[0][0]).toMatchObject([
      false,
      true,
      false,
      true,
    ]);
  });
});
