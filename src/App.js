import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddProduct from './Pages/AddProduct';
import Login from './Pages/Login';
import Report from './Pages/Report';
import Update from './Pages/Update';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
      <Routes>

        {/* <Button type='primary'> dghfg</Button> */}
        <Route exact path="/home" Component={Home}/>
        <Route exact path="/addproduct" Component={AddProduct}/>
        <Route exact path="/" Component={Login}/>
        <Route exact path="/generatereport" Component={Report}/>
        <Route exact path="/update" Component={Update}/>
        <Route path="/update/:product_id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
