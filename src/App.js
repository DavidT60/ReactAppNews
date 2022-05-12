import logo from './logo.svg';
import './App.css';
import FomUser from './componentFom'
import Entery from './compoentITS'
import {useState} from "react";

function App() {
  
  const [data, setData] = useState({active: false});
  console.log(data.active)
  
    function dataLoader(active){
      setData({active: active.active})
    }

     console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {data.active ?  <FomUser passing={dataLoader}/>:<Entery />}
      </header>
    </div>
  );
}


export default App;
