import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import CounterApp from './App'
// import Counter from './Counter'
import * as serviceWorker from './serviceWorker'

// 第一步 匯入createStore
import { createStore, combineReducers } from 'redux'

// 這是react-redux要綁定使用的最上層元件
import { Provider } from 'react-redux'

import { rootReducer } from './reducers'

// 第三步 由rootReducer建立store
// const store = createStore(rootReducer)
const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <CounterApp />
    </Provider>
    {/* <Counter /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
