import React from "react";

import TableHeaderColumn from "../atoms/column/TableHeaderColumn";

type TableHeaderProps = {
  columns?: Array<string>;
};

const TableHeader: React.FC<TableHeaderProps> = ({ columns }) => {
  return (
    <tr className="border-b border-gray-300">
      {columns?.map((column, index) => (
        <TableHeaderColumn key={index} width="5%" value={column} />
      ))}
    </tr>
  );
};

export default TableHeader;
