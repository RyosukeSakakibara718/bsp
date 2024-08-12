import React, { useState } from 'react';

type EditTableRowColumnProps = {
  width?: string;
  onChange: (value: string) => void;
};

const EditTableRowColumn: React.FC<EditTableRowColumnProps> = ({ width, onChange }) => {
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <th
    className={`font-bold px-4 py-3 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap `}
      style={{ width: width }}
    >
      <input 
        type="text" 
        value={value} 
        onChange={handleChange} 
        className="bg-customPurple w-full px-3 py-2 border border-black rounded-md box-border text-base text-gray-800 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400"
      />
    </th>
  );
};

export default EditTableRowColumn;
