import React, { useEffect, useState } from "react";

import { getHomeData } from "../../../../api/home";
import Spacer from "../../../../components/atoms/Spacer";
import CommentBox from "../organisms/CommentBox";
import EstimatedLanding from "../organisms/EstimatedLanding";
import HomeHeader from "../organisms/HomeHeader";
import MemberInfo from "../organisms/MemberInfo";
import OrderInfo from "../organisms/OrderInfo";
import { getProjectsAll } from "../../../../hooks/useProjects";
import Loading from "../../../../components/molecules/Loading";
import { Member, Project } from "../../../../types/home";

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
  const [projectId, setProjectId] = useState<number>(0)
  const [assignmentMember, setAssignmentMember] = useState<Member[]>([]);
  const [foreCast, setForeCast] = useState({
    achievement_person_month: 0,
    forecast_cost: 0,
    forecast_profit: 0,
  });
  const [estimation, setEstimation] = useState({
    estimate_cost: 0,
    estimate_person_month: "0",
    order_price: 0,
  });

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

  useEffect(() => {
    if (projects.length > 0) {
      const selectedProjectObj = projects.find(
        project => project.name === selectedProject,
      );
      if (selectedProjectObj) {
        const fetchData = async () => {
          setProjectId(selectedProjectObj.id)
          const homeData = await getHomeData(selectedProjectObj.id);
          setAssignmentMember(homeData.assignment_members);
          setForeCast(homeData.forecast);
          setEstimation(homeData.estimation);
        };
        fetchData();
      }
    }
  }, [selectedProject]);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <Spacer height="40px" />
      <HomeHeader
        projects={projects}
        handleSelectChange={handleSelectChange}
        selectedProject={selectedProject}
      />
      <Spacer height="40px"/>
      <div style={{ display: "flex", gap: "40px" }}>
        <OrderInfo estimation={estimation} />
        <EstimatedLanding foreCast={foreCast} />
      </div>
      <Spacer height="40px" />
      <MemberInfo MembersData={assignmentMember} />
      <Spacer height="40px" />
      <CommentBox projectId={projectId}/>
    </div>
  );
};

export default Home;
