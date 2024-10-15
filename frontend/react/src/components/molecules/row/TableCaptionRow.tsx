import React, { useState } from "react";
import { MdOutlineModeEdit, MdDeleteOutline } from "react-icons/md";

type TableCaptionRowProps = {
  value: string;
  isHome?: boolean;
  isEdit?: boolean;
  commentId?: number;
  projectId?: number;
  setIsEdit?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  handleSaveComment?: (num: number) => void;
  isNew?: boolean;
  handleAddComment?: (num: number)=>void
  handleDeleteComment?: (projectId: number, commentId: number)=>void
};

/**
 * テーブルヘッダーを構成するセルコンポーネント
 *
 * @param {TableCaptionRowProps} props - セルコンポーネントに渡されるプロパティオブジェクト。
 * @param {function} props.value - セルに表示される値。
 * @returns {JSX.Element} ヘッダーを構成するセルを返します。
 */

const TableCaptionRow: React.FC<TableCaptionRowProps> = ({
  value,
  isHome,
  isEdit,
  setIsEdit,
  commentId,
  projectId,
  handleSaveComment,
  handleAddComment,
  isNew,
  handleDeleteComment,
}: TableCaptionRowProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    if (setIsEdit) setIsEdit(!isEdit);
  };

  const handleCancelClick = () => {
    if (setIsEdit) setIsEdit(!isEdit);
  };
  
  const handleDecideClick = () => {
    if (isNew && projectId){
      handleAddComment?.(projectId);
    }
    else{
      if (commentId){
        handleSaveComment?.(commentId)
      }
    }
    if (setIsEdit) setIsEdit(!isEdit);
  };

  const handleDeleteClick = () => {
    if (projectId && commentId) {
      handleDeleteComment?.(projectId, commentId); // 安全に呼び出し
    }
    setIsModalOpen(false); // モーダルを閉じる
  };

  return (
    <>
      <tr>
        <th
          colSpan={100}
          className="bg-[#EEE3FF] py-3 px-4 text-left border-b border-[#e1cfff] whitespace-nowrap w-full"
        >
          <div className="flex justify-between items-center">
            <span className="font-bold">{value}</span>
            {isHome && (
              <div className="flex space-x-2">
                {isNew ? ( // 新規コメントの場合
                  <button
                    className="border border-gray-400 rounded-md px-6 py-1"
                    onClick={handleDecideClick}
                  >
                    保存
                  </button>
                ) : isEdit ? ( // 既存コメントの編集モード
                  <>
                    <button
                      className="border border-gray-400 rounded-md px-6 py-1"
                      onClick={handleCancelClick}
                    >
                      キャンセル
                    </button>
                    <button
                      className="border border-gray-400 rounded-md px-6 py-1"
                      onClick={handleDecideClick}
                    >
                      保存
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="flex items-center space-x-1 hover:text-gray-600 py-1"
                      onClick={handleEditClick}
                    >
                      <MdOutlineModeEdit />
                      <span>編集</span>
                    </button>
                    <button
                      className="flex items-center space-x-1 hover:text-gray-600 py-1"
                      onClick={() => setIsModalOpen(true)} // モーダルを開く
                    >
                      <MdDeleteOutline />
                      削除
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </th>
      </tr>

      {/* モーダル */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p className="text-lg font-semibold mb-4">
              本当にこのコメントを削除しますか？
            </p>
            <div className="flex justify-between px-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md"
                onClick={handleDeleteClick}
              >
                削除する
              </button>
              <button
                className="bg-gray-300 px-4 py-2 rounded-md"
                onClick={() => setIsModalOpen(false)} // モーダルを閉じる
              >
                キャンセル
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TableCaptionRow;
