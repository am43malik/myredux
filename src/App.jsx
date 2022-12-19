

import Cart from './components/Cart';
import Produts from './components/Produts';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';  
import { Provider } from 'react-redux'
import Navbara from './components/Navbar';
import Store from './store/Store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

function App() {

  let persistor = persistStore(Store);
  return (
    <div >
    


<Provider store={Store}>
  <PersistGate persistor={persistor}>
  <Router>
  <Navbara/>
      <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/produts' element={<Produts/>}/>
      </Routes>
    </Router>
  </PersistGate>

</Provider>

  
    </div>
  );
}

export default App;
