import React from "react";
import { FaTimes, FaCheck } from "react-icons/fa";

export default function TableForm({
  title,
  handleSubmit,
  tableData,
  handleChange,
  handleCancel,
}) {
  return (
    <div className="container">
      <h1 className="my-3 text-center">{title} Table</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="table_name">Table Name:</label>
          <input
            id="table_name"
            name="table_name"
            type="text"
            className="form-control"
            required
            onChange={handleChange}
            value={tableData.table_name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="capacity">Capacity:</label>
          <input
            id="capacity"
            name="capacity"
            type="number"
            className="form-control"
            required
            min={1}
            onChange={handleChange}
            value={tableData.capacity}
          />
        </div>
        <div className="form-group">
          <button
            className="btn btn-secondary mr-2"
            style={{backgroundColor: "#fff", color: "black", borderColor: "black"}}
            type="button"
            onClick={handleCancel}
          >
            <FaTimes /> Cancel
          </button>
          <button 
          className="btn btn-primary" 
          type="submit"
          style={{backgroundColor: "#fff", color: "black", borderColor: "black"}}
          >
            <FaCheck /> Submit
          </button>
        </div>
      </form>
    </div>
  );
}
