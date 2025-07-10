import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { ROUTES } from './const'
import HomePage from './pages/HomePage'
import ConceptPage from './pages/ConceptPage'
import MenuPage from './pages/MenuPage'
import ShopPage from './pages/ShopPage'
import AccessPage from './pages/AccessPage'
import QuizPage from './pages/QuizPage'
import ResultPage from './pages/ResultPage'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.CONCEPT} element={<ConceptPage />} />
        <Route path={ROUTES.MENU} element={<MenuPage />} />
        <Route path={ROUTES.SHOP} element={<ShopPage />} />
        <Route path={ROUTES.ACCESS} element={<AccessPage />} />
        <Route path={ROUTES.QUIZ} element={<QuizPage />} />
        <Route path={ROUTES.RESULT} element={<ResultPage />} />
      </Routes>
    </HashRouter>

  )
}

export default App
