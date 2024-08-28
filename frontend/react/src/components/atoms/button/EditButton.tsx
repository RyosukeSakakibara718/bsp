import React from "react";

type EditButtonProps = {
  id: number;
  onOpen: () => void;
};

/**
 * 編集ボタン
 * 対象のメンバーの情報を編集するためのモーダルを開くための関数を呼び出す。
 *
 * @param {EditButtonProps} props - ボタンコンポーネントのプロパティ。
 * @param {number} props.id - 編集対象のメンバーのID
 * @param {function} props.onOpen - 編集モーダルを表示する関数。
 * @returns {JSX.Element} 編集ボタンを開くためのボタン要素を返します。
 */
const EditButton: React.FC<EditButtonProps> = ({ id, onOpen }) => {
  return (
    <button
      onClick={() => onOpen()}
      className="bg-indigo-600 shadow text-white rounded-full py-1 px-4 hover:bg-indigo-800 transition-colors duration-300 ease-in-out"
    >
      編集
    </button>
  );
};

export default EditButton;
