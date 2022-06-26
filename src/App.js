import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Post from "./component/Post";
import Projects from "./component/Projects";
import SinglePost from "./component/SinglePost";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/posts/:slug" element={<SinglePost />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
