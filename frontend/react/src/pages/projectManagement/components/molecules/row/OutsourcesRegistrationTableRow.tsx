import React from "react";

import OutsourcesRegistrationTableColumn from "../../atoms/column/OutsourcesRegistrationTableColumn";

const OutsourcesRegistrationTableRow: React.FC = () => {
  return (
    <tr className="transition-colors duration-200">
      <OutsourcesRegistrationTableColumn />
      <OutsourcesRegistrationTableColumn />
      <OutsourcesRegistrationTableColumn />
    </tr>
  );
};

export default OutsourcesRegistrationTableRow;
