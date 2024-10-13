type TableLabelTdProps = {
  label: string;
  value: string | number;
};

const TableLabelTd = ({ label, value }: TableLabelTdProps) => {
  return (
    <>
      <td
        className={
          "py-4 font-bold text-left border-b border-[#e1cfff] text-gray-800 pl-4"
        }
      >
        {label}
      </td>
      <td
        className={
          "py-4 font-bold text-left border-b border-[#e1cfff] text-gray-800 pl-4"
        }
      >
        {value}
      </td>
    </>
  );
};
export default TableLabelTd;
