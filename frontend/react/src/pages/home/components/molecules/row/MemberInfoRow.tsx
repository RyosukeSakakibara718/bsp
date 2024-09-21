import TableTd from "../../../../../components/atoms/field/TableTd";
import { MemberInfoDataProps } from "../../../../../types/home/MemberInfoDataProps";
const MemberInfoRow = ({ MembersData }: MemberInfoDataProps) => {
  /**
   * メンバー情報rowを表示し、追加・テーブコンポーネント。
   * @component
   * @param {MemberTableProps} props - コンポーネントに渡されるプロパティ。
   * @param {Array} props.data - メンバーのデータリスト。
   * @returns {JSX.Element} MemberTableコンポーネントを返します。
   */
  return (
    <>
      {MembersData.map(item => (
        <tr key={item.id}>
          {Object.values(item)
            .slice(1)
            .map(value => (
              <TableTd text={value} />
            ))}
        </tr>
      ))}
    </>
  );
};
export default MemberInfoRow;
