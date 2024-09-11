import TableInputNumField from "../../../../../components/atoms/field/TableInputNumField";
import TableSelectField from "../../../../../components/atoms/field/TableSelecField";
import TrashButton from "../../../../../components/atoms/button/TrashButton";

type memberInfoProps = {
  memberInfoRows: number[];
  setMemberInfoRows: React.Dispatch<React.SetStateAction<number[]>>;
};

const memberInfo: React.FC<memberInfoProps> = ({
  memberInfoRows,
  setMemberInfoRows,
}) => {
  const handleDeleteRow = (row: number) => {
    setMemberInfoRows(prevRows => prevRows.filter(rowId => rowId !== row));
  };

  const memberName = [
    { value: "山田 涼介", label: "山田 涼介" },
    { value: "山下 智久", label: "山下 智久" },
  ];

  const rank = [
    { value: "PM", label: "PM" },
    { value: "PL", label: "PL" },
    { value: "PG", label: "PG" },
  ];
  // TODO　月の工数入力の横スクロールの実装が思いつかなかったので一旦
  return (
    <>
      {memberInfoRows?.map((column, row) => (
        <tbody>
          <tr className="font-bold px-4 py-3 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap">
            <td>
              <TableSelectField options={memberName} />
            </td>
            <td>
              <TableSelectField options={rank} />
            </td>
            <td>
              <TableInputNumField />
            </td>
            <td>
              <TableInputNumField />
            </td>
            <td>
              <TableInputNumField />
            </td>
            <td>
              <TableInputNumField suffix="人/月" />
            </td>
            <td>
              <TrashButton onDelete={handleDeleteRow} row={row} />
            </td>
          </tr>
        </tbody>
      ))}
    </>
  );
};

export default memberInfo;
