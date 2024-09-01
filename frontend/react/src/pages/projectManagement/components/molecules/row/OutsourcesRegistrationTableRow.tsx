import React from "react";

import OutsourcesRegistrationTableColumn from "../../atoms/column/OutsourcesRegistrationTableColumn";
import TrashButton from "../../../../../components/atoms/button/TrashButton";

type OutsourcesRegistrationTableRowProps = {
  onDelete: (row: number) => void;
  row: number;
}

const OutsourcesRegistrationTableRow: React.FC<OutsourcesRegistrationTableRowProps> = ({onDelete, row}) => {
  return (
    <tr className="transition-colors duration-200">
      <OutsourcesRegistrationTableColumn width="30%"/>
      <OutsourcesRegistrationTableColumn width="30%"/>
      <OutsourcesRegistrationTableColumn width="30%"/>
      <TrashButton onDelete={onDelete} row={row}/>
    </tr>
  );
};

export default OutsourcesRegistrationTableRow;
