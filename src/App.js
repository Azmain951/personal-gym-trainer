import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='position-relative'>
      <div>
        <Toaster />
      </div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div >
  );
}

export default App;
