import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import SignIn from "./pages/users/signIn";
import SignUp from "./pages/users/signUp";
import Profile from "./pages/users/profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/signin" element={<SignIn />} />
        <Route path="/users/signup" element={<SignUp/>} />
        <Route path="/users/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
