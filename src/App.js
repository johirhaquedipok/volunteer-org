import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
import Blog from "./Components/Blog/Blog";
import Donation from "./Components/Donation/Donation";
import Event from "./Components/Event/Event";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Register from "./Components/Register/Register";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/event" element={<Event />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
