import React from "react";

type AddButtonProps = {
  buttonText: string;
  handleClick: () => void;
};

/**
 * メンバーを追加するためのモーダルを開くボタンコンポーネント。
 * ボタンがクリックされると、`onOpen` 関数が実行され、モーダルが開きます。
 *
 * @param {AddProps} props - ボタンコンポーネントのプロパティ。
 * @param {function} props.onOpen - モーダルを開くための関数。ボタンがクリックされたときに呼び出されます。
 * @returns {JSX.Element} メンバー追加用のボタン要素を返します。
 */
const AddButton: React.FC<AddButtonProps> = ({ buttonText, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-indigo-600 shadow text-white rounded py-2 px-5 hover:bg-indigo-800 transition-colors duration-300 ease-in-out"
    >
      {buttonText}
    </button>
  );
};

export default AddButton;
