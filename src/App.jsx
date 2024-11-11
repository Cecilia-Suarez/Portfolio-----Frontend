import ProjectDetail from './Pages/ProjectDetail'
import './App.css'
import Home from './Pages/Home'
import {Routes, Route } from 'react-router-dom'
import Footer from './Sections/Footer'
import Header from './Sections/Header'

function App() {
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer/>
    </>
  )
}

export default App
