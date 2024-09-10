import { useState } from "react";
import { useParams } from "react-router-dom";

import Spacer from "../../../../../src/components/atoms/Spacer";
import AddButton from "../../../../components/atoms/button/AddButton";
import TableCaptionRow from "../../../../components/molecules/row/TableCaptionRow";
import TableHeader from "../../../../components/molecules/TableHeader";
import Header from "../../../header/components/templates/Header";
import MemberInfo from "../molecules/row/MemberInfo";
import Outsources from "../molecules/row/Outsources";
import Project from "../molecules/row/Project";

/**
 * 案件の登録・編集を表を行うテーブルコンポーネント。
 *
 * @component
 * @param {ProjectDetailProps} props - コンポーネントに渡されるプロパティ。
 * @param {Array} props.data - メンバーのデータリスト。
 * @returns {JSX.Element} MemberTableコンポーネントを返します。
 */

const ProjectDetail: React.FC<{ id?: string }> = () => {
  const { id } = useParams<{ id?: string }>();
  const [outSouRegRows, setOutSouRegRows] = useState<number[]>([0]);
  // TODO詳細ページ、idがあれば編集で、なければ、create
  console.log(id);

  const OutsourceColumns = ["内容", "見積金額", "原価", ""];
  const membrInfoColumns = ["名前", "役職", "4月", "5月", "見積総工数"];

  const handleAddRow = () => {
    setOutSouRegRows(prevRows => [...prevRows, prevRows.length]);
  };

  /**
   * 登録処理
   */
  const handleRegister = () => {
    // 登録処理をここに記述
  };

  const handleAddMember = () => {
    // メンバー追加処理
  };

  return (
    <>
      <Header />
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y ">
          <TableCaptionRow value={"案件情報登録"} />
          <Project />
        </table>
      </div>
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y">
          <TableCaptionRow value={"メンバー情報登録"} />
          <TableHeader columns={membrInfoColumns} />
          <MemberInfo />
        </table>
        <div className="text-left mt-2 ml-4">
          <AddButton
            buttonText="メンバーの追加"
            handleClick={handleAddMember}
          />
          <Spacer height="10px"></Spacer>
        </div>
      </div>
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y">
          <TableCaptionRow value={"外注費登録"} />
          <TableHeader columns={OutsourceColumns} />
          <Outsources
            outSouRegRows={outSouRegRows}
            setOutSouRegRows={setOutSouRegRows}
          />
        </table>
        <div className="text-left mt-2 ml-4">
          <AddButton buttonText="追加" handleClick={handleAddRow} />
          <Spacer height="10px"></Spacer>
        </div>
      </div>
      <Spacer height="40px"></Spacer>
      <div className="justify-center">
        <AddButton buttonText="登録する" handleClick={handleRegister} />
      </div>
    </>
  );
};

export default ProjectDetail;
