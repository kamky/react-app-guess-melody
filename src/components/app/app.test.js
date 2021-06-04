// React
import React from "react";

// Router
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import routes from "../../routes";

// Enzyme
import {configure, render} from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
configure({adapter: new Adapter()});

// Consts
import {gameSettings} from "../../consts";
const {GAME_TIME, MAX_MISTAKES} = gameSettings;

// Components
import {App} from "./app";

// Routes testing
describe(`Testing root routes in app`, () => {
  test(`should render WelcomeScreen component when user navigate to /`, () => {
    const history = createMemoryHistory();

    // prettier-ignore
    const wrapper = render(
        <Router history={history}>
          <App />
        </Router>
    );

    expect(wrapper.text()).toMatch(/Начать игру/i);
    // prettier-ignore
    expect(wrapper.text()).toMatch(new RegExp(`Можно допустить ${MAX_MISTAKES} ошибки.`));
    // prettier-ignore
    expect(wrapper.text()).toMatch(new RegExp(`За ${GAME_TIME} минут нужно ответить на все вопросы.`));
  });

  test.todo(`should render GameScreen component when user navigate to /game`);

  test(`should render LoginScreen component when user navigate to /login`, () => {
    const history = createMemoryHistory();
    history.push(routes.LOGIN);

    // prettier-ignore
    const wrapper = render(
        <Router history={history}>
          <App />
        </Router>
    );

    expect(wrapper.text()).toMatch(/Вы настоящий меломан!/i);
    // prettier-ignore
    expect(wrapper.text()).toMatch(/Хотите сравнить свой результат с предыдущими попытками\? Представитесь!/i);
    expect(wrapper.text()).toMatch(/Логин/i);
    expect(wrapper.text()).toMatch(/Пароль/i);
    expect(wrapper.text()).toMatch(/Войти/i);
    expect(wrapper.text()).toMatch(/Сыграть ещё раз/i);
  });

  test(`should render ResultScreen component when user navigate to /result`, () => {
    const history = createMemoryHistory();
    history.push(routes.RESULT);

    // prettier-ignore
    const wrapper = render(
        <Router history={history}>
          <App />
        </Router>
    );

    expect(wrapper.text()).toMatch(/Вы настоящий меломан!/i);
    expect(wrapper.text()).toMatch(/Сыграть ещё раз/i);
  });

  test(`should render FailTimeScreen component when user navigate to /fail-time`, () => {
    const history = createMemoryHistory();
    history.push(routes.FAIL_TIME);

    // prettier-ignore
    const wrapper = render(
        <Router history={history}>
          <App />
        </Router>
    );

    expect(wrapper.text()).toMatch(/Увы и ах!/i);
    // prettier-ignore
    expect(wrapper.text()).toMatch(/Время вышло! Вы не успели отгадать все мелодии/i);
    expect(wrapper.text()).toMatch(/Попробовать ещё раз/i);
  });

  test(`should render FailTriesScreen component when user navigate to /fail-tries`, () => {
    const history = createMemoryHistory();
    history.push(routes.FAIL_TRIES);

    // prettier-ignore
    const wrapper = render(
        <Router history={history}>
          <App />
        </Router>
    );

    expect(wrapper.text()).toMatch(/Какая жалость!/i);
    // prettier-ignore
    expect(wrapper.text()).toMatch(/У вас закончились все попытки. Ничего, повезёт в следующий раз!/);
    expect(wrapper.text()).toMatch(/Попробовать ещё раз/i);
  });

  test(`should render NotFoundScreen component when user goes over on a non-existent route`, () => {
    const history = createMemoryHistory();
    history.push(`/not-found`);

    // prettier-ignore
    const wrapper = render(
        <Router history={history}>
          <App />
        </Router>
    );

    expect(wrapper.text()).toMatch(/Произошла ошибка!/i);
    // prettier-ignore
    expect(wrapper.text()).toMatch(/Статус: 404. Запрашиваемая страница не существует./);
  });
});
