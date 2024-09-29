import React from "react";

type InputNumberBoxColumnProps = {
  title: string;
  name: string;
  value: number | undefined;
  moneyFlug?: boolean;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const InputNumberBoxColumn: React.FC<InputNumberBoxColumnProps> = ({
  title,
  name,
  value,
  moneyFlug,
  handleInputChange,
}) => (
  <div className="flex py-2">
    <div className="w-1/2">
      <td className="p-2 font-bold text-left">{title}</td>
    </div>
    <div className="w-1/2">
      <td className="w-1/2">
        <input
          type="number"
          name={name}
          value={value}
          placeholder={moneyFlug ? "¥" : ""}
          onChange={handleInputChange}
          className="border rounded py-2 w-fill-available text-xl"
        />
      </td>
    </div>
  </div>
);

export default InputNumberBoxColumn;
