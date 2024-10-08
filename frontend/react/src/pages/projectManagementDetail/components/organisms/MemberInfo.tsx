import AddButton from "../../../../components/atoms/button/AddButton";
import TrashButton from "../../../../components/atoms/button/TrashButton";
import Spacer from "../../../../components/atoms/Spacer";
import TableCaptionRow from "../../../../components/molecules/row/TableCaptionRow";
import {
  InitialAssignmentMembers,
  OptionList,
} from "../../../../types/project";
import CostArea from "../molecules/row/CostArea";
import CostAreaHeader from "../molecules/row/CostAreaHeader";
import StatusArea from "../molecules/row/StatusArea";
import StatusAreaHeader from "../molecules/row/StatusAreaHeader";
import TotalCostArea from "../molecules/row/TotalCostArea";

type MemberInfoProps = {
  assignmentMembersInfo: InitialAssignmentMembers[];
  handleAssignmentMembersInfoInputChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleAddMemberInfoRow: () => void;
  handleInputChange: (
    memberIndex: number,
    monthIndex: string,
    value: number,
  ) => void;
  deleteAssignmentMembersInfoRow: (index: number, member_id: number) => void;
  memberName: OptionList[];
  rank: OptionList[];
  months: string[];
};

const MemberInfo: React.FC<MemberInfoProps> = ({
  assignmentMembersInfo,
  handleAssignmentMembersInfoInputChange,
  handleAddMemberInfoRow,
  handleInputChange,
  deleteAssignmentMembersInfoRow,
  memberName,
  rank,
  months,
}) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <table className="min-w-full max-w-screen-lg divide-y">
        <TableCaptionRow value={"メンバー情報登録"} />
        <div className="rounded-lg shadow-md">
          <div className="flex p-5">
            <div className="flex rounded-lg shadow-md w-[100%]">
              <div className="w-[30%]">
                <table className="w-full">
                  <thead className="bg-gray-200">
                    <StatusAreaHeader />
                  </thead>
                  <tbody>
                    {assignmentMembersInfo.map((item, index) => (
                      <StatusArea
                        memberName={memberName}
                        rank={rank}
                        item={item}
                        index={index}
                        handleAssignmentMembersInfoInputChange={
                          handleAssignmentMembersInfoInputChange
                        }
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-[1000px] border-l-[1px] border-r-[1px] border-gray-400 overflow-x-auto">
                <div className="min-w-max">
                  <div className="flex bg-gray-200">
                    {months.map((row, index) => (
                      <CostAreaHeader index={index} row={row} />
                    ))}
                  </div>
                  <div>
                    {assignmentMembersInfo.map((member, memberIndex) => (
                      <CostArea
                        member={member}
                        months={months}
                        memberIndex={memberIndex}
                        handleInputChange={handleInputChange}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-[15%] ">
                <table className="w-full h-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-2 w-[100%]">見積総工数</th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignmentMembersInfo.map(info => (
                      <TotalCostArea info={info} />
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="w-[5%]">
                <table className="w-full h-full">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="py-2 w-[100%]">&nbsp; </th>
                    </tr>
                  </thead>
                  <tbody>
                    {assignmentMembersInfo.map((item, index) => (
                      <tr
                        key={`${item.member_id}-${index}`}
                        className="border-b border-gray-300"
                      >
                        <TrashButton
                          onDelete={() =>
                            deleteAssignmentMembersInfoRow(
                              index,
                              item.member_id,
                            )
                          }
                          row={index}
                          member_id={item.member_id}
                        />
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-left mt-2 ml-4">
            <AddButton
              buttonText="メンバーの追加"
              handleClick={handleAddMemberInfoRow}
            />
            <Spacer height="10px"></Spacer>
          </div>
        </div>
      </table>
    </div>
  );
};

export default MemberInfo;
