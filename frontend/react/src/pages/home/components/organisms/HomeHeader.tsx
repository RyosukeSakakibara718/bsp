import BigSelectBox from "../../../../components/atoms/box/BigSelectBox";
import { ProjectInfo } from "../../../../types/home";

type HomeHeaderProps = {
  projects: ProjectInfo[];
  handleSelectChange: (value: string) => void;
  selectedProject: string;
};

const HomeHeader = ({
  projects,
  handleSelectChange,
  selectedProject,
}: HomeHeaderProps) => {
  /**
   * HomePageの一番上にあるコンポーネント。
   * @component
   * @returns {JSX.Element} HomeHeader コンポーネントを返します。
   */
  const project = projects.find(project => project.name === selectedProject);
  const projectOptions = projects.map(project => ({
    id: project.id,
    label: project.name,
  }));
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div className="w-1/3 flex">
        <BigSelectBox
          optionArray={projectOptions}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <p className="pl-5 pr-20 py-3 text-left w-1/3">{project?.company_name}</p>
      <p className="pl-5 pr-20 py-3 text-left w-1/3">{`期間:${project?.start_date.replace(/-/g, "/")}~${project?.end_date.replace(/-/g, "/")}`}</p>
    </div>
  );
};
export default HomeHeader;
