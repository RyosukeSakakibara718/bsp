import React from "react";

type TableCaptionColumnProps = {
  value: string;
};

/**
 * テーブルヘッダーを構成するセルコンポーネント
 *
 * @param {TableCaptionColumnProps} props - セルコンポーネントに渡されるプロパティオブジェクト。
 * @param {function} props.value - セルに表示される値。
 * @returns {JSX.Element} ヘッダーを構成するセルを返します。
 */
const TableCaptionColumn: React.FC<TableCaptionColumnProps> = ({ value }) => {
  return (
    <th
      colSpan={100}
      className="bg-[#EEE3FF] font-bold py-3 px-4 text-left border-b border-[#e1cfff] whitespace-nowrap min-w-full"
    >
      {value}
    </th>
  );
};

export default TableCaptionColumn;
