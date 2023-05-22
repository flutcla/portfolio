import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/pages/NotFound";

export const RouterConfig = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/portfolio" element={<Home />}></Route>
        <Route path="/portfolio/about" element={<About />} />
        <Route path="/portfolio/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}