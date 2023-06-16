import { HashRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { About } from "./components/pages/About";
import { Contact } from "./components/pages/Contact";
import { NotFound } from "./components/pages/NotFound";

export const RouterConfig = () => {
  return (
    <>
      {/* <HashRouter basename={process.env.PUBLIC_URL}> */}
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </>
  );
}
