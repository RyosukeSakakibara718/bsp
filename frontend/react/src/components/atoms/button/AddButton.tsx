import React from 'react';

type AddModalProps = {
  onOpen: () => void;
}

const AddButton: React.FC<AddModalProps> = ({onOpen}) => {
  return (
    <button
      onClick={onOpen}
      className="bg-indigo-600 shadow text-white rounded py-1 px-4 hover:bg-indigo-800 transition-colors duration-300 ease-in-out"
    >
      メンバーの追加
    </button>
  );
};

export default AddButton;