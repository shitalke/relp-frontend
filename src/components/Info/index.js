/**
 * Info component - shows a small card of the icon + the information.
 *
 * props:
 *      image [string] - icon image to display, there will be a const list to select icons.
 *      info [string] - information string to display
 *      width [string] - width of the icon, ex - "25px" or "10vw"
 */

import React from "react";
// assets (images + styles)
import poopEmojiImg from "../../assets/brownPoop.png";
import {InfoContainer, IconImg, InfoString} from "./style";

// TODO: refactor the src to not just be the poop emoji, introduce a dictionary to choose from
export default function Info(props) {
  return (
    <InfoContainer>
      <IconImg
        src={props.image ? props.image : poopEmojiImg}
        width={props.width}
      />
      <InfoString>{props.info}</InfoString>
    </InfoContainer>
  );
}
