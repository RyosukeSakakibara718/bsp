import { useState } from "react";
import { useParams } from "react-router-dom";

import Spacer from "../../../../../src/components/atoms/Spacer";
import AddButton from "../../../../components/atoms/button/AddButton";
import TableCaptionColumn from "../../../../components/atoms/column/TableCaptionColumn ";
import TableHeader from "../../../../components/molecules/TableHeader";
import Header from "../../../header/components/templates/Header";
import OutsourcesRegistrationTableRow from "../molecules/row/OutsourcesRegistrationTableRow";
import ProjectRegistrationTableRow from "../molecules/row/ProjectRegistrationTableRow";
import TrashButton from "../../../../components/atoms/button/TrashButton";

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
  const [rows, setRows] = useState<number[]>([0]);
  // TODO詳細ページ、idがあれば編集で、なければ、create
  console.log(id);

  const projectLabel = [
    { label: "案件名", label2: "作業フェーズ" },
    { label: "freeeプロジェクトID", label2: "受注額" },
    { label: "開始日", label2: "見積原価" },
    { label: "終了日", label2: "見積工数" },
  ];

  const OutsourceColumns = ["内容", "見積金額", "原価",""];

  const handleAddRow = () => {
    setRows(prevRows => [...prevRows, prevRows.length]); // 行を追加
  };

  const handleDeleteRow = (row: number) => {
    console.log(row);
    setRows((prevRows) => prevRows.filter(rowId => rowId !== row)); // 行を削除
  };

  /**
   * 登録処理
   */
  const handleRegister = () => {
    // 登録処理をここに記述
  };

  return (
    <>
      <Header />
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y ">
          <thead className="bg-[#EEE3FF]">
            <TableCaptionColumn value={"案件情報登録"} />
          </thead>
          <tbody>
            {projectLabel.map((item, index) => (
              <ProjectRegistrationTableRow
                key={index}
                label={item.label}
                label2={item.label2}
              />
            ))}
          </tbody>
        </table>
      </div>
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y">
          <thead>
            <tr>
              <TableCaptionColumn value={"メンバー情報登録"} />
            </tr>
          </thead>
        </table>
        <div className="text-left mt-2 ml-4">
          <button
            // onClick={handleAddRow}
            className="p-2 bg-blue-500 text-white rounded"
          >
            メンバーの追加
          </button>
          <Spacer height="10px"></Spacer>
        </div>
      </div>
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y">
          <thead>
            <tr>
              <TableCaptionColumn value={"外注費登録"} />
            </tr>
            <TableHeader columns={OutsourceColumns} />
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <OutsourcesRegistrationTableRow key={row} onDelete={handleDeleteRow}/>
            ))}
          </tbody>
        </table>
        <div className="text-left mt-2 ml-4">
          <button
            onClick={handleAddRow}
            className="p-2 bg-blue-500 text-white rounded"
          >
            追加
          </button>
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
