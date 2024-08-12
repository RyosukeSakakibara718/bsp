import "./App.css";
import MemberTable from "./pages/memberManagement/components/templates/MemberTable";
import { sampleMembersData } from "./data/members";

function App() {
  return (
    <div className="main">
      <MemberTable data={sampleMembersData}></MemberTable>
    </div>
  );
}

export default App;
