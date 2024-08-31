import React from "react";
import { Routes, Route } from "react-router-dom";

import { sampleMembersData } from "./data/members";
import { sampleProjectData } from "./data/projects";
import MemberTable from "./pages/memberManagement/components/templates/MemberTable";
import ProjectDetail from "./pages/projectManagement/components/templates/ProjectDetail";
import ProjectManagement from "./pages/projectManagement/components/templates/ProjectManagement";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/memberManagement"
        element={<MemberTable data={sampleMembersData} />}
      />
      <Route
        path="/projectManagement"
        element={<ProjectManagement data={sampleProjectData} />}
      />
      <Route
        path="/projectManagement/detail/:id?"
        element={<ProjectDetail />}
      />
    </Routes>
  );
};

export default AppRoutes;
