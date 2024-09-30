import { InitialAssignmentMembers } from "../../../../../types/project";

type TotalCostAreaProps = {
  info: InitialAssignmentMembers;
};

const TotalCostArea: React.FC<TotalCostAreaProps> = ({ info }) => {
  return (
    <tr className="py-3 border-b border-gray-300">
      <td>
        <div className="h-[30px] py-3 contents">
          <p className="font-bold">{info.estaimate_total_person_month} 人/月</p>
        </div>
      </td>
    </tr>
  );
};

export default TotalCostArea;
