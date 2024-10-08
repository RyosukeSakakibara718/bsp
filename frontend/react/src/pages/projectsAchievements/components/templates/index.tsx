import { useState } from "react";

import SmallSelectBox from "../../../../components/atoms/box/SmallSelectBox";
import AddButton from "../../../../components/atoms/button/AddButton";
import Spacer from "../../../../components/atoms/Spacer";
import ProjectArchiveHeader from "../molecules/row/ProjectArchiveHeader";

const ProjectsAchievements = () => {
  /**
   * 特定の案件のメンバー別の日単位の日単位の稼働時間の登録/編集ができる。
   * 特定の案件のメンバー別の日/週/月単位の稼働時間と金額を確認できる。
   *
   * @component
   * @param {ProjectsAchievements} props - コンポーネントに渡されるプロパティ。
   * @returns {JSX.Element} ProjectsAchievementsコンポーネントを返します。
   */

  type optionsArrayProps = {
    id: number;
    label: string;
  };

  const optionsArray: optionsArrayProps[] = [
    { id: 1, label: "日毎" },
    { id: 2, label: "週毎" },
    { id: 3, label: "月毎" },
  ];

  const initialBetween = {
    id: 1,
    label: "日毎",
  };

  const [between, setBetween] = useState<optionsArrayProps>(initialBetween);

  const selectBoxLabel = "期間:";

  const handleChangeBetween = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = Number(e.target.value);
    const selectedOption = optionsArray.find(
      option => option.id === selectedId,
    );

    if (selectedOption) {
      setBetween(selectedOption); // 状態を更新する
    }
  };

  const ProjectName = [
    "プロジェクトバランサー",
    "プロジェクトバランサー2",
    "testetst",
  ];

  const handleRegister = () => {
    console.log("登録処理");
  };

  return (
    <>
      <Spacer height="40px"></Spacer>
      <div className="text-left">
        {/* BigSelectBox を使用する場合はここに記述 */}
      </div>
      <Spacer height="20px"></Spacer>
      <div className="text-right">
        <SmallSelectBox
          optionArray={optionsArray}
          labelText={selectBoxLabel}
          between={between}
          onChange={handleChangeBetween} // 状態変更ハンドラを渡す
        />
      </div>
      <Spacer height="40px"></Spacer>
      <div className="overflow-hidden rounded-lg border-2">
        <table className="min-w-full divide-y rounded-lg">
          <ProjectArchiveHeader between={between} />
        </table>
      </div>
      <Spacer height="40px"></Spacer>
      <AddButton buttonText="登録" handleClick={handleRegister} />
    </>
  );
};

export default ProjectsAchievements;
