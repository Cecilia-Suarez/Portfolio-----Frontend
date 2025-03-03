import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import ProjectDetail from './Pages/ProjectDetail';
import Header from './Sections/Header';
import Footer from './Sections/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
