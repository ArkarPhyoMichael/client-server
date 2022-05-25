import React from "react";

interface TableRowProps {
  className?: string;
  children: JSX.Element;
}

export const TableRow: React.FC<TableRowProps> = ({ className, children }) => {
  return <tr className={`${className}`}>{children}</tr>;
};

interface TableCellProps {
  className?: string;
  isHeader?: boolean;
  children: JSX.Element;
}

export const TableCell: React.FC<TableCellProps> = ({
  isHeader = false,
  className,
  children,
}) => {
  return isHeader ? (
    <th
      className={`px-2 py-6  text-left first:pl-5 last:pr-5 whitespace-nowrap ${className}`}
    >
      {children}
    </th>
  ) : (
    <td
      className={`px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap ${className}`}
    >
      <div className={`text-sm leading-5 text-gray-500 ${className}`}>
        {children}
      </div>
    </td>
  );
};

export const SelectTable: React.FC<TableRowProps> = ({
  className,
  children,
}) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full table-auto">{children}</table>
    </div>
  );
};
