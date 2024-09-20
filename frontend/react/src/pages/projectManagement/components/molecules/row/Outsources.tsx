import React from "react";

import TrashButton from "../../../../../components/atoms/button/TrashButton";
import TableInputField from "../../../../../components/atoms/field/TableInputField";

type OutsourcesProps = {
  outSouRegRows: number[];
  setOutSouRegRows: React.Dispatch<React.SetStateAction<number[]>>;
};

const Outsources: React.FC<OutsourcesProps> = ({
  outSouRegRows,
  setOutSouRegRows,
}) => {
  const handleDeleteRow = (row: number) => {
    console.log(row);

    setOutSouRegRows(prevRows => prevRows.filter(rowId => rowId !== row));
  };
  console.log(outSouRegRows);

  return (
    <tbody>
      {outSouRegRows.map(row => (
        <tr
          key={row}
          className="font-bold px-4 py-3 text-left border-b border-[#e1cfff] text-gray-800 whitespace-nowrap"
        >
          <td>
            <TableInputField />
          </td>
          <td>
            <TableInputField placeholder="¥" />
          </td>
          <td>
            <TableInputField placeholder="¥" />
          </td>
          <td>
            <TrashButton onDelete={handleDeleteRow} row={row} />
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default Outsources;
