import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import styled from "styled-components";

// images
import poopEmojiImg from "../assets/brownPoop.png";
import like from "../assets/like.png";
import ratingPoop from "../assets/ratingPoop.png";

export default function RestroomCommentChain(props) {
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    axios.get("/restrooms/replies/" + props.id).then((response) => {
      console.log(response.data);
      setReplies(response.data);
    });
  }, []);

  return (
    <>
      <CommentComponent
        username={props.username}
        likes={5}
        comment={props.body}
        rating={4}
      />
      {replies.map((comment) => {
        return (
          <CommentComponent
            key={comment._id}
            username={comment.username}
            comment={comment.body}
            likes={4}
            reply
          />
        );
      })}
      <Reply />
    </>
  );
}

// individual comment component -- used for comments and replies
function CommentComponent(props) {
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
              {[...Array(Math.floor(props.rating))].map((key) => (
                <RatingPoop src={ratingPoop} key={key} />
              ))}
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

// STYLES - CommentComponent
const LineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 25px;
  padding: ${(props) => (props.reply ? "1% 5%" : "2% 5%")};

  ${(props) =>
    props.reply ? "width: 80%; left: 20%; position: relative;" : ""}
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

const PoopEmojiWrapper = styled.div`
  width: ${(props) => (props.reply ? "35px" : "55px")};
  height: ${(props) => (props.reply ? "35px" : "55px")};

  border-radius: ${(props) => (props.reply ? "35px" : "55px")};
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ececec;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const PoopEmoji = styled.img`
  width: ${(props) => (props.reply ? "25px" : "40px")};
`;

const SmallText = styled.p`
  margin: 0;
  font-size: 12px;
`;

const CommentContainer = styled.div`
  background: #ececec;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  width: 80%;
  justify-self: right;
  padding: 10px;
  display: flex;
`;

const RatingAndComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const PoopContainer = styled.div`
  align-self: flex-start;
`;

const RatingPoop = styled.img`
  width: 22px;
`;

const Comment = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: left;
`;

const LikesContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heart = styled.img`
  width: 16px;
`;

function Reply() {
  const [reply, setReply] = useState("");

  // TODO: make post request to backend when comment is submitted, and rerender
  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <LineContainer reply>
      <ReplyContainer
        placeholder="Reply"
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        onKeyDown={() => handleSubmit()}
      />
    </LineContainer>
  );
}

const ReplyContainer = styled.input`
  background: #ececec;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  width: 80%;
  gap: 10px;
  margin-left: auto;
  padding: 10px;
  display: flex;

  width: calc(80% - 20px);
  border: none;
  outline: none;

  font-size: 14px;
  text-align: left;
`;
