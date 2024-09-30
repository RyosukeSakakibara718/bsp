import React from "react";
import { OptionList } from "../../../../types/project";

type SelectBoxColumnProps = {
  title: string;
  name: string;
  value: string | number | undefined;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  array: OptionList[];
};

const SelectBoxColumn: React.FC<SelectBoxColumnProps> = ({
  title,
  name,
  value,
  handleInputChange,
  array,
}) => (
  <div className="flex py-2">
    <div className="w-1/2">
      <td className="p-2 font-bold text-left">{title}</td>
    </div>
    <div className="w-1/2">
      <select
        name={name}
        value={value}
        onChange={handleInputChange}
        className="border rounded p-2 w-fill-available text-xl"
      >
        {array.map((item, index) => (
          <option key={index} value={item.id}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default SelectBoxColumn;
