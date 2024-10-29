import React, { useState } from "react";

type AddTableColumnProps = {
  width?: string;
  onChange: (value: string | number) => void;
  inputType?: string;
  inputCheck?: boolean;
  isAbleToSubmit?: boolean
};

/**
 * 追加モーダルに表示するメンバー情報の行を構成するセルコンポーネント。
 *
 * @param {AddTableColumnProps} props - セルコンポーネントに渡されるプロパティオブジェクト。
 * @param {string} props.width - セルの幅。
 * @param {function} props.onChange - 値が変更されるごとにaddModalコンポーネントで管理するstateを変更する関数。
 * @returns {JSX.Element} 追加モーダルで表示される行を構成するセルを返します。
 */
const AddTableColumn: React.FC<AddTableColumnProps> = ({
  width,
  onChange,
  inputType,
  inputCheck,
  isAbleToSubmit
}) => {
  const [value, setValue] = useState("");

  /**
   * 値が変更されたときに呼び出されるハンドラ関数。
   * 新しい値をstateに設定し、`onChange` コールバックを呼び出します。
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event - 入力イベント。
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue: string | number = event.target.value;

    if (inputType === "number") {
      newValue = parseFloat(newValue.replace(/,/g, "")); // カンマを取り除いて数値に変換
      if (isNaN(newValue)) {
        newValue = ""; // 無効な数値の場合、空文字列に戻す
      }
    }

    setValue(newValue.toString()); // ステートは文字列で保持
    onChange(newValue); // 変換された数値または文字列をコールバックで返す
  };

  return (
    <th
      className={`font-bold px-2 py-3 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap `}
      style={{ width: width }}
    >
      <input
        type={inputType ? inputType : "text"}
        value={value}
        onChange={handleChange}
        min={inputType === "number" ? 0 : undefined}
        className={`bg-customPurple w-full px-2 py-2 border rounded-md box-border text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200 placeholder-gray-400 ${
          !inputCheck && !isAbleToSubmit ? "border-red-500" : "border-black"
        }`}
      />
    </th>
  );
};

export default AddTableColumn;
