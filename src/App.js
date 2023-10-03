import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { MangodbContext } from './mangodbContext';

import HomePage from './pages/HomePage';
import BookmarksPage from './pages/BookmarksPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import NavBar from './components/NavBar';

import './App.css';

export default function App() {

  const { login } = useContext(MangodbContext);

  return (
    <div className="App">

      <NavBar />

      <div className='content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/bookmarks' element={<BookmarksPage />} />
          <Route path='/searchresults' element={<SearchResultsPage />} />
          <Route path="/users/login" element={<LoginPage onLogin={login}/>} />
          <Route path="/users/signup" element={<SignUpPage />} /> 
        </Routes>
      </div>

    </div>
  );
};