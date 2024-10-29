import React from "react";

type DecideAddButtonProps = {
  handleAddMember: () => void;
};

/**
 * メンバー追加モーダルで入力内容で追加を行うためのボタン。
 * ボタンがクリックされると、`hundleSubmit` 関数が実行されAPIを実行し、メンバーを追加します。
 *
 * @param {DecideAddButtonProps} props - ボタンコンポーネントのプロパティ。
 * @param {function} props.hundleSubmit - メンバー登録用のAPIを実行する関数。
 * @returns {JSX.Element} メンバー追加用のボタン要素を返します。
 */
const DecideAddButton: React.FC<DecideAddButtonProps> = ({
  handleAddMember,
}) => {
  return (
    <button
      onClick={() => {
        handleAddMember();
      }}
      className="rounded-full bg-indigo-600 shadow text-white py-2 px-6 hover:bg-indigo-800 transition-colors duration-300 ease-in-out"
    >
      追加する
    </button>
  );
};

export default DecideAddButton;
