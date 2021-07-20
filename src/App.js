
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Learning from './components/Learning';
import News from './components/News';
import WebScrapping from './Learning/WebScrapping';



function App() {
  return (

    <div className='container'>
      <Navbar />
      <div style={{ marginTop: '15px' }}>
        <Switch>
          <Route path='/' exact><Home /></Route>
          <Route path='/learning'><Learning /></Route>
          <Route path='/news'><News /></Route>
          <Route path='/webscrapping'><WebScrapping /></Route>
        </Switch>
      </div>

    </div>

  );
}

export default App;