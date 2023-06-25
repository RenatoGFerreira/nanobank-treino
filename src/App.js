import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import RedirectPage from "./pages/RedirectPage/RedirectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/about" element={<RegisterPage/>} />
        <Route path="*" element={<ErrorPage/>} />
        <Route path="/redirect" element={<RedirectPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
