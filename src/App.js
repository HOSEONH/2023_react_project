import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Nav';
import Main from './page/Main';
import Cart from './page/Cart';
import Event from './page/Event';
import Store from './page/Store';
import Menulist from './page/Menulist';
import DonutDetail from './page/DonutDetail';

import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/menulist" element={<Menulist />} />
          <Route path="/menulist/:id" element={<DonutDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/event" element={<Event />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
