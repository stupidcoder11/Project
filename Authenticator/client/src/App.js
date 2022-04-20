import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import { Fragment } from 'react';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/"
            element={
              <Fragment>
                <Header
                  title="Authentication System"
                  description="This is a security system created to protect resource(s) from unauthorized access."
                />
                <Login />
              </Fragment>
            }
          />
          <Route
            path="/signup"
            element={
              <Fragment>
                <Header
                  title="Authentication System"
                  description="This is a security system created to protect resource(s) from unauthorized access."
                />
                <Signup />
              </Fragment>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
