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
      className={`font-bold px-4 text-left text-gray-800`}
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
            className="border rounded p-2 py-3 w-[100px] h-[30px]"
            style={{ flex: 3.5 }}
          />
          <span style={{ flex: 0.5 }}>{suffix}</span>
        </>
      ) : (
        <input
          type="number"
          className="border rounded p-2 py-3 w-[100px] h-[30px]"
          style={{ flex: 4 }}
        />
      )}
    </td>
  );
};
export default TableInputNumField;
