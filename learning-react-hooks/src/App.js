import FirstComponent from './components/first-component';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={FirstComponent} />
      </Switch>
    </Router>
  );
}

export default App;
