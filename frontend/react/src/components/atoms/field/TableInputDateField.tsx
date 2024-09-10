type TableInputDateFieldProps = {
  labelText?: string;
  width?: string;
};

const TableInputDateField: React.FC<TableInputDateFieldProps> = ({
  labelText,
  width,
}) => {
  return (
    <td
      className={`font-bold px-4 py-3 text-left text-gray-800`}
      style={{ width }}
    >
      {labelText && <label className="p-2 py-3 px-4 w-1/3">{labelText}</label>}
      <input type="date" className="border rounded p-2 py-3 w-2/3" />
    </td>
  );
};
export default TableInputDateField;
