import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/creatPost';
// import PostForm from './pages/PostForm';
import Navbar from './components/NavBar'

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4 max-w-4xl mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/posts/:slug" element={<PostForm />} /> */}
          <Route path="/create" element={<CreatePost />} />
        </Routes>
      </div>
    </Router>
  );
}
