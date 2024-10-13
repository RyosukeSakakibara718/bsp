import TableCaptionRow from "../../../../components/molecules/row/TableCaptionRow";
import TableHeader from "../../../../components/molecules/TableHeader";
import { HOME_MEMBERINFO_TABLE_HEADER } from "../../../../constants/index";
import { MemberInfoDataProps } from "../../../../types/home";
import MemberInfoRow from "../molecules/row/MemberInfoRow";

const MemberInfo = ({ MembersData }: MemberInfoDataProps) => {
  /**
   * 参画メンバーの情報を表示を行うテーブルコンポーネント。
   *
   * @component
   * @param {MemberInfoDataProps} props - コンポーネントに渡されるプロパティ。
   * @returns {JSX.Element} MemberInfoeコンポーネントを返します。
   */

  return (
    <div className="overflow-hidden rounded-lg border-2">
      <table className=" min-w-full divide-y rounded-lg">
        <thead>
          <TableCaptionRow value={"メンバー情報"} />
          <TableHeader columns={HOME_MEMBERINFO_TABLE_HEADER} />
        </thead>
        <tbody>
          <MemberInfoRow MembersData={MembersData} />
        </tbody>
      </table>
    </div>
  );
};
export default MemberInfo;
