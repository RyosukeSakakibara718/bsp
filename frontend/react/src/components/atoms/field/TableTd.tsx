type TextProps = {
  text: string | number;
};
const TableTd = ({ text }: TextProps) => {
  const formatText = (value: string | number): string => {
    if (typeof value === "number") {
      if (value > 10000) {
        return `¥${value.toLocaleString()}`;
      }
      return `${value} 人月`;
    }
    return value;
  };
  return (
    <td
      className={
        "py-4 font-bold text-left border-b border-[#e1cfff] text-gray-800 pl-4"
      }
    >
      {formatText(text)}
    </td>
  );
};
export default TableTd;
