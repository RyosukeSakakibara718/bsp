import React from "react";

type TableHeaderColumnProps = {
  width?: string;
  value: string;
};

/**
 * テーブルヘッダーを構成するセルコンポーネント
 *
 * @param {TableHeaderColumnProps} props - セルコンポーネントに渡されるプロパティオブジェクト。
 * @param {string} props.width - セルの幅。
 * @param {function} props.value - セルに表示される値。
 * @returns {JSX.Element} ヘッダーを構成するセルを返します。
 */
const TableHeaderColumn: React.FC<TableHeaderColumnProps> = ({
  width,
  value,
}) => {
  return (
    <th
      className="bg-gray-100 font-bold py-3 px-4 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap"
      style={{ width: width }}
    >
      {value}
    </th>
  );
};

export default TableHeaderColumn;
