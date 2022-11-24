import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Accomodation from './pages/Accomodation/Accomodation'
import About from './pages/About/About'
import NotFound from './pages/NotFound/NotFound'

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/accomodation/:accomodationId" element={<Accomodation />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter
