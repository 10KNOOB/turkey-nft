import Navbar from "./global/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./home/HomeIndex";
import VideoPage from "./videoPage/VideoPageIndex";
import LearnMoreIndex from "./learnmore/LearnMoreIndex";
import Dashboard from "./dashboard/Dashboard";
import Footer from "./global/Footer";
import Signup from "./account/Singup";
import Signin from "./account/Signin";
import ForgetPassword from "./account/ForgetPassword";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos" element={<VideoPage />}></Route>
        <Route path="/learnmore" element={<LearnMoreIndex />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
