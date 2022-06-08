import React from "react";
import Table from "./Table";

export default function TableList({ tables }) {

  const tableMap = tables.map((table) => (
    <Table key={table.table_id} table={table} />
  ));

  return (
    <div className="container">
      {tableMap}
    </div>
  );
}
