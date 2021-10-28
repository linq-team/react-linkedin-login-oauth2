import React, { Component } from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { LinkedInCallback } from "../../src";
import LinkedInPage from "./LinkedInPage";

class Demo extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/linkedin" component={LinkedInCallback} />
          <Route path="/" component={LinkedInPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

render(<Demo />, document.querySelector("#demo"));
