import Navbaar from './componets/header/Navbaar';
import Newnav from './componets/newnavbaar/Newnav';
import Maincomp from './componets/home/Maincomp';
import './App.css';
// import { Slide } from '@mui/material';
import Footer from './componets/footer/Foot';
import SIgnUp from './componets/signup_sign/SignUp';
import Sign_in from './componets/signup_sign/Sign_in';
import Cart from './componets/cart/Cart';

import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Navbaar />
      <Newnav />
      <Routes>
        <Route path="/" element={<Maincomp />}/>
        <Route path="/login" element={<Sign_in />}/>
        <Route path="/register" element={<SIgnUp />}/>
        <Route path="/getproductsone/:id" element={<Cart />}/>
      </Routes>


      {/* <Maincomp /> */}
      <Footer />
    </>

  );
}
 
export default App;
