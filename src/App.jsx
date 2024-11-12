import "./App.css";

import Right from "../src/Componet/right.jsx";
import Number from "./Pages/number.jsx";
import Vaild from "./Pages/pagevaild/vaild.jsx";
import Email from "./Pages/email/email.jsx";
import Web from "./Pages/web/web.jsx";
import useStore from "./zustand/store.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Suspense} from "react";






function App() {
  const { count } = useStore();

  // Define components based on `count` values
  const components = [<Right />, <Number />, <Vaild />, <Email />, <div></div>];

  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={components[count] || null} />
          <Route path="/web" element={<Web />} />
          <Route path="*" element={<div>404: Page Not Found</div>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
