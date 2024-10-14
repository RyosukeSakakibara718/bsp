import React from "react";

type InputDateColumnProps = {
  title: string;
  name: string;
  value: string;
  handleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
};

const formatDateToYMD = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const InputDateColumn: React.FC<InputDateColumnProps> = ({
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
          type="date"
          name={name}
          value={formatDateToYMD(value)}
          onChange={handleInputChange}
          className="border rounded py-2 w-full text-xl"
        />
      </td>
    </div>
  </div>
);

export default InputDateColumn;
