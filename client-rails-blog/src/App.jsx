import { BrowserRouter as Router } from "react-router-dom"
import './App.css'
import PostList from './features/posts/PostList'
import NavBar from './features/posts/NavBar'
import AppRoutes from './components/AppRoutes'

function App() {
  return (
    <Router>
    <div className='app'>
      <h1>React on rails Blog</h1>
      <p>Find this application layout in client/src/app.jsx</p>
      <NavBar/>
      <AppRoutes/>
    </div>
    </Router>
  )
}

export default App
