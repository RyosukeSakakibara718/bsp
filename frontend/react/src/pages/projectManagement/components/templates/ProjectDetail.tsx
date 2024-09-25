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

  function getMonthsBetweenDates(start_date, end_date) {
    const start = new Date(start_date);
    const end = new Date(end_date);
    const result = [];

    // startがendを超えるまでループ
    while (start <= end) {
      // 現在の年月を "YYYY-MM" の形式で配列に追加
      const year = start.getFullYear();
      const month = String(start.getMonth() + 1).padStart(2, '0'); // 月を2桁に
      result.push(`${year}-${month}`);

      // 次の月に進む
      start.setMonth(start.getMonth() + 1);
    }

    return result;
  }

  const projects = {
    projects_data: {
      name: "プロジェクトバランサー",
      phase: 1,
      start_date: "2024-08-01",
      end_date: "2025-05-31",
    },
    estimations: {
      order_price: 300000000,
      estimate_cost: 20000000,
      estimate_person_month: 23,
    },
    assignment_members: [
      {
        member_id: 1,
        position: 1,
        estimate_total_person_month: 6, // プロパティ名を修正
        assignment_member_monthly_estimations: [
          {
            target_month: 5,
            estimate_person_month: 1.0,
          },
        ],
      },
    ],
    outsources: [
      {
        name: "デザイン外注",
        estimate_cost: 400000,
        cost: 300000,
      },
    ],
  };

  const months = getMonthsBetweenDates(projects.projects_data.start_date, projects.projects_data.end_date);

  console.log(months);

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
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y ">
          <TableCaptionRow value={"案件情報登録"} />
          <Project />
        </table>
      </div>
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full max-w-screen-lg divide-y">
          <TableCaptionRow value={"メンバー情報登録"} />
          <tbody>
            <tr className="flex">
              <th className="flex-1">A</th>
              <th className="flex-2">B</th>
              <th className="flex-1">C</th>
            </tr>
            <tr className="flex">
              <td className="flex-1 overflow-x-scroll">BD</td>
              <td className="flex-2 overflow-x-scroll">
                <div className="w-1/2 overflow-x-scroll whitespace-nowrap">
                  <table>
                    <tbody className="flex">
                      {months.map(row => (
                        <div key={row}>
                          <tr>
                            <th>{row}</th>
                          </tr>
                          <td>
                            <input type="text" className="border" />
                          </td>
                        </div>
                      ))}
                    </tbody>
                  </table>
                </div>
              </td>
              <td className="flex-1 overflow-x-scroll">BD</td>
            </tr>
          </tbody>
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
          <thead>
            <TableCaptionRow value={"外注費登録"} />
            <OutsourcesHead columns={OutsourceColumns} />
          </thead>
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
