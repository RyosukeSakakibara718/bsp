import React from 'react';

type TableHeaderColumnProps = {
  width?: string;
  children: React.ReactNode;
};

const TableHeaderColumn: React.FC<TableHeaderColumnProps> = ({ width, children }) => {
  return (
    <th 
      className="bg-gray-100 font-bold py-3 px-4 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap"
      style={{ width: width }}
    >
      {children}
    </th>
  );
};

export default TableHeaderColumn;
