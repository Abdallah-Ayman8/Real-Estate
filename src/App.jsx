import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Form from "./Form/form";
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </>
  );
}
