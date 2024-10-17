import { getMemberAll } from "../../../hooks/useMember";
import { OptionList } from "../../../types/project";

// getMemberList の型定義
type GetMemberListProps = {
  handleChange: (memberName: OptionList[]) => void;
};

// getMemberList は非同期関数として定義する
export const getMemberList = (
  handleChange: GetMemberListProps["handleChange"],
): void => {
  getMemberAll()
    .then(members => {
      const memberName = members.map(member => ({
        id: member.id,
        name: member.name,
        base_cost: member.base_cost,
        label: member.name,
      }));
      handleChange(memberName);
    })
    .catch(error => {
      console.error("Error fetching member data:", error);
    });
};
