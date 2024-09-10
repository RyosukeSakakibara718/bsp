import React from "react";

type TableInputNumFieldProps = {
  width: string;
  labelText?: string;
  suffix?: string;
};

const TableInputNumField: React.FC<TableInputNumFieldProps> = ({
  width,
  suffix,
  labelText,
}) => {
  return (
    <td
      className={`font-bold px-4 py-3 text-left text-gray-800`}
      style={{ width }}
    >
      {labelText && <label className="p-2 py-3 px-4 w-1/3">{labelText}</label>}
      <input type="number" className="border rounded p-2 py-3 w-2/3" />
      {suffix && <span>{suffix}</span>}
    </td>
  );
};
export default TableInputNumField;
