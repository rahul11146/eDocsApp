import React from "react";
import "./App.css";
import Navbar from "./Routing/Navbar";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import AnnualReport from "./pages/AnnualReport";
import Teams from "./pages/Teams";
import Blogs from "./pages/Blogs";
import SignUp from "./pages/SignUp";
import DataList from "./pages/DataList";
import Header from "./header";
import FormPages from "./pages/Formpages.js";
import "./assets/img/apple-touch-icon.png";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/quill/quill.snow.css";
import "./assets/vendor/quill/quill.bubble.css";
import "./assets/vendor/remixicon/remixicon.css";
import "./assets/vendor/simple-datatables/style.css";
import "./assets/css/style.css";

import "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js";
import "./assets/vendor/chart.js/chart.umd.js";
import "./assets/vendor/echarts/echarts.min.js";
import "./assets/vendor/quill/quill.js";
import "./assets/vendor/simple-datatables/simple-datatables.js";
import "./assets/vendor/tinymce/tinymce.min.js";
import "./assets/vendor/php-email-form/validate.js";

function App() {
  return (
    <>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/annual" element={<AnnualReport />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dataList" element={<DataList />} />
        <Route path="/forms" element={<FormPages />} />
      </Routes>
    </>
  );
}

export default App;
