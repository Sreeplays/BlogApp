
import { Route, Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import CustomNav from './components/CustomNav';
import Blog from './components/Blog';

function App() {
  return (
    <>
    <CustomNav />
    <Routes>
      <Route element={<Home />} path='/'/>
      <Route element={<Blog />} path='/blog'/>
    </Routes>
    </>
  );
}

export default App;
