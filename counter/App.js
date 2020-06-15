import React, { useState } from 'react'
import { connect } from 'react-redux'

function App(props) {
  // const [total, setTotal] = useState(0)
  console.log(props)

  return (
    <>
      {/* <h1>{total}</h1> */}
      <h1>{props.total}</h1>
      {/* <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button> */}
      <button
        onClick={() => {
          props.dispatch({ type: 'ADD_VALUE', value: 1 })
        }}
      >
        +1
      </button>
      {/* <button
        onClick={() => {
          setTotal(total - 1)
        }}
      >
        -1
      </button> */}
      <button
        onClick={() => {
          props.dispatch({ type: 'SUB_VALUE', value: 1 })
        }}
      >
        -1
      </button>
    </>
  )
}

const mapStateToProps = (store) => {
  return { total: store.counter }
}

// 高級元件可自動得到store.dispatch
const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(App)
