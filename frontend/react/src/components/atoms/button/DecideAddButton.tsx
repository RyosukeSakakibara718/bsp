import React from 'react';

type DecideAddButtonProps = {
	hundleSubmit: () => void;
}

const DecideAddButton: React.FC<DecideAddButtonProps> = ({hundleSubmit}) => {
  return (
    <button
		onClick={hundleSubmit}
		className="rounded-full bg-indigo-600 shadow text-white py-2 px-6 hover:bg-indigo-800 transition-colors duration-300 ease-in-out"
		>
			追加する
		</button>
  );
};

export default DecideAddButton;