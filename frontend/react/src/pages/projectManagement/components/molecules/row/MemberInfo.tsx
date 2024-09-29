import TrashButton from "../../../../../components/atoms/button/TrashButton";
import TableInputNumField from "../../../../../components/atoms/field/TableInputNumField";
import TableSelectField from "../../../../../components/atoms/field/TableSelectField";
import { RANK } from "../../../../../constants";
import { memberList } from "../../../../../data/projectDetail";

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

  return (
    <>
      {memberInfoRows?.map(row => (
        <tbody>
          <tr
            className="font-bold px-4 py-3 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap"
            key={row}
          >
            <td>
              <TableSelectField options={memberList} />
            </td>
            <td>
              <TableSelectField options={RANK} />
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
