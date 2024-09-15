type TableInputDateFieldProps = {
  labelText?: string;
};

const TableInputDateField: React.FC<TableInputDateFieldProps> = ({
  labelText,
}) => {
  return (
    <td
      className={`font-bold px-4 py-3 text-left text-gray-800`}
      style={{ display: "flex", alignItems: "center" }}
    >
      {labelText && (
        <label className="p-2 py-3 px-4" style={{ flex: 2 }}>
          {labelText}
        </label>
      )}
      <input
        type="date"
        className="border rounded p-2 py-3"
        style={{ flex: 4 }}
      />
    </td>
  );
};
export default TableInputDateField;
