import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Form from "./Form/form";
import OtpPage from "./otpPage/otpPage";
import { motion } from "framer-motion";

export default function App() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/form/otp" element={<OtpPage />} />
        </Routes>
      </motion.div>
    </>
  );
}
1;
