import MonthNavigator from "../../../../../components/atoms/navigator/MonthNavigator";
import TableCaptionRow from "../../../../../components/molecules/row/TableCaptionRow";

// index.tsxでも使ってる

type ProjectsAchieveHeaderProps = {
  between: {
    id: number;
    label: string;
  };
};

const ProjectsAchieveHeader: React.FC<ProjectsAchieveHeaderProps> = ({
  between,
}) => {
  /**
   * テーブルヘッダーを構成するセルコンポーネント
   *
   * @param {TableCaptionRowProps} props - セルコンポーネントに渡されるプロパティオブジェクト。
   * @param {function} props.value - セルに表示される値。
   * @returns {JSX.Element} ヘッダーを構成するセルを返します。
   */

  return (
    <>
      <thead className="w-full">
        <TableCaptionRow value={"案件実績"} />
        <tr>
          <th>氏名</th>
          <th>役職</th>
          <th className="border-r border-gray-300 px-4 py-2">原価</th>
          <MonthNavigator between={between} />
        </tr>
      </thead>
    </>
  );
};
export default ProjectsAchieveHeader;
