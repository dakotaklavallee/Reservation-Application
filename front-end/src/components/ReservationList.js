import React from "react";
import Reservation from "../components/Reservation";
import './ReservationList.css';

export default function ReservationList({ reservations }) {
  const reservationsMap = reservations.map((reservation) => (
    <Reservation key={reservation.reservation_id} reservation={reservation} />
  ));
  return (
    <div className="container">
      {reservationsMap}
    </div>
  );
}
