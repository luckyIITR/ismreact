import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Register from './components/Register'
import Participants from "./components/Participants";
import Noc from "./components/Noc";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import Zoom from "./components/Zoom"
import './components/css/index.css'
import './components/css/cms.min.css'
import './components/css/global_variables.css'
import './components/css/common.css'
import './components/css/mainstyle.css'


function App() {
  return (
    <HashRouter>
          <Switch>
           <Route path="/" component={Home} exact/>
            <Route path="/Register" component={Register} exact/>
            <Route path="/Participants" component={Participants} exact/>
            <Route path="/Noc" component={Noc} exact/>
            <Route path="/Schedule" component={Schedule} exact/>
              <Route path="/Zoom" component={Zoom} exact/>
              <Route path="/Contact" component={Contact} exact/>
         </Switch>
    </HashRouter>
);
}

export default App;
