import TableCaptionRow from "../../../../components/molecules/row/TableCaptionRow";
import { ProjectInfomation } from "../../../../types/project";
import Project from "../molecules/row/Project";

type ProjectInfoProps = {
  projectInfo: ProjectInfomation;
  handleProjectInfoInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const ProjectInfo: React.FC<ProjectInfoProps> = ({
  projectInfo,
  handleProjectInfoInputChange,
}) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <table className="min-w-full divide-y ">
        <TableCaptionRow value={"案件情報登録"} />
        <Project
          formData={projectInfo}
          handleInputChange={handleProjectInfoInputChange}
        />
      </table>
    </div>
  );
};

export default ProjectInfo;
