import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Header from "./components/header/header.jsx";
import News from "./pages/news/news.jsx";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
}
