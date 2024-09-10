import React from "react";

// オプションの型定義
type PhaseOption = {
  value: string;
  label: string;
};

// コンポーネントのプロパティの型定義
type TableSelectFieldProps = {
  options: PhaseOption[]; // 'options' として PhaseOption 型の配列を指定
  width: string;
  labelText?: string;
};

// TableSelectColumn コンポーネント
const TableSelectField: React.FC<TableSelectFieldProps> = ({
  options,
  width,
  labelText,
}) => {
  return (
    <td
      className={`font-bold px-4 py-3 text-left text-gray-800 w-full`}
      style={{ width }}
    >
      {labelText && <label className="p-2 py-3 px-4 w-1/3">{labelText}</label>}
      <select className="border rounded p-2 py-3 w-2/3">
        {options.map(item => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </td>
  );
};

export default TableSelectField;
