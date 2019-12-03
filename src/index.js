import React from 'react';
import ReactDOM from 'react-dom';
import {reducer} from './store/reducers'
import Provider from './Provider'
import Timer from "./components/TimerComponent";
import {createStore} from "./store/createStore"
 
// init
ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <Timer />
  </Provider>,
  document.getElementById('root')
)
  