import { HashRouter, Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard.jsx";
import MyCourses from "./pages/MyCourses.jsx";
import Progress from "./pages/Progress.jsx";
import Notifications from "./pages/Notification.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;








