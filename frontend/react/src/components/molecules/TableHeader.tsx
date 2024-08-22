import React from 'react';
import TableHeaderColumn from '../atoms/column/TableHeaderColumn';

type TableHeaderProps = {
  isShowing: boolean; // isShowing の型を boolean に設定
};

const TableHeader: React.FC<TableHeaderProps> = ({ isShowing }) => {
  return (
    <tr className="border-b border-gray-300">
      <TableHeaderColumn width="5%" value="ID" />
      <TableHeaderColumn width="5%" value="メンバー名" />
      <TableHeaderColumn width="5%" value="等級" />
      <TableHeaderColumn width="5%" value="原価" />
      <TableHeaderColumn width="5%" value="開始日" />
      {isShowing && (
        <TableHeaderColumn width="5%" value="操作" />
      )}
    </tr>
  );
};

export default TableHeader;
