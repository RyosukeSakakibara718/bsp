import React from 'react';
import { MemberData } from '../../../types/member';

type DecideButtonProps = {
  submitData: MemberData;
  onClose: () => void;
};

const RoundDecideButton: React.FC<DecideButtonProps> = ({onClose, submitData}) => {

  const hundleSubmit = () => {
      onClose()
      console.log('submitData', submitData);
  }
  return (
    <button onClick={hundleSubmit} className="bg-indigo-600 shadow text-white rounded-full py-1 px-4 hover:bg-indigo-800 transition-colors duration-300 ease-in-out">
      決定
    </button>
  );
};

export default RoundDecideButton;