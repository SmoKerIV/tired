import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useStore from "./zustand/store.js";

// Lazy-loaded components
const Right = lazy(() => import("../src/Component/right.jsx"));
const Number = lazy(() => import("./Pages/number.jsx"));
const Vaild = lazy(() => import("./Pages/pagevaild/vaild.jsx"));
const Email = lazy(() => import("./Pages/email/email.jsx"));
const Web = lazy(() => import("./Pages/web/web.jsx"));

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
