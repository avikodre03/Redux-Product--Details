import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomeComp from './Components/Routing/HomeComp/HomeComp';
import ProfileComp from './Components/Routing/ProfileComp/ProfileComp';
import Product from './Components/Routing/ProductComp/Product';
import Electronic from './Components/Routing/ProductComp/ProductCatagory/Electronic/Electronic';
import Jewelery from './Components/Routing/ProductComp/ProductCatagory/Jewelery/Jewelery';
import Mens from './Components/Routing/ProductComp/ProductCatagory/Mens/Mens';
import Women from './Components/Routing/ProductComp/ProductCatagory/Women/Women';
import NavBar from './Components/NavBar/NavBar';
import ProductDetails from './Components/Routing/ProductComp/ProductDetails/ProductDetails';
import ContactUs from './Components/Routing/ContactUs/ContactUs';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>

        <Route path='/' element={<HomeComp />} />
        <Route path='/Profile' element={<ProfileComp />} />


        <Route path='/Product' element={<Product />}>
          <Route path='' element={<Navigate to="electronic" />} />
          <Route path='electronic' element={<Electronic />} />
          <Route path='jewelery' element={<Jewelery />} />
          <Route path='mens' element={<Mens />} />
          <Route path='womens' element={<Women />} />
        </Route>

        <Route path='/productDetails/:category/:id' element={<ProductDetails />} />

       
        
        <Route path='/ContactUS' element={<ContactUs />} />

      </Routes>
    </div>
  );
}

export default App;
