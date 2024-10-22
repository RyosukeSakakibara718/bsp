type PagenationButtonProps = {
  value: string;
  onClick: () => void;
  isAblePagenation: string | null | undefined;
};

export const PagenationButton: React.FC<PagenationButtonProps> = ({
  value,
  onClick,
  isAblePagenation,
}) => {
  let style

  if (isAblePagenation != null){
    style="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-opacity-75"
  }else{
    style="px-4 py-2 bg-indigo-300 text-white font-semibold rounded-lg shadow-md"
  }

  return (
    <button 
      onClick={() => onClick()}
      className={style}
      disabled={isAblePagenation == null}
    >
      {value}
    </button>
  )
};
