import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// **PAGE** Import pages
import Home from './pages/Home'
import DisplayPost from './pages/DisplayPost'

function App() {
  return (
    <>
      <Router>{/* Routes */}
        <div className="container">
          <Routes>{/* Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/post/:id' element={<DisplayPost />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
