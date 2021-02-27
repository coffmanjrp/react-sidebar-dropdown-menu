import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './components/navbar';
import './assets/css/App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
        <h1>Hello World!</h1>
      </div>
    </Router>
  );
};

export default App;
