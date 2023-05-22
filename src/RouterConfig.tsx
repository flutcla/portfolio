import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/pages/NotFound";

export const RouterConfig = () => {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}