import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './components/SSO/welcome';
import Signup from './components/SSO/signup';

function App() {
  return (
  <div>
    <Router>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/signup" component= {Signup} />
    </Router>
  </div>

  );
}

export default App;
