import React from 'react';

type CancelButtonProps = {
  onClose: () => void;
};

/**
 * 開いているモーダルを閉じるコンポーネント。
 * 編集・削除モーダルを閉じるために呼び出される。
 *
 * @param {CancelButtonProps} props - ボタンコンポーネントのプロパティ。
 * @param {function} props.onClose - モーダルを閉じるための関数。ボタンがクリックされたときに呼び出されます。
 * @returns {JSX.Element} メンバー追加用のボタン要素を返します。
 */
const CancelButton: React.FC<CancelButtonProps> = ({onClose}) => {
  return (
    <button 
      onClick={onClose}
      className="bg-gray-100 shadow text-black rounded-full py-1 px-4 hover:bg-gray-300 transition-colors duration-300 ease-in-out"
    >
      キャンセル
    </button>
  );
};

export default CancelButton;