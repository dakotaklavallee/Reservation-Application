import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createReservation } from "../utils/api";
import ReservationForm from "./ReservationForm";
import Error from "./Error";

export default function CreateReservation() {
  const [errors, setErrors] = useState({});
  console.log(errors);
  const history = useHistory();

  const handleErrorClose = (e) => {
    const errorMessage = e.target.parentNode.parentNode.childNodes[0].innerHTML;
    delete errors[`${errorMessage}`];
    setErrors({...errors});
  }

  const errorMap = Object.keys(errors).map((error, index) => (
    <Error key={index} error={error} handleErrorClose={handleErrorClose} />
  ));

  const initialFormData = {
    first_name: "",
    last_name: "",
    mobile_number: "",
    reservation_date: "",
    reservation_time: "",
    people: 1,
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleCancel = (e) => {
    e.preventDefault();
    history.go(-1);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    const ac = new AbortController();
    formData.people = parseInt(formData.people);
    try {
      await createReservation(formData, ac.signal);
      history.push(`/dashboard?date=${formData.reservation_date}`);
      setErrors({});
    } catch (error) {
      if(!errors[error.message]){
        setErrors({ ...errors, [error.message] : 1})
      }
    }
    return () => ac.abort();
  };

  return (
    <>
      <div className="createErrors">{errorMap ? errorMap : null}</div>
      <h1 className="my-3">Create Reservation</h1>
      <ReservationForm
        handleChange={handleChange}
        handleCancel={handleCancel}
        submitHandler={submitHandler}
        formData={formData}
      />
    </>
  );
}
