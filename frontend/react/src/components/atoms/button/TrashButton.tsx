import React from "react";
import { FaTrashAlt } from "react-icons/fa";

type TrashButtonProps = {
  onDelete: (row: number, member_id?: number) => void;
  row: number;
  member_id?: number; // 新しく追加
};

/**
 * 行を削除するボタン
 *
 * @param {TrashButtonProps} props - 削除ボタンのプロパティ。
 * @returns {JSX.Element} 行を削除するボタン。
 */
const TrashButton: React.FC<TrashButtonProps> = ({
  onDelete,
  row,
  member_id,
}) => {
  return (
    <td className="font-bold px-4 py-3 text-left text-gray-800 whitespace-nowrap">
      <button
        onClick={() => {
          if (member_id !== undefined) {
            onDelete(row, member_id);
          } else {
            onDelete(row);
          }
        }}
        className="bg-transparent border-none cursor-pointer p-0"
      >
        <FaTrashAlt className="w-5 h-5 text-black" />
      </button>
    </td>
  );
};

export default TrashButton;
