import React from 'react';

type DeleteButtonProps = {
  id: number;
  onOpen?: () => void;
  onClose?: () => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, onOpen, onClose }) => {

  const handleClick = () => {
    if (onOpen) {
      onOpen(); // onOpen が存在する場合、呼び出す
    } else if (onClose) {
      onClose(); // onOpen が存在しない場合、onClose を呼び出す
    }
  }

  return (
    <button onClick={handleClick} className="bg-red-500 shadow text-white rounded-full py-1 px-4 hover:bg-red-700 transition-colors duration-300 ease-in-out">
      削除
    </button>
  );
};

export default DeleteButton;