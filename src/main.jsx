import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements,
} from "react-router-dom";

import {Home , Layout, Contact, About, User, Github} from './index.js';



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>

      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="github" element={<Github />} />
      <Route path='user/:userId' element={<User />}/>


  </Route>

  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
