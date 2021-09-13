import React, {useState, useEffect} from 'react';
import './App.css';
import Test from './test';


function App() {
  const [showComponent, setShowComponent] = useState(true)
  // ---------- useEffect (componentDidMount & didUpdate) --------
  // const [count, setCount] = useState(4);
  // const [secondCount, setSecondCount] = useState(0);

  // useEffect(() => {
  //   setCount(count + 1)
  // },[secondCount])
  // ---------------------------------------------------------------


  // ------------- using useState ----------
  // const [theme, setTheme] = useState('blue');


  // function decrementCount(){
  //   setCount(prevCount => prevCount -1)
  //   setTheme('blue')
  // }
  // function incrementCount(){
  //   setCount(count + 1)
  //   setTheme('red')
  // }
  // -----------------------------------------

  return (
    <div className="App">
      <h1>Starting with Hooks</h1>
      {/* ------------- using useState ----------
      <button onClick={decrementCount}> --- </button>
      <span> {count} </span>
      <span> {theme} </span>
      <button onClick={incrementCount}> +++ </button> 
      ------------------------------------------
      */}
      {/* <span>{count} ---- {secondCount}</span>
      <button onClick={() => setSecondCount(secondCount +1)}>Second count</button> */}
      <button onClick={() => setShowComponent(false)}>Hide component</button>
      {showComponent && <Test />}
      <button onClick={() => setShowComponent(true)}>Show component</button>
    </div>
  );
}

export default App;
