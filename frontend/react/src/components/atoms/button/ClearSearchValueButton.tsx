import React from 'react';
import { FaTrashAlt } from "react-icons/fa";

const ClearSearchValueButton: React.FC = () => {
  return (
		<button className="bg-gray-100 font-semibold text-gray-800 shadow-lg py-1 px-2 rounded-md border-gray-300 hover:bg-gray-200 transition-colors duration-300 ease-in-out">
			<FaTrashAlt />
		</button>
  );
};

export default ClearSearchValueButton;