import React from "react";
import { Card } from "./style";
import { useNavigate } from "react-router-dom";

function RestroomCard({ id }) {
  let navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    navigate(`restroom/${id}`, { replace: true });
  }

  return <Card onClick={handleSubmit}>card with restroom id: {id}</Card>;
}

export default RestroomCard;
