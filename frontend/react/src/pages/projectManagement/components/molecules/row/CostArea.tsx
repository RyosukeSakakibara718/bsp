import { InitialAssignmentMembers } from "../../../../../types/project";

type CostAreaProps = {
  member: InitialAssignmentMembers;
  months: string[]
  memberIndex: number;
  handleInputChange: (
    memberIndex: number,
    monthIndex: string,
    value: number,
  ) => void;
}

const CostArea: React.FC<CostAreaProps> = ({member, months, memberIndex, handleInputChange}) => {
  return (
    <div key={member.member_id} className="flex py-3 border-b border-gray-300">
      {months.map((monthIndex) => {
        const estimation =
          member.assignment_member_monthly_estimations &&
          member.assignment_member_monthly_estimations.find(
            (estimation) => estimation.target_month === monthIndex,
          );
        return (
          <div
            key={monthIndex}
            className="w-[100px] text-center"
            id={member.member_id.toString()}
          >
            <input
              type="number"
              name="target_month"
              value={estimation ? estimation.estimate_person_month : ''}
              className="border border-gray-300 w-[70px] h-[32px] rounded"
              onChange={(e) =>
                handleInputChange(memberIndex, monthIndex, Number(e.target.value))
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default CostArea;