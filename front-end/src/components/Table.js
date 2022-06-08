import React, { useState } from "react";
import { finishTable } from "../utils/api";
import { useHistory } from "react-router-dom";
import FinishButton from "./FinishButton";
import ErrorAlert from "../layout/ErrorAlert";

export default function Table({ table }) {
  const [error, setError] = useState(null);
  const history = useHistory();
  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      if (
        window.confirm(
          "Is this table ready to seat new guests? This cannot be undone."
        )
      ) {
        await finishTable(table.table_id);
        history.go(0);
      }
    } catch (error) {
      setError(error);
    }
  };
  return (
    <>
      <ErrorAlert error={error} />
      <div className="card border-secondary mb-3 text-center">
        <div
          className="card-header"
        >
          Table: {table.table_name}
        </div>
        <div className="card-body text-secondary">
          <p className="card-text">
            Capacity: {table.capacity}
          </p>
          <p className="card-text" data-table-id-status={table.table_id}>
            Status: {table.reservation_id ? "occupied" : "free"}
          </p>
          <>
          {table.reservation_id ? (
            <FinishButton table={table} handleFinish={handleFinish} />
          ) : null}
          </>
        </div>
      </div>
    </>
  );
}
