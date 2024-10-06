import React, { useEffect, useState } from "react";

import Spacer from "../../../../components/atoms/Spacer";
import { sampleMembersData, sampleOrderInfo } from "../../../../data/home";
import CommentBox from "../organisms/CommentBox";
import EstimatedLanding from "../organisms/EstimatedLanding";
import HomeHeader from "../organisms/HomeHeader";
import MemberInfo from "../organisms/MemberInfo";
import OrderInfo from "../organisms/OrderInfo";
import { getProjectsAll } from "../../../../hooks/useProjects";
import Graph from "../libs/infragistics/Graph";

export interface Project {
  id: number;
  name: string;
  freee_project_code: string;
  start_date: string;
  end_date: string;
  project_manager: string;
}

const Home: React.FC = () => {
  /**
   * ホーム画面表示する、コンポーネント。
   *
   * @component
   * @returns {JSX.Element} Homeコンポーネントを返します。
   */
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<string>(
    projects[0]?.name,
  );

  const handleSelectChange = (value: string) => {
    setSelectedProject(value);
  };

  useEffect(() => {
    getProjectsAll()
      .then((projects: Project[]) => {
        if (projects !== null) {
          setProjects(projects);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error(
          "プロジェクトデータの取得中にエラーが発生しました:",
          error,
        );
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      setSelectedProject(projects[0].name);
    }
  }, [projects]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Spacer height="40px"></Spacer>
      <HomeHeader
        projects={projects}
        handleSelectChange={handleSelectChange}
        selectedProject={selectedProject}
      />
      <Spacer height="40px"></Spacer>
      <div style={{ display: "flex", gap: "40px" }}>
        <OrderInfo OrderInfoData={sampleOrderInfo} />
        <EstimatedLanding OrderInfoData={sampleOrderInfo} />
      </div>
      <Spacer height="40px"></Spacer>
      <MemberInfo MembersData={sampleMembersData} />
      <Spacer height="40px"></Spacer>
      <Graph />
      <Spacer height="40px"></Spacer>
      <CommentBox />
    </div>
  );
};

export default Home;
