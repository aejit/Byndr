import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from './components/SSO/welcome';
import Signup from './components/SSO/signup';
import Settings from './components/Profile/Settings/settings';
import NotificationSettings from './components/Profile/NotificationSettings/notificationSettings';
import Privacy from './components/Profile/Privacy/privacy';
import Security from './components/Profile/Security/security';
import Login from './components/SSO/login';
import Forgotpassword from './components/SSO/forgotpassword';
import Passwordreset from './components/SSO/passwordreset';
import Checkemail from './components/SSO/checkemail';
import Passwordchangeconfirm from './components/SSO/passwordchangeconfirm';
import HomeScreen from './components/Home/homescreen';

function App() {
  return (
  <div>
    <Router>
    <Route exact path="/" component={Welcome} />
    <Route exact path="/signup" component= {Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/forgotpassword" component={Forgotpassword} />
    <Route exact path="/passwordreset" component={Passwordreset} />
    <Route exact path="/checkemail" component={Checkemail} />
    <Route exact path="/homescreen" component={HomeScreen} />
    <Route exact path="/confirmpasswordchange" component={Passwordchangeconfirm} />
    <Route exact path="/profile/settings" component={Settings} />
    <Route exact path="/profile/notification" component={NotificationSettings} />
    <Route exact path="/profile/privacy" component={Privacy} />
    <Route exact path="/profile/security" component={Security} />
    </Router>
  </div>

  );
}

export default App;
