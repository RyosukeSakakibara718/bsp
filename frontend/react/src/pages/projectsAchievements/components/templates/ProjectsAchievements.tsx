import Spacer from "../../../../../src/components/atoms/Spacer";
import BigSelectBox from "../../../../components/atoms/box/BigSelectBox";
import SmallSelectBox from "../../../../components/atoms/box/SmallSelectBox";
import AddButton from "../../../../components/atoms/button/AddButton";
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
  // TODO下記moleculesを追加していきましょう。
  const optionsArray = ["日毎", "週毎", "月毎"];

  const selectBoxLabel = "期間:";

  // TODOとってきたデータに入れ替え
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
        <BigSelectBox optionArray={ProjectName} />
      </div>
      <Spacer height="20px"></Spacer>
      <div className="text-right">
        <SmallSelectBox optionArray={optionsArray} labelText={selectBoxLabel} />
      </div>
      <Spacer height="40px"></Spacer>
      <div className="overflow-hidden rounded-lg border-2">
        <table className=" min-w-full divide-y rounded-lg">
          <ProjectArchiveHeader />
        </table>
      </div>
      <Spacer height="40px"></Spacer>
      <AddButton buttonText="登録" handleClick={handleRegister} />
    </>
  );
};
export default ProjectsAchievements;
