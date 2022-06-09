import React, { useState } from "react";
import { createTable } from "../utils/api";
import Error from "./Error";
import TableForm from "./TableForm";
import { useHistory } from "react-router-dom";

export default function CreateTable() {
  const [tableErrors, setTableErrors] = useState({});
  const history = useHistory();

  const initialTableData = {
    table_name: "",
    capacity: "",
  };

  const [tableData, setTableData] = useState({ ...initialTableData });

  const handleErrorClose = (e) => {
    const errorMessage = e.target.parentNode.parentNode.childNodes[0].innerHTML;
    delete tableErrors[`${errorMessage}`];
    setTableErrors({ ...tableErrors });
  };

  const errorMap = Object.keys(tableErrors).map((error) => (
    <Error key={`${error.split(" ")[0][0]}${error.split(" ")[1][0]}${error.split(" ")[2][0]}${error.split(" ")[3][0]}`} error={error} handleErrorClose={handleErrorClose} />
  ));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ac = new AbortController();
    tableData.capacity = parseInt(tableData.capacity);
    try {
      await createTable(tableData, ac.signal);
      setTableErrors({});
      history.push(`/dashboard`);
    } catch (error) {
      if (!tableErrors[error.message]) {
        setTableErrors({ ...tableErrors, [error.message]: 1 });
      }
    }
    return () => ac.abort();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setTableData({ ...tableData, [e.target.name]: e.target.value });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    history.go(-1);
  };

  return (
    <>
      <div className="createErrors">{errorMap ? errorMap : null}</div>
      <TableForm
        title={"Create"}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        tableData={tableData}
        handleCancel={handleCancel}
      />
    </>
  );
}
