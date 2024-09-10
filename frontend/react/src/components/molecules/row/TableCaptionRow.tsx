import React from "react";

type TableCaptionRowProps = {
  value: string;
};

/**
 * テーブルヘッダーを構成するセルコンポーネント
 *
 * @param {TableCaptionRowProps} props - セルコンポーネントに渡されるプロパティオブジェクト。
 * @param {function} props.value - セルに表示される値。
 * @returns {JSX.Element} ヘッダーを構成するセルを返します。
 */
const TableCaptionRow: React.FC<TableCaptionRowProps> = ({ value }) => {
  return (
    <thead className="bg-[#EEE3FF]">
      <th
        colSpan={100}
        className="bg-[#EEE3FF] font-bold py-3 px-4 text-left border-b border-[#e1cfff] whitespace-nowrap w-full"
      >
        {value}
      </th>
    </thead>
  );
};

export default TableCaptionRow;
