import React from "react";

import AddTableColumn from "../../atoms/column/AddTableColumn";
import TableRowColumn from "../../atoms/column/TableRowColumn";

type TableRowProps = {
  id: number;
  name: string;
  rank: number;
  base_cost: number;
  base_cost_start_date: string;
  handleAddValueChange: (key: string, value: string | number) => void; // 値変更時のコールバック
};

const AddTableRow: React.FC<TableRowProps> = ({ id, handleAddValueChange }) => {
  return (
    <tr className="bg-customPurple">
      <TableRowColumn width="5%">{id}</TableRowColumn>
      <AddTableColumn
        width="25%"
        onChange={value => handleAddValueChange("name", value)}
      />
      <AddTableColumn
        width="10%"
        onChange={value => handleAddValueChange("rank", value)}
        inputType="number"
      />
      <AddTableColumn
        width="25%"
        onChange={value => {
          handleAddValueChange("base_cost", value);
        }} // カンマを取り除いて数値に変換できるようにする
        inputType="number"
      />
      <AddTableColumn
        width="25%"
        onChange={value => handleAddValueChange("base_cost_start_date", value)}
        inputType="date"
      />
    </tr>
  );
};

export default AddTableRow;
