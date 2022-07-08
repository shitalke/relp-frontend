/**
 * CommentThread component - shows a comment inline with our desired styling
 *
 * props:
 *      reply [boolean][optional] - if this comment is a reply, pass in true to descrease its width
 *      username [string] - name of user
 *      rating [number] - rating user gave to this restroom
 *      comment [string] - comment contents
 *      likes [number] - how many likes this current comment got
 *
 * Usage: used in the RestroomCommentChain.js file for the Restroom Profile page
 */
import React from "react";
import Rating from "../Rating";
// assets (images + styles)
import poopEmojiImg from "../../assets/brownPoop.png";
import like from "../../assets/like.png";
import {
  LineContainer,
  UserContainer,
  PoopEmojiWrapper,
  PoopEmoji,
  SmallText,
  CommentContainer,
  RatingAndComment,
  Comment,
  LikesContainer,
  Heart,
  PoopContainer,
} from "./style";

// individual comment component -- used for comments and replies
export default function CommentLine(props) {
  // TODO make like button functional
  const handleLike = () => {
    console.log("this comment was liked");
  };

  return (
    <LineContainer reply={props.reply}>
      <UserContainer>
        <PoopEmojiWrapper reply={props.reply}>
          <PoopEmoji src={poopEmojiImg} reply={props.reply} />
        </PoopEmojiWrapper>
        <SmallText>{props.username}</SmallText>
      </UserContainer>

      <CommentContainer>
        <RatingAndComment>
          {props.rating && (
            <PoopContainer>
              <Rating rating={props.rating} />
            </PoopContainer>
          )}
          <Comment>{props.comment}</Comment>
        </RatingAndComment>
        <LikesContainer>
          <Heart src={like} onClick={() => handleLike()} />
          <SmallText>{"(" + (props.likes || 0) + ")"}</SmallText>
        </LikesContainer>
      </CommentContainer>
    </LineContainer>
  );
}
