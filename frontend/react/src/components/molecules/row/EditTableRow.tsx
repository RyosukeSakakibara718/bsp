import React from "react";
import EditTableRowColumn from "../../atoms/column/EditTableRowColumn";
import TableRowColumn from "../../atoms/column/TableRowColumn";

type TableRowProps = {
  id: number;
  name: string;
  grade: number;
  cost: number;
  startDate: string;
  onValueChange: (key: string, value: string) => void; // 値変更時のコールバック
};

const EditTableRow: React.FC<TableRowProps> = ({
  id,
  name,
  grade,
  cost,
  startDate,
  onValueChange,
}) => {
  return (
    <tr className="bg-customPurple">
      <TableRowColumn width="5%">{id}</TableRowColumn>
      <EditTableRowColumn
        width="25%"
        initialValue={name}
        onChange={value => onValueChange("name", value)}
      />
      <EditTableRowColumn
        width="10%"
        initialValue={grade.toString()} // grade も数値なので文字列に変換
        onChange={value => onValueChange("grade", value)}
      />
      <EditTableRowColumn
        width="25%"
        initialValue={cost.toLocaleString()} // cost をローカライズされた文字列として渡す
        onChange={value => onValueChange("cost", value.replace(/,/g, ""))} // カンマを取り除いて数値に変換できるようにする
      />
      <EditTableRowColumn
        width="25%"
        initialValue={startDate}
        onChange={value => onValueChange("startDate", value)}
      />
    </tr>
  );
};

export default EditTableRow;
