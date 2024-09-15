import React from "react";
import { FaTrashAlt } from "react-icons/fa";

type TrashButtonProps = {
  onDelete: (row: number) => void;
  row: number;
};

/**
 * 行を削除するボタン
 *
 * @param {TrashButtonProps} props - 削除ボタンのプロパティ。
 * @param {function} props.handleClick - 行を削除するための関数。
 * @returns {JSX.Element} 行を削除するボタン。
 */
const TrashButton: React.FC<TrashButtonProps> = ({ onDelete, row }) => {
  return (
    <td className="font-bold px-4 py-3 text-left text-gray-800 whitespace-nowrap">
      <button
        onClick={() => onDelete(row)}
        className="bg-transparent border-none cursor-pointer p-0"
      >
        <FaTrashAlt className="w-5 h-5 text-black" />
      </button>
    </td>
  );
};

export default TrashButton;
