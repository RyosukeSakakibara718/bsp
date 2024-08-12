import React, { Dispatch, SetStateAction } from 'react';
import TableRowColumn from '../../atoms/column/TableRowColumn';
import DeleteButton from '../../atoms/button/DeleteButton';
import EditButton from '../../atoms/button/EditButton';

type TableRowProps = {
  id: number;
  name: string;
  grade: number;
  cost: number;
  startDate: string;
  isShowing: boolean;
  isEditModalOpen: () => void;
  isDeleteModalOpen: () => void;
};

const TableRow: React.FC<TableRowProps> = ({ id, name, grade, cost, startDate, isShowing, isEditModalOpen, isDeleteModalOpen }) => {
  return (
    <tr className="hover:bg-customPurple transition-colors duration-200">
      <TableRowColumn width="5%">{id}</TableRowColumn>
      <TableRowColumn width="25%">{name}</TableRowColumn>
      <TableRowColumn width="10%">{grade}</TableRowColumn>
      <TableRowColumn width="25%">{cost.toLocaleString()}</TableRowColumn>
      <TableRowColumn width="25%">{startDate}</TableRowColumn>
      {isShowing && (
        <TableRowColumn width="10%">
          <div className="flex space-x-2.5">
            <EditButton onOpen={isEditModalOpen} id={id}></EditButton>
            <DeleteButton onOpen={isDeleteModalOpen} id={id}/>
          </div>
        </TableRowColumn>
      )}
    </tr>
  );
};

export default TableRow;
