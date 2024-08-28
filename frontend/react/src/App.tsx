import "./App.css";
import { sampleMembersData } from "./data/members";
import MemberTable from "./pages/memberManagement/components/templates/MemberTable";

function App() {
  return (
    <div className="main">
      <MemberTable data={sampleMembersData}></MemberTable>
    </div>
  );
}

export default App;
