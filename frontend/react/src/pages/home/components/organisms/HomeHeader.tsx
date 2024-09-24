import BigSelectBox from "../../../../components/atoms/box/BigSelectBox";
import { sampleProjectName, sampleDate } from "../../../../data/home";

const HomeHeader = () => {
  /**
   * HomePageの一番上にあるコンポーネント。
   * @component
   * @returns {JSX.Element} HomeHeader コンポーネントを返します。
   */
  const formattedStartDate = sampleDate.start_date
    .toLocaleDateString("ja-JP")
    .replace(/-/g, "/");
  const formattedEndDate = sampleDate.end_date
    .toLocaleDateString("ja-JP")
    .replace(/-/g, "/");

  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <div className="w-1/3">
        <BigSelectBox optionArray={sampleProjectName} />
      </div>
      <p className="pl-5 pr-20 py-3 text-left w-1/3">株式会社インプル</p>
      <p className="pl-5 pr-20 py-3 text-left w-1/3">{`期間:${formattedStartDate}~${formattedEndDate}`}</p>
    </div>
  );
};
export default HomeHeader;
