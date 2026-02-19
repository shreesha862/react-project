import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

//import Login from "./assets/pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import MyCourses from "./pages/MyCourses.jsx";
import Progress from "./pages/Progress.jsx";
import Notifications from "./pages/Notification.jsx";
import Login from "./pages/Login.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Courses */}
        <Route path="/my-courses" element={<MyCourses />} />

        {/* Progress */}
        <Route path="/progress" element={<Progress />} />

        {/* Notifications page */}
        <Route path="/notifications" element={<Notifications />} />
        

        {/* Redirect unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;






