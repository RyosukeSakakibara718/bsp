import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { sampleProjectData } from "./data/projects";
import Home from "./pages/home/components/templates/Home";
import Login from "./pages/login/components/templates/Login";
import MemberTable from "./pages/memberManagement/components/templates/MemberTable";
import ProjectDetail from "./pages/projectManagement/components/templates/ProjectDetail";
import ProjectManagement from "./pages/projectManagement/components/templates/ProjectManagement";
import UserManagement from "./pages/userManagement/components/templates/UserManagement";
import ProjectsAchievements from "./pages/projectsAchievements/components/templates/ProjectsAchievements";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/memberManagement" element={<MemberTable />} />
      <Route
        path="/projectManagement"
        element={<ProjectManagement data={sampleProjectData} />}
      />
      <Route
        path="/projectManagement/detail/:id?"
        element={<ProjectDetail />}
      />
      <Route
        path="/projectsAchievements"
        element={<ProjectsAchievements />}
      />
      <Route path="/userManagement" element={<UserManagement />} />
    </Routes>
  );
};

export default AppRoutes;
