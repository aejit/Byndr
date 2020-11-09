import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './components/SSO/welcome';
import Signup from './components/SSO/signup';
import Settings from './components/Profile/Settings/settings';
import NotificationSettings from './components/Profile/NotificationSettings/notificationSettings';
import Privacy from './components/Profile/Privacy/privacy';
import Security from './components/Profile/Security/security';

function App() {
  return (
  <div>
    <Router>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/signup" component= {Signup} />
    <Route exact path="/profile/settings" component={Settings} />
    <Route exact path="/profile/notification" component={NotificationSettings} />
    <Route exact path="/profile/privacy" component={Privacy} />
    <Route exact path="/profile/security" component={Security} />
    </Router>
  </div>

  );
}

export default App;
