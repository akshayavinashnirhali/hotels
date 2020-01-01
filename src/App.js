import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';
import React, { Suspense, lazy } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';
import history from './utilities/history';

const Home = lazy(() => import('./routes/home/home'));
const Result = lazy(() => import('./routes/result/result'));

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
        </header>
        <main>
        <Router history={history}>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/result" component={Result}/>
            </Switch>
          </Suspense>
        </Router>
        </main>
        <footer>
        </footer>
      </div>
    </Provider>
  );
}

export default App;
