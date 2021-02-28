import {Switch, Route} from 'react-router-dom';
import './App.css';
import Club from './components/Club'
import Card from './components/Card'
import Table from './components/Table'

function App() {
  return (
    <Switch> 
      <Route path="/club/" exact component={Club} />
      <Route path="/table/" exact component={Table} />
      <Route path="/card/" exact component={Card} />
    </Switch>
  );
}

export default App;
