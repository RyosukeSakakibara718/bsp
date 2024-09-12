import React from "react";

import DeleteButton from "../../../../../components/atoms/button/DeleteButton";
import EditButton from "../../../../../components/atoms/button/EditButton";
import TableRowColumn from "../../../../../components/atoms/column/TableRowColumn";
import { ProjectData } from "../../../../../types/project";

type TableRowProps = ProjectData & {
  isEditPageOpen: () => void;
  isDeleteModalOpen: () => void;
};

const TableRow: React.FC<TableRowProps> = ({
  id,
  projectName,
  base_cost_start_date,
  endDate,
  isEditPageOpen,
  isDeleteModalOpen,
}) => {
  return (
    <tr className="hover:bg-customPurple transition-colors duration-200">
      <TableRowColumn width="5%">{id}</TableRowColumn>
      <TableRowColumn width="25%">{projectName}</TableRowColumn>
      <TableRowColumn width="25%">
        {base_cost_start_date}~{endDate}
      </TableRowColumn>
      <TableRowColumn width="25%">{""}</TableRowColumn>
      <TableRowColumn width="10%">
        <div className="flex space-x-2.5">
          <EditButton onOpen={isEditPageOpen} id={id}></EditButton>
          <DeleteButton onOpen={isDeleteModalOpen} id={id} />
        </div>
      </TableRowColumn>
    </tr>
  );
};

export default TableRow;
