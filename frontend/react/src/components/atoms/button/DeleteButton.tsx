import React from "react";

type DeleteButtonProps = {
  id: number;
  onOpen?: () => void;
  onClose?: () => void;
  handleDeleteMember?: () => void;
};

/**
 * 削除ボタン。
 * メンバー一覧の表から呼び出される際はモーダルを開くための関数を呼び出す。
 * モーダル内から呼び出される際は削除用のAPIを叩いた後、モーダルを閉じる関数を呼び出す。
 *
 * @param {DeleteButtonProps} props - ボタンコンポーネントのプロパティ。
 * @param {number} props.id - 削除対象のメンバーのID
 * @param {function} props.onOpen - 削除モーダルを表示する関数。
 * @param {function} props.onClose - 削除モーダルを閉じる関数。
 * @param {function} props.handleDeleteMember - 削除を実行する関数。
 * @returns {JSX.Element} 呼び出し元によって、削除モーダルを開く/閉じるボタン要素を返します。
 */
const DeleteButton: React.FC<DeleteButtonProps> = ({
  id,
  onOpen,
  onClose,
  handleDeleteMember,
}) => {
  const handleClick = () => {
    if (onOpen) {
      onOpen();
    } else if (onClose) {
      // APIを叩くようにする
      console.log(id);
      onClose();
    }
  };

  return (
    <button
      onClick={() => {
        handleClick();
        handleDeleteMember ? handleDeleteMember() : null;
      }}
      className="bg-red-500 shadow text-white rounded-full py-1 px-4 hover:bg-red-700 transition-colors duration-300 ease-in-out"
    >
      削除
    </button>
  );
};

export default DeleteButton;
