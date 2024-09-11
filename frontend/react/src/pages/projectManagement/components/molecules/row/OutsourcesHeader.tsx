import React from "react";

type TableHeaderProps = {
  columns?: Array<{ label: string; width: number }>;
};

const OutsourcesHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <>
      {columns?.map((column, index) => (
        <th
          key={index}
          className="font-bold py-3 px-4 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap"
          style={{ width: column.width }}
        >
          {column.label}
        </th>
      ))}
    </>
  );
};

export default OutsourcesHeader;
