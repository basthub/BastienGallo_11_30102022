import './App.scss'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppRouter from './router'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App
