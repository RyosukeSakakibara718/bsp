import React from 'react';

type TableHeaderColumnProps = {
  width?: string;
  children: React.ReactNode;
};

/**
 * テーブルヘッダーの列コンポーネント
 * テーブルのヘッダーに表示する列を定義します。
 * 
 * @param {TableHeaderColumnProps} props - テーブルヘッダー列のプロパティ。
 * @param {string} [props.width] - 列の幅を指定するスタイル属性。省略可能。
 * @param {React.ReactNode} props.children - 列の内容となる子要素。通常はテキストやアイコンが含まれます。
 * @returns {JSX.Element} テーブルヘッダーの列要素を返します。
 */
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
