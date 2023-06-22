import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//import Body from './Body';
import BodyPi from './BodyPi';

export default function routes() {
  return (
    <Router>
      <Switch>
        <Route path="/bodypi">
          <BodyPi />
        </Route>
      </Switch>
    </Router>
  );
}
