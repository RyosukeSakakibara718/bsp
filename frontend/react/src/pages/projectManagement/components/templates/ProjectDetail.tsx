import { useEffect, useState } from "react";
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
  initialAssignmentMembersArray,
  initialAssignmentMembersInfo,
  initialOutsourcingInfo,
  OutsourceColumns,
  initialProjectInfo,
} from "../../../../data/projectDetail";
import type {
  InitialAssignmentMembers,
  InitialProjectInfo,
  MemberList,
} from "../../../../types/project";
import { FaTrashAlt } from "react-icons/fa";
import { getMemberList } from "../../hooks/projectDetail";

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

  // TODO詳細ページ、idがあれば編集で、なければ、create

  //-----------------------------------------------------案件情報登録エリアの記載-----------------------------------------------------
  /**
   * 案件情報登録用のstate作成
   */
  const [projectInfo, setProjectInfo] =
    useState<InitialProjectInfo>(initialProjectInfo);

  /**
   * 案件情報登録用のstate変更用関数
   */
  const handleProjectInfoInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setProjectInfo({
      ...projectInfo,
      [name]: value,
    });
  };

  //-----------------------------------------------------メンバー情報登録エリアの記載-----------------------------------------------------

  /**
   * メンバー情報登録用のstate作成
   */
  const [memberName, setMemberName] = useState<MemberList[]>([]);

  /**
   * 初回レンダリングにメンバー一覧を取得
   */
  useEffect(() => {
    getMemberList(setMemberName);
  }, []);

  /**
   * メンバー情報登録用のstate作成
   */
  const [assignmentMembersInfo, setAssignmentMembersInfo] = useState<
    InitialAssignmentMembers[]
  >(initialAssignmentMembersArray);

  /**
   * メンバー情報登録名前/役職カラムのstateを変更
   */
  const handleAssignmentMembersInfoInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
  
    setAssignmentMembersInfo(prevState =>
      prevState.map((item, i) => {
        if (i === index) {
          // member_id もしくは position が数値の場合、適切に型変換を行う
          const newValue = name === 'member_id' || name === 'position' ? Number(value) : value;
          return { ...item, [name]: newValue };
        }
        return item;
      }),
    );
  };

  /**
   * メンバー情報登録内の行の追加
   */
  const handleAddMemberInfoRow = () => {
    setAssignmentMembersInfo(prevRows => [
      ...prevRows,
      { ...initialAssignmentMembersInfo },
    ]);
  };

  /**
   * メンバー情報登録内の選択行の削除
   */
  const deleteAssignmentMembersInfoRow = (index: number) => {
    console.log(index);
    setAssignmentMembersInfo(prevRows =>
      prevRows.filter((_, i) => i !== index),
    );
  };

  const handleInputChange = (
    memberIndex: number,
    monthIndex: string,
    value: number,
  ) => {
    setAssignmentMembersInfo(prevState =>
      prevState.map((member, index) => {
        if (index !== memberIndex) return member; // 他のメンバーのデータはそのまま保持
  
        // 現在のメンバーの月別データを更新
        const existingEstimationIndex =
          member.assignment_member_monthly_estimations.findIndex(
            estimation => estimation.target_month === monthIndex,
          );
  
        let updatedEstimations;
        if (existingEstimationIndex !== -1) {
          // すでに同じ月のデータがある場合は更新
          updatedEstimations = member.assignment_member_monthly_estimations.map(
            (estimation, i) =>
              i === existingEstimationIndex
                ? { ...estimation, estimate_person_month: value }
                : estimation,
          );
        } else {
          // ない場合は新しいオブジェクトを追加
          updatedEstimations = [
            ...member.assignment_member_monthly_estimations,
            {
              target_month: monthIndex,
              estimate_person_month: value,
            },
          ];
        }
  
        // 合計値を計算して estimate_total_person_month を更新
        const totalPersonMonth = updatedEstimations.reduce(
          (sum, estimation) => sum + estimation.estimate_person_month,
          0, // 初期値として 0 を指定
        );
  
        // メンバーごとのデータを更新して返す
        return {
          ...member,
          assignment_member_monthly_estimations: updatedEstimations,
          estaimate_total_person_month: totalPersonMonth, // 合計値を反映
        };
      }),
    );
  };
  

  /**
   * メンバーの工数入力の期間を案件開始日~終了日を参照して配列として作成する関数
   */
  function getMonthsBetweenDates(
    start_date: string,
    end_date: string,
  ): string[] {
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

  // 案件開始日~終了日の中に含まれる月を要素として持つ配列
  const months = getMonthsBetweenDates(
    projectInfo.startDate,
    projectInfo.endDate,
  );

  //-----------------------------------------------------外注費登録エリアの記載-----------------------------------------------------

  /**
   * 外注費登録用のstate作成
   */
  const [outsourcingInfo, setOutsourcingInfo] = useState([
    {
      name: "",
      estimate_cost: undefined,
      cost: undefined,
    },
  ]);

  /**
   * 外注費登録用のstate変更用関数
   */
  const handleOutsourcingInfoInputChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setOutsourcingInfo(prevState =>
      prevState.map((item, i) =>
        i === index ? { ...item, [name]: value } : item,
      ),
    );
  };

  /**
   * 外注費登録用の行追加関数
   */
  const handleAddOutsourcingInfoRow = () => {
    setOutsourcingInfo(prevRows => [
      ...prevRows,
      initialOutsourcingInfo, // 新しい空のオブジェクトを追加
    ]);
  };

  /**
   * 外注費登録用の行削除関数
   */
  const deleteOutsourcingInfoRow = (index: number) => {
    setOutsourcingInfo(prevRows => prevRows.filter((_, i) => i !== index));
  };

  //-----------------------------------------------------------------------------------------------------------------------------

  /**
   * 登録処理
   */
  const handleRegister = () => {
    // 登録処理をここに記述
  };

  return (
    <>
      <Spacer height="30px"></Spacer>
      <div className="overflow-hidden rounded-lg shadow-md">
        <table className="min-w-full divide-y ">
          <TableCaptionRow value={"案件情報登録"} />
          <Project
            formData={projectInfo}
            handleInputChange={handleProjectInfoInputChange}
          />
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
                      {assignmentMembersInfo.map((item, index) => (
                        <>
                          <tr className="border-b border-gray-300">
                              <TableSelectField
                                options={memberName}
                                name={"member_id"}
                                value={item.member_id}
                                index={index}
                                handleInputChange={
                                  handleAssignmentMembersInfoInputChange
                                }
                              />
                            <td>
                              <TableSelectField
                                options={rank}
                                name={"position"}
                                value={item.position}
                                index={index}
                                handleInputChange={
                                  handleAssignmentMembersInfoInputChange
                                }
                              />
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
                      {assignmentMembersInfo.map((member, memberIndex) => (
                        <div key={member.member_id} className="flex py-3 border-b border-gray-300">
                          {months.map(monthIndex => (
                            <div
                              key={monthIndex}
                              className="w-[100px] text-center"
                              id={member.member_id.toString()}
                            >
                              <input
                                type="number"
                                name="target_month"
                                className="border border-gray-300 w-[70px] h-[32px] rounded"
                                onChange={e =>
                                  handleInputChange(
                                    memberIndex,
                                    monthIndex,
                                    Number(e.target.value),
                                  )
                                }
                              />
                            </div>
                          ))}
                        </div>
                      ))}
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
                        <tr className="py-3 border-b border-gray-300">
                          <td>
                            <div className="h-[30px] py-3 contents">
                              <p className="font-bold">{info.estaimate_total_person_month} 人/月</p>
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
                        <tr className="py-3 border-b border-gray-300">
                          <td>
                            <button
                              onClick={() =>
                                deleteAssignmentMembersInfoRow(index)
                              }
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
            formData={outsourcingInfo}
            handleInputChange={handleOutsourcingInfoInputChange}
            onDelete={deleteOutsourcingInfoRow}
          />
        </table>
        <div className="text-left mt-2 ml-4">
          <AddButton
            buttonText="追加"
            handleClick={handleAddOutsourcingInfoRow}
          />

          <Spacer height="10px"></Spacer>
        </div>
      </div>
      <Spacer height="40px"></Spacer>
      <div className="justify-center">
        <AddButton
          buttonText="登録する"
          handleClick={() => handleAddOutsourcingInfoRow}
        />
      </div>
    </>
  );
};
export default ProjectDetail;
