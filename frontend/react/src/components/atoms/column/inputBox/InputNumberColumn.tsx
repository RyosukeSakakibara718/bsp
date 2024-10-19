import React from "react";

type InputNumberColumnProps = {
  title: string;
  name: string;
  value: number | undefined;
  moneyFlug?: boolean;
  costFlug?: boolean;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const InputNumberColumn: React.FC<InputNumberColumnProps> = ({
  title,
  name,
  value,
  moneyFlug,
  costFlug,
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
          placeholder={moneyFlug ? "¥" : costFlug? "人/日":""}
          onChange={handleInputChange}
          className="border rounded p-2 w-fill-available text-xl"
        />
      </td>
    </div>
  </div>
);

export default InputNumberColumn;
