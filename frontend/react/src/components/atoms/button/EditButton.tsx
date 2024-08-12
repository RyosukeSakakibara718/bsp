import React, { Dispatch, SetStateAction } from 'react';

type EditButtonProps = {
  id: number; 
  onOpen: () => void
};

const EditButton: React.FC<EditButtonProps> = ({ id, onOpen }) => {
  return (
    <button onClick={() => onOpen()} className="bg-indigo-600 shadow text-white rounded-full py-1 px-4 hover:bg-indigo-800 transition-colors duration-300 ease-in-out">
      編集
    </button>
  );
};

export default EditButton;