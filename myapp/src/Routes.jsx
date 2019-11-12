import React from "react";
import { Route, Switch } from "react-router-dom";
import Form from "./app/components/Form";
import Search from "./app/components/Search";
const Routes = () => {
  return (
      <Switch>
        <Route exact path="/" render={props =><Form {...props} />} />
        <Route exact path="/search" render={props=><Search {...props} />} />
      </Switch>
  );
};

export default Routes;
