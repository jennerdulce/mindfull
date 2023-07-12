import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// **PAGE** Import pages
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import DisplayPost from './pages/DisplayPost'
import MyJournal from './pages/MyJournal'
import Dashboard from './pages/Dashboard'
import NewPost from './pages/NewPost'
import Login from './pages/Login'
import Register from './pages/Register'
import Services from './pages/Services'

function App() {
  return (
    <>
      <Router>{/* Routes */}
        <div className="container">
          <Header />
          <Routes>{/* Routes */}
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/myjournal' element={<MyJournal />} />
            <Route path='/post/:id' element={<DisplayPost />} />
            <Route path='/newpost' element={<NewPost />} />
            <Route path='/services' element={<Services />} />
          </Routes>
          <Footer />
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
