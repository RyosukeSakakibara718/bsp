import React from "react";
import { Routes, Route } from "react-router-dom";

import { sampleMembersData } from "./data/members";
import MemberTable from "./pages/memberManagement/components/templates/MemberTable";
// eslint-disable-next-line @typescript-eslint/no-unused-vars

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/memberManagement"
        element={<MemberTable data={sampleMembersData} />}
      />
    </Routes>
  );
};

export default AppRoutes;
