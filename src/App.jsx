import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShowStudent from './Pages/Student/ShowStudent'
import CreateStudent from './Pages/Student/CreateStudent'
import StudentDetail from './Pages/Student/StudentDetail'
import EditStudent from './Pages/Student/EditStudent'
import About from './Pages/About'

const App = () => {
  return (
    <>
    <Router>
        <Routes>

            <Route path="/" element={<ShowStudent />} />
            <Route path="/student" element={<ShowStudent />} />
            <Route path="/student/create" element={<CreateStudent />} />
            <Route path="/student/detail/:studentId" element={<StudentDetail />} />
            <Route path="/student/edit/:studentId" element={<EditStudent />} />
            <Route path="/about" element={<About />} />

        </Routes>
    </Router>
    </>
  )
}

export default App