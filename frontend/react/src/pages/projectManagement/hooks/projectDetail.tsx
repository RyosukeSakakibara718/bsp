import { getMemberAll } from "../../../hooks/useMember";
import { OptionList } from "../../../types/project";

// getMemberList の型定義
type GetMemberListProps = {
  handleChange: (members: OptionList[]) => void;
};

// getMemberList は非同期関数として定義する
export const getMemberList = (
  handleChange: GetMemberListProps["handleChange"],
): void => {
  getMemberAll()
    .then(members => {
      const memberName = members.map(member => ({
        id: member.id,
        value: member.name,
        label: member.name,
      }));
      handleChange(memberName);
    })
    .catch(error => {
      console.error("Error fetching member data:", error);
    });
};
