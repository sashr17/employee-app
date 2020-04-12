import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

import EmployeeLandingPage from "./pages/EmployeeLandingPage/EmployeeLandingPage";

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <EmployeeLandingPage />
      </div>
    </Provider>
  );
};

export default App;
