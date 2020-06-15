import React from 'react'
import ReactDOM from 'react-dom'
// import './index.css'
import App from './App'
// import Counter from './Counter'
import * as serviceWorker from './serviceWorker'

// 第一步 匯入createStore
import { createStore, combineReducers } from 'redux'

// 這是react-redux要綁定使用的最上層元件
import { Provider } from 'react-redux'

// 第二步 @reducer
// action ={type:'Add_VALUE', value: 1}
function counter(state = 0, action) {
  switch (action.type) {
    case 'ADD_VALUE':
      return state + action.value
    case 'SUB_VALUE':
      return state - action.value
    default:
      return state
  }
}

function todos(state = [{ id: 123, text: 'hello' }], action) {
  switch (action.type) {
    default:
      return state
  }
}

// 合併所有reducers成一個大的reducer
// 傳入值為物件，用物件的es6的簡寫法
const rootReducer = combineReducers({
  counter,
  todos,
})

// 第三步 由rootReducer建立store
// const store = createStore(rootReducer)
const store = createStore(
  rootReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <Counter /> */}
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
