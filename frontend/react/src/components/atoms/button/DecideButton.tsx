import React from "react";

type DecideButtonProps = {
  onClose: () => void;
  handleSubmitEditData: () => void;
};

/**
 * 決定ボタンコンポーネント。
 * ボタンがクリックされると、`onClose` 関数が実行されます。
 *
 * @param {DecideButtonProps} props - ボタンコンポーネントに渡されるプロパティオブジェクト。
 * @param {Function} props.onClose - 編集モーダルを閉じるための関数。
 * @param {Function} props.handleSubmitEditData - 編集データをAPIに投げる関数
 * @returns {JSX.Element} 決定用のボタン要素を返します。
 */
const DecideButton: React.FC<DecideButtonProps> = ({
  onClose,
  handleSubmitEditData,
}) => {
  const hundleSubmit = () => {
    onClose();
    handleSubmitEditData? handleSubmitEditData(): null;
  };
  return (
    <button
      onClick={hundleSubmit}
      className="bg-indigo-600 shadow text-white rounded-full py-1 px-4 hover:bg-indigo-800 transition-colors duration-300 ease-in-out"
    >
      決定
    </button>
  );
};

export default DecideButton;
