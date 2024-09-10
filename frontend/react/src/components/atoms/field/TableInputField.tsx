import { useState } from "react";

type TableInputFieldProps = {
  width: string;
  labelText?: string;
  placeholder?: string;
};

const TableInputField: React.FC<TableInputFieldProps> = ({
  placeholder,
  labelText,
  width,
}) => {
  const [value, setValue] = useState("");
  const formatCurrency = (value: string) => {
    const numberValue = value.replace(/[^0-9]/g, "");
    if (!numberValue) return "";
    return `¥${parseInt(numberValue, 10).toLocaleString()}`;
  };
  const handleChange = (e: { target: { value: string } }) => {
    if (placeholder) {
      const formattedValue = formatCurrency(e.target.value);
      setValue(formattedValue);
    } else {
      setValue(e.target.value);
    }
  };
  if (placeholder) {
    return (
      <td
        className={`font-bold px-4 py-3 text-left text-gray-800 w-full`}
        style={{ width: width }}
      >
        {labelText && (
          <label className="p-2 py-3 px-4 w-1/3">{labelText}</label>
        )}
        <input
          type="text"
          className="border rounded p-2 py-3 w-2/3"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </td>
    );
  }

  return (
    <td
      className={`font-bold px-4 py-3 text-left text-gray-800 w-full`}
      style={{ width: width }}
    >
      {labelText && <label className="p-2 py-3 px-4 w-1/3">{labelText}</label>}
      <input
        type="text"
        className="border rounded p-2 w-2/3"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        id="inputBox"
      />
    </td>
  );
};
export default TableInputField;
