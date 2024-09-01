import React from "react";

import TableRowColumn from "../../../../../components/atoms/column/TableRowColumn";

const ProjectRegistrationTableRow2: React.FC<{
  label: string;
  label2?: string;
}> = ({ label, label2 }) => {
  const isDateField = (field: string) =>
    field === "開始日" || field === "終了日";
  const isCurrencyField = (field: string) => field === "見積原価";
  const isEffortField = (field: string) => field === "見積工数";

  const renderInputField = (field: string) => {
    if (isDateField(field)) {
      return <input type="date" className="border rounded p-2 w-full" />;
    } else if (isCurrencyField(field)) {
      return (
        <div className="flex items-center">
          <span>¥</span>
          <input type="number" className="border rounded p-2 w-full" />
        </div>
      );
    } else if (isEffortField(field)) {
      return (
        <div className="flex items-center">
          <input type="number" className="border rounded p-2 w-full" />
          <span>人/日</span>
        </div>
      );
    } else {
      return <input type="text" className="border rounded p-2 w-full" />;
    }
  };

  return (
    <tr className="flex justify-between transition-colors duration-200">
      <TableRowColumn width="25%">{label}</TableRowColumn>
      <TableRowColumn width="25%">{renderInputField(label)}</TableRowColumn>
      {label2 && (
        <>
          <TableRowColumn width="25%">{label2}</TableRowColumn>
          <TableRowColumn width="25%">
            {renderInputField(label2)}
          </TableRowColumn>
        </>
      )}
    </tr>
  );
};

export default ProjectRegistrationTableRow2;
