import { useTable } from "react-table";
import { useMemo } from "react";
import projectsData from "../../assets/Data/projectsData.json";

const Table1 = () => {
  // prepare the two params, (data and columns) for useTable()
  const data = useMemo(() => projectsData, []);

  const columns = useMemo(
    () => [
      {
        Header: "Project",
        accessor: "projectName",
      },
      {
        Header: "Activities",
        accessor: "projectDescription",
      },
      {
        Header: "Client",
        accessor: "client",
      },
      {
        Header: "Location",
        accessor: "location",
      },
    ],
    []
  );

  // const table = useTable({ columns, data });
  // destructure some props needed from useTable instead of using the above variable
  const { getTableProps, getTableBodyProps, prepareRow, rows, headerGroups } =
    useTable({ columns, data });

  {    /* return table */  }
  return (
    <div className="table__container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, ind) => (
            <tr key={ind} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column, key) => (
                <th key={key} {...column.getHeaderProps()}>
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr key={i} {...row.getRowProps()}>
                {row.cells.map((cell, ind) => (
                  <td key={ind} {...cell.getCellProps}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table1;
