import React from "react";

type InputDateBoxColumnProps = {
  title: string,
  name: string,
  value: string,
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const InputDateBoxColumn: React.FC<InputDateBoxColumnProps> = ({ title, name, value, handleInputChange }) => (
  <div className="flex py-2">
    <div className="w-1/2">
      <td className="p-2 font-bold text-left">{title}</td>
    </div>
    <div className="w-1/2">
      <td className="w-1/2">
        <input
          type="date"
          name={name}
          value={value}
          onChange={handleInputChange}
          className="border rounded py-2 w-full text-xl"
        />
      </td>
    </div>
  </div>
);

export default InputDateBoxColumn;
