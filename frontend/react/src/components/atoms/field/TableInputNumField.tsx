import React from "react";

type TableInputNumFieldProps = {
  labelText?: string;
  suffix?: string;
};

const TableInputNumField: React.FC<TableInputNumFieldProps> = ({
  suffix,
  labelText,
}) => {
  return (
    <td
      className={`font-bold px-4 py-3 text-left text-gray-800`}
      style={{ display: "flex", alignItems: "center" }}
    >
      {labelText && (
        <label className="p-2 py-3 px-4 w-1/3" style={{ flex: 2 }}>
          {labelText}
        </label>
      )}
      {suffix ? (
        <>
          <input
            type="number"
            className="border rounded p-2 py-3 w-2/3"
            style={{ flex: 3.5 }}
          />
          <span style={{ flex: 0.5 }}>{suffix}</span>
        </>
      ) : (
        <input
          type="number"
          className="border rounded p-2 py-3 w-2/3"
          style={{ flex: 4 }}
        />
      )}
    </td>
  );
};
export default TableInputNumField;
