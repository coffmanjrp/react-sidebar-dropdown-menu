import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './components/navbar';
import { Overview, Users, Revenue } from './components/pages/Overview';
import {
  ReportsOne,
  ReportsTwo,
  ReportsThree,
} from './components/pages/Reports';
import { Products } from './components/pages/Products';
import { Team } from './components/pages/Team';
import { MessageOne, MessageTwo } from './components/pages/Message';
import { Support } from './components/pages/Support';

import './assets/css/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Overview} />
          <Route exact path="/overview/users" component={Users} />
          <Route exact path="/overview/revenue" component={Revenue} />
          <Route exact path="/reports/reports1" component={ReportsOne} />
          <Route exact path="/reports/reports2" component={ReportsTwo} />
          <Route exact path="/reports/reports3" component={ReportsThree} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/messages/message1" component={MessageOne} />
          <Route exact path="/messages/message2" component={MessageTwo} />
          <Route exact path="/support" component={Support} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
