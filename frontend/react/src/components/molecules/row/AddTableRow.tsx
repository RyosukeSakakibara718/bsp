import React from "react";

import AddTableRowColumn from "../../atoms/column/AddTableRowColumn";
import TableRowColumn from "../../atoms/column/TableRowColumn";

type TableRowProps = {
  id: number;
  name: string;
  grade: number;
  cost: number;
  startDate: string;
  onValueChange: (key: string, value: string) => void; // 値変更時のコールバック
};

const AddTableRow: React.FC<TableRowProps> = ({ id, onValueChange }) => {
  return (
    <tr className="bg-customPurple">
      <TableRowColumn width="5%">{id}</TableRowColumn>
      <AddTableRowColumn
        width="25%"
        onChange={value => onValueChange("name", value)}
      />
      <AddTableRowColumn
        width="10%"
        onChange={value => onValueChange("grade", value)}
      />
      <AddTableRowColumn
        width="25%"
        onChange={value => onValueChange("cost", value.replace(/,/g, ""))} // カンマを取り除いて数値に変換できるようにする
      />
      <AddTableRowColumn
        width="25%"
        onChange={value => onValueChange("startDate", value)}
      />
    </tr>
  );
};

export default AddTableRow;
