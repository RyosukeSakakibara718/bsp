import React from 'react';
import TableHeaderColumn from '@atoms/column/TableHeaderColumn';

type TableHeaderProps = {
  isShowing: boolean; // isShowing の型を boolean に設定
};

const TableHeader: React.FC<TableHeaderProps> = ({ isShowing }) => {
  return (
    <tr className="border-b border-gray-300">
      <TableHeaderColumn width="5%">
        ID
      </TableHeaderColumn>
      <TableHeaderColumn width="25%">
        メンバー名
      </TableHeaderColumn>
      <TableHeaderColumn width="10%">
        等級
      </TableHeaderColumn>
      <TableHeaderColumn width="25%">
        原価
      </TableHeaderColumn>
      <TableHeaderColumn width="25%">
        開始日
      </TableHeaderColumn>
      {isShowing && (
        <TableHeaderColumn width="10%">
          操作
        </TableHeaderColumn>
      )}
    </tr>
  );
};

export default TableHeader;
