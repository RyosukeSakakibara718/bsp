import { useEffect, useState } from "react";
import SmallSelectBox from "../../../../components/atoms/box/SmallSelectBox";
import Spacer from "../../../../components/atoms/Spacer";
import ProjectArchiveHeader from "../molecules/row/ProjectArchiveHeader";
import AddButton from "../../../../components/atoms/button/AddButton";
import BigSelectBox from "../../../../components/atoms/box/BigSelectBox";
import ProjectArchiveBody from "../molecules/row/ProjectArchiveBody";
import { projectDetailData } from "../../../../data/projectDetail";
import { sampleProjectArchivementsData, ProjectName, initialBetween } from "../../../../data/projectsArchivements";
import { countBusinessDaysInMonth, getDatesBetween } from "../../../../utils/projectsAchievements";
import { OPTIONS_ARRAY } from "../../../../constants";
import { optionsArrayProps, ProjectAchievementsData, WorkCost } from "../../../../types/project";

const ProjectsAchievements = () => {
  /**
   * 特定の案件のメンバー別の日単位の日単位の稼働時間の登録/編集ができる。
   * 特定の案件のメンバー別の日/週/月単位の稼働時間と金額を確認できる。
   *
   * @component
   * @param {ProjectsAchievements} props - コンポーネントに渡されるプロパティ。
   * @returns {JSX.Element} ProjectsAchievementsコンポーネントを返します。
   */
  
  const [projectData, setProjectData] = useState<ProjectAchievementsData>(sampleProjectArchivementsData);
  const [between, setBetween] = useState<optionsArrayProps>(initialBetween);
  const [currentPage, setCurrentPage] = useState(0);
  const Period = getDatesBetween(
    projectDetailData.projects.projects_data.start_date,
    projectDetailData.projects.projects_data.end_date,
  );
  const itemsPerPage = 7;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDates = Period.slice(startIndex, endIndex);
  const [showPeriod, setShowPeriod] = useState(currentDates);

  // 稼働時間の入力に応じて日付・稼働時間・金額を管理するstateを更新する関数
  const handleWorkCostChange = (memberId: number, workDate: string, workTime: number) => {
    setProjectData((prevData) => {
      return {
        ...prevData,
        projects: {
          ...prevData.projects,
          assignment_members: prevData.projects.assignment_members.map((member) => {
            // 対象のメンバーを探す
            if (member.assignment_member_id === memberId) {
              // 対応する営業日数を取得
              const businessDays = countBusinessDaysInMonth(workDate);
  
              // daily_cost を計算する
              const dailyCost = Math.ceil((member.base_cost / businessDays) * workTime);
  
              // 既存の work_costs を確認して、同じ日付があるかどうかをチェック
              const existingCostIndex = member.work_costs.findIndex(
                (cost) => cost.work_date === workDate
              );
  
              // 同じ日付のエントリが見つかった場合は更新、そうでなければ追加
              if (existingCostIndex !== -1) {
                // 日付が見つかった場合は、その要素を更新する
                const updatedWorkCosts = member.work_costs
                  .map((cost, index) => {
                    if (index === existingCostIndex) {
                      // work_time が 0 の場合、null に設定することで削除を示す
                      return workTime === 0 ? null : { ...cost, work_time: workTime, daily_cost: dailyCost };
                    }
                    return cost;
                  })
                  .filter(Boolean) as WorkCost[]; // null を取り除く
  
                return {
                  ...member,
                  work_costs: updatedWorkCosts, // WorkCost[] に null が含まれない
                };
              } else if (workTime !== 0) {
                // work_time が 0 ではない場合にのみ新しいエントリを追加
                return {
                  ...member,
                  work_costs: [
                    ...member.work_costs,
                    {
                      daily_cost: dailyCost, // 計算したコスト
                      work_time: workTime,
                      work_date: workDate,
                    },
                  ],
                };
              }
            }
            return member; // 該当しないメンバーはそのまま返す
          }),
        },
      };
    });
  };  
  
  // 期間セレクトボックスの値を管理するstateを更新する関数
  const handleChangeBetween = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    const selectedOption = OPTIONS_ARRAY.find(option => option.id === selectedId);
    console.log(selectedOption)
    if (selectedOption) {
      setBetween(selectedOption); // 状態を更新する
    }
  };

  // 登録処理
  const handleRegister = () => {
    console.log(projectData);
  };

  // 選択された期間によって表示する日付を変更する関数
  useEffect(() => {
    if (between.id === 1) {
      // between.id が 1 の場合は日付をそのまま表示
      setShowPeriod(currentDates);
    } else if (between.id === 2) {
      // between.id が 2 の場合は7日ごとの要素を表示
      setShowPeriod(
        getEvery7thElementFromFirst(Period).slice(startIndex, endIndex),
      );
    } else if (between.id == 3) {
      setShowPeriod(extractMonths(Period).slice(startIndex, endIndex));
    }
  }, [between, currentPage]);

  // 次の1ヶ月分を表示するための関数
  const handleNext = () => {
    if (endIndex < Period.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 前の1ヶ月分を表示するための関数
  const handlePrev = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 期間:週毎の際に表示するために7日ごとの要素を取得し、dayOfWeekを8に変更する関数
  // dayOfWeekを8に変更する → ヘッダーに表示する時の色を管理するため
  function getEvery7thElementFromFirst(arr: any[]): any[] {
    return arr
      .filter((_, index) => index % 7 === 0)
      .map(item => ({
        ...item,
        dayOfWeek: 8, // dayOfWeekを8に強制変更
      }));
  }

  // 月ごとの要素を取得し、dayOfWeekを全て8に変更する関数
  // dayOfWeekを8に変更する → ヘッダーに表示する時の色を管理するため
  function extractMonths(
    data: Array<{ dayOfWeek: number; day: string }>,
  ): Array<{ dayOfWeek: number; day: string }> {
    const monthsSet = new Set<string>();
    const result: Array<{ dayOfWeek: number; day: string }> = [];

    data.forEach(item => {
      // dayを "yyyy/mm" 形式に変換 (月を二桁にする)
      const [year, month, _] = item.day.split("/");
      const formattedMonth = `${year}/${month.padStart(2, "0")}`; // 月が一桁なら0埋め

      // Setで重複チェック
      if (!monthsSet.has(formattedMonth)) {
        monthsSet.add(formattedMonth);
        result.push({
          dayOfWeek: 8, // dayOfWeekを8に強制変更
          day: formattedMonth,
        });
      }
    });

    return result;
  }

  return (
    <>
      <Spacer height="40px" />
      <div className="text-left">
        {/* BigSelectBox を使用する場合はここに記述 */}
        <BigSelectBox optionArray={ProjectName} />
      </div>
      <Spacer height="20px" />
      <div className="text-right">
        <SmallSelectBox
          optionArray={OPTIONS_ARRAY}
          labelText={"期間"}
          between={between}
          onChange={handleChangeBetween} // 状態変更ハンドラを渡す
        />
      </div>
      <Spacer height="40px" />
      <div className="overflow-hidden rounded-lg border-2">
        <table className="min-w-full divide-y rounded-lg">
          <ProjectArchiveHeader between={between} showPeriod={showPeriod} handleNext={handleNext} handlePrev={handlePrev}/>
          {projectData.projects.assignment_members.map((member) => (
            <ProjectArchiveBody
              showPeriod={showPeriod}
              member={member}
              onWorkTimeChange={handleWorkCostChange}
          />
          ))}
        </table>
      </div>
      <Spacer height="40px" />
      <AddButton buttonText="登録" handleClick={handleRegister} />
    </>
  );
};

export default ProjectsAchievements;