import React from "react";

import AddTableColumn from "../../atoms/column/AddTableColumn";
import TableRowColumn from "../../atoms/column/TableRowColumn";
import { inputCheckProps } from "../../../types/member";

type TableRowProps = {
  id: number;
  handleAddValueChange: (key: string, value: string | number) => void; // 値変更時のコールバック
  inputCheck:inputCheckProps
  isAbleToSubmit: boolean
};

const AddTableRow: React.FC<TableRowProps> = ({ id, handleAddValueChange, inputCheck, isAbleToSubmit }) => {
  return (
    <tr className="bg-customPurple">
      <TableRowColumn width="5%">{id}</TableRowColumn>
      <AddTableColumn
        width="25%"
        onChange={value => handleAddValueChange("name", value)}
        inputCheck={inputCheck.name}
        isAbleToSubmit={isAbleToSubmit}
      />
      <AddTableColumn
        width="10%"
        onChange={value => handleAddValueChange("rank", value)}
        inputType="number"
        inputCheck={inputCheck.rank}
        isAbleToSubmit={isAbleToSubmit}
      />
      <AddTableColumn
        width="25%"
        onChange={value => {
          handleAddValueChange("base_cost", value);
        }} 
        inputType="number"
        inputCheck={inputCheck.base_cost}
        isAbleToSubmit={isAbleToSubmit}
      />
      <AddTableColumn
        width="25%"
        onChange={value => handleAddValueChange("base_cost_start_date", value)}
        inputType="date"
        inputCheck={inputCheck.base_cost_start_date}
        isAbleToSubmit={isAbleToSubmit}
      />
    </tr>
  );
};

export default AddTableRow;
