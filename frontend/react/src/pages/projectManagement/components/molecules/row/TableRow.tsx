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
  name,
  start_date,
  end_date,
  project_manager,
  isEditPageOpen,
  isDeleteModalOpen,
}) => {
  return (
    <tr className="hover:bg-customPurple transition-colors duration-200">
      <TableRowColumn width="5%">{id}</TableRowColumn>
      <TableRowColumn width="25%">{name}</TableRowColumn>
      <TableRowColumn width="25%">
        {start_date} ~ {end_date}
      </TableRowColumn>
      <TableRowColumn width="25%">{project_manager}</TableRowColumn>
      <TableRowColumn width="10%">
        <div className="flex space-x-2.5">
          <EditButton onOpen={isEditPageOpen}></EditButton>
          <DeleteButton onOpen={isDeleteModalOpen} id={id} />
        </div>
      </TableRowColumn>
    </tr>
  );
};

export default TableRow;
