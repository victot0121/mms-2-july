import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/Project'
import StudentsPage from './pages/Students'
import ProjectDetail from './pages/ProjectDetail'
import Pythontuesday from './pages/Pythontuesday'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/pythontuesday" element={<Pythontuesday />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
