import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import About from "./views/About";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
