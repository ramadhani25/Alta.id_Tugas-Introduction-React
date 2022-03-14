import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ContactUs from './Contact_us';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact_us">
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
