// React
import React, {useState} from "react";

// Router
import {Switch, Route} from "react-router-dom";
import routes from "../../routes";

// Components
import {WelcomeScreen} from "../welcome-screen/welcome-screen";
import {GameScreen} from "../game-screen/game-screen";
import {NotFoundScreen} from "../not-found-screen/not-found-screen";
import {LoginScreen} from "../login-screen/login-screen";
import {ResultScreen} from "../result-screen/result-screen";
import {FailTimeScreen} from "../fail-time-screen/fail-time-screen";
import {FailTriesScreen} from "../fail-tries-screen/fail-tries-screen";

// Component App
export const App = () => {
  const [step, setStep] = useState(-1);

  const handleIncrementStep = () => {
    setStep(step + 1);
  };

  return (
    <Switch>
      <Route path={routes.ROOT} exact>
        <WelcomeScreen onStartGameButtonClick={handleIncrementStep} />;
      </Route>
      <Route path={routes.GAME} exact>
        <GameScreen step={step} onIncrementStep={handleIncrementStep} />
      </Route>
      <Route path={routes.LOGIN} exact>
        <LoginScreen />
      </Route>
      <Route path={routes.RESULT} exact>
        <ResultScreen />
      </Route>
      <Route path={routes.FAIL_TRIES} exact>
        <FailTriesScreen />
      </Route>
      <Route path={routes.FAIL_TIME} exact>
        <FailTimeScreen />
      </Route>
      <Route path="*">
        <NotFoundScreen />
      </Route>
    </Switch>
  );
};
