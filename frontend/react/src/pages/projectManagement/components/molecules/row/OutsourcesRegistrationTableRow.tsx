import React from "react";

import OutsourcesRegistrationTableColumn from "../../atoms/column/OutsourcesRegistrationTableColumn";
import TrashButton from "../../../../../components/atoms/button/TrashButton";

const OutsourcesRegistrationTableRow: React.FC<any> = ({onDelete, row}) => {
  return (
    <tr className="transition-colors duration-200">
      <OutsourcesRegistrationTableColumn />
      <OutsourcesRegistrationTableColumn />
      <OutsourcesRegistrationTableColumn />
      <TrashButton onDelete={onDelete} rowNumber={row}/>
    </tr>
  );
};

export default OutsourcesRegistrationTableRow;
