import React from "react";
import { OptionList } from "../../../types/project";

// コンポーネントのプロパティの型定義
type TableSelectFieldProps = {
  options: OptionList[]; // 'options' として PhaseOption 型の配列を指定
  name: string;
  value: number | string;
  index: number
  handleInputChange: (index: number, e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

// TableSelectColumn コンポーネント
const TableSelectField: React.FC<TableSelectFieldProps> = ({
  name,
  value,
  index,
  handleInputChange,
  options,
}) => {
  return (
    <td
      className={`font-bold px-4 py-3 text-left text-gray-800 w-full`}
      style={{ display: "flex", alignItems: "center" }}
    >
      <select
        name={name}
        value={value}
        onChange={(e) =>handleInputChange(index, e)}
        className="border rounded  w-2/3 h-[30px]"
        style={{ flex: 4 }}
      >
        {options.map((item, index) => (
          <option key={index} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </td>
  );
};

export default TableSelectField;
