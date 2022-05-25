import logo from './logo.svg';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { Navbar, Landing } from './components/index'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Landing} /> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
