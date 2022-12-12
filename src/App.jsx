

import Cart from './components/Cart';
import Produts from './components/Produts';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';  
import { Provider } from 'react-redux'
import Navbara from './components/Navbar';
import Store from './store/Store';

function App() {
  return (
    <div >
    


<Provider store={Store}>
<Router>
  <Navbara/>
      <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/produts' element={<Produts/>}/>
      </Routes>
    </Router>
</Provider>

  
    </div>
  );
}

export default App;
