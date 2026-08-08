import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectPage from './pages/Project'
import ProjectDetail from './pages/ProjectDetail'
import Pythontuesday from './pages/Pythontuesday'
import PythotuesdayDetail from './pages/PythotuesdayDetail'
import ReactNativeProject from './pages/Reactnativeproject'
import ReactnativeprojectDetail from './pages/ReactnativeprojectDetail'
import Pythomonday from './pages/Pythomonday'
import Pythonmondaydetails from './pages/PythomondayDetail'

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
          <Route path="/pythomonday" element={<Pythomonday />} />
          <Route path="/pythomonday/:id" element={<Pythonmondaydetails />} />
        </Routes>
      </Router> 
    </>
  )
}

export default App
