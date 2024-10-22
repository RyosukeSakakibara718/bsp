type PagenationButtonProps = {
  value: string;
  onClick: () => void;
};

export const PagenationButton: React.FC<PagenationButtonProps> = ({
  value,
  onClick,
}) => {
  return (
    <button 
      onClick={() => onClick()}
      className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
    >
      {value}
    </button>
  )
};
