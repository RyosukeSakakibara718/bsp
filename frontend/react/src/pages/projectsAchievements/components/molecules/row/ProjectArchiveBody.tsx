import { useEffect, useState } from "react";
import { getMemberAll } from "../../../../../hooks/useMember";
import { OptionList, ProjectsAchievementsMember } from "../../../../../types/project";
import { RANK } from "../../../../../constants";
import { countBusinessDaysInMonth } from "../../../../../utils/projectsAchievements";

type ProjectArchiveBodyProps = {
  showPeriod: { dayOfWeek: number; day: string }[];
  member: ProjectsAchievementsMember;
  onWorkTimeChange: (
    memberId: number,
    workDate: string,
    workTime: number,
  ) => void;
};

const ProjectArchiveBody: React.FC<ProjectArchiveBodyProps> = ({
  showPeriod,
  member,
  onWorkTimeChange,
}) => {
  const [memberList, setMemberList] = useState<OptionList[]>();

  useEffect(() => {
    getMemberAll()
      .then((members) => {
        if (members !== null) {
          setMemberList(members);
        }
      })
      .catch((error) => {
        console.error("Error fetching member data:", error);
      });
  }, []);

  const memberInfo = memberList?.find((item) => item.id == member.assignment_member_id);
  const rank = RANK.find((item) => item.id == member.position);

  // 金額計算を行う関数
  const calculateAmount = (workTime: number, workDate: string) => {
    const businessDays = countBusinessDaysInMonth(workDate);
    return Math.ceil((member.base_cost / businessDays) * workTime);
  };

  return (
    <>
      {memberInfo && rank && (
        <tbody>
          <tr>
            <td>{memberInfo.name}</td>
            <td>{rank.name}</td>
            <td>¥{member.base_cost}</td>
            <td className="border-l border-gray-300">時間</td>
            {showPeriod.map((item) => {
              // 対応する日付のwork_costを検索
              const workCost = member.work_costs.find((cost) => cost.work_date === item.day);
              // work_timeがあれば表示、なければ空欄
              const workTime = workCost ? workCost.work_time : '';
              
              return (
                <td className="py-[10px]" key={item.day}>
                  <input
                    name="target_month"
                    className="border border-gray-300 w-[70%] h-[32px] rounded"
                    type="number"
                    value={workTime}
                    onChange={(e) => {
                      onWorkTimeChange(
                        member.assignment_member_id,
                        item.day,
                        Number(e.target.value),
                      );
                    }}
                  />
                </td>
              );
            })}
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td className="border-l border-gray-300">金額</td>
            {showPeriod.map((item) => {
              // 対応する日付のwork_costを再度検索し、workTimeを定義
              const workCost = member.work_costs.find((cost) => cost.work_date === item.day);
              // work_timeが無い場合は0に設定
              const workTime = workCost ? workCost.work_time : 0;
              // 計算した金額を呼び出す
              const amount = calculateAmount(workTime, item.day);

              return (
                <td className="py-[10px]" key={item.day}>
                  <p>{amount ? amount : ''}</p>
                </td>
              );
            })}
          </tr>
        </tbody>
      )}
    </>
  );
};

export default ProjectArchiveBody;
