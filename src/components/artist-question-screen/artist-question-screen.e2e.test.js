// JSDOM
import "jsdom-global/register";

// React
import React from "react";

// Enzyme
import Enzyme, {mount} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

// Components
import {ArtistQuestionScreen} from "./artist-question-screen";

// Enzyme configuration
Enzyme.configure({adapter: new Adapter()});

// Mock
const questionMock = {
  type: `artist`,
  song: {
    artist: `artist-2`,
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

// E2E test for component <ArtistQuestionScreen />
describe(`e2e test for component <ArtistQuestionScreen />`, () => {
  const userAnswerMock = jest.fn();
  const question = questionMock;
  const defaultProps = {question, onUserAnswer: userAnswerMock};
  const wrapper = mount(<ArtistQuestionScreen {...defaultProps} />);

  test(`should pass the correct data format when the user responds`, () => {
    expect(wrapper.find(`input.artist__input`).length).toBe(3);
    expect(userAnswerMock).toHaveBeenCalledTimes(0);

    wrapper.find(`input.artist__input`).at(1).simulate(`change`);

    expect(userAnswerMock).toHaveBeenCalledTimes(1);
    expect(userAnswerMock.mock.calls.length).toBe(1);
    expect(userAnswerMock.mock.calls[0][0]).toMatchObject({
      picture: `picture-2`,
      artist: `artist-2`,
    });
  });
});
