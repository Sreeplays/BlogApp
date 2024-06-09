
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import ArticleDetailPage from './pages/ArticleDetailing/ArticleDetailPage';


function App() {
  return (
    <>
    
    <Routes>
      <Route element={<Home />} path='/'/>
      <Route element={<ArticleDetailPage />} path='/blog/:id'/>
    </Routes>
    </>
  );
}

export default App;
