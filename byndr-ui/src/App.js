import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './components/SSO/welcome';

function App() {
  return (
  <div>
    <Router>
    <Route exact path="/" component={Welcome} />
    </Router>
  </div>

  );
}

export default App;
