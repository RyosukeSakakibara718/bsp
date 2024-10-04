import React from "react";

type InputStringColumnProps = {
  title: string;
  name: string;
  value: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const InputStringColumn: React.FC<InputStringColumnProps> = ({
  title,
  name,
  value,
  handleInputChange,
}) => (
  <div className="flex py-2">
    <div className="w-1/2">
      <td className="p-2 font-bold text-left">{title}</td>
    </div>
    <div className="w-1/2">
      <td className="w-1/2">
        <input
          type="text"
          name={name}
          value={value}
          onChange={handleInputChange}
          className="border rounded p-2 w-fill-available text-xl"
        />
      </td>
    </div>
  </div>
);

export default InputStringColumn;
