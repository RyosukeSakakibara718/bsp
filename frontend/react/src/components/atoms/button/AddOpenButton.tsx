import React from "react";

type AddModalProps = {
  onOpen: () => void;
  buttonText: string;
};

/**
 * メンバーを追加するためのモーダルを開くボタンコンポーネント。
 * ボタンがクリックされると、`onOpen` 関数が実行され、モーダルが開きます。
 *
 * @param {AddModalProps} props - ボタンコンポーネントのプロパティ。
 * @param {function} props.onOpen - モーダルを開くための関数。ボタンがクリックされたときに呼び出されます。
 * @returns {JSX.Element} メンバー追加用のボタン要素を返します。
 */
const AddOpenButton: React.FC<AddModalProps> = ({ onOpen, buttonText }) => {
  return (
    <button
      onClick={onOpen}
      className="bg-indigo-600 shadow text-white rounded py-1 px-4 hover:bg-indigo-800 transition-colors duration-300 ease-in-out"
    >
      {buttonText}
    </button>
  );
};

export default AddOpenButton;
