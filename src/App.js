
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import ArticleDetailPage from './pages/ArticleDetailing/ArticleDetailPage';
import RegisterPage from './pages/register/RegisterPage';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login/LoginPage';


function App() {
  return (
    <>
    <Routes>
      <Route element={<Home />} path='/'/>
      <Route element={<ArticleDetailPage />} path='/blog/:id'/>
      <Route element={<RegisterPage />} path='/register'/>
      <Route element={<LoginPage />} path='/login'/>

    </Routes>
    <Toaster />
    </>
  );
}

export default App;
