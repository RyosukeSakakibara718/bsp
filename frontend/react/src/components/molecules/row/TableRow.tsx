import React from 'react';
import TableRowColumn from '@atoms/column/TableRowColumn';
import DeleteButton from '@atoms/button/DeleteButton';
import EditButton from '@atoms/button/EditButton';
import { MemberData } from '@types/member';

type TableRowProps = MemberData & {
  isEditModalOpen: () => void;
  isDeleteModalOpen: () => void;
};

const TableRow: React.FC<TableRowProps> = ({ id, name, grade, cost, startDate, isEditModalOpen, isDeleteModalOpen }) => {
  return (
    <tr className="hover:bg-customPurple transition-colors duration-200">
      <TableRowColumn width="5%">{id}</TableRowColumn>
      <TableRowColumn width="25%">{name}</TableRowColumn>
      <TableRowColumn width="10%">{grade}</TableRowColumn>
      <TableRowColumn width="25%">{cost.toLocaleString()}円</TableRowColumn>
      <TableRowColumn width="25%">{startDate}</TableRowColumn>
      <TableRowColumn width="10%">
        <div className="flex space-x-2.5">
          <EditButton onOpen={isEditModalOpen} id={id}></EditButton>
          <DeleteButton onOpen={isDeleteModalOpen} id={id}/>
        </div>
      </TableRowColumn>
    </tr>
  );
};

export default TableRow;
