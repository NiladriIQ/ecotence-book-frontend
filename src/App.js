import './App.css';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



//components
const BookForm = lazy(() => import('./Components/BookForm'));
const BookList = lazy(() => import('./Components/BookList'));
const Home = lazy(() => import('./Components/Home'));
const Navbar = lazy(() => import('./Components/Navbar'));
const NoMatch = lazy(() => import('./Components/NoMatch'));
const SignIn = lazy(() => import('./Components/SignIn'));
const DefaultFallback = (params) => <div>Loading...</div>

function App() {
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/signin')
    }
  }, [isLoggedIn])


  return (
    <>
      {isLoggedIn && <Navbar setisLoggedIn={setisLoggedIn} />}

      <Routes>
        <Route path='/signin' element={<Suspense fallback={<DefaultFallback />}><SignIn setisLoggedIn={setisLoggedIn} /></Suspense>} />
        <Route path='/' element={<Suspense fallback={<DefaultFallback />}><Home /></Suspense>} />
        <Route path='books'>
          <Route index element={<Suspense fallback={<DefaultFallback />}><BookList /></Suspense>} />
          <Route path='list' element={<Suspense fallback={<DefaultFallback />}><BookList /></Suspense>} />
          <Route path='add' element={<Suspense fallback={<DefaultFallback />}><BookForm /></Suspense>} />
          <Route path=':id/edit' element={<Suspense fallback={<DefaultFallback />}><BookForm /></Suspense>} />
        </Route>
        <Route path='*' element={<Suspense Suspense fallback={<></>}> <NoMatch /></Suspense>} />
      </Routes>

    </>
  );
}

export default App;
