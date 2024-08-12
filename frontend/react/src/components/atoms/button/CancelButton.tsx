import React from 'react';

type CancelButtonProps = {
  onClose: () => void;
};

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