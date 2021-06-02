// React
import React from "react";

// Enzyme
import {configure, shallow} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({adapter: new Adapter()});

// Hook
import {useUserAnswer} from "./use-user-answer";

describe(`test for hook useUserAnswer`, () => {
  const HookWrapper = (props) => {
    // eslint-disable-next-line react/prop-types
    const hook = props.hook ? props.hook() : undefined;
    return <div hook={hook} />;
  };

  const initAnswer = [false, false, false, false];
  const alteredAnswer = [false, false, true, false];
  const wrapper = shallow(
      <HookWrapper hook={() => useUserAnswer(initAnswer.length)} />
  );

  test(`should be correctly state chang`, () => {
    let {hook} = wrapper.find(`div`).props();
    let [answer, setAnswer] = hook;
    expect(answer).toEqual(initAnswer);

    setAnswer(2, true);

    ({hook} = wrapper.find(`div`).props());
    [answer, setAnswer] = hook;
    expect(answer).toEqual(alteredAnswer);
  });
});
