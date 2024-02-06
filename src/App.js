
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import CustomNav from './components/CustomNav';

function App() {
  return (
    <>
    <CustomNav />
    <Routes>
      <Route element={<Home />} path='/'/>
    </Routes>
    </>
  );
}

export default App;
