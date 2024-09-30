type CostAreaHeaderProps = {
  index: number;
  row: string;
};

const CostAreaHeader: React.FC<CostAreaHeaderProps> = ({ index, row }) => {
  return (
    <div key={index} className="w-[100px] py-2 text-center">
      <p>{row}</p>
    </div>
  );
};

export default CostAreaHeader;
