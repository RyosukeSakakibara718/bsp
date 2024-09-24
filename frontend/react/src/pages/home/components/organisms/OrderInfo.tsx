import TableCaptionRow from "../../../../../src/components/molecules/row/TableCaptionRow";
import TableLabelTd from "../../../../components/atoms/field/TableLabelTd";
import { OrderInfoDataProps } from "../../../../types/home";
const OrderInfo = ({ OrderInfoData }: OrderInfoDataProps) => {
  /**
   * 受注情報の表示を行うコンポーネント。
   * @component
   * @param {OrderInfoDataProps} props - コンポーネントに渡されるプロパティ。
   * @returns {JSX.Element} CommentBox コンポーネントを返します。
   */
  return (
    <div className="overflow-hidden rounded-lg border-2  w-1/3">
      <table className=" min-w-full divide-y rounded-lg">
        <thead>
          <TableCaptionRow value={"受注情報"} />
        </thead>
        <tbody>
          {OrderInfoData.map((item, index) => (
            <>
              <tr key={index}>
                <TableLabelTd
                  label="受注額"
                  value={`¥${item.cost.toLocaleString()}`}
                />
              </tr>
              <tr key={index}>
                <TableLabelTd
                  label="見積額"
                  value={`¥${item.estimate_cost.toLocaleString()}`}
                />
              </tr>
              <tr>
                <TableLabelTd
                  label="見積粗利率"
                  value={`${item.crude_rate}%`}
                />
              </tr>
              <tr>
                <TableLabelTd
                  label="見積工数"
                  value={`${item.estimate_person_month} 人/日`}
                />
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default OrderInfo;
