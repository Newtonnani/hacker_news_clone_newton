// import logo from './logo.svg';
import './App.css';
import Headers from './Components/Headers';
import TopStories from './Components/TopStories';
import LatestStories from './Components/LatestStories';
import BestStories from './Components/BestStories';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <Headers />
        <Route exact path="/top" component={TopStories} />
        <Route exact path="/new" component={LatestStories} />
        <Route exact path="/best" component={BestStories} />
      </nav>
    </Router>
  );
}

export default App;
