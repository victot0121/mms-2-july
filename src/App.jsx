import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/Project'
import ProjectDetail from './pages/ProjectDetail'
import Pythontuesday from './pages/Pythontuesday'
import PythotuesdayDetail from './pages/PythotuesdayDetail'
import ReactNativeProject from './pages/Reactnativeproject'
import ReactnativeprojectDetail from './pages/ReactnativeprojectDetail'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/reactnativeproject" element={<ReactNativeProject />} />
          <Route path="/reactnativeproject/:id" element={<ReactnativeprojectDetail />} />
          <Route path="/pythontuesday" element={<Pythontuesday />} />
          <Route path="/pythontuesday/:id" element={<PythotuesdayDetail />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
