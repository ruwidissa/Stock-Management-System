import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import {Button} from 'antd'
import Home from './Pages/Home';
import Homepage from './Pages/Homepage';
import Test from './Pages/Test';
import Hom from './Pages/test2';
import AddProduct from './Pages/AddProduct';
import Login from './Pages/Login';


function App() {
  return (
    <div className="App">
      <Routes>

        {/* <Button type='primary'> dghfg</Button> */}
        <Route exact path="/home" Component={Hom}/>
        <Route exact path="/addproduct" Component={AddProduct}/>
        <Route exact path="/" Component={Login}/>
  

      </Routes>
    </div>
  );
}

export default App;
