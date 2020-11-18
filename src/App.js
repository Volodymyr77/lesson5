import logo from './logo.svg';
import './App.css';
import {useMemo, useState} from "react";

const Test = () => {
  console.log('test resf');
  return<h1> Hello from test</h1>
}

function App() {



  // const [someArr, setSomeArr] = useState([]);
  // const [cycles1, setCycles1] = useState(20);
  // const [cycles2, setCycles2] = useState(20);
  // const [cycles3, setCycles3] = useState(20);

  const calculateHardStuff = (cyclesCount)  => {
    let counter = 0;
    for (let i=0; i<cyclesCount; i++) {
      counter++;
      console.log(`i was called $[{i}`)
    }
    return counter;
  }

  const  someComplicatedValue = useMemo(( ) =>
      calculateHardStuff(cycles1, cycles2, cycles3), [cycles1])
  // const  someComplicatedValue = calculateHardStuff(5);

  return (
    <div
      className="App"
      onClick={() => {
      setSomeArr([...someArr, 1]);
      }}
    >
      hello world hard calc value {someComplicatedValue}
      {someArr.map((el) => {
        <h3 key={el}>{el}</h3>
      })}
    </div>

  );

}

export default App;
