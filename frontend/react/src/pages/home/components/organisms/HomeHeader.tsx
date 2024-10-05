import BigSelectBox from "../../../../components/atoms/box/BigSelectBox";
import { Project } from "../templates/index";

interface HomeHeaderProps {
  projects: Project[];
  handleSelectChange: (value: string) => void;
  selectedProject: string;
}

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
  const projectNames = projects.map(project => project.name);
  const project = projects.find(project => project.name === selectedProject);
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div className="w-1/3">
        <BigSelectBox
          optionArray={projectNames}
          handleSelectChange={handleSelectChange}
        />
      </div>
      <p className="pl-5 pr-20 py-3 text-left w-1/3">株式会社インプル</p>
      <p className="pl-5 pr-20 py-3 text-left w-1/3">{`期間:${project?.start_date.replace(/-/g, "/")}~${project?.end_date.replace(/-/g, "/")}`}</p>
    </div>
  );
};
export default HomeHeader;
