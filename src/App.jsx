import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import './App.css'
import { ROUTES } from './const'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ConceptPage from './pages/ConceptPage'
import MenuPage from './pages/MenuPage'
import ShopPage from './pages/ShopPage'
import AccessPage from './pages/AccessPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'
import Loading from './components/Loading/Loading'

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/#/' || location.pathname === '/kissa-react-unified/#/' || location.pathname === '/kissa-react-unified/';
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isHome) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, [isHome]);

  if (isHome && loading) {
    return <Loading active />;
  }

  return (
    <div className="appLayout">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.CONCEPT.slice(1)} element={<ConceptPage />} />
          <Route path={ROUTES.MENU.slice(1)} element={<MenuPage />} />
          <Route path={ROUTES.SHOP.slice(1)} element={<ShopPage />} />
          <Route path={ROUTES.ACCESS.slice(1)} element={<AccessPage />} />
          <Route path={ROUTES.QUIZ.slice(1)} element={<QuizPage />} />
          <Route path={ROUTES.RESULT.slice(1)} element={<ResultPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
