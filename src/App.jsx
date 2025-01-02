import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShowStudent from './Pages/Student/ShowStudent'
import CreateStudent from './Pages/Student/CreateStudent'
import StudentDetail from './Pages/Student/StudentDetail'

const App = () => {
  return (
    <>
    <Router>
        <Routes>

            <Route path="/student" element={<ShowStudent />} />
            <Route path="/student/create" element={<CreateStudent />} />
            <Route path="/student/detail/:studentId" element={<StudentDetail />} />

        </Routes>
    </Router>
    </>
  )
}

export default App