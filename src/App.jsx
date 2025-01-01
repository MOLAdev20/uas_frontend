import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ShowStudent from './Pages/Student/ShowStudent'
import CreateStudent from './Pages/Student/CreateStudent'

const App = () => {
  return (
    <>
    <Router>
        <Routes>

            <Route path="/student" element={<ShowStudent />} />
            <Route path='/student/create' element={<CreateStudent />} />

        </Routes>
    </Router>
    </>
  )
}

export default App