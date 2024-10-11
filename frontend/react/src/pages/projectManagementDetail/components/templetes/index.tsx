import { useEffect, useState } from "react";

import AddButton from "../../../../components/atoms/button/AddButton";
import Spacer from "../../../../components/atoms/Spacer";
import { RANK } from "../../../../constants/index";
import {
  initialAssignmentMembersArray,
  initialAssignmentMembersInfo,
  initialOutsourcingInfo,
  OutsourceColumns,
  initialProjectInfo,
  requestBody,
} from "../../../../data/projectDetail";
import { getMonthsBetweenDates } from "../../../../hooks";
import { getMemberList } from "../../hooks/projectDetail";
import MemberInfo from "../organisms/MemberInfo";
import OutsourcingInfo from "../organisms/OutsourcingInfo";
import ProjectInfo from "../organisms/ProjectInfo";

import type {
  InitialAssignmentMembers,
  OptionList,
  Outsource,
  ProjectInfomation,
  RequestBody,
} from "../../../../types/project";
import { useParams } from "react-router-dom";
import { editProjectManagementDetail, getProjectManagementDetail } from "../../api/useProjectManagementDetail";

/**
 * 案件の登録・編集を表を行うテーブルコンポーネント。
 *
 * @component
 * @param {ProjectDetailProps} props - コンポーネントに渡されるプロパティ。
 * @param {Array} props.data - メンバーのデータリスト。
 * @returns {JSX.Element} MemberTableコンポーネントを返します。
 */

const ProjectDetail: React.FC<{ id?: string }> = () => {
  const { id } = useParams<{ id: string }>();
  const [response, setResponse] = useState(null);

  // TODO詳細ページ、idがあれば編集で、なければ、create

  //-----------------------------------------------------案件情報登録エリアの記載-----------------------------------------------------
  /**
   * 案件情報登録用のstate作成
   */
  const [projectInfo, setProjectInfo] =
    useState<ProjectInfomation>(initialProjectInfo);

  /**
   * 案件情報登録用のstate変更用関数
   */
  const handleProjectInfoInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    // projects_data フィールドか estimations フィールドかを区別する
    if (name in projectInfo.projects_data) {
      setProjectInfo(prevState => ({
        ...prevState,
        projects_data: {
          ...prevState.projects_data,
          [name]:
            name === "start_date" || name === "end_date"
              ? new Date(value) // 日付を Date オブジェクトに変換
              : name === "phase" || name === "contract"
                ? Number(value) // 数値フィールドの場合は Number 型に変換
                : value, // それ以外はそのまま
        },
      }));
    } else if (name in projectInfo.estimations) {
      setProjectInfo(prevState => ({
        ...prevState,
        estimations: {
          ...prevState.estimations,
          [name]: Number(value),
        },
      }));
    }
  };

  //-----------------------------------------------------メンバー情報登録エリアの記載-----------------------------------------------------

  /**
   * メンバー情報登録用のstate作成
   */
  const [memberName, setMemberName] = useState<OptionList[]>([]);

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
          const newValue =
            name === "member_id" || name === "position" ? Number(value) : value;
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
  const deleteAssignmentMembersInfoRow = (index: number, member_id: number) => {
    setAssignmentMembersInfo(prevRows =>
      prevRows.filter(
        (item, i) => !(i === index && item.member_id === member_id),
      ),
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
          estimate_total_person_month: totalPersonMonth, // 合計値を反映
        };
      }),
    );
  };

  // 案件開始日~終了日の中に含まれる月を要素として持つ配列
  const months = getMonthsBetweenDates(
    projectInfo.projects_data.start_date,
    projectInfo.projects_data.end_date,
  );

  //-----------------------------------------------------外注費登録エリアの記載-----------------------------------------------------

  /**
   * 外注費登録用のstate作成
   */
  const [outsourcingInfo, setOutsourcingInfo] = useState<Outsource[]>([
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
        i === index
          ? {
              ...item,
              [name]:
                name === "estimate_cost" || name === "cost"
                  ? parseFloat(value) || 0
                  : value,
            }
          : item,
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

  //--------------------------------------------------------全体のstate管理--------------------------------------------------------

  const [request, setRequest] = useState<RequestBody>(requestBody);

  useEffect(() => {
    setRequest({
      projects: {
        projects_data: projectInfo.projects_data, // 配列にラップ
        estimations: projectInfo.estimations, // 配列にラップ
        assignment_members: assignmentMembersInfo,
        outsources: outsourcingInfo,
      },
    });
  }, [projectInfo, assignmentMembersInfo, outsourcingInfo]);

  //-----------------------------------------------------------------------------------------------------------------------------

  /**
   * 登録処理
   */
  const handleRegister = () => {
    // 登録処理をここに記述
    if (id){
      console.log('idあり: ', id);
      editProjectManagementDetail(request, id)
        .catch(error => console.error("Error:", error));
    }else{
      console.log(request);
      editProjectManagementDetail(request)
    }
  };

  useEffect(() => {
    if (id) {
      getProjectManagementDetail(id)
        .then(members => {
          if (members !== null) {
            setResponse(members); // データがnullでない場合にセット
            console.log("APIからのデータ :", members.project.assignment_members);
            setProjectInfo(prevProjectInfo => ({
              ...prevProjectInfo,
              projects_data: {
                ...prevProjectInfo.projects_data,
                ...members.project.projects_data,  // 全てのプロパティを展開し、必要に応じて上書き
                start_date: members.project.projects_data.start_date 
                  ? new Date(members.project.projects_data.start_date)
                  : prevProjectInfo.projects_data.start_date,
                end_date: members.project.projects_data.end_date 
                  ? new Date(members.project.projects_data.end_date)
                  : prevProjectInfo.projects_data.end_date,
              },
              estimations: {
                ...prevProjectInfo.estimations,
                ...members.project.estimations,  // 全てのプロパティを展開して上書き
              }
            }));
            setAssignmentMembersInfo(members.project.assignment_members);
            setOutsourcingInfo(members.project.outsources)
          }
        })
        .catch(error => {
          console.error("Error fetching member data:", error);
        });
    }
  }, []);

  return (
    <>
      <Spacer height="30px" />
      <ProjectInfo
        projectInfo={projectInfo}
        handleProjectInfoInputChange={handleProjectInfoInputChange}
      />
      <Spacer height="30px" />
      <MemberInfo
        assignmentMembersInfo={assignmentMembersInfo}
        handleAssignmentMembersInfoInputChange={
          handleAssignmentMembersInfoInputChange
        }
        handleAddMemberInfoRow={handleAddMemberInfoRow}
        memberName={memberName}
        rank={RANK}
        months={months}
        handleInputChange={handleInputChange}
        deleteAssignmentMembersInfoRow={deleteAssignmentMembersInfoRow}
      />
      <Spacer height="30px" />
      <OutsourcingInfo
        OutsourceColumns={OutsourceColumns}
        outsourcingInfo={outsourcingInfo}
        handleOutsourcingInfoInputChange={handleOutsourcingInfoInputChange}
        deleteOutsourcingInfoRow={deleteOutsourcingInfoRow}
        handleAddOutsourcingInfoRow={handleAddOutsourcingInfoRow}
      />
      <Spacer height="40px" />
      <div className="justify-center">
        <AddButton buttonText="登録する" handleClick={handleRegister} />
      </div>
    </>
  );
};
export default ProjectDetail;
