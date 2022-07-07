import styled from "styled-components";

export const LineContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 25px;
  padding: ${(props) => (props.reply ? "1% 5%" : "2% 5%")};

  ${(props) =>
    props.reply ? "width: 80%; left: 20%; position: relative;" : ""}
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
`;

export const PoopEmojiWrapper = styled.div`
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

export const PoopEmoji = styled.img`
  width: ${(props) => (props.reply ? "25px" : "40px")};
`;

export const SmallText = styled.p`
  margin: 0;
  font-size: 12px;
`;

export const CommentContainer = styled.div`
  background: #ececec;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  width: 80%;
  justify-self: right;
  padding: 10px;
  display: flex;
`;

export const RatingAndComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Comment = styled.p`
  margin: 0;
  font-size: 14px;
  text-align: left;
`;

export const LikesContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heart = styled.img`
  width: 16px;
`;

export const PoopContainer = styled.div`
  align-self: flex-start;
`;
