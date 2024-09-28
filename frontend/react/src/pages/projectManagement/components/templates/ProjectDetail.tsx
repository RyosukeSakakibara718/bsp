import { useState } from "react";
import { useParams } from "react-router-dom";

import Spacer from "../../../../../src/components/atoms/Spacer";
import AddButton from "../../../../components/atoms/button/AddButton";
import TableCaptionRow from "../../../../components/molecules/row/TableCaptionRow";
import Outsources from "../molecules/row/Outsources";
import Project from "../molecules/row/Project";
import OutsourcesHead from "../molecules/row/OutsourcesHeader";
import TableSelectField from "../../../../components/atoms/field/TableSelectField";
import {
  rank,
  projectDetailData,
  initialAssignmentMembers,
  initialAssignmentMembersInfo,
} from "../../../../data/projectDetail";
import type { InitialAssignmentMembers } from "../../../../types/project";
import { FaTrashAlt } from "react-icons/fa";

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
  const [assignmentMembersInfo, setAssignmentMembersInfo] = useState<
    InitialAssignmentMembers[]
  >(initialAssignmentMembers);

  // TODO詳細ページ、idがあれば編集で、なければ、create

  const OutsourceColumns = [
    { label: "内容", width: 400 },
    { label: "見積金額", width: 200 },
    { label: "原価", width: 200 },
    { label: "", width: 50 },
  ];

  const memberName = [
    { value: "山田 涼介", label: "山田 涼介" },
    { value: "山下 智久", label: "山下 智久" },
  ];

  const proj_start_date: string = projectDetailData.projects.projects_data.start_date;
  const proj_end_date: string = projectDetailData.projects.projects_data.end_date;


  /**
   * メンバーの工数入力の期間を案件開始しび~終了日を参照して配列として作成
   */
  function getMonthsBetweenDates(start_date: string, end_date: string,): string[] {
    const start = new Date(start_date);
    const end = new Date(end_date);

    const result = [];

    // startがendを超えるまでループ
    while (start <= end) {
      // 現在の年月を "YYYY-MM" の形式で配列に追加
      const year = start.getFullYear();
      const month = String(start.getMonth() + 1).padStart(2, "0"); // 月を2桁に
      result.push(`${year}-${month}`);

      // 次の月に進む
      start.setMonth(start.getMonth() + 1);
    }
    return result;
  }

  const months = getMonthsBetweenDates(proj_start_date, proj_end_date);
  const handleAddOutSouRegRow = () => {
    setOutSouRegRows(prevRows => [...prevRows, prevRows.length]);
  };

  /**
   * 登録処理
   */
  const handleRegister = () => {
    // 登録処理をここに記述
  };

  /**
   * メンバー情報登録内の行の追加
   */
  const handleAddMemberInfoRow = () => {
    setAssignmentMembersInfo(prevRows => [
      ...prevRows,
      initialAssignmentMembersInfo,
    ]);
  };

  /**
   * メンバー情報登録内の選択行の削除
   */
  const deleteAssignmentMembersInfo = (index: number) => {
    setAssignmentMembersInfo(prevRows => prevRows.filter((_, i) => i !== index));
  };

  return (
    <>
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y ">
          <TableCaptionRow value={"案件情報登録"} />
          <Project data={formData} />
        </table>
      </div>
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full max-w-screen-lg divide-y">
          <TableCaptionRow value={"メンバー情報登録"} />
          <div className="rounded-lg shadow-md">
            <div className="flex p-5">
              <div className="flex rounded-lg shadow-md w-[100%]">
                <div className="w-[30%]">
                  <table className="w-full">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="py-2">名前</th>
                        <th className="py-2">役職</th>
                      </tr>
                    </thead>
                    <tbody>
                      {assignmentMembersInfo.map(() => (
                        <>
                          <tr>
                            <td>
                              <TableSelectField options={memberName} />
                            </td>
                            <td>
                              <TableSelectField options={rank} />
                            </td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="w-[1000px] border-l-[1px] border-r-[1px] border-gray-400 overflow-x-auto">
                  <div className="min-w-max">
                    {/* ヘッダー部分 */}
                    <div className="flex bg-gray-200">
                      {months.map((row, index) => (
                        <div key={index} className="w-[100px] py-2 text-center">
                          <p>{row}</p>
                        </div>
                      ))}
                    </div>

                    {/* 入力部分 */}
                    <div>
                      <div>
                        {assignmentMembersInfo.map(() => (
                          <div className="flex py-3">
                            {months.map(monthIndex => (
                              <div
                                key={monthIndex}
                                className="w-[100px] text-center"
                              >
                                <input
                                  type="number"
                                  className="border border-gray-300 w-[70px] h-[30px] rounded"
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
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
                        <tr className="py-3">
                          <td>
                            <div className="h-[30px] py-3 contents">
                              <p>{info.estaimate_total_person_month} 人/月</p>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="w-[5%]">
                  <table className="w-full h-full">
                    <thead className="bg-gray-200">
                      <tr>
                        <th className="py-2 w-[100%]">　</th>
                      </tr>
                    </thead>
                    <tbody>
                    {assignmentMembersInfo.map((_, index) => (
                        <tr className="py-3">
                          <td>
                          <button
                            onClick={() => deleteAssignmentMembersInfo(index)}
                            className="bg-transparent border-none cursor-pointer p-0"
                          >
                            <FaTrashAlt className="w-5 h-5 text-black" />
                          </button>
                          </td>
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
