import TableSelectField from "../../../../../components/atoms/field/TableSelectField";
import { InitialAssignmentMembers, OptionList } from "../../../../../types/project";


type StatusAreaProps = {
  memberName: OptionList[];
  rank: OptionList[];
  item: InitialAssignmentMembers
  index: number;
  handleAssignmentMembersInfoInputChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const StatusArea: React.FC<StatusAreaProps> = ({memberName, rank, item, index, handleAssignmentMembersInfoInputChange}) => {
  return (
    <>
      <tr className="border-b border-gray-300">
        <TableSelectField
          options={memberName}
          name={"member_id"}
          value={item.member_id}
          index={index}
          handleInputChange={handleAssignmentMembersInfoInputChange}
        />
        <td>
          <TableSelectField
            options={rank}
            name={"position"}
            value={item.position}
            index={index}
            handleInputChange={handleAssignmentMembersInfoInputChange}
          />
        </td>
      </tr>
    </>
  );
};

export default StatusArea;
