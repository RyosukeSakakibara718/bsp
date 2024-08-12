import React from 'react';

type TableRowColumnProps = {
  width?: string;  // 幅を指定するためのプロパティ
  children: React.ReactNode;  // カラム内に表示するコンテンツ
};

const TableRowColumn: React.FC<TableRowColumnProps> = ({ width, children }) => {
  return (
    <th
      className={`font-bold px-4 py-3 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap`}
      style={{ width: width }}
    >
      {children}
    </th>
  );
};

export default TableRowColumn;

