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
import OutsourcesHead from "../molecules/row/OutsourcesHeader";

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
  const [memberInfoRows, setMemberInfoRows] = useState<number[]>([0]);
  // TODO詳細ページ、idがあれば編集で、なければ、create
  console.log(id);

  const OutsourceColumns = [
    { label: "内容", width: 400 },
    { label: "見積金額", width: 200 },
    { label: "原価", width: 200 },
    { label: "", width: 50 },
  ];
  const membrInfoColumns = [
    { label: "名前", width: 40 },
    { label: "役職", width: 40 },
    { label: "4月", width: 40 },
    { label: "5月", width: 40 },
    { label: "6月", width: 40 },
    { label: "見積総合工数", width: 50 },
    { label: "", width: 5 },
  ];

  const handleAddOutSouRegRow = () => {
    setOutSouRegRows(prevRows => [...prevRows, prevRows.length]);
  };

  /**
   * 登録処理
   */
  const handleRegister = () => {
    // 登録処理をここに記述
  };

  const handleAddMemberInfoRow = () => {
    // メンバー追加処理
    setMemberInfoRows(prevRows => [...prevRows, prevRows.length]);
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
          <OutsourcesHead columns={membrInfoColumns} />
          <MemberInfo
            memberInfoRows={memberInfoRows}
            setMemberInfoRows={setMemberInfoRows}
          />
        </table>
        <div className="text-left mt-2 ml-4">
          <AddButton
            buttonText="メンバーの追加"
            handleClick={handleAddMemberInfoRow}
          />
          <Spacer height="10px"></Spacer>
        </div>
      </div>
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y">
          <TableCaptionRow value={"外注費登録"} />
          <OutsourcesHead columns={OutsourceColumns} />
          <Outsources
            outSouRegRows={outSouRegRows}
            setOutSouRegRows={setOutSouRegRows}
          />
        </table>
        <div className="text-left mt-2 ml-4">
          <AddButton buttonText="追加" handleClick={handleAddOutSouRegRow} />
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
