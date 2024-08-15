import React from 'react';

type TableRowColumnProps = {
  width?: string;
  children: React.ReactNode;
};

/**
 * メンバー情報の行を構成するセルコンポーネント。
 *
 * @param {TableRowColumnProps} props - セルコンポーネントに渡されるプロパティオブジェクト。
 * @param {string} props.width - セルの幅。
 * @param {React.ReactNode} props.children - セル内に表示される要素。
 * @returns {JSX.Element} メンバー情報を表示する行を構成するセルを返します。
 */
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

