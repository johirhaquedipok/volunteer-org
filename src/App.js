import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Admin from "./Components/Admin/Admin";
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
        </Routes>
      </Container>
    </>
  );
}

export default App;
