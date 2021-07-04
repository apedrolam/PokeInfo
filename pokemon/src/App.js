import './App.css';
import Sidebar from './components/Sidebar.js'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/pokedex" exact component={Pokedex} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
