import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

// Screens
import HomeScreen from './screens/HomeScreen';
import TrailScreen from './screens/TrailScreen';
import AddTrailScreen from './screens/AddTrailScreen';

// Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import Sidedrawer from './components/Sidedrawer';

function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <Sidedrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <section className="jumbotron">
        <div className="overlay">
          <h1>Take A Hike</h1>
        </div>
      </section>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/trail/:id" component={TrailScreen} />
          <Route exact path="/add-trail" component={AddTrailScreen} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
