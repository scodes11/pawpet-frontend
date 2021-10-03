import React from "react";
import { ChakraProvider } from "@chakra-ui/react"
import ServicesTabs from "./components/Services/Tabs";
import Dashboard from "./components/dashboard/Dashboard";
import Profile from "./components/profile/Profile";
import Landing from "./components/landing page/landing";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <Router>
      <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          
          <Route exact path="/">
            <Landing />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/servicesTabs">
            <ChakraProvider>
            <ServicesTabs />
            </ChakraProvider>
          </Route>

        </Switch>
        </Router>
    </div>
  );
}

export default App;
