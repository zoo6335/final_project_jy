import styled from "styled-components";
import ContentWriter from "./CommentWriter";

const Comment = () => {
  return (
    <BOX>
      <ContentWriter/>
      <div>
        <button className="deleteBt">삭제</button>
        <p className="comment">Writer Nickname</p>
        <p className="comment">content of comment...rarararararkrk rl im zoo.. </p>
        <hr />
        <p className="comment"> </p>
      </div>
    </BOX>
  );
};
const BOX = styled.div`
    font-family: "Alfa Slab One", cursive;
    margin: 0 auto;
`;

export default Comment;
