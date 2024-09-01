import React from "react";

type OutsourcesRegistrationTableColumn = {
  width: string;
}

/**
 * メンバー情報の行を構成するセルコンポーネント。
 *
 * @param {TableRowColumnProps} props - セルコンポーネントに渡されるプロパティオブジェクト。
 * @param {string} props.width - セルの幅。
 * @param {React.ReactNode} props.children - セル内に表示される要素。
 * @returns {JSX.Element} メンバー情報を表示する行を構成するセルを返します。
 */
const OutsourcesRegistrationTableColumn: React.FC<OutsourcesRegistrationTableColumn> = ({width}) => {
  return (
    <th
      className={`font-bold px-4 py-3 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap`}
      style={{width: width}}
    >
      <input type="text" className="border rounded p-2 w-full" />
    </th>
  );
};

export default OutsourcesRegistrationTableColumn;
