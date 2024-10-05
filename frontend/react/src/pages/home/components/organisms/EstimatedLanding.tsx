import TableCaptionRow from "../../../../../src/components/molecules/row/TableCaptionRow";
import TableLabelTd from "../../../../components/atoms/field/TableLabelTd";
import { OrderInfoDataProps } from "../../../../types/home";
const EstimatedLanding = ({ foreCast }: OrderInfoDataProps) => {
  /**
   * 情報の表示を行うコンポーネント。
   * @component
   * @param {OrderInfoDataProps} props - コンポーネントに渡されるプロパティ。
   * @returns {JSX.Element} CommentBox コンポーネントを返します。
   */

  const forecastRate = (foreCast.forecast_profit / foreCast.forecast_cost) * 100;

  return (
    <div className="overflow-hidden rounded-lg border-2  w-1/3">
      <table className=" min-w-full divide-y rounded-lg">
        <thead>
          <TableCaptionRow value={"着地見込"} />
        </thead>
        <tbody>
            <>
              <tr>
                <TableLabelTd
                  label="粗利額"
                  value={`¥${Number(foreCast.forecast_profit).toLocaleString()}`}
                  />
              </tr>
              <tr>
                <TableLabelTd
                  label="着地原価"
                  value={`¥${Number(foreCast.forecast_cost).toLocaleString()}`}
                />
              </tr>
              <tr>
                <TableLabelTd
                  label="着地粗利率"
                  value={`${forecastRate.toFixed(1)}%`}
                />
              </tr>
              <tr>
                <TableLabelTd
                  label="予測工数"
                  value={`${foreCast.achievement_person_month} 人/日`}
                />
              </tr>
            </>
        </tbody>
      </table>
    </div>
  );
};
export default EstimatedLanding;
