import React, { Component, Suspense } from 'react';
import { HashRouter, BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));

class App extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={this.loading()}>
            <Switch>
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

/*
function App() {
}
*/

export default App;
