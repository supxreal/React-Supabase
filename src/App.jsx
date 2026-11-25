import { Routes, Route } from "react-router";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Playground from "./pages/Playground.jsx";
import Create from "./pages/Create.jsx";
import Read from "./pages/Read.jsx";
import Update from "./pages/Update.jsx";
import Delete from "./pages/Delete.jsx";

function App() {
  return (
    <>
      <div className="flex min-h-dvh flex-col">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/playground" element={<Playground/>} />
          <Route path="/create" element={<Create/>} />
          <Route path="/read" element={<Read/>} />
          <Route path="/update" element={<Update/>} />
          <Route path="/delete" element={<Delete/>} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
