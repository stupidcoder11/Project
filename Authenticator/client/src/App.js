import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Post from './components/Post';
import About from './components/About';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  title="Login Section"
                  description="This is a security system created to protect resource(s) from unauthorized access."
                />
                <Login />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Header
                  title="Signup Section"
                  description="This is a security system created to protect resource(s) from unauthorized access."
                />
                <Signup />
              </>
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
