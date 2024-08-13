import React from 'react';

type DeleteButtonProps = {
  id: number;
  onOpen?: () => void;
  onClose?: () => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({ id, onOpen, onClose }) => {

  const handleClick = () => {
    if (onOpen) {
      onOpen();
    } else if (onClose) {
      onClose();
    }
  }

  return (
    <button onClick={handleClick} className="bg-red-500 shadow text-white rounded-full py-1 px-4 hover:bg-red-700 transition-colors duration-300 ease-in-out">
      削除
    </button>
  );
};

export default DeleteButton;