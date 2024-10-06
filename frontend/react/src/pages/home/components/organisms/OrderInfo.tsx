import TableCaptionRow from "../../../../../src/components/molecules/row/TableCaptionRow";
import TableLabelTd from "../../../../components/atoms/field/TableLabelTd";
import { EstimateDataProps } from "../../../../types/home";

const OrderInfo = ({ estimation }: EstimateDataProps) => {
  /**
   * 受注情報の表示を行うコンポーネント。
   * @component
   * @param {OrderInfoDataProps} props - コンポーネントに渡されるプロパティ。
   * @returns {JSX.Element} CommentBox コンポーネントを返します。
   */

  const estimationRate =
    (estimation.estimate_cost / estimation.order_price) * 100;
  return (
    <div className="overflow-hidden rounded-lg border-2  w-1/3">
      <table className=" min-w-full divide-y rounded-lg">
        <thead>
          <TableCaptionRow value={"受注情報"} />
        </thead>
        <tbody>
          <>
            <tr>
              <TableLabelTd
                label="受注額"
                value={`¥${estimation.order_price.toLocaleString()}`}
              />
            </tr>
            <tr>
              <TableLabelTd
                label="見積額"
                value={`¥${estimation.estimate_cost.toLocaleString()}`}
              />
            </tr>
            <tr>
              <TableLabelTd
                label="見積粗利率"
                value={`${estimationRate.toFixed(1)}%`}
              />
            </tr>
            <tr>
              <TableLabelTd
                label="見積工数"
                value={`${estimation.estimate_person_month} 人/日`}
              />
            </tr>
          </>
        </tbody>
      </table>
    </div>
  );
};
export default OrderInfo;
