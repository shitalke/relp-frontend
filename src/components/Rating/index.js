/**
 * Rating component - shows same number of poops as rating
 *
 * Usage: CommentLine Component,
 *
 * props:
 *      rating [number] - number of poops you want displayed
 *      width [string] - width of each poop, ex - "25px" or "10vw"
 *
 */

import React from "react";
import { PoopContainer, RatingPoop } from "./style";
import ratingPoop from "../../assets/ratingPoop.png";

export default function Rating(props) {
  return (
    <PoopContainer>
      {[...Array(Math.floor(props.rating))].map((key) => (
        <RatingPoop src={ratingPoop} key={key} width={props.width} />
      ))}
    </PoopContainer>
  );
}
